import { PicturePageBase } from "../PicturePageBase";
import { imageSource } from "./content";

const PicturePage2 = () => {
    return (
        <div className="bg-dark-cream h-screen flex justify-center">
            <PicturePageBase imgSrc={imageSource} customStyles="h-[90%] w-11/12 block m-auto"/>
        </div>
    )
}

export default PicturePage2