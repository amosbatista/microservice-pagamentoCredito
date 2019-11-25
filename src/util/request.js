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
        resolve({
          status: result.data.status,
          body: result.data.body
        })
      }).catch((err)=>{
        reject({
          status: err.data.status,
          body: err.data.body
        })
      })
      
    })
  }
}