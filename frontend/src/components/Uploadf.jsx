import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);
      formData.append('title',);
      

      
      console.log("Form Data is------------------------>",formData);
      console.log("File is------------------------------> ",file)
  
      console.log("---------------------------------------------" , "before frontend request on port 400")
      
      const url='http://localhost:4000/api/v1/upload/imageUpload'
      const response = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setUploading(false);
      console.log("---------------------------------------------" , "after frontend request")
      
      console.log("Response by frontend request-------------------------->",response);
    

      if (response.status==200) {
        setImageUrl(response.data.imageUrl);
        alert('Image uploaded successfully!');
      } else {
        alert('Failed to upload image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Image Upload</h2>
      
      <button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {imageUrl && (
        <div>
          <h3>Uploaded Image:</h3>
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default FileUpload;

