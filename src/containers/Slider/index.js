import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) > new Date(evtB.date) ? -1 : 1
  );
  const dataLength = byDateDesc?.length || 0;
  const nextCard = () => {
    if(!dataLength) return ; 
    setIndex((i) => (i + 1) % dataLength);
  };
  useEffect(() => {

    if(!dataLength) return() => {}  ; 
    const id = setTimeout(() => { 
      nextCard();

    }, 5000);
    return () => clearTimeout(id);
  }, [index, dataLength]); 
  return (
    // slider
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        // <>
          <div
            key={ event.id ??event.title ?? idx}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt={event.title} />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>

        // </>
      ))}
          {/* pagination */}
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {/* x is a variable it could have been even anything else */}
              {/* in our case radioIdx cant be used as a stable key for our loop so we used x instead */}
              {byDateDesc?.map((x, radioIdx) => (
                <input
                  key={x.id}
                  type="radio"
                  name="radio-button"
                  checked={ index === radioIdx}
                   onChange={() => setIndex(radioIdx)}
                />
              ))}
            </div>
          </div>
    </div>
  );
};

export default Slider;
