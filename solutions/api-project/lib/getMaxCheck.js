
    var checks= uxs.getVar('checks')
    expect(checks,"Checks of type must be greater than 0.").to.have.lengthOf.above(0);
    var maxChecks = checks.sort( (c1,c2) => {return c2.value - c1.value })
    var checkId= maxChecks[0].id
    uxs.setVar('checkId', checkId)
