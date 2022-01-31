import { Data } from "./dummy"

export default function HowToBuy(){
    return(
        <div style={{backgroundColor: 'rgba(0,0, 0, 0.03)'}}>
        <div className="container display-f align-center" style={{minHeight:'100vh'}}>
                <div className="row gap-1">
                    <div className="col-6-md col-6-lg">
                    <h1 className="how-to-buy-header text-center">HOW TO BUY SHIROI$</h1>
                        <div className="text-center buy">
                            <img src="./shiroi_token.png" className="br-full mt-1 mb-2" alt="Shiroi Logo"/>
                        </div>
                    </div>
                    <div className="col-6-md col-6-lg">
                        <ul className="mt-2">
                            {Data.map(({header,content}, index)=>{
                                return(
                                    <li key={index} className="mt-2">
                                        <div className="display-f">
                                            <i className="text-red font-4 font-lg">*</i>
                                            <div className="ml-1">
                                                <h1>{header}</h1>
                                                <p className="mt-1">{content}</p>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        
                        <a href="https://pancakeswap.finance/swap?outputCurrency=0x0918700Dd458b3573cb7207063f91219Af88e209"
                        target="_blank" rel="noreferrer" className=" mt-2 btn btn-red br-md pl-3 pr-3 font-3 text-white">Buy $SHI</a>
                    </div>
                </div>
            </div>
        </div>
    )
}