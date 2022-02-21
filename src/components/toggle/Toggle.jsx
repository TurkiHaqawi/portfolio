import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./toggle.css";


const Toggle = () => {
  
  const theme = useContext(ThemeContext)

  const handleMode = () => {
    theme.dispatch({type: "TOGGLE"})
  }
  return (
    <div className="t">
      <img src="https://cdn-icons-png.flaticon.com/512/169/169367.png" alt="" className="t-icon" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHMs15nPqAgCDIgN7huuL25dsNuFyFr0tw_15WUWEB5siSE7FrDzJnFvELvXHgD6xoO0&usqp=CAU" alt="" className="t-icon" />
      <div className="t-button" onClick={handleMode} style={{left: theme.state.darkMode ? 0 : 25}}></div>
    </div>
  );
  };
  
  export default Toggle;