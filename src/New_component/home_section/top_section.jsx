import { Link } from "react-router-dom";

export default function TopSection(){
    return(
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
    )
}