import * as React from 'react'
import { CheckCircle, X } from 'lucide-react'

type ToastType = 'success' | 'error' | 'info'

interface ToastItem {
  id: string
  message: string
  type?: ToastType
  duration?: number
}

interface ToastContextValue {
  showToast: (message: string, opts?: { type?: ToastType; duration?: number }) => void
}

const ToastContext = React.createContext<ToastContextValue | null>(null)

export const useToast = () => {
  const ctx = React.useContext(ToastContext)
  if (!ctx) throw new Error('useToast must be used within a ToastProvider')
  return ctx
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = React.useState<ToastItem[]>([])

  const showToast = React.useCallback((message: string, opts?: { type?: ToastType; duration?: number }) => {
    const id = String(Date.now()) + Math.random().toString(36).slice(2, 9)
    const duration = opts?.duration ?? 3000
    const toast: ToastItem = { id, message, type: opts?.type ?? 'info', duration }
    setToasts((t) => [...t, toast])

    // Auto remove
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id))
    }, duration)
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts((t) => t.filter((x) => x.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast container - top centered */}
      <div style={{ position: 'fixed', left: '50%', top: '20px', transform: 'translateX(-50%)', zIndex: 9999 }}>
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="animate-slideDown"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              width: '624px',
              height: '70px',
              background: toast.type === 'success' ? '#01B27C' : toast.type === 'error' ? '#E53E3E' : '#334155',
              borderRadius: '8px',
              padding: '0 20px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
              color: '#FFFFFF',
              fontFamily: 'Rubik, system-ui, -apple-system, sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              letterSpacing: '0px'
            }}
          >
            <CheckCircle size={24} color="#FFFFFF" />
            <span> {toast.message} </span>
            <button
              onClick={() => removeToast(toast.id)}
              aria-label="Dismiss toast"
              style={{
                marginLeft: 'auto',
                background: 'transparent',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                cursor: 'pointer'
              }}
            >
              <X size={20} color="#FFFFFF" />
            </button>
          </div>
        ))}

        <style>{`
          @keyframes slideDown {
            /* Only animate vertically; horizontal centering is handled by the wrapper to avoid horizontal shift */
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideDown { animation: slideDown 0.4s ease-out; }
        `}</style>
      </div>
    </ToastContext.Provider>
  )
}

export default ToastProvider
