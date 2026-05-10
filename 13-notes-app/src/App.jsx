import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log(title, details);
    const copyTask = [...task];
    // console.log(task);

    copyTask.push({title, details})
    setTask(copyTask)

    setTitle("");
    setDetails('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 text-white p-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">

        {/* Add Notes Section */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-yellow-300 mb-6">
            ✍ Add Notes
          </h1>

          {/* FIXED HERE */}
          <form className="flex flex-col gap-5" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Enter Notes Heading"
              className="px-5 py-3 rounded-xl bg-white/20 border border-white/30 placeholder-white outline-none focus:ring-2 focus:ring-yellow-300"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              placeholder="Write Details..."
              className="px-5 py-3 h-40 rounded-xl bg-white/20 border border-white/30 placeholder-white outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
              value={details}
              onChange={(e) => {
                setDetails(e.target.value);
              }}
            ></textarea>

            <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 rounded-xl shadow-lg transition duration-300">
              Add Note
            </button>
          </form>
        </div>

        {/* Notes Display Section */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">
          <h1 className="text-4xl font-bold text-cyan-300 mb-6">
            📒 Your Notes
          </h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 max-h-[75vh] overflow-auto pr-2">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-5 shadow-xl h-52"></div>
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-5 shadow-xl h-52"></div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-5 shadow-xl h-52"></div>
            <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl p-5 shadow-xl h-52"></div>
            <div className="bg-gradient-to-br from-red-400 to-pink-600 rounded-2xl p-5 shadow-xl h-52"></div>
            <div className="bg-gradient-to-br from-indigo-400 to-violet-600 rounded-2xl p-5 shadow-xl h-52"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;