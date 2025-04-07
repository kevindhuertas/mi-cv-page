import { useState, useEffect } from 'react';
import Image from 'next/image';


const images = [
  '/meEmogi.png',
  // '/image÷2.png',
  // '/image3.png'
];

const texts = ["Kevin"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Image src={images[index]} alt="Hero Image" width={120} height={120} className="object-contain " />
    // <div className="flex items-center h-[150px] justify-center">
    //   <span className="inline-block transition-all duration-300">{texts[index]}</span>
    //   <span className="inline-flex items-center overflow-hidden">
    //     <div className="overflow-visible max-md:h-[120px] h-[150px] flex items-center relative"
    //       style={{ maxWidth: '265px', transition: 'max-width 300ms ease-in-out' }}>
    //       {/* <motion.span
    //         key={texts[index]}
    //         initial={{ opacity: 0, x: -20 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         exit={{ opacity: 0, x: 20 }}
    //         transition={{ duration: 0.5 }}
    //         className="Hero_gradient-text transition-all duration-300 ease-in-out"
    //         style={{ width: '265px' }}
    //       >
    //         anything
    //       </motion.span> */}
    //     </div>
    //   </span>
    //   {/* <motion.div
    //     key={images[index]}
    //     initial={{ opacity: 0, x: 50 }}
    //     animate={{ opacity: 1, x: 0 }}
    //     exit={{ opacity: 0, x: -50 }}
    //     transition={{ duration: 0.5 }}
    //     className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] ml-4"
    //   > */}
    //     <Image src={images[index]} alt="Hero Image" width={100} height={100} className="object-contain p-1 m-2 md:p-2 md:m-4" />
    //   {/* </motion.div> */}
    //   <span className="inline-block duration-300">Huertas</span>
    // </div>
  );
};

export default Hero;
