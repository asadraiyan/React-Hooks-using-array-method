import React, { useState } from "react";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Assuming you have an API endpoint for file upload
      const formData = new FormData();
      formData.append("file", selectedFile);

      fetch("your-upload-endpoint", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("File uploaded successfully:", data);
          // Handle success or update state accordingly
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          // Handle error or update state accordingly
        });
    } else {
      // Handle case where no file is selected
      console.warn("No file selected for upload.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUploader;
