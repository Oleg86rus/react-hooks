import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
  const [textInDiv, setTextInDiv] = useState("Блок");
  const smallDiv = useRef();
  const handleClick = () => {
    smallDiv.current.style.width = "80px";
    smallDiv.current.style.height = "150px";
    setTextInDiv("text");
  };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={smallDiv}
            >
                <small >{textInDiv}</small>
            </div>
           <button className='mt-2 btn btn-secondary' onClick={handleClick}>Изменить Блок</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
