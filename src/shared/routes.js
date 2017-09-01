// Components
import Home from '../app/components/home/Home';
import About from '../app/components/about/About';

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
