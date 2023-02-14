import { useState } from "react";

import { HiBarsArrowDown, HiBarsArrowUp } from "react-icons/hi2";

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
            {presentation}
          </p>
          <ul className="list">
            <p style={{ padding: "0" }}>
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
