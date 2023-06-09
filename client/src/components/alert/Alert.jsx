import "./Alert.scss";

const Alert = ({ setAlert, message}) => {
  return (
    <div className="alert-container">
      <div className="alert">
        <div className="header">
          <h3>Please Note...</h3>
        </div>
        <div className="message">
          <p>{message}</p>
          <button onClick={() => setAlert(false)}>Close</button>
        </div>
      </div>
    </div>
  );
};
export default Alert;
