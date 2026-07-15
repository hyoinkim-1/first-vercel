import { useEffect, useRef } from 'react';
import type { Message } from '../hooks/useGroqChat';
import { ChatMessage } from './ChatMessage';

type ChatMessageListProps = {
  messages: Message[];
  isLoading: boolean;
};

export const ChatMessageList = ({ messages, isLoading }: ChatMessageListProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="chat-log">
      {messages.map((message, i) => (
        <ChatMessage key={i} role={message.role} content={message.content} />
      ))}
      {isLoading && (
        <article className="chat-message" data-role="assistant" aria-live="polite">
          <p className="chat-message__sender">Groq</p>
          <p className="chat-message__content chat-message__content--pending">답변 생성 중...</p>
        </article>
      )}
      <div ref={bottomRef} />
    </div>
  );
};
