/*
Created by Rijal Ghodi on August 25, 2022
email : rijalghodi10@gmail.com
github : https://github.com/rijalghodi

This is a javascript code to solve US phone number validator
This code will return true if the passed string looks like US phone number
and return false if doesn't
These are examples of US phone number formats:
  555-555-5555
  (555)555-5555
  (555) 555-5555
  555 555 5555
  5555555555
If the country code is provided, it has to be 1 and is placed before the phone number
*/

function telephoneCheck(str) {
  const FORMAT_PHONE_NUMBER = [
    /^(1\s)*\d{3}-\d{3}-\d{4}$/, //phone number format 0
    /^1*\(\d{3}\)\d{3}\-\d{4}$/, //phone number format 1
    /^(1\s)*\(\d{3}\)\s\d{3}-\d{4}$/, //phone number format 2
    /^(1\s)*\d{3}\s\d{3}\s\d{4}$/, // phone number format 3
    /^(1\s)*\d{10}$/, // phone number format 4
  ];

  // check whather string passed fits the one of US phone number formats
  for (let i = 0; i < FORMAT_PHONE_NUMBER.length; i++) {
    // if it fits one of formats, return true
    if (FORMAT_PHONE_NUMBER[i].test(str)) {
      return true;
    }
    // if it doesn't fit all of formats, return false
    else if (i == FORMAT_PHONE_NUMBER.length - 1) {
      return false;
    }
    // if it doesn't fit one format, keep checking
    else {
      continue;
    }
  }
}

telephoneCheck("1 (555) 555-5555");
