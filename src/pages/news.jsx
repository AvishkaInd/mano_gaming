import React from 'react';
import bgOverlay from "../images/Background.png";
import {Footer, Header, BlogCard, BlogMain} from "../components";

const News = () => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${bgOverlay})`,
                height: '100%',
                width: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
                <Header/>
                <br/>
                <br/>
                
        
                <div className="mt-8">
                   <div className='py-8 px-12'>
                    <div className='grid grid-cols-4 gap-4'>
                        <div className='col-span-4'>
                        <BlogMain/>
                        </div>
                        <div className='col-span-3'>
                          
                        <BlogCard/>
                        </div>
                        <div className='col-span-1'>
                              <h3 className='blog-header-bg rounded-lg text-white p-2'>Latest Blogs</h3>
                              <BlogMain/>
                        </div>
                    </div>
                       
                        
                   </div>
                </div>
                <Footer/>
            </div>
        </>
    );
};

export default News;