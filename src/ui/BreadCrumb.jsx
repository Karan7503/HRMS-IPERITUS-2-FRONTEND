// function BreadCrumb({ items = [] }) {


//   return (
  
//     <div className="flex items-center text-sm text-muted">

//       {items.map((item, i) => (
  
  //         <div key={i} className="flex items-center">
  
  //           <span className="font-medium text-textMain">
  
  //             {item}
  
  //           </span>
  
  //           {i < items.length - 1 && (
    
  //             <span className="mx-2 opacity-50">
  //               /
  //             </span>
  
  //           )}
  
  //         </div>
  
  //       ))}
  
  //     </div>
  
  //   );
  
  // }
  
  // export default BreadCrumb;
  
  
  import { Link } from "react-router-dom";

  function BreadCrumb({ items = [] }) {

  return (

    <nav className="flex items-center text-sm text-muted">

      {items.map((item, i) => {
        
        const isLast = i === items.length - 1;

        return(

          <div key={i} className="flex items-center">

            {!isLast ? (
              <Link 
                to={item.path}
                className="
                  font-medium
                  hover:text-primary
                  transition-colors
                "
                >
                  {item.label}
                </Link>
                
              ) : (

                <span className="font-medium text-textMain">
                  {item.label}
                </span>

              )}

              {!isLast && (
                <span className="mx-2 text-muted opacity-60">
                  /
                </span>
              )}
            </div>
          );
      })}

    </nav>

  );

}

export default BreadCrumb;



