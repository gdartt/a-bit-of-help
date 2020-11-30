import "./App.scss";

import Footer from '../Footer';
import Banner from '../Banner';
import AboutUs from '../AboutUs';

function App() {
  return (
    <div className="app">
        <p>A Bit Of Help</p>
        <Banner />
        <AboutUs />
        <Footer />
    </div>
  );
}

export default App;