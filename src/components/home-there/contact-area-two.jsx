import footerData from '@data/footer-data';
import Link from 'next/link';
import React from 'react';

const ContactAreaTwo = () => {

   console.log( footerData.quickLinks.address);
   
    return (
<>
<div className="contact-bottom-area section-spacing-top bg-common-black">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <div className="fm-contact-meta-wrap">
                    {
                       footerData.quickLinks.address.map((item)=>(
                            <div className={item.addressWrapperClass} key={item.id}>
                            <Link href={item.contactInfo}>
                               <p className={item.contactClass}>{item.contact}</p>
                            </Link>
                            <span className={item.contactTimeClass}>{item.contactTime}</span>
                         </div>
                        ))
                    }
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="line bg-common-black">
         <div className="container">
            <div className="border-bottom-white"></div>
         </div>
      </div>
</>
    );
};

export default ContactAreaTwo;