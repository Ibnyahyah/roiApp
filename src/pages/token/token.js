import AboutToken from "../../New_component/about_token/about";
import HowToBuy from "../../New_component/Faqs/HowTOBuy";
import Footer from "../../New_component/footer/footer";
import NavBar from "../../New_component/navigation/nav"
import RoadMap from "../../New_component/Road-map/road-map";
import Tokenomics from "../../New_component/Tokenomics/tokenomics";

const Token = ()=>{
    return(
        <>
            <NavBar/>
            <AboutToken/>
            <Tokenomics/>
            <RoadMap/>
            <HowToBuy/>
            {/* 
                @TODO Faqs,donation
            */}
            <Footer/>
        </>
    )
}
export default Token;