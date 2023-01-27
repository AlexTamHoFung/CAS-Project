import React from "react";
import Regheader from "../../../features/Header/Regheader";
import "./Regphone.css";

export default function Regphone() {
  return (
    <div>
      <Regheader />

      <div>*請提供你的手機號碼</div>

      <span className="phonecontainer">
        <div className="defaultzone">+852</div>

        <div>
          <form>
            <label>
              <input type="text" name="phone" className="phone" />
            </label>
          </form>
        </div>
      </span>

      <div>
        <div>按「下一步」即表示你同意及接受我們的</div>
        <div>
          <a href="">dolphin條款及細則</a>
        </div>
      </div>

      <div>
        <input type="submit" value="下一步" className="next" />
      </div>
    </div>
  );
}
