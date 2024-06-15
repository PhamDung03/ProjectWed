import imgDefault from "../img/default.jpg"

export const formatImg = (image) => {
    return image ? `http://localhost:8080${image}` : imgDefault
}