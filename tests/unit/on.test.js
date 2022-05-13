import $ from "./../../src/scripts/easy-dom";

document.body.innerHTML = `<div><button class="calc">Calc 7 * 7</button></div>`;

describe('Testing listeners & events', () => {

    test('test click', () => {
        let result = 7;
        $('.calc').on('click', () => result *= result);
        $('.calc').elements[0].click();

        expect(result).toBe(49);
    });

});
