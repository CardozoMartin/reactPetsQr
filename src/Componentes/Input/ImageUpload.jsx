import React, { useState } from "react";

const ImageUpload = ({ onImageSelect }) => {
  const [hasFile, setHasFile] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelect(e.target.files[0]);
      setHasFile(true);
    } else {
      setHasFile(false);
    }
  };

  return (
    <div>
      <label htmlFor="imageUpload" className="sr-only">
        Subir imagen
      </label>
      <input
        type="file"
        id="imageUpload"
        accept="image/*"
        onChange={handleImageChange}
        className={`w-full rounded-lg border p-4 pe-12 text-sm shadow-sm ${
          hasFile
            ? "border-green-700 text-green-700 bg-green-100"
            : "border-gray-200 text-black bg-white"
        }`}
      />
    </div>
  );
};

export default ImageUpload;
