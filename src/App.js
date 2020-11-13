import './App.css';
import FilterContainer from './containers/filter';
import HeaderContainer from './containers/header';
import ListContainer from './containers/list';

function App() {
  return (
    <>
      <HeaderContainer />
      <FilterContainer />
      <ListContainer />
    </>
  );
}

export default App;
