import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import RootRoute from './utils/routes/RootRoute';
import { AuthProvider } from './utils/context/AuthContext';
import { Footer, Header } from './components/ComponentsModule';

function App() {
  return (

    <AuthProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<RootRoute />} />
        </Routes>
        <Footer type="classic"/>
      </Router>
    </AuthProvider>

  );
}

export default App;
