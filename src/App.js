import React from "react";
import Navbar from "./components/Navbar";
import ListingPage from "./pages/ListingPage";
import SubmissionForm from "./components/SubmissionForm";

function App() {
  return (
    <div className="App">
      <ListingPage />
      <SubmissionForm />
    </div>
  );
}

export default App;
