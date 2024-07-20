type Product = {
    id: number
    image: string
    size: string
    title: string
    isAvailable: boolean
    isSale: boolean
    price: string
    salePrice: string
    isFavour: boolean
}

const ProductsList:Product[] = [
    {
        id: 0,
        image: '/images/products/1.png',
        size: '61 x 184 x 2130 мм',
        title: 'Ліжко Спарта / Sparta з підйомним механізмом',
        isAvailable: true,
        isSale: true,
        price: '25 400',
        salePrice: '15 400',
        isFavour: true
    },

    {
        id: 1,
        image: '/images/products/2.png',
        size: '61 x 184 x 2130 мм',
        title: 'Ліжко Аргон з підйомним механізмом',
        isAvailable: true,
        isSale: false,
        price: '16 400',
        salePrice: '',
        isFavour: false
    },

    
    {
        id: 2,
        image: '/images/products/3.png',
        size: '61 x 184 x 2130 мм',
        title: 'Ліжко Престиж з підйомним механізмом',
        isAvailable: true,
        isSale: false,
        price: '14 969',
        salePrice: '',
        isFavour: false
    },

    {
        id: 3,
        image: '/images/products/4.png',
        size: '61 x 184 x 2130 мм',
        title: 'Диван Токіо-2',
        isAvailable: true,
        isSale: false,
        price: '13 211',
        salePrice: '',
        isFavour: false
    },

    {
        id: 4,
        image: '/images/products/5.png',
        size: '61 x 184 x 2130 мм',
        title: 'Матрац Largo SLIM / Ларго Слім',
        isAvailable: true,
        isSale: true,
        price: '3 122',
        salePrice: '2 810',
        isFavour: false
    },

    {
        id: 5,
        image: '/images/products/6.png',
        size: '61 x 184 x 2130 мм',
        title: 'Матрац ARGENTUM AMALTEA / Аргентум Амалті',
        isAvailable: true,
        isSale: true,
        price: '5 966',
        salePrice: '5 071',
        isFavour: false
    },
    
    {
        id: 6,
        image: '/images/products/7.png',
        size: '61 x 184 x 2130 мм',
        title: 'Диван Браво',
        isAvailable: true,
        isSale: false,
        price: '10 008',
        salePrice: '',
        isFavour: false
    },

    {
        id: 7,
        image: '/images/products/8.png',
        size: '61 x 184 x 2130 мм',
        title: 'Ліжко МК-5',
        isAvailable: true,
        isSale: false,
        price: '8 775',
        salePrice: '',
        isFavour: false
    },

]

