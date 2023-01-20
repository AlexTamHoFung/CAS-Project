import QRCode from "qrcode";
import { useState } from "react";


const CreateCusQr = () => {
    const [qrValue, setQrValue] = useState("");
    const handleSubmit = async(e) => {
        e.preventDefault();

        const res = await QRCode.toDataURL(qrValue);
        console.log(res)

    }


} ;


export default CreateCusQr;