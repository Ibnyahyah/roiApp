import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div>
            <footer className="container pt-3 pb-5">
                <div className="row justify-space-between align-center">
                    <div className="col-6-sm col-8-md">
                        <h1>SHIROI <br/><span className="shi">$SHI</span></h1>
                    </div>
                    <div className="col-6-sm col-4-md">
                        <ul>
                            <li className="font-4">INFORMATIONS</li>
                            <li><a href="./shiroi_whitepaper.docx" rel="noreferrer" download="SHIROI WHITEPAPER VERSION 1.0">Whitepaper</a></li>
                            <li><Link>Liquidity Locked</Link></li>
                            <li><Link>ShiroiHub</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className="mt-3 mb-3"/>
                <div className="display-f justify-space-between">
                    <p>&copy; {new Date().getFullYear()} SHIROI <span className="shi">$SHI</span></p>
                    <div className="mt-1 display-i text-center">
                        <a href="https://t.me/shiroiofficial" target="_blank" rel="noreferrer" className="text-red-light-2"><i className="fab fa-telegram fa-2x"></i></a>
                        <a href="https://instagram.com/shiroi_token?utm_medium=copy_link" target="_blank" rel="noreferrer" className="text-red-light-2 ml-1"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="https://twitter.com/shiroi_token?t=ycLdF1NGN_OudKFYJSRQjQ&s=09" target="_blank" rel="noreferrer" className="text-red-light-2 ml-1"><i className="fab fa-twitter fa-2x"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer