const ProgressBar = ({ width }) => (
  <div className="outer">
    <div className="inner" style={{ width: `${width}%` }} />
  </div>
);

export default ProgressBar;
