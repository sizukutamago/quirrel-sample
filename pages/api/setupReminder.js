import reminderQueue from "./queues/reminder";

export default async (req, res) => {
    const email = req.body;
    await reminderQueue.enqueue(
        email,
        {
            id: email,
            delay: "1min",
            repeat: {
                every: "1min",
                times: 1, // 16 * 30min = 8h
            },
        }
    );
    res.status(200).end();
}
