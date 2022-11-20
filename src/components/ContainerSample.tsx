import React from "react"
import { JsxAttribute } from "typescript"

// Containerのpropsの型を定義する
type ContainerProps = {
  title: string
  children: React.ReactNode
}

const Container = (props: ContainerProps): JSX.Element => {
  const { title, children } = props

  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと閉じタグで囲んだ要素を表示する */}
      <div>{children}</div>
    </div>
  )
}

const Parent = (): JSX.Element => {
  return (
    // Containerを使用する際に、他の要素を囲って使用する
    <Container title="Hello">
      <p>この部分が背景色で囲まれます</p>
    </Container>
  )
}

export default Parent