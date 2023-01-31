import React from "react";
import { QrReader } from "react-qr-reader";

export default function ScanQR() {
  return (
    <>
      <h3>Qr Code Scan by Web Cam</h3>
      {/* <QrReader
        delay={300}
        style={{ width: "100%" }}
        onError={handleErrorWebCam}
        onScan={handleScanWebCam}
      />
      <h3>Scanned By WebCam Code: {scanResultWebCam}</h3> */}
    </>
  );
}
