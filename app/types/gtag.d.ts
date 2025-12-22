// Types pour Google Analytics (gtag.js)
export {};

declare global {
  interface Window {
    gtag?: (
      command: 'consent' | 'config' | 'event' | 'js' | 'set',
      ...args: any[]
    ) => void;
    dataLayer?: any[];
  }
}