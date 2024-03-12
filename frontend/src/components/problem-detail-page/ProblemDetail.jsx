import OnlineCompiler from "./online-compiler/OnlineCompiler";
import Problem from "./problem/Problem";

function ProblemDetail() {
  const customStyle = {
    backgroundColor: "#d9d9d9",
  };
  return (
    <div>
      <div className="grid grid-cols-2 gap-1" style={customStyle}>
        <Problem />
        <OnlineCompiler />
      </div>
    </div>
  );
}

export default ProblemDetail;
