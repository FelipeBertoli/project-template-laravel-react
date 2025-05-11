import HomePublic from '../../screens/public/Home';
import HomePrivate from '../../screens/private/Home';
import { useAuth } from '../context/AuthContext';

export default function RootRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <HomePrivate/> : <HomePublic />;
}
