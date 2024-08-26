import { ChevronLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
const RateList = () => {
  const navigate = useNavigate();
  const details = [
    {
      unit: 100,
      rate: 0,
    },
    {
      unit: 110,
      rate: 24,
    },
    {
      unit: 120,
      rate: 47,
    },
    {
      unit: 130,
      rate: 71,
    },
    {
      unit: 140,
      rate: 94,
    },
    {
      unit: 150,
      rate: 118,
    },
    {
      unit: 160,
      rate: 141,
    },
    {
      unit: 170,
      rate: 165,
    },
    {
      unit: 180,
      rate: 188,
    },
    {
      unit: 190,
      rate: 212,
    },
    {
      unit: 200,
      rate: 235,
    },
    {
      unit: 210,
      rate: 282,
    },
    {
      unit: 220,
      rate: 329,
    },
    {
      unit: 230,
      rate: 376,
    },
    {
      unit: 240,
      rate: 423,
    },
    {
      unit: 250,
      rate: 470,
    },
    {
      unit: 260,
      rate: 517,
    },
    {
      unit: 270,
      rate: 564,
    },
    {
      unit: 280,
      rate: 611,
    },
    {
      unit: 290,
      rate: 658,
    },
    {
      unit: 300,
      rate: 705,
    },
    {
      unit: 310,
      rate: 752,
    },
    {
      unit: 320,
      rate: 799,
    },
    {
      unit: 330,
      rate: 846,
    },
    {
      unit: 340,
      rate: 893,
    },
    {
      unit: 350,
      rate: 940,
    },
    {
      unit: 360,
      rate: 987,
    },
    {
      unit: 370,
      rate: 1034,
    },
    {
      unit: 380,
      rate: 1081,
    },
    {
      unit: 390,
      rate: 1128,
    },
    {
      unit: 400,
      rate: 1175,
    },
    {
      unit: 410,
      rate: 1238,
    },
    {
      unit: 420,
      rate: 1301,
    },
    {
      unit: 430,
      rate: 1364,
    },
    {
      unit: 440,
      rate: 1427,
    },
    {
      unit: 450,
      rate: 1490,
    },
    {
      unit: 460,
      rate: 1553,
    },
    {
      unit: 470,
      rate: 1616,
    },
    {
      unit: 480,
      rate: 1679,
    },
    {
      unit: 490,
      rate: 1742,
    },
    {
      unit: 500,
      rate: 1805,
    },
    {
      unit: 510,
      rate: 2124,
    },
    {
      unit: 520,
      rate: 2208,
    },
    {
      unit: 530,
      rate: 2292,
    },
    {
      unit: 540,
      rate: 2376,
    },
    {
      unit: 550,
      rate: 2460,
    },
    {
      unit: 560,
      rate: 2544,
    },
    {
      unit: 570,
      rate: 2628,
    },
    {
      unit: 580,
      rate: 2712,
    },
    {
      unit: 590,
      rate: 2796,
    },
    {
      unit: 600,
      rate: 2880,
    },
    {
      unit: 610,
      rate: 2975,
    },
    {
      unit: 620,
      rate: 3069,
    },
    {
      unit: 630,
      rate: 3164,
    },
    {
      unit: 640,
      rate: 3258,
    },
    {
      unit: 650,
      rate: 3353,
    },
    {
      unit: 660,
      rate: 3447,
    },
    {
      unit: 670,
      rate: 3542,
    },
    {
      unit: 680,
      rate: 3636,
    },
    {
      unit: 690,
      rate: 3731,
    },
    {
      unit: 700,
      rate: 3825,
    },
    {
      unit: 710,
      rate: 3920,
    },
    {
      unit: 720,
      rate: 4014,
    },
    {
      unit: 730,
      rate: 4109,
    },
    {
      unit: 740,
      rate: 4203,
    },
    {
      unit: 750,
      rate: 4298,
    },
    {
      unit: 760,
      rate: 4392,
    },
    {
      unit: 770,
      rate: 4487,
    },
    {
      unit: 780,
      rate: 4581,
    },
    {
      unit: 790,
      rate: 4676,
    },
    {
      unit: 800,
      rate: 4770,
    },
    {
      unit: 810,
      rate: 4875,
    },
    {
      unit: 820,
      rate: 4980,
    },
    {
      unit: 830,
      rate: 5085,
    },
    {
      unit: 840,
      rate: 5190,
    },
    {
      unit: 850,
      rate: 5295,
    },
    {
      unit: 860,
      rate: 5400,
    },
    {
      unit: 870,
      rate: 5505,
    },
    {
      unit: 880,
      rate: 5610,
    },
    {
      unit: 890,
      rate: 5715,
    },
    {
      unit: 900,
      rate: 5820,
    },
    {
      unit: 910,
      rate: 5925,
    },
    {
      unit: 920,
      rate: 6030,
    },
    {
      unit: 930,
      rate: 6135,
    },
    {
      unit: 940,
      rate: 6240,
    },
    {
      unit: 950,
      rate: 6345,
    },
    {
      unit: 960,
      rate: 6450,
    },
    {
      unit: 970,
      rate: 6555,
    },
    {
      unit: 980,
      rate: 6660,
    },
    {
      unit: 990,
      rate: 6765,
    },
    {
      unit: 1000,
      rate: 6870,
    },
  ];
  const back = () => {
    navigate(-1);
  };
  return (
    <div>
      <section className="fixed border-b bg-[#1f2833] px-2 w-full z-10 py-3 ">
        <button
          onClick={back}
          className="flex items-center hover:bg-opacity-70 p-2 border rounded-lg"
        >
          <ChevronLeft className="text-orange-400" />
          Back
        </button>
      </section>
      <section className="py-20">
        <div className=" px-3">
          <table className="w-full  border-collapse">
            <thead className="">
              <tr>
                <th className="border py-2 px-4">Unit</th>
                <th className="border py-2 px-4 ">Rate</th>
              </tr>
            </thead>
            <tbody>
              {details.map((data, index) => (
                <tr className=" " key={index}>
                  <td className="border  px-4 py-2">{data.unit}</td>
                  <td className="border px-4 py-2">{data.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* {details.map((data, index) => (
        <div>
          {data.unit}
          {data.rate}
        </div>
      ))} */}
    </div>
  );
};

export default RateList;
