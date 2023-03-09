import React from 'react';
import styled from 'styled-components';

export default function Search() {
  const [search, setSearch] = React.useState('');

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
