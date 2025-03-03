## Attributes and Properties

# Attributes

* Properties can be defined declaratively from HTML
* They are always String type values
* Can be connected to the component life cycle

Next is the way of declaring a customized attribute from HTML:

<web-component titulo="Hola mundo"></web-component>

The following is the way to acces the attribute in a programatic way:

let titulo = element.getAttribute('titulo');

element.setAttribute('titulo', 'Hola');

# Properties

* They are defined in a programatic way

* Their value can be of whichever type

* Set ang get are used for access, modifiy and conect with the component lifecycle

set titulo(titulo) {
    this._titulo = titulo;
}

get titulo() {
    return this._titulo;
}