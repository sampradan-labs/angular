import {Mathops} from './mathops';




describe('Math Operations', () => {
  
 
  beforeEach(() => {  
    let n1 = 10;
    let n2 = 20;
  })
  it('should create an instance', () => {
    expect(new Mathops()).toBeTruthy();
  });

  describe('Add two items', () => {
    //It block is a test case
    //An 'It' block can contain describe () blocks also
    
    it('should add two numbers', () => {
      //Output of it block is true / false
    //Here we will compare expected & actual outputs
    let objMathOps = new Mathops();

    let n1 = 100;
    let n2 = 500;
    expect(objMathOps.add(n1, n2)).toEqual(600);
  });
  
  
  it('should add two strings', () => {
    
  });
    
      
  });
    
    
    describe('Subtract two numbers', () => {
      
    });
      
      
      describe('Multiply two numbers', () => {
        
      });
        
        
        describe('Divide two numbers', () => {
          
        });
          
});
  
