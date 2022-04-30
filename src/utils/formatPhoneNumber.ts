import libphonenumber from 'google-libphonenumber';

export const formatPhoneNumber = (
  phoneNumber: string,
  region: string
): string => {
  const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
  const phoneNumberFormat = libphonenumber.PhoneNumberFormat;
  const userPhone = phoneUtil.format(
    phoneUtil.parse(phoneNumber, region),
    phoneNumberFormat.E164
  );

  return userPhone;
};
