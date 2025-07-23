import Carousel from 'react-bootstrap/Carousel';


function Slider({ products }) {
  if (!products || products.length === 0) {
    return <p>Загрузка товаров...</p>;
  }

  // ✅ Используем product.rating.rate
  const topRatedProducts = products.filter(product => product.rating?.rate >= 4.5);

  if (topRatedProducts.length === 0) {
    return <p>Нет товаров с рейтингом 4.8 и выше</p>;
  }

  return (
    <div className="container my-4">
      <Carousel data-bs-theme="dark">
        {topRatedProducts.map(product => (
          <Carousel.Item key={product.id}>
            <img
              className="d-block w-100"
              src={product.image}
              alt={product.title}
              style={{ height: '400px', objectFit: 'contain', backgroundColor: '#ffffff'}}
            />
            <Carousel.Caption>
              <h5 className=''>{product.title}</h5>
              <p className=''>Рейтинг: {product.rating.rate}</p>
              <p className=''>price: {product.price}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Slider;