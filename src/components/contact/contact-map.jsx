import React from "react";

const ContactMap = () => {
  return (
    <div className="fm-contact-map-area section-spacing-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="fm-contact-map-wrapper bdFadeBottom">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.40804555!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1730095518278!5m2!1sen!2sin"
                width="600"
                height="450"
               //  style="border:0;"
               //  allowfullscreen=""
               //  loading="lazy"
               //  referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              {/* <iframe src="https://www.google.com/maps/place/Cambliss/@17.3022976,78.5040629,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcba28a18b09ea9:0xccbf37b932caddb6!8m2!3d17.3022976!4d78.5066378!16s%2Fg%2F11k7k_7k91?entry=ttu"></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
