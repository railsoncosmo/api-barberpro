import { PrismaClient } from "@prisma/client";
import { UserRepository } from "../../src/repository/user/UserRepository";

const prisma = new PrismaClient();
const userRepository = new UserRepository();

beforeAll( async() => {
  await prisma.$connect();
});

afterAll(async() => {
  await prisma.$disconnect();
});

describe("tests in the user repository", () => {
  test("should create a user", async() => {

    const user = await userRepository.createUser({
      email: "example@example.com",
      name: "example",
      endereco: "example, 123",
      password: "123"
    });

    expect(user).toHaveProperty("id");
    expect(user.name).toBe("example");
    expect(user.email).toBe("example@example.com");
    expect(user.password).toBe("123");
  })
})