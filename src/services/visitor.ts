import supabase from "./supabase";

async function getUserIp() {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    return data.ip;
}

export async function saveVisitor() {
    const IP_STORAGE_KEY = "sl-user-ip";
    const ONE_HOUR_IN_MS = 3_600_000;
    const savedIp = localStorage.getItem(IP_STORAGE_KEY);
    console.log({ savedIp });
    const now = Date.now();

    let user_ip = "";

    if (!savedIp) {
        user_ip = await getUserIp();
    }

    if (savedIp) {
        const savedAt = new Date(+savedIp.split(",")[1]).getTime();
        if (!(now - ONE_HOUR_IN_MS >= savedAt)) return;
        user_ip = await getUserIp();
    }

    localStorage.setItem(IP_STORAGE_KEY, `${user_ip},${now}`);

    return await supabase.from("visitors").insert({ ip: user_ip });
}

export async function getVisitor() {
    return await supabase.from("visitors").select("created_at");
}
