import "./App.css";
import store from "./redux/store";
import UseCases from "./components/use-cases/UseCases.component";
import { Provider } from "react-redux";
import VideoGallery from "./components/video-galley/VideoGallery.component";
import Mints from "./components/Mints";

function App() {
  return <Mints />;
}

export default App;
