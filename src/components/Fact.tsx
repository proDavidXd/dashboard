import Image from "next/image";
import Link from "next/link";

interface Fact {
  title: number;
  icon: string;
  value: number;
  unit: string;
  growType: string;
  grow: number;
  link: string;
}

export default function Fact({ data }: { data: Fact }) {
  return (
    <div className="fact relative md:w-[30%] w-full" id={data.title}>
      <span>
        <Link
          className="transition duration-100 hover:border-b hover:border-b-purple-500"
          href={data.link}
        >
          {data.title}
        </Link>{" "}
      </span>
      <Image
        className="symbol absolute top-5 right-1 "
        src={data.icon}
        alt={data.title}
        width={25}
        height={25}
      ></Image>
      <div className="info flex-wrap items-center flex gap-2 mt-[5rem]">
        <span className="value text-xl md:text-2xl font-semibold">
          {data.value}
        </span>
        <span className="unit">{data.unit}</span> <br />
      </div>
      <span className="text-xs text-[#555]">
        {data.growType}
        {data.grow}% from last month
      </span>
    </div>
  );
}
