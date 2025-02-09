import Link from 'next/link';
import banner2 from "../../../../public/assets/img/banner/citybg-removebg-preview.png";
const BackgroundThree = () => {
    return (
        <>
            <div className="services__three services__three_bg section-padding" style={{backgroundImage: `url(${banner2.src})`}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="background__three-title text-center">
                                <h2>Experience Urban Wonders Like  <span className="highlighted-two">Never Before </span></h2>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </div>      
        </>
    );
};

export default BackgroundThree;