import { Link } from "react-router-dom";

const NormalHeader = () => {
  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
      {/* <li class="nav-item">
        <Link to="/user/register" class="nav-link active" aria-current="page">
          <b className="text-color">Register User</b>
        </Link>
      </li> */}

      <li class="nav-item">
        <Link to="/user/login" class="nav-link active" aria-current="page">
        <button  className=' px-10 py-1 bg-white font-semibold   text-primary rounded-pill w-auto p-4 custom-bg-text' id='login-button' >
                <b className="text-color">Login</b>
              </button>
        </Link>
      </li>
    </ul>
  );
};

export default NormalHeader;
