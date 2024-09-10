import React, { useState } from "react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const sendMessage = async () => {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = await response.json();
    setChatLog([...chatLog, { user: message, bot: data.response }]);
    setMessage("");
  };

  return (
    <div>
      <div>
        {chatLog.map((log, index) => (
          <div key={index}>
            <p>
              <strong>You:</strong> {log.user}
            </p>
            <p>
              <strong>Bot:</strong> {log.bot}
            </p>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
