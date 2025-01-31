import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ImgStyled = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`
const TitleStyled = styled.h3`
  position: absolute;
  bottom: 0px;
  left: 15px;
  color: white;
  font-size: 18px;
  font-weight: 700;
`
const ContainerStyled = styled(Link)`
  width: 100%;
  height: 100%;
  position: relative;
`
//pour chaque éléments du tableau 'logements' on créer: un link vers la route logement + id du logement, l'img du logement et le titre du logement
const Thumb = ({ logements }) => {
  return logements.map((logement) => (
    <ContainerStyled to={`/logement/${logement.id}`} key={logement.id}>
      <ImgStyled src={logement.cover} alt={logement.title} />
      <TitleStyled>{logement.title}</TitleStyled>
    </ContainerStyled>
  ))
}
// on définis la proptype (logements), on précise que c'est un tableau, et qu'il est obligatoire
Thumb.propTypes = {
  logements: PropTypes.array.isRequired,
}

export default Thumb
