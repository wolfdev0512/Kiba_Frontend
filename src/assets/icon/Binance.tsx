import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Binance: React.FC<IconProps> = ({ iSize = { x: 40, y: 40 } }) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5263 17.3404L19.9999 10.8667L26.4766 17.3432L30.2433 13.5765L19.9999 3.33337L9.75992 13.5734L13.5265 17.3401L13.5263 17.3404ZM3.33325 20.0001L7.10005 16.2328L10.8666 19.9993L7.09979 23.7661L3.33325 20.0001ZM13.5263 22.6603L19.9999 29.1335L26.4765 22.6572L30.2451 26.4219L30.2433 26.4239L19.9999 36.6668L9.75992 26.4268L9.75459 26.4215L13.5267 22.6598L13.5263 22.6603ZM29.1333 20.0017L32.9001 16.2349L36.6666 20.0014L32.8999 23.7683L29.1333 20.0017Z"
        fill="#F3BA2F"
      />
      <path
        d="M23.8202 19.9981H23.8218L19.9999 16.1759L17.175 19.0001L16.8504 19.3248L16.1811 19.9943L16.1758 19.9995L16.1811 20.0049L19.9999 23.8244L23.8221 20.0021L23.8239 20L23.8205 19.9981"
        fill="#F3BA2F"
      />
    </svg>
  );
};
export default Binance;