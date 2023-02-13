const crypto = require("crypto");
const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("should return the partitionKey if it is a string and its length is less than or equal to MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: "a".repeat(256) };
    expect(deterministicPartitionKey(event)).toBe("a".repeat(256));
  });

  it("should return the sha3-512 hash of the partitionKey if it is a string and its length is greater than MAX_PARTITION_KEY_LENGTH", () => {
    const event = { partitionKey: "a".repeat(257) };
    const hash = crypto.createHash("sha3-512").update("a".repeat(257)).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(hash);
  });

  it("should return the sha3-512 hash of the stringified event if the partitionKey is not a string", () => {
    const event = { partitionKey: { foo: "bar" } };
    const hash = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
    expect(deterministicPartitionKey(event)).toBe(hash);
  });

  
});