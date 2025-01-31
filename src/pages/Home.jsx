import Banner from '../components/Banner'
import Thumb from '../components/Thumb'
import logements from '../../src/data/logements.json'
import '../assets/style/Home.css'

function Home() {
  return (
    <div>
      <Banner
        image={'../../src/assets/image/bgImage1.jpg'}
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
