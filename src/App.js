import './App.css';
import Sedans from './Images/icon-sedans.svg'
import Suvs from './Images/icon-suvs.svg'
import Luxury from './Images/icon-luxury.svg'

function App() {
  return (
    <div className='main-container'>
      <div className='main-wrapper bd-container'>

        <div className='card sedans'>
          <img src={Sedans} alt="" />
            <h2>SEDANS</h2>

            <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
            or on your next road trip.</p>

            <button className='btn-learn-more'>
              Learn More
            </button>
        </div>

        <div className='card suv'>
          <img src={Suvs} alt="" />
            <h2>SUVs</h2>

            <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
            rental and arrive in style.</p>

            <button className='btn-learn-more'>
              Learn More
            </button>
        </div>

        <div className='card'>
          <img src={Luxury} alt="" />
            <h2>Luxury</h2>

            <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
            rental and arrive in style.</p>

            <button className='btn-learn-more'>
              Learn More
            </button>
        </div>

      </div>
    </div>
  );
}

export default App;
