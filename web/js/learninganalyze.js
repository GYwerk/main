$(function(){
    var learninganalyze = echarts.init(document.getElementById('learninganalyze'));
    var watchCount = [30, 25, 25, 23, 20, 20, 15];
    var pointTitle = ['数组的使用','数组的定义','简单排序算法','二维数组的定义与使用','数组在函数中的应用','字符串与字符数组的区别与使用','字符串处理库函数的使用方法'];
    var categoryName = ['基本计算','流程控制','函数与递归','数组','文件','字符串处理','综合','未分类'];
    var categoryWatchCount = [12,10,34,20,15,23,35,20];
    var teacherName = ['姚勇','王琨','王俊平','冯磊','其他'];
    var teacherWatchCount = [12,10,34,20,15,23];

    var option = {
        backgroundColor: '#ffffff',
        title:[
            {text:"各章节学习占比",x: '2%', y: '1%',textStyle:{color:"#b0252a",fontSize:"20"}},
            {text:"常浏览的知识点",x: '50%', y: '1%',textStyle:{color:"#b0252a",fontSize:"20"}},
            {text:"常浏览的老师",x: '2%', y: '50%',textStyle:{color:"#b0252a",fontSize:"20"}},
        ],
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
        grid: [
            {x: '65%', y: '7%', width: '45%', height: '90%'},
        ],
        tooltip: {
            formatter: '{b} ({c})'
        },
        xAxis: [
            {gridIndex: 0, axisTick: {show:false},axisLabel: {show:false},splitLine: {show:false},axisLine: {show:false }},
        ],
        yAxis: [
             {  gridIndex: 0, interval:0,data:pointTitle,
                axisTick: {show:false}, axisLabel: {show:true},splitLine: {show:false},
                axisLine: {show:true,lineStyle:{color:"#6173a3"}},
            }
        ],
        series: [
            {
                name: '各章节学习占比',
                type: 'pie',
                radius : '30%',
                center: ['24%', '25%'],
                color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97','#87CEFA','#B0E0E6','#1E90FF'],
                data:[
                    {value:categoryWatchCount[0], name:categoryName[0]},
                    {value:categoryWatchCount[1], name:categoryName[1]},
                    {value:categoryWatchCount[2], name:categoryName[2]},
                    {value:categoryWatchCount[3], name:categoryName[3]},
                    {value:categoryWatchCount[4], name:categoryName[4]},
                    {value:categoryWatchCount[5], name:categoryName[5]},
                    {value:categoryWatchCount[6], name:categoryName[6]},
                    {value:categoryWatchCount[7], name:categoryName[7]},
                ],
                labelLine:{normal:{show:true}},
                itemStyle: {normal: {label:{ show: true,  formatter: '{b} \n ({d}%)', textStyle:{color:'#b0252a'}} },},
            },
            {
                name: '常浏览的老师',
                type: 'pie',
                radius : '30%',
                center: ['24%', '75%'],
                color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97'],
                labelLine:{normal:{show:false}},
                data:[
                    {value:teacherWatchCount[0], name:teacherName[0]},
                    {value:teacherWatchCount[1], name:teacherName[1]},
                    {value:teacherWatchCount[2], name:teacherName[2]},
                    {value:teacherWatchCount[3], name:teacherName[3]},
                    {value:teacherWatchCount[4], name:teacherName[4]},
                ],
                itemStyle: {normal: {label:{ show: true,  formatter: '{b} \n ({d}%)', textStyle:{color:'#b0252a'}} },},
            },
            {
                name: '常浏览的知识点',
                type: 'bar',xAxisIndex: 0,yAxisIndex: 0,barWidth:'45%',
                itemStyle:{normal:{color:'#86c9f4'}},
                label:{normal:{show:true, position:"right",textStyle:{color:"#9EA7C4"}}},
                data: watchCount.reverse(),
            },
            
        ]
    };
    learninganalyze.setOption(option);
})