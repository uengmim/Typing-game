import React from "react";

// function ShowRank({ results }) {
//   const style = {
//     border: "1px solid black",
//     padding: "8px",
//     margin: "8px",
//   };

//   return (
//     <div style={style}>
//       {/* {results.rank}등 / */}
//       닉네임 : {results.username} <span> / 점수 : {results.score}</span>{" "}
//     </div>
//   );
// }
const style = {
  border: "1px solid black",
  padding: "8px",
  margin: "8px",
};
function AllRank(result) {
  const data = [
    {
      id: 1,
      username: "hun",
      score: 100,
      mode: "쉬움",
    },
    {
      id: 2,
      username: "huns",
      score: 300,
      mode: "매우어려움",
    },
    {
      id: 3,
      username: "hunei",
      score: 50,
      mode: "어려움",
    },
  ];

  const resultdata = data.concat(result);
  resultdata.sort((a, b) => {
    return b.score - a.score;
  });

  //   //등수 추가
  //   if (resultdata.length > 0) {
  //     for (let i = 0; i < resultdata.length; i++) {
  //       resultdata[i].rank = i + 1;
  //     }
  //   }

  return (
    <div>
      {resultdata.map((results, index) => (
        <div style={style}>
          {index + 1}등 {results.username} <span> 점수 : {results.score}</span>{" "}
          <span>난이도 : {results.mode}</span>
        </div>
      ))}
    </div>
  );
}

export default AllRank;
