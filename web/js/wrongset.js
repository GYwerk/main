$(function(){
    var wrongset = echarts.init(document.getElementById('wrongset'));
    var submitCount = [55, 25, 25, 23, 20, 20, 15, 13, 10, 8];
    var submitTitle = ['三角形判断','部分排序','字符串查找','世界杯排名','温度转换','计算球体重量','阶梯电价计费','计算某月天数','计算整数各位数字之和','完数'];
    var categoryName = ['基本计算','流程控制','函数与递归','数组','文件','字符串处理','综合','未分类'];
    var categoryWrongCount = [12,10,34,20,15,23,35,20];
    var rightCount = 335;
    var wrongCount = 310;

    var option = {
        backgroundColor: '#ffffff',
        title:[
            {text:"各类别错题占比",x: '2%', y: '1%',textStyle:{color:"#b0252a",fontSize:"20"}},
            {text:"提交次数TOP10",x: '50%', y: '1%',textStyle:{color:"#b0252a",fontSize:"20"}},
            {text:"正确率",x: '2%', y: '50%',textStyle:{color:"#b0252a",fontSize:"20"}},
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
            {x: '60%', y: '7%', width: '45%', height: '90%'},
        ],
        tooltip: {
            formatter: '{b} ({c})'
        },
        xAxis: [
            {gridIndex: 0, axisTick: {show:false},axisLabel: {show:false},splitLine: {show:false},axisLine: {show:false }},
        ],
        yAxis: [
             {  gridIndex: 0, interval:0,data:submitTitle,
                axisTick: {show:false}, axisLabel: {show:true},splitLine: {show:false},
                axisLine: {show:true,lineStyle:{color:"#6173a3"}},
            }
        ],
        series: [
            {
                name: '各类别错题占比',
                type: 'pie',
                radius : '30%',
                center: ['24%', '25%'],
                color:['#86c9f4','#4da8ec','#3a91d2','#005fa6','#315f97','#87CEFA','#B0E0E6','#1E90FF'],
                data:[
                    {value:categoryWrongCount[0], name:categoryName[0]},
                    {value:categoryWrongCount[1], name:categoryName[1]},
                    {value:categoryWrongCount[2], name:categoryName[2]},
                    {value:categoryWrongCount[3], name:categoryName[3]},
                    {value:categoryWrongCount[4], name:categoryName[4]},
                    {value:categoryWrongCount[5], name:categoryName[5]},
                    {value:categoryWrongCount[6], name:categoryName[6]},
                    {value:categoryWrongCount[7], name:categoryName[7]},
                ],
                labelLine:{normal:{show:true}},
                itemStyle: {normal: {label:{ show: true,  formatter: '{b} \n ({d}%)', textStyle:{color:'#b0252a'}} },},
            },
            {
                name: '正确率',
                type: 'pie',
                radius : '30%',
                center: ['24%', '75%'],
                color:['#86c9f4','#315f97'],
                labelLine:{normal:{show:false}},
                data:[
                    {value:rightCount, name:'通过'},
                    {value:wrongCount, name:'未通过'},
                ],
                itemStyle: {normal: {label:{ show: true,  formatter: '{b} \n ({d}%)', textStyle:{color:'#b0252a'}} },},
            },
            {
                name: '提交次数TOP10',
                type: 'bar',xAxisIndex: 0,yAxisIndex: 0,barWidth:'45%',
                itemStyle:{normal:{color:'#86c9f4'}},
                label:{normal:{show:true, position:"right",textStyle:{color:"#9EA7C4"}}},
                data: submitCount.reverse(),
            },
            
        ]
    };
    wrongset.setOption(option);
})