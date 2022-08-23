import React, { useEffect, useState } from "react";
import useTyping from "./typing";
import Fade from "./Fade";
import logo from "./logo";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
  const [command, finishedCmd, startCmd] = useTyping("cat operator.txt");

  const [separator, finishedSep, startSep] = useTyping("==================");

  const [quote, finishedQuote, startQuote] = useTyping(
    "When my bird was looking at my computer monitor, I thought 'Woooah. That bird has no idea what he's looking at.' But does the bird panic? No, he just does the best he can.",
    30
  );

  const [author, finishedAuthor, startAuthor] = useTyping(
    "—Terry A. Davis",
    100
  );

  useEffect(() => {
    startCmd();
  }, []);

  useEffect(() => {
    (async () => {
      if (finishedCmd) {
        await sleep(500);
        startSep();
      }
    })();
  }, [finishedCmd]);

  useEffect(() => {
    (async () => {
      if (finishedSep) {
        await sleep(500);
        startQuote();
      }
    })();
  }, [finishedSep]);

  useEffect(() => {
    (async () => {
      if (finishedQuote) {
        await sleep(500);
        startAuthor();
      }
    })();
  }, [finishedQuote]);

  const [sessionContactDisplayed, setSCDisplayed] = useState(false);
  function displaySessionContact() {
    setSCDisplayed(!sessionContactDisplayed);
  }

  const logorows = [];
  const splitlogo = logo.split("\n");
  for (let i = 0; i < splitlogo.length; i++) {
    // note: we are adding a key prop here to allow react to uniquely identify each
    // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    logorows.push(
      <span className="glitch block" data-text={splitlogo[i]} key={i}>
        {splitlogo[i]}
      </span>
    );
  }

  return (
    <div className="text-white flex flex-col align-middle font-mono p-2">
      <p>
        <span className="text-green-400 font-bold">cybertelx@my-thinkpad</span>:
        <span className="text-blue-400 font-bold">~</span>$ {command}
      </p>
      <div className="flex flex-row">
        <div className="max-w-[48rem]">
          <p>{separator}</p>
          <figure className="ml-4">
            <blockquote>
              <p>{quote}</p>
            </blockquote>
            <figcaption>{author}</figcaption>
          </figure>
          <Fade in={finishedAuthor}>
            <p className="mt-2 text-2xl font-bold glitch" data-text="cybertelx">
              operator
            </p>
            <p className="font-bold">
              13 year old blockchain developer, also goes by the handle
              cybertelx
            </p>
            <ul className="list-inside list-disc">
              <li>digital rights and free software activist</li>
              <li>smart contract developer</li>
              <li>likes reading logo wiki articles</li>
              <li>
                interested in zk proofs but can't wrap head around the math
              </li>
              <li>privacy enhancing tech &amp; strong cryptography is cool</li>
              <li>reducing my reliance on nonfree software day by day</li>
            </ul>
            <p
              className="text-red-500 text-xl font-bold glitch"
              data-text="CODE IS FREE SPEECH: FREE ALEXEY PERTSEV"
            >
              CODE IS FREE SPEECH: FREE ALEXEY PERTSEV
            </p>
            <br />
            <p>~$ cd socials && ls</p>
            <ul className="text-green-400 font-bold">
              <li>
                <a href="https://github.com/cybertelx">github.sh</a>
              </li>
              <li>
                <a href="https://twitter.com/cybertel_x">twitter.sh</a>
              </li>
              <li>
                <a href="https://reddit.com/u/cybertelx">reddit.sh</a>
              </li>
              <li>
                <a href="mailto://cybertelx@proton.me">email.sh</a>
              </li>
              <li>
                <button onClick={displaySessionContact}>session.sh</button>
                {sessionContactDisplayed && (
                  <span className="text-white">
                    {" "}
                    -&gt; @operator or @cybertelx (add me!)
                  </span>
                )}
              </li>
              <li>
                <a href="https://wallet.cybtlx.one">ethwallet.sh</a>
              </li>
            </ul>
            <p>~/socials$ cd ../projects && ls</p>
            <ul className="text-green-400 font-bold">
              <li>
                <a href="https://carpetde.fi">carpetdefi.sh</a>
              </li>
              <li>
                <a href="https://paper.wf/on-the-block">ontheblock.sh</a>
              </li>
            </ul>
          </Fade>
        </div>
        <Fade in={finishedAuthor}>
          <div className="data text-sm hidden lg:inline-block text-green-400">
            {logorows}
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default App;
