import React from 'react';
import ChatContainer from './ui/ChatContainer';

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Modular Architecture Demo</h1>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>UniFAQ Chat</h2>
          <ChatContainer />
        </section>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: 'linear-gradient(135deg, #e0f7fa, #f1f8e9)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '700px',
    padding: '40px 50px',
  },
  title: {
    textAlign: 'center',
    fontSize: '28px',
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: '30px',
    letterSpacing: '1px',
  },
  section: {
    backgroundColor: '#f9fcff',
    border: '1px solid #d0e7ff',
    borderRadius: '12px',
    padding: '25px 30px',
  },
  subtitle: {
    fontSize: '20px',
    color: '#0077cc',
    marginBottom: '15px',
    borderBottom: '2px solid #0077cc',
    paddingBottom: '6px',
  },
};

export default App;
