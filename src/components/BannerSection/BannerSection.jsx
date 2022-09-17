import "./bannerSection.scss";
// import Button from '@mui/material/Button';

const BannerSection = () => {
    return(
        <div className="bannerSection">
            <div className="banner-container">
                <div className="banner-item">
                    <h2 className="banner-title">Sewa Mobil di (Lokasimu) Sekarang</h2>
                    <p className="banner-desc">Sewa Mobil ternyaman, teraman, terpercaya, terasik di sekitar anda </p>
                    <button className="banner-btn">Mulai Sewa Mobil</button>
                </div>
            </div>
        </div>
    )
}

export default BannerSection