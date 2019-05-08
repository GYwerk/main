$(function () {

     // 退出
    $('.username_icon').on('click' , function () {
        $('.exit').toggle()
    })
    // 二级导航切换
    $('.list_main .tabs>li>a').on('mouseover' , function () {
        $(this).siblings('ol').show()
    })
    $('.list_main .tabs>li>a').on('mouseout' , function () {
        $(this).siblings('ol').hide()
    })
    $('.list_main .tabs>li ol').on('mouseover' , function () {
        $(this).show()
    })
    $('.list_main .tabs>li ol').on('mouseout' , function () {
        $(this).hide()
    })
    // 视频首页tab切换
    $('.study_list  .study_cnt .study_items').eq(0).show()
    $('.study_list .study_nav li').on('click' , 'a' , function () {
        var $li = $(this).parent()
        var idx = $li.index()
        $(this).addClass('active').parent().siblings().children('a').removeClass('active')
        $('.study_list .study_cnt .study_items').eq(idx).show().siblings('.study_items').hide()
    })

    // 全部评论切换
    $('.all_comment ul').eq(0).show()
    $('.all_comment .title .tabs a ').on('click' , function () {
        var idx = $(".all_comment .title .tabs a").index(this)
        $(this).addClass('active').siblings('a').removeClass('active')
        $('.comment_list ul').eq(idx).show().siblings().hide()
        return false
    })

    // 智能问答点击切换
    $('.qad .qad_list ul li').eq(0).children('.answer').show()
    $('.qad_list li a').on('click' , function () {
        $(this).siblings('.answer').slideDown(300).parent().siblings().children('.answer').slideUp(300)
        $(this).parent().addClass('active').siblings().removeClass('active')
        return false
    })
    // 智能问答界面切换
    $('.answer .answer_item').eq(0).show()
    $('.question_box .question_list li a').on('click' , function () {
        var $li = $(this).parent()
        var idx = $li.index()
        $li.addClass('active').siblings().removeClass('active')
        $('.answer .answer_item').eq(idx).show().siblings('.answer_item').hide()
    })
    // 用户信息切换
    $('.info_items .info_item').eq(0).show()
    $('.info_nav li a').on('click' , function () {
        $li = $(this).parent()
        var idx = $li.index()
        $li.addClass('active').siblings().removeClass('active')
        $('.info_items .info_item').eq(idx).show().siblings('.info_item').hide()
    })
    // 我的数据tab切换
    $('.data_main .data_tabs>li').eq(0).children('ul').show()
    $('.data_main .data_tabs>li>a').on('click' , function () {
        var $li = $(this).parent()
        var $span = $(this).children('span')
        // $li.children('ul').slideToggle(300)
        if($span.hasClass('icon_arrow_up')) {
            $li.children('ul').slideUp(300)
            $span.removeClass('icon_arrow_up')
        }else {
            $li.children('ul').slideDown(300).parent().siblings().children('ul').slideUp(300)
            $span.addClass('icon_arrow_up').parent().parent().siblings().find('span').removeClass('icon_arrow_up')

        }
    })
    $('.data_items').eq(0).show().find('.data_body').eq(0).show()
    $('.data_main .data_tabs>li>ul li a').on('click' , function () {
        var $li = $(this).parent()
        var idx = $li.index()
        var preidx = $li.parents('li').index()
        $li.addClass('active').siblings().removeClass('active')
        $('.data_items').eq(preidx).show().siblings().hide()
        $('.data_items').eq(preidx).find('.data_body').eq(idx).show().siblings().hide()
        return false
    })
})

