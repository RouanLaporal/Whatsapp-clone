import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../contexts/ConversationProvider';
function Conversations() {

    const { conversations, selectedConversationIndex } = useConversations()
    return (
        <ListGroup variant="flush">
            {conversations.map((conversation, index) => (
                <ListGroup.Item 
                key={index}
                action //l'élément devient sélectionnable
                onClick={ () => selectedConversationIndex(index)}
                active={conversation.selected}>
                    {conversation.recipients.map(r => r.name).join(', ')}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default Conversations;