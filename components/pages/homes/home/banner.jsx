import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import banner1 from "../../../../public/assets/img/banner/banner-three.png";
import banner2 from "../../../../public/assets/img/banner/banner-three-2.png";
import shape from "../../../../public/assets/img/banner/banner-three-shape-overlay.png";

const BannerThree = () => {
  	return (
		<>
        <div className="banner__three">
            <Swiper
                effect= 'fade'
                loop={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                    reverseDirection: false,
                }}
                modules={[Autoplay, EffectFade]}
            >

                <SwiperSlide>
                    <div className="banner__three-single-slide" style={{backgroundImage: `url(${banner2.src})`}}>
                        <div className="banner__three-bg-shape-overlay" style={{backgroundImage: `url(${shape.src})`}}></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-10">
                                    <div className="banner__three-content">
                                    <h2>Redefining Reality Through Immersive Experiences</h2>
                                        <p>Our work transforms environments into interactive journeys—whether it’s 
                                        showcasing architectural marvels, enhancing educational spaces, or revolutionizing corporate presentations.</p>
                                        <Link href="/" className="btn-two">Read More<i className="fas fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
		</>
	);
};

export default BannerThree;