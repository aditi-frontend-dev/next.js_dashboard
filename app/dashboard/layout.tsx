import SideBar from "../components/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideBar />
            </div>
            <div className="grow p-10 md:p-6 md:overflow-y-auto">
                {children}
            </div>
        </div>
    );
};
export default Layout;
