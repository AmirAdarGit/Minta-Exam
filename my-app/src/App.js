import './App.css';
import store from './redux/store'
import UseCases from './components/use-cases/UseCases.component'
import { Provider } from 'react-redux'
import VideoGallery from './components/video-galley/VideoGallery.component'


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
