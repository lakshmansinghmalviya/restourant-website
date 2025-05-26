import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slides = [
    {
      img: "/menu/m1.png",
      heading: "Delicious Pasta",
      description: "Savor the rich flavors of our creamy Italian pasta.",
    },
    {
      img: "/menu/m2.png",
      heading: "Spicy Pizza",
      description: "Hot, cheesy, and loaded with toppings.",
    },
    {
      img: "/menu/m1.png",
      heading: "Classic Pasta",
      description: "Traditional taste that brings comfort.",
    },
    {
      img: "/menu/m2.png",
      heading: "Veggie Pizza",
      description: "Healthy and tasty, with fresh garden veggies.",
    },
    {
      img: "/menu/m1.png",
      heading: "Creamy Pasta",
      description: "Perfectly blended herbs and cream.",
    },
    {
      img: "/menu/m2.png",
      heading: "Pepperoni Pizza",
      description: "A crispy crust with spicy pepperoni.",
    },
  ];

  return (
    <div className="slider-container my-2 mx-1">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.img}
              alt={slide.heading}
              className="w-full h-[300px] object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4 rounded-md">
              <h2 className="text-2xl font-bold mb-2">{slide.heading}</h2>
              <p className="text-sm">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
