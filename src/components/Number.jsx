import React from "react";

export default function Number(props) {
  const { value, text, operation, setOperation } = props;

  const handleClick = () => {
    switch (value) {
      case "negate":
        if (!operation || operation == "0") return;
        if (operation.at(0) == "-") return setOperation(operation.slice(1));
        setOperation("-" + operation);
        break;
      case ",":
        if (!operation) return setOperation("0" + value);
        setOperation(operation + value);
        break;

      default:
        if (operation == "0") return setOperation(value);
        setOperation(operation + value);
        break;
    }
  };

  return (
    <button
      onClick={() => handleClick()}
      className="w-20 h-14 m-[1px] bg-[#6c6c6ca4] hover:bg-[#474747cf] rounded-md">
      {text}
    </button>
  );
}
