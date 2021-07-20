import React, {useState} from 'react';

export default function Email(){
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  }
  return (
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" class="form-control" id="email" onChange={handleOnChange} value={title}/>
    </div>
  );
}