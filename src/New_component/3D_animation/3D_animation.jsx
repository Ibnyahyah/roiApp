import './animation.css'

export default function Animation(){
    return(
        <div className="body-container">
            <div className="scene">
                <div className="floor"></div>
                <div className="cube">
                    <div className="front"></div>
                    <div className="back"></div>
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className="top"></div>
                    <div className="bottom"></div>
                </div>
                <div className="ball"></div>
            </div>
        </div>
    )   
}