import type { Message } from '../hooks/useGroqChat';
import { ChatMessageList } from './ChatMessageList';
import { ChatInputForm } from './ChatInputForm';

type ChatSectionProps = {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  onSubmit: (question: string) => void;
};

export const ChatSection = ({ messages, isLoading, error, onSubmit }: ChatSectionProps) => (
  <section className="chat-section" aria-label="채팅창">
    <ChatMessageList messages={messages} isLoading={isLoading} />
    {error && <p className="chat-section__error">{error}</p>}
    <ChatInputForm isLoading={isLoading} onSubmit={onSubmit} />
  </section>
);
