import { MagnifyingGlassIcon } from '@heroicons/react/24/outline/index.js';
import { useSearchParams } from 'react-router-dom';

function InputSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') || '';

  const handleInputChange = (e) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set('search', e.target.value);
    setSearchParams(updatedParams);
  };

  return (
    <label className="input input-bordered flex items-center gap-2">
      <input type="text" className="grow" placeholder="Search" value={search} onChange={handleInputChange} />
      <MagnifyingGlassIcon className="inline-block size-5" />
    </label>
  );
}

export default InputSearch;
