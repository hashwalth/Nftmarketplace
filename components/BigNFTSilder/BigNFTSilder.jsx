import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./BigNFTSilder.module.css";
import images from "../../img";
import Button from "../Button/Button";

const BigNFTSilder = () => {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
        title:"Hello NFT",
        id: 1,
        name: "Isaac Yav",
        price:"00167 ETH",
        collection: "Hourrah",
        like: 777,
        image: images.user1,
        nftImage: images.nft_image_1,
        time:{
            days: 20,
            hours: 45,
            minutes: 80,
            seconds: 30,
        },

    },
    {
        title:"Hype NFT",
        id: 2,
        name: "Jean Luc",
        price:"18700 ETH",
        collection: "ours",
        like: 999,
        image: images.user2,
        nftImage: images.nft_image_2,
        time:{
            days: 10,
            hours: 15,
            minutes: 60,
            seconds: 30,
        },

    },
    {
        title:"bunny NFT",
        id: 3,
        name: "Ken Yav",
        price:"12492 ETH",
        collection: "Abdias",
        like: 603,
        image: images.user3,
        nftImage: images.nft_image_3,
        time:{
            days: 30,
            hours: 30,
            minutes: 50,
            seconds: 10,
        },

    },
    {
        title:"MMN NFT",
        id: 4,
        name: "charlotte kalumbu",
        price:"20465 ETH",
        collection: "osiris",
        like: 333,
        image: images.user4,
        nftImage: images.nft_image_4,
        time:{
            days: 20,
            hours: 45,
            minutes: 80,
            seconds: 30,
        },

    }
];
const [auctionTimes, setAuctionTimes] = useState(sliderData.map(data => data.time));

const updateAuctionTimes = useCallback(() => {
  setAuctionTimes(times => {
    return times.map(time => {
      const newTime = { ...time };
      if (newTime.seconds > 0) {
        newTime.seconds -= 1;
      } else if (newTime.minutes > 0) {
        newTime.seconds = 59;
        newTime.minutes -= 1;
      } else if (newTime.hours > 0) {
        newTime.seconds = 59;
        newTime.minutes = 59;
        newTime.hours -= 1;
      } else if (newTime.days > 0) {
        newTime.seconds = 59;
        newTime.minutes = 59;
        newTime.hours = 23;
        newTime.days -= 1;
      }
      return newTime;
    });
  });
}, []);

useEffect(() => {
  const interval = setInterval(updateAuctionTimes, 1000);
  return () => clearInterval(interval);
}, [updateAuctionTimes]);

//-------INC
const inc = useCallback(() => {
    if(idNumber + 1 < sliderData.length){
        setIdNumber(idNumber + 1);
    }
}, [idNumber, sliderData.length]);

 //-------DEC
 const dec = useCallback(() => {
    if(idNumber > 0){
        setIdNumber(idNumber - 1);
    }
}, [idNumber]);

  return (
    <div className={Style.bigNFTSlider}>
      <div className={Style.bigNFTSlider_box}>
        <div className={Style.bigNFTSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.bigNFTSlider_box_left_creator}>
            <div className={Style.bigNFTSlider_box_left_creator_profile}>
              <Image
                className={Style.bigNFTSlider_box_left_creator_profile_img}
                src={sliderData[idNumber].image}
                alt="profile image"
                width={50}
                height={50}
              />
              <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}{" "}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>

            <div className={Style.bigNFTSlider_box_left_creator_collection}>
              <AiFillFire
                className={Style.bigNFTSlider_box_left_creator_collection_icon}
              />

              <div
                className={Style.bigNFTSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_bidding}>
            <div className={Style.bigNFTSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} <span>$221,21</span>
              </p>
            </div>

            <p className={Style.bigNFTSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.bigNFTSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={Style.bigNFTSlider_box_left_bidding_box_timer}>
              <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                <p>{auctionTimes[idNumber].days}</p>
                <span>Days</span>
              </div>

              <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                <p>{auctionTimes[idNumber].hours}</p>
                <span>Hours</span>
              </div>

              <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                <p>{auctionTimes[idNumber].minutes}</p>
                <span>mins</span>
              </div>

              <div className={Style.bigNFTSlider_box_left_bidding_box_timer_item}>
                <p>{auctionTimes[idNumber].seconds}</p>
                <span>secs</span>
              </div>

            </div>

            <div className={Style.bigNFTSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>

          <div className={Style.bigNFTSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.bigNFTSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>

        <div className={Style.bigNFTSlider_box_right}>
          <div className={Style.bigNFTSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className={Style.bigNFTSlider_box_right_box_img}
            />

            <div className={Style.bigNFTSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigNFTSilder;
