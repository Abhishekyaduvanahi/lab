import React from "react";

const App = () => {
  const openGoogleForm = () => {
    // Replace with your actual Google Form URL
    window.open("https://forms.gle/Vv42vUz8Hng8MN4k9", "_blank");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-blue-800"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1592139015761-1072f65c6ffb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDkzfHxjb21lZHklMjBzY2VuZSUyMGxvY2t8ZW58MHx8fHwxNjY0NzMwNzkw&ixlib=rb-1.2.1&q=80&w=1080')",
      }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <div className="text-center text-white p-8 rounded-lg bg-black bg-opacity-70">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2">Laugh Lab</h1>
          <p className="text-xl sm:text-2xl mb-6">Open Mic</p>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-xs mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Join us for a night of laughter!
            </h2>
            <button
              onClick={openGoogleForm}
              className="w-full py-2 px-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
