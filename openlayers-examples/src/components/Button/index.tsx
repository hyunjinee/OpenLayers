interface Props {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export default function Button({ children, onClick }: Props) {
  return <button onClick={onClick}>{children}</button>;
}
