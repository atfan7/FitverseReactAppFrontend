import React, { useState } from 'react';
import axios from 'axios';

const SendEnquiry = () => {
  const [enquiry, setEnquiry] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const changeData = (e) => {
    setEnquiry({ ...enquiry, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); 
  };

  const validateForm = () => {
    const { name, email, mobile, message } = enquiry;
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!mobile.trim()) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = 'Mobile number must be 10 digits.';
    }
    if (!email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);

    
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      await axios.post('https://fitversereactappbackend.onrender.com/enquiries', enquiry);
      await axios.post('https://fitversereactappbackend.onrender.com/contact', enquiry);

      alert('Email Sent.Thank You. We will get back to you shortly.');
      setEnquiry({ name: '', mobile: '', email: '', message: '' });
    } catch (err) {
      console.error(err);
      alert('There was an error submitting your enquiry.');
    }
  };

  const { name, email, mobile, message } = enquiry;

  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        name='name'
        value={name}
        onChange={changeData}
        placeholder='Enter Name'
        className='form-control mb-1'
      />
      {errors.name && <p className='text-danger mb-2'>{errors.name}</p>}

      <input
        type='text'
        name='mobile'
        value={mobile}
        onChange={changeData}
        placeholder='Mobile Number'
        className='form-control mb-1'
      />
      {errors.mobile && <p className='text-danger mb-2'>{errors.mobile}</p>}

      <input
        type='email'
        name='email'
        value={email}
        onChange={changeData}
        placeholder='Email Address'
        className='form-control mb-1'
      />
      {errors.email && <p className='text-danger mb-2'>{errors.email}</p>}

      <textarea
        name='message'
        value={message}
        onChange={changeData}
        className='form-control mb-1'
        placeholder='Message'
      />
      {errors.message && <p className='text-danger mb-2'>{errors.message}</p>}

      <button type='submit' className='btn btn-success'>Send Message</button>
    </form>
  );
};

export default SendEnquiry;
