$(function(){
    var ability = echarts.init(document.getElementById('ability'));
    var categoryName = ['基本计算','流程控制','函数与递归','数组','文件','字符串处理','综合','未分类'];
    var abilityGrade = [80, 60, 95, 40, 75,88,70,60];
    var abilityMaxGrade = 100;
        option = {
        backgroundColor: "#ffffff",
        title: {
            text: '能力分布',
            x: "4%",
            textStyle:{
                color: '#b0252a',
                fontSize: '30'
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
                    }
                }
            },
            saveAsImage : {show: true}
        }
    },
        tooltip: {},
        radar: {
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#b0252a',
                    borderRadius: 3,
                    padding: [3, 5],
                    fontSize:'15'
               }
            },
            indicator: [
               { name: categoryName[0], max: abilityMaxGrade},
               { name: categoryName[1], max: abilityMaxGrade},
               { name: categoryName[2], max: abilityMaxGrade},
               { name: categoryName[3], max: abilityMaxGrade},
               { name: categoryName[4], max: abilityMaxGrade},
               { name: categoryName[5], max: abilityMaxGrade},
               { name: categoryName[6], max: abilityMaxGrade},
               { name: categoryName[7], max: abilityMaxGrade}
            ]
        },
        series: [{
            type: 'radar',
            data : [
                 {
                    value : abilityGrade,
                    name : '评分',
                    label:{
                        show:true
                    }
                }
            ]
        }]
    };
    ability.setOption(option);
})