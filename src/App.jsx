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
import Face from "./Components/SubCatagory/Face";
import Lips from "./Components/SubCatagory/Lips";
import Nails from "./Components/SubCatagory/Nails";
import Foundation from "./Components/SubCatagory/Foundation";
import Concealer from "./Components/SubCatagory/Concealer";
import Mascara from "./Components/SubCatagory/Mascara";
import Blush from "./Components/SubCatagory/Blush";
import Eyeliner from "./Components/SubCatagory/Eyeliner";
import SkinCareFace from "./Components/SubCatagory/SkinCareFace";
import EyeCare from "./Components/SubCatagory/EyeCare";
import HandsAndFeet from "./Components/SubCatagory/HandsAndFeet";
import ShopConcern from "./Components/SubCatagory/ShopConcern";
import HairAccessories from "./Components/SubCatagory/HairAccessories";
import HairCare from "./Components/SubCatagory/HairCare";
import HairStyling from "./Components/SubCatagory/HairStyling";
import HairTreatment from "./Components/SubCatagory/HairTreatment";
import BathAndShower from "./Components/SubCatagory/BathAndShower";
import SanitaryNapkins from "./Components/SubCatagory/SanitaryNapkins";
import Moisturizer from "./Components/SubCatagory/Moisturizer";
import SheetMask from "./Components/SubCatagory/SheetMask";
import TonersAndAstringents from "./Components/SubCatagory/TonersAndAstringents";
import Facewash from "./Components/SubCatagory/Facewash";
import Cleanser from "./Components/SubCatagory/Cleanser";
import SerumOils from "./Components/SubCatagory/SerumOils";
import SleepingMask from "./Components/SubCatagory/SleepingMask";
import Sunscreen from "./Components/SubCatagory/Sunscreen";
import Essence from "./Components/SubCatagory/Essence";
import FacialWipes from "./Components/SubCatagory/FacialWipes";
import ScrubsAndExfoliators from "./Components/SubCatagory/ScrubsAndExfoliators";
import BabyProducts from "./Components/SubCatagory/BabyProducts";
import CreamsAndMoisturizers from "./Components/SubCatagory/CreamsAndMoisturizers";
import Lotion from "./Components/SubCatagory/Lotion";
import Oil from "./Components/SubCatagory/Oil";
import Powder from "./Components/SubCatagory/Powder";
import Shampoo from "./Components/SubCatagory/Shampoo";
import SoapAndBodywash from "./Components/SubCatagory/SoapAndBodywash";
import BathTime from "./Components/SubCatagory/BathTime";
import BabyCare from "./Components/SubCatagory/BabyCare";
import Bra from "./Components/SubCatagory/Bra";
import Panty from "./Components/SubCatagory/Panty";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

      <Route path="/" element={<Home />}>



        <Route path="/makeup" element={<Makeup />} />
        <Route path="/makeup/face" element={<Face />} />
        <Route path="/makeup/lips" element={<Lips />} />
        <Route path="/makeup/nails" element={<Nails />} />
        <Route path="/makeup/foundation" element={<Foundation />} />
        <Route path="/makeup/concealer" element={<Concealer />} />
        <Route path="/makeup/mascara" element={<Mascara />} />
        <Route path="/makeup/eyeliner" element={<Eyeliner />} />
        <Route path="/makeup/blush" element={<Blush />} />





        <Route path="/skincare" element={<Skincare />} />
        <Route path="/skincare/face" element={<SkinCareFace />}/>
        <Route path="/skincare/eyecare" element={<EyeCare />}/>
        <Route path="/skincare/hands&feet" element={<HandsAndFeet />}/>
        <Route path="/skincare/shopbyconcern" element={<ShopConcern />}/>








        <Route path="/hair" element={<Hair />} />        
        <Route path="/hair/hairaccessories" element={<HairAccessories />} />        
        <Route path="/hair/haircare" element={<HairCare />} />        
        <Route path="/hair/hairstyling" element={<HairStyling />} />        
        <Route path="/hair/hairtreatment" element={<HairTreatment />} />     




        <Route path="/personalcare" element={<Personalcare />} />
        <Route path="/personalcare/Bath&Shower" element={<BathAndShower/>} />
        <Route path="/personalcare/SanitaryNapkins" element={<SanitaryNapkins/>} />



        <Route path="/kbeauty" element={<Kbeauty />} />
        <Route path="/kbeauty/moisturizer" element={<Moisturizer />} />
        <Route path="/kbeauty/sheetmask" element={<SheetMask />} />
        <Route path="/kbeauty/toners&astringents" element={<TonersAndAstringents />} />
        <Route path="/kbeauty/facewash" element={<Facewash />} />
        <Route path="/kbeauty/cleanser" element={<Cleanser />} />
        <Route path="/kbeauty/serumoils" element={<SerumOils />} />
        <Route path="/kbeauty/sleepingmask" element={<SleepingMask/>} />
        <Route path="/kbeauty/sunscreen" element={<Sunscreen />} />
        <Route path="/kbeauty/essence" element={<Essence />} />
        <Route path="/kbeauty/facialwipes" element={<FacialWipes />} />
        <Route path="/kbeauty/scrubs&exfoliators" element={<ScrubsAndExfoliators />} />





        <Route path="/mom&baby" element={<Mom />} />
        <Route path="/mom&baby/babyproducts" element={<BabyProducts/>} />
        <Route path="/mom&baby/creams&moisturizers" element={<CreamsAndMoisturizers />} />
        <Route path="/mom&baby/lotion" element={<Lotion/>} />
        <Route path="/mom&baby/oil" element={<Oil />} />
        <Route path="/mom&baby/powder" element={<Powder />} />
        <Route path="/mom&baby/shampoo" element={<Shampoo />} />
        <Route path="/mom&baby/soap&bodywash" element={<SoapAndBodywash />} />
        <Route path="/mom&baby/bathtime" element={<BathTime />} />
        <Route path="/mom&baby/babycare" element={<BabyCare/>} />
        




        <Route path="/undergarments" element={<Undergarments />} />
        <Route path="/undergarments/bra" element={<Bra />} />
        <Route path="/undergarments/panty" element={<Panty />} />




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
