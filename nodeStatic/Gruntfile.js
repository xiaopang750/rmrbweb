module.exports = function(grunt) {
     
    //config
    var baseUrl = '../../www/static/';

    var config = {

    	snail: {
    		src: baseUrl + 'statics/src',
    		dest: baseUrl + 'statics/build'
    	}

    }

    //静态域名配置
    var domain = grunt.file.readJSON('./domain.json');

    //now-version
    var nowTime = new Date().getTime();

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
        	'复制压缩的inpirCss到lib目录': {
        		src: 'snail.css',
        		dest: config.snail.dest + '/css/lib/snail.css'

        	},
        	'复制concatTransport到buildJS': {
        		expand: true,
        		cwd:'concatTransport',
        		src: '**/*.js',
        		dest: config.snail.dest + '/js'
        	}
        },
	    transport: {
	    	options: {
	    		debug: false
	    	},
	    	'seajs转换': {
	    		expand : true,
                cwd: config.snail.src + '/js',  
                src: '**/*.js',  
                dest: 'seaTransport'
	    	}
	    },
	    concat_cmd: {
	    	options: {  
                include: 'all' 
            },
	    	'seajs合并': {
	    		expand : true,
                cwd: 'seaTransport',  
                src: '**/*.js',  
                dest: 'concatTransport'
	    	}
	    },
	    concat: {
	    	'cssLib合并': {
	    		src: config.snail.src + '/css/lib/**/*.css',
	    		dest: 'snail_temp.css'
	    	}
	    },
	    uglify: {
	    	options: {
                banner: '/*! company <%= pkg.name %> version <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
	    	'压缩合并后的seajs': {
	    		expand: true,
                cwd: config.snail.dest + '/js',
                src: '**/*.js',
                dest: config.snail.dest + '/js'
	    	}
	    },
	    cssmin: {
	    	options: {
                banner: '/*! company <%= pkg.name %> version <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
	    	'css压缩': {
	    		expand: true,
	    		cwd : config.snail.src + '/css',
                src: ['**/*.css'],
                dest: config.snail.dest + '/css'
	    	},
	    	'snailcss压缩': {
	    		src:'snail_temp.css',
	    		dest: 'snail.css'
	    	}
	    },
	    clean: {
	    	'删除两个合并的tempCss': [
	    		'snail.css',
	    		'snail_temp.css'
	    	],
	    	'删除seajs过渡文件': [
		    	'seaTransport',
		    	'concatTransport'
	    	],
	    	'删除模板html文件': [
	    		config.snail.dest + '/views/tpl'
	    	]
	    },
	    replace: {
		  	'替换config': {
		  		options: {
			      patterns: [
			        {
			          match: '/statics/src/js',
			          replacement: '/statics/build/js'
			        }
			      ],
			      usePrefix: false,
			    },
			    files: [
			      {	
			      	expand: true, 
			      	flatten: true,
			      	src: baseUrl + 'statics/seajs/config.js', 
			      	dest: baseUrl + 'statics/seajs'
			      }
			    ]
		  	},
		  	'生成js版本号': {
		  		options: {
			      patterns: [
			        {
			          match: 'seaversion',
			          replacement: nowTime
			        }
			      ],
			      usePrefix: false,
			    },
			    files: [
			      {	
			      	expand: true, 
			      	flatten: true,
			      	src: baseUrl + 'statics/seajs/config.js', 
			      	dest: baseUrl + 'statics/seajs'
			      }
			    ]
		  	},
		  	'替换configjs的baseUrl': {
		  		options: {
			      patterns: [
			        {
			          match: /base\:\s\'\.\.\//,
			          replacement: 'base: \'' + domain.url + '/'
			        }
			      ],
			      usePrefix: false,
			    },
			    files: [
			      {	
			      	expand: true, 
			      	flatten: true,
			      	src: baseUrl + 'statics/seajs/config.js', 
			      	dest: baseUrl + 'statics/seajs'
			      }
			    ]
		  	},
		  	'替换接口环境': {
		  		options: {
			      patterns: [
			        {
			          match: '/rmrbweb/',
			          replacement: '/'
			        },
			        {
			          match: '../statics/src/css/',
			          replacement: domain.url + '/statics/build/css/'
			        },
			        {
			          match: '../statics/assets/',
			          replacement: domain.url + '/statics/assets/'
			        }
			      ],
			      usePrefix: false,
			    },
			    files: [
			      {	
			      	expand: true, 
			      	flatten: true,
			      	src:  'seaTransport/driver/R.js', 
			      	dest: 'seaTransport/driver'
			      }
			    ]
		  	},
		  	'替换测试环境Rjs': {
		    	options: {
			      patterns: [
			        {
			          match: '/rmrbweb/',
			          replacement: '/'
			        },
			        {
			          match: '../statics/src/css/',
			          replacement: domain.url + '/statics/src/css/'
			        },
			        {
			          match: '../statics/assets/',
			          replacement: domain.url + '/statics/assets/'
			        }
			      ],
			      usePrefix: false,
			    },
			    files: [
			      {	
			      	expand: true, 
			      	flatten: true,
			      	src:  config.snail.src + '/js/driver/R.js', 
			      	dest: config.snail.src + '/js/driver'
			      }
			    ]
		    }
	    },
	    bom: {
          removeBom: {
            src: '../statics/src/views/**/*.jsp',
            options: {
              remove: true
            }
          }
        }
		      
    });


    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-cmd-transport");
    grunt.loadNpmTasks("grunt-cmd-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-replace");
    grunt.loadNpmTasks('grunt-byte-order-mark');
   /* grunt.loadNpmTasks('grunt-contrib-htmlmin');*/

   	/* static-task */
    grunt.registerTask('default', [
    	'cssmin:css压缩',
    	'concat:cssLib合并',
    	'cssmin:snailcss压缩',
    	'copy:复制压缩的inpirCss到lib目录',
    	'clean:删除两个合并的tempCss',
    	'transport:seajs转换',
    	'replace:替换接口环境',
    	'concat_cmd:seajs合并',
    	'copy:复制concatTransport到buildJS',
    	'clean:删除seajs过渡文件',
    	'replace:替换config',
    	'replace:生成js版本号',
    	'replace:替换configjs的baseUrl'
    ]);


    grunt.registerTask('yasuo', [
    	'uglify:压缩合并后的seajs'
    ]);

    /* 测试环境部署 */
    grunt.registerTask('test', [
    	'replace:替换测试环境Rjs',
    	'replace:替换configjs的baseUrl'
    ]);

};

