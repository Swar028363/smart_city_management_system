import React, { useState } from "react";
import { Link } from "react-router-dom";
import { JSEncrypt } from "jsencrypt";
import CryptoJS from "crypto-js";

// Simple Caesar cipher encryption function
function caesarCipherEncrypt(text, shift) {
    return text
        .split("")
        .map((char) => {
            if (char.match(/[a-z]/i)) {
                let code = char.charCodeAt(0);
                // Uppercase letters
                if (code >= 65 && code <= 90) {
                    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
                }
                // Lowercase letters
                else if (code >= 97 && code <= 122) {
                    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
                }
            }
            return char;
        })
        .join("");
}

function Security() {
    // Caesar Cipher State
    const [inputText, setInputText] = useState("");
    const [shift, setShift] = useState(0);
    const [encryptedText, setEncryptedText] = useState("");

    const handleEncrypt = () => {
        const encrypted = caesarCipherEncrypt(inputText, parseInt(shift, 10));
        setEncryptedText(encrypted);
    };

    // SHA-256 State
    const [hashInput, setHashInput] = useState("");
    const [hashResult, setHashResult] = useState("");

    async function handleHash() {
        if (!hashInput) return;
        const encoder = new TextEncoder();
        const data = encoder.encode(hashInput);
        try {
            const hashBuffer = await crypto.subtle.digest("SHA-256", data);
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray
                .map((b) => b.toString(16).padStart(2, "0"))
                .join("");
            setHashResult(hashHex);
        } catch (err) {
            console.error(err);
        }
    }

    // RSA Demo State
    const [rsaInput, setRsaInput] = useState("");
    const [rsaEncrypted, setRsaEncrypted] = useState("");
    const [rsaDecrypted, setRsaDecrypted] = useState("");
    const [rsaKeys, setRsaKeys] = useState({ publicKey: "", privateKey: "" });

    const handleGenerateKeys = () => {
        const jsEncrypt = new JSEncrypt({ default_key_size: 1024 });
        jsEncrypt.getKey();
        const pubKey = jsEncrypt.getPublicKey();
        const privKey = jsEncrypt.getPrivateKey();
        setRsaKeys({ publicKey: pubKey, privateKey: privKey });
    };

    const handleRsaEncrypt = () => {
        if (!rsaInput) {
            alert("Please enter text for RSA encryption.");
            return;
        }
        if (!rsaKeys.publicKey) {
            alert("Please generate RSA keys first.");
            return;
        }
        const jsEncrypt = new JSEncrypt();
        jsEncrypt.setPublicKey(rsaKeys.publicKey);
        const encrypted = jsEncrypt.encrypt(rsaInput);
        if (!encrypted) {
            console.error(
                "RSA encryption failed. Check your input and RSA public key."
            );
            alert("Encryption failed. Please check your input and try again.");
        } else {
            setRsaEncrypted(encrypted);
        }
    };

    const handleRsaDecrypt = () => {
        if (!rsaEncrypted) {
            alert("No encrypted text to decrypt.");
            return;
        }
        if (!rsaKeys.privateKey) {
            alert("Please generate RSA keys first.");
            return;
        }
        const jsDecrypt = new JSEncrypt();
        jsDecrypt.setPrivateKey(rsaKeys.privateKey);
        const decrypted = jsDecrypt.decrypt(rsaEncrypted);
        if (decrypted === null) {
            console.error("RSA decryption failed. Check your RSA private key.");
            alert("Decryption failed. Please check your keys and try again.");
        } else {
            setRsaDecrypted(decrypted);
        }
    };

    // AES Demo State
    const [aesInput, setAesInput] = useState("");
    const [aesKey, setAesKey] = useState("");
    const [aesEncrypted, setAesEncrypted] = useState("");
    const [aesDecrypted, setAesDecrypted] = useState("");

    const handleAesEncrypt = () => {
        if (!aesKey) return;
        const ciphertext = CryptoJS.AES.encrypt(aesInput, aesKey).toString();
        setAesEncrypted(ciphertext);
    };

    const handleAesDecrypt = () => {
        if (!aesKey || !aesEncrypted) return;
        const bytes = CryptoJS.AES.decrypt(aesEncrypted, aesKey);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        setAesDecrypted(originalText);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-10">
            {/* Informational Intro */}
            <section className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-4">
                    Security Algorithms Demonstration
                </h1>
                <p className="text-lg text-gray-700 text-center">
                    Explore various encryption and hashing algorithms used in
                    modern security systems. Below you'll find demos for classic
                    and advanced methods:
                </p>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li>
                        <strong>Caesar Cipher:</strong> A basic substitution
                        cipher demonstrating the concept of encryption.
                    </li>
                    <li>
                        <strong>SHA-256:</strong> A cryptographic hash function
                        ensuring data integrity.
                    </li>
                    <li>
                        <strong>RSA:</strong> An asymmetric encryption algorithm
                        widely used for secure data transmission.
                    </li>
                    <li>
                        <strong>AES:</strong> A symmetric encryption algorithm
                        known for its speed and robustness.
                    </li>
                </ul>
            </section>

            {/* Caesar Cipher Demo Section */}
            <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center">
                    Caesar Cipher Demo
                </h2>
                <p className="text-lg text-gray-700 mb-4 text-center">
                    Enter a message and a shift value to see a simple Caesar
                    cipher in action.
                </p>
                <div className="space-y-4">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Enter your message"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="number"
                        value={shift}
                        onChange={(e) => setShift(e.target.value)}
                        placeholder="Enter shift value"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="text-center">
                        <button
                            onClick={handleEncrypt}
                            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                        >
                            Encrypt Message
                        </button>
                    </div>
                    {encryptedText && (
                        <div className="mt-4 p-4 bg-white border border-gray-300 rounded">
                            <h3 className="text-xl font-medium text-gray-800">
                                Encrypted Message:
                            </h3>
                            <p className="text-gray-700 break-all">
                                {encryptedText}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* SHA-256 Demo Section */}
            <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center">
                    SHA-256 Hash Demo
                </h2>
                <p className="text-lg text-gray-700 mb-4 text-center">
                    Enter a message to generate its SHA-256 hash.
                </p>
                <div className="space-y-4">
                    <input
                        type="text"
                        value={hashInput}
                        onChange={(e) => setHashInput(e.target.value)}
                        placeholder="Enter text to hash"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="text-center">
                        <button
                            onClick={handleHash}
                            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                        >
                            Generate Hash
                        </button>
                    </div>
                    {hashResult && (
                        <div className="mt-4 p-4 bg-white border border-gray-300 rounded">
                            <h3 className="text-xl font-medium text-gray-800">
                                SHA-256 Hash:
                            </h3>
                            <p className="text-gray-700 break-all">
                                {hashResult}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* RSA Demo Section */}
            <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center">
                    RSA Encryption Demo
                </h2>
                <p className="text-lg text-gray-700 mb-4 text-center">
                    Use the buttons below to generate RSA keys, then encrypt and
                    decrypt a message.
                </p>
                <div className="text-center">
                    <button
                        onClick={handleGenerateKeys}
                        className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                    >
                        Generate RSA Keys
                    </button>
                </div>
                {rsaKeys.publicKey && (
                    <div className="mt-4 space-y-4">
                        <div>
                            <h3 className="text-xl font-medium text-gray-800">
                                Public Key:
                            </h3>
                            <pre className="bg-white p-3 border border-gray-300 rounded overflow-x-auto text-sm text-gray-700">
                                {rsaKeys.publicKey}
                            </pre>
                        </div>
                        <div>
                            <h3 className="text-xl font-medium text-gray-800">
                                Private Key:
                            </h3>
                            <pre className="bg-white p-3 border border-gray-300 rounded overflow-x-auto text-sm text-gray-700">
                                {rsaKeys.privateKey}
                            </pre>
                        </div>
                    </div>
                )}
                <div className="space-y-4 mt-6">
                    <input
                        type="text"
                        value={rsaInput}
                        onChange={(e) => setRsaInput(e.target.value)}
                        placeholder="Enter text for RSA demo"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            onClick={handleRsaEncrypt}
                            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            RSA Encrypt
                        </button>
                        <button
                            onClick={handleRsaDecrypt}
                            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                        >
                            RSA Decrypt
                        </button>
                    </div>
                    {rsaEncrypted && (
                        <div className="mt-4 p-4 bg-white border border-gray-300 rounded">
                            <h3 className="text-xl font-medium text-gray-800">
                                RSA Encrypted:
                            </h3>
                            <p className="text-gray-700 break-all">
                                {rsaEncrypted}
                            </p>
                        </div>
                    )}
                    {rsaDecrypted && (
                        <div className="mt-4 p-4 bg-white border border-gray-300 rounded">
                            <h3 className="text-xl font-medium text-gray-800">
                                RSA Decrypted:
                            </h3>
                            <p className="text-gray-700 break-all">
                                {rsaDecrypted}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* AES Demo Section */}
            <section className="bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-4 text-center">
                    AES Encryption Demo
                </h2>
                <p className="text-lg text-gray-700 mb-4 text-center">
                    Enter a message and a secret key to see AES encryption and
                    decryption.
                </p>
                <div className="space-y-4">
                    <input
                        type="text"
                        value={aesInput}
                        onChange={(e) => setAesInput(e.target.value)}
                        placeholder="Enter text for AES demo"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        type="text"
                        value={aesKey}
                        onChange={(e) => setAesKey(e.target.value)}
                        placeholder="Enter secret key"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            onClick={handleAesEncrypt}
                            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                        >
                            AES Encrypt
                        </button>
                        <button
                            onClick={handleAesDecrypt}
                            className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-colors"
                        >
                            AES Decrypt
                        </button>
                    </div>
                    {aesEncrypted && (
                        <div className="mt-4 p-4 bg-white border border-gray-300 rounded">
                            <h3 className="text-xl font-medium text-gray-800">
                                AES Encrypted:
                            </h3>
                            <p className="text-gray-700 break-all">
                                {aesEncrypted}
                            </p>
                        </div>
                    )}
                    {aesDecrypted && (
                        <div className="mt-4 p-4 bg-white border border-gray-300 rounded">
                            <h3 className="text-xl font-medium text-gray-800">
                                AES Decrypted:
                            </h3>
                            <p className="text-gray-700 break-all">
                                {aesDecrypted}
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Security Report Information Section */}
            <section className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <h2 className="text-3xl font-bold mb-4 text-center">
                    Security Report Form
                </h2>
                <p className="text-lg text-gray-700 mb-4 text-center">
                    If you observe any security issues in the city, such as
                    robbery, vandalism, or other suspicious activities, please
                    report them using our Security Report Form. Your input helps
                    us improve urban safety and respond more effectively to
                    incidents.
                </p>
                <p className="text-md text-gray-600 text-center py-4">
                    The form allows you to provide details about the incident,
                    including location, description, and any supporting
                    evidence. Your report is confidential and will be used to
                    enhance our security measures.
                </p>

                {/* Security Issue Report Form Link */}
                <Link
                    to="/securityform"
                    className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                >
                    Report a Security Issue
                </Link>
            </section>
        </div>
    );
}

export default Security;
