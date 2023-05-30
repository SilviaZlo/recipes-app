import './App.css';
import Header from './Header';
import Recipes from './Recipes';
import Footer from './Footer';

function App() {

  console.log('App has rendered');

  return (
    <>
      <Header />
      <Recipes />
      <Footer />
    </>
  );
}

export default App;
