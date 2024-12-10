import { useState, useEffect } from 'react';

const useIsTopPage = () => {
  const [isTopPage, setIsTopPage] = useState(true);

  const handleScroll = () => {
    setIsTopPage(window.scrollY === 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isTopPage;
};

export default useIsTopPage;