const subs = {};
export const onBus = (k, f) => { (subs[k] = subs[k] || []).push(f); return () => { subs[k] = subs[k].filter((x) => x !== f); }; };
export const emit = (k) => (subs[k] || []).forEach((f) => { try { f(); } catch (e) {} });
