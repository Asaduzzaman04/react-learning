import { v4 as uIdv4 } from "uuid";

const Uniqueid = () => {
  const list = [
    {
      companyName: "Apple",
      prouctName: "Mackbook Air m3",
      releseDate: "4 march 2004",
    },
    {
      companyName: "Asus",
      prouctName: "ProArt P16 (H7606)",
      releseDate: "12 june 2004",
    },
    {
      companyName: "MSI",
      prouctName: "MSI Stealth 16 ",
      releseDate: "25 september 2004",
    },
  ];
  return (
    <div>
      {list.map((e) => {
        return (
            <div key={uIdv4()} className="border bg-black text-3xl  px-8 py-5 my-8 text-center flex flex-col gap-9 rounded-lg hover:shadow-[0px_3px_2px] hover:-translate-y-5 transition-all duration-500 ">
                <h1 className="text-5xl">{e.companyName}</h1>
                <h1>{e.prouctName}</h1>
                <h1>{e.releseDate}</h1>
            </div>
        );
      })}
    </div>
  );
};

export default Uniqueid;
