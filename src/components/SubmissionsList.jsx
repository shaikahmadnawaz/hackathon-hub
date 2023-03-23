import React, { useState, useEffect } from "react";

function SubmissionList() {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    // Fetch submissions data from local storage or API
    // and set it to the submissions state
  }, []);

  return (
    <div>
      <h1>All Submissions</h1>
      {submissions.map((submission) => (
        <div key={submission.id}>
          <h2>{submission.title}</h2>
          <p>{submission.summary}</p>
          <img src={submission.coverImage} alt={submission.title} />
          <p>Hackthon name: {submission.hackthonName}</p>
          <p>Start date: {submission.hackthonStartDate}</p>
          <p>End date: {submission.hackthonEndDate}</p>
          <p>Github repository link: {submission.githubLink}</p>
          {submission.otherLinks && <p>Other links: {submission.otherLinks}</p>}
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default SubmissionList;
