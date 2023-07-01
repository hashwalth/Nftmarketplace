import React, { useState, useEffect, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { HeroSection,
   Service, 
   BigNFTSilder, 
   Subscribe, 
   Title,
    Category,
    Filter,
    NFTCard,
    Collection,
    AudioLive,
    FollowerTab,
    Slider,
    Brand,
    Video,
  } from "../components/componentindex";

  //IMPORTING CONTRCT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const Home = () => {

  const { checkIfWalletConnected } = useContext(NFTMarketplaceContext);
  useEffect(() => {
    checkIfWalletConnected();
  }, []);
  
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service/>
      <BigNFTSilder/>
      <Title
        heading="NEW Audio Collection"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <AudioLive/>
      <FollowerTab/>
      <Slider/>
      <Collection/>
      <Title 
      heading="Featured NFTs"
      paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <Filter/>
      <NFTCard/>
      <Title 
      heading="Browse by category"
      paragraph="Explore the NFTs in the most featured categories."/>
      <Category/>
      <Subscribe/>
      <Brand/>
    </div>

  );
};

export default Home;