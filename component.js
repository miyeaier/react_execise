//  注意组件开头第一个字母都要大写
class MyComponent extends React.Component {
  // render 是 Class based 组件唯一必须的方法（method）
  render() {
      return (
          <div>Hello, World!</div>
      );
  }
}

// 将 <MyComponent /> 组件插入 id 为 app 的 DOM 元素中
//ReactDOM.render(<MyComponent/>, document.getElementById('app'));


// 使用 arror function 来设计 Funtional Component 让 UI 设计更单纯（f(D) => UI），减少副作用（side effect）
//使用 Functional Component 寫法（單純地 render UI 的 stateless components，沒有內部狀態、沒有實作物件和 ref，沒有生命週期函數。若非需要控制生命週期的話建議多使用 stateless components 獲得比較好的效能）

 // 使用 arrow function 來設計 Functional Component 讓 UI 設計更單純（f(D) => UI），減少副作用（side effect）
//>>>>>>> kdchang/master
 const MyComponent = () => (
     <div>Hello, World!</div>
 );

 // 将 <MyComponent /> 组件插入 id 为 app 的 DOM 元素中
 ReactDOM.render(<MyComponent/>, document.getElementById('app'));