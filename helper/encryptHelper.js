const crypto = require("crypto");

// Function to encrypt data
function encryptSecret(data, key) {
  // Hash the key to ensure it is 32 bytes long
  const paddedKey = crypto.createHash("sha256").update(key).digest();

  // Create a random initialization vector (IV)
  const iv = crypto.randomBytes(16); // Random 16-byte IV

  // Create a cipher instance
  const cipher = crypto.createCipheriv("aes-256-cbc", paddedKey, iv);

  // Encrypt the data
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");

  // Embed IV within the encrypted data (e.g., prepend it)
  const ivWithEncryptedData = `${iv.toString("hex")}:${encrypted}`;

  return ivWithEncryptedData; // Return IV and encrypted data as a single string
}

// Function to decrypt data
function decrypt(ivWithEncryptedData, key) {
  // Split the IV and encrypted data
  const [iv, encryptedData] = ivWithEncryptedData.split(":");

  // Hash the key to ensure it is 32 bytes long
  const paddedKey = crypto.createHash("sha256").update(key).digest();

  // Convert the IV back to a Buffer
  const ivBuffer = Buffer.from(iv, "hex");

  // Create a decipher instance
  const decipher = crypto.createDecipheriv("aes-256-cbc", paddedKey, ivBuffer);

  // Decrypt the data
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}

module.exports = { encryptSecret, decrypt };
