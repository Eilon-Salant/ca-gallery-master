'use strict'

$(document).ready(initPage)

function initPage() {
  getProjs()
  createPortfolioItem()
  createModals()
}

function createPortfolioItem() {
  var portfolioItems = getPortfolioItems()
  var itemHTML
  var strHTMLs
  itemHTML = portfolioItems
    .map(
      (item) =>
        `<div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${item.id}">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="img/portfolio/${item.id}-thumbnail.jpg" alt="" />
      </a>
      <div class="portfolio-caption">
        <h4>${item.name}</h4>
        <p class="text-muted">${item.title}</p>
      </div>
    </div>
    `
      // need to link modals
    )
    .join('')

  strHTMLs = `
  <div class="row">
      <div class="col-lg-12 text-center">
          <h2 class="section-heading">Portfolio</h2>
           <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
  </div>
  <div class="row">${itemHTML}</div>
  `
  $('#portfolio').html(strHTMLs)
}

function createModals() {
  var portfolioItems = getPortfolioItems()
  var strHTMLs
  strHTMLs = portfolioItems
    .map(
      (item) => `
    <div class="portfolio-modal modal fade" id="portfolioModal${item.id}" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${item.name}</h2>
                  <p class="item-intro text-muted">${item.title}</p>
                  <img class="img-fluid d-block mx-auto" src="img/portfolio/${item.id}-full.jpg" alt="" />
                  <p>
                  ${item.desc}
                  </p>
                  <ul class="list-inline">
                    <li>Date: ${item.publishedAt}</li>
                    <li>Client: Threads</li>
                    <li>Category: Illustration</li>
                  </ul>
                  <button onclick="openProjWindow('${item.name}')" class="btn btn-success" type="button">
                    Check it Out
                  </button>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
    )
    .join('')

  $('.modal-box').html(strHTMLs)
}

function openProjWindow(id) {
  var newUrl = `https://eilon-salant.github.io/${id}/`

  window.open(`${newUrl}`, '_blank')
}

function openEmailWindow() {
  var email = $('#email').val()
  var subject = $('#subject').val()
  var message = $('#message-body').val()
  if (!email) return
  var newUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${message}`

  window.open(`${newUrl}`, '_blank')
}
