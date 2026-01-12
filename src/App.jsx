
import './App.css'
import Title from './components/Title';
import HeroParagraph from './components/HeroParagrahp';
function App() {


  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="img-container">
              <img src="/images/logo-full.svg" alt="Conference logo" />
            </div>

            <Title/>
            <HeroParagraph/>
          </div>

        </div>
      </section>
    </>
  )
}

export default App
