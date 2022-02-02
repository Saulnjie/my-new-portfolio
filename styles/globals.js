import { createGlobalStyle } from "styled-components";
import media from "styled-media-query";

const GlobalStyle = createGlobalStyle`
:root {
    /* font-family: 'Raleway', sans-serif;
    --font-body: 'Raleway', sans-serif; */

    /* --font-headings:  */

    /* FONT SIZES */ 
    --font-size-base: 16px;
    --font-size-xxs: 0.296rem;
    --font-size-xs: 0.444rem;
    --font-size-sm: 0.667rem;
    --font-size: 1rem;
    --font-size-md: 1.5rem;
    --font-size-lg: 2.25rem;
    --font-size-xl: 3.375rem;
    --font-size-xxl: 5.068rem;
    --font-size-huge: 7.594rem;
    --font-size-jumbo: 11.391rem;

    /* SPACING */
    --size-xxs: 4px;
    --size-xs: 7px;
    --size-sm: 11px;
    --size: 16px;
    --size-md: 24px;
    --size-lg: 36px;
    --size-xl: 54px;
    --size-xxl: 81px;
    --size-huge: 121px;
    --size-jumbo: 182px;

    /* COLOR */
    --color-primary:#7F8085;
    --color-secondary:#37383D;
    --color-tertiary:#2B73C9;
    --color-quaternary:#FFCF54;
    --color-white:#ffff;
    --color-black:#222327;

    /* --c-action: ;
    --c-danger:;
    --c-info:;
    --c-bg:;
    --c-text:;
    --c-text--inverse:;
    --c-success:;
    --c-disabled:; */

    /* RADIUS */
    --radius-base:8px;

    --z-base: 300;
    --z-ground: 400;
    --z-cieling: 1000;
    --z-sky: 9999;

    /* ELEVATION */
    --shadow-base: 0 2px 2px 0 rgb(0 0 0 / 14%);
    
    /*QUERY*/

    ${media.greaterThan('small')`
    --font-size-base: 18px;

    --size-xxs: 6px;
    --size-xs: 8px;
    --size-sm: 13px;
    --size: 20px;
    --size-md: 30px;
    --size-lg: 40px;
    --size-xl: 58px;
    --size-xxl: 92px;
    --size-huge: 130px;
    --size-jumbo: 250px;
    `}

    ${media.greaterThan('medium')`
    --font-size-base: 18px;

    --size-xxs: 6px;
    --size-xs: 8px;
    --size-sm: 13px;
    --size: 20px;
    --size-md: 30px;
    --size-lg: 40px;
    --size-xl: 58px;
    --size-xxl: 92px;
    --size-huge: 130px;
    --size-jumbo: 250px;
    `}

    ${media.greaterThan('large')`
    --font-size-base: 18px;

    --size-xxs: 6px;
    --size-xs: 8px;
    --size-sm: 13px;
    --size: 20px;
    --size-md: 30px;
    --size-lg: 40px;
    --size-xl: 58px;
    --size-xxl: 92px;
    --size-huge: 130px;
    --size-jumbo: 250px;
    `}
    
    ${media.greaterThan('huge')`
    --font-size-base: 18px;

    --size-xxs: 6px;
    --size-xs: 8px;
    --size-sm: 13px;
    --size: 20px;
    --size-md: 30px;
    --size-lg: 40px;
    --size-xl: 58px;
    --size-xxl: 92px;
    --size-huge: 130px;
    --size-jumbo: 250px;
    `}

}

html {
    background: var(--c-bg);
    font-family: var(--font-body);
    font-size: var(--font-size-base);
    scroll-behavior: smooth;
}

html, body {
height: 100%;
margin: 0;
padding: 0;
}

*, *:before, *:after {
    box-sizing: border-box;
}

a {
    color: var(--color-primary)
}
`;

export default GlobalStyle;