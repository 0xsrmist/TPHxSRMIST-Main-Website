import Domains from "../components/Domain/domains";
import Footer from "@/components/layouts/Footer";
import Sponsor from "../components/Sponsor/Sponsor";
import AboutUs from "@/components/aboutUs/aboutUs";
import NewsLetter from "@/components/newsletter/NewsLetter";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Sponsor />
      <AboutUs/>
      <Domains />
      <NewsLetter/>
      <Footer />
    </main>
  );
}
