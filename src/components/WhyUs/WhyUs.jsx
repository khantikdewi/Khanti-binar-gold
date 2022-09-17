import {whuysData} from "../../data";
import "./whyUs.scss";

const WhyUs = () => {

    return(
        <div className="whyUs" id="whyUS">
            <h2>Why Us?</h2>
            <p className="whyUs-desc">Mengapa harus Binar Car Rental?</p>
            
            <div className="card">
            {whuysData.map((d) => (
            <div className="list">
                    <div className="list-item">
                        <img src={d.image} alt=""/>
                        <h3>{d.title}</h3>
                        <p>{d.desc}</p>
                    </div>
                    </div>
                    ))}
                </div>
        </div>
    )
}

export default WhyUs