
describe('mergeSort function', function() {
    it('is able to sort an array', function() {
        expect(mergeSort([10,2,5,4])).toEqual([2,4,5, 10])
    });
  });


  describe('mergeSort function', function() {
    it('is able to sort an array with negatives', function() {
        expect(mergeSort([-10,2,5,4])).toEqual([-10,2,4,5,])
    });
  });

  describe('mergeSort function', function() {
    it('is able to sort an array with characters', function() {
        expect(mergeSort(['a','y','r','z'])).toEqual(['a','r','y','z'])
    });
  });
