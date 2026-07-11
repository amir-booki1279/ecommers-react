import "react";
import SideBar from "../components/layout/admin/SideBar";
import Header from "../components/layout/admin/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function AdminLayout() {

  const [showSideBar,setShowSideBar] = useState(false)

  return (
    <div className="bg-[#cdcae9] w-full min-h-screen">
      <Header showSideBar={showSideBar} setShowSideBar={setShowSideBar} />

      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <main className="ml-0 lg:ml-65 py-23.75 transition-all">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
