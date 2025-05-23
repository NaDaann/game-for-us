import { useState, useEffect, useCallback } from "react";

const colorCache = new Map<string, string>();
const MAX_CANVAS_SIZE = 50;
const DEFAULT_COLOR = 'rgb(0, 0, 0)';

export function useDominantColor(src: string | null | undefined): string {
    const [dominantColor, setDominantColor] = useState<string>(DEFAULT_COLOR);
    
    const calculateDominantColor = useCallback((imgSrc: string): void => {
        if (!imgSrc) return;
        
        if (colorCache.has(imgSrc)) {
            setDominantColor(colorCache.get(imgSrc)!);
            return;
        }
        
        const img = new Image();
        img.crossOrigin = 'anonymous';
        
        img.onload = () => {
            const scaleFactor = Math.min(1, MAX_CANVAS_SIZE / Math.max(img.width, img.height));
            const width = Math.round(img.width * scaleFactor);
            const height = Math.round(img.height * scaleFactor);
            
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                setDominantColor(DEFAULT_COLOR);
                return;
            }
            
            ctx.drawImage(img, 0, 0, width, height);
            const data = ctx.getImageData(0, 0, width, height).data;
            
            let r = 0, g = 0, b = 0, count = 0;
            const sampleRate = Math.max(1, Math.floor(width * height / 5000));
            
            for (let i = 0; i < data.length; i += 4 * sampleRate) {
                const alpha = data[i + 3];
                if (alpha > 0) {
                    r += data[i];
                    g += data[i + 1];
                    b += data[i + 2];
                    count++;
                }
            }
            
            let result = DEFAULT_COLOR;
            
            if (count > 0) {
                r = Math.round(r / count);
                g = Math.round(g / count);
                b = Math.round(b / count);
                result = `rgb(${r}, ${g}, ${b})`;
            }
            
            colorCache.set(imgSrc, result);
            setDominantColor(result);
        };
        
        img.onerror = () => {
            setDominantColor(DEFAULT_COLOR);
        };
        
        img.src = imgSrc;
    }, []);
    
    useEffect(() => {
        if (src) {
            calculateDominantColor(src);
        } else {
            setDominantColor(DEFAULT_COLOR);
        }
    }, [src, calculateDominantColor]);
    
    return dominantColor;
}