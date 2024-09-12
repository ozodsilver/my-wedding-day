import CryptoJS from 'crypto-js';

// Xabarni shifrlash funksiyasi
export function encryptMessage(message: string, secretKey: string): string {
    return CryptoJS.AES.encrypt(message, secretKey).toString();
}

// Xabarni deshifrlash funksiyasi
export function decryptMessage(encryptedMessage: string, secretKey: string): string {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}
