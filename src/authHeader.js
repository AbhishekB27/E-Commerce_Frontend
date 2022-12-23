const authHeader = () =>{
const token = localStorage.getItem('access_token') ?? null
return {'x-access-token': `Bearer ${token}`}
}

export default authHeader