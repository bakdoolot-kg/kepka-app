export default class CapService {
    _apiBase='http://164.92.190.147:8000/api/v1'

    getResource = async  (url)=>{
        const res = await fetch(`${this._apiBase}${url}`)
        if(! res.ok){
            throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
        }
        return await res.json();
    };

    getAllCaps = async ()=>{
        const cap = await this.getResource(`/caps/`)
        return this._transformAllCaps(cap)
    }

    getCap = async (id)=>{
        const cap = await this.getResource(`/caps/${id}/`)
        return this._transformCap(cap)
    }

    _transformAllCaps=(cap)=>{
        return {
            results: cap.results
        }
    }
    _transformCap = (cap)=>{
        return{
            image: cap.capsimage[0].image,
            name: cap.name,
            price: cap.price,
            brand: cap.brand,
            size: cap.size
        }
    }
}