import { Suspense } from "react";
import Loader from "../Loader/Loader";

const Layout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
};

export default Layout;
