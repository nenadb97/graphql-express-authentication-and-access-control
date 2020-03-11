import { IBook } from "../../../interfaces/fake-db.interface";
import { books } from "../../../helpers/fake-db.helper";
import { MESSAGE_INVALID_PARAMETER } from "../../../helpers/messages";

export default class BookQueryService {
    getById(id: number): IBook {
        const index = books.findIndex((item) => item.id === id);

        if (index === -1) {
            throw new Error(MESSAGE_INVALID_PARAMETER)
        }

        return books[index];
    }

    getAll(): IBook[] {
        return books;
    }
}
