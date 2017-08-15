/**
 *description:渠道数据
 *author:fanwei
 *date:2014/08/03
 */
define(function(require, exports, module){
	
	var global = require("../../driver/global");
	require('../../widget/highcharts/highcharts');


	var pageIndex = R.Class.create(R.until, {

		initialize: function() {
			
            this.oData = JSON.parse($('[data]').val());
            
            console.log(this.oData);
            var data1 = this.getWayData();
            var dataType2 = this.getWeekData();

			//chart1
			$('[chart-1]').highcharts({
                chart: {
                    type: 'pie',
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                colors:[
                    '#7cb5ec',
                    '#90ed7d',
                    '#434348'
                ],
                title: {
                    text: ''
                },
                tooltip: {
                    pointFormat: '{name}:{point.percentage:.1f}%'
                },
                credits: {
                    enabled: false
                },
                series: [{
                    data: data1
                }]
            });


            //chart2
            $('[chart-2]').highcharts({
                chart: {
                    type: 'line',
                    backgroundColor: 'rgba(0,0,0,0)'
                },
                credits: {
                    enabled: false
                },
                title: {
                    text: ''
                },
                xAxis: {
                    categories: dataType2.x,
                    title:{
                       text:''
                    }
                },
                yAxis: {
                    /*categories: dataType2.y,*/
                    title:{
                       text:'当日总各渠道总关注数'
                    }  
                },
                tooltip: {
                    valueSuffix: '人'
                },
                plotOptions: {
                    area: {
                        pointStart: 1940,
                        marker: {
                            enabled: false,
                            symbol: 'circle',
                            radius: 2,
                            states: {
                                hover: {
                                    enabled: true
                                }
                            }
                        }
                    }
                },
                series: dataType2.data
            });

			
            console.log(dataType2.y);

            console.log(dataType2.z);

			//chart3
			$('[chart-3]').highcharts({
                    credits: {
                        enabled: false
                    },
                    chart: {
                        zoomType: 'xy',
                        backgroundColor: 'rgba(0,0,0,0)'
                    },
                    title: {
                        text: ''
                    },
                    subtitle: {
                        text: ''
                    },
                    xAxis: [{
                        categories: dataType2.x
                    }],
                    yAxis: [
                        { // Secondary yAxis
                            title: {
                                text: '关注数',
                                style: {
                                    color: '#399de9'
                                }
                            },
                            labels: {
                                style: {
                                    color: '#399de9'
                                }
                            },
                            /*categories: dataType2.y,*/
                            opposite: true
                        },
                        { // Primary yAxis
                            title: {
                                text: '活动数量',
                                style: {
                                    color: '#feaf46'
                                }
                            },
                            /*categories: dataType2.z,*/
                            labels: {
                                style: {
                                    color: '#feaf46'
                                }
                            }
                        }
                    ],
                    tooltip: {
                        shared: true
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'left',
                        x: 120,
                        verticalAlign: 'top',
                        y: 100,
                        floating: true,
                        backgroundColor: '#FFFFFF'
                    },
                    series: [{
                        name: '新增会员',
                        color: '#399de9',
                        type: 'area',
                        yAxis: 0,
                        data: dataType2.y,
                        tooltip: {
                            valueSuffix: '人'
                        }

                    }, {
                        name: '活动数量',
                        color: '#feaf46',
                        type: 'spline',
                        yAxis: 1,
                        data: dataType2.z,
                        tooltip: {
                            valueSuffix: '个'
                        }
                    }]
                });

		},
        changeWay: function(str) {

           if(str == '001') {    
                return '微信';
            } else if( str == '002' ) {
                return '新浪微博';
            } else if( str == '000' ) {
                return '其他';
            } 

        },
        getWayData: function() {

            //渠道来源数据
            var i,
                num,
                arr,
                result,
                str;

            num = this.oData.length;
            result = [];
            
            for (i in this.oData.chanelMap) {

                arr = [];
                str = this.changeWay(i);
                arr.push(str);
                arr.push(this.oData.chanelMap[i]);
                result.push(arr);

            }

            return result;

        },
        getWeekData: function() {

            //一周内数据
            var i,
                k,
                j,
                m,
                n,
                u,
                X,
                Y,
                json,
                arr,
                result;

            X = []; //日期
            Y = [];  //总关注数
            Z = [];  //总活动数
            arr = [];
            result = [];

            for (i = this.oData.dayMap.length - 1; i > -1; i--) {
              
                X.push(this.oData.dayMap[i].time); 
                Y.push(this.oData.dayMap[i].num);

            } 

            for (u = this.oData.dayActivityMap.length - 1; u > -1; u--) {
              
                Z.push(this.oData.dayActivityMap[u].num); 

            }   


            for (m in this.oData.chanelMap) {
                json = {};
                json['name'] = this.changeWay(m);
                json['data'] = [];
                arr.push(json);
            }

            var data,
               num;

            data = this.oData.dayChanelMap;
            num = data.length;

            for (k = num - 1; k > -1; k--) {

                for (n in data[k].data) {

                   for (j=0; j<arr.length; j++) {

                        if(this.changeWay(n) == arr[j].name) {
                            arr[j].data.push(data[k].data[n]);
                        }

                    } 

                }

            }

            return {
                x: X,
                y: Y,
                z: Z,
                data: arr
            }
        }

	});

	var oPageIndex = new pageIndex();
	
});