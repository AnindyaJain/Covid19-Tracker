import './App.css';
import FilterContainer from './containers/filter';
import HeaderContainer from './containers/header';
import ListContainer from './containers/list';
import Map from './Map'
import "leaflet/dist/leaflet.css";
import FeaturesContainer from './containers/features';


function App() {
  
  return (
    <div className="main_container">
      {/* <div className="fixed_container">
        <HeaderContainer />
      </div> */}
      <HeaderContainer />

      <FilterContainer />
      {/* <FeaturesContainer /> */}
      {/* <ListContainer />  */}
      {/* <FeaturesContainer/>  */}
    </div>
  );
}

export default App;
