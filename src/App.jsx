import Calculator from "./components/Calculator";
import "./style.css";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-[100dvh]">
        <Calculator />
        <div className="absolute bottom-3 font-robotomono text-[12px] text-center [text-shadow:_0_2px_5px_rgb(0_0_0_/_20%)]">
          <span>
            Calculator referencing Windows's Calculator with{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              className="text-[#087EA4]">
              React
            </a>{" "}
            &{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="text-[#0EA5E9]">
              TailwindCSS
            </a>{" "}
            by{" "}
            <a href="https://github.com/Schyro" target="_blank">
              Schyro
            </a>
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
