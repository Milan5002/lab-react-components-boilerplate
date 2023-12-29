import './App.css';
import lake from "./image/lake.JPG";
import GallaryFooter from '/public/components/GallaryFooter';
import GallaryHeader from '../public/components/GallaryHeader';
import GallaryMain from '../public/components/GallaryMain';

const imageData = [
  {
    id:1,
    img:lake 
  },
  {
    id:2,
    img:lake
  },
  {
    id:3,
    img:lake
  },
  {
    id:4,
    img:lake
  }
]

function App() {
  return (
    <div>
      <GallaryHeader />
      <GallaryMain 
      imageData={imageData}
      />
      <GallaryFooter/> 
    </div>
  )
}

export default App;