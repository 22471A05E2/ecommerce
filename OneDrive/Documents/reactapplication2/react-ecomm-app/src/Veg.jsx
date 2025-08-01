import { useSelector } from "react-redux";
function veg(){
    const nonvegProducts=useSelector(state=>state.products.veg)
    const items=nonvegProducts.map((product,Index)=>(
        <li key={Index}>
        {product.name}
        {product.price}
        </li>
    ));
    return(
        <>
        <h1>veg items</h1>
        <u1>{items}</u1>
        </>
    );
}
export default veg;