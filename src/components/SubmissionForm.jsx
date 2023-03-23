import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const SubmissionForm = () => {
  const history = useHistory();

  const titleInput = useRef(null);
  const summaryInput = useRef(null);
  const descriptionInput = useRef(null);
  const coverImageInput = useRef(null);
  const hackathonNameInput = useRef(null);
  const hackathonStartDateInput = useRef(null);
  const hackathonEndDateInput = useRef(null);
  const githubRepoLinkInput = useRef(null);
  const otherLinksInput = useRef(null);

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    if (!titleInput.current.value.trim()) {
      setErrorMessage("Please enter a title");
      event.preventDefault();
      return;
    }
    setErrorMessage("");
    submitHandler(event);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const submission = {
      title: titleInput.current.value,
      summary: summaryInput.current.value,
      description: descriptionInput.current.value,
      coverImage: coverImageInput.current.value,
      hackathonName: hackathonNameInput.current.value,
      hackathonStartDate: hackathonStartDateInput.current.value,
      hackathonEndDate: hackathonEndDateInput.current.value,
      githubRepoLink: githubRepoLinkInput.current.value,
      otherLinks: otherLinksInput.current.value,
    };
    const submissions = JSON.parse(localStorage.getItem("submissions")) || [];
    submissions.push(submission);
    localStorage.setItem("submissions", JSON.stringify(submissions));
    // Redirect to the Submissions page
    history.push("/submissions");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleInput} required />
      </div>
      <div>
        <label htmlFor="summary">Summary</label>
        <textarea id="summary" ref={summaryInput} required />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" ref={descriptionInput} required />
      </div>
      <div>
        <label htmlFor="cover-image">Cover Image</label>
        <input type="text" id="cover-image" ref={coverImageInput} required />
      </div>
      <div>
        <label htmlFor="hackathon-name">Hackathon Name</label>
        <input
          type="text"
          id="hackathon-name"
          ref={hackathonNameInput}
          required
        />
      </div>
      <div>
        <label htmlFor="hackathon-start-date">Hackathon Start Date</label>
        <input
          type="date"
          id="hackathon-start-date"
          ref={hackathonStartDateInput}
          required
        />
      </div>
      <div>
        <label htmlFor="hackathon-end-date">Hackathon End Date</label>
        <input
          type="date"
          id="hackathon-end-date"
          ref={hackathonEndDateInput}
          required
        />
      </div>
      <div>
        <label htmlFor="github-repo-link">GitHub Repository Link</label>
        <input
          type="text"
          id="github-repo-link"
          ref={githubRepoLinkInput}
          required
        />
      </div>
      <div>
        <label htmlFor="other-links">Other Links (optional)</label>
        <input type="text" id="other-links" ref={otherLinksInput} />
      </div>
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmissionForm;
