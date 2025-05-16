import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Carousel = () => (
  <Swiper spaceBetween={10} slidesPerView={1}>
    <SwiperSlide>
      <img 
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwh.com.pe%2Fwp-content%2Fuploads%2F2021%2F08%2Foftalmologia-2-1024x683.png&f=1&nofb=1&ipt=9703ac42f8d2da5c6a8e1fb6a314d16e2f4f2588366a9416a332ed665a9b0899" 
        alt="" 
        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdominicocubano.com%2Fwp-content%2Fuploads%2F2017%2F05%2Foftalmogo-1160x653.jpg&f=1&nofb=1&ipt=165d49b8b4c7f21395d284b7d69c699997dddf77be09450f0939e11728094c9f" 
        alt="" 
        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      />
    </SwiperSlide>
    <SwiperSlide>
      <img 
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.retinavalencia.com%2Fwp-content%2Fuploads%2F2022%2F07%2FCirugia-oftalmologica-en-Valencia-Operacion-2048x1365.jpg&f=1&nofb=1&ipt=696fafaddd055c31f5075242c39df0ce78ca64a52d64aa6142e3f6099db4b8d4" 
        alt="" 
        style={{ width: '100%', height: '400px', objectFit: 'cover' }}
      />
    </SwiperSlide>
  </Swiper>
);

export default Carousel;
