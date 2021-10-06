import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
  --color-background: #f0f0f7;
  --color-box-footer: #fafafc;
  --color-primary-lighter: #9871f5;
  --color-text-title: #32264d;
  --color-text-complement: #ced4da;
  --color-primary-dark: #774dd6;
  --color-text-error: #c40233;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

html,
body,
#root {
  height: 100vh;
}

body {
  background-color: var(--color-background);
}

#root {
  display: flex;
  align-items: center;
  justify-content: center;
}

body,
input,
button,
textarea {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Poppins', sans-serif;
  font-size: 500 1.6rem;
}

@media (min-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}

textarea:focus,
input:focus,
button:focus {
  outline: none;
}
`
