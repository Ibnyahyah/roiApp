function Nav(){
    return(
        <div>
            <nav className="navbar container">
                <header>
                    <a href="/"><img src="./shiroi_token_logo_nbg.png" alt="shiroi token"/></a>
                </header>
                <ul className="display-f gap-1">
                    <li><a href="#about">About</a></li>
                    <li><a href="#road-map">Road-map</a></li>
                    <li><a href="#how-to-buy">How-to-buy</a></li>
                    <li><a href="#contact">Contact us</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Nav;