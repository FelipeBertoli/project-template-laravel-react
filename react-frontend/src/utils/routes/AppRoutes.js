import { Routes, Route } from 'react-router-dom';
import RootRoute from './RootRoute';
import Register from '../../screens/public/Register';
import PageLayout from '../../components/patterns/PageLayout';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<PageLayout/>}>
        <Route path="/" element={<RootRoute/>} />
        <Route path="/register" element={<Register/>} />
      </Route>
    </Routes>
  );
}
