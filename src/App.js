import './App.css';

// components
import Profile from './components/Profile';
import UserList from './components/UserList';

// Context
import UserState from './context/User/UserState';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <UserState>
      <UserList />
      <Profile />
    </UserState>
  );
}

export default App;
