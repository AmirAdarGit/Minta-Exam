import './App.css';
import store from './redux/store'
import UseCases from './components/UseCases'
import { Provider } from 'react-redux'
import VideoGallery from './components/VideoGallery'
import { ColoredLine } from './components/ColoredLine'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <ColoredLine color="red" />
        <UseCases/>
        <VideoGallery/>
      </div>
    </Provider>
  );
}

export default App;
