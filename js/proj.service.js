'use strict'

const STORAGE_KEY = 'projects'

var gProjs = []

function getProjs() {
  var projs = loadFromStorage(STORAGE_KEY)
  if (!projs || !projs.length) {
    projs = []
    projs.push(
      _getProj('sokoban', 'Sokoban', 'Better push those boxes', 'lorem ipsum lorem ipsum lorem ipsum', ['Matrixes', 'keyboard events']),
      _getProj('minesweeper', 'Minesweeper', 'Danger! mines!', 'Minesweeper game, enjoy!', ['Games', 'Nostalgia'])
    )
  }

  gProjs = projs
  saveToStorage(STORAGE_KEY, gProjs)
}

function _getProj(id, name, title, desc, labels) {
  return {
    id: id,
    name: name,
    title: title,
    desc: desc,
    url: `'projs/${id}'`,
    publishedAt: Date.now(),
    labels: labels,
  }
}

function getPortfolioItems() {
  return gProjs
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key)
  return JSON.parse(val)
}
