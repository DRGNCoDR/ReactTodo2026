import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './app'
import Header from './comp/header'

const domNodeHeader = document.getElementById('header')
const header = createRoot(domNodeHeader)

header.render(<Header title={"Test "} bgColor={"purple"} txtColor={"white"}/>)

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(<App />)