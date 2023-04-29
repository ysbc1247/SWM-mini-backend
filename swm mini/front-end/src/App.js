import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <div className="flex h-full max-sm:flex-col">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
