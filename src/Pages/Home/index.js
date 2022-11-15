import React, {useState} from "react";
import "../../Assets/Styles/home.css";
import Footer from "../../Layouts/Footer";
import Header from "../../Layouts/Header";
import Main from "../../Layouts/Main";
import Card from "../../Components/Card";
import heroImg from "../../Assets/Images/hero-img.png";
import mbtokensLogo from "../../Assets/Images/mb-token.svg";
import metamaskLogo from "../../Assets/Images/metamask.svg";
import openseaLogo from "../../Assets/Images/opensea.svg";
import closeIcon from "../../Assets/Images/close.svg"
import chevronIcon from "../../Assets/Images/down-chevron.svg"
import metamaskIcon from "../../Assets/Images/metamask-logo.png"
import walletconnectIcon from "../../Assets/Images/wallet-connect.png"


export default function LandingPage() {
    const [showModal, setShowModal] = useState(false)
  const i = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="home-page">
      <Header setModal={setShowModal} />
      <Main>
        <section className='hero__section'>
          <div>
            <h1>
              Rent a <span>Place</span> away from <span>Home </span> in the{" "}
              <span>Metaverse</span>
            </h1>
            <p>
              We provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>

            <form>
              <input type='text' placeholder='Search for location' />
              <button>Search</button>
            </form>
          </div>
          <img alt='hero' src={heroImg} />
        </section>

        <div className='companies__logo'>
          <img src={mbtokensLogo} alt='mb tokens' />
          <img src={metamaskLogo} alt='metamask' />
          <img src={openseaLogo} alt='opensea' />
        </div>

        <h1 className='inspiration__home'>
          Inspiration for your next adventure
        </h1>

        <div className='cards__container' >
          {i.map((val, i) => {
              return (
              <Card key={i}
                imgSrc={require(`../../Assets/Images/inspire${val.toString()}.png`)}
              
              />
            );
          })}
        </div>

        <section className='second__hero'>
          <div>
            <h1 className='second__hero-header'>Metabnb NFTs</h1>
            <p>
              Discover our NFT gift cards collection. Loyal customers gets
              amazing gift cards which are traded as NFTs. These NFTs gives our
              cutomer access to loads of our exclusive services.
            </p>
            <button>Learn More</button>
          </div>
          <img
            alt='metabnb nfts'
            src={require("../../Assets/Images/footer-hero.png")}
          />
        </section>
      </Main>
      <Footer />

{

   showModal &&(
    <div className="modal__container">
    <div className="modal">
        <div className="modal__header">
            <h3>Connect Wallet</h3>
            <img onClick={()=> setShowModal(false)} alt="cancel" src={closeIcon} />
        </div>
        <p className="modal__texts">Choose you preferred wallet:</p>

        <div className="wallet__type-modal">
            <figure>
                <img alt="metamsk" src={metamaskIcon}/> Metamask
            </figure>
            <img alt="click to see more options" src={chevronIcon}/>
        </div>
       
       
        <div className="wallet__type-modal walletconnect" >
            <figure>
                <img alt="wallet connect" src={walletconnectIcon}/> WalletConnect
            </figure>
            <img alt="click to see more options" src={chevronIcon}/>
        </div>
    </div>
  </div>

)

}



    </div>
  );
}
