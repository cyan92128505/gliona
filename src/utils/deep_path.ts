export interface DeepProxyHandler<T extends object> {
  getPrototypeOf?(this: TrapThisArgument<T>, target: T): object | null;
  setPrototypeOf?(this: TrapThisArgument<T>, target: T, v: any): boolean;
  isExtensible?(this: TrapThisArgument<T>, target: T): boolean;
  preventExtensions?(this: TrapThisArgument<T>, target: T): boolean;
  getOwnPropertyDescriptor?(this: TrapThisArgument<T>, target: T, p: PropertyKey): PropertyDescriptor | undefined;
  has?(this: TrapThisArgument<T>, target: T, p: PropertyKey): boolean;
  get?(this: TrapThisArgument<T>, target: T, p: PropertyKey, receiver: any): any;
  set?(this: TrapThisArgument<T>, target: T, p: PropertyKey, value: any, receiver: any): boolean;
  deleteProperty?(this: TrapThisArgument<T>, target: T, p: PropertyKey): boolean;
  defineProperty?(this: TrapThisArgument<T>, target: T, p: PropertyKey, attributes: PropertyDescriptor): boolean;
  enumerate?(this: TrapThisArgument<T>, target: T): PropertyKey[];
  ownKeys?(this: TrapThisArgument<T>, target: T): PropertyKey[];
  apply?(this: TrapThisArgument<T>, target: T, thisArg: any, argArray?: any): any;
  construct?(this: TrapThisArgument<T>, target: T, argArray: any, newTarget?: any): object;
  [key: string]: any;
}

export interface TrapThisArgument<T extends object> {
  nest(value?: any | undefined): object;
  path: string[];
  rootTarget: T;
}

export interface DeepProxyOptions {
  path?: string;
  userData?: { [key: string]: any };
}

export interface DeepProxyConstructor {
  new <T extends object>(target: T, handler: DeepProxyHandler<T>, options?: DeepProxyOptions): T;
}

export declare const DeepProxy: DeepProxyConstructor;

interface IKeys {
  [key: string]: number;
}
type StringFunction = () => string;
interface IFunctions {
  [key: string]: StringFunction;
}

const trapNames = [
  'apply',
  'construct',
  'defineProperty',
  'deleteProperty',
  'enumerate',
  'get',
  'getOwnPropertyDescriptor',
  'getPrototypeOf',
  'has',
  'isExtensible',
  'ownKeys',
  'preventExtensions',
  'set',
  'setPrototypeOf',
];

const keys: IKeys = {
  get: 1,
  set: 1,
  deleteProperty: 1,
  has: 1,
  defineProperty: 1,
  getOwnPropertyDescriptor: 1,
};

function parsePath(text: string) {
  return text.split('.');
}

function push(arr: string[], el: string) {
  const newArr = arr.slice();
  newArr.push(el);
  return newArr;
}

function SetupDeepProxy<T extends object>(rootTarget: T, traps: DeepProxyHandler<T>, options?: DeepProxyOptions) {
  let path: string[] = [];
  let userData = {};

  if (options !== undefined && typeof options.path !== 'undefined') {
    path = parsePath(options.path);
  }
  if (options !== undefined && typeof options.userData !== 'undefined') {
    userData = options.userData;
  }

  function createProxy(target: T, _path: string[]) {
    const context = { rootTarget, path: _path } as TrapThisArgument<T>;
    Object.assign(context, userData);

    const realTraps: IFunctions = {};
    for (const trapName of trapNames) {
      const keyParamIdx = keys[trapName];
      const trap = traps[trapName];

      if (typeof trap !== 'undefined') {
        if (typeof keyParamIdx !== 'undefined') {
          realTraps[trapName] = function () {
            const key = arguments[keyParamIdx];

            context.nest = function (nestedTarget) {
              if (nestedTarget === undefined) nestedTarget = rootTarget;
              return createProxy(nestedTarget, push(_path, key));
            };

            return trap.apply(context, arguments);
          };
        } else {
          realTraps[trapName] = function () {
            context.nest = function (nestedTarget) {
              if (nestedTarget === undefined) nestedTarget = {};
              return createProxy(nestedTarget, _path);
            };

            return trap.apply(context, arguments);
          };
        }
      }
    }

    return new Proxy(target, realTraps);
  }

  return createProxy(rootTarget, path);
}

export default SetupDeepProxy;
