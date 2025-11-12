'use client';

import { useState, useEffect, useRef } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface HtmlCssEditorProps {
  initialHtml?: string;
  initialCss?: string;
  onCodeChange?: (html: string, css: string) => void;
  readonly?: boolean;
}

export default function HtmlCssEditor({ 
  initialHtml = '', 
  initialCss = '', 
  onCodeChange,
  readonly = false 
}: HtmlCssEditorProps) {
  const [html, setHtml] = useState(initialHtml);
  const [css, setCss] = useState(initialCss);
  const [activeTab, setActiveTab] = useState('html');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Update preview when code changes
  useEffect(() => {
    updatePreview();
    onCodeChange?.(html, css);
  }, [html, css]);

  const updatePreview = () => {
    if (!iframeRef.current) return;

    const combinedCode = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <style>
          body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
          ${css}
        </style>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `;

    const blob = new Blob([combinedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    iframeRef.current.src = url;

    // Clean up the blob URL after a short delay
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-4">
      {/* Editor Section */}
      <div className="flex-1 min-h-0">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full flex flex-col">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="html">HTML</TabsTrigger>
            <TabsTrigger value="css">CSS</TabsTrigger>
          </TabsList>
          
          <TabsContent value="html" className="flex-1 mt-2">
            <div className="h-full border rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-3 py-2 border-b">
                <span className="text-sm font-medium text-gray-600">index.html</span>
              </div>
              <textarea
                value={html}
                onChange={(e) => !readonly && setHtml(e.target.value)}
                readOnly={readonly}
                className="w-full h-full p-4 font-mono text-sm resize-none border-none outline-none"
                placeholder="Enter your HTML here..."
                style={{ minHeight: '400px' }}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="css" className="flex-1 mt-2">
            <div className="h-full border rounded-lg overflow-hidden">
              <div className="bg-gray-100 px-3 py-2 border-b">
                <span className="text-sm font-medium text-gray-600">style.css</span>
              </div>
              <textarea
                value={css}
                onChange={(e) => !readonly && setCss(e.target.value)}
                readOnly={readonly}
                className="w-full h-full p-4 font-mono text-sm resize-none border-none outline-none"
                placeholder="Enter your CSS here..."
                style={{ minHeight: '400px' }}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Preview Section */}
      <div className="flex-1 min-h-0">
        <div className="h-full border rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-3 py-2 border-b flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">Preview</span>
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
            </div>
          </div>
          <iframe
            ref={iframeRef}
            className="w-full h-full"
            style={{ minHeight: '400px' }}
            sandbox="allow-scripts"
            title="Preview"
          />
        </div>
      </div>
    </div>
  );
}