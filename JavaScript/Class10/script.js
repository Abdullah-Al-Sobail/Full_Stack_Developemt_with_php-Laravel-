// let x = 10;
// let y =3.14;
// console.log(typeof x);
// console.log(typeof y);
// let a =123e5;
// let b =123e-5;
// console.log(a);
// console.log(b);

// let c = 999999999999999;
// let d = 9999999999999999;

// console.log(c);
// console.log(d);
// let a =10;
// let b= 20;
// let d ="20";
// let c= a+b+d;
// console.log(c);
// let x ="100";
// let y ="10";
// let z = x / "10" ;
// console.log(z)
// console.log(Math.pow(10,4));
// console.log(Math.floor(10.99));
// console.log(Math.max(1,2,3,4,5,6,7,8,9,0));
// console.log(Math.min(1,2,3,4,5,6,7,8,9,0));
// const numbers =[1,2,3,4,5,6,7,8,9,0];
// console.log(Math.min(...numbers));
// console.log(Math.random());
// console.log(Math.random() *100);
// console.log(Math.floor(Math.random() *100));
// console.log(Math.round(Math.random() *100))
const text = 'Contrary to popular belief,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque pariatur consequuntur, provident harum cum aliquid nam explicabo iste quidem. Ratione incidunt labore, dolore nulla sequi explicabo odit, ad voluptatem exercitationem maiores perferendis distinctio? Eos mollitia autem iusto, ipsa magni id impedit sint deserunt minus quia, cum consequuntur enim et asperiores.amet consectetur adipisicing elit. Cumque pariatur consequuntur, provident harum cum aliquid nam explicabo iste quidem. Ratione incidunt labore, dolore nulla sequi explicabo odit, ad voluptatem exercitationem maiores perferendis distinctio? Eos mollitia autem iusto, ipsa magni id impedit sint deserunt minus quia, cum consequuntur enim et asperiores'
const readingTime = Math.ceil(text.split(/\s/g).length /200);
console.log(`${readingTime} Min Read`);