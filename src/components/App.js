import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    </div>
  </div>
)

export default App