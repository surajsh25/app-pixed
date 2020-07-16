import React from "react";

const NotFound = () => {
  return (
    <div className="root">
      <div className="card">
        <h2>404 (Page Not Found)</h2>
        <p style={{ lineHeight: "30px" }} className="desc">
          I'm afraid you've found a page that doesn't really exist. That can
          happen when you follow a link to something that has since been
          deleted. Or the link was incorrect to begin with.
        </p>
        <a style={{ textDecoration: "none",textAlign: 'center' }} href="/">
          <p>return</p>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
