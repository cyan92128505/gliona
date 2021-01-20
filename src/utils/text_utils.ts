export class TextUtils {
  static SplitResourceName(value: string): string {
    return value.split(' |||| ')[0];
  }
}

export default TextUtils;
