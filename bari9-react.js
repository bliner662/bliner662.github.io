
var images  = ['https://static.wixstatic.com/media/24ad6c2d095244dfbda6d1afa8863b83.jpg/v1/fill/w_480,h_599,al_c,q_80,usm_0.66_1.00_0.01/24ad6c2d095244dfbda6d1afa8863b83.webp ',

'https://static.wixstatic.com/media/dc6b48_c3da011569e14a34828e0c8e47f0e490~mv2.jpeg/v1/fill/w_480,h_599,al_c,q_80,usm_0.66_1.00_0.01/dc6b48_c3da011569e14a34828e0c8e47f0e490~mv2.webp',


'https://static.wixstatic.com/media/dc6b48_e6773879aecb43bf9bf5c212fd89099c~mv2.jpg/v1/fill/w_286,h_356,al_c,q_80/dc6b48_e6773879aecb43bf9bf5c212fd89099c~mv2.webp', 

'https://static.wixstatic.com/media/6ee2848368dd4cedb2982f8c98deab58.jpg/v1/fill/w_480,h_599,al_c,q_80,usm_0.66_1.00_0.01/6ee2848368dd4cedb2982f8c98deab58.webp', 

'https://static.wixstatic.com/media/5841b1_09a776ff9e534eccbcda410faa718d09~mv2.jpg/v1/fill/w_840,h_500,al_c,lg_1,q_85/c700x420%5B1%5D.webp'

];
var texts = [
    'النظافة الشاملة', 
    'غسل السجاد والكنب ', 
    'جلي وتلميع الرخام ' , 
    'مكافحة الحشرات والنمل الابيض ', 
    'تعقيم ممرات الهواء '
    ];

var wasf = [ 
    'شعور البيت الجديد',
    'نظافة لا مثيل لها' , 
    'لاحظ الفرق', 
    'احم نفسك وعائلتك وانعم بالراحة الكاملة', 
    'تنفس الهواء بحرية'
];
var num = 0;
function next() {
    var slider = document.getElementById('slider');
    var service_title = document.getElementById ("service_title");
    var wasflkhidma = document.getElementById ("wasflkhidma");
    num++;
    if(num >= images.length && num >= texts.length ) {
        num = 0;
    }
    slider.src = images[num];
    service_title.innerHTML = texts[num];
    wasflkhidma.innerHTML = wasf[num];
}

setInterval(next, 5000);


var cas = 'none';
function showkhidma (num) {
    var ma3lomatlkhidma =  document.getElementsByClassName('ma3lomatlkhidma');
    var itasil_container =  document.getElementsByClassName("itasil_container");
    
    switch (cas) {
        case 'none':
            ma3lomatlkhidma[num].style.display = 'block';
            itasil_container[num].style.display = 'block';
            cas = 'block';
            break ;
        case 'block': 
           itasil_container[num].style.display = 'none';
            ma3lomatlkhidma[num].style.display = 'none';
        cas = 'none';
        break ;
        default :
        ma3lomatlkhidma[num].style.display = 'block';
        itasil_container[num].style.display = 'block';
        break ;
    }
    
    
}