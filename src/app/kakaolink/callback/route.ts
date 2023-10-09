import { sendDiscordWebhook } from "@/app/server/discord";

export async function POST(request: Request) {
    const auth = request.headers.get("authorization");

    if (!auth || auth !== `KakaoAK ${process.env.KAKAO_ADMIN_APP_KEY}`) {
        return new Response("Authorization header missing or invalid", { status: 401 });
    }

    const body = await request.json();

    await sendDiscordWebhook(
        "https://discord.com/api/webhooks/1160938176140025987/FneHOSNvAO1WYVEXbMwTtKVRJrJlzhq_IDw7i2QGn7WF8zNr5QhgdyIJwoA0mfCDzUUV",
        {
            embeds: [
                {
                    title: "카카오링크 콜백",
                    color: 16307714,
                    fields: [
                        { name: "user-agent", value: request.headers.get("user-agent"), inline: true },
                        { name: "kakao-resource-id", value: `${request.headers.get("x-kakao-resource-id")}` },
                        { name: "CHAT_TYPE", value: `${body["CHAT_TYPE"]}`, inline: true },
                        { name: "HASH_CHAT_ID", value: `${body["HASH_CHAT_ID"]}`, inline: true },
                        { name: "TEMPLATE_ID", value: `${body["TEMPLATE_ID"]}`, inline: true },
                        { name: "TEMPLATE_ARGS", value: `${JSON.stringify(body["TEMPLATE_ARGS"])}` }
                    ]
                }
            ]
        }
    );

    return new Response("OK");
}