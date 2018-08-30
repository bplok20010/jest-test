
test('adds 1 + 2 to equal 3', () => {
    const $ = require('jquery');

    var a = 1;

    console.log(document)

    document.body.innerHTML =
        '<div>' +
        '  <span id="username" />' +
        '  <button id="button" />' +
        '</div>';

    $('#button').click(() => {
        a = 2;
    });

    $('#button').click();

    expect(a).toEqual(2);
});
