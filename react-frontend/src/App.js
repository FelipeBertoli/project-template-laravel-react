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
        <Header type="hybrid" showActions={true} navItemStyle="contained"/>
        <Routes>
          <Route path="/" element={<RootRoute />} />
        </Routes>
        <Footer/>
      </Router>
    </AuthProvider>

  );
}

export default App;
