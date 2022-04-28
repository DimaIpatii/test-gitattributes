import {HOMEPAGE_URL, GALLERY_URL, FORM_URL, SHOP_URL} from './shared/variables';

const homeLink = document.createElement("a");
homeLink.setAttribute("href", HOMEPAGE_URL);

const galleryLink = document.createElement("a");
galleryLink.setAttribute("href", GALLERY_URL);

const formLink = document.createElement("a");
formLink.setAttribute("href", FORM_URL);

const shopLink = document.createElement("a");
shopLink.setAttribute("href", SHOP_URL);
