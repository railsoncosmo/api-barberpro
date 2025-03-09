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
  })

  test("should detail user", async() => {
    const user_id = "5c2bdf2f-6248-40ad-bd42-3366762bab9a";
    const detailUser = await userRepository.detailByUser(user_id);

    expect(detailUser).toBeDefined();
    expect(detailUser).toHaveProperty("id", user_id);
    expect(detailUser).toHaveProperty("email");
    expect(detailUser).toHaveProperty("name");
    expect(detailUser).toHaveProperty("endereco");
  })

  test("should find email", async () => {
    const findEmail = await userRepository.findByEmail("railson@test.com")

    expect(findEmail).toHaveProperty("email");
  })

  test("should find by user", async () => {
    const user_id = "5c2bdf2f-6248-40ad-bd42-3366762bab9a";
    const findUser = await userRepository.findByUser(user_id);

    expect(typeof findUser).toBe("object");
  })
})