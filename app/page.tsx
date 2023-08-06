import Domains from "../components/Domain/domains";
import Footer from "@/components/layouts/Footer";
import Sponsor from "../components/Sponsor/Sponsor";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Sponsor />
      <Domains />
      <Footer />
    </main>
  );
}
