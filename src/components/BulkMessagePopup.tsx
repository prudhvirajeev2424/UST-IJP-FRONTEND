// import React, { useRef, useEffect } from "react";
// import uploadIcon from "../assets/Icon feather-upload-cloud (1).svg";

// // Singleton toast service (inline for demonstration)
// let toastRoot: any = null;
// let toastContainer: HTMLDivElement | null = null;
// let toasts: any[] = [];

// function showToast(message: string, opts?: { type?: 'success' | 'error' | 'info'; duration?: number }) {
//   if (typeof document === 'undefined') return;

//   if (!toastContainer) {
//     toastContainer = document.createElement('div');
//     toastContainer.id = 'toast-root';
//     document.body.appendChild(toastContainer);
//   }

//   const id = String(Date.now()) + Math.random().toString(36).slice(2, 9);
//   const toast = { id, message, type: opts?.type ?? 'info', duration: opts?.duration ?? 3000 };

//   // Simple toast implementation
//   const toastEl = document.createElement('div');
//   toastEl.className = 'toast-notification';
//   toastEl.style.cssText = `
//     display: flex;
//     align-items: center;
//     gap: 12px;
//     width: 624px;
//     height: 70px;
//     background: ${toast.type === 'success' ? '#01B27C' : toast.type === 'error' ? '#E53E3E' : '#334155'};
//     border-radius: 8px;
//     padding: 0 20px;
//     box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
//     color: #FFFFFF;
//     font-family: Rubik, system-ui, -apple-system, sans-serif;
//     font-size: 14px;
//     font-weight: 500;
//     margin-bottom: 12px;
//     animation: slideDown 0.35s ease-out;
//   `;
//   toastEl.innerHTML = `
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//       <polyline points="22 4 12 14.01 9 11.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//     </svg>
//     <span>${message}</span>
//   `;

//   if (!toastContainer.querySelector('.toast-container')) {
//     const wrapper = document.createElement('div');
//     wrapper.className = 'toast-container';
//     wrapper.style.cssText = 'position: fixed; left: 50%; top: 20px; transform: translateX(-50%); z-index: 9999;';
//     toastContainer.appendChild(wrapper);

//     const style = document.createElement('style');
//     style.textContent = `
//       @keyframes slideDown {
//         from { transform: translateY(-100%); opacity: 0; }
//         to { transform: translateY(0); opacity: 1; }
//       }
//     `;
//     document.head.appendChild(style);
//   }

//   toastContainer.querySelector('.toast-container')?.appendChild(toastEl);

//   setTimeout(() => {
//     toastEl.style.animation = 'slideUp 0.3s ease-out';
//     setTimeout(() => toastEl.remove(), 300);
//   }, toast.duration);
// }

// const BulkMessagePopup: React.FC = () => {
//   const textareaRef = useRef<HTMLTextAreaElement | null>(null);

//   const adjustHeight = (e?: React.FormEvent<HTMLTextAreaElement>) => {
//     const el = e
//       ? (e.currentTarget as HTMLTextAreaElement)
//       : textareaRef.current;
//     if (!el) return;
//     el.style.height = "auto";
//     el.style.height = `${el.scrollHeight}px`;
//     el.style.overflow = "hidden";
//   };

//   useEffect(() => {
//     // set initial height based on defaultValue
//     if (textareaRef.current) {
//       adjustHeight();
//     }
//   }, []);

//   const handleSend = () => {
//     // Trigger the toast notification on send
//     showToast('Message sent to all employees in Talent pool', { type: 'success', duration: 5000 });

