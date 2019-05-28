const initNanoseconds = process.hrtime.bigint();
const initTime = BigInt(Date.now()) * BigInt(10e6);

function nanoseconds(): bigint {
  let currentNanoseconds = process.hrtime.bigint();
  return BigInt(initTime) + currentNanoseconds - initNanoseconds;
}

function microseconds(): bigint {
  return nanoseconds() / 1000n;
}

module.exports.nanoseconds = nanoseconds;
module.exports.microseconds = microseconds;
