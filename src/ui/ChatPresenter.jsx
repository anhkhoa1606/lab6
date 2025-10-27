
import React from "react";

export default function ChatPresenter({ messages }) {
  return (
    <div>
      <h2>UniFAQ Chat</h2>
      {messages.map((msg, i) => (
        <p key={i}>{msg}</p>
      ))}
    </div>
  );
}
