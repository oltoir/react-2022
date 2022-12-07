export default {
  parts: ['tab', 'tabpanel'],
  baseStyle: {
    tab: {
      color: 'gray.500',
      position: 'relative',
    },
    tabpanel: {
      padding: 0,
    },
  },
  variants: {
    line: {
      tab: {
        _selected: {
          color: 'blue.500',
          boxShadow: 'none',
          borderBottom: 'none',
        },
        fontSize: 'sm',
        fontWeight: 'medium',
      },
    },
  },
};
