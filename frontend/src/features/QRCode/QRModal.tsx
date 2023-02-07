import { Box } from "@mui/material";
import { Modal, Typography } from "@mui/material";
import { createRef, SetStateAction, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { QrReader, OnResultFunction } from "react-qr-reader";

// For scanner
const MyQrReader: React.FC<{
  forwardedRef?: any;
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

const QRModal = ({
  closeHandler,
  setResult,
}: {
  closeHandler: () => void;
  setResult: (data: string) => void;
}) => {
  const [error, setError] = useState(null);

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
        <MyQrReader
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
            width: "60%",
            height: "60%",
            screenLeft: "20%",
            marginLeft: 225,
            marginRight: 225,
          }}
          className={"scan-video"}
        />
      </Box>
    </Modal>
  );
};

export default QRModal;
