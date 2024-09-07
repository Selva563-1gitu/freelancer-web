import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { Container, TextField, Button, Typography, List, ListItem, ListItemText } from '@mui/material';

const socket = io('http://localhost:5000'); // Replace with your server URL

const Chat = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => socket.off('receive_message');
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const messageData = {
        author: "Client", // Replace with dynamic user data
        message,
        time: new Date().toLocaleTimeString(),
      };

      socket.emit('send_message', messageData);
      setMessage('');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Real-Time Chat</Typography>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${msg.author}: ${msg.message}`} secondary={msg.time} />
          </ListItem>
        ))}
      </List>
      <TextField
        label="Message"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>Send</Button>
    </Container>
  );
};

export default Chat;
