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

const MessageContainer = styled.div``;
