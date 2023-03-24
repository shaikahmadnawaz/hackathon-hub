import React from "react";

function FavouriteSubmissions({ favouriteSubmissions }) {
  return (
    <div>
      <h2>Favourite Submissions</h2>
      <ul>
        {favouriteSubmissions.map((submission) => (
          <li key={submission.id}>
            <h3>{submission.title}</h3>
            <p>{submission.summary}</p>
            <img src={submission.coverImage} alt={submission.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavouriteSubmissions;
