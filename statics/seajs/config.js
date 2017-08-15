seajs.config({
	base: '../statics/src/js',
	alias: {
    	'jquery': 'lib/jquery/jquery'

  	},
  	preload: ['jquery'],
  	map: [
    	[ /^(.*\.(?:css|js))(.*)$/i, '$1?seaversion' ]
  	]
});