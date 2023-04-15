import Link from 'next/link';
import { ReactNode } from 'react';
import styled, { css } from 'styled-components';

export default function MainLink({
  children,
  href,
  disabled,
}: {
  children: ReactNode;
  href: string;
  disabled: boolean;
}) {
  return (
    <StyledLink href={href} className={disabled ? 'disabled' : ''}>
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

  :hover {
    text-decoration: underline;
    transform: scale(1.02);
  }
  .disabled {
    ${DisabledLink}
  }
`;
