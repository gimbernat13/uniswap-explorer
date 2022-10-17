import { SwapWidget } from "@uniswap/widgets/dist/index.js";
import "@uniswap/widgets/dist/fonts.css";
import { darkTheme, lightTheme } from "@uniswap/widgets";

export function Swap() {
  return (
    <div className="Uniswap">
      <SwapWidget theme={true ? darkTheme : lightTheme} />
    </div>
  );
}
