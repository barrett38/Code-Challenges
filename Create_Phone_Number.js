// Create Phone Number
const entry = "123-(4567899";

function createPhoneNumber(entry) {
  let n = parseInt(entry.replace(/\D/g, "")).toString().split("").map(Number);
  format = "(xxx) xxx-xxxx";
  for (var i = 0; i < n.length; i++) format = format.replace("x", n[i]);
  console.log(format);
  return format;
}

createPhoneNumber(entry);
