import Entry from './Entry'
import emojipedia from '../emojipedia'
import '../style.css';

function createEmoji(emojiTerm){
  return <Entry 
  key = {emojiTerm.id}
  img = {emojiTerm.emoji}
  name = {emojiTerm.name}
  description = {emojiTerm.meaning}
  />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEmoji)}
      </dl>
    </div>
  )
}

export default App;
