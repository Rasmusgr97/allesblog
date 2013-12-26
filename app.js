requirejs.config({

	baseUrl: '//cdnjs.cloudflare.com/ajax/libs/',

	paths: {

		'jquery': 'jquery/2.0.3/jquery.min.js',
		'jquery-color': 'jquery-color/2.1.2/jquery.color.min'
		'prefixfree': 'prefixfree/1.0.7/prefixfree.min',
		'modernizr': 'modernizr/2.7.1/modernizr.min'

	}

});

requirejs(['jquery', 'prefixfree'], function() {
	

});