import PropTypes from "prop-types";
import Bookmark from "./Bookmark";

const Booksmarks = ({ bookmarks, readTime}) => {
    return (
        <div className="md:w-1/3">
            <div className="p-4 m-4 mt-8 bg-[#6047EC1A] border rounded border-[#6047ec]">
                <h1 className="text-xl text-[#6047ec] text-center font-bold">Spent time on read : {readTime} min</h1>
            </div>
            <div className=" bg-slate-200 p-4 m-4 rounded">
                <h1 className="pl-4 p-4 text-xl font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Booksmarks.propTypes = {
    bookmarks: PropTypes.array,
    readTime : PropTypes.number
}

export default Booksmarks;