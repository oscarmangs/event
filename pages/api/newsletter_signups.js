import fs from "fs";
import path from "path";
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const user_id = req.body.user_id;

    const emails = { emails: "abs" };

    fs.writeFileSync("./data/users.json", JSON.stringify(user_id, null, 4));
//testdbaccess test123db
    const uri =
      "mongodb+srv://oscar:test123db@test1.5gu5yxr.mongodb.net/?retryWrites=true&w=majority";
    const client = await MongoClient.connect(uri);
    const db = await client.db("test1");
    await db.collection("emails").insertOne({ email: "test@test.se" });

    client.close();

    res.status(201).json({ message: "success!", user_id: emails });
  }
}

export default handler;
