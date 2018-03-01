import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.tutorials__item'), '85%');
new RevealOnScroll($('.video__wrapper'), '70%');