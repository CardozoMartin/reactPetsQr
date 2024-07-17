import React from 'react';

const TextAreaInput = (props) => {
  const {
    placeholder,
    name,
    options = {},
    register,
    className = "",
    id,
  } = props;

  return (
    <div className={`relative ${className}`}>
      <textarea
        id={id}
        placeholder={placeholder}
        {...register(id, options)}
        className="peer h-24 w-full rounded-md border border-black px-3 pt-3 bg-transparent focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
      ></textarea>
      <label
        htmlFor={id}
        className="absolute left-3 top-3 text-xs text-gray-700 transition-all peer-placeholder-shown:top-8 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs"
      >
        {name}
      </label>
    </div>
  );
};

export default TextAreaInput;
