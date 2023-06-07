const crypto = require("crypto");

const TRIVIAL_PARTITION_KEY = "0";
const MAX_PARTITION_KEY_LENGTH = 256;

/**
 * Determines the partition key based on the provided event object.
 * if the event has a partitionKey property, it uses that as the partition key.
 * otherwise, it generates a hash using SHA-3-512 from the event data.
 * if the partition key exceeds the maximum length, it hashes the partition key itself.
 * @param {Object} event - The event object.
 * @returns {string} The determined partition key.
 */
const deterministicPartitionKey = (event) => {
    let candidate = null;

    if (event) {
        candidate = event.partitionKey;
    }

    if (!candidate) {
        const data = JSON.stringify(event);
        candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    } else if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
        // if candidate key exist and is longer than the maximum length, hash it using SHA-3-512
        candidate = crypto.createHash("sha3-512").update(candidate).digest("hex");
    }

    return candidate || TRIVIAL_PARTITION_KEY;
};

module.exports = {
    deterministicPartitionKey
};