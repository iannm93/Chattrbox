import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const Message = (props) => {
    // set an empty state with value stored as empty string
  const [chatMessage, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (e) => {
    setValue(e.target.value);

    isTyping(props, chatId);
  };

//function that can be uised to get the value of a form
  const handleSubmit = (e) => {
    e.preventDefault();

    const text = chatMessage.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const handleUpload = (e) => {
    sendMessage(creds, chatId, { files: e.target.files, text: '' });
  };

  return (
    //   execute handlesumbit here to get the value of the message form
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={chatMessage}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
    </form>
  );
};

export default Message;