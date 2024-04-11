function menuBtn() {
    var icon = document.getElementById("menuBtnIcon");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-xmark");
}

function moviesShowMoreLatest(showMoreBtn) {
    if (showMoreBtn.classList.contains("active")) {
        showMoreBtn.classList.toggle("active");
        showMoreBtn.innerHTML = "Show More <i class='fa-solid fa-angles-down ms-1'></i>";
        document.getElementById("moreMoviesLatest").classList.toggle("d-none");
        showMoreBtn.href = "#moviesLatest";

    } else {
        showMoreBtn.classList.toggle("active");
        showMoreBtn.innerHTML = "Show Less <i class='fa-solid fa-angles-up ms-1'></i>";
        document.getElementById("moreMoviesLatest").classList.toggle("d-none");
        showMoreBtn.href = "#moreMoviesLatest";
    }
}

function moviesShowMorePopular(showMoreBtn) {
    if (showMoreBtn.classList.contains("active")) {
        showMoreBtn.classList.toggle("active");
        showMoreBtn.innerHTML = "Show More <i class='fa-solid fa-angles-down ms-1'></i>";
        document.getElementById("moreMoviesPopular").classList.toggle("d-none");
        showMoreBtn.href = "#moviesPopular";

    } else {
        showMoreBtn.classList.toggle("active");
        showMoreBtn.innerHTML = "Show Less <i class='fa-solid fa-angles-up ms-1'></i>";
        document.getElementById("moreMoviesPopular").classList.toggle("d-none");
        showMoreBtn.href = "#moreMoviesPopular";
    }
}

function tvShowMoreLatest(showMoreBtn) {
    if (showMoreBtn.classList.contains("active")) {
        showMoreBtn.classList.toggle("active");
        showMoreBtn.innerHTML = "Show More <i class='fa-solid fa-angles-down ms-1'></i>";
        document.getElementById("moreTvLatest").classList.toggle("d-none");
        showMoreBtn.href = "#tvLatest";

    } else {
        showMoreBtn.classList.toggle("active");
        showMoreBtn.innerHTML = "Show Less <i class='fa-solid fa-angles-up ms-1'></i>";
        document.getElementById("moreTvLatest").classList.toggle("d-none");
        showMoreBtn.href = "#moreTvLatest";
    }
}

function tvShowMorePopular(showMoreBtn) {
    if (showMoreBtn.classList.contains("active")) {
        showMoreBtn.classList.toggle("active");
        showMoreBtn.innerHTML = "Show More <i class='fa-solid fa-angles-down ms-1'></i>";
        document.getElementById("moreTvPopular").classList.toggle("d-none");
        showMoreBtn.href = "#tvPopular";

    } else {
        showMoreBtn.classList.toggle("active");
        showMoreBtn.innerHTML = "Show Less <i class='fa-solid fa-angles-up ms-1'></i>";
        document.getElementById("moreTvPopular").classList.toggle("d-none");
        showMoreBtn.href = "#moreTvPopular";
    }
}