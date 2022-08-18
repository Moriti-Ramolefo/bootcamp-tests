describe('Test countAllFromTown function...' , function(){
    it("... it should return the number of registration numbers counted from a town [4 from Stellies] " , function(){
        assert.equal(4, countAllFromTown('CL 124,CL 567,CL 345, CJ 456,CL 341','CL'));
    });

    it("... it should return the number of registration numbers counted from a town [2 from Kuilsriver]" , function(){
        assert.equal(2, countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CY 341','CY'));
    });
});