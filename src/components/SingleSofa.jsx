import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Slider1_img1 from "../assets/img/Slider1_img1.webp";
import Slider1_img2 from "../assets/img/Slider1_img2.webp";
import Slider1_img3 from "../assets/img/Slider1_img3.webp";
import { Star } from "../svgFile/svg";
const ProductData = [
  {
    id: 1,
    ProductImg: Slider1_img1,
    Rating: <Star />,
    Product: "Single Sofa",
    Price: '₹ 1200.00'
  },
  {
    id: 2,
    ProductImg: Slider1_img2,
    Rating: <Star />,
    Product: "Single Sofa",
    Price: '₹ 1200.00'
  },
  {
    id: 3,
    ProductImg: Slider1_img3,
    Rating: <Star />,
    Product: "Single Sofa",
    Price: '₹ 1200.00'
  },
  {
    id: 4,
    ProductImg: Slider1_img1,
    Rating: <Star />,
    Product: "Single Sofa",
    Price: '₹ 1200.00'
  },
  {
    id: 5,
    ProductImg: Slider1_img2,
    Rating: <Star />,
    Product: "Single Sofa",
    Price: '₹ 1200.00'
  },
];
const SingleSofa = () => {
  const card = ProductData.map((ProductData) => (
    <div className="sm:mx-3" key={ProductData.id}>
      <div className="max-w-[295px] max-h-[338px] w-full h-full pb-[27px]  bg-white pl-[17px] pt-[15px] pr-[12px] shadow-[2px_7px_28px_0px_#0000000D] mx-3">
        <img src={ProductData.ProductImg} alt="img1" className="mb-[13px]" />
        <div className="flex justify-between items-center">
          <p className=" font-poppins text-xl leading-normal font-medium text-nowrap ">
            {ProductData.Product}
          </p>
          <span>{ProductData.Rating}</span>
        </div>
        <div className="flex gap-[6.83px] items-center">
          <div className="flex gap-[2.87px] items-center">
            <p className="font-poppins text-[28.68px] leading-normal teext-center font-semibold">
              {ProductData.Price}
            </p>
          </div>
          <div className="flex gap-[1.14px] items-center">
            <p className=" text-[11.37px] font-poppins leading-normal font-normal text-center text-[#C4C4C4]">
              {ProductData.Price}
            </p>
          </div>
        </div>
      </div>
    </div>
  ));
  const btn = React.useRef(null);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    centerPadding: "60px",
    slidesToShow: 3.08,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2.08,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoPlay: true,
          autoPlaySpeed: 1000,
        }
      },
    ]
  };
  return (
    <div className="bg-[#2D39490A] max-lg:max-w-[1320px] max-lg:mx-auto max-lg:px-3 pt-7 md:pt-9 lg:pt-[68px] min-[1280px]:mt-[266px] pb-5 sm:pb-7 md:pb-12 lg:pb-[96px] relative overflow-x-clip">
      <div className="max-w-[741px] max-h-[417px] h-full max-xl:hidden bg-gradient-to-t from-gray-300 to-gray-800 w-full absolute right-0 translate-y-[-153px]"></div>
      <div className="flex flex-wrap flex-row -mx-3">
        <div className="w-5/12 max-lg:w-full px-3 flex justify-center">
          <div>
            <div className="sm:flex items-center sm:gap-[9px]">
              <div className="max-sm:hidden w-[16%] border border-black border-solid "></div>
              <p className="sm:text-xl text-base text-center text-[#BD7D41] max-sm:text-center font-poppins">Shopping Store</p>
            </div>
            <h2 className=" pt-4 sm:pt-[29px] max-sm:text-center text-xl sm:text-[35px] font-poppins font-bold leading-normal max-w-[436px]">Buy trending furniture Products.</h2>
            <p className=" pt-[19px] text-lg font-poppins leading-normal font-normal text-[#000000B2] max-w-[422px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, urna at pulvinar porta</p>
            <div className="flex gap-[14px] pt-[39px]">
              <button className="w-[41px] h-[41px] rounded-[10px] bg-white flex justify-center items-center" onClick={() => btn?.current?.slickPrev()}>
                <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg" >
                  <path d="M0.646446 4.35355C0.451185 4.15829 0.451185 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM21 4.5H1V3.5H21V4.5Z"
                    fill="black" />
                </svg>
              </button>
              <button className="w-[41px] h-[41px] rounded-[10px] bg-white flex justify-center items-center" onClick={() => btn?.current?.slickNext()}>
                <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.3536 4.35355C20.5488 4.15829 20.5488 3.84171 20.3536 3.64645L17.1716 0.464466C16.9763 0.269204 16.6597 0.269204 16.4645 0.464466C16.2692 0.659728 16.2692 0.976311 16.4645 1.17157L19.2929 4L16.4645 6.82843C16.2692 7.02369 16.2692 7.34027 16.4645 7.53553C16.6597 7.7308 16.9763 7.7308 17.1716 7.53553L20.3536 4.35355ZM0 4.5H20V3.5H0V4.5Z" fill="black" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-7/12 mt-0 max-lg:mt-[50px] max-lg:w-full ">
          <Slider ref={btn} {...settings} className=" right-0">{card}</Slider>
        </div>
      </div>
    </div>
  );
};
export default SingleSofa;