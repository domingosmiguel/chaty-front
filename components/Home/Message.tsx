import styled from 'styled-components';

export default function Message({
  text,
  owner,
}: {
  text: string;
  owner: boolean;
}) {
  return <MessageContainer owner={owner}>{text}</MessageContainer>;
}

const MessageContainer = styled.div<{ owner: boolean }>`
  padding: ${({ theme }) => theme.space.generalPadding};
  margin-top: ${({ theme }) => `calc(${theme.space.generalPadding} / 2)`};
  border-radius: ${({ theme }) => theme.space.generalPadding};
  width: fit-content;
  max-width: ${({ theme }) => theme.sizes.max};
  line-height: 1.2rem;

  &:first-child {
    margin-top: 0;
  }
  ${({ owner, theme }) =>
    owner
      ? `background-color: ${theme.colors.orange};
    margin-left: auto;`
      : `background-color: ${theme.colors.light.secondary}};
    color: ${theme.colors.light.main};
    margin-right: auto;`}
`;
