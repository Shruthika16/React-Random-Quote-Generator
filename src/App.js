import React, { useState, useEffect } from 'react';
import Speech from 'react-speech';
import './App.css';
import './Quote.css';
import Footer from './Footer';
import Header from './Header';
import { ContentCopy } from '@mui/icons-material';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.log(error));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${quote} - ${author}`);
  };

  return (
    <div className="page">
      <Header />
      <div className="App">
        <div className="quoteBox">
          <div className="container">
            <div className="quote">
              <h3>{quote}</h3>
              <p>{author}</p>
            </div>

            <div className="quoteButton">
              <hr />
                <button onClick={handleCopy}>
                  <ContentCopy />
                </button>
              
              <button onClick={handleNewQuote}>New Quote</button>
              <Speech text={`${quote} by ${author}`} />
              <p>Click Grey button to listen</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;