import React from 'react'

const BtnModal = ({ title, bgColor, textColor, onClickHandler }) => {
    const styles = {
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
        padding: "1rem 2rem",
        border:"none",
        cursor:"pointer",
        borderRadius:"100px"
      };
      return (
        <button  style={styles} onClick={onClickHandler}>
          {title}
        </button>
      );
}

export default BtnModal