import Domains from "@/components/domains/Domains";
import Footer from "@/components/layouts/Footer"
import AboutUs from "@/components/aboutUs/AboutUs";
import Sponsor from "@/components/sponsors/Sponsor";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Sponsor />
      <AboutUs/>
      <Domains />
      <Footer />
    </main>
  );
}
