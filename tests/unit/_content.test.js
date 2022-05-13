import $ from "./../../src/scripts/easy-dom";

document.body.innerHTML = `
    <div id="main">
        <nav id="navbar" class="navbar navbar_active navbar_start">
            <!-- Must be button -->
            
            <div>
                <ul>
                    <li><a href="#" class="link">item 1</a></li>
                    <li><a href="#" class="link">item 2</a></li>
                    <li><a href="#" class="link">item 3</a></li>
                </ul>
            </div>
        </nav>
    </div>
`;

const main = document.getElementById('main');
const navbar = document.getElementById('navbar');

describe('Testing content', () => {

    test('test html()', () => {
        $('#navbar').html(`<button id="toggler" class="menu-toggle">Menu</button>`);
        expect(document.getElementById('toggler')).toBeTruthy();
    });

    test('test append()', () => {
        $('#main').append(`<button class="js-delete" data-post-id="7">Delete post</button>`);
        expect(document.querySelectorAll('.js-delete').length).toBe(1);
    });

    // test('test find()', () => {
    //     let nodes_count = Array.from(main.querySelectorAll('.link')).length;
    //     expect(nodes_count).toBe(3);
    // });

});
