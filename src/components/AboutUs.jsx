import AboutUsCard from "./partials/AboutUsCard";

import dicky from "@/assets/images/profile-picture/dicky.jpg";
import indi from "@/assets/images/profile-picture/indi.jpg";
import herna from "@/assets/images/profile-picture/herna.jpg";
import nahdia from "@/assets/images/profile-picture/nahdia.jpg";
import putri from "@/assets/images/profile-picture/putri.jpg";
import maul from "@/assets/images/profile-picture/maul.jpg";
import saput from "@/assets/images/profile-picture/saput.jpg";
import harry from "@/assets/images/profile-picture/harry.jpg";
import eci from "@/assets/images/profile-picture/eci.jpg";
import faisal from "@/assets/images/profile-picture/faisal.jpg";
import sely from "@/assets/images/profile-picture/sely.jpg";

export default function AboutUs() {
  return (
    <section className="w-full min-h-[100vh] bg-[#222937] flex flex-col justify-center items-center text-white p-4" id="about-us">
      <h1 className="text-4xl font-bold">Tentang Kami</h1>
      <p className="mb-4">
        Website ini dibuat oleh Mahasiswa UNNES GIAT 9 (KKN) Desa Ngawonggo,
        Kecamatan Kaliangkrik, Kabupaten Magelang
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
        <AboutUsCard visibility={"hidden md:block invisible"} />
        <AboutUsCard visibility={"hidden lg:block invisible"} />
        <AboutUsCard
          imgSrc={dicky}
          jabatan={"Koormades"}
          nama={"Muhammad Dicky Prayogo"}
          fakultas={"FEB"}
          usernameIG={"/"}
        />
        <AboutUsCard visibility={"hidden md:block invisible"} />
        <AboutUsCard visibility={"hidden lg:block invisible"} />
        <AboutUsCard
          imgSrc={indi}
          jabatan={"Sekretaris"}
          nama={"Nisa Qadrea Indirayani"}
          fakultas={"FH"}
          usernameIG={"nisaqadreai"}
        />
        <AboutUsCard
          imgSrc={herna}
          jabatan={"Sekretaris"}
          nama={"Herna Ulina Syah Putri"}
          fakultas={"FEB"}
          usernameIG={"herna_syahputri14"}
        />
        <AboutUsCard
          imgSrc={nahdia}
          jabatan={"Bendahara"}
          nama={"Nahdia Sabrina"}
          fakultas={"FBS"}
          usernameIG={"/"}
        />
        <AboutUsCard
          imgSrc={putri}
          jabatan={"Bendahara"}
          nama={"Putri Nur Hasanah"}
          fakultas={"FT"}
          usernameIG={"/"}
        />
        <AboutUsCard
          imgSrc={maul}
          jabatan={"Sie Perkap"}
          nama={"Rizqon Maulana"}
          fakultas={"FMIPA"}
          usernameIG={"winter.rizzz_"}
        />
        <AboutUsCard
          imgSrc={harry}
          jabatan={"Sie Pubdok"}
          nama={"Harry Rahardian"}
          fakultas={"FBS"}
          usernameIG={"/"}
        />
        <AboutUsCard
          imgSrc={eci}
          jabatan={"Sie Pubdok"}
          nama={"Resty Feliza"}
          fakultas={"FISIP"}
          usernameIG={"rfelizaa"}
        />
        <AboutUsCard
          imgSrc={faisal}
          jabatan={"Sie Humas"}
          nama={"Muhammad Faisal Hamdi"}
          fakultas={"FH"}
          usernameIG={"/"}
        />
        <AboutUsCard
          imgSrc={sely}
          jabatan={"Sie Humas"}
          nama={"Sely Vivi Aulia"}
          fakultas={"FIPP"}
          usernameIG={"va.sellyy__"}
        />
        <AboutUsCard
          imgSrc={saput}
          jabatan={"Sie Perkap"}
          nama={"Salsabila Putri Inayah"}
          fakultas={"FIK"}
          usernameIG={"winter.rizzz_"}
        />
      </div>
    </section>
  );
}
