import React from 'react';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
 

const Carouselcard = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="mx-auto min-w-sm flex justify-center mt-12">
        <h1 className="text-center text-3xl font-semibold mb-12 font-sans uppercase text-primary ">
          Our Services
        </h1>
      </div>

      <Slider {...settings}>
        <div className="p-4 container gap-12 flex flex-wrap mx-auto w-full justify-center">
          {/* Your slide content for the first slide */}
          <div className="bg-gray-200 h-72">
            <img src={img1} alt="" />{" "}
          </div>
        </div>
        <div className="p-4">
          {/* Your slide content for the second slide */}
          <div className="bg-gray-200 h-72">
            <img src={img2} alt="" />{" "}
          </div>
        </div>
        <div className="p-4">
          {/* Your slide content for the third slide */}
          <div className="bg-gray-200 h-72">
            <img src={img3} alt="" />{" "}
          </div>
        </div>
        <div className="p-4">
          {/* Your slide content for the third slide */}
          <div className="bg-gray-200 h-72">
            <img src={img4} alt="" />{" "}
          </div>
        </div>
        <div className="p-4">
          {/* Your slide content for the third slide */}
          <div className="bg-gray-200 h-72">
            <img src={img5} alt="" />{" "}
          </div>
        </div>
        <div className="p-4">
          {/* Your slide content for the third slide */}
          <div className="bg-gray-200 h-72">
            <img src={img6} alt="" />{" "}
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </>
  );
}

export default Carouselcard