$(function(){
    var learningrecord = echarts.init(document.getElementById('learningrecord'));
    var month = 4;
    var day = 11;
    var watchCount = [20,28,15,23,30,22,18,40,24,31];
    var xData = function() {
        var data = [];
        for (var i = 1; i < day; i++) {
            data.push(month + "月" + i + "日");
        }
        return data;
    }();

    option = {
        backgroundColor: "#ffffff",
        "title": {
            "text": "观看记录",
            x: "4%",
            textStyle: {
                color: '#b0252a',
                fontSize: '30'
            },
            subtextStyle: {
                color: '#90979c',
                fontSize: '16',

            },
        },
        toolbox: {
            show : true,
            feature : {
                magicType : {
                    show: true, 
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            width: '20%',
                            height: '30%',
                            itemStyle : {
                                normal : {
                                    label : {
                                        formatter : function (params){
                                            return 'other\n' + params.value + '%\n'
                                        },
                                        textStyle: {
                                            baseline : 'middle'
                                        }
                                    }
                                },
                            } 
                        }
                    }
                },
                saveAsImage : {show: true}
            }
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow",
                textStyle: {
                    color: "#b0252a"
                }

            },
        },
        "grid": {
            "borderWidth": 0,
            "top": 110,
            "bottom": 95,
            textStyle: {
                color: "#fff"
            }
        },
        "legend": {
            x: '4%',
            top: '11%',
            textStyle: {
                color: '#90979c',
                fontSize: 14
            },
            "data": ['视频数']
        },


        "calculable": true,
        "xAxis": [{
            "type": "category",
            "axisLine": {
                lineStyle: {
                    color: '#b0252a'
                }
            },
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "splitArea": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,

            },
            "data": xData,
        }],
        "yAxis": [{
            "type": "value",
            "splitLine": {
                "show": false
            },
            "axisLine": {
                lineStyle: {
                    color: '#b0252a'
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "interval": 0,

            },
            "splitArea": {
                "show": false
            },

        }],
        "dataZoom": [{
            "show": true,
            "height": 30,
            "xAxisIndex": [
                0
            ],
            bottom: 30,
            "start": 10,
            "end": 80,
            handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
            handleSize: '110%',
            handleStyle: {
                color: "#b0252a",

            },
            textStyle: {
                color: "#b0252a"
            },
            borderColor: "#b0252a"
        }, {
            "type": "inside",
            "show": true,
            "height": 15,
            "start": 1,
            "end": 35
        }],
        "series": [
            {
                "name": "视频数",
                "type": "bar",
                "stack": "总量",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(0,191,183,1)",
                        "barBorderRadius": 0,
                        "label": {
                            "show": true,
                            "position": "top",
                            formatter: function(p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": watchCount
            },
        ]
    };
    learningrecord.setOption(option);




    var about = echarts.init(document.getElementById('about'));
    var point = 60;
    var chapter = 90;
    var teacher = 10;
    var allteacher = 100;
    var labelTop = {
        normal: {
            label: {
                show: true,
                position: 'center',
                formatter: '{b}',
                textStyle: {
                    baseline: 'bottom'
                }
            },
            labelLine: {
                show: false
            }
        }
    };
    var labelFromatter = {
        normal: {
            label: {
                formatter: function(params) {
                    return 100 - params.value + '%'
                },
                textStyle: {
                    baseline: 'top',
                    color: '#b0252a'
                },
            }
        },
    };
    var labelFromatter2 = {
        normal: {
            label: {
                formatter: function(params) {
                    return allteacher-params.value + '位'
                },
                textStyle: {
                    baseline: 'top',
                    color: '#b0252a'
                },
            }
        },
    };

    var labelBottom = {
        normal: {
            color: '#ccc',
            label: {
                show: true,
                position: 'center'
            },
            labelLine: {
                show: false
            }
        },
    };
    var radius = [40, 55];
    option = {
        backgroundColor: '#ffffff',
        legend: {
            x: 'center',
            y: 'center',
            data: [
                '老师', '知识点', '章节'
            ]
        },
        title: {
            "text": '视频共涉及',
            x: "11%",
            textStyle: {
                fontSize: 30,
                color: '#b0252a'
            },
        },
        toolbox: {
            show: true,
            feature: {
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            width: '20%',
                            height: '30%',
                        }
                    }
                },
                saveAsImage: {
                    show: true
                }
            }
        },
        series: [{
                type: 'pie',
                center: ['25%', '30%'],
                radius: radius,
                x: '25%', 
                itemStyle: labelFromatter2,

                data: [{
                    value: allteacher-teacher,
                    itemStyle: labelBottom
                }, {
                    name: '老师',
                    value: teacher,
                    itemStyle: labelTop
                }]
            }, {
                type: 'pie',
                center: ['50%', '30%'],
                radius: radius,
                x: '50%', 
                itemStyle: labelFromatter,
                data: [{
                    value: 100-point,
                    itemStyle: labelBottom
                }, {
                    name: '知识点',
                    value: point,
                    itemStyle: labelTop
                }]
            }, {
                type: 'pie',
                center: ['75%', '30%'],
                radius: radius,
                x: '75%', 
                itemStyle: labelFromatter,
                data: [{
                    value: 100-chapter,
                    itemStyle: labelBottom
                }, {
                    name: '章节',
                    value: chapter,
                    itemStyle: labelTop
                }]
            },

        ]
    };

    about.setOption(option);
})