//     // Add your additional logic for sending the message here
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex h-[1080px] w-[1920px] items-center justify-center bg-[#231F20] bg-opacity-70">
//       <div className="relative h-[580px] w-[601px] rounded-[10px] bg-[#FFFFFF] shadow-xl">
//         {/* Header */}
//         <div className="flex h-[70px] w-[601px] items-center justify-between rounded-t-[10px] bg-[#F2F7F8] px-[32px] py-[24px]">
//           <h2 className="m-0 h-[22px] w-[119px] whitespace-nowrap text-left text-[18px] font-medium leading-[22px] text-[#231F20]">
//             New message
//           </h2>
//           <button className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center border-none bg-transparent text-[20px] leading-none text-[#7A7480] hover:text-[#231F20]">
//             ✕
//           </button>
//         </div>

//         {/* Body */}
//         <div className="px-[32px] py-[24px] space-y-[16px]">
//           {/* Message */}
//           <div className="relative h-[174px] w-[521px] rounded-[5px] border border-[#D7E0E3] bg-[#FFFFFF] p-[16px]">
//             <p className="absolute -top-[10px] left-[16px] bg-white px-[8px] text-left text-[14px] font-normal leading-[20px] text-[#7A7480]">
//               Message
//             </p>
//             <textarea
//               ref={textareaRef}
//               className="h-[137px] w-full resize-none border-none bg-transparent text-left text-[14px] leading-[20px] text-[#231f20] outline-none"
//               placeholder="Hey team,
// welcome to talent pool. refurbish your skills and await your next opportunity! Meanwhile, please complete the tasks assigned to you and connect with fellow peers to expand your professional network.

// Regards,
// Andrea Stephen"
//               rows={4}
//               defaultValue=""
//               onInput={adjustHeight}
//             />
//           </div>

//           {/* Attach Documents */}
//           <div>
//             <p className="mb-[6px] text-left text-[16px] font-medium leading-[20px] text-[#231F20]">
//               Attach Documents
//             </p>
//             <p className="mb-[16px] text-left text-[14px] leading-[16px] text-[#7A7480]">
//               Attach any documents if necessary
//             </p>
//             <div className="flex h-[126px] w-[521px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-dashed border-[#D7E0E3] bg-[#F7F9FA] text-[13px] text-[#7A7480] transition-colors hover:border-[#006E74] hover:bg-[#F9FBFB]">
//               <div className="mb-[12px]">
//                 <img src={uploadIcon} alt="upload" className="w-[33px] h-[27px]" />
//               </div>
//               <p className="m-0 text-center text-[14px]">
//                 Drag and drop to upload or{" "}
//                 <br />
//                 <span className="font-normal text-[14px] text-[#006E74]">
//                   Browse
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="flex justify-center gap-[16px] border-[#E5E5E5] px-[32px] py-[23px]">
//           <button className="h-[49px] w-[90px] cursor-pointer rounded-[4px] border border-[#231F20] bg-white text-[16px] font-normal text-[#231F20] transition-colors hover:bg-[#F5F5F5]">
//             Cancel
//           </button>
//           <button onClick={handleSend} className="h-[49px] w-[78px] cursor-pointer rounded-[4px] border-none bg-[#006E74] text-[16px] font-normal text-white transition-colors hover:bg-[#005a5f]">
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BulkMessagePopup;

import React, { useRef, useEffect, useState } from "react";
import uploadIcon from "../assets/Icon feather-upload-cloud (1).svg";

// Singleton toast service (inline for demonstration)
let toastRoot: any = null;
let toastContainer: HTMLDivElement | null = null;
let toasts: any[] = [];

// function showToast(message: string, opts?: { type?: 'success' | 'error' | 'info'; duration?: number }) {
//   if (typeof document === 'undefined') return;

//   if (!toastContainer) {
//     toastContainer = document.createElement('div');
//     toastContainer.id = 'toast-root';
//     document.body.appendChild(toastContainer);
//   }

//   const id = String(Date.now()) + Math.random().toString(36).slice(2, 9);
//   const toast = { id, message, type: opts?.type ?? 'info', duration: opts?.duration ?? 3000 };

//   // Simple toast implementation
//   const toastEl = document.createElement('div');
//   toastEl.className = 'toast-notification';
//   toastEl.style.cssText = `
//     display: flex;
//     align-items: center;
//     gap: 12px;
//     width: 624px;
//     height: 70px;
//     background: ${toast.type === 'success' ? '#01B27C' : toast.type === 'error' ? '#E53E3E' : '#334155'};
//     border-radius: 8px;
//     padding: 0 20px;
//     box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
//     color: #FFFFFF;
//     font-family: Rubik, system-ui, -apple-system, sans-serif;
//     font-size: 14px;
//     font-weight: 500;
//     margin-bottom: 12px;
//     animation: slideDown 0.35s ease-out;
//   `;
//   toastEl.innerHTML = `
//     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//       <polyline points="22 4 12 14.01 9 11.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//     </svg>
//     <span>${message}</span>
//   `;

//   if (!toastContainer.querySelector('.toast-container')) {
//     const wrapper = document.createElement('div');
//     wrapper.className = 'toast-container';
//     wrapper.style.cssText = 'position: fixed; left: 50%; top: 20px; transform: translateX(-50%); z-index: 9999;';
//     toastContainer.appendChild(wrapper);

//     const style = document.createElement('style');
//     style.textContent = `
//       @keyframes slideDown {
//         from { transform: translateY(-100%); opacity: 0; }
//         to { transform: translateY(0); opacity: 1; }
//       }
//     `;
//     document.head.appendChild(style);
//   }

//   toastContainer.querySelector('.toast-container')?.appendChild(toastEl);

//   setTimeout(() => {
//     toastEl.style.animation = 'slideUp 0.3s ease-out';
//     setTimeout(() => toastEl.remove(), 300);
//   }, toast.duration);
// }
function showToast(
  message: string,
  opts?: { type?: "success" | "error" | "info"; duration?: number }
) {
  if (typeof document === "undefined") return;

  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-root";
    document.body.appendChild(toastContainer);
  }

  const id = String(Date.now()) + Math.random().toString(36).slice(2, 9);
  const toast = {
    id,
    message,
    type: opts?.type ?? "info",
    duration: opts?.duration ?? 3000,
  };

  // Simple toast implementation
  const toastEl = document.createElement("div");
  toastEl.className = "toast-notification";
  toastEl.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 624px;
    height: 70px;
    background: ${
      toast.type === "success"
        ? "#01B27C"
        : toast.type === "error"
        ? "#E53E3E"
        : "#334155"
    };
    border-radius: 8px;
    padding: 0 20px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
    color: #FFFFFF;
    font-family: Rubik, system-ui, -apple-system, sans-serif;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 12px;
    animation: slideDown 0.35s ease-out;
  `;
  // Structure the toast so the icon + message sit on the left and the close button is on the right
  toastEl.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;flex:1">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <polyline points="22 4 12 14.01 9 11.01" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span style="flex:1;text-align:left">${message}</span>
    </div>
    <button class="toast-close-btn" aria-label="Close" style="background: none; border: none; color: white; font-size: 18px; cursor: pointer;">×</button>
  `;

  // Add event listener to close button
  const closeButton = toastEl.querySelector(".toast-close-btn");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      toastEl.style.animation = "slideUp 0.3s ease-out";
      setTimeout(() => toastEl.remove(), 300);
    });
  }

  if (!toastContainer.querySelector(".toast-container")) {
    const wrapper = document.createElement("div");
    wrapper.className = "toast-container";
    wrapper.style.cssText =
      "position: fixed; left: 50%; top: 20px; transform: translateX(-50%); z-index: 9999;";
    toastContainer.appendChild(wrapper);

    const style = document.createElement("style");
    style.textContent = `
      @keyframes slideDown {
        from { transform: translateY(-100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    `;
    document.head.appendChild(style);
  }

  toastContainer.querySelector(".toast-container")?.appendChild(toastEl);

  setTimeout(() => {
    toastEl.style.animation = "slideUp 0.3s ease-out";
    setTimeout(() => toastEl.remove(), 300);
  }, toast.duration);
}

