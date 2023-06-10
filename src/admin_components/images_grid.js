import Image from 'next/image'
import mainImage from '../public/images/Asset_14.png.webp'
import img1 from '../public/images/Asset_15.png.webp'
import img2 from '../public/images/Asset_16.png.webp'
import img3 from '../public/images/Asset_20.png.webp'

const images = [img1, img2, img3, mainImage];

const ImagesGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-[20px] mt-5">
      {images.map((image) => (
        <div key={image} >
          <Image alt='img' className='w-[250px] h-[150px] rounded-lg' src={image}/>
        </div>
      ))}
    </div>
  );
};

export default ImagesGrid;
