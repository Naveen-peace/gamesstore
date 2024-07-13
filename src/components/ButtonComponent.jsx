import { useNavigate } from 'react-router-dom';



function ButtonComponent(props) {

    const{
     color,
     label,
     customClass,
     width,
     height,
     onClick,
     padding
    } = props
  

    
    return (
      <div class="">
      <button onClick={(e) => onClick(e)} style={{ width: width, height: height,padding:padding,}} className={customClass}>
        {label}
      </button>
      </div>
    )
  }
  
  export default ButtonComponent
  