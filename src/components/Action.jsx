import React from "react";

export default function Action(props) {
  const { value, text, setOperation, operation, setBefore, before } = props;

  const handleClick = () => {
    if (!operation && !before) return;
    switch (value) {
      case "c":
        setBefore("");
        setOperation("");
        break;
      case "ce":
        setOperation("");
        break;
      case "backspace":
        if (!operation) return;
        setOperation(operation.slice(0, -1));
        break;

      default:
        if (!operation) return;
        setBefore(operation + value);
        setOperation("");
        break;
    }
  };
  return (
    <button
      onClick={() => handleClick()}
      className="w-20 h-14 m-[1px] bg-[#474747cf] hover:bg-[#6c6c6ca4] rounded-md flex justify-center items-center">
      {text}
    </button>
  );
}
