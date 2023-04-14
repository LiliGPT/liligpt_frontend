import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ClipboardCopyIcon from "@mui/icons-material/CopyAll";

export const CopyTextRow = ({ text }: any) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const textRef = React.useRef(null);

  const copyText = () => {
    // select text
    const range = document.createRange();
    range.selectNode(textRef.current!);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);

    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div
      className="flex items-center justify-between p-2 rounded-md bg-gray-800 cursor-pointer"
      onClick={() => copyText()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        <div className="mr-2">
          {isCopied ? (
            <CheckCircleIcon className="w-4 h-4 text-green-500" />
          ) : (
            <ClipboardCopyIcon className="w-4 h-4 text-gray-500" />
          )}
        </div>
        <div className="text-gray-300 text-sm" ref={textRef}>{text}</div>
      </div>
      {isHovered && (
        <div
          className="text-gray-600 text-sm cursor-pointer"
          onClick={() => copyText()}
        >
          Copy
        </div>
      )}
    </div>
  );
};