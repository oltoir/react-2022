export default {
  parts: ['track', 'filledTrack', 'label'],
  baseStyle: {
    track: {
      borderRadius: '4px',
    },
  },
  variants: {
    green: {
      filledTrack: {
        color: 'green.500',
        bgColor: 'green.500',
      },
    },
    yellow: {
      filledTrack: {
        color: 'yellow.500',
        bgColor: 'yellow.500',
      },
    },
    red: {
      filledTrack: {
        color: 'red.500',
        bgColor: 'red.500',
      },
    },
  },
  defaultProps: {
    size: 'xs',
  },
  sizes: {
    xs: {
      track: {
        h: '0.375rem',
      },
    },
  },
};
