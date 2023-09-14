import queryString from 'query-string';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import HeaderShop from './HeaderShop';
import MainContent from './MainContent';
import Sidebar from './Sidebar';

function ShopPage(props) {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('default');
  const [totalPage, setTotalPage] = useState();

  const [temp, setTemp] = useState([]); // Khai báo biến temp

  const [selectedCategory, setSelectedCategory] = useState('all');

  const [pagination, setPagination] = useState({
    page: '1',
    count: '9',
    search: '',
    category: selectedCategory,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {
          page: pagination.page,
          count: pagination.count,
          search: pagination.search,
          category: pagination.category,
        };

        const query = queryString.stringify(params);
        const newQuery = '?' + query;

        const response = await fetch(
          `https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json${newQuery}&alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74`,
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        setProducts(data);
        // setTemp(data); // Gán giá trị cho biến temp
        setTemp([...data]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);

  const handlerChangeSort = value => {
    setSort(value);
  };

  const handlerChangePage = value => {
    setPagination({
      page: value,
      count: pagination.count,
      search: pagination.search,
      category: selectedCategory,
    });
  };

  const handlerSearch = value => {
    setPagination({
      page: pagination.page,
      count: pagination.count,
      search: value,
      category: selectedCategory,
    });
  };

  const handlerCategory = value => {
    setSelectedCategory(value);
    setPagination(prevPagination => ({
      ...prevPagination,
      category: value,
      page: '1',
    }));

    if (value === 'all') {
      // Nếu chọn "All," reset danh sách sản phẩm về ban đầu
      setProducts(temp);
    } else {
      // Nếu chọn danh mục khác, lọc và hiển thị sản phẩm tương ứng
      const filteredProducts = temp.filter(product => product.category === value);
      setProducts(filteredProducts);
    }
  };

  return (
    <Container>
      <HeaderShop />

      {/* {products &&
        products.map((product, index) => (
          <ProductList product={product} convertMoney={convertMoney} key={product._id} />
        ))} */}

      <section className="py-5">
        <Row>
          <Sidebar handlerCategory={handlerCategory} />
          <MainContent
            products={products}
            sort={sort}
            pagination={pagination}
            totalPage={totalPage}
            handlerSearch={handlerSearch}
            handlerChangeSort={handlerChangeSort}
            handlerChangePage={handlerChangePage}
          />
        </Row>
      </section>
    </Container>
  );
}

export default ShopPage;
