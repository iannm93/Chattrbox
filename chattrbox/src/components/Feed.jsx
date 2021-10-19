import React from "react";
import GuestMessage from "./GuestMessage";
import Message from "./Message";
import MyMessage from "./MyMessage";

const Feed = (props) => {
    const { chats, activeChat, userName, messages } = props

    // checking to see if chats exist, then looking for specific active chat
    const chat = chats && chats[activeChat]



    const renderWhenRead = (message, ifMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
        <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
                float: ifMyMessage ? 'right' : 'left',
                backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
            }}
        />
    ));

    // console.log(chat, userName, messages)
    // function for generatiing messages
    const loadMessage = () => {
        const messageKeys = Object.keys(messages)

        return messageKeys.map((key, index) => {
            const message = messages[key]
            //  if there are messages,  find the last message
            const finalMessage = index === 0 ? null : messageKeys[index - 1]
            const ifMyMessage = userName === message.sender.username;


            return (
                //  mapping through, need index
                <div key={`message_${index}`} style={{ width: '100%' }}>
                    <div className="message-block">
                        {/* if message is mine then render my mesage */}
                        {/* if not my message, render guest message */}
                        {
                            ifMyMessage
                                ? <MyMessage message={message} />
                                : <GuestMessage message={message} lastMessage={messages[finalMessage]} />
                        }

                    </div>
                    <div className="read-receipts" style={{ marginRight: ifMyMessage ? '18px' : '0px', marginLeft: ifMyMessage ? '18px' : '68px' }}>
                        {renderWhenRead(message, ifMyMessage)}

                    </div>

                </div>
            )
        })

    }

    if (!chat) {
        return "Loading, please wait..."
    }
    return (
        <div className="chat-feed">
            <div className="chat-title-container">
                <div className="chat-title">{chat.title}</div>
                <div className="chat-subtitle">
                    {/* map over all people, find person, set subtitle to username */}
                    {chat.people.map((person) => `${person.person.username}`)}
                </div>

            </div>
            {loadMessage()}
            <div style={{ height: "100px" }} />
            <div className="message-form-container">
                <Message {...props} chatId={activeChat} />
            </div>
        </div>
    )

}

export default Feed;