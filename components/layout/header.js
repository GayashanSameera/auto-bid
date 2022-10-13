// import './header.css';
export default function Header(props) {
    return (
        <div className="nav">
            <div data-collapse="medium" data-animation="default" data-duration="200" data-easing="ease-in-out" data-easing2="ease-in-out" role="banner" className="nav_component w-nav">
                <div className="page-padding">
                    <div className="nav_container">
                        <a href="#" className="nav_logo-link w-nav-brand">
                            <img src="../../public/Final-AutoBid-360-Logo.svg" loading="lazy" alt="" className="nav_logo" />
                        </a>
                        <nav role="navigation" className="nav_menu w-nav-menu">
                            <div className="nav_link-wrapper">
                                <div className="nav_link-list">
                                    <a href="index.html" aria-current="page" className="nav_link is-stroke w-nav-link w--current">Home</a>
                                    <a href="pricing.html" className="nav_link is-stroke w-nav-link">Pricing</a>
                                    <a href="about.html" className="nav_link is-stroke w-nav-link">About</a>
                                    <a href="contact.html" className="nav_link is-stroke w-nav-link">Contact</a>
                                    <a href="#" className="nav_link is-stroke w-nav-link">Help</a>
                                </div>
                                <div className="nav_link-list is-last">
                                    <div data-hover="false" data-delay="0" className="nav_dropdown-2 padding-right padding-small w-dropdown">
                                        <div className="nav_dropdown-toggle w-dropdown-toggle">
                                            <div className="nav_label">English</div>
                                            <div className="icon-2 w-icon-dropdown-toggle"></div>
                                        </div>
                                        <nav className="nav_drop-list-lang w-dropdown-list">
                                            <div className="deopdown-list-wrapper is-product">
                                                <div className="dropdown-list-wrap padding-small is-mobile">
                                                    <a href="#" className="margin-bottom margin-xsmall is-lang-wrap w-inline-block">
                                                        <p className="text-size-regular text-color-white text-weight-normal is-lang">English</p>
                                                    </a>
                                                    <a href="#" className="margin-bottom margin-xsmall is-lang-wrap w-inline-block">
                                                        <p className="text-size-regular text-color-white is-lang">Japanese</p>
                                                    </a>
                                                    <a href="#" className="margin-bottom margin-xsmall is-lang-wrap w-inline-block">
                                                        <p className="text-size-regular text-color-white is-lang">Arabic</p>
                                                    </a>
                                                    <a href="#" className="is-lang-wrap w-inline-block">
                                                        <p className="text-size-regular text-color-white is-lang">Spanish</p>
                                                    </a>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                    <a href="login-popup.html" className="button-secondary is-button-small is-button-gold is-nev-button w-button">Login</a>
                                </div>
                            </div>
                        </nav>
                        <div className="nav_menu-button w-nav-button">
                            <div className="nav_menu-icon w-embed"><svg width="24" height="16" viewbox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="7" width="24" height="2" fill="currentColor"></rect>
                                <rect x="8" width="16" height="2" fill="currentColor"></rect>
                                <rect x="12" y="14" width="12" height="2" fill="currentColor"></rect>
                            </svg></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="blank-space"></div>
        </div>);
}