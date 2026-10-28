import { Route, Routes } from 'react-router-dom';
import Library from './components/Library';
import SearchResults from './components/SearchResults';

import SongDetail from './components/SongDetail';

import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import GlobalStyles from './theme/GlobalStyles';
import { AppContainer } from './styles';

function App() {
   
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <AppContainer>
      <Routes>
        <Route path="/biblioteca" element={<Library />} />
        <Route path = '/' element={<SearchResults/>} />
        <Route path = '/song/:id' element={<SongDetail/>} />
      </Routes>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
