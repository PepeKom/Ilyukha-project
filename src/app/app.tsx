import { Outlet } from "react-router-dom";
import { AppHeader } from "@/features/header";



export function App() {
    return (
        <div className={"bg-gray-100"}>
            <AppHeader />
            <Outlet />
        </div>
    );
}
