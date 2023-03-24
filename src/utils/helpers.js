// helpers.js

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString();
}

export function sortSubmissions(submissions, direction) {
  const sortedSubmissions = submissions.sort((a, b) => {
    const dateA = new Date(a.hackathonStartDate);
    const dateB = new Date(b.hackathonStartDate);
    if (direction === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
  return sortedSubmissions;
}

export function getFavourites() {
  const favourites = localStorage.getItem("favourites");
  if (favourites) {
    return JSON.parse(favourites);
  } else {
    return [];
  }
}

export function toggleFavourite(submissionId) {
  const favourites = getFavourites();
  const index = favourites.indexOf(submissionId);
  if (index === -1) {
    favourites.push(submissionId);
  } else {
    favourites.splice(index, 1);
  }
  localStorage.setItem("favourites", JSON.stringify(favourites));
}
