var checkType= uxs.getVar('checkTypeName')
var checkCount =responseData.filter(check => check.check_type_name === checkType)
expect(checkCount,"Filter must return checks").to.have.lengthOf.above(0);
uxs.setVar('checkCount',checkCount.length)