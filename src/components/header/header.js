import Logo from './logo';
import Generations from './generations/generations';

const Header = ({ title }) => {
  return (
    <div className="bg-blue-400 text-white p-4 rounded-lg shadow mb-4">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex justify-center gap-4">
        <Logo text="Logo in Header" />
        <Generations text="Generations" />
      </div>
    </div>
  );
};

export default Header;
