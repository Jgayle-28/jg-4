export const mountAnim = { initial: 'initial', animate: 'enter', exit: 'exit' }

export const height = {
  initial: {
    height: 0,
  },
  enter: (i) => ({
    height: '100%',
    transition: { duration: 0.5, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] },
  }),
  exit: (i) => ({
    height: 0,
    transition: { duration: 0.3, delay: 0.05 * i, ease: [0.33, 1, 0.68, 1] },
  }),
}

export const navBackground = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.5,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
}

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: i },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
}

export const menuEntrance = {
  initial: {
    x: '180px',
    opacity: 0,
  },
  enter: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1.01],
      delay: 0.3 + i * 0.085,
    },
  }),
  exit: (i) => ({
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.33, 1, 0.68, 1.03],
      delay: i[1],
    },
  }),
}

export const blur = {
  initial: {
    filter: 'blur(0px)',
    opacity: 1,
  },
  open: {
    filter: 'blur(4px)',
    opacity: 0.6,
    transition: { duration: 0.3 },
  },
  closed: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 0.3 },
  },
}
