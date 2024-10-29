
import Logo from '@assets/img/logo/logo.png';
import gallery1 from "@assets/img/logo/gallery1.jpeg";
import gallery2 from "@assets/img/logo/gallery2.png";
import gallery3 from "@assets/img/logo/gallery3.jpeg";
import gallery4 from "@assets/img/logo/gallery4.jpeg";
import gallery5 from "@assets/img/logo/gallery5.jpeg";
import gallery6 from "@assets/img/logo/gallery6.jpeg";

import p1 from '@assets/img/New folder/1.png'
import p2 from '@assets/img/New folder/2.png'
import p3 from '@assets/img/New folder/3.png'
import p4 from '@assets/img/New folder/4.png'
import p5 from '@assets/img/New folder/5.png'
import p6 from '@assets/img/New folder/6.jpg'



const footerData = {
    description: {
        id: 1,
        logo: Logo,
        description: 'Lorem ipsum dolor amet consectetur adipisicing elit sed do eiusmod',
    },

    gallery: {
        id: 2,
        title: 'Our Gallery',
         galleryData:[
            {
               id:1,
               image:p1
            },
            {
               id:2,
               image:p2
            },
            {
               id:3,
               image:p3
            },
            {
               id:4,
               image:p4
            },
            {
               id:5,
               image:p5
            },
            {
               id:6,
               image:p6
            },
            
         ]
    },

    socialLink: {
        id: 3,
        title:'Follow Me',
        description: 'Connect me with social media',
        socialIcons: [
            {
                id: 1,
                icon: 'fa-brands fa-facebook-f',
                url: 'https://www.facebook.com/globalhoneybee',
            },
            {
                id: 2,
                icon: 'fa-brands fa-twitter',
                url: 'https://x.com/globalhoneybee',
            },
            {
                id: 3,
                icon: 'fa-brands fa-instagram',
                url: 'https://www.instagram.com/globalhoneybee/',
            },
            {
                id: 4,
                icon: 'fa-brands fa-linkedin',
                url: 'https://www.linkedin.com/company/global-honey-bee/',
            },
        ]
    },
    quickLinks: {
        id: 4,
        title: 'Contact Us',
        address: [
            //home-one-data
            {
                id: 1,
                contactInfo: 'https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873',
                contact: 'Global Honey Bee,E-57, Sector 63,Noida, GBN 201301',
                addressWrapperClass:'fa-sharp fa-solid fa-location-dot'
            },
            // {
            //     id: 2,
            //     contactInfo: 'tel:8309264634',
            //     contact: '8309264634',
            //     addressWrapperClass:'fa-sharp fa-solid fa-phone'
            // },
            // {
            //     id: 3,
            //     contactInfo: 'mailto:contact@camblissstudio.com',
            //     contact: 'contact@camblissstudio.com',
            //     addressWrapperClass:'fa-sharp fa-solid fa-envelope'
            // },
            //home-two-data
            {
                id: 4,
                contactInfo: 'mailto:hello@ghb.digital',
                contact: 'hello@ghb.digital',
                contactClass:'contact-mail',
                addressWrapperClass:'fa-sharp fa-solid fa-envelope',
                contactTimeClass:'fm-contact-hours',
                contactTime:'Response within 24hrs'
            },
            {
                id: 5,
                contactInfo: 'tel:7042427719',
                contact: '+91 7042427719',
                contactClass:'contact-call',
                addressWrapperClass:'fa-sharp fa-solid fa-phone',
                contactTimeClass:'fm-contact-time',
                contactTime:'Mon - Fri / 9 am - 5:30 pm'
            },

        ]
    },
}
   

export default footerData;