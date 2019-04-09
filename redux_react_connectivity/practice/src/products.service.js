import __products from "./products";


export default class ProductService {

    constructor() {
        this.products = __products.products || [];
    }

    getProducts = () => {
        return new Promise((resolve) => {
            setTimeout(
                () => {
                    resolve(
                        {
                            status: 'success',
                            data: [
                                ...this.products
                            ]
                        }
                    )
                },
                3000
            );

        })
    };

    addProduct = ({
                      id = Math.floor(Math.random() * 100000),
                      name,
                      quantity,
                      price,
                      image = 'https://picsum.photos/200/200/?image=5'
                  }) => {
        return new Promise(resolve => {
            setTimeout(
                () => {
                    this.products = [
                        ...this.products,
                        {
                            id,
                            name,
                            quantity,
                            price,
                            image
                        }
                    ]
                },
                3000
            );

            resolve({
                status: 'success',
                data: [
                    ...this.products
                ]
            });

        });
    }

}