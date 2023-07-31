import {Link} from "react-router-dom";
import MapView from './MapView/MapView';
import MapInfo from './MapInfo/MapInfo';
import Navegation from '../../../Navegation/Navegation';


const Zone = () => {
  return (
    <>
      <section className='zonegeneral'>
        <Link to="/info"><p>back to Formación</p></Link>
        <h2>Tu Zona</h2>

        <MapView />
        <MapInfo />

      </section>
      <Navegation />
    </>
)
};


export default Zone;
