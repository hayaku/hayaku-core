const units = [
  'px', 'mm', 'cm', 'in', 'pt', 'pc', 'q', // absolute
  'em', 'ex', 'ch', 'rem', // relative
  'vh', 'vw', 'vmin', 'vmax', 'vm' // viewport-percentage
];

// TODO: this filter is used in a few places, probably could be made DRY?
const initialFilter = abbr => new RegExp(`^${abbr.split('').join('.*')}.*$`);

module.exports = {
  matcher: /^(-?\d*(\.?)\d+)([\w%]*)$/,
  extract: (property, match) => {
    const number = match[1];
    const hasPoint = !!match[2];
    const unitAbbr = match[3];
    if (unitAbbr) {
      // Not sure if percentage should be there
      if (unitAbbr === '%' || 'percentage'.indexOf(unitAbbr) === 0) {
        return number + '%';
      } else {
        const foundUnits = units.filter(unit => unit.match(initialFilter(unitAbbr)));
        // TODO: what if multiple units would match?
        if (foundUnits) return number + foundUnits[0];
      }
    } else {
      if (hasPoint) {
        return number + 'em';
      } else {
        return number + 'px';
      }
    }
  }
};
