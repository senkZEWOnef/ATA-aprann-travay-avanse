'use client';
import { useState, useRef, useCallback } from 'react';

export function useAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playText = useCallback((text: string, lang: string = 'en-US') => {
    // Stop any current speech
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // Use Web Speech API for text-to-speech
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.8;
      utterance.pitch = 1;

      utterance.onstart = () => {
        setIsPlaying(true);
        console.log('Audio started:', text);
      };

      utterance.onend = () => {
        setIsPlaying(false);
        console.log('Audio ended');
      };

      utterance.onerror = (event) => {
        setIsPlaying(false);
        console.error('Speech synthesis error:', event);
      };

      setIsPlaying(true);
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn('Speech synthesis not supported in this browser');
    }
  }, []);

  const playAudioFile = useCallback((audioUrl: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(audioUrl);
    audioRef.current = audio;

    audio.onloadstart = () => {
      console.log('Loading audio:', audioUrl);
    };

    audio.onplay = () => {
      setIsPlaying(true);
      console.log('Audio playing:', audioUrl);
    };

    audio.onended = () => {
      setIsPlaying(false);
      console.log('Audio ended');
    };

    audio.onerror = (error) => {
      setIsPlaying(false);
      console.error('Audio error:', error);
    };

    audio.play().catch(error => {
      console.error('Failed to play audio:', error);
      setIsPlaying(false);
    });
  }, []);

  const stop = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  }, []);

  return {
    isPlaying,
    playText,
    playAudioFile,
    stop
  };
}