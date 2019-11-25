import httpReq from 'axios'

export default {
  post: (request)=>{

    return new Promise((resolve, reject)=>{
      
      httpReq({
        method: 'post',
        url: request.url,
        data: request.body,
        headers: request.headers
      }).then((result)=>{
        resolve(result.data)
      }).catch((err)=>{
        reject(err)
      })
      
    })
  }
}