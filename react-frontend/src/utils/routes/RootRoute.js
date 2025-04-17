import HomePublic from '../../screens/public/Home';
import HomePrivate from '../../screens/private/Home';
import { useAuth } from '../context/AuthContext';

export default function RootRoute() {
  const { isAuthenticated } = useAuth();

  // Redireciona para área logada caso já esteja autenticado
  return isAuthenticated ? <HomePrivate/> : <HomePublic />;
}
