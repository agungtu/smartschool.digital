"use client";

import React from "react";

const featuresData = [
  {
    icon: "icofont-sun",
    title: "1200++ Sekolah",
    text: "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.",
    duration: "800",
    delay: "100",
  },
  {
    icon: "icofont-light-bulb",
    title: "300.000++ User",
    text: "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.",
    duration: "800",
    delay: "200",
  },
  {
    icon: "icofont-imac",
    title: "500.000++ Transaksi",
    text: "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.",
    duration: "800",
    delay: "300",
  },
  // {
  //   icon: "icofont-code-alt",
  //   title: "CLEAN CODES",
  //   text: "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.",
  //   duration: "800",
  //   delay: "400",
  // },
  // {
  //   icon: "icofont-eye",
  //   title: "RETINA READY",
  //   text: "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.",
  //   duration: "800",
  //   delay: "500",
  // },
  // {
  //   icon: "icofont-space-shuttle",
  //   title: "UNLIMITED FEATURES",
  //   text: "There are many variations of passages of Lorem Ipsum available,but the majorityhave suffered alteration.",
  //   duration: "800",
  //   delay: "600",
  // },
];

const Features: React.FC = () => {
  return (
    <>
      <div id="pengguna" className="awsome-features pt-100 pb-70">
        <div className="container">
          <div
            className="section-title"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <h2 style={{ color: "#006677" }}>User</h2>
            <h3 style={{ color: "#006677" }}>Tersebar di seluruh wilayah Indonesia</h3>
          </div>

          <div className="row justify-content-center">
            {featuresData &&
              featuresData.map((value, i) => (
                <div className="col-md-6 col-lg-4"  key={i}>
                  <div
                    className="single-feature mb-30 rounded-4" style={{backgroundColor : "#006677"}}
                    data-aos="fade-in"
                    data-aos-duration={value.duration}
                    data-aos-delay={value.delay}
                  >
                    <div className="feature-icon" >
                      <i className={value.icon}></i>
                    </div>
                    <h4 style={{color : "white"}}>{value.title}</h4>
                    {/* <p>{value.text}</p> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
