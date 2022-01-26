import React from 'react';

const InputField = ({ type, label, name, placeholder }) => {
  return (
    <div className='flex justify-around items-center'>
      <label className='block'>
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
          {label}
        </span>
        <input
          type={type}
          name={name}
          className='mt-1 px-3 py-2 bg-grey-300 border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-slate-300 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1'
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default InputField;
