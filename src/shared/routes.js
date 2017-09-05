// Components
import Home from '../app/home/components/Home';
import About from '../app/about/components/About';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About
  }
];

export default routes;
