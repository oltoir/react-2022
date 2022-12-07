export default {
  parts: ['container', 'label', 'closeButton'],
  baseStyle: {
    container: {
      fontSize: { base: 'sm', md: 'xs' },
      lineHeight: { base: 'sm', md: 'xs' },
      fontWeight: { base: 'normal', md: 'medium' },
    },
  },
  variants: {
    red: {
      container: {
        bgColor: { base: 'white', md: 'red.50' },
        color: 'red.500',
      },
    },
    green: {
      container: {
        bgColor: { base: 'white', md: 'green.50' },
        color: 'green.500',
      },
    },
    violet: {
      container: {
        bgColor: { base: 'white', md: 'violet.50' },
        color: 'violet.500',
      },
    },
  },
};
