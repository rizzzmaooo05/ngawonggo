import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import Articles from "@/components/Articles";
import AboutUs from "@/components/AboutUs";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Main />
        <Articles />
        <AboutUs />
        <Contacts />
      </main>
    </>
  );
}
