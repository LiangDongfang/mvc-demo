import './app1.css'
import $ from 'jquery'

const $btnAdd = $('#add1')
const $btnSub = $('#sub1')
const $btnMul = $('#mul2')
const $btnDivide = $('#divide2')
const $spanOutput = $('.output')
let number = localStorage.getItem('n')
$spanOutput.text(number || 1000)

$btnAdd.on('click', () => {
  let number = parseInt($spanOutput.text())
  number += 1
  $spanOutput.text(number)
  localStorage.setItem('n', number)
})

$btnMul.on('click', () => {
  let number = parseInt($spanOutput.text())
  number *= 2
  $spanOutput.text(number)
  localStorage.setItem('n', number)
})

$btnSub.on('click', () => {
  let number = parseInt($spanOutput.text())
  number -= 1
  $spanOutput.text(number)
  localStorage.setItem('n', number)
})

$btnDivide.on('click', () => {
  let number = parseInt($spanOutput.text())
  number /= 2
  $spanOutput.text(number)
  localStorage.setItem('n', number)
})