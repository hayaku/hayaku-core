// Accepts an abbreviation and returns an array of splitted abbreviation results.
const getAbbrSplits = abbr => {
  const initialSplit = abbr.match(/^([a-z-]*[a-z])(?:(-?\d.*)|(:)(.*))?$/i);
  const propAbbr = initialSplit[1];
  const valAbbr = initialSplit[2] || initialSplit[4] || '';

  if (!initialSplit) return [];
  if (initialSplit[3] || propAbbr.length === 1) {
    // If we found a `:` delimiter or prop is just a single letter
    return [{
      prop: propAbbr,
      val: valAbbr,
      raw: abbr
    }];
  } else {
    // If we have an uncertain abbr like `poa`
    const splits = [];
    for (var i = 1; i <= propAbbr.length; i++) {
      splits.push({
        raw: abbr,
        prop: propAbbr.substr(0, i),
        val: propAbbr.substr(i) + valAbbr
      });
    }
    return splits;
  }
};

module.exports = getAbbrSplits;
