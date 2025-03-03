# Import HTML

Imports an html file in other html file

It is implemented through <link> tag

It is accessed through Http protocol.

<link rel="import" href="./my-component.html">

This way of import is DEPRECATED

<!-- ./mi-componente.html-->
<template>
    <h1>hola<h1>
<template>
<script>
    window.customElements.define('my-component', class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: 'open'});
            let content = document.querySelector('template').content;
            this.shadowroot.appendChild(content, true);
        }
    })
<script>

Then it is a contemporary way of import it

It imported a javascript file from an html

It is imported through script tag

Only can be imported JS code

The templeates are loaded using AJX or literals


