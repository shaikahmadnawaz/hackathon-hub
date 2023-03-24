import React from "react";

function SubmissionDetails({ submission, onEdit, onDelete, onFavorite }) {
  return (
    <div>
      <h2>{submission.title}</h2>
      <p>{submission.summary}</p>
      <img src={submission.coverImage} alt={submission.title} />
      <p>{submission.description}</p>
      <p>Hackathon Name: {submission.hackathonName}</p>
      <p>Hackathon Start Date: {submission.hackathonStartDate}</p>
      <p>Hackathon End Date: {submission.hackathonEndDate}</p>
      <p>
        Github Repository Link:{" "}
        <a href={submission.githubRepoLink}>{submission.githubRepoLink}</a>
      </p>
      {submission.otherLinks && (
        <p>
          Other Links:{" "}
          <a href={submission.otherLinks}>{submission.otherLinks}</a>
        </p>
      )}
      <div>
        <button onClick={() => onEdit(submission)}>Edit</button>
        <button onClick={() => onDelete(submission)}>Delete</button>
        <button onClick={() => onFavorite(submission)}>Favorite</button>
      </div>
    </div>
  );
}

export default SubmissionDetails;
