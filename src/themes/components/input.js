import shadows from 'themes/foundations/shadows';

export default {
  parts: ['field'],
  baseStyle: {
    field: {
      py: 2,
      px: 3,
      textStyle: 'sm',
      fontWeight: 500,
      borderRadius: '8px',
      backgroundColor: 'gray.100',
    },
  },
  variants: {
    filled: {
      field: {
        color: 'gray.900',
        _placeholder: {
          color: 'gray.500',
          fontWeight: 400,
        },
        _focus: {
          border: '1px solid blue.500',
          borderWidth: '1px',
          boxShadow: shadows.blue,
        },
        _disabled: {
          color: 'gray.700',
          backgroundColor: 'gray.100',
        },
      },
    },
    error: {
      field: {
        bgColor: 'white',
        color: 'gray.900',
        border: '1px solid',
        borderColor: 'red.500',
        boxShadow: shadows.red,
      },
    },
  },
  defaultProps: {
    variant: 'filled',
  },
};
