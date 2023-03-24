import React from "react";

function SubmissionsList({ submissions, onSubmissionClick }) {
  return (
    <div>
      <h2>Submissions</h2>
      <ul>
        {submissions.map((submission) => (
          <li key={submission.id} onClick={() => onSubmissionClick(submission)}>
            <div>
              <h3>{submission.title}</h3>
              <p>{submission.summary}</p>
              <img src={submission.coverImage} alt={submission.title} />
            </div>
            <div>
              <p>Hackathon Name: {submission.hackathonName}</p>
              <p>Hackathon Start Date: {submission.hackathonStartDate}</p>
              <p>Hackathon End Date: {submission.hackathonEndDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubmissionsList;
