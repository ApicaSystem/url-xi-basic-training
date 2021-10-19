/*
* Update configuration (data and url) before running the request.
*/
let check=uxs.getVar('check')
let target_sla=check.target_sla || 0
if(target_sla < 99.5) 
    target_sla = 99.5

let apiName= check.check_type_api
switch (check.check_type_ap) {
  case 'url v2':
    apiName='url-v2'
    break
  case 'cmdxtemplated':
    apiName='command-v2'
    break
}
let url=`checks/${apiName}/${check.id}`
logger.debug('url=%s',url)
requestConfig.url=url
requestConfig.data = {
    "target_sla_2": target_sla ,
    "target_sla": target_sla 
}


