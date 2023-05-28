import Image from "next/image";

import { MatrixBackground } from "@/components/MatrixBackground";

import Typewriter from "typewriter-effect";

import NeoDoge from "../assets/images/neodoge.png";

import bsc from "../assets/images/bsc.png";
import coingecko from "../assets/images/coingecko.png";
import coinmarket from "../assets/images/coinmarket.png";
import dex from "../assets/images/dex.png";
import pancakeswap from "../assets/images/pancakeswap.png";
import pink from "../assets/images/pink.png";
import flooz from "../assets/images/flooz.png";

import { GiPodium } from "react-icons/gi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { IoLayers } from "react-icons/io5";
import { RiExchangeDollarFill } from "react-icons/ri";
import { BsCardChecklist } from "react-icons/bs";

const iconMap = {
  Ecosystem: <Lightning size={48} />,
  LP: <Vault size={48} />,
  "Staking Pool 1": <Stack size={48} />,
  Development: <Stack size={48} />,
  Cex: <Swap size={48} />,
  Marketing: <ListChecks size={48} />
};

import {
  CheckCircle,
  Circle,
  CurrencyDollarSimple,
  Download,
  FacebookLogo,
  TiktokLogo,
  RedditLogo,
  YoutubeLogo,
  MediumLogo,
  GithubLogo,
  TelegramLogo,
  InstagramLogo,
  Lightning,
  List,
  ListChecks,
  Stack,
  Swap,
  TwitterLogo,
  Vault,
  Wallet,
  X
} from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import Head from "next/head";

function Button({ children, ...props }: any) {
  return (
    <button
      className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden  tracking-tighter text-white hover:text-white  rounded-full group transition-all duration-500 ease-out"
      {...props}
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-600 rounded-full group-hover:w-56 group-hover:h-56"></span>

      <span className="relative">{children}</span>
    </button>
  );
}

const howToBuyList = [
  {
    icon: Download,
    title: "Download & setup MetaMask or TrustWallet",
    content:
      "Download MetaMask (a crypto wallet in form of a browser extension) or TrustWallet (an app for your phone). After that, you will have to add the Binance Smart Chain to your network list. ( Click here for a step-by-step tutorial)"
  },
  {
    icon: CurrencyDollarSimple,
    title: "Buy and send BNB to MetaMask",
    content:
      'Buy BNB on an exchange (i.e. Binance, Kraken, Coinbase etc.). Transfer the tokens to your MetaMask wallet address. BEP-20 addresses start with a "0x"'
  },
  {
    icon: Swap,
    title: "Head on to PancakeSwap and swap for $NeoDoge",
    content:
      "Click here to head on over to PancakeSwap or use this address ( Address Will Be Updated Here After Swap Ends) to select NeoDoge. Set the slippage tolerance to 10% (sometimes it may be a bit more, depending on how much demand there is)"
  },
  {
    icon: Wallet,
    title: "View $NeoDoge and HODL",
    content:
      "Swap BNB for NeoDoge. Now you need to add NeoDoge to your MetaMask ( Tutorial here) or Trust Wallet to view your $NeoDoge. Lastly HODL!"
  }
];

const PARTNERSHIPLIST = [
  { title: "pancakeswap", image: pancakeswap, url: "" },
  { title: "coinmarket", image: coinmarket, url: "" },
  { title: "coingecko", image: coingecko, url: "" },
  { title: "dex", image: dex, url: "" },
  { title: "bsc", image: bsc, url: "" },
  { title: "pink", image: pink, url: "" }
];

const phases = [
  {
    id: 1,
    items: [
      { done: true, title: "Smart contract development" },
      { done: true, title: "Stealth launch" },
      { done: true, title: "community growth" },
      { done: true, title: "Whitelist cex wallets from tax" },        
      { done: true, title: "Ownership renounce" },   
      { done: true, title: "Blackpaper v1" },      
      { done: false, title: "Social media campaign" },
      { done: false, title: "Listing on CMC & CG" }
    ]
  },
  {
    id: 2,
    items: [
      { done: false, title: "Airdrop contest" },
      { done: false, title: "Whitepaper release" },
      { done: false, title: "NFT collection" },
      { done: false, title: "PR & Stunt marketing" },
      { done: false, title: "Community giveaways" },
      { done: false, title: "Neodoge merch store" }
    ]
  },
  {
    id: 3,
    items: [
      { done: false, title: "Utility launch" },
      { done: false, title: "Certik audit" },
      { done: false, title: "0% tax and ownership renounce" },
      { done: false, title: "Marketing campaign" },
      { done: false, title: "Listing on cex" }
    ]
  }
];

