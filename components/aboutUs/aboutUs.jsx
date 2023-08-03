import Image from "next/image";
import AboutUsImage from "../../public/assets/images/aboutImage.svg"

export default function AboutUs() {
  return (
    <section className="text-white body-font py-6">
      <h2 className="lg:text-5xl text-4xl font-bold mb-8 text-center">
        About Us
      </h2>
      <div className="container mx-auto flex px-2 py-24 md:flex-row flex-col items-center justify-center">
        <div className="lg:max-w-lg lg:w-full justify-center md:mb-0 md:justify-start flex items-center ">
          <Image
            className="max-w-full max-h-full mx-auto"
            alt="About us image"
            src={AboutUsImage}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-6 md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="mb-8 mx-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam
            sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Bibendum at
            varius vel pharetra vel turpis nunc. Hendrerit dolor magna eget est
            lorem. Netus et malesuada fames ac turpis egestas maecenas pharetra.
            At elementum eu facilisis sed odio. Amet commodo nulla facilisi
            nullam vehicula ipsum a arcu.
            
            Nisi est sit amet facilisis magna etiam. Quis eleifend quam adipiscing vitae. Ornare suspendisse sed nisi lacus. Et malesuada fames ac turpis egestas maecenas pharetra. Sed cras ornare arcu dui vivamus arcu felis bibendum. Ut tortor pretium viverra suspendisse. Fames ac turpis egestas integer eget aliquet nibh praesent. Eleifend mi in nulla posuere. Amet nisl purus in mollis nunc sed id semper risus. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Lobortis scelerisque fermentum dui faucibus in ornare quam.
          </p>
        </div>
      </div>
    </section>
  );
}