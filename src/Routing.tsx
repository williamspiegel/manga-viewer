import { Link, Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { useTranslation } from 'react-i18next';
import Home from './containers/home/Home';
import Settings from './containers/settings/Settings';

// Set up a ReactLocation instance
const location = new ReactLocation();

export default function Routing() {
  const { t } = useTranslation();
  return (
    <Router
      location={location}
      routes={[
        { path: '/', element: <Home /> },
        { path: 'settings', element: <Settings /> },
      ]}
    >
      <div>
        <Link to='/' activeOptions={{ exact: true }}>
          {t('Home')}
        </Link>
        <Link to='settings'>{t('Settings')}</Link>
      </div>
      <hr />
      <Outlet /> {/* Start rendering router matches */}
    </Router>
  );
}
