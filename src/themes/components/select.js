export default {
  parts: ['field'],
  baseStyle: {
    field: {
      py: 2,
      px: 3,
      fontStyle: 'sm',
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
          border: '1px solid #446DFF',
          boxShadow: '0px 0px 0px 4px #DAE2FF',
        },
        _disabled: {
          color: 'gray.300',
          backgroundColor: 'gray.100',
        },
      },
    },
    error: {
      field: {
        bgColor: 'white',
        color: 'gray.900',
        border: '1px solid #FF4C40',
        boxShadow: '0px 0px 0px 4px #FFDBD9;',
        _focus: {
          border: '1px solid red.500',
          boxShadow: '0px 0px 0px 4px #FFDBD9;',
        },
      },
    },
  },
  defaultProps: {
    variant: 'filled',
  },
};
