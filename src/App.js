import './App.css';
import Video from "./pages/Video";

function App() {
  return (
    <div className="App">
      <div className="app_videos">
        <Video
            likes={1300}
            messages={702}
            shares={321}
            name="Livia"
            description="Descrição de um Video"
            music="uma musica qualquer"
            url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video
            likes={1222}
            messages={502}
            shares={21}
            name="Livinha"
            description="Descrição de um Video qualquer"
            music="Musica qualquer"
            url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />
      </div>
    </div>
  );
}

export default App;
