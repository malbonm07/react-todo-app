const BoxShadowMixin = function(n) {
    switch(n) {

        case 1:
            return `box-shadow: 0 1px 1px 0 rgba(0, 0, 0, .14), 0 2px 1px -1px rgba(0, 0, 0, .12), 0 1px 3px 0 rgba(0, 0, 0, .20)`;
        case 2:
            return `box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .12), 0 1px 5px 0 rgba(0, 0, 0, .20)`;
        case 3:
            return `box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .12), 0 1px 8px 0 rgba(0, 0, 0, .20)`;
        case 4:
            return `box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .20)`;
        default:
            return ``;
    }
}

export default BoxShadowMixin;