import './App.css';
import Form from './components/Form';
import Event from './components/Event';
import Renderif from './components/Renderif';
import List from './components/List';
import InputComponent from './components/InputComponent';
import UserLis from './components/UserLis';
import SuperForm from './components/SuperForm';

function App() {
 
  const meusItems = ['react','vue', 'angular']

  return (

      <div className="App">
        <SuperForm/>
         
      </div>
  );
}

export default App;
