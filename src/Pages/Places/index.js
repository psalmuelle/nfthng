import React, {useState} from "react";
import "../../Assets/Styles/places.css"
import Header from "../../Layouts/Header"
import Footer from "../../Layouts/Footer"
import Main from "../../Layouts/Main"
import closeIcon from "../../Assets/Images/close.svg"
import chevronIcon from "../../Assets/Images/down-chevron.svg"
import metamaskIcon from "../../Assets/Images/metamask-logo.png"
import walletconnectIcon from "../../Assets/Images/wallet-connect.png"
import Card from "../../Components/Card";
import locationIcon from "../../Assets/Images/setting-5.svg"


export default function Places (){
    const [modal, setModal] = useState(false)
    const places = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    return(
        <div>
           <Header setModal = {setModal}/>

           <Main>
            <div className="location__container">
                <ul>
                    <li>Restaurant</li>
                    <li>Cottage</li>
                    <li>Castle</li>
                    <li>Fantasy city</li>
                    <li>Beach</li>
                    <li>Carbins</li>
                    <li>Off-grid</li>
                    <li>Farm</li>
                </ul>
                <p>Location <img src={locationIcon} alt="location" /></p>
            </div>

            <div className='cards__container' >
          {places.map((val, i) => {
              return (
              <Card key={i}
                imgSrc={require(`../../Assets/Images/place${val.toString()}.png`)}
              
              />
            );
          })}
        </div>
            </Main> 
            
            <Footer/>

            {
                modal && (
                    <div className="modal__container">
                    <div className="modal">
                        <div className="modal__header">
                            <h3>Connect Wallet</h3>
                            <img onClick={()=> setModal(false)} alt="cancel" src={closeIcon} />
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
    )
}
