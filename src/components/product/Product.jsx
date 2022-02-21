import "./product.css";

const Product = ({ img, link, text, code }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <p>{text}</p>
        <a href={code}>
          <i className="fab fa-github" style={{ fontSize: "20px" }}></i>
        </a>
      </div>

      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
