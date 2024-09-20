import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../services/api/productApi";
import ProductCard from "../../components/productCard/ProductCard";
import { ProductType } from "../../types/ProductsTypes";
import { Container, Row, Col } from "react-bootstrap";
import SearchBar from "../../components/searchBar/SearchBar";

function Home() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Fetch all products from the API and store in state
  useEffect(() => {
    setLoading(true);
    fetchAllProducts()
      .then((data: { data: ProductType[] }) => {
        setProducts(data.data);
        setFilteredProducts(data.data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Filter products based on search input
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts(products); 
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  if (loading) {
    return <div className="d-flex justify-content-center fs-4 py-5">Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="background min-vh-100">
      <Container>
        <h1 className="text-center p-4">All Products</h1>

        {/* SearchBar component */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* No product message */}
        {filteredProducts.length === 0 ? (
          <div className="d-flex justify-content-center fs-5 py-5">
            No products found. Try searching for something else.
          </div>
        ) : (
          <Row>
            {filteredProducts.map((product) => (
              <Col key={product.id} xs={12} sm={6} md={4}>
                <ProductCard
                  product={product}
                  showViewProductButton={true}
                  truncateDescription={true}
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Home;
