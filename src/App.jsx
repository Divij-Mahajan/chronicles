import './App.css'
import { push, get, onChildAdded, onValue, ref, set } from "firebase/database";
import { database } from "./../firebaseConfig.js";
import Hero from './hero';



function App() {
  //const query = ref(database, `users`)
  function handleSubmit() {
    push(ref(database, `users`), { "Hello": "World" })
  }
  return (
    <div>
      <Hero
        h1="CHRONICLES"
        h2=""
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
export default App
