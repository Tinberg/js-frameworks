const BASE_URL = 'https://v2.api.noroff.dev/online-shop';

// Fetch all products
export const fetchAllProducts = async () => {
  const response = await fetch(`${BASE_URL}`);
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data;
};

// Fetch a single product by ID
export const fetchProductById = async (id: string) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const data = await response.json();
  return data;
};