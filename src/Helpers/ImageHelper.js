import { IMAGE_BASE_URL } from '@env'
export const getImageUrl = ( path, original = false ) =>{
    let url = ""
    if(original)
        url = IMAGE_BASE_URL + 'original' + path
    else 
        url = IMAGE_BASE_URL + 'w200' + path
    return url;
}