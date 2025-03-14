import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#9be1a0"
        secondaryColor="#007aff"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </>
  );
};

export default Loader;
