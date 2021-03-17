import * as express from "express";

const app: express.Express = express();

let items = [
  {
    id: 1,
    name: "aaa",
  },
  {
    id: 2,
    name: "bbb",
  },
];

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router: express.Router = express.Router();
router.get("/", (_: express.Request, res: express.Response) => {
  res.json({ data: items });
});
router.post("/", (req: express.Request, res: express.Response) => {
  const name = req.body.item.name;
  const item = {
    id: items.length + 1,
    name: name,
  };
  items.push(item);
  res.send({ item });
});
app.use(router);

app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
