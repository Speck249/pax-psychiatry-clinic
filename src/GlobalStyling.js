import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
}

* {
  margin: 0;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

.golden-star {
  color: gold;
}

.swal2-popup {
  font-size: 10px;
  font-family: 'Sora', sans-serif;
  margin-left: 1rem;
}
`;