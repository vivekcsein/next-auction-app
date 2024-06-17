
export interface GalleryItem {
    id: number;
    original: string;
    thumbnail: string;
}

export interface ProductDataItem {
    id: number;
    name: string;
    slug: string;
    description: string;
    typeId: number;
    price: number;
    shopId: number;
    salePrice: number;
    language: string;
    minPrice: number;
    maxPrice: number;
    sku: string;
    quantity: number;
    inStock: boolean;
    isTaxable: boolean;
    shippingClassId: number | null;
    status: string;
    productType: string;
    unit: string;
    height: number | null;
    width: number | null;
    length: number | null;
    image: GalleryItem;
    video: string | null;
    gallery: GalleryItem[];
}

export const dummyProductDataItem: ProductDataItem = {
    id: 1,
    name: "Apples",
    slug: "apples",
    description: "An apple is a sweet, edible fruit produced by an apple tree (Malus domestica). Apple trees are ... The skin of ripe apples is generally red, yellow, green, pink, or russetted, though many bi- or tri-colored cultivars may be found.",
    typeId: 1,
    price: 2,
    shopId: 6,
    salePrice: 1.6,
    language: "en",
    minPrice: 2,
    maxPrice: 2,
    sku: "1",
    quantity: 18,
    inStock: true,
    isTaxable: false,
    shippingClassId: null,
    status: "publish",
    productType: "simple",
    unit: "1lb",
    height: null,
    width: null,
    length: null,
    image: {
        id: 1,
        original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/Apples.jpg",
        thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1/conversions/Apples-thumbnail.jpg"
    },
    video: null,
    gallery: [
        {
            id: 573,
            original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/apple-1.png",
            thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/572/conversions/apple-1-thumbnail.jpg"
        },
        {
            id: 574,
            original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/apple-2.png",
            thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/573/conversions/apple-2-thumbnail.jpg"
        },
        {
            id: 575,
            original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/apple.png",
            thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/574/conversions/apple-thumbnail.jpg"
        },
        {
            id: 737,
            original: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/apple-2.png",
            thumbnail: "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/736/conversions/apple-2-thumbnail.jpg"
        }
    ]
};