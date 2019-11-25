export default {
  post: async (request)=>{
    return await {
      status: 0,
      body: {
        test: "test"
      }
    }
  }
}