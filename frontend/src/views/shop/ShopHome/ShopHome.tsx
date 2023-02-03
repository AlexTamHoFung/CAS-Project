import React from "react";

import ShopHeader from "../../../components/shopheader/ShopHeader";
import ShopBottomNav from "../../../features/BottomNav/ShopBottomNav";

export default function ShopHome() {
  return (
    <div>
      <ShopHeader />
      <div>Welcome to Start~</div>
      <ShopBottomNav />
    </div>
  );
}
