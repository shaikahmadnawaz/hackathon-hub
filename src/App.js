import React, { useState } from "react";
import SubmissionForm from "./components/SubmissionForm";
import SubmissionsList from "./components/SubmissionsList";
import SubmissionDetails from "./components/SubmissionDetails";
import FavoriteSubmissions from "./components/FavoriteSubmissions";
import Navbar from "./components/Navbar";

function App() {
  const [submissions, setSubmissions] = useState([]);
  const [currentSubmission, setCurrentSubmission] = useState(null);
  const [favourites, setFavourites] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  const addSubmission = (submission) => {
    setSubmissions([...submissions, submission]);
  };

  const editSubmission = (submission) => {
    const updatedSubmissions = submissions.map((sub) =>
      sub.id === submission.id ? submission : sub
    );
    setSubmissions(updatedSubmissions);
    setCurrentSubmission(null);
  };

  const deleteSubmission = (submission) => {
    const filteredSubmissions = submissions.filter(
      (sub) => sub.id !== submission.id
    );
    setSubmissions(filteredSubmissions);
    setCurrentSubmission(null);
  };

  const toggleFavourite = (submission) => {
    const foundSubmission = favourites.find((sub) => sub.id === submission.id);
    if (foundSubmission) {
      const filteredFavourites = favourites.filter(
        (sub) => sub.id !== submission.id
      );
      setFavourites(filteredFavourites);
    } else {
      setFavourites([...favourites, submission]);
    }
  };

  const setActive = (tab) => {
    setActiveTab(tab);
  };

  const showSubmission = (submission) => {
    setCurrentSubmission(submission);
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case "all":
        return (
          <SubmissionsList
            submissions={submissions}
            showSubmission={showSubmission}
            toggleFavourite={toggleFavourite}
          />
        );
      case "favourites":
        return (
          <FavoriteSubmissions
            favourites={favourites}
            showSubmission={showSubmission}
            toggleFavourite={toggleFavourite}
          />
        );
      default:
        return (
          <SubmissionsList
            submissions={submissions}
            showSubmission={showSubmission}
            toggleFavourite={toggleFavourite}
          />
        );
    }
  };

  return (
    <div className="App">
      <Navbar activeTab={activeTab} setActive={setActive} />
      {currentSubmission ? (
        <SubmissionDetails
          submission={currentSubmission}
          editSubmission={editSubmission}
          deleteSubmission={deleteSubmission}
          toggleFavourite={toggleFavourite}
        />
      ) : (
        <>
          {renderActiveTab()}
          <SubmissionForm addSubmission={addSubmission} />
        </>
      )}
    </div>
  );
}

export default App;
