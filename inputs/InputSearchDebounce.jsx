import { MagnifyingGlassIcon } from '@heroicons/react/24/outline/index.js';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { useEffect, useState } from 'react';

function InputSearchDebounce() {
  const [search, setSearch] = useState('');
  const [searchDebounce] = useDebounce(search, 700);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const updatedParams = new URLSearchParams(searchParams);
    if (searchDebounce) {
      updatedParams.set('search', searchDebounce);
    } else {
      updatedParams.delete('search');
    }
    setSearchParams(updatedParams);
  }, [searchDebounce]);

  return (
    <label className="input input-bordered flex items-center gap-2">
      <input
        type="text"
        className="grow"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <MagnifyingGlassIcon className="inline-block size-5" />
    </label>
  );
}

export default InputSearchDebounce;
