import React, { useRef, useEffect } from "react";
import uploadIcon from "../assets/Icon feather-upload-cloud (1).svg";

const BulkMessagePopup: React.FC = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex h-[1080px] w-[1920px] items-center justify-center  bg-[#231F20] bg-opacity-70">
      {/* Modal Container */}
      {/* <div
        className="relative w-[601px] h-[634px] rounded-[10px] bg-white shadow-[0_10px_25px_rgba(0,0,0,0.15)]"
        style={{ transform: "scale(1)", transformOrigin: "center" }}
      > */}
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
            <p className="mb-[6px] text-left  text-[16px] font-medium leading-[20px] text-[#231F20]">
              Attach Documents
            </p>

            <p className="mb-[16px] text-left text-[14px] leading-[16px] text-[#7A7480]">
              Attach any documents if necessary
            </p>

            <div className="flex h-[126px] w-[521px] cursor-pointer flex-col items-center justify-center rounded-[10px] border border-dashed border-[#D7E0E3] bg-[#F7F9FA] text-[13px] text-[#7A7480] transition-colors hover:border-[#006E74] hover:bg-[#F9FBFB]">
              {/* Cloud Upload Icon */}
              <div className="mb-[12px]">
                {/* feather-upload-cloud icon as image */}
                <img
                  src={uploadIcon}
                  alt="upload"
                  className="w-[33px] h-[27px]"
                />
              </div>

              <p className="m-0 text-center text-[14px]">
  Drag and drop to upload or{" "}
  <br />
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

          <button className="h-[49px] w-[78px] cursor-pointer rounded-[4px] border-none bg-[#006E74] text-[16px] font-normal text-white transition-colors hover:bg-[#005a5f]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default BulkMessagePopup;
