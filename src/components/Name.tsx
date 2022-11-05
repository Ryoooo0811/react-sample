import React from 'react'

// 名前を入力するためのテキストボックスを返す
const Name = () => {
  // input要素のonchangeイベントに対するコールバック関数を定義する
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 入力されたテキストをコンソールに表示する
    console.log(e.target.value)
  }

  return (
    // styleオブジェクトのキーはキャメルケースになる
    <div style={{padding: '16px', backgroundColor: 'grey'}}>
      {/* forの代わりにhtmlForを使う */}
      <label htmlFor="name">名前</label>
      {/* classやonchangeの代わりにclassNameやonChangeを使う */}
      <input type="text" id='name' className='input-name' onChange={onChange} />
    </div>
  )
}

export default Name