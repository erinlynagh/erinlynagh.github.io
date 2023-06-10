"use client";
import { useState } from "react";

interface FrameProps {
  win: () => void;
}

const passCode = 2134;
export default function MainPage(props: FrameProps) {
  const [key, setKey] = useState<string>("");
  const [passGuess, setPassGuess] = useState<number[]>([]);
  const [toggledDivId, setToggledDivId] = useState<string>("");
  const [htmlStoredInMemory, setHtmlStoredInMemory] = useState<Element[]>([]);

  function trackPassCode() {
    let newGuess = [];
    if (key === "2") {
      newGuess = [2];
    } else {
      newGuess = [...passGuess, parseInt(key)];
    }
    if (newGuess.join("") === passCode.toString()) {
      props.win();
    }
    setPassGuess(newGuess);
  }

  function convertToCodeDisplay(parent: HTMLElement) {
    let children: Element[] = [];
    for (let i = 0; i < parent.children.length; i++) {
      const child = parent.children[i];
      if (child.className.includes("toggle-button")) continue;
      children.push(child);
      let newElement = document.createElement("code");
      newElement.appendChild(document.createTextNode(child.outerHTML));
      parent.replaceChild(newElement, child);
    }
    setHtmlStoredInMemory(children);
  }

  function convertToHtmlDisplay(parent: HTMLElement) {
    for (let i = 0; i < parent.children.length; i++) {
      const child = parent.children[i];
      if (child.className.includes("toggle-button")) continue;
      parent.replaceChild(htmlStoredInMemory[i], child);
    }
    setToggledDivId("");
    setHtmlStoredInMemory([]);
  }

  function setKeyOnHover(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = e.target as HTMLDivElement;
    setKey(target.id);
    e.preventDefault();
  }

  function toggle() {
    const parent = document.getElementById(key);
    if (!parent) return;
    if (toggledDivId === key) {
      convertToHtmlDisplay(parent);
      return;
    }
    trackPassCode();
    convertToCodeDisplay(parent);
    setToggledDivId(key);
  }

  const buttonKeys = ["1", "2", "3", "4"];

  return (
    <div className="flex flex-col mx-5 my-3 flex-0">
      <div id="1" className="flex flex-col border p-3 m-1">
        <div id="5" className="flex flex-col border p-3 my-3 hidden">
          passcode is 2134
        </div>
        <p className="self-end">1</p>
        <div id="2" className="flex flex-col border p-3 mt-2">
          <p className="self-end h-0">2</p>
          <h1 className="text-4xl text-center mt-2">
            Welcome to my Erin&apos;s Site
          </h1>
          <h2 className="text-sm text-gray-500 text-center">
            made with react and tailwind
          </h2>
        </div>
        <div id="3" className="flex flex-col text-base mt-3 border p-3">
          <p className="self-end h-0">3</p>
          <ul>
            <li>im a software engineer</li>
            <li>im skilled with react, next, typescript, css, C# and .NET</li>
            <li>
              im sitecore and contentstack certified, headless CMS work is my
              specialty
            </li>
          </ul>
        </div>
        <div id="4" className="flex flex-col border p-3 my-3">
          <p className="self-end h-0">4</p>
          <div>
            <p>
              feel free to check my code, this was all written by hand, and the
              conversion is done by js, no visual tricks, no imports or
              libraries
            </p>
          </div>
        </div>

        <div className="grid grid-flow-col border p-3 toggle-button justify-stretch">
          {buttonKeys.map((buttonKey, index) => (
            <div className="mx-2" key={index}>
              <button
                id={buttonKey}
                onMouseEnter={(e) => setKeyOnHover(e)}
                onClick={() => toggle()}
                disabled={key != buttonKey && toggledDivId != ""}
                className="bg-blue-900 rounded disabled:bg-gray-900 hover:bg-blue-700 p-3 w-full select-none"
              >
                {buttonKey}
              </button>
            </div>
          ))}
          {/* <div className="mx-2">
            <button
              id="5"
              onMouseEnter={(e) => setKeyOnHover(e)}
              onClick={() => toggle()}
              disabled={key != "5" && toggledDivId != ""}
              className="bg-blue-900 rounded disabled:bg-gray-900 hover:bg-blue-700 p-3 w-full select-none"
            >
              5
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
