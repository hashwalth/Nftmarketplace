import React, {useState, useEffect, useContext }from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentindex";
import images from "../../img";

//SMART 

import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

function HeroSection() {
  const {titleData} = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.herosection}>
      <div className={Style.herosection_box}>
        <div className={Style.herosection_box_left}>
          <h1>
          {titleData}🖼️
          </h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className={Style.herosection_box_right}>
          <Image src={images.hero} alt="Hero Section" width={600} height={600}/>

        </div>
      </div>
    </div>
  )
}

export default HeroSection;