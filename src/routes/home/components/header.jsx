import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bg-brand brand-divider-bottom shadow-md  text-white">
      <div className="container mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold">We Are to survive humantiy</h2>
            <h3 className="t">We are PrideInn</h3>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <Link to="/Login">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4">
                Log In/Register
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
