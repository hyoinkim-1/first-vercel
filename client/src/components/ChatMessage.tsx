import type { Message } from '../hooks/useGroqChat';

export const ChatMessage = ({ role, content }: Message) => (
  <article className="chat-message" data-role={role}>
    <p className="chat-message__sender">{role === 'user' ? '나' : 'Groq'}</p>
    <p className="chat-message__content">{content}</p>
  </article>
);
