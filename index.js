import { data } from '/data.js'
import { mainPostData } from '/data.js'

const toRenderDiv = document.getElementById('to-render-div')
const viewMoreLink = document.getElementById('view-more')
const homeLink = document.getElementById('home')
const aboutMeLink = document.getElementById('about-me')
const recentPosts = document.getElementById('recent-posts')
const openedMainPost = document.getElementById('opened-main-post')
const mainPost = document.getElementById('main-post')
const aboutMe = document.getElementById('opened-about-me')

viewMoreLink.addEventListener('click', function() {
    document.querySelectorAll('.other-posts').forEach(item => {
        item.classList.remove('hidden')
    })
    viewMoreLink.classList.add('hidden')
})

document.addEventListener('click', function(e) {
    if (e.target.id === 'home' || e.target.id === 'logo' || e.target.id === 'title') {
        renderMainPage()
        openedMainPost.classList.remove('hidden')
        mainPost.classList.remove('hidden')
        viewMoreLink.classList.remove('hidden')
        mainPost.style.padding = '0 1.25em'
        
        openedMainPost.classList.add('hidden')
        recentPosts.classList.add('hidden')
        openedMainPost.classList.add('hidden')
        mainPost.classList.add('main-post')
        aboutMe.classList.add('hidden')
    }
})

aboutMeLink.addEventListener('click', function() {
    toRenderDiv.innerHTML = getFirstFeed()
    aboutMe.classList.remove('hidden')
    recentPosts.classList.remove('hidden')
    
    viewMoreLink.classList.add('hidden')
    mainPost.classList.add('hidden')
    openedMainPost.classList.add('hidden')
    mainPost.classList.remove('reverse')
})

mainPost.addEventListener('click', function() {
    toRenderDiv.innerHTML = getFirstFeed()
    openedMainPost.classList.remove('hidden')
    mainPost.classList.remove('hidden')
    mainPost.classList.remove('reverse')
    recentPosts.classList.remove('hidden')
    mainPost.style.padding = '0 4em'
    
    aboutMe.classList.add('hidden')
    viewMoreLink.classList.add('hidden')
})


function getFirstFeed() {
    let feed = ''
    
    for (let i = 0; i < 6; i++) {
        feed += `<section class="other-posts ${data[i].hiddenClass}">
                <img src="${data[i].img}" class="blog-img">
                <p class="date">${data[i].date}</p>
                <h2 class="post-title">${data[i].title}</h2>
                <p class="text">${data[i].summary}</p>
            </section>`
    }
    return feed
}

function renderMainPage() {
    mainPost.classList.remove('hidden')
    mainPost.classList.add('reverse')
    toRenderDiv.innerHTML = getFirstFeed()
}


window.onload = renderMainPage()