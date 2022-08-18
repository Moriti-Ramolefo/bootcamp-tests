describe('Test countRegNumber function...' , function(){
    it("... it should return the number of registration numbers counted [3]" , function(){
        assert.equal(3, countRegNumber('CA 182736,CY 523519,CJ 812328'));
    });

    it("... it should return the number of registration numbers counted [1]" , function(){
        assert.equal(1, countRegNumber('CA 182736'));
    });
});