import React, { SetStateAction, useState } from "react";
import {QrReader} from "react-qr-reader";
import "./ScanQR.css"

// declare namespace QrReader {
//   interface props {
//     onScan: (data: string | null) => void;
//     onError: (err: any) => void;
//     onLoad?: (() => void) | undefined;
//     onImageLoad?: ((event: React.SyntheticEvent<HTMLImageElement>) => void) | undefined;
//     delay: number | false | undefined;
//     facingMode?: 'user' | 'environment' | undefined;
//     legacyMode?: boolean | undefined;
//     resolution?: number | undefined;
//     showViewFinder?: boolean | undefined;
//     style?: any;
//     className?: string | undefined;
//   }
// }

const MyQrReader: React.FC<{
  onScan: (data: string) => void;
  onError: (err: any) => void;
  onLoad?: (() => void);
  onImageLoad?: ((event: React.SyntheticEvent<HTMLImageElement>) => void);
  delay: number | false | undefined;
  facingMode?: 'user' | 'environment' ;
  legacyMode?: boolean ;
  resolution?: number ;
  showViewFinder?: boolean;
  style?: any;
  videoStyle?: any;
  className?: string;
}> = QrReader as any

const ScanQR = () => {
  const [result, setResult] = useState("no result");
  const [error, setError] = useState(null);

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="scanner">
      <MyQrReader
        delay={300}
        onError={(error: { message: SetStateAction<null>; }) => {
          setError(error.message);
        }}
        onScan={(data: SetStateAction<string>) => {
          if (data) {
            setResult(data);
            setError(null);
          }
        }}
        videoStyle={{ width: "60%", screenLeft: "20%" }}
        className={"scan-video"}
      />
      <p>ACC ID: {result}</p>
    </div>
  );
};

export default ScanQR;