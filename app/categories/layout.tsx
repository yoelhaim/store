import Catagories from "@/components/catgory/Catagory";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="layout">
            <div style={{height: '140px'}}>

            </div>
            <Catagories/>
        
            <main className="main">{children}</main>
        </div>
    );
    }