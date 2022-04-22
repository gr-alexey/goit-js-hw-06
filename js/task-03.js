const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('ul');

const createGalleryImages = options => {
  return options.map(option => {
    galleryListEl.classList.add('basic')
    const galleryListItem = document.createElement('li');
    galleryListItem.classList.add('list-item')
    const listItemImage = document.createElement('img');
    listItemImage.src = option.url;
    listItemImage.alt = option.alt;
    listItemImage.width = 320;
    listItemImage.height = 240;
    galleryListItem.appendChild(listItemImage);
    return galleryListItem;
  })
}
const galleryImagesList = createGalleryImages(images);
galleryListEl.append(...galleryImagesList);


