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
                            <span className="visually-hidden">Loading page...</span>
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


// import { Suspense } from "react";
// import AppRoutes from "./routes/Routes";
// import Navbar from "./components/Navbar";
 
// function App() {
//   return (
//     <div className="App">
//       <Navbar />
      
//       {/*
//         OPTIMIZATION: Suspense acts as a guard boundary.
//         When lazy-loaded routes are being fetched across the network,
//         this fallback spinner prevents the app layout from breaking.
//       */}
//       <Suspense
//         fallback={
//           <div className="d-flex justify-content-center align-items-center my-5 p-5">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading page...</span>
//             </div>
//           </div>
//         }
//       >
//         <AppRoutes />
//       </Suspense>
//     </div>
//   );
// }
 
// export default App;