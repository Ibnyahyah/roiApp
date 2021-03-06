import CopyClipboard from "../../button/copy-clipboard";

export default function AboutToken(){
    
    return(
        <div className="bg-white display-f align-center about-token" style={{minHeight:'110vh'}}>
            <div className="container">
                <div className="row">
                    <div className="col-6-sm col-6-md">
                        <div className="content">
                            <h1>
                                This is <br/>Shiroi <span className="shi">$SHI</span>
                            </h1>
                            <p>Shiroi $SHI is base on Gaming, VR and Multiverse Token.</p>
                        </div>
                        <div className="row gap-1 token-details">
                            <div>
                                <h1>1M</h1>
                                <p>SHIROI Supply</p>
                            </div>
                            <div>
                                <h1>20%</h1>
                                <p>LIQUIDITY</p>
                            </div>
                            <div>
                                <h1>1k+</h1>
                                <p>TELEGREAM Members</p>
                            </div>
                        </div>
                        <div className="mt-3 about-button-container">
                            <button className="btn br-md pl-3 pr-3 p-1 font-3 text-white mb-1 "style={{background:'#f55145'}}>Buy Shiroi $SHI</button>
                            <CopyClipboard value="0x0918700Dd458b3573cb7207063f91219Af88e209"/>
                            
                        </div>
                        <div className="mt-3 social-link">
                            <h2>OUR COMMUNITY</h2>
                            <div className="mt-1">
                                <a href="https://t.me/shiroiofficial" target="_blank" rel="noreferrer" style={{color:'#f55145'}}><i className="fab fa-telegram fa-2x"></i></a>
                                <a href="https://instagram.com/shiroi_token?utm_medium=copy_link" target="_blank" rel="noreferrer" className="ml-1" style={{color:'#f55145'}}><i className="fab fa-instagram fa-2x"></i></a>
                                <a href="https://twitter.com/shiroi_token?t=ycLdF1NGN_OudKFYJSRQjQ&s=09" target="_blank" rel="noreferrer" className="ml-1" style={{color:'#f55145'}}><i className="fab fa-twitter fa-2x"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-6-sm col-6-md whitepaper-container">
                        <a href="./shiroi_whitepaper.docx" target="_blank" rel="noreferrer" download="SHIROI WHITEPAPER VERSION 1.0">
                            <img src="./images/whitepaper.png" alt="Shiroi Whitepaper"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}