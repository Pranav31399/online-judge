function Problem() {
  const problem1 = {
    id: 1,
    created_at: "2023-03-10T10:00:00.000Z",
    updated_at: "2023-03-10T10:00:00.000Z",
    title: "Two Sum",
    difficulty: "Easy",
    topics: ["Array", "Hash Table"],
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.\nYou can return the answer in any order.",
    constraints: [
      "2 <= nums.length <= 104",
      "-109 <= nums[i] <= 109",
      "-109 <= target <= 109",
      "Only one valid answer exists.",
    ],
    testcases: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0, 1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1, 2]",
      },
      {
        input: "nums = [3,3], target = 6",
        output: "[0, 1]",
      },
    ],
  };

  return (
    <div className="container font-sans border-solid border-2 border-gray-500 rounded-lg p-2 tracking-wider leading-7">
      <div className="pb-4 w-64 flex font-medium text-sm">
        <div className="flex-1 w-4 bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
          Desciption
        </div>
        <div className="flex-1 w-4 bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded">
          Submissions
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold">
          {problem1.id}. {problem1.title}
        </h1>

        <div>
          <button>{problem1.difficulty}</button>
          <button>topics</button>
        </div>

        <p className="text-gray-600 mt-2">{problem1.description}</p>
      </div>
      <div className="mt-4">
        {problem1.testcases.map((p, index) => (
          <div>
            <h2 className="text-lg font-bold">Example {index + 1}</h2>
            <p className="text-gray-600">
              Input: {p.input}
              <br />
              Output: {p.output}
              <br />
              {p.explanation && <span>Explanation: {p.explanation}</span>}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">Constraints:</h2>
        <ul className="list-disc list-inside text-gray-600">
          {problem1.constraints.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  // return (
  //   <div className="font-sans">
  //     <main className="container mx-auto mt-4">
  //       <h1 className="text-2xl font-bold">Two Sum</h1>
  //       <p className="text-gray-600 mt-2">
  //         Given an array of integers nums and an integer target, return indices
  //         of the two numbers such that they add up to target.
  //       </p>
  //       <div className="mt-4">
  //         <h2 className="text-lg font-bold">Example 1:</h2>
  //         <p className="text-gray-600">
  //           Input: nums = [2,7,11,15], target = 9<br />
  //           Output: [0,1]
  //           <br />
  //           Output: Because nums[0] + nums[1] == 9, we return [0, 1].
  //         </p>
  //       </div>
  //       <div className="mt-4">
  //         <h2 className="text-lg font-bold">Constraints:</h2>
  //         <ul className="list-disc list-inside text-gray-600">
  //           {/* <li>2 <= nums.length <= 10^3</li>
  //           <li>-10^9 <= nums[i] <= 10^9</li>
  //           <li>-10^9 <= target <= 10^9</li>
  //           <li>Only one valid answer exists.</li> */}
  //         </ul>
  //       </div>
  //     </main>
  //   </div>
  // );
}

export default Problem;
