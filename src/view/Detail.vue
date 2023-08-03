<template>
    <center>
    <h1>Detail {{ detail.nama }}</h1>
    <img :src="getImgSrc(detail.img)" alt="Category Image" >
    <h4>Harga : {{ detail.harga }}</h4>
    <h4 style="font-style: italic;">Keterangan Detail : {{ detail.keterangan }}</h4>
</center>
</template>
<script>
import { produk } from '@/assets/Produk'
export default {
    props: [
        "id_produk"
    ],
    setup(props)
    {
        const getImgSrc = (imgFileName) => {
        return '../src/assets/img/' + imgFileName + '' ;
      }
        const detail = produk["produk"].find(function(item){
            return item.id == props.id_produk;
        });
       
        return{
            detail,
        getImgSrc
        }
    }
}
</script>

<style>
img{
    width: 350px;
    height: 350px;
}
</style>