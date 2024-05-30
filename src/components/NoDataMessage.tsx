interface NoDataMessage {
  message: string;
}

export function NoDataMessage({ message }: NoDataMessage) {
  return <p>{message}</p>;
}
