module.exports = function(grunt) {
     
	var baseUrl = '../code/web.jwn.com/ROOT/';

    //config
    var config = {

    	snail: {
    		views: baseUrl + 'views'
    	}

    }

    //now-version
    var nowTime = new Date().getTime();

    var domain = grunt.file.readJSON('./domain.json');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
	    replace: {
	    	'替换全局css-left': {
			    options: {
			      patterns: [
			        {
			          match: /\<\%\@include\s+file=.+include\/globalCss\.jsp\"\%\>/i,
			          replacement: "<link rel=\"stylesheet\" href=\"\<%=path\>statics\/build\/css\/lib\/snail.css\">",
			          expression: true
			        },
			        {
			          match: /\/statics\/src/i,
			          replacement: '/statics/build',
			          expression: true
			        }
			      ],
			      usePrefix: false,
			    },
			    files: [
			      {	
			      	expand: true,
			      	cwd: config.snail.views + '/main',
			      	src: '**/*.jsp', 
			      	dest: config.snail.views + '/main'
			      }
			    ]
		  	},
		  	'替换全局css-right': {
			    options: {
			      patterns: [
			        {
			          match: /path\>/i,
			          replacement: "path %>",
			          expression: true
			        }
			      ],
			      usePrefix: false,
			    },
			    files: [
			      {	
			      	expand: true,
			      	cwd: config.snail.views + '/main',
			      	src: '**/*.jsp', 
			      	dest: config.snail.views + '/main'
			      }
			    ]
		  	},
		  	'生成css版本号': {
		  		options: {
			      patterns: [
			        {
			          match: /\.css/g,
			          replacement: '.css?v=' + nowTime
			        }
			      ],
			      usePrefix: false,
			    },
			    files: [
			      {	
			      	expand: true,
			      	cwd: config.snail.views + '/main',
			      	src: '**/*.jsp', 
			      	dest: config.snail.views + '/main'
			      }
			    ]
		  	},
		  	'替换页面其他引入的css': {
		  		options: {
			      patterns: [
			        {
			          match: /statics\/src/gi,
			          replacement: 'statics/build'
			        }
			      ],
			      usePrefix: false,
			    },
			    files: [
			      {	
			      	expand: true,
			      	cwd: config.snail.views + '/main',
			      	src: '**/*.jsp', 
			      	dest: config.snail.views + '/main'
			      }
			    ]
		  	}, //<%=path %>
		  	'替换jsp页面静态文件域名': {
		  		options: {
			      patterns: [
			        {
			          match: /\<\%\=\s?path\s?\%\>/gi,
			          replacement: domain.url + '/'
			        }
			      ],
			      usePrefix: false,
			    },
			    files: [
			      {	
			      	expand: true,
			      	cwd: config.snail.views + '/',
			      	src: '**/*.jsp', 
			      	dest: config.snail.views
			      }
			    ]
		  	}
	    }
		      
    });

    grunt.loadNpmTasks("grunt-replace");

    /* jsp-task */
    grunt.registerTask('default', [
    	'replace:替换全局css-left',
    	'replace:替换全局css-right',
    	'replace:替换页面其他引入的css',
    	'replace:生成css版本号',
    	'replace:替换jsp页面静态文件域名'
    ]);

    /* 测试环境替换 */
    grunt.registerTask('test', [
    	'replace:替换jsp页面静态文件域名'
    ]);

};

