function generateRandomString(length:number) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    result += chars[randomIndex];
  }

  return result;
}

function copy(content:string){
   navigator.clipboard.writeText(content);
}

function parseUpi(text: string): Record<string, string | null> | null {
  if (!text.startsWith("upi://")) return null;

  try {
    const url = new URL(text);
    const params = url.searchParams;

    return {
      pa: params.get("pa"), // payee address
      pn: params.get("pn"), // payee name
      am: params.get("am"), // amount
      cu: params.get("cu"), // currency
      tn: params.get("tn"), // transaction note
    };
  } catch {
    return null;
  }
}
export {
    generateRandomString,
    copy,
    parseUpi
}