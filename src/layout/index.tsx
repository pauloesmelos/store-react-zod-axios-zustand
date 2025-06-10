import NavBar from "@/components/NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
        <div>
            <NavBar />
        </div>
        <div>
            <Outlet />
        </div>
    </div>
  )
}

export default Layout;