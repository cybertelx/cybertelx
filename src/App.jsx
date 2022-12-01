import React, { useEffect, useState } from "react";
import useTyping from "./typing";
import Fade from "./Fade";
import logo from "./logo";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function App() {
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
      <span
        className="glitch block hover:text-green-300"
        data-text={splitlogo[i]}
        key={i}
      >
        {splitlogo[i]}
      </span>
    );
  }

  return (
    <div className="text-white flex flex-col align-middle font-mono p-2">
      <p>
        <span className="text-green-400 font-bold">cybertelx@my-thinkpad</span>:
        <span className="text-blue-400 font-bold">~</span>$ cat cybertelx.txt
      </p>
      <div className="flex flex-row p-4">
        <div className="max-w-[48rem]">
          <figure className="ml-4">
            <blockquote>
              <p>
                "When my bird was looking at my computer monitor, I thought
                'Woooah. That bird has no idea what he's looking at.' But does
                the bird panic? No, he just does the best he can."
              </p>
            </blockquote>
            <figcaption>—Terry A. Davis</figcaption>
          </figure>
          <div className="flex flex-row">
            <p
              className="mt-2 text-6xl font-bold glitch text-center"
              data-text="rotarepo"
            >
              operator
            </p>
          </div>
          <p className="font-bold text-center">i write code.</p>
          <div className="flex flex-row justify-center text-center">
            <a href="https://setalexfree.nl/">
              <p
                className="text-red-500 text-xl font-bold glitch"
                data-text="CODE IS FREE SPEECH: FREE ALEXEY PERTSEV"
              >
                CODE IS FREE SPEECH: FREE ALEXEY PERTSEV
              </p>
            </a>
          </div>

          <br />

          <section>
            <label className="text-xl">
              whoami
              <hr className="my-2" />
            </label>
            <ul className="list-inside list-disc">
              <li>13 year old blockchain developer</li>
              <li>also goes by the handle cybertelx</li>
              <li>digital rights activist</li>
              <li>
                <a
                  href="https://carpetdefi.com"
                  className="text-blue-500 hover:text-blue-400"
                >
                  ceo of carpet defi
                </a>
              </li>
              <li>likes reading scp wiki articles</li>
              <li>interested in cryptography</li>
              <li>interested in blockchains, defi, etc</li>
            <li>
              <a href="http://yudkowsky.net/singularity/simplified" className="text-blue-500 hover:text-blue-400">transhumanist</a>
            </li>
            </ul>
          </section>

          <br />

          <section>
            <label className="text-xl">
              ls ~/socials
              <hr className="my-2" />
            </label>
            <ul className="text-green-400 font-bold">
              <li>
                <a href="https://github.com/cybertelx">my github</a>
              </li>
              <li>
                <a href="https://twitter.com/cybertel_x">my tweeter</a>
              </li>
              <li>
                <a href="https://reddit.com/u/cybertelx">my reddit</a>
              </li>
              <li>
                <a href="https://mirror.xyz/cybertelx.eth">my mirror blog</a>
              </li>
              <li>
                <a href="mailto://cybertelx@proton.me">send me an email</a>
              </li>
              <li>
                <a href="https://wallet.cybtlx.one">my crypto wallet</a>
              </li>
              <li>
                <button onClick={displaySessionContact}>
                  contact me on session
                </button>
                {sessionContactDisplayed && (
                  <span className="text-white">
                    {" "}
                    -&gt; @operator or @cybertelx (add me!)
                  </span>
                )}
              </li>
            </ul>
          </section>

          <br />
          <section>
            <label className="text-xl">
              ls ~/projects
              <hr className="my-2" />
            </label>
            <ul className="text-green-400 font-bold">
              <li>
                <a href="https://carpetde.fi">
                  carpet defi{" "}
                  <span className="text-white font-normal">
                    (number go up protocol NFA DYOR)
                  </span>
                </a>
              </li>
              <li>
                <a href="https://mirror.xyz/cybertelx.eth">my mirror blog</a>
              </li>
            </ul>
          </section>

          <br />
          <section>
            <label className="text-xl">
              cat things-i-find-interesting.txt
              <hr className="my-2" />
            </label>
            <p>
              these are not endorsements and i have not been paid at all to put
              these here. nothing here is financial advice. yada yada. don't sue
              me.
            </p>
            <ul className="text-green-400 font-bold">
              <li>
                <a href="https://kleros.io">kleros</a>{" "}
                <span className="text-white font-normal">
                  (decentralized court system)
                </span>
              </li>
              <li>
                <a href="https://argent.xyz">argent</a>{" "}
                <span className="text-white font-normal">
                  (smart contract wallet)
                </span>
              </li>
              <li>
                <a href="https://github.com/proofofsoulprotocol/soul-wallet-contract">
                  soul wallet
                </a>{" "}
                <span className="text-white font-normal">
                  (smart contract wallet)
                </span>
              </li>
              <li>
                <a href="https://eips.ethereum.org/EIPS/eip-4337">
                  ERC-4337 account abstraction
                </a>{" "}
                <span className="text-white font-normal">
                  (account abstraction proposal for ethereum without changing
                  consensus layer)
                </span>
              </li>
              <li>
                <a href="https://trustless.fi">
                  trustless
                </a>{" "}
                <span className="text-white font-normal">
                  (truly decentralized stablecoin)
                </span>
              </li>
              <li>
                <a href="https://liquity.org">
                  liquity
                </a>{" "}
                <span className="text-white font-normal">
                  (another decentralized stablecoin)
                </span>
              </li>
              <li>
                <a href="https://github.com/consensys/anonymous-zether">
                  anonymous-zether
                </a>{" "}
                <span className="text-white font-normal">
                  (anonymous payment system built on top of ethereum)
                </span>
              </li>
            </ul>
          </section>
        </div>

        <div className="whitespace-pre text-xs hidden lg:inline-block text-green-400">
          <a href="https://tornadocash.community/">{logorows}</a>
        </div>
      </div>
      <footer>
        copyright (c) cybertelx 2022 - licensed under GPL 3.0
        {/* CHANGE THIS WHEN YOU UPDATE */}
        <p>website last updated december 1 2022 (2022-12-1)</p>
      </footer>
    </div>
  );
}

export default App;
