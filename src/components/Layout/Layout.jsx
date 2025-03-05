import { Suspense } from "react";

const Layout = ({ children }) => {
  return (
    <>
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
};

export default Layout;
