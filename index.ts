import plugin from 'tailwindcss/plugin.js';

const buildSelector = (modifier: string | null) => `.member${modifier ? `\\/${modifier}` : ''}`;

export default plugin(({ matchVariant }) => {
  matchVariant(
    'member',
    (rawValue, { modifier }) => {
      const value = rawValue || '&';
      const selector = buildSelector(modifier);
      return `&:has(${selector}:is(${value.replaceAll('&', selector)})) { & }`;
    },
    {
      values: {
        // Default
        DEFAULT: '&',

        // Positional
        first: '&:first-child',
        last: '&:last-child',
        only: '&:only-child',
        odd: '&:nth-child(odd)',
        even: '&:nth-child(even)',
        'first-of-type': '&:first-of-type',
        'last-of-type': '&:last-of-type',
        'only-of-type': '&:only-of-type',

        // State
        visited: '&:visited',

        target: '&:target',
        open: '&:is([open], :popover-open)',

        // Forms
        default: '&:default',
        checked: '&:checked',
        indeterminate: '&:indeterminate',
        'placeholder-shown': '&:placeholder-shown',
        autofill: '&:autofill',
        optional: '&:optional',
        required: '&:required',
        valid: '&:valid',
        invalid: '&:invalid',
        'in-range': '&:in-range',
        'out-of-range': '&:out-of-range',
        'read-only': '&:read-only',

        // Content
        empty: '&:empty',

        // Interactive
        'focus-within': '&:focus-within',
        hover: '&:hover',
        focus: '&:focus',
        'focus-visible': '&:focus-visible',
        active: '&:active',
        enabled: '&:enabled',
        disabled: '&:disabled',
      },
    }
  );
});
