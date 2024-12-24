import * as React from "react";
import SideBar from "./SideBar";
import Header from "./Header";

export default function Home() {
  return (
    <div className="bg-white">
      <div>
        <Header />
      </div>

      <SideBar />
    </div>
  );
}
