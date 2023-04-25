import './Circle.css';

function Circle() {
    return (
        <>
            <div className="circle">
              <div className="js-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="icon"/>
              </div>
              <div className="npm-container">
                <img src="https://authy.com/wp-content/uploads/npm-logo.png" alt="icon"/>
              </div>
              <div className="react-container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="icon"/>
              </div>
              <div className="git-container">
                <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="icon"/>
                <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="icon"/>
              </div>
            </div>
        </>
    );
}

export default Circle;