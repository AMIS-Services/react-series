import Koa from 'koa';
import Router from 'koa-router';
import mongoose from 'mongoose';
import Accommodation from './models/accommodations';
import bodyParser from 'koa-bodyparser';

const koa = new Koa();
const app = new Router();
mongoose.connect(
  'mongodb://127.0.0.1:27017/AMISBnB',
  { useNewUrlParser: true }
);

app.use(bodyParser());

app.get('/', async ctx => {
  console.log('GET /');
  ctx.body = 'Koa running';
});

app.get('/accommodations', async ctx => {
  console.log('GET /accommodations');
  const accommodations = await Accommodation.find();
  ctx.body = accommodations;
});

app.post('/accommodations', async ctx => {
  console.log('POST /accommodations');
  console.log(ctx.request.body);
  const accommodations = await Accommodation.create(ctx.request.body);
  ctx.body = accommodations;
});

app.get('/accommodations/:id', async ctx => {
  const id = ctx.params.id;
  console.log(`GET /accomodations/${id}`);
  const accommodation = await Accommodation.findById(id);
  ctx.body = accommodation;
});

koa.use(app.routes());
koa.listen(3030);
console.log('Koa up at localhost:3030');