import { useState } from "react";
import CopyClipboard from "../../button/copy-clipboard";

export default function Faqs(){

    const [whyShiroi, setWhyShiroi] = useState(false);
    const [openBuy, setOpenBuy] = useState(false);
    const [openListing, setOpenListing] = useState(false);
    const [openReserve, setOpenReserve] = useState(false);
    const [openLegal, setOpenLegal] = useState(false);
    
    function OpenWhyShiroi(){
        if(whyShiroi === false){
            setWhyShiroi(true);
            setOpenBuy(false);
            setOpenListing(false);
            setOpenReserve(false);
            setOpenLegal(false);
        }else if(whyShiroi === true){
            setWhyShiroi(false);
        }
    }
    function OpenBuy(){
        if(openBuy === false){
            setOpenBuy(true);
            setWhyShiroi(false);
            setOpenListing(false);
            setOpenReserve(false);
            setOpenLegal(false);
        }else if(openBuy === true){
            setOpenBuy(false);
        }
    }
    function OpenListing(){
        if(openListing === false){
            setOpenListing(true);
            setOpenBuy(false);
            setWhyShiroi(false);
            setOpenReserve(false);
            setOpenLegal(false);
        }else if(openListing === true){
            setOpenListing(false);
        }
    }
    function OpenReserve(){
        if(openReserve === false){
            setOpenReserve(true);
            setOpenBuy(false);
            setWhyShiroi(false);
            setOpenListing(false);
            setOpenLegal(false);
        }else if(openReserve === true){
            setOpenReserve(false);
        }
    }
    function OpenLegal(){
        if(openLegal === false){
            setOpenLegal(true);
            setOpenBuy(false);
            setWhyShiroi(false);
            setOpenListing(false);
            setOpenReserve(false);
        }else if(openLegal === true){
            setOpenLegal(false);
        }
    }
    
    return(
       <div className="faqs display-f align-center">
            <div className="container">
                <h1 className="text-center font-xl mb-3 font-3">FAQS</h1>
                <div className={`card p-0 mb-2 bg-white ${whyShiroi === true ?'pb-1':null}`}>
                    <div className="card bg-red-light-7 display-f justify-space-between align-center" onClick={OpenWhyShiroi}>
                        <h1 className="ml-1 font-lg font-3 text-white">Why Shiroi$ ?</h1>
                        <i className="mr-1 font-3 text-white" style={{cursor:'pointer'}}>
                            {whyShiroi === true?'-':'+'}
                        </i>
                    </div>
                    {whyShiroi === true?
                        <p className="display-f justify-left mt-1 p-2" 
                            >
                                Shiroi's was derive from japanese "SHIROI" which means PURE
                        </p>:null}
                </div>
                <div className={`card p-0 mb-2 bg-white ${openBuy === true ?'pb-1':null}`}>
                    <div className="card bg-red-light-7 display-f justify-space-between align-center" onClick={OpenBuy}>
                        <h1 className="ml-1 font-lg font-3 text-white">Where Can I Buy Shiroi Safely?</h1>
                        <i className="mr-1 font-3 text-white" style={{cursor:'pointer'}}>
                            {openBuy === true?'-':'+'}
                        </i>
                    </div>
                    {openBuy === true?
                        <p className="display-f justify-left mt-1 p-2" 
                            >
                                SHIROI$ is based on Binance Smart Chain and liquidity is locked in PancakeSwap for 24Months. 
                                It is totally unruggable. You could get SHIROI$ on PancakeSwap (More exchange platforms is coming)... 
                                Contract address: 0x0918700Dd458b3573cb7207063f91219Af88e209 .
                        </p>:null}
                </div>
                <div className={`card p-0 mb-2 bg-white ${openListing === true ?'pb-1':null}`}>
                    <div className="card bg-red-light-7 display-f justify-space-between align-center" onClick={OpenListing}>
                        <h1 className="ml-1 font-lg font-3 text-white">When CoinMarketCap and Coingeko?</h1>
                        <i className="mr-1 font-3 text-white" style={{cursor:'pointer'}}>
                            {openListing === true?'-':'+'}
                        </i>
                    </div>
                    {openListing === true?
                        <p className="display-f justify-left mt-1 p-2" 
                            >
                                We have already Submit the listing form to but Coin trackers, we hope to get reply from them as soon as possible.
                        </p>:null}
                </div>
                <div className={`card p-0 mb-2 bg-white ${openReserve === true ?'pb-1':null}`}>
                    <div className="card bg-red-light-7 display-f justify-space-between align-center" onClick={OpenReserve}>
                        <h1 className="ml-1 font-lg font-3 text-white">Why the Reserved Token?</h1>
                        <i className="mr-1 font-3 text-white" style={{cursor:'pointer'}}>
                            {openReserve === true?'-':'+'}
                        </i>
                    </div>
                    {openReserve === true?
                        <p className="display-f justify-left mt-1 p-2" 
                            >
                                Shiroi\'s Co-founder came to conclusion on the reserved token due to our upcoming 
                                future projects like staking, gamings and all other projects that have not been concluded on. 
                                The reserved token is mainly for a life time reward.
                        </p>:null}
                </div>
                <div className={`card p-0 mb-2 bg-white ${openLegal === true ?'pb-1':null}`}>
                    <div className="card bg-red-light-7 display-f justify-space-between align-center" onClick={OpenLegal}>
                        <h1 className="ml-1 font-lg font-3 text-white">LEGAL DISCLAIMER?</h1>
                        <i className="mr-1 font-3 text-white" style={{cursor:'pointer'}}>
                            {openLegal === true?'-':'+'}
                        </i>
                    </div>
                    {openLegal === true?
                        <p className="display-f justify-left mt-1 p-2" 
                            >
                                The information provided on SHIROI$ website does not constitute investment advice, 
                                financial advice, trading advice, or any other sort of advice and you should not treat 
                                any of the website’s content as such. SHIROI$ team does not recommend that any cryptocurrency 
                                should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial 
                                advisor before making any investment decisions. By purchasing SHIROI$, you agree that you are not purchasing 
                                a security or investment and you agree to hold the team harmless and not liable for any losses or taxes you may 
                                incur. You also agree that the team is presenting the token “as is” and is not required to provide any support or 
                                services. You should have no expectation of any form from Catgirl Coin and its team. Although SHIROI$ is a community 
                                driven token for social networking and not a registered digital currency, the team strongly recommends that citizens in 
                                reas with government bans on Crypto do not purchase it because the team cannot ensure compliance with your territory’s 
                                regulations. Always make sure that you are in compliance with your local laws and regulations before you make any purchase.
                        </p>:null}
                </div>
                        <hr className="mt-3 mb-3"/>
                {/* // Donantion */}
                <div>
                    <div className="row">
                        <div className="col-6-sm col-6-md"></div>
                        <div className="col-6-sm col-6-md">
                            <div className="card bg-white">
                                <h1 style={{color:'#f55145', fontFamily: "'Dongle', sans-serif"}}>DONATE TO SHIROI DEV</h1>
                                <p className="mt-2 mb-1">If you like our work, and you will like to support us to keep us growing,
                                    you can send your donation to this address. Any token is accepted,
                                    THANK you for your support!</p>
                                    <CopyClipboard value="0x0918700Dd458b3573cb7207063f91219Af88e209"/>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
       </div>
    )
}