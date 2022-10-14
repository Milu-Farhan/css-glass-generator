import React, { useState } from "react";
import Preview from "./Preview";
import Code from "./Code";

const Inputs = () => {
  const [inputs, setInput] = useState({
    backgroundURL:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1124&q=100",
    color: "#ffffff",
    blur: "10",
    opacity: "50",
    saturation: "100",
    rgba: "rgba(255 ,255 ,255,.5)",
  });

  const onBgchange = (e) => {
    setInput({
      ...inputs,
      backgroundURL: e.target.value,
    });
  };

  const rgbTorgba = (opacity, color) => {
    var rgbaCol =
      "rgba(" +
      parseInt(color.slice(-6, -4), 16) +
      "," +
      parseInt(color.slice(-4, -2), 16) +
      "," +
      parseInt(color.slice(-2), 16) +
      "," +
      opacity +
      ")";

    return rgbaCol;
  };

  const onColorchange = (e) => {
    setInput({
      ...inputs,
      color: e.target.value,
      rgba: rgbTorgba(inputs.opacity / 100, e.target.value),
    });
  };

  const onBlurchange = (e) => {
    setInput({
      ...inputs,
      blur: e.target.value,
    });
  };
  const onOpacitychange = (e) => {
    setInput({
      ...inputs,
      opacity: e.target.value,
      rgba: rgbTorgba(e.target.value / 100, inputs.color),
    });
  };
  const onSaturationchange = (e) => {
    setInput({
      ...inputs,
      saturation: e.target.value,
    });
  };
  return (
    <>
      <div className="input-wrapper">
        <div>
          <label htmlFor="bgInput">Background Image URL</label>
          <input
            type="url"
            id="bgInput"
            value={inputs.backgroundURL}
            onChange={onBgchange}
          />
        </div>
        <div>
          <label htmlFor="cardColor">Card Color</label>
          <input
            type="color"
            id="cardColor"
            value={inputs.color}
            onChange={onColorchange}
            rgba="true"
          />
        </div>
        <div>
          <label htmlFor="blur">Blur value</label>
          <input
            type="range"
            id="blur"
            min="0"
            max="25"
            value={inputs.blur}
            onChange={onBlurchange}
          />
        </div>
        <div>
          <label htmlFor="opacity">Opacity</label>
          <input
            type="range"
            id="opacity"
            min="0"
            max="100"
            value={inputs.opacity}
            onChange={onOpacitychange}
          />
        </div>
        <div>
          <label htmlFor="saturation">Saturation</label>
          <input
            type="range"
            id="saturation"
            min="0"
            max="200"
            value={inputs.saturation}
            onChange={onSaturationchange}
          />
        </div>
      </div>
      <Preview data={inputs} />
      <Code data={inputs} />
    </>
  );
};
export default Inputs;
