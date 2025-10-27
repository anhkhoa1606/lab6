import React from 'react';

function ChatPresenter({ message }) {
  return (
    <div style={styles.chatBox}>
      <div style={styles.botMessage}>
        💬 {message}
      </div>
      <p style={styles.note}>This is the UniFAQ chatbot demo.</p>
    </div>
  );
}

const styles = {
  chatBox: {
    backgroundColor: '#ecf5ff',
    padding: '15px',
    borderRadius: '10px',
    border: '1px solid #cce0ff',
  },
  botMessage: {
    fontWeight: 'bold',
    color: '#34495e',
  },
  note: {
    fontSize: '13px',
    color: '#777',
    marginTop: '8px',
  },
};

export default ChatPresenter;
