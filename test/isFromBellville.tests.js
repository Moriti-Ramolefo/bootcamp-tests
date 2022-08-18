describe('Test isFromBellville function...' , function(){
    it("... it should return 'true' when registration number is from Bellville" , function(){
        assert.equal(true, isFromBellville('CY 123'));
    });

    it("... it should return 'false' when registration number is NOT from Bellville" , function(){
        assert.equal(false, isFromBellville('CJ 123'));
    });
});