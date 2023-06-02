import React from 'react'
import store from '../../redux/store';

export default function H2Com() {
  return (
    <h2>{store.getState().count}</h2>
  )
}
 