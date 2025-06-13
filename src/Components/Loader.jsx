import LoaderSvg from '../assets/Loader.svg';

const Loader = () => (
  <div className="flex justify-center items-center h-screen bg-white">
    <img
      src={LoaderSvg}
      alt="Loading..."
      className="w-24 h-24 animate-spin"
    />
  </div>
);

export default Loader;