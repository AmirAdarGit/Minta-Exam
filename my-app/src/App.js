import './App.css';
import store from './redux/store'
import UseCases from './components/UseCases'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UseCases/>
      </div>
    </Provider>
  );
}

export default App;
