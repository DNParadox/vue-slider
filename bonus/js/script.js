var app = new Vue ({
    el : '#app',
    data : 
        {   imageToShow : 0,
            slide : 
            [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ]

         },
    methods : 
            {   
                setActiveElement(thumbIndex) {
                    // this.currentActiveElement uguale all'indice dell'elemento su cui ho cliccato
                    this.currentActiveElement = thumbIndex;
                },
               
                prevImage( ) {
                    if (this.imageToShow  > 0 ) {
                        this.imageToShow --;
                    } else {
                        this.imageToShow  = this.slide.length - 1;
                    }

                },
                
                nextImage() {
                    if (this.imageToShow  < this.slide.length -1) {
                        this.imageToShow ++;
                    } else { 
                        this.imageToShow = 0;
                    }
                },
             

                activeClass( ) {
                    this.activeClass = !this.activeClass;
                }
            }
})