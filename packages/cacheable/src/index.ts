import Keyv from "keyv";
import EventEmitter from "eventemitter3";

type HookFunction = (...args: any[]) => void;

export class Cacheable extends EventEmitter {
	private _store: Keyv = new Keyv();
	private _hooks: Map<string, HookFunction> = new Map();

	constructor() {
		super();
	}

}
