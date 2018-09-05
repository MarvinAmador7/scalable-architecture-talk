import { dark } from 'mdx-deck/themes'
import { atomDark } from 'react-syntax-highlighter/styles/prism/'

export default {
  ...dark,
  prism: {
    style: atomDark,
  },
  font: 'Oswald, sans-serif',
  h1: {
    color: '#f53e5a',
  },
  li: {
    fontSize: '22px',
  },
  colors: {
    text: '#3e4d5f',
    background: 'rgb(29, 31, 33)',
    link: '#3e4d5f',
  }
}
