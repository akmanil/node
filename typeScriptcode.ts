// function foo(bar: number): string {
//   return console.log('hello');
// }

// it gives error because the function return string which console not return string type

function foo(bar: number): string {
  console.log('hello');
  return 'done';
}
//npm i -D tsx
//npx tsx example.ts

// function foo(bar: number): void {
//   console.log('hello');
// }
