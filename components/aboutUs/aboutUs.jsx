import Image from "next/image";
import AboutUsImage from "../../public/assets/images/aboutImage.svg";

export default function AboutUs() {
  return (
    <section className="body-font text-gray-600">
      <div>
        {" "}
        <h2 className="lg:text-5xl text-4xl font-medium text-center text-white">
          About Us
        </h2>
      </div>
      <div className="container mx-auto flex flex-col items-center px-2 py-24 md:flex-row">
        <div className="mb-8 flex w-4/5 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
          <Image
            className=" object-cover"
            alt="hero"
            src={AboutUsImage}
            width={600}
            height={600}
          />
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
          <p className="mb-8 text-white leading-relaxed text-justify text-lg ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident. At vero eos et accusamus et iusto odio dignissimos
            ducimus qui blanditiis praesentium voluptatum deleniti atque
            corrupti quos dolores et quas molestias excepturi sint occaecati
            cupiditate non provident. At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint
            occaecati cupiditate non provident.
          </p>
        </div>
      </div>
    </section>
  );
}