import './App.css'
import { push, get, onChildAdded, onValue, ref, set } from "firebase/database";
import { database } from "./../firebaseConfig.js";
import Hero from './hero';
import Preview from './components/Home/preview';



function App() {
  //const query = ref(database, `users`)
  function handleSubmit() {
    push(ref(database, `users`), { "Hello": "World" })
  }
  return (
    <div>
      <Hero/>
      <Preview/>
      {/* <button onClick={handleSubmit}>Submit</button> */}
    </div>
  )
}
export default App
