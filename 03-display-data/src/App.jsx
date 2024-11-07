import './App.css';


const profile = {
  name: 'Alice',
  imgUrl: 'https://kh.wiki.gallery/images/thumb/a/ae/Alice_KHREC.png/800px-Alice_KHREC.png',
  imgSize: 90,
};

function App() {
  return (
    <div>
      <h1>{profile.name}</h1>
      <img
        className="avatar"              // External CSS    
        src={profile.imgUrl}
        alt={'Photo of ' + profile.name}
        style={{                       //   Inline CSS  
          width: profile.imgSize,
          height: profile.imgSize
        }}
      />
    </div>
  );
}

export default App;
