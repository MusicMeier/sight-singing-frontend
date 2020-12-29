import React from 'react';
import Header from '../components/Header'
import { connect } from 'react-redux'

const Layout = (props) => {
  return (
    <div className='container-main'>
      <Header />
      {props.children}
    </div>
  )
}

export default connect(null)(Layout); 