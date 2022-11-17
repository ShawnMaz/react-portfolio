
function Nav(props) {
    return (
        <nav className="navbar navbar-expand-md bg-light border border-secondary border-opacity-25">
            <div className="container">
                <a className="navbar-brand fw-bold" href="/">
                    Shantanu Mazumder
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {props.navLinks.map(navLink => (
                            <li className='nav-item mx-2' key={navLink.name}>
                                <span 
                                    className={`nav-link ${navLink.name === props.currentNavLink.name && 'active'}`}
                                    onClick={() => props.setCurrentNavLink(navLink)}
                                    >
                                        {navLink.name}                                   
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;