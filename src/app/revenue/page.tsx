import Image from "next/image";
import maindata from "@/utils/main.json";
import chartData from "@/utils/chart/revenue.json";
import LineChart from "@/components/Charts/Line";

const revenue = maindata[0];

export default function Revenue() {
  return (
    <div className="app">
      <nav className="nav">
        <div className="flex gap-3">
          <Image src="/favicon.svg" alt="logo" width={32} height={32} />
          <h1 className="title">Acme Dasboard</h1>
        </div>
      </nav>
      <div className="type flex gap-3 items-center m-5 justify-center">
        <span className="text-4xl">Revenue</span>
        <Image src={revenue.icon} alt="type" width={32} height={32}></Image>
      </div>
      <main className="main flex flex-col items-center  p-10 ">
        <div className="now flex items-center gap-2">
          <span className="text-3xl">Now:</span>
          <span className="text-3xl font-semibold">{revenue.value}</span>
          <span className="text-xl">{revenue.unit}</span>
        </div>{" "}
        <br />
        <LineChart data={chartData} className="chart md:w-1/2" />
        <span className="text-xl">
          {revenue.growType}
          {revenue.grow}% from last month
        </span>
      </main>
    </div>
  );
}
