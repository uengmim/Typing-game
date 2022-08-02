import React, { useEffect, useState } from "react";
import "./Rank.css";

function Rank2(result) {
  const [header, setHeader] = useState();
  const [data, setData] = useState();

  // const userdata = result;

  useEffect(() => {
    setData({
      data: [
        { rank: 1, name: "홍길동", score: 2000, mode: "쉬움" },
        { rank: 2, name: "길동홍", score: 500, mode: "어려움" },
        { rank: 3, name: "동길홍", score: 2200, mode: "쉬움" },
        { rank: 4, name: "홍동길", score: 2000, mode: "어려움" },
        { rank: 5, name: "동홍길", score: 1500, mode: "보통" },
      ],
    });
    setHeader(["랭킹", "이름", "점수", "난이도"]);
    if (data) {
      if (data.length > 0) {
        for (let i = 0; i < data.length; i++) {
          setData((data[i].rank = i + 1));
        }
      }
    }
  }, [data]);

  return (
    <table>
      <thead>
        <h1>난이도별 랭킹</h1>
        <tr>
          {header &&
            header.map((item) => {
              return <th>{item}</th>;
            })}
        </tr>
      </thead>
      <tbody>
        {data &&
          data.data.map((item) => {
            return (
              <tr>
                <td width={200}>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.score}</td>
                <td>{item.mode}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Rank2;
