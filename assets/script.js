let current_element_index = 1;
let is_scrolling = false;
$(document).ready(function () {
    var windowHeight = $(window).height() 
    if($(window).width() > 768) {
        $('header').css({
            'height': windowHeight
        })
        $('#home').css({
            'height': windowHeight
        })
    } else {
        $('header').css({
            'max-height': windowHeight + 60
        })
    }

    // no more horizontal slider
    /*if ($(window).width() > 1280) {
        $('#about .skills ul').css({ 'width': ($('#about .skills ul li').length * 222) - 12 })
    } else*/ if ($(window).width() > 540) {
        $('#about .skills').css({ 'max-height': ($('#about .profile > div.image').height()) })
    }


    $(window).on('scroll', function () {
        if ($(window).scrollTop() > ($(window).height() / 3)) {
            $('body').addClass('minimized');
        } else {
            $('body').removeClass('minimized');
        }

        // no more animated percentage
        // if (isScrolledIntoView('#about .skills ul')) {
        //     setTimeout(function () {
        //         $('#about .skills li div.amount').each(function () {
        //             $(this).css({ 'max-width': $(this).data('title') + '%' })
        //         });
        //     }, 300);
        // }

        if (isScrolledIntoView('#home')) {
            $('#navigation ul li').removeClass('active');
            $('#navigation ul li.home').addClass('active');
        }
        if (isScrolledIntoView('#about')) {
            $('#navigation ul li').removeClass('active');
            $('h2.title').removeClass('active');
            $('#navigation ul li.about').addClass('active');
            $('#about h2.title').addClass('active');
        }
        if (isScrolledIntoView('#resume')) {
            $('#navigation ul li').removeClass('active');
            $('h2.title').removeClass('active');
            $('#navigation ul li.resume').addClass('active');
            $('#resume h2.title').addClass('active');
        }
        if (isScrolledIntoView('#projects')) {
            $('#navigation ul li').removeClass('active');
            $('h2.title').removeClass('active');
            $('#navigation ul li.projects').addClass('active');
            $('#projects h2.title').addClass('active');
        }
        if (isScrolledIntoView('footer')) {
            $('#navigation ul li').removeClass('active');
            $('h2.title').removeClass('active');
            $('#navigation ul li.footer').addClass('active');
            $('footer h2.title').addClass('active');
        }
    });

    /*$('#navigation').find('a').click(function () {
        var $href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $($href).offset().top
        }, 1600);
        return false;
    });*/

    $('#header-toggle').on('click', function () {
        $('header').toggleClass('open');
    });

    var body = $("html, body");
    $('#navigation ul li div').on('click', function () {
        if($(this).attr('id') == "download-resume") {
            downloadURI("https://github.com/itLovaz/itLovaz.github.io/raw/main/CV_LEONARDO_LOVATO.pdf");
        } else {
            if ($('header').hasClass('open')) {
                $('header').removeClass('open');
            }

            body.stop().animate({ scrollTop: ($($(this).data('title')).offset().top) - 100 }, 1200, 'swing', function () {
            });
        }

    });

    initScrollAnimation();
});

//https://stackoverflow.com/questions/3749231/download-file-using-javascript-jquery
function downloadURI(uri, name = '') 
{
    var link = document.createElement("a");
    // If you don't know the name or want to use
    // the webserver default set name = ''
    link.setAttribute('download', name);
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
}


function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var elemTop = $(elem).offset().top;

    return docViewTop > (elemTop - ($(window).height() / 1.5));
}

function initScrollAnimation() {
    (function($) {
        $.fn.visible = function(partial) {
            var $t = $(this),
                $w = $(window),
                viewTop = $w.scrollTop(),
                viewBottom = viewTop + $w.height() - ($w.width() > 1023 ? 200 : 0),
                _top = $t.offset().top,
                _bottom = _top + $t.height(),
                compareTop = partial === !0 ? _bottom : _top,
                compareBottom = partial === !0 ? _top : _bottom;
            return ((compareBottom <= viewBottom) && (compareTop >= viewTop))
        }
    })(jQuery);

    var win = $(window);
    var allModsC = $(".moduleC");
    var allModsCfast = $(".moduleCfast");
    var allModsB = $(".moduleB");

    allModsC.each(function(i, el) {
        var el = $(el);
        if (el.visible(!0)) {
            el.addClass("already-visible")
        }
    });
    allModsCfast.each(function(i, el) {
        var el = $(el);
        if (el.visible(!0)) {
            el.addClass("already-visible")
        }
    });
    allModsB.each(function(i, el) {
        var el = $(el);
        if (el.visible(!0)) {
            el.addClass("already-visible")
        }
    });
    win.scroll(function(event) {
        allModsC.each(function(i, el) {
            var el = $(el);
            if (el.visible(!0)) {
                el.addClass("come-in")
            }
        });
        allModsCfast.each(function(i, el) {
            var el = $(el);
            if (el.visible(!0)) {
                el.addClass("come-in-fast")
            }
        });
        allModsB.each(function(i, el) {
            var el = $(el);
            if (el.visible(!0)) {
                el.addClass("come-in-bottom")
            }
        })
    })
};