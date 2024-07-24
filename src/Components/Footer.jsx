import { LuFacebook,LuInstagram,LuTwitch,LuTwitter,LuYoutube } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="bg-black flex lg:px-28 p-4      text-white py-8">
      <div className="container   flex-grow   lg:mx-72 p-4   ">
        <div className="flex justify-items-start  space-x-7 h-9 mb-8">
          <a href="#" className="text-white hover:text-white">
          <LuFacebook size='32' />
          </a>
          <a href="#" className="text-white hover:text-white">
          <LuInstagram size='32' />
          </a>
          <a href="#" className="text-white hover:text-white">
          <LuTwitter  size="32"/>
          </a>
          <a href="#" className="text-white hover:text-white">
          <LuTwitch size="32" />
          </a>
          <a href="#" className="text-white hover:text-white">
          <LuYoutube size="32"  />
          </a>
        </div>
        <div className="flex flex-wrap  text-sm lg:gap-24 gap-10  text-center mb-8">
          <a href="#" className="text-white hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-white">
            Contact Us
          </a>
          <a href="#" className="text-white  hover:text-white">
            Cookie Preferences
          </a>
          <a href="#" className="text-white hover:text-white">
            Corporate Information
          </a>

          
        </div>
        <div className="flex flex-wrap text-sm lg:gap-24 gap-10  text-center mb-8">
          <a href="#" className="text-white hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:text-white">
            Contact Us
          </a>
          <a href="#" className="text-white hover:text-white">
            Cookie Preferences
          </a>
          <a href="#" className="text-white hover:text-white">
            Corporate Information
          </a>

          
        </div>
        <div className="text-left lg:mt-8 text-white">
        <span className='text-slate-600'>©</span>   Alkye Test
        </div>
      </div>
    </footer>
  );
};

export default Footer;
