import "../global.scss";
import "./App.scss";

export function Section(props: any) {
  {
    console.log(props.img);
  }
  if (props.side === "left") {
    return (
      <>
        <div className="secondWrapper">
          <div className="section01Texts">
            <h2>Aproveite na TV.</h2>
            <p>
              Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              aparelhos de Blu-ray e outros dispositivos.
            </p>
          </div>
          <div className="TV">
            <img src={props.img} />
          </div>
        </div>
      </>
    );
  } else if (props.side === "right") {
    return (
      <>
        <div className="secondWrapper">
          <div className="TV">
            <img src={props.img} alt="" />
          </div>
          <div className="section01Texts">
            <h2>Aproveite na TV.</h2>
            <p>
              Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              aparelhos de Blu-ray e outros dispositivos.
            </p>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
