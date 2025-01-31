/* eslint-disable react/prop-types */
import styled from 'styled-components'

export const SectionStyled = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
`
export const ContainerStyled = styled.div`
  width: 1240px;
  height: 223px;
  display: flex;
  position: relative;
  @media (max-width: 1024px) {
    margin: 0px 30px 0px 30px;
  }
`
const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  object-fit: cover;
  align-items: center;
`
export const TitleStyled = styled.h1`
  color: white;
  font-size: 48px;
  font-weight: 700;
  width: 100%;
  height: 100%;
  background-color: #0000005d;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: 0;
  border-radius: 25px;
  @media (max-width: 1024px) {
    font-size: 36px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`
function Banner({ image, texte }) {
  return (
    <SectionStyled>
      <ContainerStyled>
        <ImageStyled src={image} />
        <TitleStyled>{texte}</TitleStyled>
      </ContainerStyled>
    </SectionStyled>
  )
}

export default Banner
