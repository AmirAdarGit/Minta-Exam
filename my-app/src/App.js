import './App.css';
import store from './redux/store'
import UseCases from './components/UseCases'
import { Provider } from 'react-redux'
import VideoGallery from './components/VideoGallery'
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UseCases/>
        <VideoGallery/>
      </div>
    </Provider>
  );
}

export default App;
