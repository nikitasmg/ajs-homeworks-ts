import Cart from '../service/Cart';
import Movie from "../domain/Movie";
import MusicAlbum from "../domain/MusicAlbum";

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new card should have one item', () => {
  const cart = new Cart();
  cart.add(new Movie(999,'Мстители',1000, 2012,'США','Avengers Assemble!',['фантастика', 'боевик','фэнтэзи'], 137))
  expect(cart.items.length).toBe(1);
});
test('new card should return sum', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(999,'Мстители',1000, 2012,'США','Avengers Assemble!',['фантастика', 'боевик','фэнтэзи'], 137))
  expect(cart.getSum()).toBe(1900);
});

test('new card should return sum with amount', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(999,'Мстители',1000, 2012,'США','Avengers Assemble!',['фантастика', 'боевик','фэнтэзи'], 137))
  expect(cart.getSumWithAmount(50)).toBe(950);
});

test('new card should be one item less', () => {
  const cart = new Cart();
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(999,'Мстители',1000, 2012,'США','Avengers Assemble!',['фантастика', 'боевик','фэнтэзи'], 137))
  cart.deleteItem(1008)
  expect(cart.items.length).toBe(1);
});
