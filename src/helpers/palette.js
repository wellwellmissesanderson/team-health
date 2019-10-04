// https://www.materialui.co/colors
const BG_COLOURS = [
    '#ef5350',
    // '#EC407A',
    '#AB47BC',
    // '#7E57C2',
    '#5C6BC0',
    // '#42A5F5',
    '#29B6F6',
    '#26C6DA',
    '#26A69A',
    // '#66BB6A',
    '#9CCC65',
    // '#D4E157',
    // '#FFEE58',
    '#FFCA28',
    '#FFA726',
    '#FF7043',
    '#8D6E63',
    '#BDBDBD',
    '#78909C',
];

export const darken = COLOUR_LIST => COLOUR_LIST.map(color => colorLuminance(color, .5));

const colorLuminance = (hex, lum) => {
	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

export default BG_COLOURS;