/*  eslint-disable @typescript-eslint/no-unused-vars */
/**TypeScriptの基本の型 */

//boolean
let bool: boolean = true;

//number
let num: number = 1;

//string
let str: string = "文字A";

//Array 配列
let arr: Array<number> = [0, 1, 2];
let arr1: number[] = [0, 1, 2];

//tuple
let tuple: [number, string] = [0, "A "];

//any
let any1: any = false;

//void（返す値が何もないとき　）
const func1 = (): void => {
  const test = "test";
};

//null
let null1: null = null;

//undefined
let undefined1: undefined = undefined;

//object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "aa" };
