useEffect(() => {
  const getProducts = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();

    if (componentMounted.current) {
      setData(data);
      setFilter(data);
      setLoading(false);
    }
  };
  getProducts();

  return () => {
    componentMounted.current = false;
  };
}, []);
export default Products;