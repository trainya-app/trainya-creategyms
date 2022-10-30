import { Routes as Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import NewGym from './pages/NewGym';
import ListGyms from './pages/ListGyms';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Login />} />
      <Route path="/NewGym" element={<NewGym />} />
      <Route path="/List" element={<ListGyms />} />
    </Switch>
  );
}
