export default function createInt8TypedArray(length, position, value) {
    const pos = new ArrayBuffer(length);
    const temp = new DataView(pos, 0);
    if (position >= length) {
      throw Error('Position outside range');
    }
    temp.setInt8(position, value);
  
    return temp;
  }
