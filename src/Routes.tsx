import { Routes as Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import NewGym from './pages/NewGym';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Login />} />
      <Route path="/NewGym" element={<NewGym />} />
    </Switch>
  );
}
