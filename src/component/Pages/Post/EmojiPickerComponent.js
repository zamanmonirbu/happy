import React, { useState } from 'react';
import { EmojiPicker } from 'emoji-picker-react';

const EmojiPickerComponent = ({ onSelect }) => {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const handleEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    onSelect(emojiObject);
  };

  return (
    <div>
      <h2>Emoji:</h2>
      <EmojiPicker onEmojiClick={handleEmojiClick} />
      {chosenEmoji && (
        <div>
          <strong>Selected Emoji:</strong> {chosenEmoji.emoji}
        </div>
      )}
    </div>
  );
};

export default EmojiPickerComponent;
