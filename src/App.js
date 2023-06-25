import './App.css';
import Header from './components/Header';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App w-full h-full pt-16 bg-slate-500">
     <Header/>
     <UserList/>
    </div>
  );
}

export default App;
