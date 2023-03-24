import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function SubmissionForm({ addSubmission }) {
  const [submission, setSubmission] = useState({
    id: "",
    title: "",
    summary: "",
    description: "",
    coverImage: "",
    hackthonName: "",
    hackthonStartDate: "",
    hackthonEndDate: "",
    githubRepoLink: "",
    otherLinks: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSubmission({ ...submission, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !submission.title ||
      !submission.summary ||
      !submission.description ||
      !submission.coverImage ||
      !submission.hackthonName ||
      !submission.hackthonStartDate ||
      !submission.hackthonEndDate ||
      !submission.githubRepoLink
    ) {
      alert("Please fill in all required fields!");
      return;
    }
    const newSubmission = { ...submission, id: uuidv4() };
    addSubmission(newSubmission);
    setSubmission({
      id: "",
      title: "",
      summary: "",
      description: "",
      coverImage: "",
      hackthonName: "",
      hackthonStartDate: "",
      hackthonEndDate: "",
      githubRepoLink: "",
      otherLinks: "",
    });
  };

  return (
    <div className="submission-form">
      <h2>Create a new submission</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title*</label>
        <input
          type="text"
          id="title"
          name="title"
          value={submission.title}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="summary">Summary*</label>
        <input
          type="text"
          id="summary"
          name="summary"
          value={submission.summary}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="description">Description*</label>
        <textarea
          id="description"
          name="description"
          value={submission.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <label htmlFor="coverImage">Cover Image*</label>
        <input
          type="text"
          id="coverImage"
          name="coverImage"
          value={submission.coverImage}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="hackthonName">Hackthon Name*</label>
        <input
          type="text"
          id="hackthonName"
          name="hackthonName"
          value={submission.hackthonName}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="hackthonStartDate">Hackthon Start Date*</label>
        <input
          type="date"
          id="hackthonStartDate"
          name="hackthonStartDate"
          value={submission.hackthonStartDate}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="hackthonEndDate">Hackthon End Date*</label>
        <input
          type="date"
          id="hackthonEndDate"
          name="hackthonEndDate"
          value={submission.hackthonEndDate}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="githubRepoLink">Github Repository Link*</label>
        <input
          type="text"
          id="githubRepoLink"
          name="githubRepoLink"
          value={submission.githubRepoLink}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="otherLinks">Other Links</label>
        <input
          type="text"
          id="otherLinks"
          name="otherLinks"
          value={submission.otherLinks}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SubmissionForm;
