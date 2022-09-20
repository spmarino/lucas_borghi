import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'


const productList = [
    {id:"1", category:"fruta",producto:"Arandanos",descripcion:"Bolsa de Arándanos congelados de 1kg",precio:"1500",image:"https://i.blogs.es/5d510d/arandanos/840_560.jpg",stock:"882",initial:"0"},
    {id:"2", category:"fruta",producto:"Frambuesas",descripcion:"Bolsa de Frambuesas congeladas de 1kg",precio:"2000",image:"https://static4.abc.es/media/bienestar/2020/08/04/frambuesas-fichas-khKE--1200x630@abc.jpeg",stock:"803",initial:"0"},
    {id:"3", category:"fruta",producto:"Moras",descripcion:"Bolsa de Moras congeladas de 1kg",precio:"1600",image:"https://static.misionesonline.news/wp-content/uploads/2019/10/Moras-m2iikn3tad00.jpg",stock:"16",initial:"0"},
    {id:"4", category:"fruta",producto:"Frutillas", descripcion:"Bolsa de Frutillas congeladas de 1kg",precio:"1350",image:"https://boletindesalud.com.ar/wp-content/uploads/2022/01/frutillas.jpg",stock:"886",initial:"0"},
    {id:"5", category:"fruta",producto:"Mix", descripcion:"Mix de Arándanos, Moras, Frambuesas y Frutillas congelados de 1kg",precio:"1750",image:"https://cdn.shopify.com/s/files/1/0211/4545/2608/products/mixcortadogde_1024x1024@2x.jpg?v=1611616510",stock:"870",initial:"0"},
    {id:"6", category:"vegetal",producto:"Brócoli",descripcion:"Bolsa de Brócoli congelado de 1kg",precio:"1550",image:"https://t1.rg.ltmcdn.com/es/posts/1/3/2/como_conservar_y_congelar_brocoli_73231_orig.jpg",stock:"500",initial:"0"},
    {id:"7", category:"vegetal",producto:"Coliflor",descripcion:"Bolsa de Coliflor congelado de 1kg",precio:"1000",image:"https://i2.wp.com/ochosabores.com/wp-content/uploads/2019/04/colif.jpg?fit=660%2C450&ssl=1",stock:"701",initial:"0"},
    {id:"8", category:"vegetal",producto:"Espinaca",descripcion:"Bolsa de Espinaca congelada de 1kg",precio:"1300",image:"https://previews.123rf.com/images/easterbunnyuk/easterbunnyuk1705/easterbunnyuk170500119/78650049-espinaca-congelada-antihielo-proceso-de-cocci%C3%B3n-etapa-de-preparaci%C3%B3n.jpg",stock:"200",initial:"0"},
    {id:"9", category:"vegetal",producto:"Choclo", descripcion:"Bolsa de Choclo congelado de 1kg",precio:"1000",image:"https://tn.com.ar/resizer/kRVKLA-PSyPMTCqbyqncz8txWhY=/767x0/smart/arc-anglerfish-arc2-prod-artear.s3.amazonaws.com/public/ZJGNYLBZLZCMJYUMMQUU677O7A.jpg",stock:"996",initial:"0"},
    {id:"10", category:"vegetal",producto:"Veggie Wok", descripcion:"Mix de vegetales congelados de 1kg",precio:"1750",image:"https://glacial.com.uy/modules//smartblog/images/5-single-default.jpg",stock:"810",initial:"0"}
];


function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { categoryId } = useParams();


    useEffect (() =>{
        if (!categoryId){
        const promise = new Promise((res, rej) => {
            setTimeout(() => {
                res(productList);
            }, 2000);
        });

        promise
        .then((res) => {
            setProducts(res);
            setLoading(true);
        })
        .catch((err) => console.log (err));
        }
        else{
            const promise = new Promise((res, rej) => {

                setTimeout(() => {
                    res(productList.filter(producto => producto.category === categoryId))
            }, 2000);
            });
    
            promise
            .then((res) => {
                setProducts(res);
                setLoading(true);
            })
            .catch((err) => console.log (err));
        }
    }, [categoryId] );

    return(
        <div className="itemContainer">
            {!loading ? (
                <div className="cargando"> Cargando... </div>
            ) : (
                <ItemList products={products}/>
            )}
        </div>
    );

}

export default ItemListContainer;