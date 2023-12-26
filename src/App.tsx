import ContentPanel from './components/ContentPanel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Main } from './components/StyledElements/Layout';
import {
  StyledH1,
  StyledP,
} from './components/StyledElements/TextElements/index';

function App() {
  return (
    <>
      <Main>
        <StyledH1>OSODY STUDIOS</StyledH1>
        <div className="slogan-nav">
          <StyledP>
            Designs from not only programmers & designers but visioneers.
          </StyledP>
          <Navbar />
        </div>
        <ContentPanel />
        <Footer />
      </Main>
    </>
  );
}

export default App;
