import CopyClipboard from "../button/copy-clipboard";
import Contact from "./contact";
import SocialLink from "./social-link";
// import fileDownload from 'js-file-download';

function Body(){
    // function Download(){
    //     try{
    //         fileDownload(ShiroiWhitepapper, "Shiroi whitepaper")
    //     }catch(err){
    //         console.log(err)

    //     }
    // }
    return(
        <div className="container">
            <marquee direction="left">We are currently Hiring social media manager Apply with your resuming. Contract Address 0x0918700dd458b3573cb7207063f91219af88e209</marquee>
            <div className="display-f align-center justify-center" style={{minHeight:'70vh'}}>
                <div className="row mt-5">
                    <div className="col-6-sm col-md-6">
                        <div>
                            <h2 className="font-xxl font-4 text-white">Shiroi</h2>
                            <p>The Latest Gaming,VR and Multiverse Token</p>
                            <div className="mt-2"style={{lineHeight:'30px'}}>
                                <p>
                                    Shiroi is build on Bsc-chain, with the total-supply of 1,000,000.
                                    Shiroi Dev will be Building Shiroi Game which alocate rewards for player.<b>NO RUG</b>
                                </p>
                                <div className="mt-2">
                                    <a className="btn btn-gray:hover bg-gray-light-6" href="https://pancakeswap.finance/swap?outputCurrency=0x0918700Dd458b3573cb7207063f91219Af88e209" target="_blank" rel="noreferrer">Buy On PancakeSwap</a>
                                    <a className="text-white ml-1" href="https://bscscan.com/address/0x0918700dd458b3573cb7207063f91219af88e209" target="_blank" rel="noreferrer">View on Bscscan</a>
                                </div>
                                    <a className="text-white mt-2 btn-black" href="https://poocoin.app/tokens/0x0918700dd458b3573cb7207063f91219af88e209" target="_blank" rel="noreferrer">View Chart</a>
                                    <a className="text-white mt-2 btn-green" href="https://bscscan.com/tx/0x557b8affebd866548f1a29455bc372494a237e23cf22c314e25c06635801544d" target="_blank" rel="noreferrer">View Locked LP</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6-sm col-6-md mt-3 mb-3">
                        <div style={{width:'100%', margin:'auto'}}>
                            <div style={{width:'300px', height:'300px'}}>
                                <img src="./shiroi_token.png" style={{width:'100%', height:'100%', objectFit:'cover', border:'2px solid white', borderRadius:'50%'}} alt="shiroi toke"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-light-6 pt-2 pb-2 mt-5 pl-1 pr-1 text-center" id="about">
                <div>
                    <h2 className="font-xl font-4 text-black mb-1 text-center">What is Shiroi?</h2>
                    <p>Shiroi is a Gaming, VR and Multiverse based token, "WE" aim to solve the problem in the Gaming section. Shiroi Token is looking forward to the world's usable token. One of "Our" priorities 
                        is to partner with a lot of existing Web 3.0 projects. There are a lot of swaps out their so "We" might not be building our own swap dApp.</p>
                        <p>.</p>
                    <p>Shiroi is a community base Token with the aim to reward holders by the means of staking. The supply of Shiori is 1million shioris, <b>20% was locked on pancakeSwap for 24 months(2 Years)</b>, 5% for marketing (promotion of the community), 5% for the airdrop, 20% for the developers (to work on our upcoming project), 
                            and the remaining 50% will be used as a reward for staking and the gaming. "We" will be disclosing our Project soon, cause most of our projects have not been concluded.</p>
                            <p>The Developer’s Shirois will also be added to pancakeswap as liquidity,which indicate that no Dev token any more.</p>
                    <p className="mt-1 mb-1 font-3">Tips about Shiroi P2E Game:</p>
                    <p>The P2E system will base on two Players competing to earn a certain , the reward will be in Shiroi token. For a player to be able to play Our game the player must own Shiroi token.</p>
                    <a href="/shiroi_whitepaper.docx" download="Shiroi whitepaper" target="_blank" rel="noreferrer" className="btn mt-1">White papper</a>
                </div>
            </div>
            <div style={{minHeight:'50vh', marginTop:'150px'}} id="road-map">
                <h2>Road Map</h2>
                <div className="row gap-2">
                    <div className="col-6-sm col-4-md col-4-lg">
                        <div className="card bg-gray-light-3 " style={{minHeight:'180px'}}>
                            <ul>Q1 2022
                                <li><input type="checkbox" checked={true} readOnly/>Airdrop 1</li>
                                <li><input type="checkbox" checked={true} readOnly/>Website</li>
                                <li><input type="checkbox" checked={false} readOnly/>Hiring</li>
                                <li><input type="checkbox" checked={true} readOnly/>Airdrop 2</li>
                                <li><input type="checkbox" checked={true} readOnly/>Liquidity Lock on PCS</li>
                                <li><input type="checkbox" checked={true} readOnly/>Marketing compagin</li>
                                <li><input type="checkbox" checked={true} readOnly/>WhitePaper Verison 1.0.0</li>
                                <li><input type="checkbox" checked={false} readOnly/>Telegram members 2,000</li>
                                <li><input type="checkbox" checked={false} readOnly/>Holders 1,000</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6-sm col-4-md col-4-lg">
                        <div className="card bg-gray-light-3 " style={{minHeight:'180px'}}>
                            <ul>Q2 2022
                                <li><input type="checkbox" checked={false} readOnly/>Creation of Pool</li>
                                <li><input type="checkbox" checked={false} readOnly/>Marketing compagin 2</li>
                                <li><input type="checkbox" checked={false} readOnly/>Listing on CMC and CG</li>
                                <li><input type="checkbox" checked={false} readOnly/>website Verison 2.0.0</li>
                                <li><input type="checkbox" checked={false} readOnly/>Telegram memebers 10,000</li>
                                <li><input type="checkbox" checked={false} readOnly/>Holders 20,000</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-6-sm col-4-md col-4-lg">
                        <div className="card bg-gray-light-3 " style={{minHeight:'180px'}}>
                            <ul>Q3 2022
                                <li><input type="checkbox" checked={false} readOnly/>Exchange Listing</li>
                                <li><input type="checkbox" checked={false} readOnly/>Massive Pool creation on PCS</li>
                                <li><input type="checkbox" checked={false} readOnly/>Liquidity Lock on PCK</li>
                                <li><input type="checkbox" checked={false} readOnly/>Shiroi Game Release</li>
                                <li><input type="checkbox" checked={false} readOnly/>WhitePaper Verison 2.0.0</li>
                                <li><input type="checkbox" checked={false} readOnly/>Restruct RoadMap</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div id="how-to-buy" className="mt-5 bg-white p-1 text-lg">
                <div className="row gap-1">
                    <div className="col-6-sm">
                        <h2>Token Distribution:</h2>
                        <img src="./images/chart.png" alt="Shiroi Token Distribution"/>
                    </div>
                    <div className="col-6-sm">
                        <div>
                            <h2 className="font-4 text-black mb-1">How To Buy?</h2>
                            <ol className="p-0 ml-1">
                                <li>Create a wallet (e.g metamask, trustwallet).</li>
                                <li>Fund Your wallet with Smart-Chain(Bep-20 Smart Chain).</li>
                                <li>Copy Your Shiroi contract Address <br/><span className="span">0x0918700Dd458b3573cb7207063f91219Af88e209<CopyClipboard value="0x0918700Dd458b3573cb7207063f91219Af88e209"/></span></li>
                                <li>Goto <a className="text-blue" href="https://pancakeswap.finance/swap?outputCurrency=0x0918700Dd458b3573cb7207063f91219Af88e209">PancakeSwap</a> import Shiroi(SHI).</li>
                                <li>Enter The amount You will like to puchase.</li>
                                <li>Click Swap.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5 gap-1" id="contact">
                <div className="col-6-sm">
                    <SocialLink/>
                    <h2 className="text-center mb-1">Buy Shiroi</h2>
                    <iframe title={indexedDB}
                        src="https://poocoin.app/embed-swap?outputCurrency=0x0918700Dd458b3573cb7207063f91219Af88e209"
                        width="100%"
                        height="450"
                    ></iframe>
                </div>
                <div className="col-6-sm">
                    <h2 className="text-center mb-1">Contact us</h2>
                    <Contact/>
                </div>
            </div>
        </div>
    )
}
export default Body;