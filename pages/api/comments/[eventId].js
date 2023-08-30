function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    // console.log(req.body);
    //mongodb+srv://oscar:<password>@test1.5gu5yxr.mongodb.net/?retryWrites=true&w=majority 

    const data = JSON.parse(req.body);

    const { email, name, text } = data;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
    res.status(201).json({ message: "added comment", newComment });
  } else if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "max", text: "first comment" },
      { id: "c2", name: "mani", text: "second comment" },
    ];

    res.status(200).json({ comments: dummyList });
  } else {
  }
}

export default handler;
