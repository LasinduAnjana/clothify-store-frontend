"use client"

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HeroSection = () => {
  return (
    <section className="w-full pb-2">
        <Carousel autoPlay={true} infiniteLoop={true} interval={5000} showThumbs={false} showStatus={false}>
          <div className="object-cover overflow-hidden w-full h-72 md:h-96 lg:h-[30rem]">
            <img src="https://images.unsplash.com/photo-1561526116-e2460f4d40a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
            <p className="legend">UNISEX</p>
          </div>
          <div className="object-cover overflow-hidden w-full h-72 md:h-96 lg:h-[30rem]">
            <img src="https://images.unsplash.com/photo-1493655161922-ef98929de9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
            <p className="legend">LADIES</p>
          </div>
          <div className="object-cover overflow-hidden w-full h-72 md:h-96 lg:h-[30rem]">
            <img src="https://images.unsplash.com/photo-1612464058042-944b7bb70556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" />
            <p className="legend">GENTS</p>
          </div>
          <div className="object-cover overflow-hidden w-full h-72 md:h-96 lg:h-[30rem]">
            <img src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" />
            <p className="legend">KIDS</p>
          </div>
        </Carousel>
      {/* <img
        src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        className="w-full h-72 md:h-96 overflow-hidden object-cover"
      /> */}
    </section>
  );
};

export default HeroSection;
