import '../assets/style/About.css'
import AboutData from '../data/about.json'
import Collapse from '../components/Collapse'
import Banner from '../components/Banner'

function About() {
  return (
    <div style={{ paddingBottom: '30px' }}>
      <Banner image={'../../src/assets/image/bgImage2.jpg'}></Banner>
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
