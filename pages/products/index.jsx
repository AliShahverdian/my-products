import ProductCard from "../../components/productCard";
function ProducsPage() {
  const products = [
    {
      id: 1,
      title: "Calculator",
      description: "this is a brand new calculator",
    },
    {
      id: 2,
      title: "Pencil",
      description: "this is a brand new pencil",
    },
    {
      id: 3,
      title: "Pen",
      description: "this is a brand new pen",
    },
  ];
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {products.map((i, index) => {
          return <ProductCard product={i} key={index} />;
        })}
      </div>
    </div>
  );
}
export default ProducsPage;
// return (
//   <dive>
//     <div>
//       <div>
//         {products.map((el) => {
//           return <ProductCard product={el} />;
//         })}
//       </div>
//     </div>
//   </dive>
// );
// {Producs.map((el)=>{
//     return <ProductCard product={el} />;
// })}

// {products.map((el)=>{
//     return <ProductCard product={el} />;
// })}
