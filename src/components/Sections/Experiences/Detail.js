import { useState } from "react";

const Detail = ({ tasks, presentation }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="show" onClick={() => setShow(!show)}>
        {show ? <p>Moins de details</p>: <p>Plus de details</p> }
      </div>
      {show && (
        <div className="missions">
          <p className="description">
            <b>Description de l'entreprise&nbsp;:&nbsp;</b>
          </p>
          <p>{presentation}</p>
          <ul className="list">
            <p style={{ padding: "1rem 0" }}>
              <b>Missions&nbsp;:&nbsp;</b>
            </p>
            {tasks.map((task, idx) => {
              return (
                <li className="list-item" key={idx}>
                  - {tasks[idx]}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default Detail;
