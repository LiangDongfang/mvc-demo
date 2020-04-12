import './app2.css'
import $ from 'jquery'


const $tabBar = $('#app2 #tab-bar')
const $tabContent = $('#app2 #tab-content')

$tabBar.on('click', 'li', (e) => {
  const $li = $(e.currentTarget)
  const index = $li.index()
  $tabBar.children()
    .eq(index).addClass('selected')
    .siblings().removeClass('selected')
  $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
})

//第一个触发点击事件
$tabBar.children().eq(0).trigger('click')