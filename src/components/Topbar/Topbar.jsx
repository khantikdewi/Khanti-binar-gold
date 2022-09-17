import "./topbar.scss";

const Topbar = () => {
    return(
        <div className="topbar">
            <div className="topbar-wrapper">
                <div className="topbar-left">
                    <a href="#intro" className="logo">BCR.</a>
                </div>
                <div className="topbar-right">
                    <div className="item-container">
                        <a className="topbar-menu" href="#ourServices">Our Services</a>
                    </div>
                    <div className="item-container">
                        <a className="topbar-menu" href="#whyUS">Why Us</a>
                    </div>
                    <div className="item-container">
                        <a className="topbar-menu" href="#testimonials">Testimonials</a>
                    </div>
                    <div className="item-container">
                        <a className="topbar-menu" href="#faqSection">FAQ</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar