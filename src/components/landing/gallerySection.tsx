import Image, { StaticImageData } from 'next/image';
import img1 from '../../images/galeri-item (1).jpg';
import img2 from '../../images/galeri-item (2).png';
import img3 from '../../images/galeri-item (3).jpg';
import img4 from '../../images/galeri-item (4).jpeg';
import img5 from '../../images/galeri-item (5).jpeg';
import img6 from '../../images/galeri-item (6).jpeg';
import img7 from '../../images/galeri-item (7).jpeg';
import img8 from '../../images/galeri-item (8).jpeg';
import img9 from '../../images/galeri-item (9).jpeg';
import noImage from '../../images/noimage.jpg';
import { useState } from 'react';
function GallerySection() {
  const images: StaticImageData[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9,]

  const [image, setImage] = useState(noImage);
  const [isPreviewing, setisPreviewing] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const preview = (isPreviewing: boolean, image: StaticImageData) => {
    setisPreviewing(isPreviewing);
    setImage(image)
    setTimeout(() => {
      setOpacity(isPreviewing ? 1 : 0)
    }, 100);
  }

  return (
    <section id="gallery" className='py-5 mb-5'>
      <div className="container">
        <h1 className="text-center text-light fw-bold mb-5">Galeri Kegiatan</h1>
        <div className="row">
          {images.map((img, i) => (
            <div key={i} className="col-4 px-1">
              <Image onClick={() => { preview(true, img) }} style={{ cursor: 'pointer' }} src={img} alt={'Foto ' + (i + 1)} className="img-fluid mb-2 rounded" />
            </div>
          ))}
        </div>
      </div>
      <div className="position-fixed top-0 start-0" style={{ transition: 'all .5s', display: isPreviewing ? 'block' : 'none', zIndex: 1060, width: '100vw', opacity: opacity }}>
        <div className="container">
          <div className="row align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className="col-12 col-md-6 col-lg-4 text-center">
              <Image style={{ position: 'relative', zIndex: 1062 }} className="img-fluid mb-3" src={image} alt='Image Preview' />
              <div onClick={() => { preview(false, noImage) }} className="overlay" style={{ backgroundColor: 'rgba(0,0,0,.8)', width: '100vw', height: '100vh', position: 'absolute', zIndex: 1061, top: 0, left: 0 }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GallerySection;