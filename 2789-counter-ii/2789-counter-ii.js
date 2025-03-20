/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentCount = init;
    let Obj = {
        increment : function increment(){
            return ++currentCount
        },
        decrement : function decrement(){
            return --currentCount
        },
        reset : function reset(){
            return currentCount = init;
        }
    }
    return Obj;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */