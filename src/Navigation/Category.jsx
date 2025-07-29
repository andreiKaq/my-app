import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from 'react-router';


function Category({product}) {

  const secondCrumbItem = product ? product?.category || '' : 'Products'


  return (
    <Breadcrumb className="my-breadcrumb">
      <Breadcrumb.Item href="#">
        <NavLink to='/' className='nav-link'>Home</NavLink>
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#" active>
        
        {secondCrumbItem}
      </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Category;