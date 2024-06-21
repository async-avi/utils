// set cookie configuration

app.use(
  cors({
    origin: "http://192.168.1.21:5173",
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);
app.post("/", (req, res) => {
  res.cookie("exampleCookie", "cookieValue", {
    httpOnly: true,
  });
  res.send("Cookie is set");
});
