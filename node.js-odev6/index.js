const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  if(ctx.path==='/'){
    ctx.body='INDEX SAYFASINA HOŞGELDİNİZ';
  }
  else if(ctx.path==='/hakkimda'){
    ctx.body='HAKKIMDA SAYFASINA HOŞGELDİNİZ';
  }
  else if(ctx.path==='/iletisim'){
    ctx.body='İLETİSİM SAYFASINA HOŞGELDİNİZ';
  }else{
    ctx.body='404 NOT FOUND';
  }
});


const port=3000;

app.listen(port,()=>{
    console.log(`Sunucu port ${port}'de çalışmaya başladı`);

});