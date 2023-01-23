import { getGameById } from '../fetch-utils.js';

const test = QUnit.test;

// test('we should be able to fetch a game by id from our database', async (expect) => {
//     // Arrange
//     const expected = {
//         category: '4X',
//         created_at: '2023-01-23T18:28:41.659351+00:00',
//         designer_id: 3,
//         designers: {
//             name: 'Touko Tahkokallio'
//         },
//         id: 3,
//         name: 'Eclipse: Second Dawn for the Galaxy',
//         player_max: 6,
//         player_min: 2,
//         rating: 8.5
//     };

//     // Act
//     const actual = await getGameById(3);

//     // Assert
//     expect.deepEqual(actual, expected);
// });

test('we should be able to fetch a game by id from our database', async (expect) => {
    // Arrange
    const expectedName = 'string';
    const expectedRating = 'number';
    const expectedDesigner = 'string';
    // Act
    const response = await getGameById(3);

    // Assert
    expect.deepEqual(typeof response.name, expectedName, 'the name is a string');
    expect.deepEqual(typeof response.rating, expectedRating, 'the rating is a number');
    expect.deepEqual(typeof response.designers.name, expectedDesigner, 'the designer name is a string');
});
