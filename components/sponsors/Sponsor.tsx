import React from "react";
import Image from "next/image";
import Link from "next/link";
import sponsorImg from "/public/assets/images/sponsor.png";
import star from "/public/assets/icons/star.svg";
import InfiniteLooper from "./InfinteLooper";

export default function Sponsor() {
  const imageUrls: { [key: number]: string } = {
    1: "/assets/icons/mov.svg",
    2: "/assets/icons/su.svg",
    3: "/assets/icons/tezos.svg",
    4: "/assets/icons/w.svg",
    5: "/assets/icons/web3.svg",
    6: "/assets/icons/zeeve.svg",
  };

  return (
    <div className="py-20">
      {/* <Image
        src={sponsorImg}
        alt="sponsors"
        className=" h-[149px] w-[100%] md:h-auto md:mb-12"
      /> */}
      <div className="-rotate-6 z-10">
        <hr className="w-full h-[1.5px] bg-white"></hr>
        <InfiniteLooper speed={50} direction="left">
          <div className="flex gap-40 px-20">
            {Object.keys(imageUrls).map((boxNumber: string, index: number) => (
              <div className="flex gap-40" key={index}>
                {/* Image box */}
                <div className="flex">
                  <Image
                    src={imageUrls[parseInt(boxNumber, 10)]}
                    alt={`Image ${boxNumber}`}
                    className="flex"
                    width={70}
                    height={70}
                  />
                </div>

                {/* star */}
                <div className="flex animate-rotate">
                  <Image src={star} alt="star" width={40} height={40} />
                </div>
              </div>
            ))}
          </div>
        </InfiniteLooper>
        <hr className="w-full h-[1.5px] bg-white"></hr>
      </div>

      <div className="rotate-0 z-20 bg-black">
        <hr className="w-full h-[1.5px] bg-white"></hr>
        <InfiniteLooper speed={50} direction="right">
          <div className="flex gap-40 px-20 p-3">
            {Object.keys(imageUrls).map((boxNumber: string, index: number) => (
              <div className="flex gap-40" key={index}>
                {/* Image box */}
                <div className="flex">
                  <Image
                    src={imageUrls[parseInt(boxNumber, 10)]}
                    alt={`Image ${boxNumber}`}
                    className="flex"
                    width={70}
                    height={70}
                  />
                </div>

                {/* star */}
                <div className="flex animate-rotate">
                  <Image src={star} alt="star" width={40} height={40} />
                </div>
              </div>
            ))}
          </div>
        </InfiniteLooper>
        <hr className="w-full h-[1.5px] bg-white"></hr>
      </div>

      <div className="-rotate-6 z-10 bg-black">
        <hr className="w-full h-[1.5px] bg-white"></hr>
        <InfiniteLooper speed={50} direction="left">
          <div className="flex gap-40 px-20">
            {Object.keys(imageUrls).map((boxNumber: string, index: number) => (
              <div className="flex gap-40" key={index}>
                {/* Image box */}
                <div className="flex">
                  <Image
                    src={imageUrls[parseInt(boxNumber, 10)]}
                    alt={`Image ${boxNumber}`}
                    className="flex"
                    width={70}
                    height={70}
                  />
                </div>

                {/* star */}
                <div className="flex animate-rotate">
                  <Image src={star} alt="star" width={40} height={40} />
                </div>
              </div>
            ))}
          </div>
        </InfiniteLooper>
        <hr className="w-full h-[1.5px] bg-white"></hr>
      </div>

    </div>
  );
}
