import React from "react";

const BulkMessagePopup: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 font-[Rubik]">
      {/* Modal Container */}
      <div 
        className="relative w-[601px] rounded-[10px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
        style={{ transform: 'scale(1)', transformOrigin: 'center' }}
      >
        {/* Header */}
        <div className="flex h-[70px] items-center justify-between border-b border-[#E5E5E5] px-[32px]">
          <h2 className="m-0 text-[18px] font-normal leading-[24px] text-[#231F20]">
            New message
          </h2>

          <button className="flex h-[24px] w-[24px] cursor-pointer items-center justify-center border-none bg-transparent text-[20px] leading-none text-[#7A7480] hover:text-[#231F20]">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-[32px] py-[24px]">
          {/* Message */}
          <div className="mb-[24px]">
            <label className="mb-[8px] block text-left text-[13px] font-normal leading-[17px] text-[#231F20]">
              Message
            </label>

            <textarea
              className="h-[120px] w-full resize-none rounded-[5px] border border-[#D7E0E3] bg-white p-[12px] text-[13px] leading-[20px] text-[#231F20] outline-none focus:border-[#006E74]"
              defaultValue={`Hey team,

Welcome to talent pool, refurbish your skills and await your next opportunity! Meanwhile, please complete the tasks assigned to you and connect with fellow peers to expand your professional network.`}
            />
          </div>

          {/* Attach Documents */}
          <div>
            <p className="mb-[6px] text-center text-[13px] font-normal leading-[20px] text-[#231F20]">
              Attach Documents
            </p>

            <p className="mb-[16px] text-center text-[11px] leading-[16px] text-[#7A7480]">
              Attach any documents if necessary
            </p>

            <div className="flex h-[180px] w-full cursor-pointer flex-col items-center justify-center rounded-[6px] border-2 border-dashed border-[#D7E0E3] bg-white text-[13px] text-[#7A7480] transition-colors hover:border-[#006E74] hover:bg-[#F9FBFB]">
              {/* Cloud Upload Icon */}
              <div className="mb-[12px]">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38 32C41.314 32 44 29.314 44 26C44 22.686 41.314 20 38 20C37.674 20 37.354 20.023 37.04 20.066C36.38 14.966 32 11 26.6 11C20.75 11 16 15.75 16 21.6C16 22.1 16.033 22.594 16.097 23.077C12.574 23.98 10 27.167 10 31C10 35.527 13.673 39.2 18.2 39.2H38"
                    stroke="#006E74"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M29 29L24 24L19 29"
                    stroke="#006E74"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24 24V36"
                    stroke="#006E74"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="m-0 text-center text-[13px]">
                Drag and drop to upload or{" "}
                <span className="font-normal text-[#006E74] underline">
                  Browse
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center gap-[16px] border-t border-[#E5E5E5] px-[32px] py-[20px]">
          <button className="h-[44px] w-[100px] cursor-pointer rounded-[4px] border border-[#231F20] bg-white text-[13px] font-normal text-[#231F20] transition-colors hover:bg-[#F5F5F5]">
            Cancel
          </button>

          <button className="h-[44px] w-[100px] cursor-pointer rounded-[4px] border-none bg-[#006E74] text-[13px] font-normal text-white transition-colors hover:bg-[#005a5f]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkMessagePopup;