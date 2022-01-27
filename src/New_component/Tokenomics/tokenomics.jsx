import { TokenomicsData } from "./dummy"

export default function Tokenomics(){
    return(
       <div className="bg-red-light-7 display-f align-center token-distribution pb-3 mb-2" style={{minHeight:'90vh'}}>
            <div className="container">
                <div className="text-center text-white">
                    <h1>Tokenomics Distribution</h1>
                </div>
                <div className="row gap-1">
                    {TokenomicsData.map((data,index)=>{
                        return(
                            <div className="col-6-sm col-6-md" key={index}>
                                <div className="card text-center bg-white display-f align-center" style={{minHeight:'300px'}}>
                                    <div>
                                        <h2 className="mb-1">{data.header}</h2>
                                        <p>{data.content}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
       </div>
    )
}