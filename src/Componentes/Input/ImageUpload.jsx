import React from "react";

const ImageUpload = ({ onImageSelect }) => {
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onImageSelect(e.target.files[0]);
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
        className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
      />
    </div>
  );
};

export default ImageUpload;
