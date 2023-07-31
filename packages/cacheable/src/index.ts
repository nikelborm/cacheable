import Keyv from 'keyv';
import EventEmitter from 'eventemitter3';

type HookFunction = (...args: any[]) => void;

export class Cacheable extends EventEmitter {
	private _store: Keyv = new Keyv();
	private readonly _hooks = new Map<string, HookFunction>();

	constructor(keyv?: Keyv) {
		super();

		if (keyv) {
			this._store = keyv;
		}
	}

	public get store(): Keyv {
		return this._store;
	}

	public set store(keyv: Keyv) {
		this._store = keyv;
	}

	public get hooks(): Map<string, HookFunction> {
		return this._hooks;
	}

	public setHook(name: string, fn: HookFunction): void {
		this._hooks.set(name, fn);
	}

	public deleteHook(name: string): void {
		this._hooks.delete(name);
	}
}
