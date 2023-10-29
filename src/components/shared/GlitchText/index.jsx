import styles from './glitchText.module.scss'

export default function GlitchText({ text }) {
  return (
    <div className={styles.glitchStack} style={{ '--stacks': 3 }}>
      <span style={{ '--index': 0 }}>{text}</span>
      <span style={{ '--index': 1 }}>{text}</span>
      <span style={{ '--index': 2 }}>{text}</span>
    </div>
  )
}
