import React from 'react';
import InputField from './InputField';

const Card = () => {
  return (
    <div className='container mx-auto '>
      <div className='flex flex-col'>
        <InputField
          label='First Name'
          type='text'
          placeholder='Enter first name'
          name='firstName'
        />
        <InputField
          label='Last Name'
          type='text'
          placeholder='Enter last name'
          name='lastName'
        />
        <InputField
          label='Email'
          type='email'
          placeholder='Enter email'
          name='email'
        />
        <InputField
          label='Phone'
          type='number'
          placeholder='Enter phone number'
          name='phone'
        />
        <InputField
          label='Address'
          type='text'
          placeholder='Enter address'
          name='address'
        />
        <div className='flex'>
          <button className='bg-blue-900 w-full  text-center text-white font-bold'>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
