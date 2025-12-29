import { createRoot } from "react-dom/client";
import type { Root } from "react-dom/client";
import { CheckCircle, X, Info } from "lucide-react";

type ToastType = "success" | "error" | "info";

interface ToastItem {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
}

let root: Root | null = null;
let container: HTMLDivElement | null = null;
let toasts: ToastItem[] = [];

function ensureRoot() {
  if (typeof document === "undefined") return;
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-root";
    document.body.appendChild(container);
  }
  if (!root && container) {
    root = createRoot(container);
  }
}

function removeToast(id: string) {
  toasts = toasts.filter((t) => t.id !== id);
  render();
}

function render() {
  if (!root) return;
  root.render(
    <>
      <div
        style={{
          position: "fixed",
          left: "50%",
          top: "20px",
          transform: "translateX(-50%)",
          zIndex: 9999,
        }}
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="animate-slideDown"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: "624px",
              height: "70px",
              background:
                toast.type === "success"
                  ? "#01B27C"
                  : toast.type === "error"
                  ? "#FC6A59"
                  : "#334155",
              borderRadius: "8px",
              padding: "0 20px",
              boxShadow: "0px 3px 6px rgba(0,0,0,0.12)",
              color: "#FFFFFF",
              fontFamily: "Rubik, system-ui, -apple-system, sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0px",
              marginBottom: "12px",
            }}
          >
            {toast.type === "success" ? (
              <CheckCircle size={24} color="#FFFFFF" />
            ) : (
              // Use the 'Info' circle icon for both error and info types to match the
              // screenshot where the red toast shows an "i" in a circle.
              <Info size={24} color="#FFFFFF" />
            )}
            <span> {toast.message} </span>
            <button
              onClick={() => removeToast(toast.id)}
              aria-label="Dismiss toast"
              style={{
                marginLeft: "auto",
                background: "transparent",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                cursor: "pointer",
              }}
            >
              <X size={20} color="#FFFFFF" />
            </button>
          </div>
        ))}

        <style>{`
          @keyframes slideDown {
            from { transform: translateY(-100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideDown { animation: slideDown 0.35s ease-out; }
        `}</style>
      </div>
    </>
  );
}

export function showToast(
  message: string,
  opts?: { type?: ToastType; duration?: number }
) {
  ensureRoot();
  const id = String(Date.now()) + Math.random().toString(36).slice(2, 9);
  const toast: ToastItem = {
    id,
    message,
    type: opts?.type ?? "info",
    duration: opts?.duration ?? 3000,
  };
  toasts.push(toast);
  render();

  setTimeout(() => {
    removeToast(id);
  }, toast.duration);
}

export default showToast;
