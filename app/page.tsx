import Domains from "../components/layouts/domains";
import Footer from "@/components/layouts/Footer"
import AboutUs from "@/components/aboutUs/aboutUs";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <AboutUs/>
      <Domains />
      <Footer />
    </main>
  );
}
