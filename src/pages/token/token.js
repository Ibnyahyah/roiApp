import AboutToken from "../../New_component/token/about_token/about";
import Faqs from "../../New_component/token/Faqs/Faqs";
import HowToBuy from "../../New_component/token/Faqs/HowTOBuy";
import Footer from "../../New_component/footer/footer";
import NavBar from "../../New_component/navigation/nav"
import RoadMap from "../../New_component/token/Road-map/road-map";
import Tokenomics from "../../New_component/token/Tokenomics/tokenomics";

const Token = ()=>{
    return(
        <>
            <NavBar/>
            <AboutToken/>
            <Tokenomics/>
            <RoadMap/>
            <HowToBuy/>
            <Faqs/>
            <Footer/>
        </>
    )
}
export default Token;