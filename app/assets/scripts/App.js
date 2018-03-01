import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.tutorials__item'), '85%');
new RevealOnScroll($('.video__wrapper'), '70%');
var stickyHeader = new StickyHeader();