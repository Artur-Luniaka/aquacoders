import { Suspense, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {(loading && <Loader />) || children}
      </Suspense>
    </>
  );
};

export default Layout;
