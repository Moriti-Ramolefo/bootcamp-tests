describe('Test greet function...' , function(){
    it("... it should return 'Hello, Moriti' when called with 'Moriti'" , function(){
        assert.equal('Hello, Moriti', greet('Moriti'));
    });

    it("... it should return 'Hello, Bob' when called with 'Bob'" , function(){
        assert.equal('Hello, Bob', greet('Bob'));
    });
});