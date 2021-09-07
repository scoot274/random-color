import { Hex } from "src/Tools/Types";

const getHex = () => { 

 let arr: string[] = [];

 let max_hex = 15;
 let min_hex = 1;

 let map: Hex[] = [
  {number: 10, letter: "A"},
  {number: 11, letter: "B"},
  {number: 12, letter: "C"},
  {number: 13, letter: "D"},
  {number: 14, letter: "E"},
  {number: 15, letter: "F"}
 ];

 while(arr.length < 6) {
  let get_number = Math.floor(Math.random() * (max_hex - min_hex + 1) + min_hex);
  if(get_number > 9) {
    let result = map.find(({number}) => number === get_number);
    if(typeof result == "undefined") result = map[0];
    arr.push(result.letter);
   }
  else arr.push(get_number.toString());
 }
 let hex = arr.join('');
 return hex;
}
export default getHex;