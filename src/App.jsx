import Home from "./Components/Home/Home"
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Makeup from "./Components/Makeup/Makeup";
import Skincare from "./Components/Skincare/Skincare";
import Hair from "./Components/Hair/Hair";
import Personalcare from "./Components/Personalcare/Personalcare";
import Kbeauty from "./Components/Kbeauty/Kbeauty";
import Mom from "./Components/Mom/Mom";
import Undergarments from "./Components/Undergarments/Undergarments";
import Essential from "./Components/Essential/Essential";
import Blog from "./Components/Blog/Blog";
// import Face from "./Components/SubCatagory/Face";
// import Nails from "./Components/SubCatagory/Nails";
// import Lips from "./Components/SubCatagory/Lips";
// import Blush from "./Components/SubCatagory/Blush";
// import Concealer from "./Components/SubCatagory/Concealer";
// import Eyeliner from "./Components/SubCatagory/Eyeliner";
// import Mascara from "./Components/SubCatagory/Mascara";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path="/" element={<Home />}>



      {/* <Route path="/makeup/face" element={<Face />}/>
      <Route path="/makeup/lips" element={<Lips />}/>
      <Route path="/makeup/nails" element={<Nails />}/>
      <Route path="/makeup/blush" element={<Blush />}/>
      <Route path="/makeup/concealer" element={<Concealer />}/>
      <Route path="/makeup/eyeliner" element={<Eyeliner />}/>
      <Route path="/makeup/foundation" element={<Foundation />}/>
      <Route path="/makeup/mascara" element={<Mascara />}/> */}









        <Route path="/makeup" element={<Makeup />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/hair" element={<Hair />} />
        <Route path="/personalcare" element={<Personalcare />} />
        <Route path="/kbeauty" element={<Kbeauty />} />
        <Route path="/mom&baby" element={<Mom />} />
        <Route path="/undergarments" element={<Undergarments />} />
        <Route path="/essential" element={<Essential />} />
        <Route path="/blog" element={<Blog />} />
      </Route>

      



    </Route>,
   
  )
);



function App() {

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
