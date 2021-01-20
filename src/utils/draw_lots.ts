import { DrawData, FontData } from './darw_data';

class DarwLots {
  static Exec(question: string): string {
    let result = ``;
    let charNumber = 0;
    if (!!question && `${question}`.length !== 0) {
      for (const qChar of question) {
        charNumber += DarwLots.GetCharDraw(qChar);
      }

      result = DarwLots.Draw(charNumber);
    }

    return result;
  }

  static GetCharDraw(char: string): number {
    for (const iterator of FontData) {
      for (const i of iterator.chars) {
        if (i === char) {
          return iterator.draw;
        }
      }
    }

    return 1;
  }

  static Draw(id: number): string {
    const pureId = (DarwLots.FateNumber(id) % 100) + 1;
    const rawId = `${pureId}`;
    let result = DrawData[pureId];
    for (const iterator of DrawData) {
      if (iterator.id === rawId) {
        result = iterator;
      }
    }
    let content = '';
    content += `第 ${result.id} 籤\n`;
    content += `${result.type}\n\n`;
    content += `${DarwLots.SpliceText(result.poem)}\n\n`;
    content += `${DarwLots.SpliceText(result.explain)}\n\n`;
    content += `${JSON.stringify(result.result, null, 4)}`;

    return content;
  }

  static FateNumber(id: number): number {
    return id + Math.round(Math.random() * (100 - 1)) + 1;
  }

  static SpliceText(rawContent: string): string {
    return `${rawContent}`.replace(/，/g, '，\n');
  }
}

export default DarwLots;
