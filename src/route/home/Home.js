import '../../index.css'
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Calculator from "./Calculator";

export default function Home(){
    return(
        <div>
            <Navbar/>
            <AboutUs/>
            <Calculator/>
        </div>
    )
}