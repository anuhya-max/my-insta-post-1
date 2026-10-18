import Post from './components/Post'
import rabbitsImg from './rabbits.jpg'
import daisyImg from './daisy.jpg'
import short1Img from './short1.jpg'

function App() {
  return (
    <div style={{ background: '#fafafa', minHeight: '100vh' }}>
      <div style={{ background: 'white', borderBottom: '1px solid #dbdbdb', padding: '12px', textAlign: 'center', fontFamily: 'cursive', fontSize: '30px', position: 'sticky', top: 0, zIndex: 10 }}>
        Instagram
      </div>

      <div style={{ paddingTop: '20px' }}>
        <Post username="nature.moments" location="My Garden • 2h" image={rabbitsImg} likesCount={1234} caption="My 3 little bunnies eating carrots! 🐰🐰🐰🥕 So cute! #rabbits #bunny #carrot #cute" />
        <Post username="nature.moments" location="Flower Field • 5h" image={daisyImg} likesCount={892} caption="Purple daisy dreams 💜🌼 Peaceful meadow #daisy #flowers #nature" />
        <Post username="nature.moments" location="Sunset Beach • 1d" image={short1Img} likesCount={567} caption="Golden hour magic 🌅✨ Best sunset ever! #sunset #beach #goldenhour" />
      </div>
    </div>
  )
}

export default App