
import './App.css';
import GrandParent from './components/GrandParent';
import { UserProvider } from './components/useContext';
import List from './components/List';
import PostForm from './PostForm';

function App() {
  return (
    <div className="App">
      {/* <UserProvider value = "Alok">
        <GrandParent />
      </UserProvider> */}
      {/* <List /> */}
      <PostForm />
    </div>
  );
}

export default App;
