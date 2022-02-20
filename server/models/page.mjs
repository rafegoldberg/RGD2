import M from "mongoose";

/* 
GET /:page/children -> list of child pages
 */

const options = {
  timestamps: true,
  discriminatorKey: "type",
  toObject: { virtuals: true },
  toJSON: {
    getters: true,
    versionKey: false,
    depopulate: false,
    virtuals: true,
  },
};

const PageSchema = new M.Schema(
  {
    title: { type: String, required: true, trim: true, unique: true },
    displayTitle: { type: String, trim: true },
    body: { type: String, trim: true },
    author: { type: M.Types.ObjectId, ref: "User" },
    type: { type: String, default: "Page" },
  },
  options
);

PageSchema.virtual("slug").get(function generateSlug() {
  return this.title
    .toLowerCase()
    .replace(/\s+/g, "-") // replace spaces w/dashes
    .replace(/[^\w\-]+/g, "") // remove non-word chars
    .replace(/\-\-+/g, "-") // merge multiple dashes
    .replace(/^-+/, "") // trim start
    .replace(/-+$/, ""); // trim end
});

PageSchema.methods = {
  async children(fn) {
    const parent = this._id;
    return M.model("ChildPage").find({ parent }, fn);
  },
  async makeRootPage() {
    const clone = this.toJSON();
    delete clone.type;
    delete clone.parent;
    await this.remove();
    return new M.model("Page")(clone).save();
  },
  async makeChildPage(parent) {
    if (this.type === "ChildPage")
      return console.error("This is already a child page!");
    if (!parent)
      return console.error("Conversion requires a parent ID to be passed.");

    await this.remove();
    return new M.model("ChildPage")({
      ...this.toJSON(),
      parent,
      type: "ChildPage",
    }).save();
  },
};

export const Page = M.model("Page", PageSchema);

export const ChildPage = Page.discriminator(
  "ChildPage",
  new M.Schema(
    { parent: { type: M.Types.ObjectId, ref: "Page", required: true } },
    options
  )
);

export default Page;
