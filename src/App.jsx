import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {
  
  const settings = {
    dots: true,
    dotsClass:"slick-dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <>
    <div className="flex justify-center mt-14">
        <h4 className="italic text-xl font-bold border-b-2 border-indigo-500">Card Slider</h4>
    </div>
    <div className="w-2/3 m-auto">
        <div className="mt-14">
        <Slider {...settings}> 
        {
          Data.map((d , index)=>(
            <div key={index} className="bg-white h-[450px] rounded-xl">
              <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                  <img src={d.image} alt=""  className="h-44 w-44 rounded-full"/>
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.title}</p>
                <button className="bg-indigo-500 text-white text-xl px-3 p-2 rounded-xl">Read More</button>
              </div>
            </div>
          ))
        }
        </Slider>
        </div>
    </div>
    </>
  );
}
const Data = [
  {
    name:'Shoe 1',
    image: "images/1.jpg",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, qui ipsum illum id voluptatibus architecto"
  },
  {
    name:'Shoe 2',
    image: "images/2.jpg",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, qui ipsum illum id voluptatibus architecto"
  },
  {
    name:'Shoe 3',
    image: "images/3.jpg",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, qui ipsum illum id voluptatibus architecto"
  },
  {
    name:'Shoe 4',
    image: "images/4.jpg",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, qui ipsum illum id voluptatibus architecto"
  },
  {
    name:'Shoe 5',
    image: "images/5.jpg",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, qui ipsum illum id voluptatibus architecto"
  },
  {
    name:'Shoe 6',
    image: "images/6.jpg",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, qui ipsum illum id voluptatibus architecto"
  },
  {
    name:'Shoe 7',
    image: "images/7.jpg",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, qui ipsum illum id voluptatibus architecto"
  },
  {
    name:'Shoe 8',
    image: "images/8.jpg",
    title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga, qui ipsum illum id voluptatibus architecto"
  },
]


export default App;
