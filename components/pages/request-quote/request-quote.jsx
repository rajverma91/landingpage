"use client"

const RequestQuoteMain = () => {
    return (
        <div className="request-quote__area section-padding">
            <div className="container">
                <form action="#">
                    <div className="request-quote__area-inputs">
                        <div className="request-quote__area-input-field">
                            <label for="first-name">Name*</label>
                            <input type="text" id="first-name" placeholder="First" />
                        </div>
                     
                        <div className="request-quote__area-input-field">
                            <label for="email">Email*</label>
                            <input type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label for="number">Number *</label>
                            <input type="text" id="number" placeholder="+ 00 123 4567" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label for="company">Company *</label>
                            <input type="text" id="company" placeholder="Envato" />
                        </div>
                        <div className="request-quote__area-input-field">
                            <label for="website">Website *</label>
                            <input type="text" id="website" placeholder="http://demo.com" />
                        </div>
                    </div>
                    <div className="request-quote__area-service-input">
                        <span>What services can we provide you? *</span>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="seo" />
                            <label for="seo">Digital Twin</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="web-design" />
                            <label for="web-design">3D Walkthrough</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="web-hosting" />
                            <label for="web-hosting">Virtual Tour</label>
                        </div>
                        <div className="request-quote__area-service-input-single">
                            <input type="checkbox" id="maintenance" />
                            <label for="maintenance">Aerial 360°</label>
                        </div>
                    </div>
                    <label for="message" className="mb-2">Message *</label>
                    <textarea id="message" placeholder="Type Here"></textarea>
                    <input type="submit" value="Submit Now" className="btn-two mt-4" />
                </form>
            </div>
        </div>
    );
};

export default RequestQuoteMain;