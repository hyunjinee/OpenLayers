import React from 'react';
import styled from 'styled-components';
import { useStore } from '@/shared/store';

export default function Search() {
  const [search, setSearch] = React.useState('');

  const k = useStore((state) => state.keyword);

  // const setKeyword = useStore((state) => state.setKeyword);

  console.log(k, 'test');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <StyledInput
        type="text"
        placeholder="예제를 검색해보세요"
        value={search}
        onChange={handleChange}
      />
    </>
  );
}

const StyledInput = styled.input`
  outline: none;
`;
