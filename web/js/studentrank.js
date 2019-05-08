$(function () {
    var $btn = $('#studentbtn input');
    var $div = $('#studentcon div');
    $btn.click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        $('#studentcon .item').eq($(this).index()).addClass('active').siblings('.item').removeClass('active');
    })
})

$(function(){
    var studentPassDayRank = echarts.init(document.getElementById('studentPassDayRank'));
    var myDayRank = 320;
    var allStudent = 470;
    var passDayCount = [76, 70, 67, 60,55,53,52,48, 44, 40, 40, 33, 28, 27, 25, 23, 18, 18, 16, 14];
    var studentDay = ["胡博", "郭姝睿", "刘哲",
                "于浩", "白格乐", "吴淞", "姚鑫鹏",
                "马迎杰", "刘以达", "夏浩", "李心智",
                "王佳龙", "常庚辰", "吕夏禹", "张坤",
                "刘子琦", "单宏伟", "何安宇", "吴剑飞",
                "谢时同"];
    option = {
        title:{text:"今日通过数Top10",x: '2%', y: '5%',textStyle:{color:"#b0252a",fontSize:"30"}},
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
        color: ['#6ca6cd'],
        grid: {
            left: '2%',
            right: '10%',
            top: '20%',
            bottom: '18%',
            containLabel: true
        },
        yAxis: {
            data: studentDay,
            axisTick: {
                show: false
            },

        },

        xAxis: [{
            axisTick: {
                show: false
            },
            type: 'value',
            splitNumber: 5,
            axisLabel: {
                formatter: '{value}'
            }
        }],
        series: [{
            name: '销量',
            type: 'bar',
            barWidth: '55%',
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}',
                    textStyle: {
                        color: 'black'
                    }
                }
            },
            data: passDayCount.reverse()
        },
        {
            type: 'pie',
            name: '饼图',
            center: ['90%', '10%'],
            radius: ['15%', '20%'],
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            label: {
                normal: {
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    color: '#b0252a',
                }
            },
            data: [{
                value: myDayRank,
                name: '排名',
                itemStyle: {
                    normal: {
                        color: '#b0252a'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                label: {
                    normal: {
                        formatter: '{d} %',
                        textStyle: {
                            color: '#b0252a',
                            fontSize: 20

                        }
                    }
                }
            }, {
                value: allStudent - myDayRank,
                name: '占位',
                tooltip: {
                    show: false
                },
                itemStyle: {
                    normal: {
                        color: '#ffffff'
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: '#b0252a',
                        },
                        formatter: '\n我的排名'
                    }
                }
                }]
            }]
    };
    studentPassDayRank.setOption(option);


    var studentPassRank = echarts.init(document.getElementById('studentPassRank'));
    var myRank = 232;
    var allStudent = 470;
    var passCount = [176, 170, 167, 148, 144, 140, 140, 133, 128, 127, 125, 123, 118, 118, 116, 114, 101, 96, 93, 92];
    var student = ["胡博", "郭姝睿", "刘哲",
            "于浩", "白格乐", "吴淞", "姚鑫鹏",
            "马迎杰", "刘以达", "夏浩", "李心智",
            "王佳龙", "常庚辰", "吕夏禹", "张坤",
            "刘子琦", "单宏伟", "何安宇", "吴剑飞",
            "谢时同"];
    option = {
        backgroundColor:'#ffffff',
        title: {
            text: "总通过数Top10",
            x: '2%',
            y: '5%',
            textStyle: {
                color: "#b0252a",
                fontSize: "30"
            }
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
        color: ['#6ca6cd'],
        grid: {
            left: '2%',
            right: '10%',
            top: '20%',
            bottom: '18%',
            containLabel: true
        },
        yAxis: [{
            data: student,
            axisTick: {
                show: false
            },

        }],

        xAxis: [{
            axisTick: {
                show: false
            },
            type: 'value',
            splitNumber: 5,
            axisLabel: {
                formatter: '{value}'
            }
        }],
        series: [{
                name: '销量',
                type: 'bar',
                barWidth: '55%',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{c}',
                        textStyle: {
                            color: 'black'
                        }
                    }
                },
                data: passCount.reverse()
            },
            {
                type: 'pie',
                name: '饼图',
                center: ['90%', '10%'],
                radius: ['15%', '20%'],
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                label: {
                    normal: {
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        color: '#b0252a',
                    }
                },
                data: [{
                    value: myRank,
                    name: '排名',
                    itemStyle: {
                        normal: {
                            color: '#b0252a'
                        }
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    label: {
                        normal: {
                            formatter: '{d} %',
                            textStyle: {
                                color: '#b0252a',
                                fontSize: 20

                            }
                        }
                    }
                }, {
                    value: allStudent-myRank,
                    name: '占位',
                    tooltip: {
                        show: false
                    },
                    itemStyle: {
                        normal: {
                            color: '#ffffff'
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#b0252a',
                            },
                            formatter: '\n我的排名'
                        }
                    }
                }]
            }
        ]
    };
    studentPassRank.setOption(option);
})