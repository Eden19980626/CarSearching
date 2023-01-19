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
      <form onSubmit={handleFormSubmit}>
        <input value={term} className='input' onChange={handleChange} />
      </form>
    </div>
  );
}
export default SearchBar;
