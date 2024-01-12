import React from "react";
import Entry from "./entry.jsx";
import emojipedia from "../emojipedia.js";
function createEntry(term) {
  return (
    <Entry
      key={term.id}
      name={term.name}
      emoji={term.emoji}
      description={term.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
