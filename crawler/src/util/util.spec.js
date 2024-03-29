const {
  sumStateCases,
  getValidReports,
  existsValidReport,
  getFileName,
} = require('.');


describe('Test utils', () => {
  const stateReport = {
    cases: 10,
    deaths: 30,
  };

  const reports = [
    stateReport,
  ];

  const date = new Date('2020-01-01');

  it('should sum sate cases', () => {
    expect(sumStateCases(stateReport)).toBe(40);
  });

  it('should return valid reports', () => {
    expect(getValidReports([])).toStrictEqual([]);
    reports.push([stateReport]);
    expect(getValidReports(reports)).toHaveLength(1);
  });

  it('should check exists valid reports', () => {
    expect(() => {
      existsValidReport([]);
    }).toThrow();

    expect(existsValidReport([{
      cases: 10,
      deaths: 30,
    }])).toEqual(expect.arrayContaining([stateReport]));
  });

  it('should return filename by date', () => {
    expect(getFileName(date)).toBe('20200101.json');
  });
});
