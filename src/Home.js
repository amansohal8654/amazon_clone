import React from 'react'
import "./Home.css"
import Product from "./Product"

function Home() {
    return (
        <div className="home">
            <img 
            className="home_img"
            alt=""
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_2x._CB428993290_.jpg"
            />
            <div className="home_row">
                <Product
                id="1"
                title="this is my product"
                price={11.96}
                rating={5}
                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU9N2_AV1?wid=1144/\&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1583175286498"
                />
                 <Product
                id="2"
                title="this is my product"
                price={10.96}
                rating={5}
                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU9N2_AV1?wid=1144/\&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1583175286498"
                />
            </div>

            <div className="home_row">
                <Product
                id="3"
                title="this is my product"
                price={11.96}
                rating={5}
                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU9N2_AV1?wid=1144/\&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1583175286498"
                />
                 <Product
                id="4"
                title="this is my product"
                price={11.96}
                rating={5}
                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU9N2_AV1?wid=1144/\&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1583175286498"
                />
                 <Product
                id="5"
                title="this is my product"
                price={11.96}
                rating={5}
                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU9N2_AV1?wid=1144/\&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1583175286498"
                />
            </div>
            
            <div className="home_row">
                <Product
                id="6"
                title="this is my product"
                price={11.96}
                rating={5}
                image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MU9N2_AV1?wid=1144/\&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1583175286498"
                />
                
            </div>
            
            
        </div>
    )
}

export default Home
