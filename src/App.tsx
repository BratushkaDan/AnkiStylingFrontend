import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { Footer, Header } from './Components/Menu';

import { useSyncTheme } from './hooks/useThemeLoader';

import { AnkiDocs, Application, Demonstration, MainPage, MarkdownDocumentation, NotFoundPage } from './pages';

const ApplicationContainer = styled.div`
  & {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  & > :nth-child(2) {
    flex: 1;
  }
`;

function App() {
  useSyncTheme();

  return (
    <>
      <ApplicationContainer>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/anki-docs" element={<AnkiDocs />} />
          <Route path="/app" element={<Application />} />
          <Route path="/demo" element={<Demonstration />} />
          <Route path="/md-docs" element={<MarkdownDocumentation />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </ApplicationContainer>
    </>
  );
}

export default App;
