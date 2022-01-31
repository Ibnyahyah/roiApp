import { FirstWave, SecondWave } from "../svg_waves/wave"
import { RoadMapData } from "./road-map_data"

export default function RoadMap(){
    return(
        <div style={{backgroundColor:'rgba(0,0,0,0.03)'}}>
            <div className="road-map">
                <SecondWave/>
                <div className="container">
                    <h1 className="mt-1 mb-2">ROADMAP</h1>
                    <div className="row gap-1">
                        {RoadMapData.map(({content,check},index)=>{
                            return(
                                <div className="col-6-sm col-4-md" key={index}>
                                    <div className={`display-f align-center card pl-1 pr-1 ${check?'bg-red-light-6 text-white':'text-black'}`}>
                                        {/* <input type="checkbox" className="ml-1" style={{border:'none'}} readOnly checked={check?true:false}/> */}
                                        <h2 className="font-3">{content}</h2>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <FirstWave className="pb-2"/>
            </div>
        </div>
    )
}