type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return <main className="px-8 py-5">{children}</main>;
}
