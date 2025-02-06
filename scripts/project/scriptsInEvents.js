window.addEventListener('message', function(event) {
    console.log(event);
});
// Function to convert base64 string to Uint8Array
function base64ToUint8Array(base64) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Function to import a base64-encoded AES key
async function importKey(base64Key) {
  const keyData = base64ToUint8Array(base64Key);
  return await window.crypto.subtle.importKey(
    "raw",
    keyData.buffer,
    "AES-GCM",
    true,
    ["encrypt", "decrypt"]
  );
}

// Main decryption function
async function decryptWithWebCrypto(encryptedData, base64Key, base64Iv) {
  try {
    // Import the key
    const key = await importKey(base64Key);

    // Decode the base64 to binary data
    const encryptedArrayBuffer = base64ToUint8Array(encryptedData).buffer;
    const ivArray = base64ToUint8Array(base64Iv);

    // Decrypt the data
    const decryptedArrayBuffer = await window.crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: ivArray,
      },
      key,
      encryptedArrayBuffer
    );

    // Convert decrypted data back into a string
    const decoder = new TextDecoder();
    const decryptedText = decoder.decode(decryptedArrayBuffer);
//     console.log("Decrypted Text:", decryptedText);
// 	var jsonstr = JSON.stringify(decryptedText);
	c3_callFunction("DecryptSuccess", [decryptedText]);
    return decryptedText;
  } catch (error) {
    console.error("Decryption failed:", error);
  }
}

// Function to convert a string to an ArrayBuffer
function stringToArrayBuffer(string) {
  const encoder = new TextEncoder();
  return encoder.encode(string);
}

// Function to generate a random AES-GCM key
async function generateKey() {
  return await window.crypto.subtle.generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"]
  );
}

// Function to convert Uint8Array to base64 string
function uint8ArrayToBase64(bytes) {
  const binary = String.fromCharCode.apply(null, bytes);
  return btoa(binary);
}

// Main encryption function
// async function encryptJsonDataWOkey(jsonData) {
//   try {
//     // Convert JSON data to string and then to ArrayBuffer
//     const dataString = JSON.stringify(jsonData);
//     const dataBuffer = stringToArrayBuffer(dataString);

//     // Generate a key
//     const key = await generateKey();

//     // Generate a random initialization vector
//     const iv = window.crypto.getRandomValues(new Uint8Array(12));

//     // Encrypt the data
//     const encryptedData = await window.crypto.subtle.encrypt(
//       {
//         name: "AES-GCM",
//         iv: iv,
//       },
//       key,
//       dataBuffer
//     );

//     // Convert encrypted data and IV to base64 for easy storage/transmission
//     const encryptedBase64 = uint8ArrayToBase64(new Uint8Array(encryptedData));
//     const ivBase64 = uint8ArrayToBase64(iv);

//     // Optional: Export the key for storage
//     const exportedKey = await window.crypto.subtle.exportKey("raw", key);
//     const keyBase64 = uint8ArrayToBase64(new Uint8Array(exportedKey));

//     console.log("Encrypted Data (Base64):", encryptedBase64);
//     console.log("IV (Base64):", ivBase64);
//     console.log("Key (Base64):", keyBase64);

//     return { encryptedBase64, ivBase64, keyBase64 }; // Return data for decryption
//   } catch (error) {
//     console.error("Encryption failed:", error);
//   }
// }

async function encryptJsonDataWkey(jsonData, base64Key) {
  try {
    // Import the provided key
    const key = await importKey(base64Key);

    // Convert JSON data to string and then to ArrayBuffer
    const dataString = JSON.stringify(jsonData);
    const dataBuffer = stringToArrayBuffer(dataString);

    // Generate a random initialization vector
    const iv = window.crypto.getRandomValues(new Uint8Array(12));

    // Encrypt the data
    const encryptedData = await window.crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      key,
      dataBuffer
    );

    // Convert encrypted data and IV to base64 for easy storage/transmission
    const encryptedBase64 = uint8ArrayToBase64(new Uint8Array(encryptedData));
    const ivBase64 = uint8ArrayToBase64(iv);

//     console.log("Encrypted Data (Base64):", encryptedBase64);
//     console.log("IV (Base64):", ivBase64);
	c3_callFunction("EncryptSuccess", [encryptedBase64,ivBase64]);
    return { encryptedBase64, ivBase64 }; // Return data for decryption
  } catch (error) {
    console.error("Encryption failed:", error);
  }
}


const scriptsInEvents = {

	async Egame_Event80_Act2(runtime, localVars)
	{
		const jsonData = localVars.jsonData;
		const preExistingKey = localVars.uKey;
		encryptJsonDataWkey(jsonData, preExistingKey);
	},

	async Eloader_Event9_Act1(runtime, localVars)
	{
		// Example usage
		const encryptedData = localVars.encryptedData;
		const key = localVars.uKey;
		const iv = localVars.iv;
		
		// Perform decryption
		decryptWithWebCrypto(encryptedData, key, iv);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

