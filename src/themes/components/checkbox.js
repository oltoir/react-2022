export default {
  parts: ['control', 'icon', 'container', 'label'],
  variants: {
    filter: {
      control: {
        border: '1px solid',
        borderRadius: '4px',
        borderColor: 'gray.300',
        _hover: {
          bgColor: 'blue.100',
          borderColor: 'blue.500',
        },
        _checked: {
          _hover: {
            bgColor: 'blue.600',
          },
        },
        _focus: {
          boxShadow: '0px 0px 0px 4px #DAE2FF',
        },
      },
      label: {
        fontWeight: 'normal',
        fontSize: 'sm',
        lineHeight: 'sm',
        textColor: 'gray.700',
      },
    },
  },
};
