import { useRef, useState } from "react";
import Number from "./Number";
import Action from "./Action";
import Eval from "./Eval";

export default function Calculator() {
  const [before, setBefore] = useState("");
  const [operation, setOperation] = useState("");

  return (
    <>
      <div className="bg-[#2b2b2b] p-2 rounded-md text-white text-[18px] font-poppins">
        <div className=" h-20 flex flex-col justify-center items-end rounded-md mb-[1px] p-2 text text-[30px] font-semibold">
          {before ? (
            <p className="text-[12px] font-normal text-[#ffffff7d]">{before}</p>
          ) : (
            ""
          )}
          {operation ? operation : "0"}
        </div>
        <div className="flex">
          <Action
            text="CE"
            value="ce"
            setOperation={setOperation}
            operation={operation}
            setBefore={setBefore}
            before={before}
          />
          <Action
            text="C"
            value="c"
            setOperation={setOperation}
            operation={operation}
            setBefore={setBefore}
            before={before}
          />
          <Action
            text={<ion-icon name="backspace-outline"></ion-icon>}
            value="backspace"
            setOperation={setOperation}
            operation={operation}
            setBefore={setBefore}
            before={before}
          />
          <Action
            text="/"
            value="/"
            setOperation={setOperation}
            operation={operation}
            setBefore={setBefore}
            before={before}
          />
        </div>
        <div className="flex">
          <Number
            text="7"
            value="7"
            setOperation={setOperation}
            operation={operation}
          />
          <Number
            text="8"
            value="8"
            setOperation={setOperation}
            operation={operation}
          />
          <Number
            text="9"
            value="9"
            setOperation={setOperation}
            operation={operation}
          />
          <Action
            text="x"
            value="x"
            setOperation={setOperation}
            operation={operation}
            setBefore={setBefore}
            before={before}
          />
        </div>
        <div className="flex">
          <Number
            text="4"
            value="4"
            setOperation={setOperation}
            operation={operation}
          />
          <Number
            text="5"
            value="5"
            setOperation={setOperation}
            operation={operation}
          />
          <Number
            text="6"
            value="6"
            setOperation={setOperation}
            operation={operation}
          />
          <Action
            text="+"
            value="+"
            setOperation={setOperation}
            operation={operation}
            setBefore={setBefore}
            before={before}
          />
        </div>
        <div className="flex">
          <Number
            text="1"
            value="1"
            setOperation={setOperation}
            operation={operation}
          />
          <Number
            text="2"
            value="2"
            setOperation={setOperation}
            operation={operation}
          />
          <Number
            text="3"
            value="3"
            setOperation={setOperation}
            operation={operation}
          />
          <Action
            text="-"
            value="-"
            setOperation={setOperation}
            operation={operation}
            setBefore={setBefore}
            before={before}
          />
        </div>
        <div className="flex">
          <Number
            text="-/+"
            value="negate"
            setOperation={setOperation}
            operation={operation}
          />
          <Number
            text="0"
            value="0"
            setOperation={setOperation}
            operation={operation}
          />
          <Number
            text=","
            value=","
            setOperation={setOperation}
            operation={operation}
          />
          <Eval
            text="="
            value="eval"
            setOperation={setOperation}
            operation={operation}
            setBefore={setBefore}
            before={before}
          />
        </div>
      </div>
    </>
  );
}
