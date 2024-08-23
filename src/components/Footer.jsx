import { resourcesLinks, platformLinks, communityLinks } from "../constants";

import Facebook from '../assets/facebook.png';
import Instagram from '../assets/instagram.png';
import Dicord from '../assets/discord.png';
import memelogonav from '../assets/memelogonav.png'

const Footer = () => {
  return (
    <footer className="py-10 mt-20 border-t border-neutral-700 mx-auto max-w-screen-xl">
      <div className="grid grid-cols-2 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 sm:px-8 lg:px-14">
        <div>
          <h3 className="mb-4 text-sm font-semibold sm:text-md">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a className="text-xs text-neutral-300 hover:text-white sm:text-sm" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold sm:text-md">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a className="text-xs text-neutral-300 hover:text-white sm:text-sm" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold sm:text-md">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a className="text-xs text-neutral-300 hover:text-white sm:text-sm" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
        <div className="flex items-center flex-shrink-0">
    <img className="w-6 h-6 mr-2 sm:w-8 sm:h-8 md:w-10 md:h-10" src={memelogonav} alt="MEME_Generate" />
    <span className="text-xs tracking-tight sm:text-xs md:text-lg">MEME_Generate</span>
</div>


          <div className="flex items-center flex-shrink-0 mt-5">
            <img className="w-5 h-5 mr-2 sm:h-7 sm:w-7" src={Facebook} alt="MEME_Generate" />
            <span className='ml-2 text-sm tracking-tight sm:ml-3 sm:text-lg'>Facebook</span>
          </div>
          <div className="flex items-center flex-shrink-0 mt-5">
            <img className="w-5 h-5 mr-2 sm:h-7 sm:w-7" src={Instagram} alt="MEME_Generate" />
            <span className='ml-2 text-sm tracking-tight sm:ml-3 sm:text-lg'>Instagram</span>
          </div>
          <div className="flex items-center flex-shrink-0 mt-5">
            <img className="w-5 h-5 mr-2 sm:h-7 sm:w-7" src={Dicord} alt="MEME_Generate" />
            <span className='ml-2 text-sm tracking-tight sm:ml-3 sm:text-lg'>Discord</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
