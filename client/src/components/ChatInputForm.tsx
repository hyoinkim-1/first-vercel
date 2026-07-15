import { useState } from 'react';
import type { SubmitEvent } from 'react';

type ChatInputFormProps = {
  isLoading: boolean;
  onSubmit: (question: string) => void;
};

export const ChatInputForm = ({ isLoading, onSubmit }: ChatInputFormProps) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    if (!value.trim() || isLoading) return;
    onSubmit(value);
    setValue('');
  };

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        className="chat-input__field"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="메시지를 입력하세요"
        disabled={isLoading}
        aria-label="채팅 입력창"
      />
      <button className="chat-input__submit" type="submit" disabled={isLoading}>
        보내기
      </button>
    </form>
  );
};
