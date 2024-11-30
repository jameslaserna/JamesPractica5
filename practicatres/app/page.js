import CardFinal from "./components/CardFinal";
import CardImagenes from "./components/CardImagenes";
import CardMegaFinal from "./components/CardMegaFinal";
import CardTechnologies from "./components/CardTechnologies";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextLogo from "./components/TextLogo";
import TextNegro from "./components/TextNegro";
import Unloching from "./components/Unloching";
import { GoAlertFill } from "react-icons/go";


export default function Home() {
  return (
    <>
    <div className="ml-4 mr-4 pt-4">
      <Navbar/>
      <Unloching/>
      <CardImagenes/>
      <TextLogo/>
      <TextNegro/>
      <CardTechnologies/>
      <hr />
      <CardFinal/>
      <CardMegaFinal/>
    </div>
    <div className="w-full space-y-10 px-32 mt-12">
      <div>
        <h1 className="text-5xl text-black font-bold">
          Stay Tuned. Subscribe Updates.
        </h1>
      </div>
      <div className="flex items-center justify-between">
        <input
          type="text"
          placeholder="Your@gmail.com"
          className="w-full md:w-1/2 lg:w-1/3 p-4 text-lg border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex space-x-6">
        <span><GoAlertFill /></span>
        <span><GoAlertFill /></span>
        <span><GoAlertFill /></span>
        <span><GoAlertFill /></span>
      </div>
      </div>
      
      
  </div>  
    <Footer/>
    </>
  );
}
