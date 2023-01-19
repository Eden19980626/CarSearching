function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit('cars');
  };
  return (
    <div className='flex gap-3 p-2 bg-slate-100'>
      <input className='input' />
      <button className='btn' onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
export default SearchBar;
