import "./Alert.scss";

const Alert = ({ setAlert }) => {
  return (
    <div className="alert-container">
      <div className="alert">
        <div className="header">
          <h3>Please Note...</h3>
        </div>
        <div className="message">
          <p>You need to sign in as a registered user before making a purchase!</p>
          <button onClick={() => setAlert(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};
export default Alert;
