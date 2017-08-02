import verge from 'verge';

const utils = {
  isMobile: function() {
		let isMobile = false;

		if (verge.viewportW() <= 767) {
			isMobile = true
		}

		return isMobile;
	}
}

export default utils;