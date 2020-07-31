import checkPropTypes from 'check-prop-types';

export const checkProps = (component, propTypes, expectedProps) => {
  const propsError = checkPropTypes(
    propTypes,
    expectedProps,
    'props',
    component.name,
  );
  return propsError;
};