const tokenomicsList = [
  {
    percent: "1%",
    title: "LP"
  },
  {
    percent: "1%",
    title: "Development"
  },
  {
    percent: "3%",
    title: "Marketing"
  }
];

const buyAndSellList = [
  {
    percent: 2,
    title: "Cex listings"
  },
  {
    percent: 2,
    title: "Neodoge Army"
  },
  {
    percent: 2,
    title: "Staking"
  },
  {
    percent: 2,
    title: "Reserve"
  }
];

const socialNetworks = [
  {
    network: "Facebok",
    icon: FacebookLogo,
    color: "bg-blue-500 hover:bg-blue-600",
    link: 'https://www.facebook.com/people/Neodogecoin/100093024155326/?mibextid=ZbWKwL'
  },
  {
    network: "TikTok",
    icon: TiktokLogo,
    color: "bg-gradient-to-r from-green-500 to-red-500 hover:bg-gradient-to-r from-green-600 to-red-600",
    link: 'https://www.tiktok.com/@neodogeofficial'
  },
  {
    network: "Twitter",
    icon: TwitterLogo,
    color: "bg-blue-400 hover:bg-blue-500",
    link: 'https://twitter.com/NEODOGEOFFICIAL'
  },
  {
    network: "Instagram",
    icon: InstagramLogo,
    color: "bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r from-purple-600 to-pink-600",
    link: ''
  },
  {
    network: "Reddit",
    icon: RedditLogo,
    color: "bg-red-500 hover:bg-red-600",
    link: 'https://www.reddit.com/user/Neodogecoin/'
  },
  {
    network: "Telegram",
    icon: TelegramLogo,
    color: "bg-blue-500 hover:bg-blue-600",
    link: 'https://t.me/neodogecoin'
  },
  {
    network: "Medium",
    icon: MediumLogo,
    color: "bg-black-500 hover:bg-black-600",
    link: 'https://medium.com/@neodogeofficial'
  },
  {
    network: "Github",
    icon: GithubLogo,
    color: "bg-gradient-to-r hover:bg-black-600 to-pink-500 ",
    link: 'https://github.com/NeoDogeCoin'
  },
  {
    network: "Youtube",
    icon: YoutubeLogo,
    color: "bg-red-500 hover:bg-blue-600",
    link: 'https://www.youtube.com/channel/UC5n0ocgFZuKP5zXn_MIeuGA'
  },
];

const socialNetworks3 = [
  {
    network: "Twitter",
    icon: TwitterLogo,
    color: "bg-blue-400 hover:bg-blue-500",
    link: 'https://twitter.com/NEODOGEOFFICIAL'
  },
  {
    network: "TikTok",
    icon: TiktokLogo,
    color: "bg-gradient-to-r from-green-500 to-red-500 hover:bg-gradient-to-r from-green-600 to-red-600",
    link: 'https://www.tiktok.com/@neodogeofficial'
  },
  {
    network: "Telegram",
    icon: TelegramLogo,
    color: "bg-blue-500 hover:bg-blue-600",
    link: 'https://t.me/neodogecoin'
  }
];

