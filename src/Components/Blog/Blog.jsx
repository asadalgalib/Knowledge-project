import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark,handleMarkRead }) => {
    const { title, hashtags, cover, reading_time, author_img, name, post_date,id } = blog;
    return (
        <div className='border-b-2 pt-8 pb-4'>
            <img className='w-full rounded-lg' src={cover} alt="" />
            <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center justify-start gap-4'>
                    <div><img className='w-14 rounded-full' src={author_img} alt="" /></div>
                    <div>
                        <h3 className='text-xl font-bold'>{name}</h3>
                        <p className='text-gray-500'>{post_date}</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-4'>
                    <p className='text-gray-500'>{reading_time} min read</p>
                    <button className='text-xl' onClick={() => handleBookmark(blog)}><FaRegBookmark></FaRegBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl font-bold mt-4'> {title}</h1>
            <p className='mt-4'>
                {
                    hashtags.map((hash, index) => <span key={index}><a href='' className='text-gray-500'>{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkRead(reading_time,id)} className='mt-4 text-[#6047EC] underline'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleMarkRead : PropTypes.func.isRequired
}

export default Blog;