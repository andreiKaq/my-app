import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  return (
    <div className="container my-4">
      <div className="carousel-wrapper">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/picture-1.png"
              alt="First slide"
            />
            <Carousel.Caption className='text-white'>
              {/* Можно добавить текст */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/picture-2.png"
              alt="Second slide"
            />
            <Carousel.Caption className='text-white'>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/picture-3.png"
              alt="Third slide"
            />
            <Carousel.Caption className='text-white'>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;