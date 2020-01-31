$(document).ready(function ()
    {
        $('a[href^="#"]').click(function (){
            var elementClick = $(this).attr("href");
            var destination = $(elementClick).offset().top;
            jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
            return false;
        });
        
        $("head").append("<link href='//fonts.googleapis.com/css?family=Roboto:400,500,700,900&amp;subset=cyrillic' rel='stylesheet' type='text/css'>");

        const mySiema = new Siema({
                selector: '#c1',
                duration: 200,
                easing: 'ease-out',
                perPage: 1,
                startIndex: 0,
                draggable: true,
                multipleDrag: true,
                threshold: 20,
                loop: true,
                rtl: false,
                onInit: () => {},
            onChange: () => {}});

        document.querySelector('.cp').addEventListener('click', () => mySiema.prev());
        document.querySelector('.cn').addEventListener('click', () => mySiema.next());

        var duration = { d: 1, h: 1, m: 59, s: 59 },
            sf = 120,
            maxD = 2,
            maxH = 24,
            maxM = 60,
            maxS = 60;

        setInterval(function() {
            $('.d').html(duration.d);
            $('.h').html(duration.h);
            $('.m').html(duration.m)
                .attr('data-t', duration.m - 1);
            $('.s').html(duration.s)
                .attr('data-t', duration.s - 1);
            duration.s--;
            $('.s').addClass('flip');
            $('.m').removeClass('flip');
            $('.id .circle').css('stroke-dashoffset', sf-(duration.d*(sf/maxD)));
            $('.ih .circle').css('stroke-dashoffset', sf-(duration.h*(sf/maxH)));
            $('.im .circle').css('stroke-dashoffset', sf-(duration.m*(sf/maxM)));
            $('.is .circle').css('stroke-dashoffset', sf-(duration.s*(sf/maxS)));
            if (duration.s === 58) {
                $('.m').addClass('flip');
            }
            if (duration.s === 0) {
                duration.m--;
                duration.s = 59;
                if (duration.m === 0) {
                    duration.h--;
                    duration.m = 59
                }
            }
        }, 1000);
    });