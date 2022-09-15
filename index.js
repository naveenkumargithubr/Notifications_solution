const Notification = (props) => {
  const { className } = props;
  return (
    (<img className="logo" />),
    (<p className="info"></p>),
    (<h1 className="heading"></h1>)
  );
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className="Information">
      <div className="first-info">
        <img
          src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          className="logo"
        />
        <p className="info">Information Message</p>
      </div>
    </div>

    <div className="Information success">
      <div className="first-info">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="logo"
        />
        <p className="info">Success Message</p>
      </div>
    </div>

    <div className="Information warning">
      <div className="first-info">
        <img
          src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          className="logo"
        />
        <p className="info">Warning Message</p>
      </div>
    </div>

    <div className="Information Error">
      <div className="first-info">
        <img
          src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          className="logo"
        />
        <p className="info">Error Message</p>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
