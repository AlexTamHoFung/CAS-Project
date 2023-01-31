import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../app/store";

export default function Logout() {
    const isAuthenticated = useSelector(
      (state: IRootState) => state.auth.isAuth
    );
    const dispatch = useDispatch();
  
    const clickLogout = () => {
      dispatch(Logout());
    };
  
    return (
      <div className="logout-bar">
        {isAuthenticated ? (
          <Button color="info" onClick={clickLogout}>
            Logout
          </Button>
        ) : (
          ""
        )}
      </div>
    );
  }