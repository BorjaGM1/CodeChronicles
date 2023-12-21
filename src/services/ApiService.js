const ApiService = {
    apiUrl: 'https://localhost:7207',

    async fetchTest(){
        try {
            const response = await fetch(`${this.apiUrl}/Test`);
            if(!response.ok){
                throw new Error(response.json);
            }
            return response;
        } catch (error) {
            throw error;
        }
    }
};

export default ApiService;