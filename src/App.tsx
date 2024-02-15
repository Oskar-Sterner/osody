import ContentPanel from './components/ContentPanel';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Main } from './components/StyledElements/Layout';
import { ActiveComponentProvider } from './ActiveComponentContext';
import {
  StyledH1,
  StyledP,
} from './components/StyledElements/TextElements/index';
import AuthProvider from 'react-auth-kit';
import createStore from 'react-auth-kit/createStore';

interface IUserData {
  name: string;
  uuid: string;
}

const store = createStore<IUserData>({
  authName: '_auth',
  authType: 'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});

function App() {
  return (
    <AuthProvider store={store}>
      <ActiveComponentProvider>
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
      </ActiveComponentProvider>
    </AuthProvider>
  );
}

export default App;
