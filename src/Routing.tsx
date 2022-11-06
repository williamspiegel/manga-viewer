import { Link, Outlet, ReactLocation, Router } from '@tanstack/react-location';
import { useTranslation } from 'react-i18next';
import { ReactComponent as BrowseIcon } from './assets/svg/building-library.svg';
import { ReactComponent as SettingsIcon } from './assets/svg/cog-6-tooth.svg';
import { ReactComponent as HomeIcon } from './assets/svg/home.svg';
import Browse from './containers/browse/Browse';
import Home from './containers/home/Home';
import Settings from './containers/settings/Settings';

// Set up a ReactLocation instance
const location = new ReactLocation();

const getActiveProps = () => ({ className: 'active' });

export default function Routing() {
  const { t } = useTranslation();

  return (
    <Router
      location={location}
      routes={[
        { path: '/', element: <Home /> },
        { path: 'settings', element: <Settings /> },
        { path: 'browse', element: <Browse /> },
      ]}
    >
      <Outlet />
      <div className='btm-nav'>
        <Link
          to='/'
          activeOptions={{ exact: true }}
          getActiveProps={getActiveProps}
        >
          <HomeIcon className='h-5 w-5' />
          <span className='btm-nav-label'>{t('Home')}</span>
        </Link>
        <Link to='browse' getActiveProps={getActiveProps}>
          <BrowseIcon className='h-5 w-5' />
          <span className='btm-nav-label'>{t('Browse')}</span>
        </Link>
        <Link to='settings' getActiveProps={getActiveProps}>
          <SettingsIcon className='h-5 w-5' />
          <span className='btm-nav-label'>{t('Settings')}</span>
        </Link>
      </div>
    </Router>
  );
}
