import { on } from "./core/_on";
import { attr, addClass, removeClass, toggleClass, hasClass } from "./core/_attributes";
import { html, append, find } from "./core/_content";
import { css } from "./core/_css";
import { ajax } from "./core/_ajax";


export default function(el) {
    return {
        // DOM elements or DOM object
        elements: typeof el === "string" ? Array.from(document.querySelectorAll(el)) : el,

        // Listeners & events
        on,

        // Attributes
        attr, addClass, removeClass, toggleClass, hasClass,

        // Content
        html, append, find,

        // Styles & effects
        css,

        // AJAX
        ajax,
    };
}