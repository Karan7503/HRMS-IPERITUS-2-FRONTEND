import { Link } from "react-router-dom";
import UserInfoBar from "../components/navbar/UserInfoBar";

function BreadCrumb({ items = [] }) {

  return (

    <nav className="flex items-center text-sm text-muted">

      {items.map((item, i) => {

        const isLast = i === items.length - 1;

        return (

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
      {/* second row */}
      {/* {!isLoginPage && <UserInfoBar />} */}


      {/* <UserInfoBar /> */}
    </nav>

  );

}

export default BreadCrumb;



