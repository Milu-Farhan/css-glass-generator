import { useEffect } from "react";

export default function Preview(props) {
  const data = props.data;
  const previewStyle = {
    backgroundImage: `url(${data.backgroundURL})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  useEffect(() => {
    const data = props.data;
    const card = document.querySelector(".card");
    // card.style.backdropFilter = `blur(10px) `;
    card.style.backdropFilter = `blur(${data.blur}px) saturate(${data.saturation}%)`;
    // card.style.backdropFilter = ``;
    // console.log(card);
  }, [props]);

  const cardStyle = {
    backgroundColor: data.rgba,
  };
  const element = (
    <div className="preview-wrapper">
      <div className="preview" style={previewStyle}>
        <div className="card" style={cardStyle}>
          <div className="dp"></div>
          <h3>John Doe</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            nesciunt asperiores adipisci cum maiores aliquam.
          </p>
        </div>
      </div>
    </div>
  );

  return element;
}
