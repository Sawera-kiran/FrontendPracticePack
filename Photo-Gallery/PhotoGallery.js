class PhotoGallery {
  constructor() {
    this.API_KEY = '53GqjuP0bnx1xITvRTXPx9OTPWpNZo12KTHSUNh6x5mZBN2fJHJ1LubX';
    this.galleryDIv = document.querySelector('.gallery');
    this.searchForm = document.querySelector('#search-form');
    this.loadMore = document.querySelector('.load-more');
    this.logo = document.querySelector('.logo')
    this.pageIndex = 1;
    this.searchValueGlobal = '';
    this.eventHandle();
  }
  eventHandle() {
    document.addEventListener('DOMContentLoaded', () => {
      this.getImg(1);
    });
    this.searchForm.addEventListener('submit', (e) => {
      this.pageIndex = 1;
      this.getSearchedImages(e);
    });
    this.loadMore.addEventListener('click', (e) => {
      this.loadMoreImages(e);
    })
    this.logo.addEventListener('click', () => {
      this.pageIndex = 1;
      this.galleryDIv.innerHTML = '';
      this.getImg(this.pageIndex);
    })
  }
  async getImg(index) {
    this.loadMore.setAttribute('data-img', 'curated');
    this.showLoading();
    const baseURL = `https://api.pexels.com/v1/curated?page=${index}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos)
    this.hideLoading();
  }
  async fetchImages(baseURL) {
    const response = await fetch(baseURL, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: this.API_KEY
      }
    });
    const data = await response.json();
    return data;
  }
  GenerateHTML(photos) {
    photos.forEach(photo => {
      const item = document.createElement('div');
      item.classList.add('item');
      item.innerHTML = `
      <a href='${photo.src.original}' target="_blank">
        <img src="${photo.src.medium}">
        <h3>${photo.photographer}</h3>
      </a>
      `;
      this.galleryDIv.appendChild(item)
    })
  }

  async getSearchedImages(e) {
    e.preventDefault();
    this.pageIndex = 1;

    const input = e.target.querySelector('input');
    const searchValue = input.value.trim();
    const errorDiv = document.querySelector('.error-message');

    errorDiv.classList.remove('show');

    if (searchValue === '') {
      errorDiv.classList.add('show');
      input.classList.add('error');

      setTimeout(() => {
        input.classList.remove('error');
      }, 500);
      setTimeout(() => {
        errorDiv.classList.remove('show');
      }, 1000);

      return;
    }

    this.galleryDIv.innerHTML = '';
    input.classList.remove('error');
    this.searchValueGlobal = searchValue;
    this.loadMore.setAttribute('data-img', 'search');
    this.showLoading();
    const baseURL = `https://api.pexels.com/v1/search?query=${searchValue}&page=1&per_page=12`;
    const data = await this.fetchImages(baseURL);

    if (data.photos.length === 0) {
      this.showLoading('no results found for your search');
      setTimeout(() => {
        this.hideLoading();
        this.getImg(1);
      }, 2000);
    } else {
      this.GenerateHTML(data.photos);
      this.hideLoading();
    }

    e.target.reset();
  }

  async getMoreSearchedImages(index) {
    this.showLoading();
    const baseURL = `https://api.pexels.com/v1/search?query=${this.searchValueGlobal}&page=${index}&per_page=12`
    const data = await this.fetchImages(baseURL);
    console.log(data)
    if (data.photos.length === 0) {
      this.showLoading('No results found.');
    } else {
      this.GenerateHTML(data.photos);
      this.hideLoading();
    }

  }
  loadMoreImages(e) {
    let index = ++this.pageIndex;
    const loadMoreData = e.target.getAttribute('data-img');
    if (loadMoreData === 'curated') {

      this.getImg(index)
    } else {

      this.getMoreSearchedImages(index);
    }
  }

  showLoading(message = 'Loading...') {
    const loadingDiv = document.querySelector('.loading-text');
    if (loadingDiv) {
      loadingDiv.textContent = message;
      loadingDiv.style.display = 'block';
    }
    this.loadMore.style.display = 'none';
  }


  hideLoading() {
    const loadingDiv = document.querySelector('.loading-text');
    loadingDiv.style.display = 'none';
    loadingDiv.textContent = '';
    this.loadMore.style.display = 'inline-block';
  }

}

const gallery = new PhotoGallery;
