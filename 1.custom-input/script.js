function createOneLinearGradientDot() {
  const styles = `
  height: 50px;
  width: 80px;
  background-color: lightskyblue;
  background-image: linear-gradient(to right, #00FF2F, #34EFC3,#94FFDA);
  clip-path: circle(30%);
  `;
  const dot = document.createElement("div");
  dot.style = styles;
  return dot;
}

class AuroraPasswordInput extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: "open" });

    const dotsContainer = document.createElement("div");
    const dotsContainerStyles = `
      display:flex;
      padding:12px;
    `;
    dotsContainer.style = dotsContainerStyles;

    let inputTypePassword = document.createElement("input");
    inputTypePassword.type = "password";
    const inputTypePasswordStyle = `
      color:transparent;
    `;
    inputTypePassword.style = inputTypePasswordStyle;

    inputTypePassword.oninput = (event) => {
      console.log("dasd");
      const dot = createOneLinearGradientDot();
      dotsContainer.appendChild(dot);
    };

    shadow.appendChild(dotsContainer);
    shadow.appendChild(inputTypePassword);
  }
}

customElements.define("aurora-password-input", AuroraPasswordInput);
