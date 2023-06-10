import React from "react";
import { useState } from "react";

interface WinnerProps {
  lose: () => void;
}

const Winner = (props: WinnerProps) => {
  const [linkText, setLinkText] = useState<string>("email me to hire me");
  function addEmphasis(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setLinkText("➡️ email me to hire me ⬅️");
  }
  function removeEmphasis(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    setLinkText("email me to hire me");
  }
  return (
    <div className="flex flex-col mx-5 my-2 border p-3">
      <a
        className="text-sm text-gray-500 hover:underline select-none"
        onClick={() => props.lose()}
      >
        &lt;&lt; go back
      </a>
      <h1 className="text-4xl text-center underline mb-2">winner!</h1>
      <p className="text-center mb-2">🥳 you won 🥳</p>
      <div className="flex flex-col items-center">
        <audio controls src="/audio/party.mp3" className="mb-5">
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
      <div className="flex flex-col justify-center hover:underline hover:text-xl hover:text-green-500">
        <a
          className="text-center justify-end"
          href="mailto:lynaghe@gmail.com"
          onMouseEnter={(e) => {
            addEmphasis(e);
          }}
          onMouseLeave={(e) => {
            removeEmphasis(e);
          }}
        >
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default Winner;
