export default function Code(props) {
  return (
    <div className="code-wrapper">
      <pre>
        <div>
          <span>/* Background styles */</span>
        </div>
        <div>
          <span>body</span>
          <span>{" {"}</span>
        </div>
        <div>
          <span>{"  "}</span>
          <span>background-image :</span>
          <span> </span>
          <span>url</span>
          <span>{`(${props.data.backgroundURL})`};</span>
        </div>
        <div>
          <span>{"  "}</span>
          <span>background-position : center;</span>
        </div>
        <div>
          <span>{"}"}</span>
        </div>
        <br />
        <div>
          <span>/* Glassmorphism card effect */</span>
        </div>
        <div>
          <span>.card</span>
          <span>{" {"}</span>
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
        </div>
        <div>
          <span>{"  "}</span>
          <span>background-color: </span>
          <span>{`${props.data.rgba};`}</span>
        </div>
        <div>
          <span>{"  "}</span>
          <span>border: </span>
          <span>1px solid rgba(209, 213, 219, 0.3);</span>
        </div>
        <div>
          <span>{"  "}</span>
          <span>border-radius: </span>
          <span>8px;</span>
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </pre>
    </div>
  );
}
