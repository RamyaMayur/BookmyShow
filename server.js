const express = require('express')
const app = express();

app.set('view engine', 'ejs')

app.use(express.static('./images'))
app.use(express.static('./styles'))

app.get('/',(req,res)=>{
    let movies=[{
        poster:"img1.webp",
        title:"Vikrant Rona",
        Genere:"Adventure/Mystery/Thriller"
    },{
        poster:"img2.webp",
        title:"Laal Singh Chaddha",
        Genere:"Comedy/Drama/Romantic"
    },{
        poster:"img3.webp",
        title:"Bimbisara",
        Genere:"Action/Drama/Fantasy/Period"
    },{
        poster:"img4.webp",
        title:"Sita Ramam",
        Genere:"Action/Drama/Romantic"
    },{
        poster:"img5.webp",
        title:"Raksha Bandhan",
        Genere:"Comedy/Drama/Family"
    }]
    res.render('home',{movies,crsl1:"/1.webp",crsl2:"/2.webp",crsl3:"/3.webp",crsl4:"/4.webp",crsl5:"/5.webp",book:"/logo.svg",im1:"/im1.avif",
    im2:"/im2.avif",im3:"/im3.avif",im4:"/im4.avif",im5:"/im5.avif"    })
})

app.listen(3000,()=>{
    console.log('listening');
})