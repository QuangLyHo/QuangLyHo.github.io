const moreBtn = document.getElementById('more-btn')

function viewMoreClick() {
    moreBtn.classList.toggle('hidden')

    document.getElementById('feed').innerHTML +=
        `
            <article class="article">
                <img class="article-img" src="./images/blog-image-04.png" />
                <h2 class="article-title">Blog three</h2>
                <p class="article-date">july 23, 2022</p>
                <p class="article-body">I'm excited to start a new learningjourney as a Scrimba Bootcamp student! After several months oflearning in the Frontend Developer Career Path.</p>
            </article>

            <article class="article">
                <img class="article-img" src="./images/blog-image-05.png" />
                <h2 class="article-title">Blog four</h2>
                <p class="article-date">july 23, 2022</p>
                <p class="article-body">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </article>

            <article class="article">
                <img class="article-img" src="./images/blog-image-06.png" />
                <h2 class="article-title">Blog five</h2>
                <p class="article-date">july 23, 2022</p>
                <p class="article-body">I'm excited to start a new learning journey as a Scrimba Bootcamp student! After several months of learning in the Frontend Developer Career Path.</p>
            </article>
        `
}

moreBtn.addEventListener('click', viewMoreClick)