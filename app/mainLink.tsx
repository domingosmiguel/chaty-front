import Link from 'next/link';
import styled, { css } from 'styled-components';

export default function MainLink({ children, href, disabled }) {
  return (
    <StyledLink href={href} disabled={disabled}>
      {children}
    </StyledLink>
  );
}
const DisabledLink = css`
  pointer-events: none;
  opacity: 0.8;
`;
const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.light.secondary};
  margin: 1rem auto 0;
  display: flex;
  width: fit-content;
  font-family: ${({ theme }) => theme.fonts.logo};
  font-weight: 400;
  text-align: center;
  ${({ disabled }) => disabled && DisabledLink};
  :hover {
    text-decoration: underline;
    transform: scale(1.02);
  }
`;
