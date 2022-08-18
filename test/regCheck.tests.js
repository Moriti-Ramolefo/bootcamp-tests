describe('Test regCheck function...' , function(){
    it("... it should return 'true' if the registration code matches the registration number" , function(){
        assert.equal(true, regCheck("DC 55 YU GP", "GP"));
    });

    it("... it should return 'false' if the registration code DOES NOT matches the registration number" , function(){
        assert.equal(false, regCheck('DC 55 YU GP', 'EC'));
    });
});