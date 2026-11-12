import Banner from '../components/Banner'
import Thumb from '../components/Thumb'
import logements from '../../src/data/logements.json'
import '../assets/style/Home.scss'
import bgImage1 from '../assets/image/bgImage1.jpg'

function Home() {
  return (
    <div>
      <Banner
        image={bgImage1}
        texte="Chez vous et partout ailleurs"
      />
      <div className="section-logements">
        <div className="container-logements">
          <Thumb logements={logements} />
        </div>
      </div>
    </div>
  )
}
export default Home
