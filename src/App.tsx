import { useRoutes } from 'react-router-dom';
import { routes } from "@routes/routes";
import "./style/global.scss";


/**
 * This is where the routes and the actual application meet 
 */
export function App() {

  const element = useRoutes(routes);

  return element
}


