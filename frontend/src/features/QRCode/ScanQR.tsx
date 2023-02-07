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
  // const [collect, setCollect] = useState();
  const [amount, setAmount] = useState("");



  useEffect (() => {
    let isMounted = true;
    const fetchData = async () => {
      const resp = await fetch(`${REACT_APP_API_BASE}/transactions/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({  }),
      });
      const data = await resp.json();
      if (isMounted) {
        setAmount(data.data.amount);
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
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
        <input 
          type="text" 
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>


      <label>
        需要儲分:
      </label>
        <input type="checkbox" ></input>
     

      <label >
        支付方式:
      </label>
        <select id="payment">
          <option value="cash">現金</option>
          <option value="credit-card">信用卡</option>
          <option value="octopus">八達通</option>
        </select>



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
