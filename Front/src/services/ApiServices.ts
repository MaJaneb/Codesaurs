import axios from "axios";


export default class ApiServices {

    _apiBase: string  = "https://jsonplaceholder.typicode.com/"
    _apiGetPosts: string = "https://jsonplaceholder.typicode.com/posts"

    getResource = async (url: string) => {
        try {
            const res = await axios.get(url)
        }
        catch (error) {
            console.error(error.toJSON())
        }
    }


    getFilteredProducts = async (url: string) => {
        const res: any = await this.getResource(this._apiBase + `${url}`)
        return res.items.map((this._transformData));
    }



    _transformData = (data: any) => {
        return {
            id: data.id,
            title: data.title,
            imageUrl: data.imageUrl,
            description: data.description,
            level: data.level,
            length: data.length,
            cost: data.cost
        }
    }
}