import { useState } from 'react';
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');
  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(term);
  };
  return (
    <div className='flex gap-3 p-2 bg-slate-100'>
      <form onSubmit={handleFormSubmit} className='flex gap-2'>
        <input value={term} className='input' onChange={handleChange} />
        <button className='btn' onChange={handleChange}>
          查詢
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
