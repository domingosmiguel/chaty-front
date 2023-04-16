import styled from 'styled-components';

export default function Message({
  text,
  owner,
}: {
  text: string;
  owner: boolean;
}) {
  return <MessageContainer className={`${owner}`}>{text}</MessageContainer>;
}

const MessageContainer = styled.div`
  padding: ${({ theme }) => `${theme.space.generalPadding}`};
  margin-top: ${({ theme }) => `calc(${theme.space.generalPadding} / 2)`};
  border-radius: ${({ theme }) => `${theme.space.generalPadding}`};
  width: fit-content;
  max-width: ${({ theme }) => `${theme.sizes.max}`};

  &:first-child {
    margin-top: 0;
  }
  &.true {
    background-color: ${({ theme }) => `${theme.colors.orange}`};
    margin-left: auto;
  }

  &.false {
    background-color: ${({ theme }) => `${theme.colors.light.secondary}`};
    color: ${({ theme }) => `${theme.colors.light.main}`};
    margin-right: auto;
  }
`;
