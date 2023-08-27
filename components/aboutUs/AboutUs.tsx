import Image from "next/image";
import AboutUsImage from "/public/assets/images/about.svg";

export default function AboutUs() {
  return (
    <section id="aboutus" className="body-font text-gray-600 max-w-[1420px] mx-auto py-20">
      <div>
        {" "}
        <h2 className="text-5xl md:text-7xl font-medium text-center text-white">
          ABOUT US
        </h2>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center px-2  md:flex-row">
        <div className="flex justify-center items-center relative">
          <Image
            objectFit="cover"
            alt="hero"
            src={AboutUsImage}
            width={500}
            height={500}
            className="z-10"
          />
          <div className="absolute z-[5] -bottom-20 -right-20 w-72 h-72 bg-[#BB2CFF] rounded-full filter blur-[100px] opacity-70"></div>
        </div>
        <div className="z-20 flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24 p-8">
          <p className="mb-8 text-white leading-relaxed text-justify text-xl ">
            Welcome to <span className="">TPHxSRM</span>, the forefront of innovation and exploration in
            the world of technology. We are the <span>Product House SRM Web3 Club</span>, a
            vibrant community dedicated to delving into the realms of Web3
            technologies and blockchain innovations.
          </p>
          <p className="mb-8 text-white leading-relaxed text-justify text-xl ">
            <span>Our mission</span> is to provide a platform for curious minds and tech
            enthusiasts to learn, collaborate, and create. Whether you're an
            experienced developer or just starting your journey, TPHxSRM is the
            place where you can harness the <span>power of decentralized</span>applications
            and contribute to shaping the digital future.
          </p>
          <p className="mb-8 text-white leading-relaxed text-justify text-xl ">
            As a member of our club, you'll have the opportunity to engage with
            industry experts, work on <span>real-world projects</span>, and be part of a
            network that values innovation and growth. Join us on this exciting
            adventure as we pave the way for the next generation of
            technological advancements.
          </p>
        </div>
      </div>
    </section>
  );
}
