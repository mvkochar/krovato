type Product = {
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

export default ProductsList