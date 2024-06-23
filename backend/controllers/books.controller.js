import Book from "../models/bookModel.js";
import { errorHandler } from "../utils/error.js";

export const getBooks = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;

    const startIndex = parseInt(req.query.startIndex) || 0;

    let title = req.query.title;

    if (title === undefined || title === "false") {
      title = { $in: [false, true] };
    }

    let author = req.query.author;

    if (author === undefined || author === "false") {
      author = { $in: [false, true] };
    }

    let publishYear = req.query.publishYear;

    if (publishYear === undefined || publishYear === "false") {
      publishYear = { $in: [false, true] };
    }

    const searchTerm = req.query.searchTerm || "";

    const sort = req.query.sort || "createdAt";

    const order = req.query.order || "desc";

    const books = await Book.find({
      name: { $regex: searchTerm, $options: "i" },
      Ftitle,
      author,
      publishYear,
      // publishYear,
    })
      .sort({ [sort]: order })
      .limit(limit)
      .skip(startIndex);

    return res.status(200).json(books);
  } catch (error) {
    next(error);
  }
};