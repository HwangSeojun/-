$(document).ready(function(){
    let isChangeButton1 = false;
    let isChangeButton2 = false;
    let isChangeButton3 = false;
    let isChangeButton4 = false;
        $('.boxOfficePosterBox:nth-child(1) .boxOfficePosterToolbar button:nth-child(1)').on('click', function(){
            if(isChangeButton1){
                $('.boxOfficePosterBox:nth-child(1) .boxOfficePosterToolbar button:nth-child(1) span').css(
                "color","white");
                isChangeButton1 = false
            }
            else{
                $('.boxOfficePosterBox:nth-child(1) .boxOfficePosterToolbar button:nth-child(1) span').css(
                    "color","red"
                );
                isChangeButton1 = true
            }
        });

            $('.boxOfficePosterBox:nth-child(2) .boxOfficePosterToolbar button:nth-child(1)').on('click', function(){
                if(isChangeButton2){
                    $('.boxOfficePosterBox:nth-child(2) .boxOfficePosterToolbar button:nth-child(1) span').css(
                    "color","white");
                    isChangeButton2 = false
                }
                else{
                    $('.boxOfficePosterBox:nth-child(2) .boxOfficePosterToolbar button:nth-child(1) span').css(
                        "color","red"
                    );
                    isChangeButton2 = true
                }
        })
        $('.boxOfficePosterBox:nth-child(3) .boxOfficePosterToolbar button:nth-child(1)').on('click', function(){
            if(isChangeButton3){
                $('.boxOfficePosterBox:nth-child(3) .boxOfficePosterToolbar button:nth-child(1) span').css(
                "color","white");
                isChangeButton3 = false
            }
            else{
                $('.boxOfficePosterBox:nth-child(3) .boxOfficePosterToolbar button:nth-child(1) span').css(
                    "color","red"
                );
                isChangeButton3 = true
            }
    })
    $('.boxOfficePosterBox:nth-child(4) .boxOfficePosterToolbar button:nth-child(1)').on('click', function(){
        if(isChangeButton4){
            $('.boxOfficePosterBox:nth-child(4) .boxOfficePosterToolbar button:nth-child(1) span').css(
            "color","white");
            isChangeButton4 = false
        }
        else{
            $('.boxOfficePosterBox:nth-child(4) .boxOfficePosterToolbar button:nth-child(1) span').css(
                "color","red"
            );
            isChangeButton4 = true
        }
})

    $('.boxOfficeToolbar .toolbarItem:nth-child(1) button').on('click', function(){
            let search_mov = $('.boxOfficeToolbar .toolbarItem:nth-child(1) input').val();
            if (search_mov === "") {

                // alert("검색어를 입력해주세요")
                $('#modal1').fadeIn('fast')
            }
    })

    $('#modal1 .modal1_header span:nth-child(2)').on('click', function(){
        $('#modal1').fadeOut('fast');
    })

    let scroll_icon = $('.scroll_animation span')

    scrollAnimation = function(){
        scroll_icon.animate({
            "margin-top": "20px"
        })
        scroll_icon.animate({
            "margin-top": "0px"
        })
    };
    // scrollAnimation();
    setInterval(scrollAnimation, 3000)

    $('.navItemContainer .Item:nth-child(2)').on({
        'mouseenter': function(){
        $('.section1').css("display","flex")
        },
        'mouseleave': function(){
            $('.section1').fadeIn('fast')
        }
    })
})

