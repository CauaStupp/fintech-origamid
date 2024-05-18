import { CSSProperties } from "react"

const style: CSSProperties = {
  border: "var(--gap-s) solid var(--color-3)",
  borderRightColor: "var(--color-4)",
  width: "var(--gap)",
  height: "var(--gap)",
  borderRadius: "50%",
  animation: "loading 1s infinite",
  padding: "1rem"
}

const Loading = () => {
  return (
    <div style={style}><style>{`
      @keyframes loading {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style></div>
  )
}

export default Loading