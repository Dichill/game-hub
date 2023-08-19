import errorImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (url : string) => {
    try {
        const target = 'media/'
        const index = url.indexOf(target) + target.length;
        return url.slice(0, index) + 'crop/600/400/' + url.slice(index)
    }
    catch {
        return errorImage
    }
    
}

export default getCroppedImageUrl