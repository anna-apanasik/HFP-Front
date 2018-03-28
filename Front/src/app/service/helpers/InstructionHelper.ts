import {Step} from "../../model/Step";

export class InstructionHelper {
  static sortStepArrayByPosition(steps: Step[]) {
    steps.sort((a, b) => a.position > b.position
      ? 1 : a.position < b.position
        ? -1 : 0)
  }

  static reformatStringToArray(str: string) {
    return str.slice(1, str.length - 1)
      .split(',');
  }
}
