const generateSlug = (str) =>
  !str
    ? ""
    : str
        .toLowerCase()
        .replace(/\s+/g, "-") // replace spaces w/dashes
        .replace(/[^\w\-]+/g, "") // remove non-word chars
        .replace(/\-\-+/g, "-") // merge multiple dashes
        .replace(/^-+/, "") // trim start
        .replace(/-+$/, ""); // trim end

export default generateSlug;
