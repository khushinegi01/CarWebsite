class CarServices{
    async getAllCars(){
        try {
            const response =  await fetch("/car-data.json")
            if (!response.ok) throw new Error('Failed to fetch car data');
            const data = await response.json();
            return data;
        }
        catch(error) {
            console.error("CarServices :: getALlCars :: error :: ", error)
            throw error
        }
    }
    async getCar(id){
        try {
            const response = await fetch("/car-data.json")
            if(!response.ok) throw new Error('carServices :: getCar :: try :: error ::',error)
            const data =  await response.json()
            return data.find((car)=> car.id === parseInt(id))
        }
        catch(error) {
            console.error("CarServices :: getALlCars :: error :: ", error)
            return null
        }
    }
}

const carServices = new CarServices()
export default carServices