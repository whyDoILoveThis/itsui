import React, { useState } from 'react';

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text) // 📋 Just like... copies it, man
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Keeps "Copied!" for a bit
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    <button
      onClick={handleCopy}
      className="w-fit copy-button boder boder-slate-400 bg-slate-400 bg-opacity-20 p-1 px-2 rounded-lg text-sm"
    >
      {copied ? 'Copied! 😎' : 'Copy 📋'}
    </button>
  );
};

export default CopyButton;
