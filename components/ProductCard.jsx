import { useRouter } from "next/router";

function ProductCard({ product }) {
  const router = useRouter();
  const redirectToProducts = () => {
    console.log("hellllloooo");
    router.push(`/products/${product.id}`);
  };
  return (
    <div
      style={{
        borderColor: "gray",
        borderStyle: "solid",
        padding: "16px",
        marginBottom: "16px",
      }}
    >
      <div
        style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}
      >
        {product.title}
      </div>
      <div style={{ textAlign: "center" }}>{product.description}</div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "16px" }}
      >
        <button onClick={redirectToProducts}>more</button>
      </div>
    </div>
  );
}
export default ProductCard;
