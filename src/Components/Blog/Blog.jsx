import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,hashtags,cover,reading_time,author_img,name,post_date} = blog;
    return (
        <div className='border-b-2 pt-8 pb-4'>
            <img className='w-full' src={cover} alt="" />
            <div className='flex items-center justify-between mt-4'>
                <div className='flex items-center justify-start gap-4'>
                    <div><img className='w-14 rounded-full' src={author_img} alt="" /></div>
                    <div>
                        <h3 className='text-xl font-bold'>{name}</h3>
                        <p className='text-gray-500'>{post_date}</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-500'>{reading_time} min read</p>
                </div>
            </div>
            <h1 className='text-4xl font-bold mt-4'> {title}</h1>
            <p className='mt-4'>
                {
                    hashtags.map((hash,index) => <span key={index}><a href='' className='text-gray-500'>{hash}</a></span>)
                }
            </p>
            <p className='mt-4'><a className='text-[#6047EC]' href="">Mark as Read</a></p>
        </div>
    );
};

Blog.propTypes ={
    blog : PropTypes.object.isRequired
}

export default Blog;