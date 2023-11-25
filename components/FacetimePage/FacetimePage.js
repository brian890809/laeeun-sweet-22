import * as content from './content'

const FacetimePage = () => {
    return (
        <div className="bg-dark-cream h-screen flex flex-col justify-center">
            <div className="text-center text-lg leading-10 text-gray-dark mx-auto">
                {content.ofc}
            </div>
            <div className='mt-5'>
            {content.contentList.map(content => (
                <div key='1' className="text-center text-lg text-gray-dark mx-auto">
                {content}
                </div>
            ))}
            </div>
        </div>
    )
}

export default FacetimePage
