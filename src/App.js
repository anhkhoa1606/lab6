import React from 'react';
import ChatContainer from './ui/ChatContainer';

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Modular Architecture Demo</h1>

      <section style={styles.section}>
        <h2 style={styles.subtitle}>UniFAQ Chat</h2>
        <ChatContainer />
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f7fb',
    minHeight: '100vh',
    padding: '40px',
    color: '#333',
  },
  title: {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#2c3e50',
  },
  section: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '25px 30px',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  subtitle: {
    marginBottom: '15px',
    borderBottom: '2px solid #3498db',
    paddingBottom: '5px',
    color: '#3498db',
  },
};

export default App;
