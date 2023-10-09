export const sendDiscordWebhook = async (webhookUrl: string, message: object) => {
    try {
        // A fetch request to send data through the discord
        // webhook, and display it as a message in your
        // discord channel
        await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        })
    } catch (err: any) {
        // Just in case :)
        console.log(err.message)
    }
}