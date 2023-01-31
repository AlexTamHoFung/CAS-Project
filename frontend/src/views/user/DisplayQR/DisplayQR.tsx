import ReactDOM from 'react-dom';
import QRCode, { QRCodeCanvas } from 'qrcode.react';

import React from 'react'

export const DisplayQR = () => {


  return (
   <QRCodeCanvas
  value={"https://picturesofpeoplescanningqrcodes.tumblr.com/"}
  size={128}
  bgColor={"#ffffff"}
  fgColor={"#000000"}
  level={"L"}
  includeMargin={false}
  imageSettings={{
    src: "https://static.zpao.com/favicon.png",
    x: undefined,
    y: undefined,
    height: 24,
    width: 24,
    excavate: true,
  }}
/>
  )
}


// ReactDOM.render(
//   <QRCode value="https://reactjs.org/" renderAs="canvas" />,
//   document.getElementById('mountNode')
// );