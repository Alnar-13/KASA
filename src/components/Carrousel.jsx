/* eslint-disable react-hooks/rules-of-hooks */
import { useParams, Navigate } from 'react-router-dom';
import LogementsData from '../data/logements.json';
import '../assets/style/Logement.scss';
import { useState } from 'react';
import ArrowLeft from '../assets/image/arrow-left.png';
import ArrowRight from '../assets/image/arrow-right.png';

function Logement() {
  // Hook permettant d'accéder à l'id depuis l'URL
  const { id } = useParams();
  const selectedLogement = LogementsData.find((house) => house.id === id);

  if (!selectedLogement) {
    return <Navigate to="*" />;
  }

  const pictures = selectedLogement.pictures;
  const length = pictures.length;

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1);
  };

  return (
    <div className="container-carrousel">
      <div className="carrousel">
        <div className="slides">
          {pictures.map((item, index) => (
            <img
              src={item}
              alt="logements"
              key={index}
              className={slide === index ? 'slide' : 'slide-hidden'}
            />
          ))}
          {length > 1 && (
            <span className="slide-number">
              {slide + 1}/{pictures.length}
            </span>
          )}
          {length > 1 && (
            <img className="arrow-left" src={ArrowLeft} onClick={prevSlide} />
          )}
          {length > 1 && (
            <img className="arrow-right" src={ArrowRight} onClick={nextSlide} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Logement;