export default function Home() {
  const home = useRef(null);
  const about = useRef(null);
  const roadmap = useRef(null);
  const howToBuy = useRef(null);
  const partnership = useRef(null);
  const socials = useRef(null);
  const tokenomics = useRef(null);
  const neoDogeChart = useRef(null);

  const [contract, setContract] = useState(
    "0x036f1b175aa67fafa014cbca23ef6e2fda3f5165"
  );

  const [menuOpen, setMenuOpen] = useState(false);

  function onScrollIntoTo(sectionPage: any) {
    if (menuOpen) setMenuOpen(false);
    sectionPage.current?.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
        document.body.classList.remove("overflow-hidden");
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <>
      <Head>
        <title>
          NeoDoge - The new decentralized memecoin that will help you escape the
          matrix!
        </title>
      </Head>
      <MatrixBackground />
      <main>
        <header className="flex sticky  top-0 z-50 backdrop-blur-sm justify-center items-center border-b border-b-zinc-900 bg-black/75 py-4  transition-all px-4 sm:px-0">
          <div className="flex justify-between items-center sm:max-w-5xl w-full">
            <div className="w-16 h-16 flex items-center gap-4 cursor-pointer shadow-lg hover:shadow-green-600 rounded-full transition-all ">
              <Image src={NeoDoge} alt="NeoDoge" />
              <span className="text-lg text-yellow-500">
                <Typewriter
                  onInit={(typerwriter) => {
                    typerwriter.typeString("NeoDoge").start();
                  }}
                />
              </span>
            </div>
            <nav className="flex ">
              <button
                className="text-white sm:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {!menuOpen ? <List size={32} /> : <X size={32} />}
              </button>
              <ul
                className={`sm:flex ${
                  !menuOpen
                    ? "hidden"
                    : "flex flex-col absolute top-24 left-0 w-full bg-black p-4"
                } sm:flex-row items-center justify-center gap-4`}
              >
                <li>
                  <Button>Home</Button>
                </li>
                <li>
                  <Button onClick={() => onScrollIntoTo(about)}>About</Button>
                </li>
                <li>
                  <Button onClick={() => onScrollIntoTo(roadmap)}>
                    Roadmap
                  </Button>
                </li>
                <li>
                  <Button onClick={() => onScrollIntoTo(howToBuy)}>
                    How to buy
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://github.com/NeoDogeCoin/whitepaper-neodogecoin/blob/main/blackpaper-NEODOGE-v1.pdf",
                        "__blank"
                      )
                    }
                  >
                    Whitepaper
                  </Button>
                </li>
                <li>
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=0x036F1b175Aa67FAfA014cbCA23ef6e2FDA3F5165&inputCurrency=BNB"
                    className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
                    target="_blank"
                  >
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-green-600 opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-green-600 opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-green-600 transition-colors duration-200 ease-in-out group-hover:text-white">
                      Buy now
                    </span>
                    <span className="absolute inset-0 border-2 border-green-600 rounded-full"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="w-full flex flex-col justify-center items-center mt-12">
          <div className="max-w-[256px]">
            <Image src={NeoDoge} alt="NeoDoge" />
          </div>
          <div className="w-full flex items-center justify-center flex-col gap-4 max-w-sm sm:max-w-3xl z-10">
            <h1 className="text-4xl sm:text-5xl text-white font-bold text-center my-4">
              <Typewriter
                onInit={(typerwriter) => {
                  typerwriter.typeString("NEODOGE").start();
                }}
              />
            </h1>
            <h2 className=" text-white text-lg block max-w-xl text-center ">
              <div >Missed DOGE?</div>{" "}
              <div className="font-bold">
                <span className="text-white-500">Don&apos;t miss</span>
                <span className="text_color text-green-500 font-bold"> NEODOGE</span>
              </div>
              <div>
                The new decentralized memecoin that will help you escape the
                matrix!
              </div>
              <br /> <br />
              <div className="text-2xl text-white font-bold  text-center">
                <span className="text_color"> BSC CONTRACT: </span> 0x036f1b175aa67fafa014cbca23ef6e2fda3f5165
              </div>
            </h2>
            <div
            className="mb-4 sm:px-0 px-4 w-full max-w-5xl mx-auto"
            ref={socials}
          >
            <br />
              <div className="flex flex-col gap-4">
                <div className="mt-4">
                  <h1 className="text_color text-2xl text-green-600 font-bold text-center">
                    JOIN OUR COMMUNITY
                  </h1>
                  <div className="">
              </div>
                </div>
              </div>
              <nav className="mt-4  flex items-center justify-center">
                <ul className="flex items-center justify-center gap-4">
                  {socialNetworks.map((social) => (
                    <li key={social.network}>
                      <button onClick={() =>
                        window.open(
                          social.link,
                          "__blank"
                        )
                      }
                        className={
                          social.color + " " + "p-2 rounded-md text-white"
                        }
                      >
                        <social.icon size={32} />

                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
          </div>
          </div>
        </main>
        <main className="top mt-28 h-full bg-black/60 flex flex-col gap-28">
          <div
            className="flex flex-col sm:flex-row sm:gap-16  w-full max-w-5xl mx-auto items-center justify-between mt-4 mb-4"
            ref={about}
          >
            <Image src={NeoDoge} alt="A Centre" className="max-w-[150px]" />
            <div className="flex flex-col gap-4">
              <div className="mt-8">
                <h1 className="text-4xl text-green-600 font-bold text-center sm:text-left">
                
                </h1>
              </div>
              <h1 className="text-4xl sm:text-5xl text-white font-bold  text-center sm:text-left">
                Why 
                <span className="text_color"> NEODOGE</span>?
              </h1>
              <div className="">
                <h2 className="text-gray-500 leading-7 p-4 sm:p-0 text-center sm:text-left">
                  In the Matrix movie series, Thomas anderson is known as Neo, which is an anagram for the One.
                  This name carries several homages to Christian theology/mythology. 
                  &quot;Anderson&quot; literally means &quot;son of man&quot;, which is how Jesus primarily referred to himself in the Gospels. 
                  &quot;Thomas&quot; is the name of Jesus disciple who infamously doubted the truth of the risen Christ. 
                  In The Matrix, Thomas Anderson sheds his disbelief and comes to accept that the Matrix is real 
                  and he is thereby &quot;born again,&quot; and is referred to as &quot;Neo.&quot; He also comes to believe that he is The One.
                  <br /> <br />
                  NEODOGE is the one and only memecoin that will save you from the Matrix and allow you to reclaim your financial freedom.
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-4 mb-4 w-full max-w-5xl mx-auto" ref={roadmap}>
            <div className="flex flex-col gap-4">
              <div className="mt-4">
                <h1 className="text_color text-4xl text-green-600 font-bold text-center sm:text-left">
                  Roadmap
                </h1>
              </div>
              <h1 className="text-4xl sm:text-5xl text-white font-bold  text-center sm:text-left">
                Follow our project
              </h1>
            </div>
            <div className="mt-8 sm:grid sm:grid-cols-3 flex flex-col px-4 sm:px-0 gap-8">
              {phases.map((phase) => (
                <div
                  key={phase.id}
                  className="p-4 rounded-lg w-full bg-black/90 border border-green-600 transition-all shadow-xl hover:shadow-2xl hover:shadow-green-600 hover:scale-105 shadow-transparent cursor-pointer"
                >
                  <h1 className="text-white text-xl">Phase {phase.id}</h1>
                  <ul className="mt-4">
                    {phase.items.map((item) => (
                      <li key={item.title} className="text-gray-500 py-2  ">
                        <span className=" flex items-center gap-2">
                          <span>
                            {item.done ? (
                              <CheckCircle
                                className="text-green-500"
                                size={32}
                              />
                            ) : (
                              <Circle className="text-gray-500" size={32} />
                            )}
                          </span>
                          <span className="truncate">{item.title}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 mb-4 w-full max-w-5xl mx-auto" ref={tokenomics}>
            <div className="flex flex-col gap-4">
              <div className="mt-4">
                <h1 className="text_color text-4xl text-green-600 font-bold text-center">
                  Buy/Sell Fee
                </h1>
              </div>
            </div>
            <div className="mt-8 sm:grid sm:grid-cols-3 flex flex-col gap-8  sm:px-0 px-8">
              {tokenomicsList.map((tokenomic) => (
                <div
                  key={tokenomic.title}
                  className="p-4 rounded-lg w-full bg-black/50 hover:bg-black border border-green-600 transition-all shadow-xl hover:shadow-2xl hover:shadow-green-600 hover:scale-105 shadow-transparent cursor-pointer flex flex-col gap-4 items-center justify-center text-white"
                >
                  <h1 className="font-bold text-3xl text-gray-300 ">
                    {tokenomic.percent}
                  </h1>
                  <div className="text-green-500">
                    {
                      //@ts-ignore
                      iconMap[tokenomic.title]
                    }
                  </div>
                  <h2 className="text-2xl text-gray-300 ">{tokenomic.title}</h2>
                </div>
              ))}
            </div>
            <div>
              <br /> <br /> <br />
              <div className="flex flex-col gap-2">
                <div className="mt-8">
                  <h1 className="text_color text-4xl text-green-600 font-bold text-center">
                    Tokenomics
                  </h1>
                </div>
              </div>
              <div className="mt-4  mx-auto max-w-xl sm:px-0 px-8">
              <div key='Initial Liquidity' className="p-1 text-white w-full">
                    <h1 className="text-xl text-gray-300 ">
                      Initial Liquidity
                    </h1>
                    <div className="bg-gray-200/30 rounded-md w-full">
                      <div
                        className={`bg-green-500 py-1 rounded-md h-full sm:text-right sm:px-4 text-center`}
                        style={{ width: `10}%` }}
                      >
                        <span className="text-sm text-white font-bold">
                          92 %
                        </span>
                      </div>
                    </div>
                </div>
                {buyAndSellList.map((buyAndSell) => (
                  <div key={buyAndSell.title} className="p-1 text-white w-full">
                    <h1 className="text-xl text-gray-300 ">
                      {buyAndSell.title}
                    </h1>
                    <div className="bg-gray-200/30 rounded-md w-full">
                      <div
                        className={`bg-green-500 py-1 rounded-md h-full sm:text-right sm:px-4 text-center`}
                        style={{ width: `${buyAndSell.percent * 10}%` }}
                      >
                        <span className="text-sm text-white font-bold">
                          {buyAndSell.percent} %
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <br /> <br /> <br />
            </div>
            <div className="px-8 sm:px-0 mt-8">
              <div className="rounded-lg w-full bg-black/50 hover:bg-black border border-green-600 transition-all flex sm:flex-row flex-col gap-4 items-center justify-center text-white p-4">
                <select
                  className="bg-black/80 px-4 py-2 border border-green-500 rounded-md focus:ring-2 ring-green-500 focus:outline-none"
                  onChange={(ev) => setContract(ev.target.value)}
                >
                  <option value="0x036f1b175aa67fafa014cbca23ef6e2fda3f5165">
                    BSC Contract
                  </option>
                  <option value="COMING SOON">
                    ETH Contract
                  </option>
                </select>
                <input
                  readOnly={true}
                  value={contract}
                  className="sm:w-[420px] w-full bg-black/80 px-4 py-2 border border-green-500 rounded-md focus:ring-2 ring-green-500 focus:outline-none"
                />
                <button
                  className="bg-green-500 px-4 py-2 rounded-md hover:text-black hover:bg-green-700"
                  onClick={() => {
                    navigator.clipboard.writeText(contract);
                  }}
                >
                  Copy contract
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 w-full max-w-5xl mx-auto" ref={neoDogeChart}>
            <div className="flex flex-col gap-4">
              <div className="mt-4">
                <h1 className="text-4xl text-green-600 font-bold text-center">
                  <span className="text_color text-yeelow-500">NEODOGE CHART</span> 
                </h1>
              </div>
            </div>
            <div className="mt-8 sm:px-0 px-4">
              <div id="dexscreener-embed">
                <iframe src="https://dexscreener.com/bsc/0x036f1b175aa67fafa014cbca23ef6e2fda3f5165?embed=1&theme=dark"></iframe>
              </div>
            </div>
          </div>

          <div
            className="mb-4 sm:px-0 px-4 w-full max-w-5xl mx-auto"
            ref={partnership}
          >
            <div className="flex flex-col gap-4">
              <div className="mt-4">
                <h1 className="text_color text-4xl text-green-600 font-bold text-center">
                  PARTNERSHIP
                </h1>
              </div>
            </div>
            <div className="mt-8 grid-cols-3 gap-8 grid">
              {PARTNERSHIPLIST.map((partiner) => (
                <div
                  key={partiner.title}
                  className="p-4 rounded-lg w-full bg-white/80 border border-green-600 transition-all shadow-xl hover:shadow-2xl hover:shadow-green-600 hover:scale-105 shadow-transparent cursor-pointer flex items-center justify-center"
                >
                  <Image src={partiner.image} alt={partiner.title} />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto  mt-4 mb-4" ref={howToBuy}>
            <h1 className="text-4xl text_white text-white-600 font-bold text-center mb-12">
              HOW TO BUY{" "}
              <span className="text_color text-yellow-500 block sm:inline">NEODOGE </span>?
            </h1>
            <div className="flex flex-col sm:flex-row sm:gap-16 items-start sm:justify-between justify-center">
              <div className="sm:mx-0 mx-auto">
                <Image
                  src={NeoDoge}
                  alt="A Centre"
                  className="max-w-xs animate-float mt-4"
                />
              </div>
              <div className="px-4 sm:px-0">
                <div className="">
                  <ul className="mt-4 flex flex-col gap-8">
                    {howToBuyList.map((howTb) => (
                      <li
                        key={howTb.title}
                        className="flex sm:flex-row flex-col items-center gap-8 group hover:bg-black/50 border border-transparent hover:border-green-500/10 shadow-2xl hover:shadow-green-600 p-4 rounded-md"
                      >
                        <div className="bg-green-600 p-4 rounded-full bg-gradient-to-t group-hover:to-yellow-500 group-hover:from-yellow-700 transition-all">
                          <howTb.icon className="text-white" size={32} />
                        </div>
                        <div className="flex flex-col gap-2 sm:text-left text-center">
                          <h1 className="text-white text-lg">{howTb.title}</h1>
                          <p className="text-gray-500">{howTb.content}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
             
          <div
            className="mb-4 sm:px-0 px-4 w-full max-w-5xl mx-auto"
            ref={socials}
          >
              <div className="flex flex-col gap-4">
                <div className="mt-4">
                  <h1 className="text_color text-4xl text-green-600 font-bold text-center">
                  SOCIALS
                  </h1>
                  <div className="">
                <h2 className="mt-4 text-gray-500 leading-7 p-4 sm:p-0 text-center">
                Check out our frequently asked questions
                </h2>
              </div>
                </div>
              </div>
              <nav className="mt-4  flex items-center justify-center">
                <ul className="flex items-center justify-center gap-4">
                  {socialNetworks.map((social) => (
                    <li key={social.network}>
                      <button onClick={() =>
                        window.open(
                          social.link,
                          "__blank"
                        )
                      }
                        className={
                          social.color + " " + "p-2 rounded-md text-white"
                        }
                      >
                        <social.icon size={32} />

                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
          </div>
        </main>
      </main>
      <footer className="px-4 py-8 mt-12 bg-black">
        <div className="max-w-5xl w-full mx-auto">
          <div className="flex flex-col gap-8 mb-8">
            <nav className="flex items-center justify-center">
              <ul className="flex flex-row flex-wrap items-center justify-center gap-8">
                <li>
                  <Button>Home</Button>
                </li>
                <li>
                  <Button onClick={() => onScrollIntoTo(about)}>About</Button>
                </li>
                <li>
                  <Button onClick={() => onScrollIntoTo(roadmap)}>
                    Roadmap
                  </Button>
                </li>
                <li>
                  <Button onClick={() => onScrollIntoTo(howToBuy)}>
                    How to buy
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://github.com/NeoDogeCoin/whitepaper-neodogecoin/blob/main/blackpaper-NEODOGE-v1.pdf",
                        "__blank"
                      )
                    }
                  >
                    Whitepaper
                  </Button>
                </li>
                <li>
                  <a
                    href="https://pancakeswap.finance/swap?outputCurrency=0x036F1b175Aa67FAfA014cbCA23ef6e2FDA3F5165&inputCurrency=BNB"
                    className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
                    target="_blank"
                  >
                    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-green-600 opacity-[3%]"></span>
                    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-green-600 opacity-100 group-hover:-translate-x-8"></span>
                    <span className="relative w-full text-left text-green-600 transition-colors duration-200 ease-in-out group-hover:text-white">
                      Buy now
                    </span>
                    <span className="absolute inset-0 border-2 border-green-600 rounded-full"></span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="flex items-center justify-center w-32 rounded-md">
              <Image src={NeoDoge} alt="NeoDoge" />
            </div>
            <div className="text-gray-500">
              0x036f1b175aa67fafa014cbca23ef6e2fda3f5165
            </div>
            <div className="text-white text-center">
              <p>Contact our support desk here: support@neo-dogecoin.com</p>
              <br />
              <p>&copy; {new Date().getFullYear()} NeoDoge.</p>
              <p>All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
