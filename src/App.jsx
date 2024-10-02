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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

       <Route
      path="/"
      element={<Home />}>
      <Route path="/makeup" element={<Makeup />}/>
      <Route path="/skincare" element={<Skincare />}/>
      <Route path="/hair" element={<Hair />}/>
      <Route path="/personalcare" element={<Personalcare />}/>
      <Route path="/kbeauty" element={<Kbeauty />}/>
      <Route path="/mom&baby" element={<Mom />}/>
      <Route path="/undergarments" element={<Undergarments />}/>
      <Route path="/essential" element={<Essential />}/>
      <Route path="/blog" element={<Blog />}/>
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
