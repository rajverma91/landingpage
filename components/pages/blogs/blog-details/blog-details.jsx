import Link from 'next/link';
import Social from '@/components/data/social';
import blogData from '@/components/data/blog-data';
import BlogSidebar from '../blog-sidebar/blog-sidebar';
import icon from '../../../../public/assets/img/icon/blog-details-quote.png';
import image from '../../../../public/assets/img/blog/blog-details.png';
import avatar1 from '../../../../public/assets/img/avatar/avatar-1.jpg';
import avatar2 from '../../../../public/assets/img/avatar/avatar-2.jpg';
import avatar3 from '../../../../public/assets/img/avatar/avatar-3.jpg';


const BlogSingleMain = ({singleData}) => {
    const category = singleData?.title.split(' ').slice(0, 2).join(' ') + '..';

    return (
        <>
        <div className="blog__details section-padding">
            <div className="container">
                <div className="row gy-4 flex-wrap-reverse">
                    <div className="col-xl-8">
                        <div className="blog__details-thumb">
                            <span className="date">{singleData.date} September 2024</span>
                                <img className="img__full" src={singleData.image.src} alt="blog-details-image" />
                            </div>
                            
                            <div className='blogDiscription' dangerouslySetInnerHTML={{ __html: singleData.data }} ></div>

                        <form action="#" className="blog__details-comment-form">
                            <h3>Leave a comment</h3>
                            <p>By using form u agree with the message sorage, you can contact us directly now By using form agree with the message sorage, you can contact us directly now</p>
                            <input type="text" placeholder="Name" />
                            <textarea placeholder="Message here..."></textarea>
                            <input type="submit" value="Sent Message" />
                        </form>
                    </div>
                    <div className="col-xl-4">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>       
        </>
    );
};

export default BlogSingleMain;