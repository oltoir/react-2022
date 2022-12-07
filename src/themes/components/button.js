import shadows from 'themes/foundations/shadows';

export default {
  baseStyle: {
    fontWeight: 'semibold',
    fontSize: 'md',
  },
  variants: {
    solid: {
      backgroundColor: 'blue.500',
      color: 'white',
      boxShadow: '0px 1px 2px rgba(16, 24, 40, 0.05)',

      _hover: {
        backgroundColor: 'blue.700',
        _disabled: {
          backgroundColor: 'blue.200',
          boxShadow: 'none',
        },
      },

      _focus: {
        backgroundColor: 'blue.500',
        boxShadow: '0px 0px 0px 4px #D1E9FF',
      },

      _disabled: {
        backgroundColor: 'blue.200',
        boxShadow: 'none',
      },
    },
    outline: {
      backgroundColor: 'white',
      color: 'blue.500',
      borderColor: 'blue.500',
      borderStyle: 'solid',
      borderWidth: '1px',

      _hover: {
        borderColor: 'blue.700',
        color: 'blue.700',
      },

      _focus: {
        boxShadow: '0px 0px 0px 4px #D1E9FF',
      },

      _disabled: {
        color: 'blue.200',
      },
    },
    error: {
      backgroundColor: 'red.500',
      color: 'white',
      borderStyle: 'solid',
      borderRadius: 8,

      _hover: {
        backgroundColor: 'red.700',
      },

      _focus: {
        boxShadow: '0px 0px 0px 4px #FFDBD9;',
      },

      _disabled: {
        color: 'white',
      },
    },
    errorOutline: {
      backgroundColor: 'white',
      color: 'red.500',
      borderColor: 'red.500',
      borderStyle: 'solid',
      borderWidth: '1px',

      _hover: {
        borderColor: 'red.700',
        color: 'red.700',
      },

      _focus: {
        boxShadow: '0px 0px 0px 4px #FFDBD9;',
      },

      _disabled: {
        color: 'red.200',
      },
    },
    secondary: {
      backgroundColor: 'gray.100',
      color: 'gray.700',

      _hover: {
        backgroundColor: 'gray.200',
      },

      _focus: {
        boxShadow: '0px 0px 0px 4px #E4E4E7',
      },

      _disabled: {
        backgroundColor: 'transparent',
        color: 'gray.300',
      },
    },
    ghost: {
      backgroundColor: 'white',
      color: 'gray.700',
      borderColor: 'gray.100',
      borderStyle: 'solid',
      borderWidth: '1px',

      _hover: {
        borderColor: 'gray.200',
        backgroundColor: 'white',
      },

      _focus: {
        boxShadow: '0px 0px 0px 4px #E4E4E7',
      },

      _disabled: {
        color: 'gray.300',
      },
    },
    circle: {
      width: 9,
      height: 9,
      minHeight: 9,
      minWidth: 9,
      border: '1px solid',
      borderColor: 'gray.200',
      borderRadius: '100%',
      boxShadow: 'none',
      outline: 'none',
      _focus: {
        boxShadow: 'none',
      },
    },
    smallCircle: {
      width: 8,
      height: 8,
      minHeight: 8,
      minWidth: 8,
      border: '1px solid',
      borderColor: 'gray.200',
      borderRadius: '100%',
      boxShadow: 'none',
      outline: 'none',
      _focus: {
        boxShadow: 'none',
      },
    },
    largeCircle: {
      width: 12,
      height: 12,
      minHeight: 12,
      minWidth: 12,
      border: 0,
      borderRadius: '100%',
      boxShadow: 'none',
      outline: 'none',
      backgroundColor: 'blue.600',
      _focus: {
        boxShadow: 'none',
      },
    },
    menuButton: {
      py: '2',
      px: '3',
      width: '33%',
      backgroundColor: 'gray.100',
      textAlign: 'left',
      textStyle: 'sm',
      textColor: 'gray.500',
      fontWeight: 'normal',
      _focus: {
        border: '2px solid',
        borderColor: 'blue.500',
        boxShadow: shadows.blue,
        backgroundColor: 'white',
      },
    },
    todayButton: {
      py: '2',
      px: '3',
      backgroundColor: 'gray.100',
      textAlign: 'left',
      textStyle: 'sm',
      textColor: 'gray.500',
      fontWeight: 'normal',
      _focus: {
        border: '2px solid',
        borderColor: 'blue.500',
        boxShadow: shadows.blue,
      },
    },
    empty: {
      backgroundColor: 'white',
      boxSize: 'fit-content',
      p: 0,
      _focus: {
        outline: 'none',
        boxShadow: 'none',
      },
    },
    emptyWithPadding: {
      backgroundColor: 'white',
      boxSize: 'fit-content',
      _focus: {
        outline: 'none',
        boxShadow: 'none',
      },
    },
  },
  sizes: {
    lg: {
      py: 4,
      textStyle: 'md',
    },
    md: {
      py: 2,
      px: '14px',
      textStyle: 'sm',
      fontWeight: 'semibold',
    },
    sm: {
      py: 1,
      px: 3,
      textStyle: 'xs',
    },
    xs: {
      py: '3px',
      px: 2,
      textStyle: 'xs',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
    borderRadius: 2,
    border: 'none',
  },
};
