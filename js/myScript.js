	$(document).ready(function(){



	$(window).scroll(( ) => {
		let scrollDistance = $(window).scrollTop();
/*Чтобы навигация показывала на каком блоке*/
		$('.section').each((i, el) => {

			if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
				$('nav a').each((i, el) => {
					if ($(el).hasClass('active')) {
						$(el).removeClass('active');
					}
				});

				$('nav li:eq(' + i + ')').find('a').addClass('active'); 
			}
		});
		

	});
/*Загрузчик,отмена*/
	$(".loaderArea").css("display", "none");
/*Калькулятор*/
	function calculate(){
		let sum = parseInt ($("#select1 option:selected").val()) + parseInt ($("#select2 option:selected").val()) + parseInt ($("#select3 option:selected").val());
		let days = parseInt ($("#select1 option:selected").attr("days")) + parseInt ($("#select2 option:selected").attr("days")) + parseInt ($("#select3 option:selected").attr("days"));
		$(".days .digit").text(days);
		$(".price .digit").text(sum);
	}
	
	$("select").on("change", function(){
		calculate();
	}); 
	calculate();
/*Анимация,при достижении половины блока*/
	let options = {threshold: [0.5]};
		let observer = new IntersectionObserver(onEntry, options);
		let elements = $('.element-animation');
		elements.each((i,el) => {
			observer.observe(el);
		});
	});	

	

		function onEntry (entry){
			entry.forEach(change => {
				if (change.isIntersecting){
					change.target.classList.add('show-animation');
				}
			});
		}

/*Скролл шапки,для нормального расстояния*/
$('a[href^="#"]').click(function(){
		let valHref = $(this).attr("href");
		$('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});

/*Бургер*/
const nav = document.querySelector('.nav');
nav.addEventListener('click',(event) => {
    nav.classList.toggle('open');
});
/*Бургер*//*

$('.menu-btn').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('menu-btn_active');
});*/

/*Бегающие цифры статистики*/
     let optionsStat = {
            threshold: [0.5]
        };
        let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
        let elementsStat = $('.statAnimation');

        elementsStat.each((i, el) => {
            observerStat.observe(el);
        });


        function onEntryStat(entry) {
            entry.forEach(change => {
                if (change.isIntersecting) {
                    if(!$('.statAnimation').hasClass("done")){
                        $('.statAnimation').addClass("done");
                        $('.statAnimation').spincrement({
                         thousandSeparator: "",
                         duration: 3000
                    });
                  }
                }
            });
        }    
