import React from 'react';
import logo from './logo.svg';
import './App.css';
import EmojiPicker from "emoji-picker-react"

function App() {
  const [emojis, setEmojis] = React.useState([]);
  return (
    <div>
      <p>Emojis: {emojis.map(emoji => emoji.emoji)}</p>
      <EmojiPicker onEmojiClick={(event, emojiObject) => setEmojis([...emojis, emojiObject])} />
    </div>
  );
}

export default App;
