
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const Carousel = ({ title, category }) => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const token = location.state?.token;

  useEffect(() => {
    const fetchData = async () => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Token ${token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      try {
        const response = await fetch(`https://untitled-twkmuar27a-uc.a.run.app/api/`, requestOptions);
        const data = await response.json();
        console.log("API Data:", data);         const filteredItems = data.filter(item => item.prompt.trim().toLowerCase() === category.trim().toLowerCase());
        console.log("Filtered Items:", filteredItems); 
        setItems(filteredItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category, token]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const visibleItems = items.slice(currentIndex * 4, currentIndex * 4 + 4);

  return (
    <div className="carousel mb-12">
      <h2 className="text-white text-2xl mb-4">{title}</h2>
      <div className="relative">
        <div className="flex space-x-8">
          {visibleItems.map((item, index) => (
            <div key={index} className="lg:min-w-[350px] min-w-[300px] min-h-[450px] rounded-lg p-4">
              <img src={item.image_url} alt={item.title} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
        <div className="absolute lg:right-24 -right-8 mt-4 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: Math.ceil(items.length / 4) }).map((_, index) => (
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
