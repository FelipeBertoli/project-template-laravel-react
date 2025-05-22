import './App.css';
import { BrowserRouter as Router,} from 'react-router-dom';
import { AuthProvider } from './utils/context/AuthContext';
import { Footer, Header } from './components/ComponentsModule';
import AppRoutes from './utils/routes/AppRoutes';

function App() {
  const mainNavList = [
    { label: "Item 1", link: "#1" },
    { label: "Item 2", link: "#2" },
    { label: "Item 3", link: "#3" }
  ];

  const menuNavList = [
    { label: "Item 1", link: "#1", icon: "picture" },
    { label: "Item 2", link: "#2", icon: "picture" },
    { label: "Item 3", link: "#3", icon: "picture" }
  ];

  const actionList = [
    { icon: "ss-picture", link: "" },
    { icon: "ss-picture", link: "" },
    { icon: "ss-picture", link: "" },
  ]

  return (

    <AuthProvider>
      <Router>
        <div className="app-wrapper">
          <Header type="classic" menuNavList={menuNavList} headerNavList={mainNavList} headerActionList={actionList} />
          <AppRoutes />
          <Footer type="classic" navList={mainNavList} actionList={actionList} />
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;
