interface NoDataMessage {
  children: React.ReactNode;
}

export function NoDataMessage({ children }: NoDataMessage) {
  return <p>{children}</p>;
}
