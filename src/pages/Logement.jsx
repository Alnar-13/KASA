/* eslint-disable react-hooks/rules-of-hooks */
import { useParams, Navigate } from 'react-router-dom'
import LogementsData from '../data/logements.json'
import '../assets/style/Logement.css'
import Collapse from '../components/Collapse'
import ArrowLeft from '../assets/image/arrow-left.png'
import ArrowRight from '../assets/image/arrow-right.png'
import Rating from '../components/Rating'
import { useState } from 'react'

function Logement() {
  // Hook permetant d'accéder a l'id depuis l'url
  const { id } = useParams()
  const selectedLogement = LogementsData.find((house) => house.id === id)
  if (!selectedLogement) {
    return <Navigate to="*" />
  }
  const tags = selectedLogement.tags
  const pictures = selectedLogement.pictures
  const length = pictures.length

  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === pictures.length - 1 ? 0 : slide + 1)
  }
  const prevSlide = () => {
    setSlide(slide === 0 ? pictures.length - 1 : slide - 1)
  }
  return (
    <>
      <div className="container">
        <div className="container-carrousel">
          <div className="carrousel">
            <div className="slides">
              {pictures.map((item, index) => {
                return (
                  <img
                    src={item}
                    alt="logements"
                    key={index}
                    className={slide === index ? 'slide' : 'slide-hidden'}
                  />
                )
              })}
              {length > 1 && (
                <span className="slide-number">
                  {slide + 1}/{pictures.length}
                </span>
              )}
              {length > 1 && (
                <img
                  className="arrow-left"
                  src={ArrowLeft}
                  onClick={prevSlide}
                />
              )}
              {length > 1 && (
                <img
                  className="arrow-right"
                  src={ArrowRight}
                  onClick={nextSlide}
                />
              )}
            </div>
          </div>
        </div>
        <div className="container-informations">
          <div className="container-content">
            <div className="title-location-tags">
              <div className="logement-title">{selectedLogement.title}</div>
              <div className="logement-location">
                {selectedLogement.location}
              </div>
              <div className="tags-rating">
                <ul className="logement-tags">
                  {tags.map((tag, index) => {
                    return <li key={(tag, index)}>{tag}</li>
                  })}
                </ul>
              </div>
            </div>
            <div className="container-host-rating">
              <div className="container-host">
                <div className="host-name">{selectedLogement.host.name}</div>
                <img
                  src={selectedLogement.host.picture}
                  className="host-picture"
                />
              </div>
              <Rating note={selectedLogement.rating} />
            </div>
          </div>
        </div>
        <div className="container-dropdowns">
          <div className="dropdowns">
            <div className="container-desc">
              <Collapse
                title="Description"
                content={<p>{selectedLogement.description}</p>}
              />
            </div>
            <div className="container-equip">
              <Collapse
                title="Équipements"
                content={
                  <ul>
                    {selectedLogement.equipments.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logement
