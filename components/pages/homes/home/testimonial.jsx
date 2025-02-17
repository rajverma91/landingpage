import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation} from 'swiper/modules';
import testimonialBg from "../../../../public/assets/img/testimonial/testimonial-2.png";
import quoteIcon from "../../../../public/assets/img/testimonial/testimonial-quote.png";
import Link from "next/link";

const TestimonialTwo = () => {
const slideControl = {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },			
    autoplay: {
        delay: 4000,
        reverseDirection: false,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
};

    return (
        <>        
        <div className="testimonial__two section-padding">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-xl-8 col-lg-8 col-md-7">
                        <div className="testimonial__two-title">
                            <span className="subtitle-one">Praise & Feedback</span>
                            <h2>Our Clients Speak: Excellence in AR/VR Solutions
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__two-left" style={{backgroundImage: `url(${testimonialBg.src})`}}></div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="testimonial__two-right">
                        <Swiper modules={[EffectFade, Autoplay, Navigation]} {...slideControl}>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                            <h4>Rohit Malhotra</h4>
                                            <span>CEO, Skyline Properties Pvt. Ltd.</span>
                                        </div>
                                    </div>
									<p>Borning Studios revolutionized how we showcase properties with immersive VR experiences and 360° views. Their innovative approach captivated our clients and elevated engagement. A game-changer for real estate!
                                    </p>
                                    <div className="single-slider-user-rating mt-30">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="single-slider">
                                    <div className="single-slider-user">
                                        <div className="single-slider-user-name">
                                        <h4>Rohit Malhotra</h4>
                                            <span>CEO, Skyline Properties Pvt. Ltd.</span>
                                        </div>
                                    </div>
									<p>Borning Studios revolutionized how we showcase properties with immersive VR experiences and 360° views. Their innovative approach captivated our clients and elevated engagement. A game-changer for real estate!
                                    </p>
                                    <div className="single-slider-user-rating mt-30">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                            <div className="testimonial__two-right-bottom">
                                <div className="slider-arrow">
                                    <i className="swiper-button-prev fas fa-arrow-left"></i>
                                    <i className="swiper-button-next fas fa-arrow-right"></i>
                                </div>
							<div className="slider-quote">
								<img src={quoteIcon.src} alt="image" />
							</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
        </>
    );
};

export default TestimonialTwo;