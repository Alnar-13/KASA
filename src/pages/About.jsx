import '../assets/style/About.scss'
import AboutData from '../data/about.json'
import Collapse from '../components/Collapse'
import Banner from '../components/Banner'
import bgImage2 from '../assets/image/bgImage2.jpg'

function About() {
  return (
    <div style={{ paddingBottom: '30px' }}>
      <Banner image={bgImage2}></Banner>
      {AboutData.map((index) => {
        // avec map on parcours le tableau 'AboutData' et pour chaque élément :
        return (
          <div key={index.id}>
            <Collapse content={index.content} title={index.title} />
          </div>
        )
      })}
    </div>
  )
}
export default About
