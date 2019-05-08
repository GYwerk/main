$(function(){
    var record = echarts.init(document.getElementById('record'));
    var month = 4;
    var day = 11;
    var wrongCount = [4,6,3,5,6,4,3,7,3,4];
    var passCount = [20,28,15,23,30,22,18,40,24,31];
    var submitCount = [24,34,18,28,36,26,21,47,27,35];
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
            "text": "刷题记录",
            x: "4%",
            textStyle: {
                color: '#b0252a',
                fontSize: '30'
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
                fontSize: 18
            },
            "data": ['错题数', '通过数', '提交数']
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
                color: "#b0252a",
            },
            borderColor: "#b0252a"


        }, {
            "type": "inside",
            "show": true,
            "height": 15,
            "start": 1,
            "end": 35
        }],
        "series": [{
                "name": "错题数",
                "type": "bar",
                "stack": "总量",
                "barMaxWidth": 35,
                "barGap": "10%",
                "itemStyle": {
                    "normal": {
                        "color": "rgba(255,144,128,1)",
                        "label": {
                            "show": true,
                            "textStyle": {
                                "color": "#fff",
                            },
                            "position": "insideTop",
                            formatter: function(p) {
                                return p.value > 0 ? (p.value) : '';
                            }
                        }
                    }
                },
                "data": wrongCount
            },

            {
                "name": "通过数",
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
                "data": passCount
            }, {
                "name": "提交数",
                "type": "line",
                "stack": "总量",
                symbolSize: 10,
                symbol: 'circle',
                "itemStyle": {
                    "normal": {
                        "color": "rgba(176,37,42,1)",
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
                "data": submitCount
            },
        
        ]
    };
    record.setOption(option);
})