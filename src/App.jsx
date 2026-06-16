import Navbar from "./components/Navbar";
import AppRoutes from "./routes/Routes";
import { Suspense } from "react";

function App(){
    return(
        <div>
            <Navbar/>
            <Suspense
                fallback={
                    <div className="d-flex justify-content-center align-items-center my-5 p-5">
                        <div className="spinner-border text-primary" role="status">
                            <span>Loading page...</span>
                        </div>
                    </div>
                }
                >
                <AppRoutes />
            </Suspense>
        </div>
    )
}
export default App;