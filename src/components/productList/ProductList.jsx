import "./productList.css";
import Product from "../product/Product";
import { projects } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Project</h1>
      </div>

      <div className="pl-list">
        {projects.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            text={item.text}
            code={item.code}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
