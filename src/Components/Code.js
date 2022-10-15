import { useEffect } from "react";

export default function Code(props) {
  useEffect(() => {
    let el = document.getElementById("text").textContent;
    console.log(el);
  }, []);

  return (
    <div className="code-wrapper">
      <pre id="text">
        <div>
          <span>/* Background styles */ {"\n"}</span>
        </div>
        <div>
          <span>body</span>
          <span>{" {"}</span>
          {"\n"}
        </div>
        <div>
          <span>{"  "}</span>
          <span>background-image :</span>
          <span> </span>
          <span>url</span>
          <span>{`(${props.data.backgroundURL})`};</span>
          {"\n"}
        </div>
        <div>
          <span>{"  "}</span>
          <span>background-position : center;</span>
          {"\n"}
        </div>
        <div>
          <span>{"}"}</span>
          {"\n"}
        </div>
        <br />
        <div>
          <span>/* Glassmorphism card effect */</span>
          {"\n"}
        </div>
        <div>
          <span>.card</span>
          <span>{" {"}</span>
          {"\n"}
        </div>
        <div>
          <span>{"  "}</span>
          <span>backdrop-filter : </span>
          <span>blur</span>
          <span>
            {"("}
            <span>{props.data.blur}px</span>
            {")"}
          </span>
          <span>{"  "}</span>
          <span>saturation</span>
          <span>
            {"("}
            <span>{props.data.saturation}%</span>
            {");"}
          </span>
          {"\n"}
        </div>
        <div>
          <span>{"  "}</span>
          <span>-webkit-backdrop-filter : </span>
          <span>blur</span>
          <span>
            {"("}
            <span>{props.data.blur}px</span>
            {")"}
          </span>
          <span>{"  "}</span>
          <span>saturation</span>
          <span>
            {"("}
            <span>{props.data.saturation}%</span>
            {");"}
          </span>
          {"\n"}
        </div>
        <div>
          <span>{"  "}</span>
          <span>background-color: </span>
          <span>{`${props.data.rgba};`}</span>
          {"\n"}
        </div>
        <div>
          <span>{"  "}</span>
          <span>border: </span>
          <span>1px solid rgba(209, 213, 219, 0.3);</span>
          {"\n"}
        </div>
        <div>
          <span>{"  "}</span>
          <span>border-radius: </span>
          <span>8px;</span>
          {"\n"}
        </div>
        <div>
          <span>{"}"}</span>
          {"\n"}
        </div>
      </pre>
      <pre>
        /* Background styles */ {"\n"}
        body {"{ \n"}
        {"  "}backdrop-filter: blur{`(${props.data.blur})\n`}
        {"}"}
      </pre>
    </div>
  );
}
