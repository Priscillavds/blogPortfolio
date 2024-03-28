import { useEffect, useState } from 'react';

const Footer = () => {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;
      setIsScrollable(contentHeight > viewportHeight);
    };

    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <footer className={`bg-gray-800 text-white text-center py-4 ${isScrollable ? '' : 'fixed bottom-0 w-full'}`}>
      © 2024 Priscilla Van der Schoot
    </footer>
  );
};

export default Footer;
