import React, { useState } from 'react';
import Count from '../../common/count';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const faqs = [
        {
            question: "What services does Borning Studio offer?",
            answer: "Borning Studio specializes in creating immersive AR/VR solutions tailored for industries like real estate, education, hospitality, and retail. Our services include virtual tours, 3D walkthroughs, aerial 360° videos, digital twins, and XR solutions to provide interactive and visually compelling experiences."
        },
        {
            question: "How can a virtual tour benefit my business?",
            answer: "Virtual tours are a powerful tool for enhancing customer engagement and boosting sales. They allow clients to explore your spaces or properties remotely, providing a realistic and interactive experience that builds trust and saves time."
        },
        {
            question: "Can Borning Studio customize solutions for my specific needs?",
            answer: "Absolutely! Our team of experts collaborates with you to understand your unique requirements. Whether it’s for a luxury real estate project, a university campus, or a corporate office, we design and develop solutions that align perfectly with your goals."
        },
        {
            question: "What makes Borning Studio different from other AR/VR providers?",
            answer: " At Borning Studio, we combine innovation, creativity, and precision to deliver high-quality immersive experiences. Our DGCA-certified pilots, ISO-certified processes, and cutting-edge technology ensure exceptional results, making us a trusted partner for forward-thinking businesses."
        },
    ];
    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <>
        <div className="faq__two section-padding">
            <div className="container">
                <div className="row gy-4 align-items-center">
                    <div className="col-xl-6">
                        <div className="faq__two-title">
                            <span className="subtitle-one">Ask Question</span>
                            <h2>Your Questions,   <span className="highlighted-two">Answered</span> Clearly</h2>
                            <p>Explore our comprehensive FAQ to understand how Borning Studio transforms your vision into immersive experiences.</p>
                        </div>
                        <div className="award">
                            <div className="award-wrapper">
                                <div className="award-icon">
                                    <i className="fas fa-award"></i>
                                </div>
                                <div className="award-count">
                                    <h3 className="counter"><Count number={20}/></h3>
                                    <h3>+</h3>
                                </div>
                                <span>Winning Awards</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="faq-collapse">
                            {faqs.map((faq, index) => (
                                <div className="faq-collapse-item" key={index}>
                                    <div className={`faq-collapse-item-card ${activeIndex === index ? 'active' : ''}`}>
                                        <div className="faq-collapse-item-card-header" onClick={() => toggleFaq(index)}>
                                            <h6>{faq.question}</h6>
                                            <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                                        </div>
                                        <div className={`faq-collapse-item-card-header-content ${activeIndex === index ? 'active' : 'display-none'}`}>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>	
                    </div>
                </div>
            </div>
        </div>            
        </>
    );
};

export default Faq;