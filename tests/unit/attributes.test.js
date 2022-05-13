import $ from "./../../src/scripts/easy-dom";

document.body.innerHTML = `
    <div>
        <nav id="navbar" class="navbar navbar_active navbar_start">
            <button class="menu-toggle">Menu</button>
        </nav>
        <button class="js-delete" data-post-id="7">Delete post</button>
    </div>
`;

const navbar = document.getElementById('navbar');

describe('Testing attributes', () => {

    test('test get attribute', () => {
        expect($('.js-delete').attr('data-post-id')).toBe('7');
    });

    test('test set attribute', () => {
        expect($('.js-delete').attr('data-post-id', '19')).toBe('19');
    });

    test('test addClass', () => {
        $('#navbar').addClass('navbar_dark');
        expect(navbar.classList.contains('navbar_dark')).toBeTruthy();
    });

    test('test removeClass', () => {
        $('#navbar').removeClass('navbar_start');
        expect(navbar.classList.contains('navbar_start')).toBeFalsy();
    });

    test('test toggleClass', () => {
        $('#navbar').toggleClass('navbar_active');
        expect(navbar.classList.contains('navbar_active')).toBeFalsy();
    });

    test('test hasClass', () => {
        $('#navbar').hasClass('navbar');
        expect(navbar.classList.contains('navbar')).toBeTruthy();
    });

});
