import Domains from "../components/layouts/domains";
import Footer from "@/components/layouts/Footer";
import Sponsor from "../components/layouts/Sponsor";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Sponsor />
      <Domains />
      <Footer />
    </main>
  );
}
