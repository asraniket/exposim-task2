import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    age: '',
    comments: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // add code to handle form submission here
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
      </label>
      <br />
      <label>
        Gender:
        <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} /> Male
        <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} /> Female
      </label>
      <br />
      <label>
        Age:
        <select name="age" value={formData.age} onChange={handleChange}>
          <option value="">Select an option</option>
          <option value="18-25">18-25</option>
          <option value="26-35">26-35</option>
          <option value="36-45">36-45</option>
          <option value="46+">46+</option>
        </select>
      </label>
      <br />
      <label>
        Comments:
        <textarea name="comments" value={formData.comments} onChange={handleChange} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
