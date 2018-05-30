
describe('The namesGreeted function', function(){

    it('counts number of names entered ', function(){
      var greeted = NamesGreeted();
      assert.equal(6 , greeted.greets(6, 'counts'));
    });