const BulkMessagePopup: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(true); // Modal open state

  const adjustHeight = (e?: React.FormEvent<HTMLTextAreaElement>) => {
    const el = e
      ? (e.currentTarget as HTMLTextAreaElement)
      : textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = "hidden";
  };

  useEffect(() => {
    // set initial height based on defaultValue
    if (textareaRef.current) {
      adjustHeight();
    }
  }, []);

  const handleSend = () => {
    // Close the modal before showing the toast notification
    setIsModalOpen(false);

    // Trigger the toast notification after a small delay (to allow modal to close first)
    setTimeout(() => {
      showToast("Message sent to all employees in Talent pool", {
        type: "success",
      });
    }, 300); // Delay toast slightly to ensure modal has closed first
  };

  return (
    <>
      {/* Render the modal only if it's open */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex h-[1080px] w-[1920px] items-center justify-center bg-[#231F20] bg-opacity-70">
          <div className="relative h-[580px] w-[601px] rounded-[10px] bg-[#FFFFFF] shadow-xl">
            {/* Header */}
            <div className="flex h-[70px] w-[601px] items-center justify-between rounded-t-[10px] bg-[#F2F7F8] px-[32px] py-[24px]">
              <h2 className="m-0 h-[22px] w-[119px] whitespace-nowrap text-left text-[18px] font-medium leading-[22px] text-[#231F20]">
                New message
              </h2>
              <button className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center border-none bg-transparent text-[20px] leading-none text-[#7A7480] hover:text-[#231F20]">
                ✕
              </button>
            </div>

            {/* Body */}
            <div className="px-[32px] py-[24px] space-y-[16px]">
              {/* Message */}
              <div className="relative h-[174px] w-[521px] rounded-[5px] border border-[#D7E0E3] bg-[#FFFFFF] p-[16px]">
                <p className="absolute -top-[10px] left-[16px] bg-white px-[8px] text-left text-[14px] font-normal leading-[20px] text-[#7A7480]">
                  Message
                </p>
                <textarea
                  ref={textareaRef}
                  className="h-[137px] w-full resize-none border-none bg-transparent text-left text-[14px] leading-[20px] text-[#231f20] outline-none"
                  placeholder="Hey team,
welcome to talent pool. refurbish your skills and await your next opportunity! Meanwhile, please complete the tasks assigned to you and connect with fellow peers to expand your professional network.

Regards,
Andrea Stephen"
                  rows={4}
                  defaultValue=""
                  onInput={adjustHeight}
                />
              </div>

              {/* Attach Documents */}
              <div>
                <p className="mb-[6px] text-left text-[16px] font-medium leading-[20px] text-[#231F20]">
                  Attach Documents
                </p>
                <p className="mb-[16px] text-left text-[14px] leading-[16px] text-[#7A7480]">
                  Attach any documents if necessary
                </p>
                <div className="flex h-[126px] w-[521px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-dashed border-[#D7E0E3] bg-[#F7F9FA] text-[13px] text-[#7A7480] transition-colors hover:border-[#006E74] hover:bg-[#F9FBFB]">
                  <div className="mb-[12px]">
                    <img
                      src={uploadIcon}
                      alt="upload"
                      className="w-[33px] h-[27px]"
                    />
                  </div>
                  <p className="m-0 text-center text-[14px]">
                    Drag and drop to upload or <br />
                    <span className="font-normal text-[14px] text-[#006E74]">
                      Browse
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-center gap-[16px] border-[#E5E5E5] px-[32px] py-[23px]">
              <button className="h-[49px] w-[90px] cursor-pointer rounded-[4px] border border-[#231F20] bg-white text-[16px] font-normal text-[#231F20] transition-colors hover:bg-[#F5F5F5]">
                Cancel
              </button>
              <button
                onClick={handleSend}
                className="h-[49px] w-[78px] cursor-pointer rounded-[4px] border-none bg-[#006E74] text-[16px] font-normal text-white transition-colors hover:bg-[#005a5f]"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BulkMessagePopup;
