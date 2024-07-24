// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import SwiperCore, {Autoplay,Navigation } from 'swiper';
// // Configure Swiper to use modules
// SwiperCore.use([Navigation, Autoplay]);

// const Carousel = () => {
//   const slides = [
//     { id: 1, imgSrc: 'image1.jpg' },
//     { id: 2, imgSrc: 'image2.jpg' },
//     { id: 3, imgSrc: 'image3.jpg' },
//   ];

//   return (
//     <Swiper
//       spaceBetween={16}
//       slidesPerView={1.5}
//       pagination={{ clickable: true, el: '.custom-pagination' }}
//       breakpoints={{
//         640: {
//           slidesPerView: 2.5,
//         },
//         1024: {
//           slidesPerView: 3.5,
//         },
//       }}
//       className="swiper-container"
//     >
//       {slides.map((slide) => (
//         <SwiperSlide key={slide.id} className="bg-gray-800 rounded-xl overflow-hidden">
//           <img src={slide.imgSrc} alt={`Slide ${slide.id}`} className="w-full h-64 object-cover" />
//         </SwiperSlide>
//       ))}
//       <div className="custom-pagination flex justify-end mt-4"></div>
//     </Swiper>
//   );
// };

// export default Carousel;
import  { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Carousel = ({ title, category }) => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const token = location.state?.token;
  useEffect(() => {
    const fetchData = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Token  ${token}` );

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      try {
        const response = await fetch(`https://untitled-twkmuar27a-uc.a.run.app/api/`, requestOptions);
        const data = await response.json();
        setItems(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const visibleItems = items.slice(currentIndex * 4, currentIndex * 4 + 4);

  return (
    <div className="carousel  mb-12">
      <h2 className="text-white text-2xl mb-4">{title}</h2>
      <div className="relative">
        <div className="flex space-x-8">
          {visibleItems.map((item, index) => (
            <div key={index} className="lg:min-w-[350px] min-w-[300px] min-h-[450px]  rounded-lg p-4">
              <img src={item.image_url} alt={item.title} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
        <div className="absolute lg:right-24 -right-8   mt-4 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: Math.ceil(items.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-500' : 'bg-white'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
