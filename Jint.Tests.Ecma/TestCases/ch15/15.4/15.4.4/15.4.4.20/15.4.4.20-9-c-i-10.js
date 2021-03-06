/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.4/15.4.4/15.4.4.20/15.4.4.20-9-c-i-10.js
 * @description Array.prototype.filter - element to be retrieved is own accessor property on an Array
 */


function testcase() {

        function callbackfn(val, idx, obj) {
            return idx === 2 && val === 12;
        }

        var arr = [];

        Object.defineProperty(arr, "2", {
            get: function () {
                return 12;
            },
            configurable: true
        });
        var newArr = arr.filter(callbackfn);

        return newArr.length === 1 && newArr[0] === 12;
    }
runTestCase(testcase);
