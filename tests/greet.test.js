describe('The namesGreeted function', function(){

    it('must show that a person is greeted in IsiXhosa ', function(){
      var greeted = NamesGreeted();
      assert.equal("Molo, Sbu", greeted.greets("IsiXhosa", "Sbu"));
    });

    it('must show that a person is greeted in English  ', function(){
      var greeted = NamesGreeted();
      assert.equal("Hello, Leon", greeted.greets("English", "Leon"));
    });

    it('must show that a person is greeted in Afrikaans ', function(){
      var greeted = NamesGreeted();
      assert.equal("Hallo, Rochelle", greeted.greets("Afrikaans", "Rochelle"));
    });



        it('must count the number of names greeted and I expect three people to be gereeted ', function(){
          var greeted = NamesGreeted();
          greeted.greets("IsiXhosa", "Sbu");
          greeted.greets("IsiXhosa", "Ace");
          greeted.greets("IsiXhosa", "Ace");
          greeted.greets("IsiXhosa", "Akhona");

          assert.equal(3,  greeted.counts());
        });
        it('must count the number of names greeted and I expect two people to be gereeted', function(){
          var greeted = NamesGreeted();
          greeted.greets("English", "sbu");
          greeted.greets("English", "lilo");
          greeted.greets("English", "lilo");
          greeted.greets("English", "lilo");

          assert.equal(2,  greeted.counts());
        });
  });
