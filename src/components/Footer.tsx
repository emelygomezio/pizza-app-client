import { Link } from "react-router-dom";
import LogoWhite from "../assets/logowhite.png"

const Footer = () => {
    return (
      <div className="bg-gradient-to-br from-red-500 to-red-700 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* <span className="text-3xl text-white font-bold tracking-tight">
            Toppings.com
        </span> */}
          <Link
            to="/"
            className="text-3xl font-bold tracking-tight text-red-500"
          >
            <img src={LogoWhite} className="h-12" alt="Logo" />
          </Link>
          <span className="text-white font-bold tracking-tight flex gap-4">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </span>
        </div>
      </div>
    );
};
 
export default Footer;