import Image from "next/image";
import Fact from "@/components/Fact";
import maindata from "@/utils/main.json";

export default function Home() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="flex gap-3">
          <Image src="/favicon.svg" alt="logo" width={32} height={32} />
          <h1 className="title">Acme Dasboard</h1>
        </div>
      </nav>
      <main className="main flex p-10 flex-wrap items-center gap-5">
        {maindata.map((fact) => (
          <Fact key={fact.id} data={fact} />
        ))}
      </main>
    </div>
  );
}
