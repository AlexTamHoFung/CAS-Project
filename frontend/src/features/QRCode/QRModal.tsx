import { Box } from "@mui/material";
import { Modal, Typography } from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { QrReader, OnResultFunction } from "react-qr-reader";
import  "./QRModal.css"
// For scanner
const MyQrReader: React.FC<{
  onError: (err: any) => void;
  onLoad?: () => void;
  onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
  delay: number | false | undefined;
  facingMode?: "environment";
  legacyMode?: boolean;
  resolution?: number;
  showViewFinder?: boolean;
  style?: any;
  videoStyle?: any;
  className?: string;
  onResult?: OnResultFunction;
  constraints:any
}> = QrReader as any;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface QRModalProps {
  closeHandler: () => void;
  setResult: (data: string) => void;
}

const QRModal = ({ closeHandler, setResult }: QRModalProps) => {
  const [display, setDisplay] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("display true")
    setDisplay(true);
    return () => {
        console.log("display false")
        setDisplay(false)
    };
  }, []);

  return (
    <Modal
      open={true}
      onClose={closeHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          掃描顧客二維碼
        </Typography>
        {display && (
          <MyQrReader
            key="user"
            constraints={{ facingMode: 'user' }}
            delay={300}
            onError={(error: { message: SetStateAction<null> }) => {
              setError(error.message);
            }}
            onResult={(data) => {
              if (data) {
                setResult(data.getText());
              }
            }}
            videoStyle={{
              width: "100%",
              height: "100%",
              screenLeft: "20%",
              marginLeft: 0,
              marginRight: 0,
            }}
            className={"scan-video"}
          />
        )}
      </Box>
    </Modal>
  );
};

export default QRModal;
