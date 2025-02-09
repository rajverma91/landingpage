"use client"
import SEO from '@/components/data/seo';
import HeaderOne from '@/components/layout/headers/header/header-one';
import BreadCrumb from '../common/breadcrumb';
import RequestQuoteMain from './request-quote';
import FooterOne from '@/components/layout/footers/footer-one';
import ScrollToTop from '../common/scroll/scroll-to-top';
import HeaderTwo from '@/components/layout/headers/header/header-two';
import FooterTwo from '@/components/layout/footers/footer-two';

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Request Quote" />
            <HeaderTwo />
            <BreadCrumb title="Request Quote" innerTitle="Request Quote" />
            <RequestQuoteMain />
            <FooterTwo />
            <ScrollToTop />
        </>
    );
};

export default RequestQuotePage;