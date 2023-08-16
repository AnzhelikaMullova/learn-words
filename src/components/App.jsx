
import '../style/App.scss';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Home from './Home/Home';
import Slider from './Slider/Slider';
import WordList from './Table/WordList';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Slider></Slider>
      <WordList />
      <Home></Home>
      <Main>

      </Main>
      <Footer></Footer>




    </div>
  );
}

export default App;
