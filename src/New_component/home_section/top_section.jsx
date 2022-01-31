import { Link } from "react-router-dom";

export default function TopSection(){
    return(
       <div>
            <div className="display-f align-center top-section" style={{minHeight:'100vh'}}>
            <div className="container mt-5">
                <Link to="/token">
                    <div className="card row bg-gray-light-6 p-4" style={{minHeight:'25vh'}}>
                        <div className="col-12-xm col-6-md col-6-lg">
                            <h1>Welcome to <br/><span>SHIROI $SHI</span></h1>
                            <button  className="btn-white br-md mt-1 font-4 font-lg">TOKEN = $SHI</button>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
            <div className="mt-3 container pt-2 pb-3">
                <h1 className="text-center">Projects Showcase</h1>
                <div className="row gap-1 mt-2">
                    <div className="col-6-sm col-4-md">
                        <div className="card" style={{borderRadius:'none'}}>
                            <div className="project-img">
                                <img src="./shiroi_token.png" alt="" height="300" width="100%"/>
                            </div>
                            <h1>Stake dApp</h1>
                            <p>Stake and earn rewards even when the lock period ends, and unstake with flexibility.</p>
                            <a href="/" className="btn br-md pl-0 pr-0 display-f mt-1 justify-center" style={{width:'100%'}}>Learn more</a>
                        </div>
                    </div>
                    <div className="col-6-sm col-4-md">
                        <div className="card" style={{borderRadius:'none'}}>
                            <div className="project-img">
                                <img src="./shiroi_token.png" alt="" height="300" width="100%"/>
                            </div>
                            <h1>Store</h1>
                            <p>Start selling your Products in decentralized application.</p>
                            <a href="/" className="btn br-md pl-0 pr-0 display-f mt-1 justify-center" style={{width:'100%'}}>Learn more</a>
                        </div>
                    </div>
                    <div className="col-6-sm col-4-md">
                        <div className="card" style={{borderRadius:'none'}}>
                            <div className="project-img">
                                <img src="./shiroi_token.png" alt="" height="300" width="100%"/>
                            </div>
                            <h1>Game</h1>
                            <p>P2E (play to earn) games in the SHIROIverse, hire Player to play for your.</p>
                            <a href="/" className="btn br-md pl-0 pr-0 display-f mt-1 justify-center" style={{width:'100%'}}>Learn more</a>
                        </div>
                    </div>
                </div>

            </div>
       </div>
    )
}