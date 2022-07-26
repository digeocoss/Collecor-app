import { Faker, faker } from "@faker-js/faker";

export const COLLECTIONS = [];

function createCollections() {
  return {
    userId: faker.datatype.uuid(),
    username: faker.internet.userName(),
    itemId: faker.datatype.uuid(),
    image: faker.image.abstract(),
    itemName: faker.lorem.words(3),
    itemDescription: faker.lorem.paragraph(3),
  };
}
