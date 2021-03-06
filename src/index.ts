export function setAttribute(el: Element, name: string, value: any): Element {
	if (value === false || value == null) {
		el.removeAttribute(name);
	} else {
		el.setAttribute(name, value === true ? '' : value);
	}

	return el;
}
