const { timeConversion,
    countApplesAndOranges,
    kangaroo } = require('../JavaScript/HackerRank');

describe('test suite for timeConversion', () => {
    it('when receiving a time stamp string it returns a string with length 8 representing time',
        () => {
            const response = timeConversion('07:55:23AM');
            expect(response.length).toBe(8);
            expect(typeof response).toBe("string");
        });
    it('only removes AM when converting morning non-12AM times', () => {
        expect(timeConversion('10:32:56AM')).toBe("10:32:56");
    });
    it('correctly converts 12AM to hour 00', () => {
        expect(timeConversion('12:54:12AM')).toBe('00:54:12');
    });
    it('correctly converts PM times to 24hour clock times', () => {
        expect(timeConversion('6:10:45PM')).toBe('18:10:45');
    });
    it('correctly displays 12PM in 24hr time', () => {
        expect(timeConversion('12:51:30PM')).toBe('12:51:30');
    });
});

describe('test suite for countApplesAndOranges', () => {
    //mocks console log and allows arguments passed on call to be checked
    console.log = jest.fn();
    it('returns console log that two one apples and one orange hit house', () => {
        countApplesAndOranges(5, 10, 0, 15, [1, -1, 5], [-6, 1]);
        expect(console.log.mock.calls[0][0]).toBe("1\n1");
    })
});

describe('test suite for kangaroo', () => {
    it('returns \'NO\' when second kangaroo jumps further than first kangaroo', () => {
        expect(kangaroo(1, 1, 2, 2)).toBe('NO');
    });
    it('returns \'NO\' when the 1st kangaroo can catch up to the second but will not overlap', () => {
        expect(kangaroo(6, 10, 5, 2)).toBe('NO');
        expect(kangaroo(2, 5, 3, 3)).toBe('NO');
    });
    it('returns \'Yes\' when 1st kangaroo will overlap with second', () => {
        expect(kangaroo(0, 2, 5, 1)).toBe('YES');
        expect(kangaroo(4, 3, 5, 2)).toBe('YES');
    });
});