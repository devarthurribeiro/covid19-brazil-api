const {
  sumStateCases,
  getValidReports,
  existsValidReport,
} = require('.');


describe('extract data', () => {
  const stateReport = {
    cases: 10,
    deaths: 30,
  };

  const reports = [];

  test('should sum sate cases', () => {
    expect(sumStateCases(stateReport)).toBe(40);
  });

  test('should get valid reports', () => {
    expect(getValidReports(reports)).toStrictEqual([]);

    reports.push([stateReport]);

    expect(getValidReports(reports)).toHaveLength(1);
  });

  test('should get check exists reports', () => {
    expect(() => {
      existsValidReport([]);
    }).toThrow();

    expect(existsValidReport([{
      cases: 10,
      deaths: 30,
    }])).toEqual(expect.arrayContaining([stateReport]));
  });

  test('should get check valid reports', () => {
    expect(() => {
      existsValidReport([]);
    }).toThrow();
  });
});
