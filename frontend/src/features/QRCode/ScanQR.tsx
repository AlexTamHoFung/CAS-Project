import React, { SetStateAction, useEffect, useState } from "react";
import { OnResultFunction, QrReader } from "react-qr-reader";
import ShopHeader from "../../components/shopheader/ShopHeader";
import ShopBottomNav from "../BottomNav/ShopBottomNav";
import "./ScanQR.css";

const MyQrReader: React.FC<{
  // onScan: (data: string) => void;
  onError: (err: any) => void;
  onLoad?: () => void;
  onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  delay: number | false | undefined;
  facingMode?: "user" | "environment";
  legacyMode?: boolean;
  resolution?: number;
  showViewFinder?: boolean;
  style?: any;
  videoStyle?: any;
  className?: string;
  onResult?: OnResultFunction;
}> = QrReader as any;

interface TransPT {
    amount: number,
    payment_method: string,
    collect_point: boolean,
    is_refund: boolean,
    store_user_id: number,
    uuid:string
}


const { REACT_APP_API_BASE } = process.env;


const ScanQR = () => {
  const [collect, setCollect] = useState();
  const [amount, setAmount] = useState("");



  useEffect (() => {
    
  })


  const [result, setResult] = useState("");
  const [error, setError] = useState(null);

  if (error) {
    return <div className="error">{error}</div>;
  }
  function handleSubmit(e:  React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
  }

  return (
    <div className="scanner">
      <ShopHeader />
      <br />
      <br />
      <br />
      <br />
      <br />

      <p>ACC ID: {result}</p>
      <form onSubmit={handleSubmit}>
      <label>
        輸入結算金額:
      </label>
        <input type="text" name="name"></input>
      <label>
        collect points:
      </label>
        <input type="checkbox" checked={collect}></input>
     
        <button type="submit" >submit</button>

      </form>



      <MyQrReader
        delay={300}
        onError={(error: { message: SetStateAction<null> }) => {
          setError(error.message);
        }}
        onResult={(data) => {
          if (data) {
            setResult(data.getText());
            // setError(null);
            console.log(data.getText());
          }
        }}
        videoStyle={{
          width: "60%",
          height: "60%",
          screenLeft: "20%",
          marginLeft: 225,
          marginRight: 225,
        }}
        className={"scan-video"}
      />

      <br />
      <br />
      <br />
      <br />
      <br />
      <ShopBottomNav />
    </div>
  );
};

export default ScanQR;
