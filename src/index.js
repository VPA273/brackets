module.exports = function check(str, bracketsConfig) {
    let brac = bracketsConfig.join('').replace(/,/g, '');
        let stack = [];
    for (let bracket of str) {
            let brIndex = brac.indexOf(bracket)
            if (brIndex % 2 === 0) {                
                if (bracket === brac[brIndex + 1] && stack[stack.length - 1] === brIndex){
                    stack.pop();
                } else if (bracket === brac[brIndex + 1] && stack[stack.length - 1] !== brIndex) {
                    stack.push(brIndex)
                }
                else{
                    stack.push(brIndex)
                }
            } 
            else {
                if (stack.pop() !== brIndex-1){
                    return false;
                }
            }            
        }
        return stack.length === 0
}
