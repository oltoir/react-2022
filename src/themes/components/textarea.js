import shadows from 'themes/foundations/shadows';

export default {
  baseStyle: {
    py: 2,
    px: 3,
    textStyle: 'sm',
    fontWeight: 500,
    borderRadius: '8px',
    backgroundColor: 'gray.100',
  },
  variants: {
    filled: {
      color: 'gray.900',
      _placeholder: {
        color: 'gray.500',
        fontWeight: 400,
        textStyle: 'sm',
      },
      _focus: {
        border: '1px solid blue.500',
        boxShadow: shadows.blue,
      },
      _disabled: {
        color: 'gray.300',
        backgroundColor: 'gray.100',
      },
    },
    error: {
      bgColor: 'white',
      color: 'gray.900',
      border: '1px solid',
      borderColor: 'red.500',
      boxShadow: shadows.red,
    },
  },
  defaultProps: {
    variant: 'filled',
  },
};
