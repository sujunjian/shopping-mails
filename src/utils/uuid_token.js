import {v4 as uuidv4} from 'uuid'

// 生成一个随机字符串 而且每次执行不能发生变化
export const getuuid=()=>{
    // 先看一下本地存储是否有uuid
    let uuid_token=localStorage.getItem("uuidtoken")
    // 只走一次
    if(!uuid_token){
        // 随机生成一个字符串
        uuid_token=uuidv4();
        localStorage.setItem('uuidtoken',uuid_token);
    }
    return uuid_token;
}