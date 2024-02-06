export const getUser = async()=>{
    const resonse = await fetch('https://randomuser.me/api/',{method: "GET"})
    return await resonse.json()
}