const BedsList:Product[] = [
    {
        id: 0,
        image: '/images/beds/1.webp',
        size: '61 x 184 x 2130 мм',
        title: 'Ліжко Стенлі',
        isAvailable: true,
        isSale: false,
        price: '13 820',
        salePrice: '',
        isFavour: false
    },

    {
        id: 1,
        image: '/images/beds/2.webp',
        size: '61 x 184 x 2130 мм',
        title: 'Ліжко Сільвія з підйомним механізмом',
        isAvailable: true,
        isSale: false,
        price: '13 340',
        salePrice: '',
        isFavour: false
    },

    {
        id: 2,
        image: '/images/beds/3.webp',
        size: '61 x 184 x 2130 мм',
        title: 'Ліжко Прага',
        isAvailable: true,
        isSale: false,
        price: '8 030',
        salePrice: '',
        isFavour: false
    },

    {
        id: 3,
        image: '/images/beds/4.webp',
        size: '61 x 184 x 2130 мм',
        title: 'Ліжко Палмер',
        isAvailable: true,
        isSale: false,
        price: '6 300',
        salePrice: '',
        isFavour: false
    },

    {
        id: 4,
        image: '/images/beds/5.webp',
        size: '61 x 184 x 2130 мм',
        title: 'Ліжко Капрі',
        isAvailable: true,
        isSale: false,
        price: '12 370',
        salePrice: '',
        isFavour: false
    },

    {
        id: 5,
        image: '/images/beds/6.webp',
        size: '61 x 184 x 2130 мм',
        title: 'Ліжко Джолі',
        isAvailable: true,
        isSale: false,
        price: '6 500',
        salePrice: '',
        isFavour: false
    },

    {
        id: 6,
        image: '/images/beds/7.webp',
        size: '61 x 184 x 2130 мм',
        title: 'Ліжко Гласо',
        isAvailable: true,
        isSale: false,
        price: '5 770',
        salePrice: '',
        isFavour: false
    },

    {
        id: 7,
        image: '/images/beds/8.webp',
        size: '61 x 184 x 2130 мм',
        title: "Карина з м'яким узголів'ям",
        isAvailable: true,
        isSale: false,
        price: '8 368',
        salePrice: '',
        isFavour: false
    },

    {
        id: 8,
        image: '/images/beds/9.webp',
        size: '61 x 184 x 2130 мм',
        title: "Акція Ліжко Гранд з механізмом",
        isAvailable: true,
        isSale: true,
        price: '11 235',
        salePrice: '10 790',
        isFavour: false
    },

    {
        id: 9,
        image: '/images/beds/10.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Фіджі",
        isAvailable: true,
        isSale: false,
        price: '7 230',
        salePrice: '',
        isFavour: false
    },

    {
        id: 10,
        image: '/images/beds/11.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Ларі",
        isAvailable: true,
        isSale: false,
        price: '7 560',
        salePrice: '',
        isFavour: false
    },

    {
        id: 11,
        image: '/images/beds/12.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Гранд",
        isAvailable: true,
        isSale: false,
        price: '7 905',
        salePrice: '',
        isFavour: false
    },

    {
        id: 12,
        image: '/images/beds/13.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Хюпер",
        isAvailable: true,
        isSale: false,
        price: '15 530',
        salePrice: '',
        isFavour: false
    },

    {
        id: 13,
        image: '/images/beds/14.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Титан",
        isAvailable: true,
        isSale: false,
        price: '16 990',
        salePrice: '',
        isFavour: false
    },

    {
        id: 14,
        image: '/images/beds/15.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Твіст",
        isAvailable: true,
        isSale: false,
        price: '13 800',
        salePrice: '',
        isFavour: false
    },

    {
        id: 15,
        image: '/images/beds/16.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Румба з підйомним механізмом",
        isAvailable: true,
        isSale: false,
        price: '13 660',
        salePrice: '',
        isFavour: false
    },

    {
        id: 16,
        image: '/images/beds/17.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Престиж",
        isAvailable: true,
        isSale: false,
        price: '12 480',
        salePrice: '',
        isFavour: false
    },

    {
        id: 17,
        image: '/images/beds/18.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Манчестер",
        isAvailable: true,
        isSale: false,
        price: '14 409',
        salePrice: '',
        isFavour: false
    },

    {
        id: 18,
        image: '/images/beds/19.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Мілея",
        isAvailable: true,
        isSale: false,
        price: '12 060',
        salePrice: '',
        isFavour: false
    },

    {
        id: 19,
        image: '/images/beds/20.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Лайн",
        isAvailable: true,
        isSale: false,
        price: '6 300',
        salePrice: '',
        isFavour: false
    },
    
    {
        id: 20,
        image: '/images/beds/21.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Карат",
        isAvailable: true,
        isSale: false,
        price: '16 650',
        salePrice: '',
        isFavour: false
    },
    
    {
        id: 21,
        image: '/images/beds/22.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Верона 1",
        isAvailable: true,
        isSale: false,
        price: '4 032',
        salePrice: '',
        isFavour: false
    },

    {
        id: 22,
        image: '/images/beds/23.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Аргон",
        isAvailable: true,
        isSale: false,
        price: '11 280',
        salePrice: '',
        isFavour: false
    },
    
    
    {
        id: 23,
        image: '/images/beds/24.webp',
        size: '61 x 184 x 2130 мм',
        title: "Ліжко Дейзі з підйомним механізмом",
        isAvailable: true,
        isSale: false,
        price: '14 800',
        salePrice: '',
        isFavour: false
    },

]

export {ProductsList, BedsList}