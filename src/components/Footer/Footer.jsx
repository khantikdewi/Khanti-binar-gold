import "./footer.scss";
import { 
    dataComponents,
    dataSosmed 
} from "../../data";

const Footer = () => {
    return(
        <div className="footer-container" id="footer">
            <div className="footer-wrapper">
                <div className="footer-one">
                    <h3>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 67200</h3>
                    <p>binarcarrental@gmail.com</p>
                    <p>+62851-5604-5601</p>
                </div>
                <div className="footer-two">
                    {dataComponents.map(components => <a href={components.link} className="menu">{components.title}</a>)}
                </div>
                <div className="footer-three">
                    <div className="footer-three-container">
                        <p>Connect With Us</p>
                        <div>
                            {dataSosmed.map(sosmed => 
                                <a href={sosmed.link}>
                                    <img src={sosmed.img} alt="" className="footer-icon"/>
                                </a>)}
                        </div>
                    </div>
                </div>
                <div className="footer-four">
                    <h4>Copyright Binar 2022</h4>
                    <h1>Binar Car Rental.</h1>
                </div>
            </div>
        </div>
    )
}

export default Footer