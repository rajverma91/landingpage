import icon from '../../../../public/assets/img/icon/project-details-icon.png';
import image1 from '../../../../public/assets/img/portfolio/project-details.png';
import image2 from '../../../../public/assets/img/portfolio/project-details-2.png';


const PortfolioDetailsMain = ({singleData}) => {
    return (
        <div className="project__details section-padding">
        <div className="container">
            <div className="row gy-4 mb-40 justify-content-center">
                <div className="col-xl-4 col-lg-5">
                    <div className="project-feature">
                        <h4>3D Visualization</h4>
                        <div className="project-feature-icon">
                            <img src={icon.src} alt="3D Visualization" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                    <div className="project-feature">
                        <h4>Virtual Reality</h4>
                        <div className="project-feature-icon">
                            <img src={icon.src} alt="Virtual Reality" />
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                    <div className="project-feature">
                        <h4>Data-Driven Insights</h4>
                        <div className="project-feature-icon">
                            <img src={icon.src} alt="Data-Driven Insights" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="project__details-thumb">
                        <img src={singleData.image.src} alt={singleData.title} />
                      
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="project__details-content">
                        <div className="project__details-content-mid">
                            {/* <p>{singleData.details.description}</p> */}
                            <div dangerouslySetInnerHTML={{ __html: singleData.details.listdata1 }}></div>
                           
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
    );
};

export default PortfolioDetailsMain;