import { useEffect } from "react";

export default function Eval(props) {
  const { value, text, operation, setOperation, before, setBefore } = props;

  const handleClick = () => {
    let newOperation = operation.replaceAll(",", ".").replaceAll("x", "*");
    let beforeOperation = before.replaceAll(",", ".").replaceAll("x", "*");

    if (!operation) {
      setOperation(
        parse(beforeOperation + "0")
          .toString()
          .replaceAll(".", ",")
      );
      setBefore("");
      return;
    }
    setOperation(
      parse(beforeOperation + newOperation)
        .toString()
        .replaceAll(".", ",")
    );
    setBefore("");
  };

  function parse(operation) {
    return Function(`'use strict'; return (${operation})`)();
  }

  return (
    <button
      onClick={() => handleClick()}
      className="w-20 h-14 m-[1px] bg-[#f283ff] hover:bg-[#e068ed] rounded-md">
      {text}
    </button>
  );
}
