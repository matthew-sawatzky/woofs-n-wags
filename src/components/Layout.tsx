// src/components/Layout.tsx
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className="p-6">{children}</main>
    </>
  );
}

export default Layout;
