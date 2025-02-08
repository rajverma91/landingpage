"use client";
import SEO from "@/components/data/seo";
import ScrollToTop from "../../common/scroll/scroll-to-top";
import HeaderOne from "@/components/layout/headers/header/header-one";
import BannerOne from "./banner";
import About from "./about";
import ChooseUs from "./choose-us";
import Features from "./features";
import Portfolio from "./portfolio";
import Pricing from "./pricing";
import WorkArea from "./work";
import FooterOne from "@/components/layout/footers/footer-one";
import Blog from "./blog";
import Testimonial from "./testimonial";

const HomeOne = () => {
    return (
        <div>
            <SEO pageTitle='Technology' />
            <HeaderOne />
            <BannerOne />
            <About />
            <ChooseUs />
            <Features />
            <Portfolio />
            <Pricing />
            <WorkArea />
            <Testimonial />
            <Blog />
            <FooterOne />
            <ScrollToTop />
        </div>
    );
};

export default HomeOne;