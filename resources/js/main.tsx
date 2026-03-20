import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";

// Error boundary for production
window.addEventListener('error', (event) => {
  console.error('[Global Error]', {
    message: event.message,
    filename: event.filename,
    lineno: event.lineno,
    colno: event.colno,
    stack: event.error?.stack,
    url: window.location.href,
    timestamp: new Date().toISOString()
  });
  
  // Log to localStorage for debugging
  const errorLog = JSON.parse(localStorage.getItem('error_log') || '[]');
  errorLog.push({
    type: 'error',
    message: event.message,
    filename: event.filename,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('error_log', JSON.stringify(errorLog.slice(-10))); // Keep last 10 errors
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('[Unhandled Promise Rejection]', {
    reason: event.reason,
    url: window.location.href,
    timestamp: new Date().toISOString()
  });
  
  // Log to localStorage
  const errorLog = JSON.parse(localStorage.getItem('error_log') || '[]');
  errorLog.push({
    type: 'unhandledrejection',
    reason: event.reason?.message || event.reason,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('error_log', JSON.stringify(errorLog.slice(-10)));
});

// Performance monitoring
if (window.performance) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = {
        domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
        load: performance.timing.loadEventEnd - performance.timing.navigationStart,
        firstPaint: performance.getEntriesByType('paint')[0]?.startTime,
        firstContentfulPaint: performance.getEntriesByType('paint')[1]?.startTime,
        url: window.location.href,
        timestamp: new Date().toISOString()
      };
      
      console.log('[Performance Metrics]', perfData);
      localStorage.setItem('perf_metrics', JSON.stringify(perfData));
    }, 0);
  });
}

const root = createRoot(document.getElementById("root")!);

try {
  root.render(<App />);
} catch (error) {
  console.error('[React Render Error]', error);
  document.getElementById('root')!.innerHTML = `
    <div style="padding: 40px; font-family: sans-serif; color: #ff4444;">
      <h2>Ошибка загрузки приложения</h2>
      <p>Попробуйте обновить страницу или очистите кэш браузера.</p>
      <pre style="background: #f0f0f0; padding: 16px; border-radius: 8px; overflow: auto;">
        ${error instanceof Error ? error.stack : String(error)}
      </pre>
    </div>
  `;
}
