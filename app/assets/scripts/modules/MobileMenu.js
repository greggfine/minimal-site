import $ from 'jquery';

class MobileMenu {
	constructor() {
		this.siteHeader = $(".header");
		this.menuIcon = $(".header__menu-icon");
		this.menuContent = $(".header__menu");
		this.events();
	}

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.siteHeader.toggleClass("header--is-expanded");
		this.menuContent.toggleClass("header__menu--is-visible");
		this.menuIcon.toggleClass("header__menu-icon--close-x");
	}
}

export default MobileMenu;