'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useLocale } from './LocaleProvider';

interface PythonExecutorProps {
  onOutput?: (output: string, isError?: boolean) => void;
  onExecutionStart?: () => void;
  onExecutionEnd?: () => void;
  onReady?: (executor: any) => void;
}

declare global {
  interface Window {
    pyodide: any;
    loadPyodide: () => Promise<any>;
  }
}

export default function PythonExecutor({ 
  onOutput = () => {}, 
  onExecutionStart = () => {}, 
  onExecutionEnd = () => {},
  onReady 
}: PythonExecutorProps) {
  const [pyodideInstance, setPyodideInstance] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const locale = useLocale();
  const executionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const initializePyodide = useCallback(async () => {
    if (isLoading || isInitialized) return;
    
    setIsLoading(true);
    onOutput(locale === 'ht' ? '🚀 Ap enstale Python...' : locale === 'fr' ? '🚀 Installation de Python...' : '🚀 Initializing Python...', false);

    try {
      // Load Pyodide script if not already loaded
      if (!window.loadPyodide) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js';
        script.async = true;
        
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      // Initialize Pyodide
      const pyodide = await window.loadPyodide();
      
      // Set up output capture using sys.stdout redirection
      pyodide.runPython(`
        import sys
        import io
        from js import window
        
        class JSOutputStream:
            def write(self, text):
                if text and text.strip():  # Only send non-empty text
                    if hasattr(window, 'python_output_handler'):
                        window.python_output_handler(text)
            
            def flush(self):
                pass
        
        # Redirect stdout to our custom stream
        sys.stdout = JSOutputStream()
      `);

      // Install commonly used packages
      await pyodide.loadPackage(['numpy', 'matplotlib']);
      
      // Set up the global output handler that Python will call
      (window as any).python_output_handler = (text: string) => {
        console.log('Python output received:', text); // Debug log
        onOutput(text, false);
      };
      
      setPyodideInstance(pyodide);
      setIsInitialized(true);
      onOutput('✅ ' + (locale === 'ht' ? 'Python pare!' : locale === 'fr' ? 'Python prêt!' : 'Python ready!'), false);
      
    } catch (error) {
      console.error('Failed to initialize Pyodide:', error);
      onOutput('❌ ' + (locale === 'ht' ? 'Erè nan chajman Python' : locale === 'fr' ? 'Erreur lors du chargement de Python' : 'Error loading Python'), true);
    } finally {
      setIsLoading(false);
    }
  }, [locale, onOutput, isLoading, isInitialized]);

  const executeCode = useCallback(async (code: string) => {
    if (!pyodideInstance) {
      await initializePyodide();
      return;
    }

    if (!code.trim()) {
      onOutput(locale === 'ht' ? '⚠️ Ou dwe ekri kòd yo ak kouri l' : locale === 'fr' ? '⚠️ Vous devez écrire du code pour l\'exécuter' : '⚠️ You need to write some code to run it', true);
      return;
    }

    onExecutionStart();
    
    // Clear any previous timeout
    if (executionTimeoutRef.current) {
      clearTimeout(executionTimeoutRef.current);
    }

    // Set a timeout for long-running code
    executionTimeoutRef.current = setTimeout(() => {
      onOutput('⏰ ' + (locale === 'ht' ? 'Kòd la pran twò tan, li rete' : locale === 'fr' ? 'Le code prend trop de temps, arrêté' : 'Code taking too long, stopped'), true);
      onExecutionEnd();
    }, 10000); // 10 second timeout

    try {
      onOutput('▶️ ' + (locale === 'ht' ? 'K ap kouri kòd...' : locale === 'fr' ? 'Exécution du code...' : 'Running code...') + '\n', false);
      
      console.log('Executing Python code:', code); // Debug log
      
      // Execute the code directly - Pyodide will handle output through our configured stdout/stderr
      const result = await pyodideInstance.runPythonAsync(code);
      
      console.log('Python execution result:', result); // Debug log
      
      // If code produces a result (like an expression), show it
      if (result !== undefined && result !== null) {
        onOutput(`${result}\n`, false);
      }
      
      onOutput('\n✅ ' + (locale === 'ht' ? 'Kòd la fini kouri ak siksè!' : locale === 'fr' ? 'Code exécuté avec succès!' : 'Code executed successfully!'), false);

    } catch (error: any) {
      const errorMessage = error.message || error.toString();
      onOutput(`❌ ${locale === 'ht' ? 'Erè:' : locale === 'fr' ? 'Erreur:' : 'Error:'} ${errorMessage}`, true);
    } finally {
      if (executionTimeoutRef.current) {
        clearTimeout(executionTimeoutRef.current);
      }
      onExecutionEnd();
    }
  }, [pyodideInstance, locale, onOutput, onExecutionStart, onExecutionEnd, initializePyodide]);

  // Auto-initialize when component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      initializePyodide();
    }, 1000); // Small delay to let the UI render first

    return () => {
      clearTimeout(timer);
      if (executionTimeoutRef.current) {
        clearTimeout(executionTimeoutRef.current);
      }
    };
  }, [initializePyodide]);

  // Expose methods through onReady callback
  useEffect(() => {
    if (onReady && pyodideInstance) {
      onReady({
        executeCode,
        isInitialized,
        isLoading,
        reinitialize: initializePyodide
      });
    }
  }, [pyodideInstance, isInitialized, isLoading, executeCode, initializePyodide, onReady]);

  // Return null since this is a headless component
  return null;
}