import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import "./App.css";
import useClipboard from "react-use-clipboard";
import { useState } from "react";

function App() {
  const startListening = () =>
    SpeechRecognition.startListening({
      continuous: true,
      language: "en-IN",
    });
  const stopListening = () => SpeechRecognition.stopListening();
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(transcript, {
    successDuration: 1000,
  });

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  return (
    <div>
      <div className="container">
        <h2>Speech to Text Converter</h2>
        <br />
        <p>
          A React hook that converts speech from microphone to text and makes it
          available to your React components.
        </p>
        <div className="main-content">{transcript}</div>
        <div className="btn-style">
          <button
            onClick={() => {
              setCopied();
            }}
          >
            {isCopied ? "Copied!" : "Copy to clipboard!"}
          </button>

          <button onClick={startListening}>Start Listening</button>
          <button onClick={stopListening}>Stop Listening</button>
        </div>
      </div>
    </div>
  );
}

export default App;
