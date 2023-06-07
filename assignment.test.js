const crypto = require("crypto");
const { deterministicPartitionKey } = require("./assignment");

describe("deterministicPartitionKey", () => {
    // Test case 1: Event with a partitionKey
    it("should return the partitionKey when it exists", () => {
        const event = { partitionKey: "abc123" };
        const result = deterministicPartitionKey(event);
        expect(result).toBe("abc123");
    });

    // Test case 2: Event without a partitionKey
    it("should generate a SHA-3-512 hash from the event data", () => {
        const event = { name: "John", age: 30 };
        const data = JSON.stringify(event);
        const expectedHash = crypto.createHash("sha3-512").update(data).digest("hex");
        const result = deterministicPartitionKey(event);
        expect(result).toBe(expectedHash);
    });

    // Test case 3: Event with a partitionKey exceeding the maximum length
    it("should hash the partitionKey when it exceeds the maximum length", () => {
        const longPartitionKey = "a".repeat(MAX_PARTITION_KEY_LENGTH + 1);
        const expectedHash = crypto.createHash("sha3-512").update(longPartitionKey).digest("hex");
        const event = { partitionKey: longPartitionKey };
        const result = deterministicPartitionKey(event);
        expect(result).toBe(expectedHash);
    });

    // Test case 4: Empty event
    it("should return the trivial partition key for an empty event", () => {
        const event = {};
        const result = deterministicPartitionKey(event);
        expect(result).toBe(TRIVIAL_PARTITION_KEY);
    });
});
