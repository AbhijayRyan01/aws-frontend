import React from 'react';
import styled from 'styled-components';

const Pattern = ({ children }) => {
  return (
    <StyledWrapper>
      <div className="container">
        {children}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    width: 100%;
    height: 100%;
    --s: 200px; /* control the size */
    --c1: #414141;
    --c2: #bebebe;
    --c3: #ffffff;

    background: repeating-conic-gradient(
          from 30deg,
          #0000 0 120deg,
          var(--c3) 0 180deg
        )
        calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
      repeating-conic-gradient(
        from 30deg,
        var(--c1) 0 60deg,
        var(--c2) 0 120deg,
        var(--c3) 0 180deg
      );
    background-size: var(--s) calc(var(--s) * 0.577);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
  }
`;

export default Pattern;
