import Image from "next/image";
import AboutUsImage from "/public/assets/images/about.svg";

export default function AboutUs() {
  return (
    <section className="body-font text-gray-600">
      <div>
        {" "}
        <h2 className="lg:text-5xl text-4xl font-medium text-center text-white">
          ABOUT US
        </h2>
      </div>
      <div className="container mx-auto flex flex-col justify-center items-center px-2 py-24 md:flex-row">
        <div className="flex justify-center items-center">
          <Image
            objectFit="cover"
            alt="hero"
            src={AboutUsImage}
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24 p-8">
          <p className="mb-8 text-white leading-relaxed text-justify text-lg ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident.
          </p>
          <p className="mb-8 text-white leading-relaxed text-justify text-lg ">
            At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident. At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident.
          </p>
          <p className="mb-8 text-white leading-relaxed text-justify text-lg ">
            At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident.
          </p>
        </div>
      </div>
    </section>
  );
}