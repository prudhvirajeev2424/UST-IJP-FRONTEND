import React from "react";
import type { Application } from "../types/ApplicationProfile";
import { User } from "lucide-react";

// TableRow: renders one application row; only the first row is interactive
interface TableRowProps {
  application: Application;
  isFirst?: boolean;
}

export const TableRow: React.FC<TableRowProps> = ({
  application,
  isFirst = false,
}) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  /**
   * Return color tokens for the action pill. Kept inline for readability; if
   * design grows consider extracting to a shared constants file.
   */
  const getActionColor = (action: string) => {
    switch (action) {
      case "Shortlisted":
        return { color: "#01B27C", backgroundColor: "#D4F4E7" };
      case "Allocated":
        return { color: "#0097AC", backgroundColor: "#D4EEF3" };
      case "Rejected":
        return { color: "#FC6A59", backgroundColor: "#FFE5E1" };
      case "Pending":
        return { color: "#B77FB8", backgroundColor: "#F3E5F2" };
      case "Actioned":
        return { color: "#E6B800", backgroundColor: "#FFF4D4" };
      default:
        return { color: "#7A7480", backgroundColor: "#F2F2F2" };
    }
  };

  const actionStyle = getActionColor(application.action);

  const handleActivate = () => {
    // Dispatch a navigation event so the Navbar can render the Application
    // detail view. We keep the console log as a fallback for debugging.
    try {
      // Use the same 'view' convention as other TP Manager cards so the
      // Navbar can render `TP_Applications` when a row requests the
      // detailed applications view.
      window.dispatchEvent(
        new CustomEvent("navigate", {
          detail: {
            view: "ApplicationsDetail",
            fromApplicationId: application.id,
          },
        })
      );
    } catch (err) {
      // if CustomEvent isn't available for some reason, fallback to console
      console.log("open row", application.id);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleActivate();
    }
  };

  // Use a typed props object for the <tr> element. We intentionally keep the
  // inline style here so the table design stays identical.
  const trProps: React.HTMLAttributes<HTMLTableRowElement> = {
    style: { backgroundColor: "#FFFFFF" },
    className: isFirst ? "hover:bg-[#F8FBFB] cursor-pointer group" : "",
  };

  if (isFirst) {
    // Only the first row should be focusable / interactive per the UX spec.
    // These attributes are safe to add to a <tr> in modern browsers.
    (trProps as any).role = "button";
    (trProps as any).tabIndex = 0;
    (trProps as any).onClick = handleActivate;
    (trProps as any).onKeyDown = handleKeyDown;
  }

  return (
    // only the first row receives interactive handlers and the hover group
    <tr {...trProps}>
      <td
        className="px-2 py-2 overflow-visible relative"
        style={{ borderBottom: "2px solid #FFFFFF" }}
      >
        <div className="flex items-center gap-1">
          <div className="w-6 flex-shrink-0 -ml-1">
            {application.hasIcon && (
              <div
                className="relative z-50"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                {/* Circular user badge with #006E74 ring and matching icon color (tight fit) */}
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "2px solid #006E74",
                    boxSizing: "border-box",
                  }}
                >
                  <User className="w-3 h-3 text-[#006E74]" />
                </div>

                {showTooltip && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-8 z-[100] px-4 py-2 rounded-lg shadow-lg whitespace-nowrap"
                    style={{ backgroundColor: "#006E74", color: "#FFFFFF" }}
                  >
                    <div className="text-[13px] font-normal">
                      External request
                    </div>
                    <div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
                      style={{
                        borderLeft: "6px solid transparent",
                        borderRight: "6px solid transparent",
                        borderTop: "8px solid #006E74",
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              console.log("open sid", application.sid);
            }}
            className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px] flex-shrink-0 text-[#006E74] hover:underline"
            style={{ minWidth: "60px" }}
          >
            {application.sid}
          </a>
        </div>
      </td>
      <td className="px-2 py-2" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
          style={{ color: "#7A7480" }}
        >
          {application.uid}
        </span>
      </td>
      <td className="px-2 py-2" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
          style={{ color: "#7A7480" }}
        >
          {application.name}
        </span>
      </td>
      <td className="px-2 py-2" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            console.log("open role", application.role);
          }}
          className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px] text-[#006E74] hover:underline"
        >
          {application.role}
        </a>
      </td>
      <td className="px-2 py-2" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
          style={{ color: "#7A7480" }}
        >
          {application.location}
        </span>
      </td>
      <td className="px-2 py-2" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="font-rubik font-normal text-[14px] leading-[17px] tracking-[0px]"
          style={{ color: "#7A7480" }}
        >
          {application.date}
        </span>
      </td>
      <td className="px-4 py-3" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="inline-flex items-center justify-center w-[65px] h-[32px] rounded-full text-[14px] font-medium border-2"
          style={{
            color: "#01B27C",
            backgroundColor: "#FFFFFF",
            borderColor: "#01B27C",
          }}
        >
          {application.score}
        </span>
      </td>
      <td className="px-2 py-2" style={{ borderBottom: "2px solid #FFFFFF" }}>
        <span
          className="inline-flex items-center justify-center min-w-[95px] h-[30px] px-4 rounded-md text-[13px] font-normal"
          style={{
            color: actionStyle.color,
            backgroundColor: actionStyle.backgroundColor,
          }}
        >
          {application.action}
        </span>
      </td>
    </tr>
  );
};
