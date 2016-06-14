var pfx = ["webkit", "moz", "MS", "o", ""];
export function PrefixedEvent(element, type, callback) {
    type = 'Animation' + type;
    for (var p = 0; p < pfx.length; p++) {
        if (!pfx[p]) type = type.toLowerCase();
        element.addEventListener(pfx[p]+type, callback, false);
    }
}


export default function addOnce(element, classNames, callback) {
    element.classList.add(...classNames);
    PrefixedEvent(element, 'End', function() {
        this.classList.remove(...classNames);
        if(typeof callback === 'function') {
            callback(element);
        }
    });
}
