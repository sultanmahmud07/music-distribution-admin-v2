import React, { useState } from "react";
import "./BulkUpload.css"; // import your custom styles
import axios from "axios";
import BASEURL from "../../../../Constants";

const BulkUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    setDragging(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleUpload = () => {
    console.log(selectedFile);
    if (!selectedFile) {
      return; // No file selected
    }

    const formData = new FormData();
    formData.append("bulk", selectedFile);
    // console.log(formData);
    // console.log(Array.from(formData));
    axios
      .post(`${BASEURL}/bulk/upload-bulk`, formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log("Upload successful:", response);
        // Add your success handling here
      })
      .catch((error) => {
        console.error("Upload failed:", error);
        // Add your error handling here
      });
  };

  return (
    <div
      className={`file-upload-container ${dragging ? "dragging" : ""}`}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type="file"
        id="fileInput"
        accept=".xlsx"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <label htmlFor="fileInput">
        {selectedFile ? (
          <div className="file-details">
            <div className="file-icon">
              {selectedFile.type.includes("image") ? (
                <img src={URL.createObjectURL(selectedFile)} alt="File" />
              ) : (
                <i className="far fa-file-alt"></i>
              )}
            </div>
            <div className="file-name">{selectedFile.name}</div>
          </div>
        ) : (
          <div className="file-upload-text">
            <i className="fas fa-cloud-upload-alt"></i>
            <span>Drag & Drop or Click to Upload</span>
          </div>
        )}
      </label>
      {selectedFile && (
        <div className="file-actions">
          <button className="remove-file-button" onClick={handleRemoveFile}>
            <i className="fas fa-times">x</i>
          </button>
          <button className="upload-button" onClick={handleUpload}>
            Upload
          </button>
        </div>
      )}
    </div>
  );
};

export default BulkUpload;
