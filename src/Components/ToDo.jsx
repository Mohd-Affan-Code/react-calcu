import React, { useState } from "react";
// import "./App.css";

const ToDo = () => {
  const [data, setdata] = useState("");
  const getValue = (e) => {
    console.log(e.target.value);
    setdata(data.concat(e.target.value));
  };
  const calculation = () => {
    setdata(eval(data).toString());
  };
  const handleClear = () => {
    setdata("");
  };
  const back = () => {
    setdata(data.slice(0, -1));
  };
  return (
    <>
      <div className="flex justify-center   m-auto items-center">
        <div className="bg-green-500 p-7 " style={{ maxWidth: "350px" }}>
          <div className="p-1">
            <input
              className="p-3 w-full"
              type="text"
              placeholder="000"
              value={data}
              readOnly
            />
          </div>
          <button onClick={getValue} value="(">
            (
          </button>
          <button onClick={getValue} value=")">
            )
          </button>
          <button onClick={getValue} value="%">
            %
          </button>
          <button onClick={handleClear} value="AC">
            AC
          </button>

          <button onClick={getValue} value="7">
            7
          </button>
          <button onClick={getValue} value="8">
            8
          </button>
          <button onClick={getValue} value="9">
            9
          </button>
          <button onClick={getValue} value="*">
            *
          </button>

          <button onClick={getValue} value="4">
            4
          </button>
          <button onClick={getValue} value="5">
            5
          </button>
          <button onClick={getValue} value="6">
            6
          </button>
          <button onClick={getValue} value="-">
            -
          </button>

          <button onClick={getValue} value="1">
            1
          </button>
          <button onClick={getValue} value="2">
            2
          </button>
          <button onClick={getValue} value="3">
            3
          </button>
          <button onClick={getValue} value="+">
            +
          </button>

          <button onClick={getValue} value="0">
            0
          </button>
          <button onClick={back} value="Back">
            Back
          </button>
          <button onClick={calculation} value="=">
            =
          </button>
          <button onClick={getValue} value="/">
            /
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDo;
