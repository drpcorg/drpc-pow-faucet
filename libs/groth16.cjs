/*! For license information please see groth16.cjs.LICENSE.txt */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
        ? (exports.libpack = e())
        : (t.libpack = e());
})(global, () =>
  (() => {
    var t = {
        174: (t, e, i) => {
          const n = i(972),
            o = i(190);
          t.exports = {
            init: function () {
              if (!globalThis.curve_bn128)
                return o.buildBn128(!0).then(function (t) {
                  globalThis.curve_bn128 = t;
                });
            },
            groth16: n,
          };
        },
        972: (t, e, i) => {
          "use strict";
          var n = i(190),
            o = i(515),
            a = i(140),
            s = i(149);
          function r(t) {
            var e = Object.create(null);
            return (
              t &&
                Object.keys(t).forEach(function (i) {
                  if ("default" !== i) {
                    var n = Object.getOwnPropertyDescriptor(t, i);
                    Object.defineProperty(
                      e,
                      i,
                      n.get
                        ? n
                        : {
                            enumerable: !0,
                            get: function () {
                              return t[i];
                            },
                          }
                    );
                  }
                }),
              (e.default = t),
              Object.freeze(e)
            );
          }
          var l = r(n),
            c = r(o),
            d = r(a);
          function u(t, e, i, n) {
            return new (i || (i = Promise))(function (o, a) {
              function s(t) {
                try {
                  l(n.next(t));
                } catch (t) {
                  a(t);
                }
              }
              function r(t) {
                try {
                  l(n.throw(t));
                } catch (t) {
                  a(t);
                }
              }
              function l(t) {
                var e;
                t.done
                  ? o(t.value)
                  : ((e = t.value),
                    e instanceof i
                      ? e
                      : new i(function (t) {
                          t(e);
                        })).then(s, r);
              }
              l((n = n.apply(t, e || [])).next());
            });
          }
          function h(t, e) {
            var i,
              n,
              o,
              a,
              s = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (a = { next: r(0), throw: r(1), return: r(2) }),
              "function" == typeof Symbol &&
                (a[Symbol.iterator] = function () {
                  return this;
                }),
              a
            );
            function r(r) {
              return function (l) {
                return (function (r) {
                  if (i) throw new TypeError("Generator is already executing.");
                  for (; a && ((a = 0), r[0] && (s = 0)), s; )
                    try {
                      if (
                        ((i = 1),
                        n &&
                          (o =
                            2 & r[0]
                              ? n.return
                              : r[0]
                                ? n.throw || ((o = n.return) && o.call(n), 0)
                                : n.next) &&
                          !(o = o.call(n, r[1])).done)
                      )
                        return o;
                      switch (((n = 0), o && (r = [2 & r[0], o.value]), r[0])) {
                        case 0:
                        case 1:
                          o = r;
                          break;
                        case 4:
                          return s.label++, { value: r[1], done: !1 };
                        case 5:
                          s.label++, (n = r[1]), (r = [0]);
                          continue;
                        case 7:
                          (r = s.ops.pop()), s.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (o =
                                (o = s.trys).length > 0 && o[o.length - 1]) ||
                              (6 !== r[0] && 2 !== r[0])
                            )
                          ) {
                            s = 0;
                            continue;
                          }
                          if (
                            3 === r[0] &&
                            (!o || (r[1] > o[0] && r[1] < o[3]))
                          ) {
                            s.label = r[1];
                            break;
                          }
                          if (6 === r[0] && s.label < o[1]) {
                            (s.label = o[1]), (o = r);
                            break;
                          }
                          if (o && s.label < o[2]) {
                            (s.label = o[2]), s.ops.push(r);
                            break;
                          }
                          o[2] && s.ops.pop(), s.trys.pop();
                          continue;
                      }
                      r = e.call(t, s);
                    } catch (t) {
                      (r = [6, t]), (n = 0);
                    } finally {
                      i = o = 0;
                    }
                  if (5 & r[0]) throw r[1];
                  return { value: r[0] ? r[1] : void 0, done: !0 };
                })([r, l]);
              };
            }
          }
          function f(t) {
            if (t.__esModule) return t;
            var e = t.default;
            if ("function" == typeof e) {
              var i = function t() {
                if (this instanceof t) {
                  var i = [null];
                  return (
                    i.push.apply(i, arguments),
                    new (Function.bind.apply(e, i))()
                  );
                }
                return e.apply(this, arguments);
              };
              i.prototype = e.prototype;
            } else i = {};
            return (
              Object.defineProperty(i, "__esModule", { value: !0 }),
              Object.keys(t).forEach(function (e) {
                var n = Object.getOwnPropertyDescriptor(t, e);
                Object.defineProperty(
                  i,
                  e,
                  n.get
                    ? n
                    : {
                        enumerable: !0,
                        get: function () {
                          return t[e];
                        },
                      }
                );
              }),
              i
            );
          }
          "function" == typeof SuppressedError && SuppressedError;
          var _ = {},
            p = f(l),
            g = {},
            m = f(c),
            L = f(d);
          Object.defineProperty(g, "__esModule", { value: !0 });
          var b,
            F =
              (b = m) && "object" == typeof b && "default" in b ? b.default : b,
            y = L;
          async function x(t, e, i, n) {
            if (
              ((i = i || 262144),
              "number" != typeof e &&
                ["w+", "wx+", "r", "ax+", "a+"].indexOf(e) < 0)
            )
              throw new Error("Invalid open option");
            const o = await F.promises.open(t, e),
              a = await o.stat();
            return new w(o, a, i, n, t);
          }
          class w {
            constructor(t, e, i, n, o) {
              for (
                this.fileName = o,
                  this.fd = t,
                  this.pos = 0,
                  this.pageSize = n || 256;
                this.pageSize < e.blksize;

              )
                this.pageSize *= 2;
              (this.totalSize = e.size),
                (this.totalPages =
                  Math.floor((e.size - 1) / this.pageSize) + 1),
                (this.maxPagesLoaded = Math.floor(i / this.pageSize) + 1),
                (this.pages = {}),
                (this.pendingLoads = []),
                (this.writing = !1),
                (this.reading = !1),
                (this.avBuffs = []),
                (this.history = {});
            }
            _loadPage(t) {
              const e = this,
                i = new Promise((i, n) => {
                  e.pendingLoads.push({ page: t, resolve: i, reject: n });
                });
              return e.__statusPage("After Load request: ", t), i;
            }
            __statusPage(t, e) {
              const i = [],
                n = this;
              if (!n.logHistory) return;
              i.push("==" + t + " " + e);
              let o = "";
              for (let t = 0; t < n.pendingLoads.length; t++)
                n.pendingLoads[t].page == e && (o = o + " " + t);
              if ((o && i.push("Pending loads:" + o), void 0 !== n.pages[e])) {
                const t = n.pages[e];
                i.push("Loaded"),
                  i.push("pendingOps: " + t.pendingOps),
                  t.loading && i.push("loading: " + t.loading),
                  t.writing && i.push("writing"),
                  t.dirty && i.push("dirty");
              }
              i.push("=="),
                n.history[e] || (n.history[e] = []),
                n.history[e].push(i);
            }
            __printHistory(t) {
              const e = this;
              e.history[t] || console.log("Empty History ", t),
                console.log("History " + t);
              for (let i = 0; i < e.history[t].length; i++)
                for (let n = 0; n < e.history[t][i].length; n++)
                  console.log("-> " + e.history[t][i][n]);
            }
            _triggerLoad() {
              const t = this;
              if (t.reading) return;
              if (0 == t.pendingLoads.length) return;
              const e = Object.keys(t.pages),
                i = [];
              for (let n = 0; n < e.length; n++) {
                const o = t.pages[parseInt(e[n])];
                0 != o.dirty ||
                  0 != o.pendingOps ||
                  o.writing ||
                  o.loading ||
                  i.push(parseInt(e[n]));
              }
              let n = t.maxPagesLoaded - e.length;
              const o = [];
              for (
                ;
                t.pendingLoads.length > 0 &&
                (void 0 !== t.pages[t.pendingLoads[0].page] ||
                  n > 0 ||
                  i.length > 0);

              ) {
                const e = t.pendingLoads.shift();
                if (void 0 !== t.pages[e.page]) {
                  t.pages[e.page].pendingOps++;
                  const n = i.indexOf(e.page);
                  n >= 0 && i.splice(n, 1),
                    t.pages[e.page].loading
                      ? t.pages[e.page].loading.push(e)
                      : e.resolve(),
                    t.__statusPage("After Load (cached): ", e.page);
                } else {
                  if (n) n--;
                  else {
                    const e = i.shift();
                    t.__statusPage("Before Unload: ", e),
                      t.avBuffs.unshift(t.pages[e]),
                      delete t.pages[e],
                      t.__statusPage("After Unload: ", e);
                  }
                  e.page >= t.totalPages
                    ? ((t.pages[e.page] = a()),
                      e.resolve(),
                      t.__statusPage("After Load (new): ", e.page))
                    : ((t.reading = !0),
                      (t.pages[e.page] = a()),
                      (t.pages[e.page].loading = [e]),
                      o.push(
                        t.fd
                          .read(
                            t.pages[e.page].buff,
                            0,
                            t.pageSize,
                            e.page * t.pageSize
                          )
                          .then(
                            (i) => {
                              t.pages[e.page].size = i.bytesRead;
                              const n = t.pages[e.page].loading;
                              delete t.pages[e.page].loading;
                              for (let t = 0; t < n.length; t++) n[t].resolve();
                              return (
                                t.__statusPage("After Load (loaded): ", e.page),
                                i
                              );
                            },
                            (t) => {
                              e.reject(t);
                            }
                          )
                      ),
                      t.__statusPage("After Load (loading): ", e.page));
                }
              }
              function a() {
                if (t.avBuffs.length > 0) {
                  const e = t.avBuffs.shift();
                  return (e.dirty = !1), (e.pendingOps = 1), (e.size = 0), e;
                }
                return {
                  dirty: !1,
                  buff: new Uint8Array(t.pageSize),
                  pendingOps: 1,
                  size: 0,
                };
              }
              Promise.all(o).then(() => {
                (t.reading = !1),
                  t.pendingLoads.length > 0 &&
                    setImmediate(t._triggerLoad.bind(t)),
                  t._tryClose();
              });
            }
            _triggerWrite() {
              const t = this;
              if (t.writing) return;
              const e = Object.keys(t.pages),
                i = [];
              for (let n = 0; n < e.length; n++) {
                const o = t.pages[parseInt(e[n])];
                o.dirty &&
                  ((o.dirty = !1),
                  (o.writing = !0),
                  (t.writing = !0),
                  i.push(
                    t.fd
                      .write(o.buff, 0, o.size, parseInt(e[n]) * t.pageSize)
                      .then(
                        () => {
                          o.writing = !1;
                        },
                        (e) => {
                          console.log("ERROR Writing: " + e),
                            (t.error = e),
                            t._tryClose();
                        }
                      )
                  ));
              }
              t.writing &&
                Promise.all(i).then(() => {
                  (t.writing = !1),
                    setImmediate(t._triggerWrite.bind(t)),
                    t._tryClose(),
                    t.pendingLoads.length > 0 &&
                      setImmediate(t._triggerLoad.bind(t));
                });
            }
            _getDirtyPage() {
              for (let t in this.pages) if (this.pages[t].dirty) return t;
              return -1;
            }
            async write(t, e) {
              if (0 == t.byteLength) return;
              const i = this;
              if (
                (void 0 === e && (e = i.pos),
                (i.pos = e + t.byteLength),
                i.totalSize < e + t.byteLength &&
                  (i.totalSize = e + t.byteLength),
                i.pendingClose)
              )
                throw new Error("Writing a closing file");
              const n = Math.floor(e / i.pageSize),
                o = Math.floor((e + t.byteLength - 1) / i.pageSize),
                a = [];
              for (let t = n; t <= o; t++) a.push(i._loadPage(t));
              i._triggerLoad();
              let s = n,
                r = e % i.pageSize,
                l = t.byteLength;
              for (; l > 0; ) {
                await a[s - n];
                const e = r + l > i.pageSize ? i.pageSize - r : l,
                  o = t.slice(t.byteLength - l, t.byteLength - l + e);
                new Uint8Array(i.pages[s].buff.buffer, r, e).set(o),
                  (i.pages[s].dirty = !0),
                  i.pages[s].pendingOps--,
                  (i.pages[s].size = Math.max(r + e, i.pages[s].size)),
                  s >= i.totalPages && (i.totalPages = s + 1),
                  (l -= e),
                  s++,
                  (r = 0),
                  i.writing || setImmediate(i._triggerWrite.bind(i));
              }
            }
            async read(t, e) {
              let i = new Uint8Array(t);
              return await this.readToBuffer(i, 0, t, e), i;
            }
            async readToBuffer(t, e, i, n) {
              if (0 == i) return;
              const o = this;
              if (i > o.pageSize * o.maxPagesLoaded * 0.8) {
                const t = Math.floor(1.1 * i);
                this.maxPagesLoaded = Math.floor(t / o.pageSize) + 1;
              }
              if (
                (void 0 === n && (n = o.pos), (o.pos = n + i), o.pendingClose)
              )
                throw new Error("Reading a closing file");
              const a = Math.floor(n / o.pageSize),
                s = Math.floor((n + i - 1) / o.pageSize),
                r = [];
              for (let t = a; t <= s; t++) r.push(o._loadPage(t));
              o._triggerLoad();
              let l = a,
                c = n % o.pageSize,
                d = n + i > o.totalSize ? i - (n + i - o.totalSize) : i;
              for (; d > 0; ) {
                await r[l - a], o.__statusPage("After Await (read): ", l);
                const n = c + d > o.pageSize ? o.pageSize - c : d,
                  s = new Uint8Array(
                    o.pages[l].buff.buffer,
                    o.pages[l].buff.byteOffset + c,
                    n
                  );
                t.set(s, e + i - d),
                  o.pages[l].pendingOps--,
                  o.__statusPage("After Op done: ", l),
                  (d -= n),
                  l++,
                  (c = 0),
                  o.pendingLoads.length > 0 &&
                    setImmediate(o._triggerLoad.bind(o));
              }
              this.pos = n + i;
            }
            _tryClose() {
              const t = this;
              t.pendingClose &&
                (t.error && t.pendingCloseReject(t.error),
                t._getDirtyPage() >= 0 ||
                  t.writing ||
                  t.reading ||
                  t.pendingLoads.length > 0 ||
                  t.pendingClose());
            }
            close() {
              const t = this;
              if (t.pendingClose) throw new Error("Closing the file twice");
              return new Promise((e, i) => {
                (t.pendingClose = e), (t.pendingCloseReject = i), t._tryClose();
              }).then(
                () => {
                  t.fd.close();
                },
                (e) => {
                  throw (t.fd.close(), e);
                }
              );
            }
            async discard() {
              await this.close(), await F.promises.unlink(this.fileName);
            }
            async writeULE32(t, e) {
              const i = new Uint8Array(4);
              new DataView(i.buffer).setUint32(0, t, !0),
                await this.write(i, e);
            }
            async writeUBE32(t, e) {
              const i = new Uint8Array(4);
              new DataView(i.buffer).setUint32(0, t, !1),
                await this.write(i, e);
            }
            async writeULE64(t, e) {
              const i = new Uint8Array(8),
                n = new DataView(i.buffer);
              n.setUint32(0, 4294967295 & t, !0),
                n.setUint32(4, Math.floor(t / 4294967296), !0),
                await this.write(i, e);
            }
            async readULE32(t) {
              const e = await this.read(4, t);
              return new Uint32Array(e.buffer)[0];
            }
            async readUBE32(t) {
              const e = await this.read(4, t);
              return new DataView(e.buffer).getUint32(0, !1);
            }
            async readULE64(t) {
              const e = await this.read(8, t),
                i = new Uint32Array(e.buffer);
              return 4294967296 * i[1] + i[0];
            }
            async readString(t) {
              const e = this;
              if (e.pendingClose) throw new Error("Reading a closing file");
              let i = void 0 === t ? e.pos : t,
                n = Math.floor(i / e.pageSize),
                o = !1,
                a = "";
              for (; !o; ) {
                let t = e._loadPage(n);
                e._triggerLoad(),
                  await t,
                  e.__statusPage("After Await (read): ", n);
                let s = i % e.pageSize;
                const r = new Uint8Array(
                  e.pages[n].buff.buffer,
                  e.pages[n].buff.byteOffset + s,
                  e.pageSize - s
                );
                let l = r.findIndex((t) => 0 === t);
                (o = -1 !== l),
                  o
                    ? ((a += new TextDecoder().decode(r.slice(0, l))),
                      (e.pos = n * this.pageSize + s + l + 1))
                    : ((a += new TextDecoder().decode(r)),
                      (e.pos = n * this.pageSize + s + r.length)),
                  e.pages[n].pendingOps--,
                  e.__statusPage("After Op done: ", n),
                  (i = e.pos),
                  n++,
                  e.pendingLoads.length > 0 &&
                    setImmediate(e._triggerLoad.bind(e));
              }
              return a;
            }
          }
          function B(t) {
            const e = t.initialSize || 1 << 20,
              i = new O();
            return (
              (i.o = t),
              (i.o.data = new Uint8Array(e)),
              (i.allocSize = e),
              (i.totalSize = 0),
              (i.readOnly = !1),
              (i.pos = 0),
              i
            );
          }
          function v(t) {
            const e = new O();
            return (
              (e.o = t),
              (e.allocSize = t.data.byteLength),
              (e.totalSize = t.data.byteLength),
              (e.readOnly = !1),
              (e.pos = 0),
              e
            );
          }
          const E = new Uint8Array(4),
            C = new DataView(E.buffer),
            A = new Uint8Array(8),
            q = new DataView(A.buffer);
          class O {
            constructor() {
              this.pageSize = 16384;
            }
            _resizeIfNeeded(t) {
              if (t > this.allocSize) {
                const e = Math.max(
                    this.allocSize + (1 << 20),
                    Math.floor(1.1 * this.allocSize),
                    t
                  ),
                  i = new Uint8Array(e);
                i.set(this.o.data), (this.o.data = i), (this.allocSize = e);
              }
            }
            async write(t, e) {
              if ((void 0 === e && (e = this.pos), this.readOnly))
                throw new Error("Writing a read only file");
              this._resizeIfNeeded(e + t.byteLength),
                this.o.data.set(t.slice(), e),
                e + t.byteLength > this.totalSize &&
                  (this.totalSize = e + t.byteLength),
                (this.pos = e + t.byteLength);
            }
            async readToBuffer(t, e, i, n) {
              if (
                (void 0 === n && (n = this.pos),
                this.readOnly && n + i > this.totalSize)
              )
                throw new Error("Reading out of bounds");
              this._resizeIfNeeded(n + i);
              const o = new Uint8Array(
                this.o.data.buffer,
                this.o.data.byteOffset + n,
                i
              );
              t.set(o, e), (this.pos = n + i);
            }
            async read(t, e) {
              const i = new Uint8Array(t);
              return await this.readToBuffer(i, 0, t, e), i;
            }
            close() {
              this.o.data.byteLength != this.totalSize &&
                (this.o.data = this.o.data.slice(0, this.totalSize));
            }
            async discard() {}
            async writeULE32(t, e) {
              C.setUint32(0, t, !0), await this.write(E, e);
            }
            async writeUBE32(t, e) {
              C.setUint32(0, t, !1), await this.write(E, e);
            }
            async writeULE64(t, e) {
              q.setUint32(0, 4294967295 & t, !0),
                q.setUint32(4, Math.floor(t / 4294967296), !0),
                await this.write(A, e);
            }
            async readULE32(t) {
              const e = await this.read(4, t);
              return new Uint32Array(e.buffer)[0];
            }
            async readUBE32(t) {
              const e = await this.read(4, t);
              return new DataView(e.buffer).getUint32(0, !1);
            }
            async readULE64(t) {
              const e = await this.read(8, t),
                i = new Uint32Array(e.buffer);
              return 4294967296 * i[1] + i[0];
            }
            async readString(t) {
              const e = this;
              let i = void 0 === t ? e.pos : t;
              if (i > this.totalSize) {
                if (this.readOnly) throw new Error("Reading out of bounds");
                this._resizeIfNeeded(t);
              }
              const n = new Uint8Array(e.o.data.buffer, i, this.totalSize - i);
              let o = n.findIndex((t) => 0 === t),
                a = "";
              return (
                -1 !== o
                  ? ((a = new TextDecoder().decode(n.slice(0, o))),
                    (e.pos = i + o + 1))
                  : (e.pos = i),
                a
              );
            }
          }
          const I = 1 << 22;
          function S(t) {
            const e = t.initialSize || 0,
              i = new N();
            i.o = t;
            const n = e ? Math.floor((e - 1) / I) + 1 : 0;
            i.o.data = [];
            for (let t = 0; t < n - 1; t++) i.o.data.push(new Uint8Array(I));
            return (
              n && i.o.data.push(new Uint8Array(e - I * (n - 1))),
              (i.totalSize = 0),
              (i.readOnly = !1),
              (i.pos = 0),
              i
            );
          }
          function P(t) {
            const e = new N();
            return (
              (e.o = t),
              (e.totalSize =
                (t.data.length - 1) * I + t.data[t.data.length - 1].byteLength),
              (e.readOnly = !1),
              (e.pos = 0),
              e
            );
          }
          const z = new Uint8Array(4),
            M = new DataView(z.buffer),
            R = new Uint8Array(8),
            T = new DataView(R.buffer);
          class N {
            constructor() {
              this.pageSize = 16384;
            }
            _resizeIfNeeded(t) {
              if (t <= this.totalSize) return;
              if (this.readOnly) throw new Error("Reading out of file bounds");
              const e = Math.floor((t - 1) / I) + 1;
              for (let i = Math.max(this.o.data.length - 1, 0); i < e; i++) {
                const n = new Uint8Array(i < e - 1 ? I : t - (e - 1) * I);
                i == this.o.data.length - 1 && n.set(this.o.data[i]),
                  (this.o.data[i] = n);
              }
              this.totalSize = t;
            }
            async write(t, e) {
              const i = this;
              if ((void 0 === e && (e = i.pos), this.readOnly))
                throw new Error("Writing a read only file");
              this._resizeIfNeeded(e + t.byteLength);
              let n = Math.floor(e / I),
                o = e % I,
                a = t.byteLength;
              for (; a > 0; ) {
                const e = o + a > I ? I - o : a,
                  s = t.slice(t.byteLength - a, t.byteLength - a + e);
                new Uint8Array(i.o.data[n].buffer, o, e).set(s),
                  (a -= e),
                  n++,
                  (o = 0);
              }
              this.pos = e + t.byteLength;
            }
            async readToBuffer(t, e, i, n) {
              const o = this;
              if (
                (void 0 === n && (n = o.pos),
                this.readOnly && n + i > this.totalSize)
              )
                throw new Error("Reading out of bounds");
              this._resizeIfNeeded(n + i);
              let a = Math.floor(n / I),
                s = n % I,
                r = i;
              for (; r > 0; ) {
                const n = s + r > I ? I - s : r,
                  l = new Uint8Array(o.o.data[a].buffer, s, n);
                t.set(l, e + i - r), (r -= n), a++, (s = 0);
              }
              this.pos = n + i;
            }
            async read(t, e) {
              const i = new Uint8Array(t);
              return await this.readToBuffer(i, 0, t, e), i;
            }
            close() {}
            async discard() {}
            async writeULE32(t, e) {
              M.setUint32(0, t, !0), await this.write(z, e);
            }
            async writeUBE32(t, e) {
              M.setUint32(0, t, !1), await this.write(z, e);
            }
            async writeULE64(t, e) {
              T.setUint32(0, 4294967295 & t, !0),
                T.setUint32(4, Math.floor(t / 4294967296), !0),
                await this.write(R, e);
            }
            async readULE32(t) {
              const e = await this.read(4, t);
              return new Uint32Array(e.buffer)[0];
            }
            async readUBE32(t) {
              const e = await this.read(4, t);
              return new DataView(e.buffer).getUint32(0, !1);
            }
            async readULE64(t) {
              const e = await this.read(8, t),
                i = new Uint32Array(e.buffer);
              return 4294967296 * i[1] + i[0];
            }
            async readString(t) {
              const e = this;
              let i = void 0 === t ? e.pos : t;
              if (i > this.totalSize) {
                if (this.readOnly) throw new Error("Reading out of bounds");
                this._resizeIfNeeded(t);
              }
              let n = !1,
                o = "";
              for (; !n; ) {
                let t = Math.floor(i / I),
                  a = i % I;
                if (void 0 === e.o.data[t]) throw new Error("ERROR");
                let s = Math.min(2048, e.o.data[t].length - a);
                const r = new Uint8Array(e.o.data[t].buffer, a, s);
                let l = r.findIndex((t) => 0 === t);
                (n = -1 !== l),
                  n
                    ? ((o += new TextDecoder().decode(r.slice(0, l))),
                      (e.pos = t * I + a + l + 1))
                    : ((o += new TextDecoder().decode(r)),
                      (e.pos = t * I + a + r.length)),
                  (i = e.pos);
              }
              return o;
            }
          }
          const U = 65536,
            G = 8192;
          g.createNoOverride = function (t, e, i) {
            if (
              ("string" == typeof t &&
                (t = {
                  type: "file",
                  fileName: t,
                  cacheSize: e || U,
                  pageSize: i || G,
                }),
              "file" == t.type)
            )
              return x(
                t.fileName,
                y.O_TRUNC | y.O_CREAT | y.O_RDWR | y.O_EXCL,
                t.cacheSize,
                t.pageSize
              );
            if ("mem" == t.type) return B(t);
            if ("bigMem" == t.type) return S(t);
            throw new Error("Invalid FastFile type: " + t.type);
          };
          var j = (g.createOverride = async function (t, e, i) {
              if (
                ("string" == typeof t &&
                  (t = {
                    type: "file",
                    fileName: t,
                    cacheSize: e || U,
                    pageSize: i || G,
                  }),
                "file" == t.type)
              )
                return await x(
                  t.fileName,
                  y.O_TRUNC | y.O_CREAT | y.O_RDWR,
                  t.cacheSize,
                  t.pageSize
                );
              if ("mem" == t.type) return B(t);
              if ("bigMem" == t.type) return S(t);
              throw new Error("Invalid FastFile type: " + t.type);
            }),
            k = (g.readExisting = async function (t, e, i) {
              if (
                (t instanceof Uint8Array && (t = { type: "mem", data: t }),
                process.browser
                  ? "string" == typeof t &&
                    (t = {
                      type: "mem",
                      data: await fetch(t)
                        .then(function (t) {
                          return t.arrayBuffer();
                        })
                        .then(function (t) {
                          return new Uint8Array(t);
                        }),
                    })
                  : "string" == typeof t &&
                    (t = {
                      type: "file",
                      fileName: t,
                      cacheSize: e || U,
                      pageSize: i || G,
                    }),
                "file" == t.type)
              )
                return await x(t.fileName, y.O_RDONLY, t.cacheSize, t.pageSize);
              if ("mem" == t.type)
                return await (function (t) {
                  const e = new O();
                  return (
                    (e.o = t),
                    (e.allocSize = t.data.byteLength),
                    (e.totalSize = t.data.byteLength),
                    (e.readOnly = !0),
                    (e.pos = 0),
                    e
                  );
                })(t);
              if ("bigMem" == t.type)
                return await (function (t) {
                  const e = new N();
                  return (
                    (e.o = t),
                    (e.totalSize =
                      (t.data.length - 1) * I +
                      t.data[t.data.length - 1].byteLength),
                    (e.readOnly = !0),
                    (e.pos = 0),
                    e
                  );
                })(t);
              throw new Error("Invalid FastFile type: " + t.type);
            });
          (g.readWriteExisting = function (t, e, i) {
            if (
              ("string" == typeof t &&
                (t = {
                  type: "file",
                  fileName: t,
                  cacheSize: e || U,
                  pageSize: i || G,
                }),
              "file" == t.type)
            )
              return x(
                t.fileName,
                y.O_CREAT | y.O_RDWR,
                t.cacheSize,
                t.pageSize
              );
            if ("mem" == t.type) return v(t);
            if ("bigMem" == t.type) return P(t);
            throw new Error("Invalid FastFile type: " + t.type);
          }),
            (g.readWriteExistingOrCreate = function (t, e, i) {
              if (
                ("string" == typeof t &&
                  (t = {
                    type: "file",
                    fileName: t,
                    cacheSize: e || U,
                    pageSize: i || G,
                  }),
                "file" == t.type)
              )
                return x(
                  t.fileName,
                  y.O_CREAT | y.O_RDWR | y.O_EXCL,
                  t.cacheSize
                );
              if ("mem" == t.type) return v(t);
              if ("bigMem" == t.type) return P(t);
              throw new Error("Invalid FastFile type: " + t.type);
            }),
            Object.defineProperty(_, "__esModule", { value: !0 });
          var $ = p;
          function Z(t) {
            if (t && t.__esModule) return t;
            var e = Object.create(null);
            return (
              t &&
                Object.keys(t).forEach(function (i) {
                  if ("default" !== i) {
                    var n = Object.getOwnPropertyDescriptor(t, i);
                    Object.defineProperty(
                      e,
                      i,
                      n.get
                        ? n
                        : {
                            enumerable: !0,
                            get: function () {
                              return t[i];
                            },
                          }
                    );
                  }
                }),
              (e.default = t),
              Object.freeze(e)
            );
          }
          var W = Z(g);
          async function D(t, e) {
            if (void 0 !== t.writingSection)
              throw new Error("Already writing a section");
            await t.writeULE32(e),
              (t.writingSection = { pSectionSize: t.pos }),
              await t.writeULE64(0);
          }
          async function J(t) {
            if (void 0 === t.writingSection)
              throw new Error("Not writing a section");
            const e = t.pos - t.writingSection.pSectionSize - 8,
              i = t.pos;
            (t.pos = t.writingSection.pSectionSize),
              await t.writeULE64(e),
              (t.pos = i),
              delete t.writingSection;
          }
          async function V(t, e, i) {
            if (void 0 !== t.readingSection)
              throw new Error("Already reading a section");
            if (!e[i]) throw new Error(t.fileName + ": Missing section " + i);
            if (e[i].length > 1)
              throw new Error(t.fileName + ": Section Duplicated " + i);
            (t.pos = e[i][0].p), (t.readingSection = e[i][0]);
          }
          async function Q(t, e) {
            if (void 0 === t.readingSection)
              throw new Error("Not reading a section");
            if (!e && t.pos - t.readingSection.p != t.readingSection.size)
              throw new Error("Invalid section size reading");
            delete t.readingSection;
          }
          _.copySection = async function (t, e, i, n, o) {
            void 0 === o && (o = e[n][0].size);
            const a = t.pageSize;
            await V(t, e, n), await D(i, n);
            for (let e = 0; e < o; e += a) {
              const n = Math.min(o - e, a),
                s = await t.read(n);
              await i.write(s);
            }
            await J(i), await Q(t, o != e[n][0].size);
          };
          var X = (_.createBinFile = async function (t, e, i, n, o, a) {
              const s = await W.createOverride(t, o, a),
                r = new Uint8Array(4);
              for (let t = 0; t < 4; t++) r[t] = e.charCodeAt(t);
              return (
                await s.write(r, 0),
                await s.writeULE32(i),
                await s.writeULE32(n),
                s
              );
            }),
            K = (_.endReadSection = Q),
            Y = (_.endWriteSection = J),
            H = (_.readBigInt = async function (t, e, i) {
              const n = await t.read(e, i);
              return $.Scalar.fromRprLE(n, 0, e);
            }),
            tt = (_.readBinFile = async function (t, e, i, n, o) {
              const a = await W.readExisting(t, n, o),
                s = await a.read(4);
              let r = "";
              for (let t = 0; t < 4; t++) r += String.fromCharCode(s[t]);
              if (r != e) throw new Error(t + ": Invalid File format");
              if ((await a.readULE32()) > i)
                throw new Error("Version not supported");
              const l = await a.readULE32();
              let c = [];
              for (let t = 0; t < l; t++) {
                let t = await a.readULE32(),
                  e = await a.readULE64();
                void 0 === c[t] && (c[t] = []),
                  c[t].push({ p: a.pos, size: e }),
                  (a.pos += e);
              }
              return { fd: a, sections: c };
            }),
            et = (_.readSection = async function (t, e, i, n, o) {
              if (
                (n = void 0 === n ? 0 : n) +
                  (o = void 0 === o ? e[i][0].size - n : o) >
                e[i][0].size
              )
                throw new Error("Reading out of the range of the section");
              let a;
              return (
                (a = o < 1 << 30 ? new Uint8Array(o) : new $.BigBuffer(o)),
                await t.readToBuffer(a, 0, o, e[i][0].p + n),
                a
              );
            });
          _.sectionIsEqual = async function (t, e, i, n, o) {
            const a = 16 * t.pageSize;
            if (
              (await V(t, e, o), await V(i, n, o), e[o][0].size != n[o][0].size)
            )
              return !1;
            const s = e[o][0].size;
            for (let e = 0; e < s; e += a) {
              const n = Math.min(s - e, a),
                o = await t.read(n),
                r = await i.read(n);
              for (let t = 0; t < n; t++) if (o[t] != r[t]) return !1;
            }
            return await Q(t), await Q(i), !0;
          };
          var it = (_.startReadUniqueSection = V),
            nt = (_.startWriteSection = D),
            ot = (_.writeBigInt = async function (t, e, i, n) {
              const o = new Uint8Array(i);
              $.Scalar.toRprLE(o, 0, e, i), await t.write(o, n);
            });
          function at(t) {
            return (
              (4294901760 & t ? ((t &= 4294901760), 16) : 0) |
              (4278255360 & t ? ((t &= 4278255360), 8) : 0) |
              (4042322160 & t ? ((t &= 4042322160), 4) : 0) |
              (3435973836 & t ? ((t &= 3435973836), 2) : 0) |
              !!(2863311530 & t)
            );
          }
          function st() {
            var t;
            return u(this, void 0, void 0, function () {
              var e;
              return h(this, function (i) {
                switch (i.label) {
                  case 0:
                    return null === (t = globalThis.curve_bn128) || void 0 === t
                      ? [3, 1]
                      : ((e = t), [3, 3]);
                  case 1:
                    return [4, n.buildBn128()];
                  case 2:
                    (e = i.sent()), (i.label = 3);
                  case 3:
                    return [2, e];
                }
              });
            });
          }
          function rt(t, e, i) {
            return u(this, void 0, void 0, function () {
              var n, o;
              return h(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, t.read(2 * e.G1.F.n8)];
                  case 1:
                    return (
                      (n = a.sent()),
                      (o = e.G1.fromRprLEM(n, 0)),
                      [2, i ? e.G1.toObject(o) : o]
                    );
                }
              });
            });
          }
          function lt(t, e, i) {
            return u(this, void 0, void 0, function () {
              var n, o;
              return h(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, t.read(2 * e.G2.F.n8)];
                  case 1:
                    return (
                      (n = a.sent()),
                      (o = e.G2.fromRprLEM(n, 0)),
                      [2, i ? e.G2.toObject(o) : o]
                    );
                }
              });
            });
          }
          function ct(t, e, i) {
            return u(this, void 0, void 0, function () {
              var n, o, a, s, r, l, c, d, u, f, _, p, g, m, L;
              return h(this, function (h) {
                switch (h.label) {
                  case 0:
                    return ((n = {}).protocol = "groth16"), [4, it(t, e, 2)];
                  case 1:
                    return h.sent(), [4, t.readULE32()];
                  case 2:
                    return (o = h.sent()), (n.n8q = o), (a = n), [4, H(t, o)];
                  case 3:
                    return (a.q = h.sent()), [4, t.readULE32()];
                  case 4:
                    return (s = h.sent()), (n.n8r = s), (r = n), [4, H(t, s)];
                  case 5:
                    return (r.r = h.sent()), (l = n), [4, st()];
                  case 6:
                    return (l.curve = h.sent()), (c = n), [4, t.readULE32()];
                  case 7:
                    return (c.nVars = h.sent()), (d = n), [4, t.readULE32()];
                  case 8:
                    return (d.nPublic = h.sent()), (u = n), [4, t.readULE32()];
                  case 9:
                    return (
                      (u.domainSize = h.sent()),
                      (n.power = at(n.domainSize)),
                      (f = n),
                      [4, rt(t, n.curve, i)]
                    );
                  case 10:
                    return (
                      (f.vk_alpha_1 = h.sent()), (_ = n), [4, rt(t, n.curve, i)]
                    );
                  case 11:
                    return (
                      (_.vk_beta_1 = h.sent()), (p = n), [4, lt(t, n.curve, i)]
                    );
                  case 12:
                    return (
                      (p.vk_beta_2 = h.sent()), (g = n), [4, lt(t, n.curve, i)]
                    );
                  case 13:
                    return (
                      (g.vk_gamma_2 = h.sent()), (m = n), [4, rt(t, n.curve, i)]
                    );
                  case 14:
                    return (
                      (m.vk_delta_1 = h.sent()), (L = n), [4, lt(t, n.curve, i)]
                    );
                  case 15:
                    return (L.vk_delta_2 = h.sent()), [4, K(t)];
                  case 16:
                    return h.sent(), [2, n];
                }
              });
            });
          }
          function dt(t, e, i) {
            return u(this, void 0, void 0, function () {
              var n;
              return h(this, function (o) {
                switch (o.label) {
                  case 0:
                    return [4, it(t, e, 1)];
                  case 1:
                    return o.sent(), [4, t.readULE32()];
                  case 2:
                    return (n = o.sent()), [4, K(t)];
                  case 3:
                    if ((o.sent(), 1 === n)) return [2, ct(t, e, i)];
                    throw new Error("Protocol not supported: ");
                }
              });
            });
          }
          function ut(t, e, i) {
            return u(this, void 0, void 0, function () {
              var o;
              return h(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, nt(t, 1)];
                  case 1:
                    return (
                      a.sent(),
                      (o =
                        8 * (Math.floor((n.Scalar.bitLength(i) - 1) / 64) + 1)),
                      [4, t.writeULE32(o)]
                    );
                  case 2:
                    return a.sent(), [4, ot(t, i, o)];
                  case 3:
                    if ((a.sent(), e.byteLength % o != 0))
                      throw new Error("Invalid witness length");
                    return [4, t.writeULE32(e.byteLength / o)];
                  case 4:
                  case 7:
                    return a.sent(), [4, Y(t)];
                  case 5:
                    return a.sent(), [4, nt(t, 2)];
                  case 6:
                    return a.sent(), [4, t.write(e)];
                  case 8:
                    return a.sent(), [2];
                }
              });
            });
          }
          function ht(t, e) {
            return u(this, void 0, void 0, function () {
              var i, n, o;
              return h(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [4, it(t, e, 1)];
                  case 1:
                    return a.sent(), [4, t.readULE32()];
                  case 2:
                    return (i = a.sent()), [4, H(t, i)];
                  case 3:
                    return (n = a.sent()), [4, t.readULE32()];
                  case 4:
                    return (o = a.sent()), [4, K(t)];
                  case 5:
                    return a.sent(), [2, { n8: i, q: n, nWitness: o }];
                }
              });
            });
          }
          var ft = n.utils.unstringifyBigInts;
          function _t(t, e, i) {
            return u(this, void 0, void 0, function () {
              var n, o, a, r, l, c;
              return h(this, function (d) {
                switch (d.label) {
                  case 0:
                    return (n = ft(t)), [4, k(e)];
                  case 1:
                    return [4, (o = d.sent()).read(o.totalSize)];
                  case 2:
                    return (a = d.sent()), [4, o.close()];
                  case 3:
                    return d.sent(), [4, s.WitnessCalculatorBuilder(a)];
                  case 4:
                    return 1 != (r = d.sent()).circom_version()
                      ? [3, 9]
                      : [4, r.calculateBinWitness(n)];
                  case 5:
                    return (c = d.sent()), [4, X(i, "wtns", 2, 2)];
                  case 6:
                    return [4, ut((l = d.sent()), c, r.prime)];
                  case 7:
                    return d.sent(), [4, l.close()];
                  case 8:
                    return d.sent(), [3, 14];
                  case 9:
                    return [4, j(i)];
                  case 10:
                    return (l = d.sent()), [4, r.calculateWTNSBin(n)];
                  case 11:
                    return (c = d.sent()), [4, l.write(c)];
                  case 12:
                    return d.sent(), [4, l.close()];
                  case 13:
                    d.sent(), (d.label = 14);
                  case 14:
                    return [2];
                }
              });
            });
          }
          var pt = n.utils.stringifyBigInts,
            gt = n.utils.unstringifyBigInts;
          function mt(t, e, i, o) {
            return u(this, void 0, void 0, function () {
              var a, s, r, l, c, d, u, f, _, p, g, m, L, b;
              return h(this, function (h) {
                for (
                  a = t.Fr.n8,
                    s = 12 + e.n8r,
                    r = (o.byteLength - 4) / s,
                    l = new n.BigBuffer(e.domainSize * a),
                    c = new n.BigBuffer(e.domainSize * a),
                    d = new n.BigBuffer(e.domainSize * a),
                    u = [l, c],
                    b = 0;
                  b < r;
                  b++
                )
                  (f = o.slice(4 + b * s, 4 + b * s + s)),
                    (_ = new DataView(f.buffer)),
                    (p = _.getUint32(0, !0)),
                    (g = _.getUint32(4, !0)),
                    (m = _.getUint32(8, !0)),
                    (L = f.slice(12, 12 + a)),
                    u[p].set(
                      t.Fr.add(
                        u[p].slice(g * a, g * a + a),
                        t.Fr.mul(L, i.slice(m * a, m * a + a))
                      ),
                      g * a
                    );
                for (b = 0; b < e.domainSize; b++)
                  d.set(
                    t.Fr.mul(
                      l.slice(b * a, b * a + a),
                      c.slice(b * a, b * a + a)
                    ),
                    b * a
                  );
                return [2, [l, c, d]];
              });
            });
          }
          function Lt(t, e, i, o, a) {
            return u(this, void 0, void 0, function () {
              var e, s, r, l, c, d, u, f, _, p, g, m, L;
              return h(this, function (h) {
                switch (h.label) {
                  case 0:
                    for (
                      e = 1 << 22,
                        s = t.Fr.n8,
                        r = Math.floor(i.byteLength / t.Fr.n8),
                        l = [],
                        L = 0;
                      L < r;
                      L += e
                    )
                      (c = Math.min(r - L, e)),
                        (d = []),
                        (u = i.slice(L * s, (L + c) * s)),
                        (f = o.slice(L * s, (L + c) * s)),
                        (_ = a.slice(L * s, (L + c) * s)),
                        d.push({ cmd: "ALLOCSET", var: 0, buff: u }),
                        d.push({ cmd: "ALLOCSET", var: 1, buff: f }),
                        d.push({ cmd: "ALLOCSET", var: 2, buff: _ }),
                        d.push({ cmd: "ALLOC", var: 3, len: c * s }),
                        d.push({
                          cmd: "CALL",
                          fnName: "qap_joinABC",
                          params: [
                            { var: 0 },
                            { var: 1 },
                            { var: 2 },
                            { val: c },
                            { var: 3 },
                          ],
                        }),
                        d.push({
                          cmd: "CALL",
                          fnName: "frm_batchFromMontgomery",
                          params: [{ var: 3 }, { val: c }, { var: 3 }],
                        }),
                        d.push({ cmd: "GET", out: 0, var: 3, len: c * s }),
                        l.push(t.tm.queueAction(d));
                    return [4, Promise.all(l)];
                  case 1:
                    for (
                      p = h.sent(),
                        g =
                          i instanceof n.BigBuffer
                            ? new n.BigBuffer(i.byteLength)
                            : new Uint8Array(i.byteLength),
                        m = 0,
                        L = 0;
                      L < p.length;
                      L++
                    )
                      g.set(p[L][0], m), (m += p[L][0].byteLength);
                    return [2, g];
                }
              });
            });
          }
          var bt = n.utils.unstringifyBigInts;
          (e.buildBn128 = st),
            (e.prove = function (t, e, i) {
              return u(this, void 0, void 0, function () {
                var o,
                  a,
                  s,
                  r,
                  l,
                  c,
                  d,
                  u,
                  f,
                  _,
                  p,
                  g,
                  m,
                  L,
                  b,
                  F,
                  y,
                  x,
                  w,
                  B,
                  v,
                  E,
                  C,
                  A,
                  q,
                  O,
                  I,
                  S,
                  P,
                  z,
                  M,
                  R,
                  T,
                  N,
                  U,
                  G,
                  j,
                  k,
                  $,
                  Z,
                  W,
                  D,
                  J,
                  V,
                  Q,
                  X,
                  K;
                return h(this, function (h) {
                  switch (h.label) {
                    case 0:
                      return [4, _t((t = gt(t)), e, (o = { type: "mem" }))];
                    case 1:
                      return h.sent(), [4, tt(o, "wtns", 2, 1 << 25, 1 << 23)];
                    case 2:
                      return (
                        (a = h.sent()),
                        (s = a.fd),
                        (r = a.sections),
                        [4, ht(s, r)]
                      );
                    case 3:
                      return (
                        (l = h.sent()), [4, tt(i, "zkey", 2, 1 << 25, 1 << 23)]
                      );
                    case 4:
                      return (
                        (c = h.sent()),
                        (d = c.fd),
                        (u = c.sections),
                        [4, dt(d, u, void 0)]
                      );
                    case 5:
                      if ("groth16" !== (f = h.sent()).protocol)
                        throw new Error("zkey file is not groth16");
                      if (!n.Scalar.eq(f.r, l.q))
                        throw new Error(
                          "Curve of the witness does not match the curve of the proving key"
                        );
                      if (l.nWitness !== f.nVars)
                        throw new Error(
                          "Invalid witness length. Circuit: "
                            .concat(f.nVars, ", witness: ")
                            .concat(l.nWitness)
                        );
                      return (
                        (_ = f.curve),
                        (p = _.Fr),
                        (g = _.G1),
                        (m = _.G2),
                        (L = at(f.domainSize)),
                        [4, et(s, r, 2)]
                      );
                    case 6:
                      return (b = h.sent()), [4, et(d, u, 4)];
                    case 7:
                      return (F = h.sent()), [4, mt(_, f, b, F)];
                    case 8:
                      return (
                        (y = h.sent()),
                        (x = y[0]),
                        (w = y[1]),
                        (B = y[2]),
                        (v = L == p.s ? _.Fr.shift : _.Fr.w[L + 1]),
                        [4, p.ifft(x, "", "", void 0, "IFFT_A")]
                      );
                    case 9:
                      return (E = h.sent()), [4, p.batchApplyKey(E, p.e(1), v)];
                    case 10:
                      return (
                        (C = h.sent()), [4, p.fft(C, "", "", void 0, "FFT_A")]
                      );
                    case 11:
                      return (
                        (A = h.sent()), [4, p.ifft(w, "", "", void 0, "IFFT_B")]
                      );
                    case 12:
                      return (q = h.sent()), [4, p.batchApplyKey(q, p.e(1), v)];
                    case 13:
                      return (
                        (O = h.sent()), [4, p.fft(O, "", "", void 0, "FFT_B")]
                      );
                    case 14:
                      return (
                        (I = h.sent()), [4, p.ifft(B, "", "", void 0, "IFFT_C")]
                      );
                    case 15:
                      return (S = h.sent()), [4, p.batchApplyKey(S, p.e(1), v)];
                    case 16:
                      return (
                        (P = h.sent()), [4, p.fft(P, "", "", void 0, "FFT_C")]
                      );
                    case 17:
                      return (z = h.sent()), [4, Lt(_, 0, A, I, z)];
                    case 18:
                      return (M = h.sent()), (R = {}), [4, et(d, u, 5)];
                    case 19:
                      return (
                        (T = h.sent()),
                        (N = R),
                        [4, _.G1.multiExpAffine(T, b, void 0, "multiexp A")]
                      );
                    case 20:
                      return (N.pi_a = h.sent()), [4, et(d, u, 6)];
                    case 21:
                      return (
                        (U = h.sent()),
                        [4, _.G1.multiExpAffine(U, b, void 0, "multiexp B1")]
                      );
                    case 22:
                      return (G = h.sent()), [4, et(d, u, 7)];
                    case 23:
                      return (
                        (j = h.sent()),
                        (k = R),
                        [4, _.G2.multiExpAffine(j, b, void 0, "multiexp B2")]
                      );
                    case 24:
                      return (k.pi_b = h.sent()), [4, et(d, u, 8)];
                    case 25:
                      return (
                        ($ = h.sent()),
                        (Z = R),
                        [
                          4,
                          _.G1.multiExpAffine(
                            $,
                            b.slice((f.nPublic + 1) * _.Fr.n8),
                            void 0,
                            "multiexp C"
                          ),
                        ]
                      );
                    case 26:
                      return (Z.pi_c = h.sent()), [4, et(d, u, 9)];
                    case 27:
                      return (
                        (W = h.sent()),
                        [4, _.G1.multiExpAffine(W, M, void 0, "multiexp H")]
                      );
                    case 28:
                      for (
                        D = h.sent(),
                          J = _.Fr.random(),
                          V = _.Fr.random(),
                          R.pi_a = g.add(R.pi_a, f.vk_alpha_1),
                          R.pi_a = g.add(R.pi_a, g.timesFr(f.vk_delta_1, J)),
                          R.pi_b = m.add(R.pi_b, f.vk_beta_2),
                          R.pi_b = m.add(R.pi_b, m.timesFr(f.vk_delta_2, V)),
                          G = g.add(G, f.vk_beta_1),
                          G = g.add(G, g.timesFr(f.vk_delta_1, V)),
                          R.pi_c = g.add(R.pi_c, D),
                          R.pi_c = g.add(R.pi_c, g.timesFr(R.pi_a, V)),
                          R.pi_c = g.add(R.pi_c, g.timesFr(G, J)),
                          R.pi_c = g.add(
                            R.pi_c,
                            g.timesFr(f.vk_delta_1, p.neg(p.mul(J, V)))
                          ),
                          Q = [],
                          X = 1;
                        X <= f.nPublic;
                        X++
                      )
                        (K = b.slice(X * p.n8, X * p.n8 + p.n8)),
                          Q.push(n.Scalar.fromRprLE(K, void 0, void 0));
                      return (
                        (R.pi_a = g.toObject(g.toAffine(R.pi_a))),
                        (R.pi_b = m.toObject(m.toAffine(R.pi_b))),
                        (R.pi_c = g.toObject(g.toAffine(R.pi_c))),
                        (R.protocol = "groth16"),
                        (R.curve = _.name),
                        [4, d.close()]
                      );
                    case 29:
                      return h.sent(), [4, s.close()];
                    case 30:
                      return (
                        h.sent(),
                        (R = pt(R)),
                        (Q = pt(Q)),
                        [2, { proof: R, publicSignals: Q }]
                      );
                  }
                });
              });
            }),
            (e.verify = function (t, e) {
              var i = e.proof,
                o = e.publicSignals;
              return u(this, void 0, void 0, function () {
                var e, a, s, r, l, c, d, u, f, _, p, g, m, L;
                return h(this, function (h) {
                  switch (h.label) {
                    case 0:
                      return (t = bt(t)), (i = bt(i)), (o = bt(o)), [4, st()];
                    case 1:
                      if (
                        ((e = h.sent()),
                        (a = e.G1.fromObject(t.IC[0])),
                        (s = new Uint8Array(2 * e.G1.F.n8 * o.length)),
                        (r = new Uint8Array(e.Fr.n8 * o.length)),
                        !(function (t, e) {
                          for (var i = 0; i < e.length; i++)
                            if (!n.Scalar.lt(e[i], t.r)) return !1;
                          return !0;
                        })(e, o))
                      )
                        return [2, !1];
                      for (l = 0; l < o.length; l++)
                        (c = e.G1.fromObject(t.IC[l + 1])),
                          s.set(c, l * e.G1.F.n8 * 2),
                          n.Scalar.toRprLE(r, e.Fr.n8 * l, o[l], e.Fr.n8);
                      return [4, e.G1.multiExpAffine(s, r)];
                    case 2:
                      return (
                        (d = h.sent()),
                        (d = e.G1.add(d, a)),
                        (u = e.G1.fromObject(i.pi_a)),
                        (f = e.G2.fromObject(i.pi_b)),
                        (_ = e.G1.fromObject(i.pi_c)),
                        (function (t, e) {
                          var i = t.G1,
                            n = t.G2;
                          return (
                            i.isValid(e.pi_a) &&
                            n.isValid(e.pi_b) &&
                            i.isValid(e.pi_c)
                          );
                        })(e, { pi_a: u, pi_b: f, pi_c: _ })
                          ? ((p = e.G2.fromObject(t.vk_gamma_2)),
                            (g = e.G2.fromObject(t.vk_delta_2)),
                            (m = e.G1.fromObject(t.vk_alpha_1)),
                            (L = e.G2.fromObject(t.vk_beta_2)),
                            [2, e.pairingEq(e.G1.neg(u), f, d, p, _, g, m, L)])
                          : [2, !1]
                      );
                  }
                });
              });
            });
        },
        189: (t, e, i) => {
          (t.exports.buildBn128 = i(584)),
            (t.exports.buildBls12381 = i(920)),
            (t.exports.buildF1m = i(75));
        },
        409: (t) => {
          function e(t, e) {
            return t === e ? 0 : t > e ? 1 : -1;
          }
          function i(t) {
            return t * t;
          }
          function n(t) {
            return t % 2n !== 0n;
          }
          function o(t) {
            return t % 2n === 0n;
          }
          function a(t) {
            return t < 0n;
          }
          function s(t) {
            return t > 0n;
          }
          function r(t) {
            return a(t) ? t.toString(2).length - 1 : t.toString(2).length;
          }
          function l(t) {
            return t < 0n ? -t : t;
          }
          function c(t) {
            return 1n === l(t);
          }
          function d(t, i) {
            for (var n, o, s, r = 0n, d = 1n, u = i, h = l(t); 0n !== h; )
              (n = u / h),
                (o = r),
                (s = u),
                (r = d),
                (u = h),
                (d = o - n * d),
                (h = s - n * h);
            if (!c(u))
              throw new Error(
                t.toString() + " and " + i.toString() + " are not co-prime"
              );
            return -1 === e(r, 0n) && (r += i), a(t) ? -r : r;
          }
          function u(t, e, o) {
            if (0n === o) throw new Error("Cannot take modPow with modulus 0");
            var r = 1n,
              l = t % o;
            for (a(e) && ((e *= -1n), (l = d(l, o))); s(e); ) {
              if (0n === l) return 0n;
              n(e) && (r = (r * l) % o), (e /= 2n), (l = i(l) % o);
            }
            return r;
          }
          function h(t, e) {
            return (
              0n !== e &&
              (!!c(e) ||
                (0 ===
                (function (t, e) {
                  return (t = t >= 0n ? t : -t) === (e = e >= 0n ? e : -e)
                    ? 0
                    : t > e
                      ? 1
                      : -1;
                })(e, 2n)
                  ? o(t)
                  : t % e === 0n))
            );
          }
          function f(t, e) {
            for (
              var n,
                a,
                s,
                r = (function (t) {
                  return t - 1n;
                })(t),
                l = r,
                d = 0;
              o(l);

            )
              (l /= 2n), d++;
            t: for (a = 0; a < e.length; a++)
              if (!(t < e[a] || c((s = u(BigInt(e[a]), l, t))) || s === r)) {
                for (n = d - 1; 0 != n; n--) {
                  if (c((s = i(s) % t))) return !1;
                  if (s === r) continue t;
                }
                return !1;
              }
            return !0;
          }
          (t.exports.bitLength = r),
            (t.exports.isOdd = n),
            (t.exports.isNegative = a),
            (t.exports.abs = l),
            (t.exports.isUnit = c),
            (t.exports.compare = e),
            (t.exports.modInv = d),
            (t.exports.modPow = u),
            (t.exports.isPrime = function (t) {
              var e = (function (t) {
                var e = l(t);
                return (
                  !c(e) &&
                  (2n === e ||
                    3n === e ||
                    5n === e ||
                    (!(o(e) || h(e, 3n) || h(e, 5n)) && (e < 49n || void 0)))
                );
              })(t);
              if (void 0 !== e) return e;
              var i = l(t),
                n = r(i);
              if (n <= 64)
                return f(i, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
              for (
                var a = Math.log(2) * Number(n),
                  s = Math.ceil(a),
                  d = [],
                  u = 0;
                u < s;
                u++
              )
                d.push(BigInt(u + 2));
              return f(i, d);
            }),
            (t.exports.square = i);
        },
        920: (t, e, i) => {
          const n = i(333),
            o = i(75),
            a = i(138),
            s = i(420),
            r = i(173),
            l = i(904),
            c = i(292),
            d = i(896),
            u = i(637),
            h = i(320),
            { bitLength: f, isOdd: _, isNegative: p } = i(409);
          t.exports = function (t, e) {
            const i = e || "bls12381";
            if (t.modules[i]) return i;
            const g =
                0x1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaabn,
              m =
                0x73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001n,
              L = Math.floor((f(g - 1n) - 1) / 64) + 1,
              b = 8 * L,
              F = b,
              y = 2 * F,
              x = 12 * F,
              w = Math.floor((f(m - 1n) - 1) / 64) + 1,
              B = 8 * w,
              v = B,
              E = t.alloc(n.bigInt2BytesLE(m, v)),
              C = o(t, g, "f1m", "intq");
            a(t, m, "fr", "frm", "intr");
            const A = t.alloc(n.bigInt2BytesLE(z(4n), F)),
              q = l(t, "g1m", "f1m", A);
            c(t, "frm", "frm", "frm", "frm_mul"),
              d(t, "pol", "frm"),
              u(t, "qap", "frm");
            const O = s(t, "f1m_neg", "f2m", "f1m"),
              I = t.alloc([
                ...n.bigInt2BytesLE(z(4n), F),
                ...n.bigInt2BytesLE(z(4n), F),
              ]),
              S = l(t, "g2m", "f2m", I);
            function P(e, i) {
              const n = t.addFunction(e);
              n.addParam("pG", "i32"),
                n.addParam("pFr", "i32"),
                n.addParam("pr", "i32");
              const o = n.getCodeBuilder(),
                a = o.i32_const(t.alloc(B));
              n.addCode(
                o.call("frm_fromMontgomery", o.getLocal("pFr"), a),
                o.call(i, o.getLocal("pG"), a, o.i32_const(B), o.getLocal("pr"))
              ),
                t.exportFunction(e);
            }
            function z(t) {
              return (BigInt(t) * (1n << BigInt(8 * F))) % g;
            }
            P("g1m_timesFr", "g1m_timesScalar"),
              c(t, "g1m", "g1m", "frm", "g1m_timesFr"),
              P("g2m_timesFr", "g2m_timesScalar"),
              c(t, "g2m", "g2m", "frm", "g2m_timesFr"),
              P("g1m_timesFrAffine", "g1m_timesScalarAffine"),
              P("g2m_timesFrAffine", "g2m_timesScalarAffine"),
              h(t, "frm_batchApplyKey", "fmr", "frm", B, B, B, "frm_mul"),
              h(
                t,
                "g1m_batchApplyKey",
                "g1m",
                "frm",
                3 * b,
                3 * b,
                B,
                "g1m_timesFr"
              ),
              h(
                t,
                "g1m_batchApplyKeyMixed",
                "g1m",
                "frm",
                2 * b,
                3 * b,
                B,
                "g1m_timesFrAffine"
              ),
              h(
                t,
                "g2m_batchApplyKey",
                "g2m",
                "frm",
                2 * b * 3,
                3 * b * 2,
                B,
                "g2m_timesFr"
              ),
              h(
                t,
                "g2m_batchApplyKeyMixed",
                "g2m",
                "frm",
                2 * b * 2,
                3 * b * 2,
                B,
                "g2m_timesFrAffine"
              );
            const M = [
                3685416753713387016781088315183077757961620795782546409894578378688607592378376318836054947676345821548104185464507n,
                1339506544944476473020471379941921221584933875938349620426543736416511423956333506472724655353366534992391756441569n,
                1n,
              ],
              R = t.alloc([
                ...n.bigInt2BytesLE(z(M[0]), F),
                ...n.bigInt2BytesLE(z(M[1]), F),
                ...n.bigInt2BytesLE(z(M[2]), F),
              ]),
              T = [0n, 1n, 0n],
              N = t.alloc([
                ...n.bigInt2BytesLE(z(T[0]), F),
                ...n.bigInt2BytesLE(z(T[1]), F),
                ...n.bigInt2BytesLE(z(T[2]), F),
              ]),
              U = [
                [
                  352701069587466618187139116011060144890029952792775240219908644239793785735715026873347600343865175952761926303160n,
                  3059144344244213709971259814753781636986470325476647558659373206291635324768958432433509563104347017837885763365758n,
                ],
                [
                  1985150602287291935568054521177171638300868978215655730859378665066344726373823718423869104263333984641494340347905n,
                  927553665492332455747201965776037880757740193453592970025027978793976877002675564980949289727957565575433344219582n,
                ],
                [1n, 0n],
              ],
              G = t.alloc([
                ...n.bigInt2BytesLE(z(U[0][0]), F),
                ...n.bigInt2BytesLE(z(U[0][1]), F),
                ...n.bigInt2BytesLE(z(U[1][0]), F),
                ...n.bigInt2BytesLE(z(U[1][1]), F),
                ...n.bigInt2BytesLE(z(U[2][0]), F),
                ...n.bigInt2BytesLE(z(U[2][1]), F),
              ]),
              j = [
                [0n, 0n],
                [1n, 0n],
                [0n, 0n],
              ],
              k = t.alloc([
                ...n.bigInt2BytesLE(z(j[0][0]), F),
                ...n.bigInt2BytesLE(z(j[0][1]), F),
                ...n.bigInt2BytesLE(z(j[1][0]), F),
                ...n.bigInt2BytesLE(z(j[1][1]), F),
                ...n.bigInt2BytesLE(z(j[2][0]), F),
                ...n.bigInt2BytesLE(z(j[2][1]), F),
              ]),
              $ = t.alloc([
                ...n.bigInt2BytesLE(z(1n), F),
                ...n.bigInt2BytesLE(z(0n), F),
                ...n.bigInt2BytesLE(z(0n), F),
                ...n.bigInt2BytesLE(z(0n), F),
                ...n.bigInt2BytesLE(z(0n), F),
                ...n.bigInt2BytesLE(z(0n), F),
                ...n.bigInt2BytesLE(z(0n), F),
                ...n.bigInt2BytesLE(z(0n), F),
                ...n.bigInt2BytesLE(z(0n), F),
                ...n.bigInt2BytesLE(z(0n), F),
                ...n.bigInt2BytesLE(z(0n), F),
                ...n.bigInt2BytesLE(z(0n), F),
              ]),
              Z = t.alloc([
                ...n.bigInt2BytesLE(z(1n), F),
                ...n.bigInt2BytesLE(z(1n), F),
              ]);
            !(function () {
              const e = t.addFunction(O + "_mulNR");
              e.addParam("x", "i32"), e.addParam("pr", "i32");
              const i = e.getCodeBuilder(),
                n = i.i32_const(t.alloc(F)),
                o = i.getLocal("x"),
                a = i.i32_add(i.getLocal("x"), i.i32_const(F)),
                s = i.getLocal("pr"),
                r = i.i32_add(i.getLocal("pr"), i.i32_const(F));
              e.addCode(
                i.call(C + "_copy", o, n),
                i.call(C + "_sub", o, a, s),
                i.call(C + "_add", n, a, r)
              );
            })();
            const W = r(t, O + "_mulNR", "f6m", "f2m");
            !(function () {
              const e = t.addFunction(W + "_mulNR");
              e.addParam("x", "i32"), e.addParam("pr", "i32");
              const i = e.getCodeBuilder(),
                n = i.i32_const(t.alloc(2 * F));
              e.addCode(
                i.call(O + "_copy", i.getLocal("x"), n),
                i.call(
                  O + "_mulNR",
                  i.i32_add(i.getLocal("x"), i.i32_const(4 * b)),
                  i.getLocal("pr")
                ),
                i.call(
                  O + "_copy",
                  i.i32_add(i.getLocal("x"), i.i32_const(2 * b)),
                  i.i32_add(i.getLocal("pr"), i.i32_const(4 * b))
                ),
                i.call(
                  O + "_copy",
                  n,
                  i.i32_add(i.getLocal("pr"), i.i32_const(2 * b))
                )
              );
            })();
            const D = s(t, W + "_mulNR", "ftm", W),
              J = (function (t) {
                let e = 0xd201000000010000n;
                const i = [];
                for (; e > 0n; ) _(e) ? i.push(1) : i.push(0), (e >>= 1n);
                return i;
              })(),
              V = t.alloc(J),
              Q = 3 * y,
              X = J.length - 1,
              K = J.reduce((t, e) => t + (0 != e ? 1 : 0), 0),
              Y = 6 * b,
              H = 3 * b * 2 + (K + X + 1) * Q,
              tt = 15132376222941642752n;
            function et(e) {
              const i = [
                  [
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                  ],
                  [
                    [1n, 0n],
                    [
                      3850754370037169011952147076051364057158807420970682438676050522613628423219637725072182697113062777891589506424760n,
                      151655185184498381465642749684540099398075398968325446656007613510403227271200139370504932015952886146304766135027n,
                    ],
                    [
                      793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620351n,
                      0n,
                    ],
                    [
                      2973677408986561043442465346520108879172042883009249989176415018091420807192182638567116318576472649347015917690530n,
                      1028732146235106349975324479215795277384839936929757896155643118032610843298655225875571310552543014690878354869257n,
                    ],
                    [
                      793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n,
                      0n,
                    ],
                    [
                      3125332594171059424908108096204648978570118281977575435832422631601824034463382777937621250592425535493320683825557n,
                      877076961050607968509681729531255177986764537961432449499635504522207616027455086505066378536590128544573588734230n,
                    ],
                    [
                      4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559786n,
                      0n,
                    ],
                    [
                      151655185184498381465642749684540099398075398968325446656007613510403227271200139370504932015952886146304766135027n,
                      3850754370037169011952147076051364057158807420970682438676050522613628423219637725072182697113062777891589506424760n,
                    ],
                    [
                      4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n,
                      0n,
                    ],
                    [
                      1028732146235106349975324479215795277384839936929757896155643118032610843298655225875571310552543014690878354869257n,
                      2973677408986561043442465346520108879172042883009249989176415018091420807192182638567116318576472649347015917690530n,
                    ],
                    [
                      4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939437n,
                      0n,
                    ],
                    [
                      877076961050607968509681729531255177986764537961432449499635504522207616027455086505066378536590128544573588734230n,
                      3125332594171059424908108096204648978570118281977575435832422631601824034463382777937621250592425535493320683825557n,
                    ],
                  ],
                ],
                o = [
                  [
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                  ],
                  [
                    [1n, 0n],
                    [
                      0n,
                      4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n,
                    ],
                    [
                      793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n,
                      0n,
                    ],
                    [0n, 1n],
                    [
                      4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n,
                      0n,
                    ],
                    [
                      0n,
                      793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n,
                    ],
                  ],
                  [
                    [1n, 0n],
                    [
                      4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939437n,
                      0n,
                    ],
                    [
                      4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n,
                      0n,
                    ],
                    [
                      4002409555221667393417789825735904156556882819939007885332058136124031650490837864442687629129015664037894272559786n,
                      0n,
                    ],
                    [
                      793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n,
                      0n,
                    ],
                    [
                      793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620351n,
                      0n,
                    ],
                  ],
                ],
                a = t.addFunction(D + "_frobeniusMap" + e);
              a.addParam("x", "i32"), a.addParam("r", "i32");
              const s = a.getCodeBuilder();
              for (let l = 0; l < 6; l++) {
                const c =
                    0 == l
                      ? s.getLocal("x")
                      : s.i32_add(s.getLocal("x"), s.i32_const(l * y)),
                  d = c,
                  u = s.i32_add(s.getLocal("x"), s.i32_const(l * y + F)),
                  h =
                    0 == l
                      ? s.getLocal("r")
                      : s.i32_add(s.getLocal("r"), s.i32_const(l * y)),
                  f = h,
                  _ = s.i32_add(s.getLocal("r"), s.i32_const(l * y + F)),
                  p = r(i[Math.floor(l / 3)][e % 12], o[l % 3][e % 6]),
                  g = t.alloc([
                    ...n.bigInt2BytesLE(z(p[0]), b),
                    ...n.bigInt2BytesLE(z(p[1]), b),
                  ]);
                e % 2 == 1
                  ? a.addCode(
                      s.call(C + "_copy", d, f),
                      s.call(C + "_neg", u, _),
                      s.call(O + "_mul", h, s.i32_const(g), h)
                    )
                  : a.addCode(s.call(O + "_mul", c, s.i32_const(g), h));
              }
              function r(t, e) {
                const i = t[0],
                  n = t[1],
                  o = e[0],
                  a = e[1],
                  s = [(i * o - n * a) % g, (i * a + n * o) % g];
                return p(s[0]) && (s[0] = s[0] + g), s;
              }
            }
            (t.modules[i] = {
              n64q: L,
              n64r: w,
              n8q: b,
              n8r: B,
              pG1gen: R,
              pG1zero: N,
              pG1b: A,
              pG2gen: G,
              pG2zero: k,
              pG2b: I,
              pq: t.modules.f1m.pq,
              pr: E,
              pOneT: $,
              r: m,
              q: g,
              prePSize: Y,
              preQSize: H,
            }),
              (function () {
                const e = t.addFunction(W + "_mul1");
                e.addParam("pA", "i32"),
                  e.addParam("pC1", "i32"),
                  e.addParam("pR", "i32");
                const i = e.getCodeBuilder(),
                  n = i.getLocal("pA"),
                  o = i.i32_add(i.getLocal("pA"), i.i32_const(2 * F)),
                  a = i.i32_add(i.getLocal("pA"), i.i32_const(4 * F)),
                  s = i.getLocal("pC1"),
                  r = i.getLocal("pR"),
                  l = i.i32_add(i.getLocal("pR"), i.i32_const(2 * F)),
                  c = i.i32_add(i.getLocal("pR"), i.i32_const(4 * F)),
                  d = i.i32_const(t.alloc(2 * F)),
                  u = i.i32_const(t.alloc(2 * F));
                e.addCode(
                  i.call(O + "_add", n, o, d),
                  i.call(O + "_add", o, a, u),
                  i.call(O + "_mul", o, s, c),
                  i.call(O + "_mul", u, s, r),
                  i.call(O + "_sub", r, c, r),
                  i.call(O + "_mulNR", r, r),
                  i.call(O + "_mul", d, s, l),
                  i.call(O + "_sub", l, c, l)
                );
              })(),
              (function () {
                const e = t.addFunction(W + "_mul01");
                e.addParam("pA", "i32"),
                  e.addParam("pC0", "i32"),
                  e.addParam("pC1", "i32"),
                  e.addParam("pR", "i32");
                const i = e.getCodeBuilder(),
                  n = i.getLocal("pA"),
                  o = i.i32_add(i.getLocal("pA"), i.i32_const(2 * F)),
                  a = i.i32_add(i.getLocal("pA"), i.i32_const(4 * F)),
                  s = i.getLocal("pC0"),
                  r = i.getLocal("pC1"),
                  l = i.getLocal("pR"),
                  c = i.i32_add(i.getLocal("pR"), i.i32_const(2 * F)),
                  d = i.i32_add(i.getLocal("pR"), i.i32_const(4 * F)),
                  u = i.i32_const(t.alloc(2 * F)),
                  h = i.i32_const(t.alloc(2 * F)),
                  f = i.i32_const(t.alloc(2 * F)),
                  _ = i.i32_const(t.alloc(2 * F));
                e.addCode(
                  i.call(O + "_mul", n, s, u),
                  i.call(O + "_mul", o, r, h),
                  i.call(O + "_add", n, o, f),
                  i.call(O + "_add", n, a, _),
                  i.call(O + "_add", o, a, l),
                  i.call(O + "_mul", l, r, l),
                  i.call(O + "_sub", l, h, l),
                  i.call(O + "_mulNR", l, l),
                  i.call(O + "_add", l, u, l),
                  i.call(O + "_add", s, r, c),
                  i.call(O + "_mul", c, f, c),
                  i.call(O + "_sub", c, u, c),
                  i.call(O + "_sub", c, h, c),
                  i.call(O + "_mul", _, s, d),
                  i.call(O + "_sub", d, u, d),
                  i.call(O + "_add", d, h, d)
                );
              })(),
              (function () {
                const e = t.addFunction(D + "_mul014");
                e.addParam("pA", "i32"),
                  e.addParam("pC0", "i32"),
                  e.addParam("pC1", "i32"),
                  e.addParam("pC4", "i32"),
                  e.addParam("pR", "i32");
                const i = e.getCodeBuilder(),
                  n = i.getLocal("pA"),
                  o = i.i32_add(i.getLocal("pA"), i.i32_const(6 * F)),
                  a = i.getLocal("pC0"),
                  s = i.getLocal("pC1"),
                  r = i.getLocal("pC4"),
                  l = i.i32_const(t.alloc(6 * F)),
                  c = i.i32_const(t.alloc(6 * F)),
                  d = i.i32_const(t.alloc(2 * F)),
                  u = i.getLocal("pR"),
                  h = i.i32_add(i.getLocal("pR"), i.i32_const(6 * F));
                e.addCode(
                  i.call(W + "_mul01", n, a, s, l),
                  i.call(W + "_mul1", o, r, c),
                  i.call(O + "_add", s, r, d),
                  i.call(W + "_add", o, n, h),
                  i.call(W + "_mul01", h, a, d, h),
                  i.call(W + "_sub", h, l, h),
                  i.call(W + "_sub", h, c, h),
                  i.call(W + "_copy", c, u),
                  i.call(W + "_mulNR", u, u),
                  i.call(W + "_add", u, l, u)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_ell");
                e.addParam("pP", "i32"),
                  e.addParam("pCoefs", "i32"),
                  e.addParam("pF", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("pP"),
                  a = n.i32_add(n.getLocal("pP"), n.i32_const(b)),
                  s = n.getLocal("pF"),
                  r = n.getLocal("pCoefs"),
                  l = n.i32_add(n.getLocal("pCoefs"), n.i32_const(F)),
                  c = n.i32_add(n.getLocal("pCoefs"), n.i32_const(2 * F)),
                  d = n.i32_add(n.getLocal("pCoefs"), n.i32_const(3 * F)),
                  u = n.i32_add(n.getLocal("pCoefs"), n.i32_const(4 * F)),
                  h = t.alloc(2 * F),
                  f = n.i32_const(h),
                  _ = n.i32_const(h),
                  p = n.i32_const(h + F),
                  g = t.alloc(2 * F),
                  m = n.i32_const(g),
                  L = n.i32_const(g),
                  y = n.i32_const(g + F);
                e.addCode(
                  n.call(C + "_mul", r, a, _),
                  n.call(C + "_mul", l, a, p),
                  n.call(C + "_mul", c, o, L),
                  n.call(C + "_mul", d, o, y),
                  n.call(D + "_mul014", s, u, m, f, s)
                );
              })();
            const it = t.alloc(Y),
              nt = t.alloc(H);
            function ot(e) {
              const n = t.addFunction(i + "_pairingEq" + e);
              for (let t = 0; t < e; t++)
                n.addParam("p_" + t, "i32"), n.addParam("q_" + t, "i32");
              n.addParam("c", "i32"), n.setReturnType("i32");
              const o = n.getCodeBuilder(),
                a = o.i32_const(t.alloc(x)),
                s = o.i32_const(t.alloc(x));
              n.addCode(o.call(D + "_one", a));
              for (let t = 0; t < e; t++)
                n.addCode(
                  o.call(
                    i + "_prepareG1",
                    o.getLocal("p_" + t),
                    o.i32_const(it)
                  )
                ),
                  n.addCode(
                    o.call(
                      i + "_prepareG2",
                      o.getLocal("q_" + t),
                      o.i32_const(nt)
                    )
                  ),
                  n.addCode(
                    o.if(
                      o.i32_eqz(o.call(q + "_inGroupAffine", o.i32_const(it))),
                      o.ret(o.i32_const(0))
                    ),
                    o.if(
                      o.i32_eqz(o.call(S + "_inGroupAffine", o.i32_const(nt))),
                      o.ret(o.i32_const(0))
                    )
                  ),
                  n.addCode(
                    o.call(
                      i + "_millerLoop",
                      o.i32_const(it),
                      o.i32_const(nt),
                      s
                    )
                  ),
                  n.addCode(o.call(D + "_mul", a, s, a));
              n.addCode(o.call(i + "_finalExponentiation", a, a)),
                n.addCode(o.call(D + "_eq", a, o.getLocal("c")));
            }
            for (let e = 0; e < 10; e++)
              et(e), t.exportFunction(D + "_frobeniusMap" + e);
            !(function () {
              const e = t.addFunction(q + "_inGroupAffine");
              e.addParam("p", "i32"), e.setReturnType("i32");
              const i = e.getCodeBuilder(),
                o = i.i32_const(
                  t.alloc(
                    n.bigInt2BytesLE(
                      z(
                        4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n
                      ),
                      b
                    )
                  )
                ),
                a = i.i32_const(
                  t.alloc(
                    n.bigInt2BytesLE(
                      z(
                        793479390729215512621379701633421447060886740281060493010456487427281649075476305620758731620350n
                      ),
                      b
                    )
                  )
                ),
                s = i.i32_const(
                  t.alloc(
                    n.bigInt2BytesLE(
                      76329603384216526021617858986798044501n,
                      16
                    )
                  )
                ),
                r = i.getLocal("p"),
                l = i.i32_add(i.getLocal("p"), i.i32_const(F)),
                c = t.alloc(3 * F),
                d = i.i32_const(c),
                u = i.i32_const(c),
                h = i.i32_const(c + F),
                f = t.alloc(2 * F),
                _ = i.i32_const(f),
                p = i.i32_const(f),
                g = i.i32_const(f + F);
              e.addCode(
                i.if(
                  i.call(q + "_isZeroAffine", i.getLocal("p")),
                  i.ret(i.i32_const(1))
                ),
                i.if(
                  i.i32_eqz(i.call(q + "_inCurveAffine", i.getLocal("p"))),
                  i.ret(i.i32_const(0))
                ),
                i.call(C + "_mul", r, o, u),
                i.call(C + "_copy", l, h),
                i.call(C + "_mul", r, a, p),
                i.call(C + "_copy", l, g),
                i.call(q + "_doubleAffine", d, d),
                i.call(q + "_subMixed", d, i.getLocal("p"), d),
                i.call(q + "_subMixed", d, _, d),
                i.call(q + "_timesScalar", d, s, i.i32_const(16), d),
                i.ret(i.call(q + "_eqMixed", d, _))
              );
              const m = t.addFunction(q + "_inGroup");
              m.addParam("pIn", "i32"), m.setReturnType("i32");
              const L = m.getCodeBuilder(),
                y = L.i32_const(t.alloc(2 * F));
              m.addCode(
                L.call(q + "_toAffine", L.getLocal("pIn"), y),
                L.ret(L.call(q + "_inGroupAffine", y))
              );
            })(),
              (function () {
                const e = t.addFunction(S + "_inGroupAffine");
                e.addParam("p", "i32"), e.setReturnType("i32");
                const i = e.getCodeBuilder(),
                  o = [
                    2001204777610833696708894912867952078278441409969503942666029068062015825245418932221343814564507832018947136279894n,
                    2001204777610833696708894912867952078278441409969503942666029068062015825245418932221343814564507832018947136279893n,
                  ],
                  a = [
                    2973677408986561043442465346520108879172042883009249989176415018091420807192182638567116318576472649347015917690530n,
                    2973677408986561043442465346520108879172042883009249989176415018091420807192182638567116318576472649347015917690530n,
                  ],
                  s = i.i32_const(
                    t.alloc([
                      ...n.bigInt2BytesLE(z(o[0]), b),
                      ...n.bigInt2BytesLE(z(o[1]), b),
                    ])
                  ),
                  r = i.i32_const(
                    t.alloc(
                      n.bigInt2BytesLE(
                        z(
                          4002409555221667392624310435006688643935503118305586438271171395842971157480381377015405980053539358417135540939436n
                        ),
                        b
                      )
                    )
                  ),
                  l = i.i32_const(
                    t.alloc([
                      ...n.bigInt2BytesLE(z(a[0]), b),
                      ...n.bigInt2BytesLE(z(a[1]), b),
                    ])
                  ),
                  c = i.i32_const(t.alloc(n.bigInt2BytesLE(tt, 8))),
                  d = i.getLocal("p"),
                  u = i.i32_add(i.getLocal("p"), i.i32_const(y)),
                  h = i.i32_const(t.alloc(F)),
                  f = i.i32_const(t.alloc(y)),
                  _ = i.i32_const(t.alloc(y)),
                  p = t.alloc(2 * y),
                  g = i.i32_const(p),
                  m = i.i32_const(p),
                  L = i.i32_const(p),
                  x = i.i32_const(p + F),
                  w = i.i32_const(p + y),
                  B = i.i32_const(p + y),
                  v = i.i32_const(p + y + F),
                  E = t.alloc(3 * y),
                  A = i.i32_const(E),
                  q = i.i32_const(E),
                  I = i.i32_const(E),
                  P = i.i32_const(E + F),
                  M = i.i32_const(E + y),
                  R = i.i32_const(E + y),
                  T = i.i32_const(E + y + F),
                  N = i.i32_const(E + 2 * y);
                e.addCode(
                  i.if(
                    i.call(S + "_isZeroAffine", i.getLocal("p")),
                    i.ret(i.i32_const(1))
                  ),
                  i.if(
                    i.i32_eqz(i.call(S + "_inCurveAffine", i.getLocal("p"))),
                    i.ret(i.i32_const(0))
                  ),
                  i.call(O + "_mul", d, s, f),
                  i.call(O + "_mul", u, s, _),
                  i.call(O + "_mul1", f, r, m),
                  i.call(O + "_neg", _, w),
                  i.call(O + "_neg", f, q),
                  i.call(O + "_mul", _, l, M),
                  i.call(C + "_sub", L, x, h),
                  i.call(C + "_add", L, x, x),
                  i.call(C + "_copy", h, L),
                  i.call(C + "_sub", B, v, h),
                  i.call(C + "_add", B, v, v),
                  i.call(C + "_copy", h, B),
                  i.call(C + "_add", I, P, h),
                  i.call(C + "_sub", I, P, P),
                  i.call(C + "_copy", h, I),
                  i.call(C + "_sub", T, R, h),
                  i.call(C + "_add", R, T, T),
                  i.call(C + "_copy", h, R),
                  i.call(O + "_one", N),
                  i.call(S + "_timesScalar", A, c, i.i32_const(8), A),
                  i.call(S + "_addMixed", A, g, A),
                  i.ret(i.call(S + "_eqMixed", A, i.getLocal("p")))
                );
                const U = t.addFunction(S + "_inGroup");
                U.addParam("pIn", "i32"), U.setReturnType("i32");
                const G = U.getCodeBuilder(),
                  j = G.i32_const(t.alloc(2 * y));
                U.addCode(
                  G.call(S + "_toAffine", G.getLocal("pIn"), j),
                  G.ret(G.call(S + "_inGroupAffine", j))
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_prepAddStep");
                e.addParam("R", "i32"),
                  e.addParam("Q", "i32"),
                  e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("R"),
                  a = n.i32_add(n.getLocal("R"), n.i32_const(2 * b)),
                  s = n.i32_add(n.getLocal("R"), n.i32_const(4 * b)),
                  r = n.getLocal("Q"),
                  l = n.i32_add(n.getLocal("Q"), n.i32_const(2 * b)),
                  c = n.getLocal("r"),
                  d = n.i32_add(n.getLocal("r"), n.i32_const(2 * b)),
                  u = n.i32_add(n.getLocal("r"), n.i32_const(4 * b)),
                  h = n.i32_const(t.alloc(y)),
                  f = n.i32_const(t.alloc(y)),
                  _ = n.i32_const(t.alloc(y)),
                  p = n.i32_const(t.alloc(y)),
                  g = n.i32_const(t.alloc(y)),
                  m = n.i32_const(t.alloc(y)),
                  L = n.i32_const(t.alloc(y)),
                  F = n.i32_const(t.alloc(y)),
                  x = n.i32_const(t.alloc(y)),
                  w = n.i32_const(t.alloc(y)),
                  B = n.i32_const(t.alloc(y));
                e.addCode(
                  n.call(O + "_square", s, h),
                  n.call(O + "_square", l, f),
                  n.call(O + "_mul", h, r, p),
                  n.call(O + "_add", l, s, d),
                  n.call(O + "_square", d, d),
                  n.call(O + "_sub", d, f, d),
                  n.call(O + "_sub", d, h, d),
                  n.call(O + "_mul", d, h, d),
                  n.call(O + "_sub", p, o, g),
                  n.call(O + "_square", g, m),
                  n.call(O + "_add", m, m, L),
                  n.call(O + "_add", L, L, L),
                  n.call(O + "_mul", L, g, F),
                  n.call(O + "_sub", d, a, x),
                  n.call(O + "_sub", x, a, x),
                  n.call(O + "_mul", x, r, u),
                  n.call(O + "_mul", L, o, w),
                  n.call(O + "_square", x, o),
                  n.call(O + "_sub", o, F, o),
                  n.call(O + "_sub", o, w, o),
                  n.call(O + "_sub", o, w, o),
                  n.call(O + "_add", s, g, s),
                  n.call(O + "_square", s, s),
                  n.call(O + "_sub", s, h, s),
                  n.call(O + "_sub", s, m, s),
                  n.call(O + "_add", l, s, c),
                  n.call(O + "_sub", w, o, B),
                  n.call(O + "_mul", B, x, B),
                  n.call(O + "_mul", a, F, p),
                  n.call(O + "_add", p, p, p),
                  n.call(O + "_sub", B, p, a),
                  n.call(O + "_square", c, c),
                  n.call(O + "_sub", c, f, c),
                  n.call(O + "_square", s, _),
                  n.call(O + "_sub", c, _, c),
                  n.call(O + "_add", u, u, u),
                  n.call(O + "_sub", u, c, u),
                  n.call(O + "_add", s, s, c),
                  n.call(O + "_neg", x, x),
                  n.call(O + "_add", x, x, d)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_prepDblStep");
                e.addParam("R", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("R"),
                  a = n.i32_add(n.getLocal("R"), n.i32_const(2 * b)),
                  s = n.i32_add(n.getLocal("R"), n.i32_const(4 * b)),
                  r = n.getLocal("r"),
                  l = n.i32_add(n.getLocal("r"), n.i32_const(2 * b)),
                  c = n.i32_add(n.getLocal("r"), n.i32_const(4 * b)),
                  d = n.i32_const(t.alloc(y)),
                  u = n.i32_const(t.alloc(y)),
                  h = n.i32_const(t.alloc(y)),
                  f = n.i32_const(t.alloc(y)),
                  _ = n.i32_const(t.alloc(y));
                e.addCode(
                  n.call(O + "_square", o, r),
                  n.call(O + "_square", a, u),
                  n.call(O + "_square", u, h),
                  n.call(O + "_add", u, o, l),
                  n.call(O + "_square", l, l),
                  n.call(O + "_sub", l, r, l),
                  n.call(O + "_sub", l, h, l),
                  n.call(O + "_add", l, l, l),
                  n.call(O + "_add", r, r, f),
                  n.call(O + "_add", f, r, f),
                  n.call(O + "_add", o, f, c),
                  n.call(O + "_square", f, _),
                  n.call(O + "_square", s, d),
                  n.call(O + "_sub", _, l, o),
                  n.call(O + "_sub", o, l, o),
                  n.call(O + "_add", s, a, s),
                  n.call(O + "_square", s, s),
                  n.call(O + "_sub", s, u, s),
                  n.call(O + "_sub", s, d, s),
                  n.call(O + "_sub", l, o, a),
                  n.call(O + "_mul", a, f, a),
                  n.call(O + "_add", h, h, h),
                  n.call(O + "_add", h, h, h),
                  n.call(O + "_add", h, h, h),
                  n.call(O + "_sub", a, h, a),
                  n.call(O + "_mul", f, d, l),
                  n.call(O + "_add", l, l, l),
                  n.call(O + "_neg", l, l),
                  n.call(O + "_square", c, c),
                  n.call(O + "_sub", c, r, c),
                  n.call(O + "_sub", c, _, c),
                  n.call(O + "_add", u, u, u),
                  n.call(O + "_add", u, u, u),
                  n.call(O + "_sub", c, u, c),
                  n.call(O + "_mul", s, d, r),
                  n.call(O + "_add", r, r, r)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_prepareG1");
                e.addParam("pP", "i32"), e.addParam("ppreP", "i32");
                const n = e.getCodeBuilder();
                e.addCode(
                  n.call(
                    q + "_normalize",
                    n.getLocal("pP"),
                    n.getLocal("ppreP")
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_prepareG2");
                e.addParam("pQ", "i32"),
                  e.addParam("ppreQ", "i32"),
                  e.addLocal("pCoef", "i32"),
                  e.addLocal("i", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("pQ"),
                  a = t.alloc(3 * y),
                  s = n.i32_const(a),
                  r = n.getLocal("ppreQ");
                e.addCode(
                  n.call(S + "_normalize", o, r),
                  n.if(n.call(S + "_isZero", r), n.ret([])),
                  n.call(S + "_copy", r, s),
                  n.setLocal(
                    "pCoef",
                    n.i32_add(n.getLocal("ppreQ"), n.i32_const(3 * y))
                  )
                ),
                  e.addCode(
                    n.setLocal("i", n.i32_const(J.length - 2)),
                    n.block(
                      n.loop(
                        n.call(i + "_prepDblStep", s, n.getLocal("pCoef")),
                        n.setLocal(
                          "pCoef",
                          n.i32_add(n.getLocal("pCoef"), n.i32_const(Q))
                        ),
                        n.if(n.i32_load8_s(n.getLocal("i"), V), [
                          ...n.call(
                            i + "_prepAddStep",
                            s,
                            r,
                            n.getLocal("pCoef")
                          ),
                          ...n.setLocal(
                            "pCoef",
                            n.i32_add(n.getLocal("pCoef"), n.i32_const(Q))
                          ),
                        ]),
                        n.br_if(1, n.i32_eqz(n.getLocal("i"))),
                        n.setLocal(
                          "i",
                          n.i32_sub(n.getLocal("i"), n.i32_const(1))
                        ),
                        n.br(0)
                      )
                    )
                  );
              })(),
              (function () {
                const e = t.addFunction(i + "_millerLoop");
                e.addParam("ppreP", "i32"),
                  e.addParam("ppreQ", "i32"),
                  e.addParam("r", "i32"),
                  e.addLocal("pCoef", "i32"),
                  e.addLocal("i", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("ppreP"),
                  a = n.getLocal("pCoef"),
                  s = n.getLocal("r");
                e.addCode(
                  n.call(D + "_one", s),
                  n.if(n.call(q + "_isZero", o), n.ret([])),
                  n.if(n.call(q + "_isZero", n.getLocal("ppreQ")), n.ret([])),
                  n.setLocal(
                    "pCoef",
                    n.i32_add(n.getLocal("ppreQ"), n.i32_const(3 * y))
                  ),
                  n.setLocal("i", n.i32_const(J.length - 2)),
                  n.block(
                    n.loop(
                      n.call(i + "_ell", o, a, s),
                      n.setLocal(
                        "pCoef",
                        n.i32_add(n.getLocal("pCoef"), n.i32_const(Q))
                      ),
                      n.if(n.i32_load8_s(n.getLocal("i"), V), [
                        ...n.call(i + "_ell", o, a, s),
                        ...n.setLocal(
                          "pCoef",
                          n.i32_add(n.getLocal("pCoef"), n.i32_const(Q))
                        ),
                      ]),
                      n.call(D + "_square", s, s),
                      n.br_if(1, n.i32_eq(n.getLocal("i"), n.i32_const(1))),
                      n.setLocal(
                        "i",
                        n.i32_sub(n.getLocal("i"), n.i32_const(1))
                      ),
                      n.br(0)
                    )
                  ),
                  n.call(i + "_ell", o, a, s)
                ),
                  e.addCode(n.call(D + "_conjugate", s, s));
              })(),
              (function () {
                const e = t.addFunction(i + "_finalExponentiationOld");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const o = t.alloc(
                    n.bigInt2BytesLE(
                      322277361516934140462891564586510139908379969514828494218366688025288661041104682794998680497580008899973249814104447692778988208376779573819485263026159588510513834876303014016798809919343532899164848730280942609956670917565618115867287399623286813270357901731510188149934363360381614501334086825442271920079363289954510565375378443704372994881406797882676971082200626541916413184642520269678897559532260949334760604962086348898118982248842634379637598665468817769075878555493752214492790122785850202957575200176084204422751485957336465472324810982833638490904279282696134323072515220044451592646885410572234451732790590013479358343841220074174848221722017083597872017638514103174122784843925578370430843522959600095676285723737049438346544753168912974976791528535276317256904336520179281145394686565050419250614107803233314658825463117900250701199181529205942363159325765991819433914303908860460720581408201373164047773794825411011922305820065611121544561808414055302212057471395719432072209245600258134364584636810093520285711072578721435517884103526483832733289802426157301542744476740008494780363354305116978805620671467071400711358839553375340724899735460480144599782014906586543813292157922220645089192130209334926661588737007768565838519456601560804957985667880395221049249803753582637708560n,
                      544
                    )
                  ),
                  a = e.getCodeBuilder();
                e.addCode(
                  a.call(
                    D + "_exp",
                    a.getLocal("x"),
                    a.i32_const(o),
                    a.i32_const(544),
                    a.getLocal("r")
                  )
                );
              })(),
              (function () {
                !(function () {
                  const e = t.addFunction(i + "__cyclotomicSquare");
                  e.addParam("x", "i32"), e.addParam("r", "i32");
                  const n = e.getCodeBuilder(),
                    o = n.getLocal("x"),
                    a = n.i32_add(n.getLocal("x"), n.i32_const(y)),
                    s = n.i32_add(n.getLocal("x"), n.i32_const(2 * y)),
                    r = n.i32_add(n.getLocal("x"), n.i32_const(3 * y)),
                    l = n.i32_add(n.getLocal("x"), n.i32_const(4 * y)),
                    c = n.i32_add(n.getLocal("x"), n.i32_const(5 * y)),
                    d = n.getLocal("r"),
                    u = n.i32_add(n.getLocal("r"), n.i32_const(y)),
                    h = n.i32_add(n.getLocal("r"), n.i32_const(2 * y)),
                    f = n.i32_add(n.getLocal("r"), n.i32_const(3 * y)),
                    _ = n.i32_add(n.getLocal("r"), n.i32_const(4 * y)),
                    p = n.i32_add(n.getLocal("r"), n.i32_const(5 * y)),
                    g = n.i32_const(t.alloc(y)),
                    m = n.i32_const(t.alloc(y)),
                    L = n.i32_const(t.alloc(y)),
                    b = n.i32_const(t.alloc(y)),
                    F = n.i32_const(t.alloc(y)),
                    x = n.i32_const(t.alloc(y)),
                    w = n.i32_const(t.alloc(y)),
                    B = n.i32_const(t.alloc(y));
                  e.addCode(
                    n.call(O + "_mul", o, l, w),
                    n.call(O + "_mulNR", l, g),
                    n.call(O + "_add", o, g, g),
                    n.call(O + "_add", o, l, B),
                    n.call(O + "_mul", B, g, g),
                    n.call(O + "_mulNR", w, B),
                    n.call(O + "_add", w, B, B),
                    n.call(O + "_sub", g, B, g),
                    n.call(O + "_add", w, w, m),
                    n.call(O + "_mul", r, s, w),
                    n.call(O + "_mulNR", s, L),
                    n.call(O + "_add", r, L, L),
                    n.call(O + "_add", r, s, B),
                    n.call(O + "_mul", B, L, L),
                    n.call(O + "_mulNR", w, B),
                    n.call(O + "_add", w, B, B),
                    n.call(O + "_sub", L, B, L),
                    n.call(O + "_add", w, w, b),
                    n.call(O + "_mul", a, c, w),
                    n.call(O + "_mulNR", c, F),
                    n.call(O + "_add", a, F, F),
                    n.call(O + "_add", a, c, B),
                    n.call(O + "_mul", B, F, F),
                    n.call(O + "_mulNR", w, B),
                    n.call(O + "_add", w, B, B),
                    n.call(O + "_sub", F, B, F),
                    n.call(O + "_add", w, w, x),
                    n.call(O + "_sub", g, o, d),
                    n.call(O + "_add", d, d, d),
                    n.call(O + "_add", g, d, d),
                    n.call(O + "_add", m, l, _),
                    n.call(O + "_add", _, _, _),
                    n.call(O + "_add", m, _, _),
                    n.call(O + "_mul", x, n.i32_const(Z), B),
                    n.call(O + "_add", B, r, f),
                    n.call(O + "_add", f, f, f),
                    n.call(O + "_add", B, f, f),
                    n.call(O + "_sub", F, s, h),
                    n.call(O + "_add", h, h, h),
                    n.call(O + "_add", F, h, h),
                    n.call(O + "_sub", L, a, u),
                    n.call(O + "_add", u, u, u),
                    n.call(O + "_add", L, u, u),
                    n.call(O + "_add", b, c, p),
                    n.call(O + "_add", p, p, p),
                    n.call(O + "_add", b, p, p)
                  );
                })(),
                  (function (e, n, o) {
                    const a = (function (t) {
                        let e = t;
                        const i = [];
                        for (; e > 0n; ) {
                          if (_(e)) {
                            const t = 2 - Number(e % 4n);
                            i.push(t), (e -= BigInt(t));
                          } else i.push(0);
                          e >>= 1n;
                        }
                        return i;
                      })(e).map((t) => (-1 == t ? 255 : t)),
                      s = t.alloc(a),
                      r = t.addFunction(i + "__cyclotomicExp_" + o);
                    r.addParam("x", "i32"),
                      r.addParam("r", "i32"),
                      r.addLocal("bit", "i32"),
                      r.addLocal("i", "i32");
                    const l = r.getCodeBuilder(),
                      c = l.getLocal("x"),
                      d = l.getLocal("r"),
                      u = l.i32_const(t.alloc(x));
                    r.addCode(
                      l.call(D + "_conjugate", c, u),
                      l.call(D + "_one", d),
                      l.if(
                        l.teeLocal(
                          "bit",
                          l.i32_load8_s(l.i32_const(a.length - 1), s)
                        ),
                        l.if(
                          l.i32_eq(l.getLocal("bit"), l.i32_const(1)),
                          l.call(D + "_mul", d, c, d),
                          l.call(D + "_mul", d, u, d)
                        )
                      ),
                      l.setLocal("i", l.i32_const(a.length - 2)),
                      l.block(
                        l.loop(
                          l.call(i + "__cyclotomicSquare", d, d),
                          l.if(
                            l.teeLocal(
                              "bit",
                              l.i32_load8_s(l.getLocal("i"), s)
                            ),
                            l.if(
                              l.i32_eq(l.getLocal("bit"), l.i32_const(1)),
                              l.call(D + "_mul", d, c, d),
                              l.call(D + "_mul", d, u, d)
                            )
                          ),
                          l.br_if(1, l.i32_eqz(l.getLocal("i"))),
                          l.setLocal(
                            "i",
                            l.i32_sub(l.getLocal("i"), l.i32_const(1))
                          ),
                          l.br(0)
                        )
                      )
                    ),
                      n && r.addCode(l.call(D + "_conjugate", d, d));
                  })(tt, !0, "w0");
                const e = t.addFunction(i + "_finalExponentiation");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.getLocal("r"),
                  s = n.i32_const(t.alloc(x)),
                  r = n.i32_const(t.alloc(x)),
                  l = n.i32_const(t.alloc(x)),
                  c = n.i32_const(t.alloc(x)),
                  d = n.i32_const(t.alloc(x)),
                  u = n.i32_const(t.alloc(x)),
                  h = n.i32_const(t.alloc(x));
                e.addCode(
                  n.call(D + "_frobeniusMap6", o, s),
                  n.call(D + "_inverse", o, r),
                  n.call(D + "_mul", s, r, l),
                  n.call(D + "_copy", l, r),
                  n.call(D + "_frobeniusMap2", l, l),
                  n.call(D + "_mul", l, r, l),
                  n.call(i + "__cyclotomicSquare", l, r),
                  n.call(D + "_conjugate", r, r),
                  n.call(i + "__cyclotomicExp_w0", l, c),
                  n.call(i + "__cyclotomicSquare", c, d),
                  n.call(D + "_mul", r, c, u),
                  n.call(i + "__cyclotomicExp_w0", u, r),
                  n.call(i + "__cyclotomicExp_w0", r, s),
                  n.call(i + "__cyclotomicExp_w0", s, h),
                  n.call(D + "_mul", h, d, h),
                  n.call(i + "__cyclotomicExp_w0", h, d),
                  n.call(D + "_conjugate", u, u),
                  n.call(D + "_mul", d, u, d),
                  n.call(D + "_mul", d, l, d),
                  n.call(D + "_conjugate", l, u),
                  n.call(D + "_mul", r, l, r),
                  n.call(D + "_frobeniusMap3", r, r),
                  n.call(D + "_mul", h, u, h),
                  n.call(D + "_frobeniusMap1", h, h),
                  n.call(D + "_mul", c, s, c),
                  n.call(D + "_frobeniusMap2", c, c),
                  n.call(D + "_mul", c, r, c),
                  n.call(D + "_mul", c, h, c),
                  n.call(D + "_mul", c, d, a)
                );
              })();
            for (let e = 1; e <= 5; e++)
              ot(e), t.exportFunction(i + "_pairingEq" + e);
            !(function () {
              const e = t.addFunction(i + "_pairing");
              e.addParam("p", "i32"),
                e.addParam("q", "i32"),
                e.addParam("r", "i32");
              const n = e.getCodeBuilder(),
                o = n.i32_const(t.alloc(x));
              e.addCode(
                n.call(i + "_prepareG1", n.getLocal("p"), n.i32_const(it))
              ),
                e.addCode(
                  n.call(i + "_prepareG2", n.getLocal("q"), n.i32_const(nt))
                ),
                e.addCode(
                  n.call(i + "_millerLoop", n.i32_const(it), n.i32_const(nt), o)
                ),
                e.addCode(
                  n.call(i + "_finalExponentiation", o, n.getLocal("r"))
                );
            })(),
              t.exportFunction(i + "_pairing"),
              t.exportFunction(i + "_prepareG1"),
              t.exportFunction(i + "_prepareG2"),
              t.exportFunction(i + "_millerLoop"),
              t.exportFunction(i + "_finalExponentiation"),
              t.exportFunction(i + "_finalExponentiationOld"),
              t.exportFunction(i + "__cyclotomicSquare"),
              t.exportFunction(i + "__cyclotomicExp_w0"),
              t.exportFunction(W + "_mul1"),
              t.exportFunction(W + "_mul01"),
              t.exportFunction(D + "_mul014"),
              t.exportFunction(q + "_inGroupAffine"),
              t.exportFunction(q + "_inGroup"),
              t.exportFunction(S + "_inGroupAffine"),
              t.exportFunction(S + "_inGroup");
          };
        },
        584: (t, e, i) => {
          const n = i(333),
            o = i(75),
            a = i(138),
            s = i(420),
            r = i(173),
            l = i(904),
            c = i(292),
            d = i(896),
            u = i(637),
            h = i(320),
            { bitLength: f, modInv: _, isOdd: p, isNegative: g } = i(409);
          t.exports = function (t, e) {
            const i = e || "bn128";
            if (t.modules[i]) return i;
            const m =
                21888242871839275222246405745257275088696311157297823662689037894645226208583n,
              L =
                21888242871839275222246405745257275088548364400416034343698204186575808495617n,
              b = Math.floor((f(m - 1n) - 1) / 64) + 1,
              F = 8 * b,
              y = F,
              x = F,
              w = 2 * x,
              B = 12 * x,
              v = t.alloc(n.bigInt2BytesLE(L, y)),
              E = o(t, m, "f1m");
            a(t, L, "fr", "frm");
            const C = t.alloc(n.bigInt2BytesLE(P(3n), x)),
              A = l(t, "g1m", "f1m", C);
            c(t, "frm", "frm", "frm", "frm_mul"),
              d(t, "pol", "frm"),
              u(t, "qap", "frm");
            const q = s(t, "f1m_neg", "f2m", "f1m"),
              O = t.alloc([
                ...n.bigInt2BytesLE(
                  P(
                    19485874751759354771024239261021720505790618469301721065564631296452457478373n
                  ),
                  x
                ),
                ...n.bigInt2BytesLE(
                  P(
                    266929791119991161246907387137283842545076965332900288569378510910307636690n
                  ),
                  x
                ),
              ]),
              I = l(t, "g2m", "f2m", O);
            function S(e, i) {
              const n = t.addFunction(e);
              n.addParam("pG", "i32"),
                n.addParam("pFr", "i32"),
                n.addParam("pr", "i32");
              const o = n.getCodeBuilder(),
                a = o.i32_const(t.alloc(F));
              n.addCode(
                o.call("frm_fromMontgomery", o.getLocal("pFr"), a),
                o.call(i, o.getLocal("pG"), a, o.i32_const(F), o.getLocal("pr"))
              ),
                t.exportFunction(e);
            }
            function P(t) {
              return (BigInt(t) * (1n << BigInt(8 * x))) % m;
            }
            S("g1m_timesFr", "g1m_timesScalar"),
              c(t, "g1m", "g1m", "frm", "g1m_timesFr"),
              S("g2m_timesFr", "g2m_timesScalar"),
              c(t, "g2m", "g2m", "frm", "g2m_timesFr"),
              S("g1m_timesFrAffine", "g1m_timesScalarAffine"),
              S("g2m_timesFrAffine", "g2m_timesScalarAffine"),
              h(t, "frm_batchApplyKey", "fmr", "frm", F, F, F, "frm_mul"),
              h(
                t,
                "g1m_batchApplyKey",
                "g1m",
                "frm",
                3 * F,
                3 * F,
                F,
                "g1m_timesFr"
              ),
              h(
                t,
                "g1m_batchApplyKeyMixed",
                "g1m",
                "frm",
                2 * F,
                3 * F,
                F,
                "g1m_timesFrAffine"
              ),
              h(
                t,
                "g2m_batchApplyKey",
                "g2m",
                "frm",
                2 * F * 3,
                3 * F * 2,
                F,
                "g2m_timesFr"
              ),
              h(
                t,
                "g2m_batchApplyKeyMixed",
                "g2m",
                "frm",
                2 * F * 2,
                3 * F * 2,
                F,
                "g2m_timesFrAffine"
              );
            const z = [1n, 2n, 1n],
              M = t.alloc([
                ...n.bigInt2BytesLE(P(z[0]), x),
                ...n.bigInt2BytesLE(P(z[1]), x),
                ...n.bigInt2BytesLE(P(z[2]), x),
              ]),
              R = [0n, 1n, 0n],
              T = t.alloc([
                ...n.bigInt2BytesLE(P(R[0]), x),
                ...n.bigInt2BytesLE(P(R[1]), x),
                ...n.bigInt2BytesLE(P(R[2]), x),
              ]),
              N = [
                [
                  10857046999023057135944570762232829481370756359578518086990519993285655852781n,
                  11559732032986387107991004021392285783925812861821192530917403151452391805634n,
                ],
                [
                  8495653923123431417604973247489272438418190587263600148770280649306958101930n,
                  4082367875863433681332203403145435568316851327593401208105741076214120093531n,
                ],
                [1n, 0n],
              ],
              U = t.alloc([
                ...n.bigInt2BytesLE(P(N[0][0]), x),
                ...n.bigInt2BytesLE(P(N[0][1]), x),
                ...n.bigInt2BytesLE(P(N[1][0]), x),
                ...n.bigInt2BytesLE(P(N[1][1]), x),
                ...n.bigInt2BytesLE(P(N[2][0]), x),
                ...n.bigInt2BytesLE(P(N[2][1]), x),
              ]),
              G = [
                [0n, 0n],
                [1n, 0n],
                [0n, 0n],
              ],
              j = t.alloc([
                ...n.bigInt2BytesLE(P(G[0][0]), x),
                ...n.bigInt2BytesLE(P(G[0][1]), x),
                ...n.bigInt2BytesLE(P(G[1][0]), x),
                ...n.bigInt2BytesLE(P(G[1][1]), x),
                ...n.bigInt2BytesLE(P(G[2][0]), x),
                ...n.bigInt2BytesLE(P(G[2][1]), x),
              ]),
              k = t.alloc([
                ...n.bigInt2BytesLE(P(1), x),
                ...n.bigInt2BytesLE(P(0), x),
                ...n.bigInt2BytesLE(P(0), x),
                ...n.bigInt2BytesLE(P(0), x),
                ...n.bigInt2BytesLE(P(0), x),
                ...n.bigInt2BytesLE(P(0), x),
                ...n.bigInt2BytesLE(P(0), x),
                ...n.bigInt2BytesLE(P(0), x),
                ...n.bigInt2BytesLE(P(0), x),
                ...n.bigInt2BytesLE(P(0), x),
                ...n.bigInt2BytesLE(P(0), x),
                ...n.bigInt2BytesLE(P(0), x),
              ]),
              $ = t.alloc([
                ...n.bigInt2BytesLE(P(9), x),
                ...n.bigInt2BytesLE(P(1), x),
              ]),
              Z = t.alloc([
                ...n.bigInt2BytesLE(P(_(2n, m)), x),
                ...n.bigInt2BytesLE(0n, x),
              ]),
              W = $,
              D = t.alloc([
                ...n.bigInt2BytesLE(
                  P(
                    19485874751759354771024239261021720505790618469301721065564631296452457478373n
                  ),
                  x
                ),
                ...n.bigInt2BytesLE(
                  P(
                    266929791119991161246907387137283842545076965332900288569378510910307636690n
                  ),
                  x
                ),
              ]);
            !(function () {
              const e = t.addFunction(i + "_mulNR6");
              e.addParam("x", "i32"), e.addParam("pr", "i32");
              const n = e.getCodeBuilder();
              e.addCode(
                n.call(
                  q + "_mul",
                  n.i32_const($),
                  n.getLocal("x"),
                  n.getLocal("pr")
                )
              );
            })();
            const J = r(t, i + "_mulNR6", "f6m", "f2m");
            !(function () {
              const e = t.addFunction(i + "_mulNR12");
              e.addParam("x", "i32"), e.addParam("pr", "i32");
              const n = e.getCodeBuilder();
              e.addCode(
                n.call(
                  q + "_mul",
                  n.i32_const($),
                  n.i32_add(n.getLocal("x"), n.i32_const(4 * F)),
                  n.getLocal("pr")
                ),
                n.call(
                  q + "_copy",
                  n.getLocal("x"),
                  n.i32_add(n.getLocal("pr"), n.i32_const(2 * F))
                ),
                n.call(
                  q + "_copy",
                  n.i32_add(n.getLocal("x"), n.i32_const(2 * F)),
                  n.i32_add(n.getLocal("pr"), n.i32_const(4 * F))
                )
              );
            })();
            const V = s(t, i + "_mulNR12", "ftm", J),
              Q = (function (t) {
                let e = 29793968203157093288n;
                const i = [];
                for (; e > 0n; ) p(e) ? i.push(1) : i.push(0), (e >>= 1n);
                return i;
              })(),
              X = t.alloc(Q),
              K = 3 * w,
              Y = Q.length - 1,
              H = Q.reduce((t, e) => t + (0 != e ? 1 : 0), 0),
              tt = 6 * F,
              et = 3 * F * 2 + (H + Y + 1) * K;
            t.modules[i] = {
              n64: b,
              pG1gen: M,
              pG1zero: T,
              pG1b: C,
              pG2gen: U,
              pG2zero: j,
              pG2b: O,
              pq: t.modules.f1m.pq,
              pr: v,
              pOneT: k,
              prePSize: tt,
              preQSize: et,
              r: L.toString(),
              q: m.toString(),
            };
            function it(e) {
              const o = [
                  [
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                  ],
                  [
                    [1n, 0n],
                    [
                      8376118865763821496583973867626364092589906065868298776909617916018768340080n,
                      16469823323077808223889137241176536799009286646108169935659301613961712198316n,
                    ],
                    [
                      21888242871839275220042445260109153167277707414472061641714758635765020556617n,
                      0n,
                    ],
                    [
                      11697423496358154304825782922584725312912383441159505038794027105778954184319n,
                      303847389135065887422783454877609941456349188919719272345083954437860409601n,
                    ],
                    [
                      21888242871839275220042445260109153167277707414472061641714758635765020556616n,
                      0n,
                    ],
                    [
                      3321304630594332808241809054958361220322477375291206261884409189760185844239n,
                      5722266937896532885780051958958348231143373700109372999374820235121374419868n,
                    ],
                    [
                      21888242871839275222246405745257275088696311157297823662689037894645226208582n,
                      0n,
                    ],
                    [
                      13512124006075453725662431877630910996106405091429524885779419978626457868503n,
                      5418419548761466998357268504080738289687024511189653727029736280683514010267n,
                    ],
                    [
                      2203960485148121921418603742825762020974279258880205651966n,
                      0n,
                    ],
                    [
                      10190819375481120917420622822672549775783927716138318623895010788866272024264n,
                      21584395482704209334823622290379665147239961968378104390343953940207365798982n,
                    ],
                    [
                      2203960485148121921418603742825762020974279258880205651967n,
                      0n,
                    ],
                    [
                      18566938241244942414004596690298913868373833782006617400804628704885040364344n,
                      16165975933942742336466353786298926857552937457188450663314217659523851788715n,
                    ],
                  ],
                ],
                a = [
                  [
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                    [1n, 0n],
                  ],
                  [
                    [1n, 0n],
                    [
                      21575463638280843010398324269430826099269044274347216827212613867836435027261n,
                      10307601595873709700152284273816112264069230130616436755625194854815875713954n,
                    ],
                    [
                      21888242871839275220042445260109153167277707414472061641714758635765020556616n,
                      0n,
                    ],
                    [
                      3772000881919853776433695186713858239009073593817195771773381919316419345261n,
                      2236595495967245188281701248203181795121068902605861227855261137820944008926n,
                    ],
                    [
                      2203960485148121921418603742825762020974279258880205651966n,
                      0n,
                    ],
                    [
                      18429021223477853657660792034369865839114504446431234726392080002137598044644n,
                      9344045779998320333812420223237981029506012124075525679208581902008406485703n,
                    ],
                  ],
                  [
                    [1n, 0n],
                    [
                      2581911344467009335267311115468803099551665605076196740867805258568234346338n,
                      19937756971775647987995932169929341994314640652964949448313374472400716661030n,
                    ],
                    [
                      2203960485148121921418603742825762020974279258880205651966n,
                      0n,
                    ],
                    [
                      5324479202449903542726783395506214481928257762400643279780343368557297135718n,
                      16208900380737693084919495127334387981393726419856888799917914180988844123039n,
                    ],
                    [
                      21888242871839275220042445260109153167277707414472061641714758635765020556616n,
                      0n,
                    ],
                    [
                      13981852324922362344252311234282257507216387789820983642040889267519694726527n,
                      7629828391165209371577384193250820201684255241773809077146787135900891633097n,
                    ],
                  ],
                ],
                s = t.addFunction(i + "__frobeniusMap" + e);
              s.addParam("x", "i32"), s.addParam("r", "i32");
              const r = s.getCodeBuilder();
              for (let i = 0; i < 6; i++) {
                const c =
                    0 == i
                      ? r.getLocal("x")
                      : r.i32_add(r.getLocal("x"), r.i32_const(i * w)),
                  d = c,
                  u = r.i32_add(r.getLocal("x"), r.i32_const(i * w + x)),
                  h =
                    0 == i
                      ? r.getLocal("r")
                      : r.i32_add(r.getLocal("r"), r.i32_const(i * w)),
                  f = h,
                  _ = r.i32_add(r.getLocal("r"), r.i32_const(i * w + x)),
                  p = l(o[Math.floor(i / 3)][e % 12], a[i % 3][e % 6]),
                  g = t.alloc([
                    ...n.bigInt2BytesLE(P(p[0]), 32),
                    ...n.bigInt2BytesLE(P(p[1]), 32),
                  ]);
                e % 2 == 1
                  ? s.addCode(
                      r.call(E + "_copy", d, f),
                      r.call(E + "_neg", u, _),
                      r.call(q + "_mul", h, r.i32_const(g), h)
                    )
                  : s.addCode(r.call(q + "_mul", c, r.i32_const(g), h));
              }
              function l(t, e) {
                const i = BigInt(t[0]),
                  n = BigInt(t[1]),
                  o = BigInt(e[0]),
                  a = BigInt(e[1]),
                  s = [(i * o - n * a) % m, (i * a + n * o) % m];
                return g(s[0]) && (s[0] = s[0] + m), s;
              }
            }
            function nt() {
              !(function () {
                const e = t.addFunction(i + "__cyclotomicSquare");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(w)),
                  s = n.i32_add(n.getLocal("x"), n.i32_const(2 * w)),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(3 * w)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(4 * w)),
                  c = n.i32_add(n.getLocal("x"), n.i32_const(5 * w)),
                  d = n.getLocal("r"),
                  u = n.i32_add(n.getLocal("r"), n.i32_const(w)),
                  h = n.i32_add(n.getLocal("r"), n.i32_const(2 * w)),
                  f = n.i32_add(n.getLocal("r"), n.i32_const(3 * w)),
                  _ = n.i32_add(n.getLocal("r"), n.i32_const(4 * w)),
                  p = n.i32_add(n.getLocal("r"), n.i32_const(5 * w)),
                  g = n.i32_const(t.alloc(w)),
                  m = n.i32_const(t.alloc(w)),
                  L = n.i32_const(t.alloc(w)),
                  b = n.i32_const(t.alloc(w)),
                  F = n.i32_const(t.alloc(w)),
                  y = n.i32_const(t.alloc(w)),
                  x = n.i32_const(t.alloc(w)),
                  B = n.i32_const(t.alloc(w));
                e.addCode(
                  n.call(q + "_mul", o, l, x),
                  n.call(q + "_mul", l, n.i32_const($), g),
                  n.call(q + "_add", o, g, g),
                  n.call(q + "_add", o, l, B),
                  n.call(q + "_mul", B, g, g),
                  n.call(q + "_mul", n.i32_const($), x, B),
                  n.call(q + "_add", x, B, B),
                  n.call(q + "_sub", g, B, g),
                  n.call(q + "_add", x, x, m),
                  n.call(q + "_mul", r, s, x),
                  n.call(q + "_mul", s, n.i32_const($), L),
                  n.call(q + "_add", r, L, L),
                  n.call(q + "_add", r, s, B),
                  n.call(q + "_mul", B, L, L),
                  n.call(q + "_mul", n.i32_const($), x, B),
                  n.call(q + "_add", x, B, B),
                  n.call(q + "_sub", L, B, L),
                  n.call(q + "_add", x, x, b),
                  n.call(q + "_mul", a, c, x),
                  n.call(q + "_mul", c, n.i32_const($), F),
                  n.call(q + "_add", a, F, F),
                  n.call(q + "_add", a, c, B),
                  n.call(q + "_mul", B, F, F),
                  n.call(q + "_mul", n.i32_const($), x, B),
                  n.call(q + "_add", x, B, B),
                  n.call(q + "_sub", F, B, F),
                  n.call(q + "_add", x, x, y),
                  n.call(q + "_sub", g, o, d),
                  n.call(q + "_add", d, d, d),
                  n.call(q + "_add", g, d, d),
                  n.call(q + "_add", m, l, _),
                  n.call(q + "_add", _, _, _),
                  n.call(q + "_add", m, _, _),
                  n.call(q + "_mul", y, n.i32_const(W), B),
                  n.call(q + "_add", B, r, f),
                  n.call(q + "_add", f, f, f),
                  n.call(q + "_add", B, f, f),
                  n.call(q + "_sub", F, s, h),
                  n.call(q + "_add", h, h, h),
                  n.call(q + "_add", F, h, h),
                  n.call(q + "_sub", L, a, u),
                  n.call(q + "_add", u, u, u),
                  n.call(q + "_add", L, u, u),
                  n.call(q + "_add", b, c, p),
                  n.call(q + "_add", p, p, p),
                  n.call(q + "_add", b, p, p)
                );
              })(),
                (function (e, n) {
                  const o = (function (t) {
                      let e = t;
                      const i = [];
                      for (; e > 0n; ) {
                        if (p(e)) {
                          const t = 2 - Number(e % 4n);
                          i.push(t), (e -= BigInt(t));
                        } else i.push(0);
                        e >>= 1n;
                      }
                      return i;
                    })(e).map((t) => (-1 == t ? 255 : t)),
                    a = t.alloc(o),
                    s = t.addFunction(i + "__cyclotomicExp_" + n);
                  s.addParam("x", "i32"),
                    s.addParam("r", "i32"),
                    s.addLocal("bit", "i32"),
                    s.addLocal("i", "i32");
                  const r = s.getCodeBuilder(),
                    l = r.getLocal("x"),
                    c = r.getLocal("r"),
                    d = r.i32_const(t.alloc(B));
                  s.addCode(
                    r.call(V + "_conjugate", l, d),
                    r.call(V + "_one", c),
                    r.if(
                      r.teeLocal(
                        "bit",
                        r.i32_load8_s(r.i32_const(o.length - 1), a)
                      ),
                      r.if(
                        r.i32_eq(r.getLocal("bit"), r.i32_const(1)),
                        r.call(V + "_mul", c, l, c),
                        r.call(V + "_mul", c, d, c)
                      )
                    ),
                    r.setLocal("i", r.i32_const(o.length - 2)),
                    r.block(
                      r.loop(
                        r.call(i + "__cyclotomicSquare", c, c),
                        r.if(
                          r.teeLocal("bit", r.i32_load8_s(r.getLocal("i"), a)),
                          r.if(
                            r.i32_eq(r.getLocal("bit"), r.i32_const(1)),
                            r.call(V + "_mul", c, l, c),
                            r.call(V + "_mul", c, d, c)
                          )
                        ),
                        r.br_if(1, r.i32_eqz(r.getLocal("i"))),
                        r.setLocal(
                          "i",
                          r.i32_sub(r.getLocal("i"), r.i32_const(1))
                        ),
                        r.br(0)
                      )
                    )
                  );
                })(4965661367192848881n, "w0");
              const e = t.addFunction(i + "__finalExponentiationLastChunk");
              e.addParam("x", "i32"), e.addParam("r", "i32");
              const n = e.getCodeBuilder(),
                o = n.getLocal("x"),
                a = n.getLocal("r"),
                s = n.i32_const(t.alloc(B)),
                r = n.i32_const(t.alloc(B)),
                l = n.i32_const(t.alloc(B)),
                c = n.i32_const(t.alloc(B)),
                d = n.i32_const(t.alloc(B)),
                u = n.i32_const(t.alloc(B)),
                h = n.i32_const(t.alloc(B)),
                f = n.i32_const(t.alloc(B)),
                _ = n.i32_const(t.alloc(B)),
                g = n.i32_const(t.alloc(B)),
                m = n.i32_const(t.alloc(B)),
                L = n.i32_const(t.alloc(B)),
                b = n.i32_const(t.alloc(B)),
                F = n.i32_const(t.alloc(B)),
                y = n.i32_const(t.alloc(B)),
                x = n.i32_const(t.alloc(B)),
                v = n.i32_const(t.alloc(B)),
                E = n.i32_const(t.alloc(B)),
                C = n.i32_const(t.alloc(B)),
                A = n.i32_const(t.alloc(B)),
                O = n.i32_const(t.alloc(B));
              e.addCode(
                n.call(i + "__cyclotomicExp_w0", o, s),
                n.call(V + "_conjugate", s, s),
                n.call(i + "__cyclotomicSquare", s, r),
                n.call(i + "__cyclotomicSquare", r, l),
                n.call(V + "_mul", l, r, c),
                n.call(i + "__cyclotomicExp_w0", c, d),
                n.call(V + "_conjugate", d, d),
                n.call(i + "__cyclotomicSquare", d, u),
                n.call(i + "__cyclotomicExp_w0", u, h),
                n.call(V + "_conjugate", h, h),
                n.call(V + "_conjugate", c, f),
                n.call(V + "_conjugate", h, _),
                n.call(V + "_mul", _, d, g),
                n.call(V + "_mul", g, f, m),
                n.call(V + "_mul", m, r, L),
                n.call(V + "_mul", m, d, b),
                n.call(V + "_mul", b, o, F),
                n.call(i + "__frobeniusMap1", L, y),
                n.call(V + "_mul", y, F, x),
                n.call(i + "__frobeniusMap2", m, v),
                n.call(V + "_mul", v, x, E),
                n.call(V + "_conjugate", o, C),
                n.call(V + "_mul", C, L, A),
                n.call(i + "__frobeniusMap3", A, O),
                n.call(V + "_mul", O, E, a)
              );
            }
            const ot = t.alloc(tt),
              at = t.alloc(et);
            function st(e) {
              const n = t.addFunction(i + "_pairingEq" + e);
              for (let t = 0; t < e; t++)
                n.addParam("p_" + t, "i32"), n.addParam("q_" + t, "i32");
              n.addParam("c", "i32"), n.setReturnType("i32");
              const o = n.getCodeBuilder(),
                a = o.i32_const(t.alloc(B)),
                s = o.i32_const(t.alloc(B));
              n.addCode(o.call(V + "_one", a));
              for (let t = 0; t < e; t++)
                n.addCode(
                  o.call(
                    i + "_prepareG1",
                    o.getLocal("p_" + t),
                    o.i32_const(ot)
                  )
                ),
                  n.addCode(
                    o.call(
                      i + "_prepareG2",
                      o.getLocal("q_" + t),
                      o.i32_const(at)
                    )
                  ),
                  n.addCode(
                    o.call(
                      i + "_millerLoop",
                      o.i32_const(ot),
                      o.i32_const(at),
                      s
                    )
                  ),
                  n.addCode(o.call(V + "_mul", a, s, a));
              n.addCode(o.call(i + "_finalExponentiation", a, a)),
                n.addCode(o.call(V + "_eq", a, o.getLocal("c")));
            }
            !(function () {
              const e = t.addFunction(i + "_prepAddStep");
              e.addParam("pQ", "i32"),
                e.addParam("pR", "i32"),
                e.addParam("pCoef", "i32");
              const n = e.getCodeBuilder(),
                o = n.getLocal("pQ"),
                a = n.i32_add(n.getLocal("pQ"), n.i32_const(w)),
                s = n.getLocal("pR"),
                r = n.i32_add(n.getLocal("pR"), n.i32_const(w)),
                l = n.i32_add(n.getLocal("pR"), n.i32_const(2 * w)),
                c = n.getLocal("pCoef"),
                d = n.i32_add(n.getLocal("pCoef"), n.i32_const(w)),
                u = n.i32_add(n.getLocal("pCoef"), n.i32_const(2 * w)),
                h = d,
                f = n.i32_const(t.alloc(w)),
                _ = n.i32_const(t.alloc(w)),
                p = n.i32_const(t.alloc(w)),
                g = n.i32_const(t.alloc(w)),
                m = n.i32_const(t.alloc(w)),
                L = n.i32_const(t.alloc(w)),
                b = n.i32_const(t.alloc(w));
              e.addCode(
                n.call(q + "_mul", o, l, h),
                n.call(q + "_sub", s, h, h),
                n.call(q + "_mul", a, l, f),
                n.call(q + "_sub", r, f, f),
                n.call(q + "_square", h, _),
                n.call(q + "_square", f, p),
                n.call(q + "_mul", h, _, g),
                n.call(q + "_mul", s, _, m),
                n.call(q + "_add", m, m, b),
                n.call(q + "_mul", l, p, L),
                n.call(q + "_add", g, L, L),
                n.call(q + "_sub", L, b, L),
                n.call(q + "_mul", h, L, s),
                n.call(q + "_mul", g, r, r),
                n.call(q + "_sub", m, L, b),
                n.call(q + "_mul", f, b, b),
                n.call(q + "_sub", b, r, r),
                n.call(q + "_mul", l, g, l),
                n.call(q + "_mul", h, a, b),
                n.call(q + "_mul", f, o, c),
                n.call(q + "_sub", c, b, c),
                n.call(q + "_mul", c, n.i32_const(W), c),
                n.call(q + "_neg", f, u)
              );
            })(),
              (function () {
                const e = t.addFunction(i + "_prepDblStep");
                e.addParam("pR", "i32"), e.addParam("pCoef", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("pR"),
                  a = n.i32_add(n.getLocal("pR"), n.i32_const(w)),
                  s = n.i32_add(n.getLocal("pR"), n.i32_const(2 * w)),
                  r = n.getLocal("pCoef"),
                  l = n.i32_add(n.getLocal("pCoef"), n.i32_const(w)),
                  c = n.i32_add(n.getLocal("pCoef"), n.i32_const(2 * w)),
                  d = n.i32_const(t.alloc(w)),
                  u = n.i32_const(t.alloc(w)),
                  h = n.i32_const(t.alloc(w)),
                  f = n.i32_const(t.alloc(w)),
                  _ = n.i32_const(t.alloc(w)),
                  p = n.i32_const(t.alloc(w)),
                  g = n.i32_const(t.alloc(w)),
                  m = n.i32_const(t.alloc(w)),
                  L = n.i32_const(t.alloc(w)),
                  b = n.i32_const(t.alloc(w)),
                  F = n.i32_const(t.alloc(w)),
                  y = n.i32_const(t.alloc(w));
                e.addCode(
                  n.call(q + "_mul", a, n.i32_const(Z), d),
                  n.call(q + "_mul", o, d, d),
                  n.call(q + "_square", a, u),
                  n.call(q + "_square", s, h),
                  n.call(q + "_add", h, h, f),
                  n.call(q + "_add", f, h, f),
                  n.call(q + "_mul", n.i32_const(D), f, _),
                  n.call(q + "_add", _, _, p),
                  n.call(q + "_add", _, p, p),
                  n.call(q + "_add", u, p, g),
                  n.call(q + "_mul", g, n.i32_const(Z), g),
                  n.call(q + "_add", u, h, y),
                  n.call(q + "_add", a, s, m),
                  n.call(q + "_square", m, m),
                  n.call(q + "_sub", m, y, m),
                  n.call(q + "_sub", _, u, L),
                  n.call(q + "_square", o, b),
                  n.call(q + "_square", _, F),
                  n.call(q + "_sub", u, p, y),
                  n.call(q + "_mul", d, y, o),
                  n.call(q + "_add", F, F, y),
                  n.call(q + "_add", F, y, y),
                  n.call(q + "_square", g, a),
                  n.call(q + "_sub", a, y, a),
                  n.call(q + "_mul", u, m, s),
                  n.call(q + "_mul", n.i32_const(W), L, r),
                  n.call(q + "_neg", m, l),
                  n.call(q + "_add", b, b, c),
                  n.call(q + "_add", b, c, c)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_prepareG1");
                e.addParam("pP", "i32"), e.addParam("ppreP", "i32");
                const n = e.getCodeBuilder();
                e.addCode(
                  n.call(
                    A + "_normalize",
                    n.getLocal("pP"),
                    n.getLocal("ppreP")
                  )
                );
              })(),
              (function () {
                !(function () {
                  const e = t.addFunction(i + "_mulByQ");
                  e.addParam("p1", "i32"), e.addParam("pr", "i32");
                  const o = e.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(w)),
                    r = o.i32_add(o.getLocal("p1"), o.i32_const(2 * w)),
                    l = o.getLocal("pr"),
                    c = o.i32_add(o.getLocal("pr"), o.i32_const(w)),
                    d = o.i32_add(o.getLocal("pr"), o.i32_const(2 * w)),
                    u = o.i32_const(
                      t.alloc([
                        ...n.bigInt2BytesLE(
                          P(
                            "21575463638280843010398324269430826099269044274347216827212613867836435027261"
                          ),
                          x
                        ),
                        ...n.bigInt2BytesLE(
                          P(
                            "10307601595873709700152284273816112264069230130616436755625194854815875713954"
                          ),
                          x
                        ),
                      ])
                    ),
                    h = o.i32_const(
                      t.alloc([
                        ...n.bigInt2BytesLE(
                          P(
                            "2821565182194536844548159561693502659359617185244120367078079554186484126554"
                          ),
                          x
                        ),
                        ...n.bigInt2BytesLE(
                          P(
                            "3505843767911556378687030309984248845540243509899259641013678093033130930403"
                          ),
                          x
                        ),
                      ])
                    );
                  e.addCode(
                    o.call(q + "_conjugate", a, l),
                    o.call(q + "_mul", u, l, l),
                    o.call(q + "_conjugate", s, c),
                    o.call(q + "_mul", h, c, c),
                    o.call(q + "_conjugate", r, d)
                  );
                })();
                const e = t.addFunction(i + "_prepareG2");
                e.addParam("pQ", "i32"),
                  e.addParam("ppreQ", "i32"),
                  e.addLocal("pCoef", "i32"),
                  e.addLocal("i", "i32");
                const o = e.getCodeBuilder(),
                  a = o.getLocal("pQ"),
                  s = t.alloc(3 * w),
                  r = o.i32_const(s),
                  l = o.i32_const(s),
                  c = o.i32_const(s + w),
                  d = o.i32_const(s + 2 * w),
                  u = o.i32_add(o.getLocal("ppreQ"), o.i32_const(0)),
                  h = o.i32_add(o.getLocal("ppreQ"), o.i32_const(w)),
                  f = t.alloc(3 * w),
                  _ = o.i32_const(f),
                  p = t.alloc(3 * w),
                  g = o.i32_const(p),
                  m = o.i32_const(p + w);
                e.addCode(
                  o.call(I + "_normalize", a, u),
                  o.call(q + "_copy", u, l),
                  o.call(q + "_copy", h, c),
                  o.call(q + "_one", d)
                ),
                  e.addCode(
                    o.setLocal(
                      "pCoef",
                      o.i32_add(o.getLocal("ppreQ"), o.i32_const(3 * w))
                    ),
                    o.setLocal("i", o.i32_const(Q.length - 2)),
                    o.block(
                      o.loop(
                        o.call(i + "_prepDblStep", r, o.getLocal("pCoef")),
                        o.setLocal(
                          "pCoef",
                          o.i32_add(o.getLocal("pCoef"), o.i32_const(K))
                        ),
                        o.if(o.i32_load8_s(o.getLocal("i"), X), [
                          ...o.call(
                            i + "_prepAddStep",
                            u,
                            r,
                            o.getLocal("pCoef")
                          ),
                          ...o.setLocal(
                            "pCoef",
                            o.i32_add(o.getLocal("pCoef"), o.i32_const(K))
                          ),
                        ]),
                        o.br_if(1, o.i32_eqz(o.getLocal("i"))),
                        o.setLocal(
                          "i",
                          o.i32_sub(o.getLocal("i"), o.i32_const(1))
                        ),
                        o.br(0)
                      )
                    )
                  ),
                  e.addCode(
                    o.call(i + "_mulByQ", u, _),
                    o.call(i + "_mulByQ", _, g)
                  ),
                  e.addCode(
                    o.call(q + "_neg", m, m),
                    o.call(i + "_prepAddStep", _, r, o.getLocal("pCoef")),
                    o.setLocal(
                      "pCoef",
                      o.i32_add(o.getLocal("pCoef"), o.i32_const(K))
                    ),
                    o.call(i + "_prepAddStep", g, r, o.getLocal("pCoef")),
                    o.setLocal(
                      "pCoef",
                      o.i32_add(o.getLocal("pCoef"), o.i32_const(K))
                    )
                  );
              })(),
              (function () {
                const e = t.addFunction(i + "__mulBy024");
                e.addParam("pEll0", "i32"),
                  e.addParam("pEllVW", "i32"),
                  e.addParam("pEllVV", "i32"),
                  e.addParam("pR", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("pEll0"),
                  a = n.getLocal("pEllVV"),
                  s = n.getLocal("pEllVW"),
                  r = n.getLocal("pR"),
                  l = n.i32_add(n.getLocal("pR"), n.i32_const(2 * F)),
                  c = n.i32_add(n.getLocal("pR"), n.i32_const(4 * F)),
                  d = n.i32_add(n.getLocal("pR"), n.i32_const(6 * F)),
                  u = n.i32_add(n.getLocal("pR"), n.i32_const(8 * F)),
                  h = n.i32_add(n.getLocal("pR"), n.i32_const(10 * F)),
                  f = n.i32_const(t.alloc(w)),
                  _ = n.i32_const(t.alloc(w)),
                  p = n.i32_const(t.alloc(w)),
                  g = n.i32_const(t.alloc(w)),
                  m = n.i32_const(t.alloc(w)),
                  L = n.i32_const(t.alloc(w)),
                  b = n.i32_const(t.alloc(w)),
                  y = n.i32_const(t.alloc(w)),
                  x = n.i32_const(t.alloc(w)),
                  B = n.i32_const(t.alloc(w)),
                  v = n.i32_const(t.alloc(w));
                e.addCode(
                  n.call(q + "_mul", r, o, b),
                  n.call(q + "_mul", c, a, y),
                  n.call(q + "_mul", u, s, x),
                  n.call(q + "_add", r, u, p),
                  n.call(q + "_add", r, c, _),
                  n.call(q + "_add", l, d, g),
                  n.call(q + "_add", g, h, g),
                  n.call(q + "_mul", l, a, B),
                  n.call(q + "_add", B, x, m),
                  n.call(q + "_mul", n.i32_const($), m, L),
                  n.call(q + "_add", L, b, r),
                  n.call(q + "_mul", h, s, m),
                  n.call(q + "_add", B, m, B),
                  n.call(q + "_add", m, y, m),
                  n.call(q + "_mul", n.i32_const($), m, L),
                  n.call(q + "_mul", l, o, m),
                  n.call(q + "_add", B, m, B),
                  n.call(q + "_add", L, m, l),
                  n.call(q + "_add", o, a, f),
                  n.call(q + "_mul", _, f, m),
                  n.call(q + "_add", b, y, v),
                  n.call(q + "_sub", m, v, m),
                  n.call(q + "_mul", d, s, L),
                  n.call(q + "_add", B, L, B),
                  n.call(q + "_add", c, u, f),
                  n.call(q + "_add", m, L, c),
                  n.call(q + "_add", a, s, _),
                  n.call(q + "_mul", _, f, m),
                  n.call(q + "_add", y, x, v),
                  n.call(q + "_sub", m, v, m),
                  n.call(q + "_mul", n.i32_const($), m, L),
                  n.call(q + "_mul", d, o, m),
                  n.call(q + "_add", B, m, B),
                  n.call(q + "_add", L, m, d),
                  n.call(q + "_mul", h, a, m),
                  n.call(q + "_add", B, m, B),
                  n.call(q + "_mul", n.i32_const($), m, L),
                  n.call(q + "_add", o, s, f),
                  n.call(q + "_mul", p, f, m),
                  n.call(q + "_add", b, x, v),
                  n.call(q + "_sub", m, v, m),
                  n.call(q + "_add", L, m, u),
                  n.call(q + "_add", o, a, f),
                  n.call(q + "_add", f, s, f),
                  n.call(q + "_mul", g, f, m),
                  n.call(q + "_sub", m, B, h)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "__mulBy024Old");
                e.addParam("pEll0", "i32"),
                  e.addParam("pEllVW", "i32"),
                  e.addParam("pEllVV", "i32"),
                  e.addParam("pR", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("pEll0"),
                  a = n.getLocal("pEllVV"),
                  s = n.getLocal("pEllVW"),
                  r = n.getLocal("pR"),
                  l = t.alloc(B),
                  c = n.i32_const(l),
                  d = n.i32_const(l),
                  u = n.i32_const(l + w),
                  h = n.i32_const(l + 2 * w),
                  f = n.i32_const(l + 3 * w),
                  _ = n.i32_const(l + 4 * w),
                  p = n.i32_const(l + 5 * w);
                e.addCode(
                  n.call(q + "_copy", o, d),
                  n.call(q + "_zero", u),
                  n.call(q + "_copy", a, h),
                  n.call(q + "_zero", f),
                  n.call(q + "_copy", s, _),
                  n.call(q + "_zero", p),
                  n.call(V + "_mul", c, r, r)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_millerLoop");
                e.addParam("ppreP", "i32"),
                  e.addParam("ppreQ", "i32"),
                  e.addParam("r", "i32"),
                  e.addLocal("pCoef", "i32"),
                  e.addLocal("i", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("ppreP"),
                  a = n.i32_add(n.getLocal("ppreP"), n.i32_const(x)),
                  s = n.getLocal("pCoef"),
                  r = n.i32_add(n.getLocal("pCoef"), n.i32_const(w)),
                  l = n.i32_add(n.getLocal("pCoef"), n.i32_const(2 * w)),
                  c = t.alloc(w),
                  d = n.i32_const(c),
                  u = t.alloc(w),
                  h = n.i32_const(u),
                  f = n.getLocal("r");
                e.addCode(
                  n.call(V + "_one", f),
                  n.setLocal(
                    "pCoef",
                    n.i32_add(n.getLocal("ppreQ"), n.i32_const(3 * w))
                  ),
                  n.setLocal("i", n.i32_const(Q.length - 2)),
                  n.block(
                    n.loop(
                      n.call(V + "_square", f, f),
                      n.call(q + "_mul1", r, a, d),
                      n.call(q + "_mul1", l, o, h),
                      n.call(i + "__mulBy024", s, d, h, f),
                      n.setLocal(
                        "pCoef",
                        n.i32_add(n.getLocal("pCoef"), n.i32_const(K))
                      ),
                      n.if(n.i32_load8_s(n.getLocal("i"), X), [
                        ...n.call(q + "_mul1", r, a, d),
                        ...n.call(q + "_mul1", l, o, h),
                        ...n.call(i + "__mulBy024", s, d, h, f),
                        ...n.setLocal(
                          "pCoef",
                          n.i32_add(n.getLocal("pCoef"), n.i32_const(K))
                        ),
                      ]),
                      n.br_if(1, n.i32_eqz(n.getLocal("i"))),
                      n.setLocal(
                        "i",
                        n.i32_sub(n.getLocal("i"), n.i32_const(1))
                      ),
                      n.br(0)
                    )
                  )
                ),
                  e.addCode(
                    n.call(q + "_mul1", r, a, d),
                    n.call(q + "_mul1", l, o, h),
                    n.call(i + "__mulBy024", s, d, h, f),
                    n.setLocal(
                      "pCoef",
                      n.i32_add(n.getLocal("pCoef"), n.i32_const(K))
                    ),
                    n.call(q + "_mul1", r, a, d),
                    n.call(q + "_mul1", l, o, h),
                    n.call(i + "__mulBy024", s, d, h, f),
                    n.setLocal(
                      "pCoef",
                      n.i32_add(n.getLocal("pCoef"), n.i32_const(K))
                    )
                  );
              })();
            for (let e = 0; e < 10; e++)
              it(e), t.exportFunction(i + "__frobeniusMap" + e);
            !(function () {
              const e = t.addFunction(i + "_finalExponentiationOld");
              e.addParam("x", "i32"), e.addParam("r", "i32");
              const o = t.alloc(
                  n.bigInt2BytesLE(
                    552484233613224096312617126783173147097382103762957654188882734314196910839907541213974502761540629817009608548654680343627701153829446747810907373256841551006201639677726139946029199968412598804882391702273019083653272047566316584365559776493027495458238373902875937659943504873220554161550525926302303331747463515644711876653177129578303191095900909191624817826566688241804408081892785725967931714097716709526092261278071952560171111444072049229123565057483750161460024353346284167282452756217662335528813519139808291170539072125381230815729071544861602750936964829313608137325426383735122175229541155376346436093930287402089517426973178917569713384748081827255472576937471496195752727188261435633271238710131736096299798168852925540549342330775279877006784354801422249722573783561685179618816480037695005515426162362431072245638324744480n,
                    352
                  )
                ),
                a = e.getCodeBuilder();
              e.addCode(
                a.call(
                  V + "_exp",
                  a.getLocal("x"),
                  a.i32_const(o),
                  a.i32_const(352),
                  a.getLocal("r")
                )
              );
            })(),
              (function () {
                !(function () {
                  const e = t.addFunction(
                    i + "__finalExponentiationFirstChunk"
                  );
                  e.addParam("x", "i32"), e.addParam("r", "i32");
                  const n = e.getCodeBuilder(),
                    o = n.getLocal("x"),
                    a = o,
                    s = n.i32_add(o, n.i32_const(6 * F)),
                    r = n.getLocal("r"),
                    l = t.alloc(B),
                    c = n.i32_const(l),
                    d = c,
                    u = n.i32_const(l + 6 * F),
                    h = n.i32_const(t.alloc(B)),
                    f = n.i32_const(t.alloc(B)),
                    _ = n.i32_const(t.alloc(B));
                  e.addCode(
                    n.call(J + "_copy", a, d),
                    n.call(J + "_neg", s, u),
                    n.call(V + "_inverse", o, h),
                    n.call(V + "_mul", c, h, f),
                    n.call(i + "__frobeniusMap2", f, _),
                    n.call(V + "_mul", f, _, r)
                  );
                })(),
                  nt();
                const e = t.addFunction(i + "_finalExponentiation");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.getLocal("r"),
                  s = n.i32_const(t.alloc(B));
                e.addCode(
                  n.call(i + "__finalExponentiationFirstChunk", o, s),
                  n.call(i + "__finalExponentiationLastChunk", s, a)
                );
              })();
            for (let e = 1; e <= 5; e++)
              st(e), t.exportFunction(i + "_pairingEq" + e);
            !(function () {
              const e = t.addFunction(i + "_pairing");
              e.addParam("p", "i32"),
                e.addParam("q", "i32"),
                e.addParam("r", "i32");
              const n = e.getCodeBuilder(),
                o = n.i32_const(t.alloc(B));
              e.addCode(
                n.call(i + "_prepareG1", n.getLocal("p"), n.i32_const(ot))
              ),
                e.addCode(
                  n.call(i + "_prepareG2", n.getLocal("q"), n.i32_const(at))
                ),
                e.addCode(
                  n.call(i + "_millerLoop", n.i32_const(ot), n.i32_const(at), o)
                ),
                e.addCode(
                  n.call(i + "_finalExponentiation", o, n.getLocal("r"))
                );
            })(),
              t.exportFunction(i + "_pairing"),
              t.exportFunction(i + "_prepareG1"),
              t.exportFunction(i + "_prepareG2"),
              t.exportFunction(i + "_millerLoop"),
              t.exportFunction(i + "_finalExponentiation"),
              t.exportFunction(i + "_finalExponentiationOld"),
              t.exportFunction(i + "__mulBy024"),
              t.exportFunction(i + "__mulBy024Old"),
              t.exportFunction(i + "__cyclotomicSquare"),
              t.exportFunction(i + "__cyclotomicExp_w0");
          };
        },
        320: (t) => {
          t.exports = function (t, e, i, n, o, a, s, r) {
            const l = t.addFunction(e);
            l.addParam("pIn", "i32"),
              l.addParam("n", "i32"),
              l.addParam("pFirst", "i32"),
              l.addParam("pInc", "i32"),
              l.addParam("pOut", "i32"),
              l.addLocal("pOldFree", "i32"),
              l.addLocal("i", "i32"),
              l.addLocal("pFrom", "i32"),
              l.addLocal("pTo", "i32");
            const c = l.getCodeBuilder(),
              d = c.i32_const(t.alloc(s));
            l.addCode(
              c.setLocal("pFrom", c.getLocal("pIn")),
              c.setLocal("pTo", c.getLocal("pOut"))
            ),
              l.addCode(c.call(n + "_copy", c.getLocal("pFirst"), d)),
              l.addCode(
                c.setLocal("i", c.i32_const(0)),
                c.block(
                  c.loop(
                    c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("n"))),
                    c.call(r, c.getLocal("pFrom"), d, c.getLocal("pTo")),
                    c.setLocal(
                      "pFrom",
                      c.i32_add(c.getLocal("pFrom"), c.i32_const(o))
                    ),
                    c.setLocal(
                      "pTo",
                      c.i32_add(c.getLocal("pTo"), c.i32_const(a))
                    ),
                    c.call(n + "_mul", d, c.getLocal("pInc"), d),
                    c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))),
                    c.br(0)
                  )
                )
              ),
              t.exportFunction(e);
          };
        },
        440: (t) => {
          t.exports = function (t, e, i, n, o, a) {
            void 0 === a && (a = n < o);
            const s = t.addFunction(e);
            s.addParam("pIn", "i32"),
              s.addParam("n", "i32"),
              s.addParam("pOut", "i32"),
              s.addLocal("i", "i32"),
              s.addLocal("itIn", "i32"),
              s.addLocal("itOut", "i32");
            const r = s.getCodeBuilder();
            a
              ? s.addCode(
                  r.setLocal(
                    "itIn",
                    r.i32_add(
                      r.getLocal("pIn"),
                      r.i32_mul(
                        r.i32_sub(r.getLocal("n"), r.i32_const(1)),
                        r.i32_const(n)
                      )
                    )
                  ),
                  r.setLocal(
                    "itOut",
                    r.i32_add(
                      r.getLocal("pOut"),
                      r.i32_mul(
                        r.i32_sub(r.getLocal("n"), r.i32_const(1)),
                        r.i32_const(o)
                      )
                    )
                  ),
                  r.setLocal("i", r.i32_const(0)),
                  r.block(
                    r.loop(
                      r.br_if(1, r.i32_eq(r.getLocal("i"), r.getLocal("n"))),
                      r.call(i, r.getLocal("itIn"), r.getLocal("itOut")),
                      r.setLocal(
                        "itIn",
                        r.i32_sub(r.getLocal("itIn"), r.i32_const(n))
                      ),
                      r.setLocal(
                        "itOut",
                        r.i32_sub(r.getLocal("itOut"), r.i32_const(o))
                      ),
                      r.setLocal(
                        "i",
                        r.i32_add(r.getLocal("i"), r.i32_const(1))
                      ),
                      r.br(0)
                    )
                  )
                )
              : s.addCode(
                  r.setLocal("itIn", r.getLocal("pIn")),
                  r.setLocal("itOut", r.getLocal("pOut")),
                  r.setLocal("i", r.i32_const(0)),
                  r.block(
                    r.loop(
                      r.br_if(1, r.i32_eq(r.getLocal("i"), r.getLocal("n"))),
                      r.call(i, r.getLocal("itIn"), r.getLocal("itOut")),
                      r.setLocal(
                        "itIn",
                        r.i32_add(r.getLocal("itIn"), r.i32_const(n))
                      ),
                      r.setLocal(
                        "itOut",
                        r.i32_add(r.getLocal("itOut"), r.i32_const(o))
                      ),
                      r.setLocal(
                        "i",
                        r.i32_add(r.getLocal("i"), r.i32_const(1))
                      ),
                      r.br(0)
                    )
                  )
                );
          };
        },
        163: (t) => {
          t.exports = function (t, e) {
            const i = 8 * t.modules[e].n64,
              n = t.addFunction(e + "_batchInverse");
            n.addParam("pIn", "i32"),
              n.addParam("inStep", "i32"),
              n.addParam("n", "i32"),
              n.addParam("pOut", "i32"),
              n.addParam("outStep", "i32"),
              n.addLocal("itAux", "i32"),
              n.addLocal("itIn", "i32"),
              n.addLocal("itOut", "i32"),
              n.addLocal("i", "i32");
            const o = n.getCodeBuilder(),
              a = o.i32_const(t.alloc(i));
            n.addCode(
              o.setLocal("itAux", o.i32_load(o.i32_const(0))),
              o.i32_store(
                o.i32_const(0),
                o.i32_add(
                  o.getLocal("itAux"),
                  o.i32_mul(
                    o.i32_add(o.getLocal("n"), o.i32_const(1)),
                    o.i32_const(i)
                  )
                )
              )
            ),
              n.addCode(
                o.call(e + "_one", o.getLocal("itAux")),
                o.setLocal("itIn", o.getLocal("pIn")),
                o.setLocal(
                  "itAux",
                  o.i32_add(o.getLocal("itAux"), o.i32_const(i))
                ),
                o.setLocal("i", o.i32_const(0)),
                o.block(
                  o.loop(
                    o.br_if(1, o.i32_eq(o.getLocal("i"), o.getLocal("n"))),
                    o.if(
                      o.call(e + "_isZero", o.getLocal("itIn")),
                      o.call(
                        e + "_copy",
                        o.i32_sub(o.getLocal("itAux"), o.i32_const(i)),
                        o.getLocal("itAux")
                      ),
                      o.call(
                        e + "_mul",
                        o.getLocal("itIn"),
                        o.i32_sub(o.getLocal("itAux"), o.i32_const(i)),
                        o.getLocal("itAux")
                      )
                    ),
                    o.setLocal(
                      "itIn",
                      o.i32_add(o.getLocal("itIn"), o.getLocal("inStep"))
                    ),
                    o.setLocal(
                      "itAux",
                      o.i32_add(o.getLocal("itAux"), o.i32_const(i))
                    ),
                    o.setLocal("i", o.i32_add(o.getLocal("i"), o.i32_const(1))),
                    o.br(0)
                  )
                ),
                o.setLocal(
                  "itIn",
                  o.i32_sub(o.getLocal("itIn"), o.getLocal("inStep"))
                ),
                o.setLocal(
                  "itAux",
                  o.i32_sub(o.getLocal("itAux"), o.i32_const(i))
                ),
                o.setLocal(
                  "itOut",
                  o.i32_add(
                    o.getLocal("pOut"),
                    o.i32_mul(
                      o.i32_sub(o.getLocal("n"), o.i32_const(1)),
                      o.getLocal("outStep")
                    )
                  )
                ),
                o.call(
                  e + "_inverse",
                  o.getLocal("itAux"),
                  o.getLocal("itAux")
                ),
                o.block(
                  o.loop(
                    o.br_if(1, o.i32_eqz(o.getLocal("i"))),
                    o.if(
                      o.call(e + "_isZero", o.getLocal("itIn")),
                      [
                        ...o.call(
                          e + "_copy",
                          o.getLocal("itAux"),
                          o.i32_sub(o.getLocal("itAux"), o.i32_const(i))
                        ),
                        ...o.call(e + "_zero", o.getLocal("itOut")),
                      ],
                      [
                        ...o.call(
                          e + "_copy",
                          o.i32_sub(o.getLocal("itAux"), o.i32_const(i)),
                          a
                        ),
                        ...o.call(
                          e + "_mul",
                          o.getLocal("itAux"),
                          o.getLocal("itIn"),
                          o.i32_sub(o.getLocal("itAux"), o.i32_const(i))
                        ),
                        ...o.call(
                          e + "_mul",
                          o.getLocal("itAux"),
                          a,
                          o.getLocal("itOut")
                        ),
                      ]
                    ),
                    o.setLocal(
                      "itIn",
                      o.i32_sub(o.getLocal("itIn"), o.getLocal("inStep"))
                    ),
                    o.setLocal(
                      "itOut",
                      o.i32_sub(o.getLocal("itOut"), o.getLocal("outStep"))
                    ),
                    o.setLocal(
                      "itAux",
                      o.i32_sub(o.getLocal("itAux"), o.i32_const(i))
                    ),
                    o.setLocal("i", o.i32_sub(o.getLocal("i"), o.i32_const(1))),
                    o.br(0)
                  )
                )
              ),
              n.addCode(o.i32_store(o.i32_const(0), o.getLocal("itAux")));
          };
        },
        948: (t) => {
          t.exports = function (t, e, i, n, o, a) {
            void 0 === a && (a = n < o);
            const s = t.addFunction(e);
            s.addParam("pIn1", "i32"),
              s.addParam("pIn2", "i32"),
              s.addParam("n", "i32"),
              s.addParam("pOut", "i32"),
              s.addLocal("i", "i32"),
              s.addLocal("itIn1", "i32"),
              s.addLocal("itIn2", "i32"),
              s.addLocal("itOut", "i32");
            const r = s.getCodeBuilder();
            a
              ? s.addCode(
                  r.setLocal(
                    "itIn1",
                    r.i32_add(
                      r.getLocal("pIn1"),
                      r.i32_mul(
                        r.i32_sub(r.getLocal("n"), r.i32_const(1)),
                        r.i32_const(n)
                      )
                    )
                  ),
                  r.setLocal(
                    "itIn2",
                    r.i32_add(
                      r.getLocal("pIn2"),
                      r.i32_mul(
                        r.i32_sub(r.getLocal("n"), r.i32_const(1)),
                        r.i32_const(n)
                      )
                    )
                  ),
                  r.setLocal(
                    "itOut",
                    r.i32_add(
                      r.getLocal("pOut"),
                      r.i32_mul(
                        r.i32_sub(r.getLocal("n"), r.i32_const(1)),
                        r.i32_const(o)
                      )
                    )
                  ),
                  r.setLocal("i", r.i32_const(0)),
                  r.block(
                    r.loop(
                      r.br_if(1, r.i32_eq(r.getLocal("i"), r.getLocal("n"))),
                      r.call(
                        i,
                        r.getLocal("itIn1"),
                        r.getLocal("itIn2"),
                        r.getLocal("itOut")
                      ),
                      r.setLocal(
                        "itIn1",
                        r.i32_sub(r.getLocal("itIn1"), r.i32_const(n))
                      ),
                      r.setLocal(
                        "itIn2",
                        r.i32_sub(r.getLocal("itIn2"), r.i32_const(n))
                      ),
                      r.setLocal(
                        "itOut",
                        r.i32_sub(r.getLocal("itOut"), r.i32_const(o))
                      ),
                      r.setLocal(
                        "i",
                        r.i32_add(r.getLocal("i"), r.i32_const(1))
                      ),
                      r.br(0)
                    )
                  )
                )
              : s.addCode(
                  r.setLocal("itIn1", r.getLocal("pIn1")),
                  r.setLocal("itIn2", r.getLocal("pIn2")),
                  r.setLocal("itOut", r.getLocal("pOut")),
                  r.setLocal("i", r.i32_const(0)),
                  r.block(
                    r.loop(
                      r.br_if(1, r.i32_eq(r.getLocal("i"), r.getLocal("n"))),
                      r.call(
                        i,
                        r.getLocal("itIn1"),
                        r.getLocal("itIn2"),
                        r.getLocal("itOut")
                      ),
                      r.setLocal(
                        "itIn1",
                        r.i32_add(r.getLocal("itIn1"), r.i32_const(n))
                      ),
                      r.setLocal(
                        "itIn2",
                        r.i32_add(r.getLocal("itIn2"), r.i32_const(n))
                      ),
                      r.setLocal(
                        "itOut",
                        r.i32_add(r.getLocal("itOut"), r.i32_const(o))
                      ),
                      r.setLocal(
                        "i",
                        r.i32_add(r.getLocal("i"), r.i32_const(1))
                      ),
                      r.br(0)
                    )
                  )
                );
          };
        },
        904: (t, e, i) => {
          const n = i(591),
            o = i(440),
            a = i(911);
          t.exports = function (t, e, i, s) {
            const r = t.modules[i].n64,
              l = 8 * r;
            return (
              t.modules[e] ||
                ((t.modules[e] = { n64: 3 * r }),
                (function () {
                  const n = t.addFunction(e + "_isZeroAffine");
                  n.addParam("p1", "i32"), n.setReturnType("i32");
                  const o = n.getCodeBuilder();
                  n.addCode(
                    o.i32_and(
                      o.call(i + "_isZero", o.getLocal("p1")),
                      o.call(
                        i + "_isZero",
                        o.i32_add(o.getLocal("p1"), o.i32_const(l))
                      )
                    )
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_isZero");
                  n.addParam("p1", "i32"), n.setReturnType("i32");
                  const o = n.getCodeBuilder();
                  n.addCode(
                    o.call(
                      i + "_isZero",
                      o.i32_add(o.getLocal("p1"), o.i32_const(2 * l))
                    )
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_zeroAffine");
                  n.addParam("pr", "i32");
                  const o = n.getCodeBuilder();
                  n.addCode(o.call(i + "_zero", o.getLocal("pr"))),
                    n.addCode(
                      o.call(
                        i + "_zero",
                        o.i32_add(o.getLocal("pr"), o.i32_const(l))
                      )
                    );
                })(),
                (function () {
                  const n = t.addFunction(e + "_zero");
                  n.addParam("pr", "i32");
                  const o = n.getCodeBuilder();
                  n.addCode(o.call(i + "_zero", o.getLocal("pr"))),
                    n.addCode(
                      o.call(
                        i + "_one",
                        o.i32_add(o.getLocal("pr"), o.i32_const(l))
                      )
                    ),
                    n.addCode(
                      o.call(
                        i + "_zero",
                        o.i32_add(o.getLocal("pr"), o.i32_const(2 * l))
                      )
                    );
                })(),
                (function () {
                  const i = t.addFunction(e + "_copyAffine");
                  i.addParam("ps", "i32"), i.addParam("pd", "i32");
                  const n = i.getCodeBuilder();
                  for (let t = 0; t < 2 * r; t++)
                    i.addCode(
                      n.i64_store(
                        n.getLocal("pd"),
                        8 * t,
                        n.i64_load(n.getLocal("ps"), 8 * t)
                      )
                    );
                })(),
                (function () {
                  const i = t.addFunction(e + "_copy");
                  i.addParam("ps", "i32"), i.addParam("pd", "i32");
                  const n = i.getCodeBuilder();
                  for (let t = 0; t < 3 * r; t++)
                    i.addCode(
                      n.i64_store(
                        n.getLocal("pd"),
                        8 * t,
                        n.i64_load(n.getLocal("ps"), 8 * t)
                      )
                    );
                })(),
                (function () {
                  const n = t.addFunction(e + "_toJacobian");
                  n.addParam("p1", "i32"), n.addParam("pr", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(l)),
                    r = o.getLocal("pr"),
                    c = o.i32_add(o.getLocal("pr"), o.i32_const(l)),
                    d = o.i32_add(o.getLocal("pr"), o.i32_const(2 * l));
                  n.addCode(
                    o.if(
                      o.call(e + "_isZeroAffine", o.getLocal("p1")),
                      o.call(e + "_zero", o.getLocal("pr")),
                      [
                        ...o.call(i + "_one", d),
                        ...o.call(i + "_copy", s, c),
                        ...o.call(i + "_copy", a, r),
                      ]
                    )
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_eqAffine");
                  n.addParam("p1", "i32"),
                    n.addParam("p2", "i32"),
                    n.setReturnType("i32"),
                    n.addLocal("z1", "i32");
                  const o = n.getCodeBuilder();
                  n.addCode(
                    o.ret(
                      o.i32_and(
                        o.call(i + "_eq", o.getLocal("p1"), o.getLocal("p2")),
                        o.call(
                          i + "_eq",
                          o.i32_add(o.getLocal("p1"), o.i32_const(l)),
                          o.i32_add(o.getLocal("p2"), o.i32_const(l))
                        )
                      )
                    )
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_eqMixed");
                  n.addParam("p1", "i32"),
                    n.addParam("p2", "i32"),
                    n.setReturnType("i32"),
                    n.addLocal("z1", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(l));
                  n.addCode(
                    o.setLocal(
                      "z1",
                      o.i32_add(o.getLocal("p1"), o.i32_const(2 * l))
                    )
                  );
                  const r = o.getLocal("z1"),
                    c = o.getLocal("p2"),
                    d = o.i32_add(o.getLocal("p2"), o.i32_const(l)),
                    u = o.i32_const(t.alloc(l)),
                    h = o.i32_const(t.alloc(l)),
                    f = o.i32_const(t.alloc(l)),
                    _ = o.i32_const(t.alloc(l));
                  n.addCode(
                    o.if(
                      o.call(e + "_isZero", o.getLocal("p1")),
                      o.ret(o.call(e + "_isZeroAffine", o.getLocal("p2")))
                    ),
                    o.if(
                      o.call(e + "_isZeroAffine", o.getLocal("p2")),
                      o.ret(o.i32_const(0))
                    ),
                    o.if(
                      o.call(i + "_isOne", r),
                      o.ret(
                        o.call(
                          e + "_eqAffine",
                          o.getLocal("p1"),
                          o.getLocal("p2")
                        )
                      )
                    ),
                    o.call(i + "_square", r, u),
                    o.call(i + "_mul", c, u, h),
                    o.call(i + "_mul", r, u, f),
                    o.call(i + "_mul", d, f, _),
                    o.if(
                      o.call(i + "_eq", a, h),
                      o.if(o.call(i + "_eq", s, _), o.ret(o.i32_const(1)))
                    ),
                    o.ret(o.i32_const(0))
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_eq");
                  n.addParam("p1", "i32"),
                    n.addParam("p2", "i32"),
                    n.setReturnType("i32"),
                    n.addLocal("z1", "i32"),
                    n.addLocal("z2", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(l));
                  n.addCode(
                    o.setLocal(
                      "z1",
                      o.i32_add(o.getLocal("p1"), o.i32_const(2 * l))
                    )
                  );
                  const r = o.getLocal("z1"),
                    c = o.getLocal("p2"),
                    d = o.i32_add(o.getLocal("p2"), o.i32_const(l));
                  n.addCode(
                    o.setLocal(
                      "z2",
                      o.i32_add(o.getLocal("p2"), o.i32_const(2 * l))
                    )
                  );
                  const u = o.getLocal("z2"),
                    h = o.i32_const(t.alloc(l)),
                    f = o.i32_const(t.alloc(l)),
                    _ = o.i32_const(t.alloc(l)),
                    p = o.i32_const(t.alloc(l)),
                    g = o.i32_const(t.alloc(l)),
                    m = o.i32_const(t.alloc(l)),
                    L = o.i32_const(t.alloc(l)),
                    b = o.i32_const(t.alloc(l));
                  n.addCode(
                    o.if(
                      o.call(e + "_isZero", o.getLocal("p1")),
                      o.ret(o.call(e + "_isZero", o.getLocal("p2")))
                    ),
                    o.if(
                      o.call(e + "_isZero", o.getLocal("p2")),
                      o.ret(o.i32_const(0))
                    ),
                    o.if(
                      o.call(i + "_isOne", r),
                      o.ret(
                        o.call(
                          e + "_eqMixed",
                          o.getLocal("p2"),
                          o.getLocal("p1")
                        )
                      )
                    ),
                    o.if(
                      o.call(i + "_isOne", u),
                      o.ret(
                        o.call(
                          e + "_eqMixed",
                          o.getLocal("p1"),
                          o.getLocal("p2")
                        )
                      )
                    ),
                    o.call(i + "_square", r, h),
                    o.call(i + "_square", u, f),
                    o.call(i + "_mul", a, f, _),
                    o.call(i + "_mul", c, h, p),
                    o.call(i + "_mul", r, h, g),
                    o.call(i + "_mul", u, f, m),
                    o.call(i + "_mul", s, m, L),
                    o.call(i + "_mul", d, g, b),
                    o.if(
                      o.call(i + "_eq", _, p),
                      o.if(o.call(i + "_eq", L, b), o.ret(o.i32_const(1)))
                    ),
                    o.ret(o.i32_const(0))
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_doubleAffine");
                  n.addParam("p1", "i32"), n.addParam("pr", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(l)),
                    r = o.getLocal("pr"),
                    c = o.i32_add(o.getLocal("pr"), o.i32_const(l)),
                    d = o.i32_add(o.getLocal("pr"), o.i32_const(2 * l)),
                    u = o.i32_const(t.alloc(l)),
                    h = o.i32_const(t.alloc(l)),
                    f = o.i32_const(t.alloc(l)),
                    _ = o.i32_const(t.alloc(l)),
                    p = o.i32_const(t.alloc(l)),
                    g = o.i32_const(t.alloc(l));
                  n.addCode(
                    o.if(o.call(e + "_isZeroAffine", o.getLocal("p1")), [
                      ...o.call(
                        e + "_toJacobian",
                        o.getLocal("p1"),
                        o.getLocal("pr")
                      ),
                      ...o.ret([]),
                    ]),
                    o.call(i + "_square", a, u),
                    o.call(i + "_square", s, h),
                    o.call(i + "_square", h, f),
                    o.call(i + "_add", a, h, _),
                    o.call(i + "_square", _, _),
                    o.call(i + "_sub", _, u, _),
                    o.call(i + "_sub", _, f, _),
                    o.call(i + "_add", _, _, _),
                    o.call(i + "_add", u, u, p),
                    o.call(i + "_add", p, u, p),
                    o.call(i + "_add", s, s, d),
                    o.call(i + "_square", p, r),
                    o.call(i + "_sub", r, _, r),
                    o.call(i + "_sub", r, _, r),
                    o.call(i + "_add", f, f, g),
                    o.call(i + "_add", g, g, g),
                    o.call(i + "_add", g, g, g),
                    o.call(i + "_sub", _, r, c),
                    o.call(i + "_mul", c, p, c),
                    o.call(i + "_sub", c, g, c)
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_double");
                  n.addParam("p1", "i32"), n.addParam("pr", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(l)),
                    r = o.i32_add(o.getLocal("p1"), o.i32_const(2 * l)),
                    c = o.getLocal("pr"),
                    d = o.i32_add(o.getLocal("pr"), o.i32_const(l)),
                    u = o.i32_add(o.getLocal("pr"), o.i32_const(2 * l)),
                    h = o.i32_const(t.alloc(l)),
                    f = o.i32_const(t.alloc(l)),
                    _ = o.i32_const(t.alloc(l)),
                    p = o.i32_const(t.alloc(l)),
                    g = o.i32_const(t.alloc(l)),
                    m = o.i32_const(t.alloc(l)),
                    L = o.i32_const(t.alloc(l)),
                    b = o.i32_const(t.alloc(l));
                  n.addCode(
                    o.if(o.call(e + "_isZero", o.getLocal("p1")), [
                      ...o.call(
                        e + "_copy",
                        o.getLocal("p1"),
                        o.getLocal("pr")
                      ),
                      ...o.ret([]),
                    ]),
                    o.if(o.call(i + "_isOne", r), [
                      ...o.ret(
                        o.call(
                          e + "_doubleAffine",
                          o.getLocal("p1"),
                          o.getLocal("pr")
                        )
                      ),
                      ...o.ret([]),
                    ]),
                    o.call(i + "_square", a, h),
                    o.call(i + "_square", s, f),
                    o.call(i + "_square", f, _),
                    o.call(i + "_add", a, f, p),
                    o.call(i + "_square", p, p),
                    o.call(i + "_sub", p, h, p),
                    o.call(i + "_sub", p, _, p),
                    o.call(i + "_add", p, p, p),
                    o.call(i + "_add", h, h, g),
                    o.call(i + "_add", g, h, g),
                    o.call(i + "_square", g, m),
                    o.call(i + "_mul", s, r, L),
                    o.call(i + "_add", p, p, c),
                    o.call(i + "_sub", m, c, c),
                    o.call(i + "_add", _, _, b),
                    o.call(i + "_add", b, b, b),
                    o.call(i + "_add", b, b, b),
                    o.call(i + "_sub", p, c, d),
                    o.call(i + "_mul", d, g, d),
                    o.call(i + "_sub", d, b, d),
                    o.call(i + "_add", L, L, u)
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_addAffine");
                  n.addParam("p1", "i32"),
                    n.addParam("p2", "i32"),
                    n.addParam("pr", "i32"),
                    n.addLocal("z1", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(l));
                  n.addCode(
                    o.setLocal(
                      "z1",
                      o.i32_add(o.getLocal("p1"), o.i32_const(2 * l))
                    )
                  );
                  const r = o.getLocal("p2"),
                    c = o.i32_add(o.getLocal("p2"), o.i32_const(l)),
                    d = o.getLocal("pr"),
                    u = o.i32_add(o.getLocal("pr"), o.i32_const(l)),
                    h = o.i32_add(o.getLocal("pr"), o.i32_const(2 * l)),
                    f = o.i32_const(t.alloc(l)),
                    _ = o.i32_const(t.alloc(l)),
                    p = o.i32_const(t.alloc(l)),
                    g = o.i32_const(t.alloc(l)),
                    m = o.i32_const(t.alloc(l)),
                    L = o.i32_const(t.alloc(l)),
                    b = o.i32_const(t.alloc(l)),
                    F = o.i32_const(t.alloc(l)),
                    y = o.i32_const(t.alloc(l)),
                    x = o.i32_const(t.alloc(l));
                  n.addCode(
                    o.if(o.call(e + "_isZeroAffine", o.getLocal("p1")), [
                      ...o.call(
                        e + "_copyAffine",
                        o.getLocal("p2"),
                        o.getLocal("pr")
                      ),
                      ...o.call(
                        i + "_one",
                        o.i32_add(o.getLocal("pr"), o.i32_const(2 * l))
                      ),
                      ...o.ret([]),
                    ]),
                    o.if(o.call(e + "_isZeroAffine", o.getLocal("p2")), [
                      ...o.call(
                        e + "_copyAffine",
                        o.getLocal("p1"),
                        o.getLocal("pr")
                      ),
                      ...o.call(
                        i + "_one",
                        o.i32_add(o.getLocal("pr"), o.i32_const(2 * l))
                      ),
                      ...o.ret([]),
                    ]),
                    o.if(
                      o.call(i + "_eq", a, r),
                      o.if(o.call(i + "_eq", s, c), [
                        ...o.call(
                          e + "_doubleAffine",
                          o.getLocal("p2"),
                          o.getLocal("pr")
                        ),
                        ...o.ret([]),
                      ])
                    ),
                    o.call(i + "_sub", r, a, f),
                    o.call(i + "_sub", c, s, p),
                    o.call(i + "_square", f, _),
                    o.call(i + "_add", _, _, g),
                    o.call(i + "_add", g, g, g),
                    o.call(i + "_mul", f, g, m),
                    o.call(i + "_add", p, p, L),
                    o.call(i + "_mul", a, g, F),
                    o.call(i + "_square", L, b),
                    o.call(i + "_add", F, F, y),
                    o.call(i + "_sub", b, m, d),
                    o.call(i + "_sub", d, y, d),
                    o.call(i + "_mul", s, m, x),
                    o.call(i + "_add", x, x, x),
                    o.call(i + "_sub", F, d, u),
                    o.call(i + "_mul", u, L, u),
                    o.call(i + "_sub", u, x, u),
                    o.call(i + "_add", f, f, h)
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_addMixed");
                  n.addParam("p1", "i32"),
                    n.addParam("p2", "i32"),
                    n.addParam("pr", "i32"),
                    n.addLocal("z1", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(l));
                  n.addCode(
                    o.setLocal(
                      "z1",
                      o.i32_add(o.getLocal("p1"), o.i32_const(2 * l))
                    )
                  );
                  const r = o.getLocal("z1"),
                    c = o.getLocal("p2"),
                    d = o.i32_add(o.getLocal("p2"), o.i32_const(l)),
                    u = o.getLocal("pr"),
                    h = o.i32_add(o.getLocal("pr"), o.i32_const(l)),
                    f = o.i32_add(o.getLocal("pr"), o.i32_const(2 * l)),
                    _ = o.i32_const(t.alloc(l)),
                    p = o.i32_const(t.alloc(l)),
                    g = o.i32_const(t.alloc(l)),
                    m = o.i32_const(t.alloc(l)),
                    L = o.i32_const(t.alloc(l)),
                    b = o.i32_const(t.alloc(l)),
                    F = o.i32_const(t.alloc(l)),
                    y = o.i32_const(t.alloc(l)),
                    x = o.i32_const(t.alloc(l)),
                    w = o.i32_const(t.alloc(l)),
                    B = o.i32_const(t.alloc(l)),
                    v = o.i32_const(t.alloc(l)),
                    E = o.i32_const(t.alloc(l)),
                    C = o.i32_const(t.alloc(l));
                  n.addCode(
                    o.if(o.call(e + "_isZero", o.getLocal("p1")), [
                      ...o.call(
                        e + "_copyAffine",
                        o.getLocal("p2"),
                        o.getLocal("pr")
                      ),
                      ...o.call(
                        i + "_one",
                        o.i32_add(o.getLocal("pr"), o.i32_const(2 * l))
                      ),
                      ...o.ret([]),
                    ]),
                    o.if(o.call(e + "_isZeroAffine", o.getLocal("p2")), [
                      ...o.call(
                        e + "_copy",
                        o.getLocal("p1"),
                        o.getLocal("pr")
                      ),
                      ...o.ret([]),
                    ]),
                    o.if(o.call(i + "_isOne", r), [
                      ...o.call(e + "_addAffine", a, c, u),
                      ...o.ret([]),
                    ]),
                    o.call(i + "_square", r, _),
                    o.call(i + "_mul", c, _, p),
                    o.call(i + "_mul", r, _, g),
                    o.call(i + "_mul", d, g, m),
                    o.if(
                      o.call(i + "_eq", a, p),
                      o.if(o.call(i + "_eq", s, m), [
                        ...o.call(
                          e + "_doubleAffine",
                          o.getLocal("p2"),
                          o.getLocal("pr")
                        ),
                        ...o.ret([]),
                      ])
                    ),
                    o.call(i + "_sub", p, a, L),
                    o.call(i + "_sub", m, s, F),
                    o.call(i + "_square", L, b),
                    o.call(i + "_add", b, b, y),
                    o.call(i + "_add", y, y, y),
                    o.call(i + "_mul", L, y, x),
                    o.call(i + "_add", F, F, w),
                    o.call(i + "_mul", a, y, v),
                    o.call(i + "_square", w, B),
                    o.call(i + "_add", v, v, E),
                    o.call(i + "_sub", B, x, u),
                    o.call(i + "_sub", u, E, u),
                    o.call(i + "_mul", s, x, C),
                    o.call(i + "_add", C, C, C),
                    o.call(i + "_sub", v, u, h),
                    o.call(i + "_mul", h, w, h),
                    o.call(i + "_sub", h, C, h),
                    o.call(i + "_add", r, L, f),
                    o.call(i + "_square", f, f),
                    o.call(i + "_sub", f, _, f),
                    o.call(i + "_sub", f, b, f)
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_add");
                  n.addParam("p1", "i32"),
                    n.addParam("p2", "i32"),
                    n.addParam("pr", "i32"),
                    n.addLocal("z1", "i32"),
                    n.addLocal("z2", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(l));
                  n.addCode(
                    o.setLocal(
                      "z1",
                      o.i32_add(o.getLocal("p1"), o.i32_const(2 * l))
                    )
                  );
                  const r = o.getLocal("z1"),
                    c = o.getLocal("p2"),
                    d = o.i32_add(o.getLocal("p2"), o.i32_const(l));
                  n.addCode(
                    o.setLocal(
                      "z2",
                      o.i32_add(o.getLocal("p2"), o.i32_const(2 * l))
                    )
                  );
                  const u = o.getLocal("z2"),
                    h = o.getLocal("pr"),
                    f = o.i32_add(o.getLocal("pr"), o.i32_const(l)),
                    _ = o.i32_add(o.getLocal("pr"), o.i32_const(2 * l)),
                    p = o.i32_const(t.alloc(l)),
                    g = o.i32_const(t.alloc(l)),
                    m = o.i32_const(t.alloc(l)),
                    L = o.i32_const(t.alloc(l)),
                    b = o.i32_const(t.alloc(l)),
                    F = o.i32_const(t.alloc(l)),
                    y = o.i32_const(t.alloc(l)),
                    x = o.i32_const(t.alloc(l)),
                    w = o.i32_const(t.alloc(l)),
                    B = o.i32_const(t.alloc(l)),
                    v = o.i32_const(t.alloc(l)),
                    E = o.i32_const(t.alloc(l)),
                    C = o.i32_const(t.alloc(l)),
                    A = o.i32_const(t.alloc(l)),
                    q = o.i32_const(t.alloc(l)),
                    O = o.i32_const(t.alloc(l)),
                    I = o.i32_const(t.alloc(l));
                  n.addCode(
                    o.if(o.call(e + "_isZero", o.getLocal("p1")), [
                      ...o.call(
                        e + "_copy",
                        o.getLocal("p2"),
                        o.getLocal("pr")
                      ),
                      ...o.ret([]),
                    ]),
                    o.if(o.call(e + "_isZero", o.getLocal("p2")), [
                      ...o.call(
                        e + "_copy",
                        o.getLocal("p1"),
                        o.getLocal("pr")
                      ),
                      ...o.ret([]),
                    ]),
                    o.if(o.call(i + "_isOne", r), [
                      ...o.call(e + "_addMixed", c, a, h),
                      ...o.ret([]),
                    ]),
                    o.if(o.call(i + "_isOne", u), [
                      ...o.call(e + "_addMixed", a, c, h),
                      ...o.ret([]),
                    ]),
                    o.call(i + "_square", r, p),
                    o.call(i + "_square", u, g),
                    o.call(i + "_mul", a, g, m),
                    o.call(i + "_mul", c, p, L),
                    o.call(i + "_mul", r, p, b),
                    o.call(i + "_mul", u, g, F),
                    o.call(i + "_mul", s, F, y),
                    o.call(i + "_mul", d, b, x),
                    o.if(
                      o.call(i + "_eq", m, L),
                      o.if(o.call(i + "_eq", y, x), [
                        ...o.call(
                          e + "_double",
                          o.getLocal("p1"),
                          o.getLocal("pr")
                        ),
                        ...o.ret([]),
                      ])
                    ),
                    o.call(i + "_sub", L, m, w),
                    o.call(i + "_sub", x, y, B),
                    o.call(i + "_add", w, w, v),
                    o.call(i + "_square", v, v),
                    o.call(i + "_mul", w, v, E),
                    o.call(i + "_add", B, B, C),
                    o.call(i + "_mul", m, v, q),
                    o.call(i + "_square", C, A),
                    o.call(i + "_add", q, q, O),
                    o.call(i + "_sub", A, E, h),
                    o.call(i + "_sub", h, O, h),
                    o.call(i + "_mul", y, E, I),
                    o.call(i + "_add", I, I, I),
                    o.call(i + "_sub", q, h, f),
                    o.call(i + "_mul", f, C, f),
                    o.call(i + "_sub", f, I, f),
                    o.call(i + "_add", r, u, _),
                    o.call(i + "_square", _, _),
                    o.call(i + "_sub", _, p, _),
                    o.call(i + "_sub", _, g, _),
                    o.call(i + "_mul", _, w, _)
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_negAffine");
                  n.addParam("p1", "i32"), n.addParam("pr", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(l)),
                    r = o.getLocal("pr"),
                    c = o.i32_add(o.getLocal("pr"), o.i32_const(l));
                  n.addCode(
                    o.call(i + "_copy", a, r),
                    o.call(i + "_neg", s, c)
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_neg");
                  n.addParam("p1", "i32"), n.addParam("pr", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(l)),
                    r = o.i32_add(o.getLocal("p1"), o.i32_const(2 * l)),
                    c = o.getLocal("pr"),
                    d = o.i32_add(o.getLocal("pr"), o.i32_const(l)),
                    u = o.i32_add(o.getLocal("pr"), o.i32_const(2 * l));
                  n.addCode(
                    o.call(i + "_copy", a, c),
                    o.call(i + "_neg", s, d),
                    o.call(i + "_copy", r, u)
                  );
                })(),
                (function () {
                  const i = t.addFunction(e + "_subAffine");
                  i.addParam("p1", "i32"),
                    i.addParam("p2", "i32"),
                    i.addParam("pr", "i32");
                  const n = i.getCodeBuilder(),
                    o = n.i32_const(t.alloc(3 * l));
                  i.addCode(
                    n.call(e + "_negAffine", n.getLocal("p2"), o),
                    n.call(
                      e + "_addAffine",
                      n.getLocal("p1"),
                      o,
                      n.getLocal("pr")
                    )
                  );
                })(),
                (function () {
                  const i = t.addFunction(e + "_subMixed");
                  i.addParam("p1", "i32"),
                    i.addParam("p2", "i32"),
                    i.addParam("pr", "i32");
                  const n = i.getCodeBuilder(),
                    o = n.i32_const(t.alloc(3 * l));
                  i.addCode(
                    n.call(e + "_negAffine", n.getLocal("p2"), o),
                    n.call(
                      e + "_addMixed",
                      n.getLocal("p1"),
                      o,
                      n.getLocal("pr")
                    )
                  );
                })(),
                (function () {
                  const i = t.addFunction(e + "_sub");
                  i.addParam("p1", "i32"),
                    i.addParam("p2", "i32"),
                    i.addParam("pr", "i32");
                  const n = i.getCodeBuilder(),
                    o = n.i32_const(t.alloc(3 * l));
                  i.addCode(
                    n.call(e + "_neg", n.getLocal("p2"), o),
                    n.call(e + "_add", n.getLocal("p1"), o, n.getLocal("pr"))
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_fromMontgomeryAffine");
                  n.addParam("p1", "i32"), n.addParam("pr", "i32");
                  const o = n.getCodeBuilder();
                  n.addCode(
                    o.call(
                      i + "_fromMontgomery",
                      o.getLocal("p1"),
                      o.getLocal("pr")
                    )
                  );
                  for (let t = 1; t < 2; t++)
                    n.addCode(
                      o.call(
                        i + "_fromMontgomery",
                        o.i32_add(o.getLocal("p1"), o.i32_const(t * l)),
                        o.i32_add(o.getLocal("pr"), o.i32_const(t * l))
                      )
                    );
                })(),
                (function () {
                  const n = t.addFunction(e + "_fromMontgomery");
                  n.addParam("p1", "i32"), n.addParam("pr", "i32");
                  const o = n.getCodeBuilder();
                  n.addCode(
                    o.call(
                      i + "_fromMontgomery",
                      o.getLocal("p1"),
                      o.getLocal("pr")
                    )
                  );
                  for (let t = 1; t < 3; t++)
                    n.addCode(
                      o.call(
                        i + "_fromMontgomery",
                        o.i32_add(o.getLocal("p1"), o.i32_const(t * l)),
                        o.i32_add(o.getLocal("pr"), o.i32_const(t * l))
                      )
                    );
                })(),
                (function () {
                  const n = t.addFunction(e + "_toMontgomeryAffine");
                  n.addParam("p1", "i32"), n.addParam("pr", "i32");
                  const o = n.getCodeBuilder();
                  n.addCode(
                    o.call(
                      i + "_toMontgomery",
                      o.getLocal("p1"),
                      o.getLocal("pr")
                    )
                  );
                  for (let t = 1; t < 2; t++)
                    n.addCode(
                      o.call(
                        i + "_toMontgomery",
                        o.i32_add(o.getLocal("p1"), o.i32_const(t * l)),
                        o.i32_add(o.getLocal("pr"), o.i32_const(t * l))
                      )
                    );
                })(),
                (function () {
                  const n = t.addFunction(e + "_toMontgomery");
                  n.addParam("p1", "i32"), n.addParam("pr", "i32");
                  const o = n.getCodeBuilder();
                  n.addCode(
                    o.call(
                      i + "_toMontgomery",
                      o.getLocal("p1"),
                      o.getLocal("pr")
                    )
                  );
                  for (let t = 1; t < 3; t++)
                    n.addCode(
                      o.call(
                        i + "_toMontgomery",
                        o.i32_add(o.getLocal("p1"), o.i32_const(t * l)),
                        o.i32_add(o.getLocal("pr"), o.i32_const(t * l))
                      )
                    );
                })(),
                (function () {
                  const n = t.addFunction(e + "_toAffine");
                  n.addParam("p1", "i32"), n.addParam("pr", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(l)),
                    r = o.i32_add(o.getLocal("p1"), o.i32_const(2 * l)),
                    c = o.getLocal("pr"),
                    d = o.i32_add(o.getLocal("pr"), o.i32_const(l)),
                    u = o.i32_const(t.alloc(l)),
                    h = o.i32_const(t.alloc(l)),
                    f = o.i32_const(t.alloc(l));
                  n.addCode(
                    o.if(
                      o.call(e + "_isZero", o.getLocal("p1")),
                      [...o.call(i + "_zero", c), ...o.call(i + "_zero", d)],
                      [
                        ...o.call(i + "_inverse", r, u),
                        ...o.call(i + "_square", u, h),
                        ...o.call(i + "_mul", u, h, f),
                        ...o.call(i + "_mul", a, h, c),
                        ...o.call(i + "_mul", s, f, d),
                      ]
                    )
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_inCurveAffine");
                  n.addParam("pIn", "i32"), n.setReturnType("i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("pIn"),
                    r = o.i32_add(o.getLocal("pIn"), o.i32_const(l)),
                    c = o.i32_const(t.alloc(l)),
                    d = o.i32_const(t.alloc(l));
                  n.addCode(
                    o.call(i + "_square", r, c),
                    o.call(i + "_square", a, d),
                    o.call(i + "_mul", a, d, d),
                    o.call(i + "_add", d, o.i32_const(s), d),
                    o.ret(o.call(i + "_eq", c, d))
                  );
                })(),
                (function () {
                  const i = t.addFunction(e + "_inCurve");
                  i.addParam("pIn", "i32"), i.setReturnType("i32");
                  const n = i.getCodeBuilder(),
                    o = n.i32_const(t.alloc(2 * l));
                  i.addCode(
                    n.call(e + "_toAffine", n.getLocal("pIn"), o),
                    n.ret(n.call(e + "_inCurveAffine", o))
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_batchToAffine");
                  n.addParam("pIn", "i32"),
                    n.addParam("n", "i32"),
                    n.addParam("pOut", "i32"),
                    n.addLocal("pAux", "i32"),
                    n.addLocal("itIn", "i32"),
                    n.addLocal("itAux", "i32"),
                    n.addLocal("itOut", "i32"),
                    n.addLocal("i", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.i32_const(t.alloc(l));
                  n.addCode(
                    o.setLocal("pAux", o.i32_load(o.i32_const(0))),
                    o.i32_store(
                      o.i32_const(0),
                      o.i32_add(
                        o.getLocal("pAux"),
                        o.i32_mul(o.getLocal("n"), o.i32_const(l))
                      )
                    ),
                    o.call(
                      i + "_batchInverse",
                      o.i32_add(o.getLocal("pIn"), o.i32_const(2 * l)),
                      o.i32_const(3 * l),
                      o.getLocal("n"),
                      o.getLocal("pAux"),
                      o.i32_const(l)
                    ),
                    o.setLocal("itIn", o.getLocal("pIn")),
                    o.setLocal("itAux", o.getLocal("pAux")),
                    o.setLocal("itOut", o.getLocal("pOut")),
                    o.setLocal("i", o.i32_const(0)),
                    o.block(
                      o.loop(
                        o.br_if(1, o.i32_eq(o.getLocal("i"), o.getLocal("n"))),
                        o.if(
                          o.call(i + "_isZero", o.getLocal("itAux")),
                          [
                            ...o.call(i + "_zero", o.getLocal("itOut")),
                            ...o.call(
                              i + "_zero",
                              o.i32_add(o.getLocal("itOut"), o.i32_const(l))
                            ),
                          ],
                          [
                            ...o.call(
                              i + "_mul",
                              o.getLocal("itAux"),
                              o.i32_add(o.getLocal("itIn"), o.i32_const(l)),
                              a
                            ),
                            ...o.call(
                              i + "_square",
                              o.getLocal("itAux"),
                              o.getLocal("itAux")
                            ),
                            ...o.call(
                              i + "_mul",
                              o.getLocal("itAux"),
                              o.getLocal("itIn"),
                              o.getLocal("itOut")
                            ),
                            ...o.call(
                              i + "_mul",
                              o.getLocal("itAux"),
                              a,
                              o.i32_add(o.getLocal("itOut"), o.i32_const(l))
                            ),
                          ]
                        ),
                        o.setLocal(
                          "itIn",
                          o.i32_add(o.getLocal("itIn"), o.i32_const(3 * l))
                        ),
                        o.setLocal(
                          "itOut",
                          o.i32_add(o.getLocal("itOut"), o.i32_const(2 * l))
                        ),
                        o.setLocal(
                          "itAux",
                          o.i32_add(o.getLocal("itAux"), o.i32_const(l))
                        ),
                        o.setLocal(
                          "i",
                          o.i32_add(o.getLocal("i"), o.i32_const(1))
                        ),
                        o.br(0)
                      )
                    ),
                    o.i32_store(o.i32_const(0), o.getLocal("pAux"))
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_normalize");
                  n.addParam("p1", "i32"), n.addParam("pr", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.getLocal("p1"),
                    s = o.i32_add(o.getLocal("p1"), o.i32_const(l)),
                    r = o.i32_add(o.getLocal("p1"), o.i32_const(2 * l)),
                    c = o.getLocal("pr"),
                    d = o.i32_add(o.getLocal("pr"), o.i32_const(l)),
                    u = o.i32_add(o.getLocal("pr"), o.i32_const(2 * l)),
                    h = o.i32_const(t.alloc(l)),
                    f = o.i32_const(t.alloc(l)),
                    _ = o.i32_const(t.alloc(l));
                  n.addCode(
                    o.if(
                      o.call(e + "_isZero", o.getLocal("p1")),
                      o.call(e + "_zero", o.getLocal("pr")),
                      [
                        ...o.call(i + "_inverse", r, h),
                        ...o.call(i + "_square", h, f),
                        ...o.call(i + "_mul", h, f, _),
                        ...o.call(i + "_mul", a, f, c),
                        ...o.call(i + "_mul", s, _, d),
                        ...o.call(i + "_one", u),
                      ]
                    )
                  );
                })(),
                (function () {
                  const i = t.addFunction(e + "__reverseBytes");
                  i.addParam("pIn", "i32"),
                    i.addParam("n", "i32"),
                    i.addParam("pOut", "i32"),
                    i.addLocal("itOut", "i32"),
                    i.addLocal("itIn", "i32");
                  const n = i.getCodeBuilder();
                  i.addCode(
                    n.setLocal(
                      "itOut",
                      n.i32_sub(
                        n.i32_add(n.getLocal("pOut"), n.getLocal("n")),
                        n.i32_const(1)
                      )
                    ),
                    n.setLocal("itIn", n.getLocal("pIn")),
                    n.block(
                      n.loop(
                        n.br_if(
                          1,
                          n.i32_lt_s(n.getLocal("itOut"), n.getLocal("pOut"))
                        ),
                        n.i32_store8(
                          n.getLocal("itOut"),
                          n.i32_load8_u(n.getLocal("itIn"))
                        ),
                        n.setLocal(
                          "itOut",
                          n.i32_sub(n.getLocal("itOut"), n.i32_const(1))
                        ),
                        n.setLocal(
                          "itIn",
                          n.i32_add(n.getLocal("itIn"), n.i32_const(1))
                        ),
                        n.br(0)
                      )
                    )
                  );
                })(),
                (function () {
                  const i = t.addFunction(e + "_LEMtoU");
                  i.addParam("pIn", "i32"), i.addParam("pOut", "i32");
                  const n = i.getCodeBuilder(),
                    o = t.alloc(2 * l),
                    a = n.i32_const(o),
                    s = n.i32_const(o),
                    r = n.i32_const(o + l);
                  i.addCode(
                    n.if(n.call(e + "_isZeroAffine", n.getLocal("pIn")), [
                      ...n.call(e + "_zeroAffine", n.getLocal("pOut")),
                      ...n.ret([]),
                    ]),
                    n.call(e + "_fromMontgomeryAffine", n.getLocal("pIn"), a),
                    n.call(
                      e + "__reverseBytes",
                      s,
                      n.i32_const(l),
                      n.getLocal("pOut")
                    ),
                    n.call(
                      e + "__reverseBytes",
                      r,
                      n.i32_const(l),
                      n.i32_add(n.getLocal("pOut"), n.i32_const(l))
                    )
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_LEMtoC");
                  n.addParam("pIn", "i32"), n.addParam("pOut", "i32");
                  const o = n.getCodeBuilder(),
                    a = o.i32_const(t.alloc(l));
                  n.addCode(
                    o.if(o.call(e + "_isZeroAffine", o.getLocal("pIn")), [
                      ...o.call(i + "_zero", o.getLocal("pOut")),
                      ...o.i32_store8(o.getLocal("pOut"), o.i32_const(64)),
                      ...o.ret([]),
                    ]),
                    o.call(i + "_fromMontgomery", o.getLocal("pIn"), a),
                    o.call(
                      e + "__reverseBytes",
                      a,
                      o.i32_const(l),
                      o.getLocal("pOut")
                    ),
                    o.if(
                      o.i32_eq(
                        o.call(
                          i + "_sign",
                          o.i32_add(o.getLocal("pIn"), o.i32_const(l))
                        ),
                        o.i32_const(-1)
                      ),
                      o.i32_store8(
                        o.getLocal("pOut"),
                        o.i32_or(
                          o.i32_load8_u(o.getLocal("pOut")),
                          o.i32_const(128)
                        )
                      )
                    )
                  );
                })(),
                (function () {
                  const i = t.addFunction(e + "_UtoLEM");
                  i.addParam("pIn", "i32"), i.addParam("pOut", "i32");
                  const n = i.getCodeBuilder(),
                    o = t.alloc(2 * l),
                    a = n.i32_const(o),
                    s = n.i32_const(o),
                    r = n.i32_const(o + l);
                  i.addCode(
                    n.if(
                      n.i32_and(
                        n.i32_load8_u(n.getLocal("pIn")),
                        n.i32_const(64)
                      ),
                      [
                        ...n.call(e + "_zeroAffine", n.getLocal("pOut")),
                        ...n.ret([]),
                      ]
                    ),
                    n.call(
                      e + "__reverseBytes",
                      n.getLocal("pIn"),
                      n.i32_const(l),
                      s
                    ),
                    n.call(
                      e + "__reverseBytes",
                      n.i32_add(n.getLocal("pIn"), n.i32_const(l)),
                      n.i32_const(l),
                      r
                    ),
                    n.call(e + "_toMontgomeryAffine", a, n.getLocal("pOut"))
                  );
                })(),
                (function () {
                  const n = t.addFunction(e + "_CtoLEM");
                  n.addParam("pIn", "i32"),
                    n.addParam("pOut", "i32"),
                    n.addLocal("firstByte", "i32"),
                    n.addLocal("greatest", "i32");
                  const o = n.getCodeBuilder(),
                    a = t.alloc(2 * l),
                    r = o.i32_const(a),
                    c = o.i32_const(a + l);
                  n.addCode(
                    o.setLocal("firstByte", o.i32_load8_u(o.getLocal("pIn"))),
                    o.if(o.i32_and(o.getLocal("firstByte"), o.i32_const(64)), [
                      ...o.call(e + "_zeroAffine", o.getLocal("pOut")),
                      ...o.ret([]),
                    ]),
                    o.setLocal(
                      "greatest",
                      o.i32_and(o.getLocal("firstByte"), o.i32_const(128))
                    ),
                    o.call(i + "_copy", o.getLocal("pIn"), c),
                    o.i32_store8(
                      c,
                      o.i32_and(o.getLocal("firstByte"), o.i32_const(63))
                    ),
                    o.call(e + "__reverseBytes", c, o.i32_const(l), r),
                    o.call(i + "_toMontgomery", r, o.getLocal("pOut")),
                    o.call(i + "_square", o.getLocal("pOut"), c),
                    o.call(i + "_mul", o.getLocal("pOut"), c, c),
                    o.call(i + "_add", c, o.i32_const(s), c),
                    o.call(i + "_sqrt", c, c),
                    o.call(i + "_neg", c, r),
                    o.if(
                      o.i32_eq(o.call(i + "_sign", c), o.i32_const(-1)),
                      o.if(
                        o.getLocal("greatest"),
                        o.call(
                          i + "_copy",
                          c,
                          o.i32_add(o.getLocal("pOut"), o.i32_const(l))
                        ),
                        o.call(
                          i + "_neg",
                          c,
                          o.i32_add(o.getLocal("pOut"), o.i32_const(l))
                        )
                      ),
                      o.if(
                        o.getLocal("greatest"),
                        o.call(
                          i + "_neg",
                          c,
                          o.i32_add(o.getLocal("pOut"), o.i32_const(l))
                        ),
                        o.call(
                          i + "_copy",
                          c,
                          o.i32_add(o.getLocal("pOut"), o.i32_const(l))
                        )
                      )
                    )
                  );
                })(),
                o(t, e + "_batchLEMtoU", e + "_LEMtoU", 2 * l, 2 * l),
                o(t, e + "_batchLEMtoC", e + "_LEMtoC", 2 * l, l),
                o(t, e + "_batchUtoLEM", e + "_UtoLEM", 2 * l, 2 * l),
                o(t, e + "_batchCtoLEM", e + "_CtoLEM", l, 2 * l, !0),
                o(
                  t,
                  e + "_batchToJacobian",
                  e + "_toJacobian",
                  2 * l,
                  3 * l,
                  !0
                ),
                a(t, e, e + "_multiexp", e + "_add", 3 * l),
                a(t, e, e + "_multiexpAffine", e + "_addMixed", 2 * l),
                n(
                  t,
                  e + "_timesScalar",
                  3 * l,
                  e + "_add",
                  e + "_double",
                  e + "_sub",
                  e + "_copy",
                  e + "_zero"
                ),
                n(
                  t,
                  e + "_timesScalarAffine",
                  2 * l,
                  e + "_addMixed",
                  e + "_double",
                  e + "_subMixed",
                  e + "_copyAffine",
                  e + "_zero"
                ),
                t.exportFunction(e + "_isZero"),
                t.exportFunction(e + "_isZeroAffine"),
                t.exportFunction(e + "_eq"),
                t.exportFunction(e + "_eqMixed"),
                t.exportFunction(e + "_eqAffine"),
                t.exportFunction(e + "_copy"),
                t.exportFunction(e + "_copyAffine"),
                t.exportFunction(e + "_zero"),
                t.exportFunction(e + "_zeroAffine"),
                t.exportFunction(e + "_double"),
                t.exportFunction(e + "_doubleAffine"),
                t.exportFunction(e + "_add"),
                t.exportFunction(e + "_addMixed"),
                t.exportFunction(e + "_addAffine"),
                t.exportFunction(e + "_neg"),
                t.exportFunction(e + "_negAffine"),
                t.exportFunction(e + "_sub"),
                t.exportFunction(e + "_subMixed"),
                t.exportFunction(e + "_subAffine"),
                t.exportFunction(e + "_fromMontgomery"),
                t.exportFunction(e + "_fromMontgomeryAffine"),
                t.exportFunction(e + "_toMontgomery"),
                t.exportFunction(e + "_toMontgomeryAffine"),
                t.exportFunction(e + "_timesScalar"),
                t.exportFunction(e + "_timesScalarAffine"),
                t.exportFunction(e + "_normalize"),
                t.exportFunction(e + "_LEMtoU"),
                t.exportFunction(e + "_LEMtoC"),
                t.exportFunction(e + "_UtoLEM"),
                t.exportFunction(e + "_CtoLEM"),
                t.exportFunction(e + "_batchLEMtoU"),
                t.exportFunction(e + "_batchLEMtoC"),
                t.exportFunction(e + "_batchUtoLEM"),
                t.exportFunction(e + "_batchCtoLEM"),
                t.exportFunction(e + "_toAffine"),
                t.exportFunction(e + "_toJacobian"),
                t.exportFunction(e + "_batchToAffine"),
                t.exportFunction(e + "_batchToJacobian"),
                t.exportFunction(e + "_inCurve"),
                t.exportFunction(e + "_inCurveAffine")),
              e
            );
          };
        },
        138: (t, e, i) => {
          const n = i(75),
            { bitLength: o } = i(409);
          t.exports = function (t, e, i, a, s) {
            const r = BigInt(e),
              l = Math.floor((o(r - 1n) - 1) / 64) + 1,
              c = 8 * l,
              d = i || "f1";
            if (t.modules[d]) return d;
            t.modules[d] = { n64: l };
            const u = s || "int",
              h = n(t, r, a, u),
              f = t.modules[h].pR2,
              _ = t.modules[h].pq,
              p = t.modules[h].pePlusOne;
            return (
              (function () {
                const e = t.alloc(c),
                  i = t.addFunction(d + "_mul");
                i.addParam("x", "i32"),
                  i.addParam("y", "i32"),
                  i.addParam("r", "i32");
                const n = i.getCodeBuilder();
                i.addCode(
                  n.call(
                    h + "_mul",
                    n.getLocal("x"),
                    n.getLocal("y"),
                    n.i32_const(e)
                  )
                ),
                  i.addCode(
                    n.call(
                      h + "_mul",
                      n.i32_const(e),
                      n.i32_const(f),
                      n.getLocal("r")
                    )
                  );
              })(),
              (function () {
                const e = t.addFunction(d + "_square");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.call(
                    d + "_mul",
                    i.getLocal("x"),
                    i.getLocal("x"),
                    i.getLocal("r")
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(d + "_inverse");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.call(
                    u + "_inverseMod",
                    i.getLocal("x"),
                    i.i32_const(_),
                    i.getLocal("r")
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(d + "_isNegative");
                e.addParam("x", "i32"), e.setReturnType("i32");
                const i = e.getCodeBuilder();
                e.addCode(i.call(u + "_gte", i.getLocal("x"), i.i32_const(p)));
              })(),
              t.exportFunction(h + "_add", d + "_add"),
              t.exportFunction(h + "_sub", d + "_sub"),
              t.exportFunction(h + "_neg", d + "_neg"),
              t.exportFunction(d + "_mul"),
              t.exportFunction(d + "_square"),
              t.exportFunction(d + "_inverse"),
              t.exportFunction(d + "_isNegative"),
              t.exportFunction(h + "_copy", d + "_copy"),
              t.exportFunction(h + "_zero", d + "_zero"),
              t.exportFunction(h + "_one", d + "_one"),
              t.exportFunction(h + "_isZero", d + "_isZero"),
              t.exportFunction(h + "_eq", d + "_eq"),
              d
            );
          };
        },
        75: (t, e, i) => {
          const n = i(754),
            o = i(333),
            a = i(345),
            s = i(163),
            r = i(440),
            l = i(948),
            {
              bitLength: c,
              modInv: d,
              modPow: u,
              isPrime: h,
              isOdd: f,
              square: _,
            } = i(409);
          t.exports = function (t, e, i, p) {
            const g = BigInt(e),
              m = Math.floor((c(g - 1n) - 1) / 64) + 1,
              L = 2 * m,
              b = 8 * m,
              F = i || "f1m";
            if (t.modules[F]) return F;
            const y = n(t, m, p),
              x = t.alloc(b, o.bigInt2BytesLE(g, b)),
              w = t.alloc(o.bigInt2BytesLE(_(1n << BigInt(64 * m)) % g, b)),
              B = t.alloc(o.bigInt2BytesLE((1n << BigInt(64 * m)) % g, b)),
              v = t.alloc(o.bigInt2BytesLE(0n, b)),
              E = g - 1n,
              C = E >> 1n,
              A = t.alloc(b, o.bigInt2BytesLE(C, b)),
              q = C + 1n,
              O = t.alloc(b, o.bigInt2BytesLE(q, b));
            t.modules[F] = {
              pq: x,
              pR2: w,
              n64: m,
              q: g,
              pOne: B,
              pZero: v,
              pePlusOne: O,
            };
            let I = 2n;
            if (h(g)) for (; u(I, C, g) !== E; ) I += 1n;
            let S = 0,
              P = E;
            for (; !f(P) && 0n !== P; ) S++, (P >>= 1n);
            const z = t.alloc(b, o.bigInt2BytesLE(P, b)),
              M = u(I, P, g),
              R = t.alloc(o.bigInt2BytesLE((M << BigInt(64 * m)) % g, b)),
              T = (P + 1n) >> 1n,
              N = t.alloc(b, o.bigInt2BytesLE(T, b));
            return (
              t.exportFunction(y + "_copy", F + "_copy"),
              t.exportFunction(y + "_zero", F + "_zero"),
              t.exportFunction(y + "_isZero", F + "_isZero"),
              t.exportFunction(y + "_eq", F + "_eq"),
              (function () {
                const e = t.addFunction(F + "_isOne");
                e.addParam("x", "i32"), e.setReturnType("i32");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.ret(i.call(y + "_eq", i.getLocal("x"), i.i32_const(B)))
                );
              })(),
              (function () {
                const e = t.addFunction(F + "_add");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.addParam("r", "i32");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.if(
                    i.call(
                      y + "_add",
                      i.getLocal("x"),
                      i.getLocal("y"),
                      i.getLocal("r")
                    ),
                    i.drop(
                      i.call(
                        y + "_sub",
                        i.getLocal("r"),
                        i.i32_const(x),
                        i.getLocal("r")
                      )
                    ),
                    i.if(
                      i.call(y + "_gte", i.getLocal("r"), i.i32_const(x)),
                      i.drop(
                        i.call(
                          y + "_sub",
                          i.getLocal("r"),
                          i.i32_const(x),
                          i.getLocal("r")
                        )
                      )
                    )
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(F + "_sub");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.addParam("r", "i32");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.if(
                    i.call(
                      y + "_sub",
                      i.getLocal("x"),
                      i.getLocal("y"),
                      i.getLocal("r")
                    ),
                    i.drop(
                      i.call(
                        y + "_add",
                        i.getLocal("r"),
                        i.i32_const(x),
                        i.getLocal("r")
                      )
                    )
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(F + "_neg");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.call(
                    F + "_sub",
                    i.i32_const(v),
                    i.getLocal("x"),
                    i.getLocal("r")
                  )
                );
              })(),
              (function () {
                const e = t.alloc(L * L * 8),
                  i = t.addFunction(F + "_mReduct");
                i.addParam("t", "i32"),
                  i.addParam("r", "i32"),
                  i.addLocal("np32", "i64"),
                  i.addLocal("c", "i64"),
                  i.addLocal("m", "i64");
                const n = i.getCodeBuilder(),
                  o = Number(0x100000000n - d(g, 0x100000000n));
                i.addCode(n.setLocal("np32", n.i64_const(o)));
                for (let t = 0; t < L; t++) {
                  i.addCode(n.setLocal("c", n.i64_const(0))),
                    i.addCode(
                      n.setLocal(
                        "m",
                        n.i64_and(
                          n.i64_mul(
                            n.i64_load32_u(n.getLocal("t"), 4 * t),
                            n.getLocal("np32")
                          ),
                          n.i64_const("0xFFFFFFFF")
                        )
                      )
                    );
                  for (let e = 0; e < L; e++)
                    i.addCode(
                      n.setLocal(
                        "c",
                        n.i64_add(
                          n.i64_add(
                            n.i64_load32_u(n.getLocal("t"), 4 * (t + e)),
                            n.i64_shr_u(n.getLocal("c"), n.i64_const(32))
                          ),
                          n.i64_mul(
                            n.i64_load32_u(n.i32_const(x), 4 * e),
                            n.getLocal("m")
                          )
                        )
                      )
                    ),
                      i.addCode(
                        n.i64_store32(
                          n.getLocal("t"),
                          4 * (t + e),
                          n.getLocal("c")
                        )
                      );
                  i.addCode(
                    n.i64_store32(
                      n.i32_const(e),
                      4 * t,
                      n.i64_shr_u(n.getLocal("c"), n.i64_const(32))
                    )
                  );
                }
                i.addCode(
                  n.call(
                    F + "_add",
                    n.i32_const(e),
                    n.i32_add(n.getLocal("t"), n.i32_const(4 * L)),
                    n.getLocal("r")
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(F + "_mul");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.addParam("r", "i32"),
                  e.addLocal("c0", "i64"),
                  e.addLocal("c1", "i64"),
                  e.addLocal("np32", "i64");
                for (let t = 0; t < L; t++)
                  e.addLocal("x" + t, "i64"),
                    e.addLocal("y" + t, "i64"),
                    e.addLocal("m" + t, "i64"),
                    e.addLocal("q" + t, "i64");
                const i = e.getCodeBuilder(),
                  n = Number(0x100000000n - d(g, 0x100000000n));
                e.addCode(i.setLocal("np32", i.i64_const(n)));
                const o = [],
                  a = [],
                  s = [];
                function r(t, e) {
                  let n, s;
                  return (
                    o[t]
                      ? (n = i.getLocal("x" + t))
                      : ((n = i.teeLocal(
                          "x" + t,
                          i.i64_load32_u(i.getLocal("x"), 4 * t)
                        )),
                        (o[t] = !0)),
                    a[e]
                      ? (s = i.getLocal("y" + e))
                      : ((s = i.teeLocal(
                          "y" + e,
                          i.i64_load32_u(i.getLocal("y"), 4 * e)
                        )),
                        (a[e] = !0)),
                    i.i64_mul(n, s)
                  );
                }
                function l(t, e) {
                  let n, o;
                  return (
                    s[t]
                      ? (n = i.getLocal("q" + t))
                      : ((n = i.teeLocal(
                          "q" + t,
                          i.i64_load32_u(i.i32_const(0), x + 4 * t)
                        )),
                        (s[t] = !0)),
                    (o = i.getLocal("m" + e)),
                    i.i64_mul(n, o)
                  );
                }
                let c = "c0",
                  u = "c1";
                for (let t = 0; t < 2 * L - 1; t++) {
                  for (let n = Math.max(0, t - L + 1); n <= t && n < L; n++) {
                    const o = t - n;
                    e.addCode(
                      i.setLocal(
                        c,
                        i.i64_add(
                          i.i64_and(i.getLocal(c), i.i64_const(4294967295)),
                          r(n, o)
                        )
                      )
                    ),
                      e.addCode(
                        i.setLocal(
                          u,
                          i.i64_add(
                            i.getLocal(u),
                            i.i64_shr_u(i.getLocal(c), i.i64_const(32))
                          )
                        )
                      );
                  }
                  for (let n = Math.max(1, t - L + 1); n <= t && n < L; n++) {
                    const o = t - n;
                    e.addCode(
                      i.setLocal(
                        c,
                        i.i64_add(
                          i.i64_and(i.getLocal(c), i.i64_const(4294967295)),
                          l(n, o)
                        )
                      )
                    ),
                      e.addCode(
                        i.setLocal(
                          u,
                          i.i64_add(
                            i.getLocal(u),
                            i.i64_shr_u(i.getLocal(c), i.i64_const(32))
                          )
                        )
                      );
                  }
                  t < L &&
                    (e.addCode(
                      i.setLocal(
                        "m" + t,
                        i.i64_and(
                          i.i64_mul(
                            i.i64_and(i.getLocal(c), i.i64_const(4294967295)),
                            i.getLocal("np32")
                          ),
                          i.i64_const("0xFFFFFFFF")
                        )
                      )
                    ),
                    e.addCode(
                      i.setLocal(
                        c,
                        i.i64_add(
                          i.i64_and(i.getLocal(c), i.i64_const(4294967295)),
                          l(0, t)
                        )
                      )
                    ),
                    e.addCode(
                      i.setLocal(
                        u,
                        i.i64_add(
                          i.getLocal(u),
                          i.i64_shr_u(i.getLocal(c), i.i64_const(32))
                        )
                      )
                    )),
                    t >= L &&
                      e.addCode(
                        i.i64_store32(
                          i.getLocal("r"),
                          4 * (t - L),
                          i.getLocal(c)
                        )
                      ),
                    ([c, u] = [u, c]),
                    e.addCode(
                      i.setLocal(u, i.i64_shr_u(i.getLocal(c), i.i64_const(32)))
                    );
                }
                e.addCode(
                  i.i64_store32(i.getLocal("r"), 4 * L - 4, i.getLocal(c))
                ),
                  e.addCode(
                    i.if(
                      i.i32_wrap_i64(i.getLocal(u)),
                      i.drop(
                        i.call(
                          y + "_sub",
                          i.getLocal("r"),
                          i.i32_const(x),
                          i.getLocal("r")
                        )
                      ),
                      i.if(
                        i.call(y + "_gte", i.getLocal("r"), i.i32_const(x)),
                        i.drop(
                          i.call(
                            y + "_sub",
                            i.getLocal("r"),
                            i.i32_const(x),
                            i.getLocal("r")
                          )
                        )
                      )
                    )
                  );
              })(),
              (function () {
                const e = t.addFunction(F + "_square");
                e.addParam("x", "i32"),
                  e.addParam("r", "i32"),
                  e.addLocal("c0", "i64"),
                  e.addLocal("c1", "i64"),
                  e.addLocal("c0_old", "i64"),
                  e.addLocal("c1_old", "i64"),
                  e.addLocal("np32", "i64");
                for (let t = 0; t < L; t++)
                  e.addLocal("x" + t, "i64"),
                    e.addLocal("m" + t, "i64"),
                    e.addLocal("q" + t, "i64");
                const i = e.getCodeBuilder(),
                  n = Number(0x100000000n - d(g, 0x100000000n));
                e.addCode(i.setLocal("np32", i.i64_const(n)));
                const o = [],
                  a = [];
                function s(t, e) {
                  let n, a;
                  return (
                    o[t]
                      ? (n = i.getLocal("x" + t))
                      : ((n = i.teeLocal(
                          "x" + t,
                          i.i64_load32_u(i.getLocal("x"), 4 * t)
                        )),
                        (o[t] = !0)),
                    o[e]
                      ? (a = i.getLocal("x" + e))
                      : ((a = i.teeLocal(
                          "x" + e,
                          i.i64_load32_u(i.getLocal("x"), 4 * e)
                        )),
                        (o[e] = !0)),
                    i.i64_mul(n, a)
                  );
                }
                function r(t, e) {
                  let n, o;
                  return (
                    a[t]
                      ? (n = i.getLocal("q" + t))
                      : ((n = i.teeLocal(
                          "q" + t,
                          i.i64_load32_u(i.i32_const(0), x + 4 * t)
                        )),
                        (a[t] = !0)),
                    (o = i.getLocal("m" + e)),
                    i.i64_mul(n, o)
                  );
                }
                let l = "c0",
                  c = "c1",
                  u = "c0_old",
                  h = "c1_old";
                for (let t = 0; t < 2 * L - 1; t++) {
                  e.addCode(
                    i.setLocal(l, i.i64_const(0)),
                    i.setLocal(c, i.i64_const(0))
                  );
                  for (
                    let n = Math.max(0, t - L + 1);
                    n < (t + 1) >> 1 && n < L;
                    n++
                  ) {
                    const o = t - n;
                    e.addCode(
                      i.setLocal(
                        l,
                        i.i64_add(
                          i.i64_and(i.getLocal(l), i.i64_const(4294967295)),
                          s(n, o)
                        )
                      )
                    ),
                      e.addCode(
                        i.setLocal(
                          c,
                          i.i64_add(
                            i.getLocal(c),
                            i.i64_shr_u(i.getLocal(l), i.i64_const(32))
                          )
                        )
                      );
                  }
                  e.addCode(
                    i.setLocal(
                      l,
                      i.i64_shl(
                        i.i64_and(i.getLocal(l), i.i64_const(4294967295)),
                        i.i64_const(1)
                      )
                    )
                  ),
                    e.addCode(
                      i.setLocal(
                        c,
                        i.i64_add(
                          i.i64_shl(i.getLocal(c), i.i64_const(1)),
                          i.i64_shr_u(i.getLocal(l), i.i64_const(32))
                        )
                      )
                    ),
                    t % 2 == 0 &&
                      (e.addCode(
                        i.setLocal(
                          l,
                          i.i64_add(
                            i.i64_and(i.getLocal(l), i.i64_const(4294967295)),
                            s(t >> 1, t >> 1)
                          )
                        )
                      ),
                      e.addCode(
                        i.setLocal(
                          c,
                          i.i64_add(
                            i.getLocal(c),
                            i.i64_shr_u(i.getLocal(l), i.i64_const(32))
                          )
                        )
                      )),
                    t > 0 &&
                      (e.addCode(
                        i.setLocal(
                          l,
                          i.i64_add(
                            i.i64_and(i.getLocal(l), i.i64_const(4294967295)),
                            i.i64_and(i.getLocal(u), i.i64_const(4294967295))
                          )
                        )
                      ),
                      e.addCode(
                        i.setLocal(
                          c,
                          i.i64_add(
                            i.i64_add(
                              i.getLocal(c),
                              i.i64_shr_u(i.getLocal(l), i.i64_const(32))
                            ),
                            i.getLocal(h)
                          )
                        )
                      ));
                  for (let n = Math.max(1, t - L + 1); n <= t && n < L; n++) {
                    const o = t - n;
                    e.addCode(
                      i.setLocal(
                        l,
                        i.i64_add(
                          i.i64_and(i.getLocal(l), i.i64_const(4294967295)),
                          r(n, o)
                        )
                      )
                    ),
                      e.addCode(
                        i.setLocal(
                          c,
                          i.i64_add(
                            i.getLocal(c),
                            i.i64_shr_u(i.getLocal(l), i.i64_const(32))
                          )
                        )
                      );
                  }
                  t < L &&
                    (e.addCode(
                      i.setLocal(
                        "m" + t,
                        i.i64_and(
                          i.i64_mul(
                            i.i64_and(i.getLocal(l), i.i64_const(4294967295)),
                            i.getLocal("np32")
                          ),
                          i.i64_const("0xFFFFFFFF")
                        )
                      )
                    ),
                    e.addCode(
                      i.setLocal(
                        l,
                        i.i64_add(
                          i.i64_and(i.getLocal(l), i.i64_const(4294967295)),
                          r(0, t)
                        )
                      )
                    ),
                    e.addCode(
                      i.setLocal(
                        c,
                        i.i64_add(
                          i.getLocal(c),
                          i.i64_shr_u(i.getLocal(l), i.i64_const(32))
                        )
                      )
                    )),
                    t >= L &&
                      e.addCode(
                        i.i64_store32(
                          i.getLocal("r"),
                          4 * (t - L),
                          i.getLocal(l)
                        )
                      ),
                    e.addCode(
                      i.setLocal(u, i.getLocal(c)),
                      i.setLocal(h, i.i64_shr_u(i.getLocal(u), i.i64_const(32)))
                    );
                }
                e.addCode(
                  i.i64_store32(i.getLocal("r"), 4 * L - 4, i.getLocal(u))
                ),
                  e.addCode(
                    i.if(
                      i.i32_wrap_i64(i.getLocal(h)),
                      i.drop(
                        i.call(
                          y + "_sub",
                          i.getLocal("r"),
                          i.i32_const(x),
                          i.getLocal("r")
                        )
                      ),
                      i.if(
                        i.call(y + "_gte", i.getLocal("r"), i.i32_const(x)),
                        i.drop(
                          i.call(
                            y + "_sub",
                            i.getLocal("r"),
                            i.i32_const(x),
                            i.getLocal("r")
                          )
                        )
                      )
                    )
                  );
              })(),
              (function () {
                const e = t.addFunction(F + "_squareOld");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.call(
                    F + "_mul",
                    i.getLocal("x"),
                    i.getLocal("x"),
                    i.getLocal("r")
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(F + "_toMontgomery");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.call(
                    F + "_mul",
                    i.getLocal("x"),
                    i.i32_const(w),
                    i.getLocal("r")
                  )
                );
              })(),
              (function () {
                const e = t.alloc(2 * b),
                  i = t.addFunction(F + "_fromMontgomery");
                i.addParam("x", "i32"), i.addParam("r", "i32");
                const n = i.getCodeBuilder();
                i.addCode(n.call(y + "_copy", n.getLocal("x"), n.i32_const(e))),
                  i.addCode(n.call(y + "_zero", n.i32_const(e + b))),
                  i.addCode(
                    n.call(F + "_mReduct", n.i32_const(e), n.getLocal("r"))
                  );
              })(),
              (function () {
                const e = t.addFunction(F + "_isNegative");
                e.addParam("x", "i32"), e.setReturnType("i32");
                const i = e.getCodeBuilder(),
                  n = i.i32_const(t.alloc(b));
                e.addCode(
                  i.call(F + "_fromMontgomery", i.getLocal("x"), n),
                  i.call(y + "_gte", n, i.i32_const(O))
                );
              })(),
              (function () {
                const e = t.addFunction(F + "_sign");
                e.addParam("x", "i32"), e.setReturnType("i32");
                const i = e.getCodeBuilder(),
                  n = i.i32_const(t.alloc(b));
                e.addCode(
                  i.if(
                    i.call(y + "_isZero", i.getLocal("x")),
                    i.ret(i.i32_const(0))
                  ),
                  i.call(F + "_fromMontgomery", i.getLocal("x"), n),
                  i.if(
                    i.call(y + "_gte", n, i.i32_const(O)),
                    i.ret(i.i32_const(-1))
                  ),
                  i.ret(i.i32_const(1))
                );
              })(),
              (function () {
                const e = t.addFunction(F + "_inverse");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.call(
                    F + "_fromMontgomery",
                    i.getLocal("x"),
                    i.getLocal("r")
                  )
                ),
                  e.addCode(
                    i.call(
                      y + "_inverseMod",
                      i.getLocal("r"),
                      i.i32_const(x),
                      i.getLocal("r")
                    )
                  ),
                  e.addCode(
                    i.call(
                      F + "_toMontgomery",
                      i.getLocal("r"),
                      i.getLocal("r")
                    )
                  );
              })(),
              (function () {
                const e = t.addFunction(F + "_one");
                e.addParam("pr", "i32");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.call(y + "_copy", i.i32_const(B), i.getLocal("pr"))
                );
              })(),
              (function () {
                const e = t.addFunction(F + "_load");
                e.addParam("scalar", "i32"),
                  e.addParam("scalarLen", "i32"),
                  e.addParam("r", "i32"),
                  e.addLocal("p", "i32"),
                  e.addLocal("l", "i32"),
                  e.addLocal("i", "i32"),
                  e.addLocal("j", "i32");
                const i = e.getCodeBuilder(),
                  n = i.i32_const(t.alloc(b)),
                  o = t.alloc(b),
                  a = i.i32_const(o);
                e.addCode(
                  i.call(y + "_zero", i.getLocal("r")),
                  i.setLocal("i", i.i32_const(b)),
                  i.setLocal("p", i.getLocal("scalar")),
                  i.block(
                    i.loop(
                      i.br_if(
                        1,
                        i.i32_gt_u(i.getLocal("i"), i.getLocal("scalarLen"))
                      ),
                      i.if(
                        i.i32_eq(i.getLocal("i"), i.i32_const(b)),
                        i.call(F + "_one", n),
                        i.call(F + "_mul", n, i.i32_const(w), n)
                      ),
                      i.call(F + "_mul", i.getLocal("p"), n, a),
                      i.call(F + "_add", i.getLocal("r"), a, i.getLocal("r")),
                      i.setLocal(
                        "p",
                        i.i32_add(i.getLocal("p"), i.i32_const(b))
                      ),
                      i.setLocal(
                        "i",
                        i.i32_add(i.getLocal("i"), i.i32_const(b))
                      ),
                      i.br(0)
                    )
                  ),
                  i.setLocal(
                    "l",
                    i.i32_rem_u(i.getLocal("scalarLen"), i.i32_const(b))
                  ),
                  i.if(i.i32_eqz(i.getLocal("l")), i.ret([])),
                  i.call(y + "_zero", a),
                  i.setLocal("j", i.i32_const(0)),
                  i.block(
                    i.loop(
                      i.br_if(1, i.i32_eq(i.getLocal("j"), i.getLocal("l"))),
                      i.i32_store8(
                        i.getLocal("j"),
                        o,
                        i.i32_load8_u(i.getLocal("p"))
                      ),
                      i.setLocal(
                        "p",
                        i.i32_add(i.getLocal("p"), i.i32_const(1))
                      ),
                      i.setLocal(
                        "j",
                        i.i32_add(i.getLocal("j"), i.i32_const(1))
                      ),
                      i.br(0)
                    )
                  ),
                  i.if(
                    i.i32_eq(i.getLocal("i"), i.i32_const(b)),
                    i.call(F + "_one", n),
                    i.call(F + "_mul", n, i.i32_const(w), n)
                  ),
                  i.call(F + "_mul", a, n, a),
                  i.call(F + "_add", i.getLocal("r"), a, i.getLocal("r"))
                );
              })(),
              (function () {
                const e = t.addFunction(F + "_timesScalar");
                e.addParam("x", "i32"),
                  e.addParam("scalar", "i32"),
                  e.addParam("scalarLen", "i32"),
                  e.addParam("r", "i32");
                const i = e.getCodeBuilder(),
                  n = i.i32_const(t.alloc(b));
                e.addCode(
                  i.call(
                    F + "_load",
                    i.getLocal("scalar"),
                    i.getLocal("scalarLen"),
                    n
                  ),
                  i.call(F + "_toMontgomery", n, n),
                  i.call(F + "_mul", i.getLocal("x"), n, i.getLocal("r"))
                );
              })(),
              s(t, F),
              r(t, F + "_batchToMontgomery", F + "_toMontgomery", b, b),
              r(t, F + "_batchFromMontgomery", F + "_fromMontgomery", b, b),
              r(t, F + "_batchNeg", F + "_neg", b, b),
              l(t, F + "_batchAdd", F + "_add", b, b),
              l(t, F + "_batchSub", F + "_sub", b, b),
              l(t, F + "_batchMul", F + "_mul", b, b),
              t.exportFunction(F + "_add"),
              t.exportFunction(F + "_sub"),
              t.exportFunction(F + "_neg"),
              t.exportFunction(F + "_isNegative"),
              t.exportFunction(F + "_isOne"),
              t.exportFunction(F + "_sign"),
              t.exportFunction(F + "_mReduct"),
              t.exportFunction(F + "_mul"),
              t.exportFunction(F + "_square"),
              t.exportFunction(F + "_squareOld"),
              t.exportFunction(F + "_fromMontgomery"),
              t.exportFunction(F + "_toMontgomery"),
              t.exportFunction(F + "_inverse"),
              t.exportFunction(F + "_one"),
              t.exportFunction(F + "_load"),
              t.exportFunction(F + "_timesScalar"),
              a(
                t,
                F + "_exp",
                b,
                F + "_mul",
                F + "_square",
                y + "_copy",
                F + "_one"
              ),
              t.exportFunction(F + "_exp"),
              t.exportFunction(F + "_batchInverse"),
              h(g) &&
                ((function () {
                  const e = t.addFunction(F + "_sqrt");
                  e.addParam("n", "i32"),
                    e.addParam("r", "i32"),
                    e.addLocal("m", "i32"),
                    e.addLocal("i", "i32"),
                    e.addLocal("j", "i32");
                  const i = e.getCodeBuilder(),
                    n = i.i32_const(B),
                    o = i.i32_const(t.alloc(b)),
                    a = i.i32_const(t.alloc(b)),
                    s = i.i32_const(t.alloc(b)),
                    r = i.i32_const(t.alloc(b)),
                    l = i.i32_const(t.alloc(b));
                  e.addCode(
                    i.if(
                      i.call(F + "_isZero", i.getLocal("n")),
                      i.ret(i.call(F + "_zero", i.getLocal("r")))
                    ),
                    i.setLocal("m", i.i32_const(S)),
                    i.call(F + "_copy", i.i32_const(R), o),
                    i.call(
                      F + "_exp",
                      i.getLocal("n"),
                      i.i32_const(z),
                      i.i32_const(b),
                      a
                    ),
                    i.call(
                      F + "_exp",
                      i.getLocal("n"),
                      i.i32_const(N),
                      i.i32_const(b),
                      s
                    ),
                    i.block(
                      i.loop(
                        i.br_if(1, i.call(F + "_eq", a, n)),
                        i.call(F + "_square", a, r),
                        i.setLocal("i", i.i32_const(1)),
                        i.block(
                          i.loop(
                            i.br_if(1, i.call(F + "_eq", r, n)),
                            i.call(F + "_square", r, r),
                            i.setLocal(
                              "i",
                              i.i32_add(i.getLocal("i"), i.i32_const(1))
                            ),
                            i.br(0)
                          )
                        ),
                        i.call(F + "_copy", o, l),
                        i.setLocal(
                          "j",
                          i.i32_sub(
                            i.i32_sub(i.getLocal("m"), i.getLocal("i")),
                            i.i32_const(1)
                          )
                        ),
                        i.block(
                          i.loop(
                            i.br_if(1, i.i32_eqz(i.getLocal("j"))),
                            i.call(F + "_square", l, l),
                            i.setLocal(
                              "j",
                              i.i32_sub(i.getLocal("j"), i.i32_const(1))
                            ),
                            i.br(0)
                          )
                        ),
                        i.setLocal("m", i.getLocal("i")),
                        i.call(F + "_square", l, o),
                        i.call(F + "_mul", a, o, a),
                        i.call(F + "_mul", s, l, s),
                        i.br(0)
                      )
                    ),
                    i.if(
                      i.call(F + "_isNegative", s),
                      i.call(F + "_neg", s, i.getLocal("r")),
                      i.call(F + "_copy", s, i.getLocal("r"))
                    )
                  );
                })(),
                (function () {
                  const e = t.addFunction(F + "_isSquare");
                  e.addParam("n", "i32"), e.setReturnType("i32");
                  const i = e.getCodeBuilder(),
                    n = i.i32_const(B),
                    o = i.i32_const(t.alloc(b));
                  e.addCode(
                    i.if(
                      i.call(F + "_isZero", i.getLocal("n")),
                      i.ret(i.i32_const(1))
                    ),
                    i.call(
                      F + "_exp",
                      i.getLocal("n"),
                      i.i32_const(A),
                      i.i32_const(b),
                      o
                    ),
                    i.call(F + "_eq", o, n)
                  );
                })(),
                t.exportFunction(F + "_sqrt"),
                t.exportFunction(F + "_isSquare")),
              t.exportFunction(F + "_batchToMontgomery"),
              t.exportFunction(F + "_batchFromMontgomery"),
              F
            );
          };
        },
        420: (t, e, i) => {
          const n = i(345),
            o = i(163),
            a = i(333);
          t.exports = function (t, e, i, s) {
            if (t.modules[i]) return i;
            const r = 8 * t.modules[s].n64,
              l = t.modules[s].q;
            return (
              (t.modules[i] = { n64: 2 * t.modules[s].n64 }),
              (function () {
                const e = t.addFunction(i + "_isZero");
                e.addParam("x", "i32"), e.setReturnType("i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r));
                e.addCode(
                  n.i32_and(n.call(s + "_isZero", o), n.call(s + "_isZero", a))
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_isOne");
                e.addParam("x", "i32"), e.setReturnType("i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r));
                e.addCode(
                  n.ret(
                    n.i32_and(n.call(s + "_isOne", o), n.call(s + "_isZero", a))
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_zero");
                e.addParam("x", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r));
                e.addCode(n.call(s + "_zero", o), n.call(s + "_zero", a));
              })(),
              (function () {
                const e = t.addFunction(i + "_one");
                e.addParam("x", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r));
                e.addCode(n.call(s + "_one", o), n.call(s + "_zero", a));
              })(),
              (function () {
                const e = t.addFunction(i + "_copy");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r)),
                  l = n.getLocal("r"),
                  c = n.i32_add(n.getLocal("r"), n.i32_const(r));
                e.addCode(n.call(s + "_copy", o, l), n.call(s + "_copy", a, c));
              })(),
              (function () {
                const n = t.addFunction(i + "_mul");
                n.addParam("x", "i32"),
                  n.addParam("y", "i32"),
                  n.addParam("r", "i32");
                const o = n.getCodeBuilder(),
                  a = o.getLocal("x"),
                  l = o.i32_add(o.getLocal("x"), o.i32_const(r)),
                  c = o.getLocal("y"),
                  d = o.i32_add(o.getLocal("y"), o.i32_const(r)),
                  u = o.getLocal("r"),
                  h = o.i32_add(o.getLocal("r"), o.i32_const(r)),
                  f = o.i32_const(t.alloc(r)),
                  _ = o.i32_const(t.alloc(r)),
                  p = o.i32_const(t.alloc(r)),
                  g = o.i32_const(t.alloc(r));
                n.addCode(
                  o.call(s + "_mul", a, c, f),
                  o.call(s + "_mul", l, d, _),
                  o.call(s + "_add", a, l, p),
                  o.call(s + "_add", c, d, g),
                  o.call(s + "_mul", p, g, p),
                  o.call(e, _, u),
                  o.call(s + "_add", f, u, u),
                  o.call(s + "_add", f, _, h),
                  o.call(s + "_sub", p, h, h)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_mul1");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r)),
                  l = n.getLocal("y"),
                  c = n.getLocal("r"),
                  d = n.i32_add(n.getLocal("r"), n.i32_const(r));
                e.addCode(
                  n.call(s + "_mul", o, l, c),
                  n.call(s + "_mul", a, l, d)
                );
              })(),
              (function () {
                const n = t.addFunction(i + "_square");
                n.addParam("x", "i32"), n.addParam("r", "i32");
                const o = n.getCodeBuilder(),
                  a = o.getLocal("x"),
                  l = o.i32_add(o.getLocal("x"), o.i32_const(r)),
                  c = o.getLocal("r"),
                  d = o.i32_add(o.getLocal("r"), o.i32_const(r)),
                  u = o.i32_const(t.alloc(r)),
                  h = o.i32_const(t.alloc(r)),
                  f = o.i32_const(t.alloc(r)),
                  _ = o.i32_const(t.alloc(r));
                n.addCode(
                  o.call(s + "_mul", a, l, u),
                  o.call(s + "_add", a, l, h),
                  o.call(e, l, f),
                  o.call(s + "_add", a, f, f),
                  o.call(e, u, _),
                  o.call(s + "_add", _, u, _),
                  o.call(s + "_mul", h, f, c),
                  o.call(s + "_sub", c, _, c),
                  o.call(s + "_add", u, u, d)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_add");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r)),
                  l = n.getLocal("y"),
                  c = n.i32_add(n.getLocal("y"), n.i32_const(r)),
                  d = n.getLocal("r"),
                  u = n.i32_add(n.getLocal("r"), n.i32_const(r));
                e.addCode(
                  n.call(s + "_add", o, l, d),
                  n.call(s + "_add", a, c, u)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_sub");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r)),
                  l = n.getLocal("y"),
                  c = n.i32_add(n.getLocal("y"), n.i32_const(r)),
                  d = n.getLocal("r"),
                  u = n.i32_add(n.getLocal("r"), n.i32_const(r));
                e.addCode(
                  n.call(s + "_sub", o, l, d),
                  n.call(s + "_sub", a, c, u)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_neg");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r)),
                  l = n.getLocal("r"),
                  c = n.i32_add(n.getLocal("r"), n.i32_const(r));
                e.addCode(n.call(s + "_neg", o, l), n.call(s + "_neg", a, c));
              })(),
              (function () {
                const e = t.addFunction(i + "_conjugate");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r)),
                  l = n.getLocal("r"),
                  c = n.i32_add(n.getLocal("r"), n.i32_const(r));
                e.addCode(n.call(s + "_copy", o, l), n.call(s + "_neg", a, c));
              })(),
              (function () {
                const e = t.addFunction(i + "_toMontgomery");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r)),
                  l = n.getLocal("r"),
                  c = n.i32_add(n.getLocal("r"), n.i32_const(r));
                e.addCode(
                  n.call(s + "_toMontgomery", o, l),
                  n.call(s + "_toMontgomery", a, c)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_fromMontgomery");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r)),
                  l = n.getLocal("r"),
                  c = n.i32_add(n.getLocal("r"), n.i32_const(r));
                e.addCode(
                  n.call(s + "_fromMontgomery", o, l),
                  n.call(s + "_fromMontgomery", a, c)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_eq");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.setReturnType("i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r)),
                  l = n.getLocal("y"),
                  c = n.i32_add(n.getLocal("y"), n.i32_const(r));
                e.addCode(
                  n.i32_and(n.call(s + "_eq", o, l), n.call(s + "_eq", a, c))
                );
              })(),
              (function () {
                const n = t.addFunction(i + "_inverse");
                n.addParam("x", "i32"), n.addParam("r", "i32");
                const o = n.getCodeBuilder(),
                  a = o.getLocal("x"),
                  l = o.i32_add(o.getLocal("x"), o.i32_const(r)),
                  c = o.getLocal("r"),
                  d = o.i32_add(o.getLocal("r"), o.i32_const(r)),
                  u = o.i32_const(t.alloc(r)),
                  h = o.i32_const(t.alloc(r)),
                  f = o.i32_const(t.alloc(r)),
                  _ = o.i32_const(t.alloc(r));
                n.addCode(
                  o.call(s + "_square", a, u),
                  o.call(s + "_square", l, h),
                  o.call(e, h, f),
                  o.call(s + "_sub", u, f, f),
                  o.call(s + "_inverse", f, _),
                  o.call(s + "_mul", a, _, c),
                  o.call(s + "_mul", l, _, d),
                  o.call(s + "_neg", d, d)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_timesScalar");
                e.addParam("x", "i32"),
                  e.addParam("scalar", "i32"),
                  e.addParam("scalarLen", "i32"),
                  e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r)),
                  l = n.getLocal("r"),
                  c = n.i32_add(n.getLocal("r"), n.i32_const(r));
                e.addCode(
                  n.call(
                    s + "_timesScalar",
                    o,
                    n.getLocal("scalar"),
                    n.getLocal("scalarLen"),
                    l
                  ),
                  n.call(
                    s + "_timesScalar",
                    a,
                    n.getLocal("scalar"),
                    n.getLocal("scalarLen"),
                    c
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_sign");
                e.addParam("x", "i32"),
                  e.addLocal("s", "i32"),
                  e.setReturnType("i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r));
                e.addCode(
                  n.setLocal("s", n.call(s + "_sign", a)),
                  n.if(n.getLocal("s"), n.ret(n.getLocal("s"))),
                  n.ret(n.call(s + "_sign", o))
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_isNegative");
                e.addParam("x", "i32"), e.setReturnType("i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  a = n.i32_add(n.getLocal("x"), n.i32_const(r));
                e.addCode(
                  n.if(
                    n.call(s + "_isZero", a),
                    n.ret(n.call(s + "_isNegative", o))
                  ),
                  n.ret(n.call(s + "_isNegative", a))
                );
              })(),
              t.exportFunction(i + "_isZero"),
              t.exportFunction(i + "_isOne"),
              t.exportFunction(i + "_zero"),
              t.exportFunction(i + "_one"),
              t.exportFunction(i + "_copy"),
              t.exportFunction(i + "_mul"),
              t.exportFunction(i + "_mul1"),
              t.exportFunction(i + "_square"),
              t.exportFunction(i + "_add"),
              t.exportFunction(i + "_sub"),
              t.exportFunction(i + "_neg"),
              t.exportFunction(i + "_sign"),
              t.exportFunction(i + "_conjugate"),
              t.exportFunction(i + "_fromMontgomery"),
              t.exportFunction(i + "_toMontgomery"),
              t.exportFunction(i + "_eq"),
              t.exportFunction(i + "_inverse"),
              o(t, i),
              n(
                t,
                i + "_exp",
                2 * r,
                i + "_mul",
                i + "_square",
                i + "_copy",
                i + "_one"
              ),
              (function () {
                const e = t.addFunction(i + "_sqrt");
                e.addParam("a", "i32"), e.addParam("pr", "i32");
                const n = e.getCodeBuilder(),
                  o = n.i32_const(
                    t.alloc(a.bigInt2BytesLE((BigInt(l || 0) - 3n) / 4n, r))
                  ),
                  c = n.i32_const(
                    t.alloc(a.bigInt2BytesLE((BigInt(l || 0) - 1n) / 2n, r))
                  ),
                  d = n.getLocal("a"),
                  u = n.i32_const(t.alloc(2 * r)),
                  h = n.i32_const(t.alloc(2 * r)),
                  f = n.i32_const(t.alloc(2 * r)),
                  _ = t.alloc(2 * r),
                  p = n.i32_const(_),
                  g = n.i32_const(_),
                  m = n.i32_const(_ + r),
                  L = n.i32_const(t.alloc(2 * r)),
                  b = n.i32_const(t.alloc(2 * r));
                e.addCode(
                  n.call(i + "_one", p),
                  n.call(i + "_neg", p, p),
                  n.call(i + "_exp", d, o, n.i32_const(r), u),
                  n.call(i + "_square", u, h),
                  n.call(i + "_mul", d, h, h),
                  n.call(i + "_conjugate", h, f),
                  n.call(i + "_mul", f, h, f),
                  n.if(n.call(i + "_eq", f, p), n.unreachable()),
                  n.call(i + "_mul", u, d, L),
                  n.if(
                    n.call(i + "_eq", h, p),
                    [
                      ...n.call(s + "_zero", g),
                      ...n.call(s + "_one", m),
                      ...n.call(i + "_mul", p, L, n.getLocal("pr")),
                    ],
                    [
                      ...n.call(i + "_one", b),
                      ...n.call(i + "_add", b, h, b),
                      ...n.call(i + "_exp", b, c, n.i32_const(r), b),
                      ...n.call(i + "_mul", b, L, n.getLocal("pr")),
                    ]
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_isSquare");
                e.addParam("a", "i32"), e.setReturnType("i32");
                const n = e.getCodeBuilder(),
                  o = n.i32_const(
                    t.alloc(a.bigInt2BytesLE((BigInt(l || 0) - 3n) / 4n, r))
                  ),
                  s = n.getLocal("a"),
                  c = n.i32_const(t.alloc(2 * r)),
                  d = n.i32_const(t.alloc(2 * r)),
                  u = n.i32_const(t.alloc(2 * r)),
                  h = t.alloc(2 * r),
                  f = n.i32_const(h);
                e.addCode(
                  n.call(i + "_one", f),
                  n.call(i + "_neg", f, f),
                  n.call(i + "_exp", s, o, n.i32_const(r), c),
                  n.call(i + "_square", c, d),
                  n.call(i + "_mul", s, d, d),
                  n.call(i + "_conjugate", d, u),
                  n.call(i + "_mul", u, d, u),
                  n.if(n.call(i + "_eq", u, f), n.ret(n.i32_const(0))),
                  n.ret(n.i32_const(1))
                );
              })(),
              t.exportFunction(i + "_exp"),
              t.exportFunction(i + "_timesScalar"),
              t.exportFunction(i + "_batchInverse"),
              t.exportFunction(i + "_sqrt"),
              t.exportFunction(i + "_isSquare"),
              t.exportFunction(i + "_isNegative"),
              i
            );
          };
        },
        173: (t, e, i) => {
          const n = i(345),
            o = i(163);
          t.exports = function (t, e, i, a) {
            if (t.modules[i]) return i;
            const s = 8 * t.modules[a].n64;
            return (
              (t.modules[i] = { n64: 3 * t.modules[a].n64 }),
              (function () {
                const e = t.addFunction(i + "_isZero");
                e.addParam("x", "i32"), e.setReturnType("i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s));
                e.addCode(
                  n.i32_and(
                    n.i32_and(
                      n.call(a + "_isZero", o),
                      n.call(a + "_isZero", r)
                    ),
                    n.call(a + "_isZero", l)
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_isOne");
                e.addParam("x", "i32"), e.setReturnType("i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s));
                e.addCode(
                  n.ret(
                    n.i32_and(
                      n.i32_and(
                        n.call(a + "_isOne", o),
                        n.call(a + "_isZero", r)
                      ),
                      n.call(a + "_isZero", l)
                    )
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_zero");
                e.addParam("x", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s));
                e.addCode(
                  n.call(a + "_zero", o),
                  n.call(a + "_zero", r),
                  n.call(a + "_zero", l)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_one");
                e.addParam("x", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s));
                e.addCode(
                  n.call(a + "_one", o),
                  n.call(a + "_zero", r),
                  n.call(a + "_zero", l)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_copy");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s)),
                  c = n.getLocal("r"),
                  d = n.i32_add(n.getLocal("r"), n.i32_const(s)),
                  u = n.i32_add(n.getLocal("r"), n.i32_const(2 * s));
                e.addCode(
                  n.call(a + "_copy", o, c),
                  n.call(a + "_copy", r, d),
                  n.call(a + "_copy", l, u)
                );
              })(),
              (function () {
                const n = t.addFunction(i + "_mul");
                n.addParam("x", "i32"),
                  n.addParam("y", "i32"),
                  n.addParam("r", "i32");
                const o = n.getCodeBuilder(),
                  r = o.getLocal("x"),
                  l = o.i32_add(o.getLocal("x"), o.i32_const(s)),
                  c = o.i32_add(o.getLocal("x"), o.i32_const(2 * s)),
                  d = o.getLocal("y"),
                  u = o.i32_add(o.getLocal("y"), o.i32_const(s)),
                  h = o.i32_add(o.getLocal("y"), o.i32_const(2 * s)),
                  f = o.getLocal("r"),
                  _ = o.i32_add(o.getLocal("r"), o.i32_const(s)),
                  p = o.i32_add(o.getLocal("r"), o.i32_const(2 * s)),
                  g = o.i32_const(t.alloc(s)),
                  m = o.i32_const(t.alloc(s)),
                  L = o.i32_const(t.alloc(s)),
                  b = o.i32_const(t.alloc(s)),
                  F = o.i32_const(t.alloc(s)),
                  y = o.i32_const(t.alloc(s)),
                  x = o.i32_const(t.alloc(s)),
                  w = o.i32_const(t.alloc(s)),
                  B = o.i32_const(t.alloc(s)),
                  v = o.i32_const(t.alloc(s)),
                  E = o.i32_const(t.alloc(s)),
                  C = o.i32_const(t.alloc(s)),
                  A = o.i32_const(t.alloc(s));
                n.addCode(
                  o.call(a + "_mul", r, d, g),
                  o.call(a + "_mul", l, u, m),
                  o.call(a + "_mul", c, h, L),
                  o.call(a + "_add", r, l, b),
                  o.call(a + "_add", d, u, F),
                  o.call(a + "_add", r, c, y),
                  o.call(a + "_add", d, h, x),
                  o.call(a + "_add", l, c, w),
                  o.call(a + "_add", u, h, B),
                  o.call(a + "_add", g, m, v),
                  o.call(a + "_add", g, L, E),
                  o.call(a + "_add", m, L, C),
                  o.call(a + "_mul", w, B, f),
                  o.call(a + "_sub", f, C, f),
                  o.call(e, f, f),
                  o.call(a + "_add", g, f, f),
                  o.call(a + "_mul", b, F, _),
                  o.call(a + "_sub", _, v, _),
                  o.call(e, L, A),
                  o.call(a + "_add", _, A, _),
                  o.call(a + "_mul", y, x, p),
                  o.call(a + "_sub", p, E, p),
                  o.call(a + "_add", p, m, p)
                );
              })(),
              (function () {
                const n = t.addFunction(i + "_square");
                n.addParam("x", "i32"), n.addParam("r", "i32");
                const o = n.getCodeBuilder(),
                  r = o.getLocal("x"),
                  l = o.i32_add(o.getLocal("x"), o.i32_const(s)),
                  c = o.i32_add(o.getLocal("x"), o.i32_const(2 * s)),
                  d = o.getLocal("r"),
                  u = o.i32_add(o.getLocal("r"), o.i32_const(s)),
                  h = o.i32_add(o.getLocal("r"), o.i32_const(2 * s)),
                  f = o.i32_const(t.alloc(s)),
                  _ = o.i32_const(t.alloc(s)),
                  p = o.i32_const(t.alloc(s)),
                  g = o.i32_const(t.alloc(s)),
                  m = o.i32_const(t.alloc(s)),
                  L = o.i32_const(t.alloc(s)),
                  b = o.i32_const(t.alloc(s));
                n.addCode(
                  o.call(a + "_square", r, f),
                  o.call(a + "_mul", r, l, _),
                  o.call(a + "_add", _, _, p),
                  o.call(a + "_sub", r, l, g),
                  o.call(a + "_add", g, c, g),
                  o.call(a + "_square", g, g),
                  o.call(a + "_mul", l, c, m),
                  o.call(a + "_add", m, m, L),
                  o.call(a + "_square", c, b),
                  o.call(e, L, d),
                  o.call(a + "_add", f, d, d),
                  o.call(e, b, u),
                  o.call(a + "_add", p, u, u),
                  o.call(a + "_add", f, b, h),
                  o.call(a + "_sub", L, h, h),
                  o.call(a + "_add", g, h, h),
                  o.call(a + "_add", p, h, h)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_add");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s)),
                  c = n.getLocal("y"),
                  d = n.i32_add(n.getLocal("y"), n.i32_const(s)),
                  u = n.i32_add(n.getLocal("y"), n.i32_const(2 * s)),
                  h = n.getLocal("r"),
                  f = n.i32_add(n.getLocal("r"), n.i32_const(s)),
                  _ = n.i32_add(n.getLocal("r"), n.i32_const(2 * s));
                e.addCode(
                  n.call(a + "_add", o, c, h),
                  n.call(a + "_add", r, d, f),
                  n.call(a + "_add", l, u, _)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_sub");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s)),
                  c = n.getLocal("y"),
                  d = n.i32_add(n.getLocal("y"), n.i32_const(s)),
                  u = n.i32_add(n.getLocal("y"), n.i32_const(2 * s)),
                  h = n.getLocal("r"),
                  f = n.i32_add(n.getLocal("r"), n.i32_const(s)),
                  _ = n.i32_add(n.getLocal("r"), n.i32_const(2 * s));
                e.addCode(
                  n.call(a + "_sub", o, c, h),
                  n.call(a + "_sub", r, d, f),
                  n.call(a + "_sub", l, u, _)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_neg");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s)),
                  c = n.getLocal("r"),
                  d = n.i32_add(n.getLocal("r"), n.i32_const(s)),
                  u = n.i32_add(n.getLocal("r"), n.i32_const(2 * s));
                e.addCode(
                  n.call(a + "_neg", o, c),
                  n.call(a + "_neg", r, d),
                  n.call(a + "_neg", l, u)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_sign");
                e.addParam("x", "i32"),
                  e.addLocal("s", "i32"),
                  e.setReturnType("i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s));
                e.addCode(
                  n.setLocal("s", n.call(a + "_sign", l)),
                  n.if(n.getLocal("s"), n.ret(n.getLocal("s"))),
                  n.setLocal("s", n.call(a + "_sign", r)),
                  n.if(n.getLocal("s"), n.ret(n.getLocal("s"))),
                  n.ret(n.call(a + "_sign", o))
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_toMontgomery");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s)),
                  c = n.getLocal("r"),
                  d = n.i32_add(n.getLocal("r"), n.i32_const(s)),
                  u = n.i32_add(n.getLocal("r"), n.i32_const(2 * s));
                e.addCode(
                  n.call(a + "_toMontgomery", o, c),
                  n.call(a + "_toMontgomery", r, d),
                  n.call(a + "_toMontgomery", l, u)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_fromMontgomery");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s)),
                  c = n.getLocal("r"),
                  d = n.i32_add(n.getLocal("r"), n.i32_const(s)),
                  u = n.i32_add(n.getLocal("r"), n.i32_const(2 * s));
                e.addCode(
                  n.call(a + "_fromMontgomery", o, c),
                  n.call(a + "_fromMontgomery", r, d),
                  n.call(a + "_fromMontgomery", l, u)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_eq");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.setReturnType("i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s)),
                  c = n.getLocal("y"),
                  d = n.i32_add(n.getLocal("y"), n.i32_const(s)),
                  u = n.i32_add(n.getLocal("y"), n.i32_const(2 * s));
                e.addCode(
                  n.i32_and(
                    n.i32_and(n.call(a + "_eq", o, c), n.call(a + "_eq", r, d)),
                    n.call(a + "_eq", l, u)
                  )
                );
              })(),
              (function () {
                const n = t.addFunction(i + "_inverse");
                n.addParam("x", "i32"), n.addParam("r", "i32");
                const o = n.getCodeBuilder(),
                  r = o.getLocal("x"),
                  l = o.i32_add(o.getLocal("x"), o.i32_const(s)),
                  c = o.i32_add(o.getLocal("x"), o.i32_const(2 * s)),
                  d = o.getLocal("r"),
                  u = o.i32_add(o.getLocal("r"), o.i32_const(s)),
                  h = o.i32_add(o.getLocal("r"), o.i32_const(2 * s)),
                  f = o.i32_const(t.alloc(s)),
                  _ = o.i32_const(t.alloc(s)),
                  p = o.i32_const(t.alloc(s)),
                  g = o.i32_const(t.alloc(s)),
                  m = o.i32_const(t.alloc(s)),
                  L = o.i32_const(t.alloc(s)),
                  b = o.i32_const(t.alloc(s)),
                  F = o.i32_const(t.alloc(s)),
                  y = o.i32_const(t.alloc(s)),
                  x = o.i32_const(t.alloc(s)),
                  w = o.i32_const(t.alloc(s));
                n.addCode(
                  o.call(a + "_square", r, f),
                  o.call(a + "_square", l, _),
                  o.call(a + "_square", c, p),
                  o.call(a + "_mul", r, l, g),
                  o.call(a + "_mul", r, c, m),
                  o.call(a + "_mul", l, c, L),
                  o.call(e, L, b),
                  o.call(a + "_sub", f, b, b),
                  o.call(e, p, F),
                  o.call(a + "_sub", F, g, F),
                  o.call(a + "_sub", _, m, y),
                  o.call(a + "_mul", c, F, x),
                  o.call(a + "_mul", l, y, w),
                  o.call(a + "_add", x, w, x),
                  o.call(e, x, x),
                  o.call(a + "_mul", r, b, w),
                  o.call(a + "_add", w, x, x),
                  o.call(a + "_inverse", x, x),
                  o.call(a + "_mul", x, b, d),
                  o.call(a + "_mul", x, F, u),
                  o.call(a + "_mul", x, y, h)
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_timesScalar");
                e.addParam("x", "i32"),
                  e.addParam("scalar", "i32"),
                  e.addParam("scalarLen", "i32"),
                  e.addParam("r", "i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s)),
                  c = n.getLocal("r"),
                  d = n.i32_add(n.getLocal("r"), n.i32_const(s)),
                  u = n.i32_add(n.getLocal("r"), n.i32_const(2 * s));
                e.addCode(
                  n.call(
                    a + "_timesScalar",
                    o,
                    n.getLocal("scalar"),
                    n.getLocal("scalarLen"),
                    c
                  ),
                  n.call(
                    a + "_timesScalar",
                    r,
                    n.getLocal("scalar"),
                    n.getLocal("scalarLen"),
                    d
                  ),
                  n.call(
                    a + "_timesScalar",
                    l,
                    n.getLocal("scalar"),
                    n.getLocal("scalarLen"),
                    u
                  )
                );
              })(),
              (function () {
                const e = t.addFunction(i + "_isNegative");
                e.addParam("x", "i32"), e.setReturnType("i32");
                const n = e.getCodeBuilder(),
                  o = n.getLocal("x"),
                  r = n.i32_add(n.getLocal("x"), n.i32_const(s)),
                  l = n.i32_add(n.getLocal("x"), n.i32_const(2 * s));
                e.addCode(
                  n.if(
                    n.call(a + "_isZero", l),
                    n.if(
                      n.call(a + "_isZero", r),
                      n.ret(n.call(a + "_isNegative", o)),
                      n.ret(n.call(a + "_isNegative", r))
                    )
                  ),
                  n.ret(n.call(a + "_isNegative", l))
                );
              })(),
              t.exportFunction(i + "_isZero"),
              t.exportFunction(i + "_isOne"),
              t.exportFunction(i + "_zero"),
              t.exportFunction(i + "_one"),
              t.exportFunction(i + "_copy"),
              t.exportFunction(i + "_mul"),
              t.exportFunction(i + "_square"),
              t.exportFunction(i + "_add"),
              t.exportFunction(i + "_sub"),
              t.exportFunction(i + "_neg"),
              t.exportFunction(i + "_sign"),
              t.exportFunction(i + "_fromMontgomery"),
              t.exportFunction(i + "_toMontgomery"),
              t.exportFunction(i + "_eq"),
              t.exportFunction(i + "_inverse"),
              o(t, i),
              n(
                t,
                i + "_exp",
                3 * s,
                i + "_mul",
                i + "_square",
                i + "_copy",
                i + "_one"
              ),
              t.exportFunction(i + "_exp"),
              t.exportFunction(i + "_timesScalar"),
              t.exportFunction(i + "_batchInverse"),
              t.exportFunction(i + "_isNegative"),
              i
            );
          };
        },
        292: (t, e, i) => {
          const { isOdd: n, modInv: o, modPow: a } = i(409),
            s = i(333);
          t.exports = function (t, e, i, r, l) {
            const c = 8 * t.modules[r].n64,
              d = 8 * t.modules[i].n64,
              u = t.modules[r].q;
            let h = u - 1n,
              f = 0;
            for (; !n(h); ) f++, (h >>= 1n);
            let _ = 2n;
            for (; 1n === a(_, u >> 1n, u); ) _ += 1n;
            const p = new Array(f + 1);
            p[f] = a(_, h, u);
            let g = f - 1;
            for (; g >= 0; ) (p[g] = a(p[g + 1], 2n, u)), g--;
            const m = [],
              L = (1n << BigInt(8 * c)) % u;
            for (let t = 0; t < p.length; t++) {
              const e = (p[t] * L) % u;
              m.push(...s.bigInt2BytesLE(e, c));
            }
            const b = t.alloc(m),
              F = new Array(f + 1);
            F[0] = 1n;
            for (let t = 1; t <= f; t++) F[t] = 2n * F[t - 1];
            const y = [];
            for (let t = 0; t <= f; t++) {
              const e = (o(F[t], u) * L) % u;
              y.push(...s.bigInt2BytesLE(e, c));
            }
            const x = t.alloc(y),
              w = a(_, 2n, u),
              B = [],
              v = [];
            for (let t = 0; t <= f; t++) {
              const e = a(w, 2n ** BigInt(t), u),
                i = o(u + 1n - e, u);
              B.push(...s.bigInt2BytesLE((e * L) % u, c)),
                v.push(...s.bigInt2BytesLE((i * L) % u, c));
            }
            const E = t.alloc(B),
              C = t.alloc(v);
            function A(t) {
              let e = 0;
              for (let i = 0; i < 8; i++) t & (1 << i) && (e |= 128 >> i);
              return e;
            }
            const q = Array(256);
            for (let t = 0; t < 256; t++) q[t] = A(t);
            const O = t.alloc(q);
            !(function () {
              const i = t.addFunction(e + "__rev");
              i.addParam("x", "i32"),
                i.addParam("bits", "i32"),
                i.setReturnType("i32");
              const n = i.getCodeBuilder();
              i.addCode(
                n.i32_rotl(
                  n.i32_add(
                    n.i32_add(
                      n.i32_shl(
                        n.i32_load8_u(
                          n.i32_and(n.getLocal("x"), n.i32_const(255)),
                          O,
                          0
                        ),
                        n.i32_const(24)
                      ),
                      n.i32_shl(
                        n.i32_load8_u(
                          n.i32_and(
                            n.i32_shr_u(n.getLocal("x"), n.i32_const(8)),
                            n.i32_const(255)
                          ),
                          O,
                          0
                        ),
                        n.i32_const(16)
                      )
                    ),
                    n.i32_add(
                      n.i32_shl(
                        n.i32_load8_u(
                          n.i32_and(
                            n.i32_shr_u(n.getLocal("x"), n.i32_const(16)),
                            n.i32_const(255)
                          ),
                          O,
                          0
                        ),
                        n.i32_const(8)
                      ),
                      n.i32_load8_u(
                        n.i32_and(
                          n.i32_shr_u(n.getLocal("x"), n.i32_const(24)),
                          n.i32_const(255)
                        ),
                        O,
                        0
                      )
                    )
                  ),
                  n.getLocal("bits")
                )
              );
            })(),
              (function () {
                const n = t.addFunction(e + "__reversePermutation");
                n.addParam("px", "i32"),
                  n.addParam("bits", "i32"),
                  n.addLocal("n", "i32"),
                  n.addLocal("i", "i32"),
                  n.addLocal("ri", "i32"),
                  n.addLocal("idx1", "i32"),
                  n.addLocal("idx2", "i32");
                const o = n.getCodeBuilder(),
                  a = o.i32_const(t.alloc(d));
                n.addCode(
                  o.setLocal(
                    "n",
                    o.i32_shl(o.i32_const(1), o.getLocal("bits"))
                  ),
                  o.setLocal("i", o.i32_const(0)),
                  o.block(
                    o.loop(
                      o.br_if(1, o.i32_eq(o.getLocal("i"), o.getLocal("n"))),
                      o.setLocal(
                        "idx1",
                        o.i32_add(
                          o.getLocal("px"),
                          o.i32_mul(o.getLocal("i"), o.i32_const(d))
                        )
                      ),
                      o.setLocal(
                        "ri",
                        o.call(e + "__rev", o.getLocal("i"), o.getLocal("bits"))
                      ),
                      o.setLocal(
                        "idx2",
                        o.i32_add(
                          o.getLocal("px"),
                          o.i32_mul(o.getLocal("ri"), o.i32_const(d))
                        )
                      ),
                      o.if(o.i32_lt_u(o.getLocal("i"), o.getLocal("ri")), [
                        ...o.call(i + "_copy", o.getLocal("idx1"), a),
                        ...o.call(
                          i + "_copy",
                          o.getLocal("idx2"),
                          o.getLocal("idx1")
                        ),
                        ...o.call(i + "_copy", a, o.getLocal("idx2")),
                      ]),
                      o.setLocal(
                        "i",
                        o.i32_add(o.getLocal("i"), o.i32_const(1))
                      ),
                      o.br(0)
                    )
                  )
                );
              })(),
              (function () {
                const n = t.addFunction(e + "__fftFinal");
                n.addParam("px", "i32"),
                  n.addParam("bits", "i32"),
                  n.addParam("reverse", "i32"),
                  n.addParam("mulFactor", "i32"),
                  n.addLocal("n", "i32"),
                  n.addLocal("ndiv2", "i32"),
                  n.addLocal("pInv2", "i32"),
                  n.addLocal("i", "i32"),
                  n.addLocal("mask", "i32"),
                  n.addLocal("idx1", "i32"),
                  n.addLocal("idx2", "i32");
                const o = n.getCodeBuilder(),
                  a = o.i32_const(t.alloc(d));
                n.addCode(
                  o.if(
                    o.i32_and(
                      o.i32_eqz(o.getLocal("reverse")),
                      o.call(r + "_isOne", o.getLocal("mulFactor"))
                    ),
                    o.ret([])
                  ),
                  o.setLocal(
                    "n",
                    o.i32_shl(o.i32_const(1), o.getLocal("bits"))
                  ),
                  o.setLocal(
                    "mask",
                    o.i32_sub(o.getLocal("n"), o.i32_const(1))
                  ),
                  o.setLocal("i", o.i32_const(1)),
                  o.setLocal(
                    "ndiv2",
                    o.i32_shr_u(o.getLocal("n"), o.i32_const(1))
                  ),
                  o.block(
                    o.loop(
                      o.br_if(
                        1,
                        o.i32_ge_u(o.getLocal("i"), o.getLocal("ndiv2"))
                      ),
                      o.setLocal(
                        "idx1",
                        o.i32_add(
                          o.getLocal("px"),
                          o.i32_mul(o.getLocal("i"), o.i32_const(d))
                        )
                      ),
                      o.setLocal(
                        "idx2",
                        o.i32_add(
                          o.getLocal("px"),
                          o.i32_mul(
                            o.i32_sub(o.getLocal("n"), o.getLocal("i")),
                            o.i32_const(d)
                          )
                        )
                      ),
                      o.if(
                        o.getLocal("reverse"),
                        o.if(
                          o.call(r + "_isOne", o.getLocal("mulFactor")),
                          [
                            ...o.call(i + "_copy", o.getLocal("idx1"), a),
                            ...o.call(
                              i + "_copy",
                              o.getLocal("idx2"),
                              o.getLocal("idx1")
                            ),
                            ...o.call(i + "_copy", a, o.getLocal("idx2")),
                          ],
                          [
                            ...o.call(i + "_copy", o.getLocal("idx1"), a),
                            ...o.call(
                              l,
                              o.getLocal("idx2"),
                              o.getLocal("mulFactor"),
                              o.getLocal("idx1")
                            ),
                            ...o.call(
                              l,
                              a,
                              o.getLocal("mulFactor"),
                              o.getLocal("idx2")
                            ),
                          ]
                        ),
                        o.if(
                          o.call(r + "_isOne", o.getLocal("mulFactor")),
                          [],
                          [
                            ...o.call(
                              l,
                              o.getLocal("idx1"),
                              o.getLocal("mulFactor"),
                              o.getLocal("idx1")
                            ),
                            ...o.call(
                              l,
                              o.getLocal("idx2"),
                              o.getLocal("mulFactor"),
                              o.getLocal("idx2")
                            ),
                          ]
                        )
                      ),
                      o.setLocal(
                        "i",
                        o.i32_add(o.getLocal("i"), o.i32_const(1))
                      ),
                      o.br(0)
                    )
                  ),
                  o.if(
                    o.call(r + "_isOne", o.getLocal("mulFactor")),
                    [],
                    [
                      ...o.call(
                        l,
                        o.getLocal("px"),
                        o.getLocal("mulFactor"),
                        o.getLocal("px")
                      ),
                      ...o.setLocal(
                        "idx2",
                        o.i32_add(
                          o.getLocal("px"),
                          o.i32_mul(o.getLocal("ndiv2"), o.i32_const(d))
                        )
                      ),
                      ...o.call(
                        l,
                        o.getLocal("idx2"),
                        o.getLocal("mulFactor"),
                        o.getLocal("idx2")
                      ),
                    ]
                  )
                );
              })(),
              (function () {
                const n = t.addFunction(e + "_rawfft");
                n.addParam("px", "i32"),
                  n.addParam("bits", "i32"),
                  n.addParam("reverse", "i32"),
                  n.addParam("mulFactor", "i32"),
                  n.addLocal("s", "i32"),
                  n.addLocal("k", "i32"),
                  n.addLocal("j", "i32"),
                  n.addLocal("m", "i32"),
                  n.addLocal("mdiv2", "i32"),
                  n.addLocal("n", "i32"),
                  n.addLocal("pwm", "i32"),
                  n.addLocal("idx1", "i32"),
                  n.addLocal("idx2", "i32");
                const o = n.getCodeBuilder(),
                  a = o.i32_const(t.alloc(c)),
                  s = o.i32_const(t.alloc(d)),
                  u = o.i32_const(t.alloc(d));
                n.addCode(
                  o.call(
                    e + "__reversePermutation",
                    o.getLocal("px"),
                    o.getLocal("bits")
                  ),
                  o.setLocal(
                    "n",
                    o.i32_shl(o.i32_const(1), o.getLocal("bits"))
                  ),
                  o.setLocal("s", o.i32_const(1)),
                  o.block(
                    o.loop(
                      o.br_if(
                        1,
                        o.i32_gt_u(o.getLocal("s"), o.getLocal("bits"))
                      ),
                      o.setLocal(
                        "m",
                        o.i32_shl(o.i32_const(1), o.getLocal("s"))
                      ),
                      o.setLocal(
                        "pwm",
                        o.i32_add(
                          o.i32_const(b),
                          o.i32_mul(o.getLocal("s"), o.i32_const(c))
                        )
                      ),
                      o.setLocal("k", o.i32_const(0)),
                      o.block(
                        o.loop(
                          o.br_if(
                            1,
                            o.i32_ge_u(o.getLocal("k"), o.getLocal("n"))
                          ),
                          o.call(r + "_one", a),
                          o.setLocal(
                            "mdiv2",
                            o.i32_shr_u(o.getLocal("m"), o.i32_const(1))
                          ),
                          o.setLocal("j", o.i32_const(0)),
                          o.block(
                            o.loop(
                              o.br_if(
                                1,
                                o.i32_ge_u(o.getLocal("j"), o.getLocal("mdiv2"))
                              ),
                              o.setLocal(
                                "idx1",
                                o.i32_add(
                                  o.getLocal("px"),
                                  o.i32_mul(
                                    o.i32_add(o.getLocal("k"), o.getLocal("j")),
                                    o.i32_const(d)
                                  )
                                )
                              ),
                              o.setLocal(
                                "idx2",
                                o.i32_add(
                                  o.getLocal("idx1"),
                                  o.i32_mul(o.getLocal("mdiv2"), o.i32_const(d))
                                )
                              ),
                              o.call(l, o.getLocal("idx2"), a, s),
                              o.call(i + "_copy", o.getLocal("idx1"), u),
                              o.call(i + "_add", u, s, o.getLocal("idx1")),
                              o.call(i + "_sub", u, s, o.getLocal("idx2")),
                              o.call(r + "_mul", a, o.getLocal("pwm"), a),
                              o.setLocal(
                                "j",
                                o.i32_add(o.getLocal("j"), o.i32_const(1))
                              ),
                              o.br(0)
                            )
                          ),
                          o.setLocal(
                            "k",
                            o.i32_add(o.getLocal("k"), o.getLocal("m"))
                          ),
                          o.br(0)
                        )
                      ),
                      o.setLocal(
                        "s",
                        o.i32_add(o.getLocal("s"), o.i32_const(1))
                      ),
                      o.br(0)
                    )
                  ),
                  o.call(
                    e + "__fftFinal",
                    o.getLocal("px"),
                    o.getLocal("bits"),
                    o.getLocal("reverse"),
                    o.getLocal("mulFactor")
                  )
                );
              })(),
              (function () {
                const i = t.addFunction(e + "__log2");
                i.addParam("n", "i32"),
                  i.setReturnType("i32"),
                  i.addLocal("bits", "i32"),
                  i.addLocal("aux", "i32");
                const n = i.getCodeBuilder();
                i.addCode(
                  n.setLocal(
                    "aux",
                    n.i32_shr_u(n.getLocal("n"), n.i32_const(1))
                  )
                ),
                  i.addCode(n.setLocal("bits", n.i32_const(0))),
                  i.addCode(
                    n.block(
                      n.loop(
                        n.br_if(1, n.i32_eqz(n.getLocal("aux"))),
                        n.setLocal(
                          "aux",
                          n.i32_shr_u(n.getLocal("aux"), n.i32_const(1))
                        ),
                        n.setLocal(
                          "bits",
                          n.i32_add(n.getLocal("bits"), n.i32_const(1))
                        ),
                        n.br(0)
                      )
                    )
                  ),
                  i.addCode(
                    n.if(
                      n.i32_ne(
                        n.getLocal("n"),
                        n.i32_shl(n.i32_const(1), n.getLocal("bits"))
                      ),
                      n.unreachable()
                    )
                  ),
                  i.addCode(
                    n.if(
                      n.i32_gt_u(n.getLocal("bits"), n.i32_const(f)),
                      n.unreachable()
                    )
                  ),
                  i.addCode(n.getLocal("bits"));
              })(),
              (function () {
                const i = t.addFunction(e + "_fft");
                i.addParam("px", "i32"),
                  i.addParam("n", "i32"),
                  i.addLocal("bits", "i32");
                const n = i.getCodeBuilder(),
                  o = n.i32_const(t.alloc(c));
                i.addCode(
                  n.setLocal("bits", n.call(e + "__log2", n.getLocal("n"))),
                  n.call(r + "_one", o),
                  n.call(
                    e + "_rawfft",
                    n.getLocal("px"),
                    n.getLocal("bits"),
                    n.i32_const(0),
                    o
                  )
                );
              })(),
              (function () {
                const i = t.addFunction(e + "_ifft");
                i.addParam("px", "i32"),
                  i.addParam("n", "i32"),
                  i.addLocal("bits", "i32"),
                  i.addLocal("pInv2", "i32");
                const n = i.getCodeBuilder();
                i.addCode(
                  n.setLocal("bits", n.call(e + "__log2", n.getLocal("n"))),
                  n.setLocal(
                    "pInv2",
                    n.i32_add(
                      n.i32_const(x),
                      n.i32_mul(n.getLocal("bits"), n.i32_const(c))
                    )
                  ),
                  n.call(
                    e + "_rawfft",
                    n.getLocal("px"),
                    n.getLocal("bits"),
                    n.i32_const(1),
                    n.getLocal("pInv2")
                  )
                );
              })(),
              (function () {
                const n = t.addFunction(e + "_fftJoin");
                n.addParam("pBuff1", "i32"),
                  n.addParam("pBuff2", "i32"),
                  n.addParam("n", "i32"),
                  n.addParam("first", "i32"),
                  n.addParam("inc", "i32"),
                  n.addLocal("idx1", "i32"),
                  n.addLocal("idx2", "i32"),
                  n.addLocal("i", "i32");
                const o = n.getCodeBuilder(),
                  a = o.i32_const(t.alloc(c)),
                  s = o.i32_const(t.alloc(d)),
                  u = o.i32_const(t.alloc(d));
                n.addCode(
                  o.call(r + "_copy", o.getLocal("first"), a),
                  o.setLocal("i", o.i32_const(0)),
                  o.block(
                    o.loop(
                      o.br_if(1, o.i32_eq(o.getLocal("i"), o.getLocal("n"))),
                      o.setLocal(
                        "idx1",
                        o.i32_add(
                          o.getLocal("pBuff1"),
                          o.i32_mul(o.getLocal("i"), o.i32_const(d))
                        )
                      ),
                      o.setLocal(
                        "idx2",
                        o.i32_add(
                          o.getLocal("pBuff2"),
                          o.i32_mul(o.getLocal("i"), o.i32_const(d))
                        )
                      ),
                      o.call(l, o.getLocal("idx2"), a, s),
                      o.call(i + "_copy", o.getLocal("idx1"), u),
                      o.call(i + "_add", u, s, o.getLocal("idx1")),
                      o.call(i + "_sub", u, s, o.getLocal("idx2")),
                      o.call(r + "_mul", a, o.getLocal("inc"), a),
                      o.setLocal(
                        "i",
                        o.i32_add(o.getLocal("i"), o.i32_const(1))
                      ),
                      o.br(0)
                    )
                  )
                );
              })(),
              (function () {
                const n = t.addFunction(e + "_fftJoinExt");
                n.addParam("pBuff1", "i32"),
                  n.addParam("pBuff2", "i32"),
                  n.addParam("n", "i32"),
                  n.addParam("first", "i32"),
                  n.addParam("inc", "i32"),
                  n.addParam("totalBits", "i32"),
                  n.addLocal("idx1", "i32"),
                  n.addLocal("idx2", "i32"),
                  n.addLocal("i", "i32"),
                  n.addLocal("pShiftToM", "i32");
                const o = n.getCodeBuilder(),
                  a = o.i32_const(t.alloc(c)),
                  s = o.i32_const(t.alloc(d));
                n.addCode(
                  o.setLocal(
                    "pShiftToM",
                    o.i32_add(
                      o.i32_const(E),
                      o.i32_mul(o.getLocal("totalBits"), o.i32_const(c))
                    )
                  ),
                  o.call(r + "_copy", o.getLocal("first"), a),
                  o.setLocal("i", o.i32_const(0)),
                  o.block(
                    o.loop(
                      o.br_if(1, o.i32_eq(o.getLocal("i"), o.getLocal("n"))),
                      o.setLocal(
                        "idx1",
                        o.i32_add(
                          o.getLocal("pBuff1"),
                          o.i32_mul(o.getLocal("i"), o.i32_const(d))
                        )
                      ),
                      o.setLocal(
                        "idx2",
                        o.i32_add(
                          o.getLocal("pBuff2"),
                          o.i32_mul(o.getLocal("i"), o.i32_const(d))
                        )
                      ),
                      o.call(
                        i + "_add",
                        o.getLocal("idx1"),
                        o.getLocal("idx2"),
                        s
                      ),
                      o.call(
                        l,
                        o.getLocal("idx2"),
                        o.getLocal("pShiftToM"),
                        o.getLocal("idx2")
                      ),
                      o.call(
                        i + "_add",
                        o.getLocal("idx1"),
                        o.getLocal("idx2"),
                        o.getLocal("idx2")
                      ),
                      o.call(l, o.getLocal("idx2"), a, o.getLocal("idx2")),
                      o.call(i + "_copy", s, o.getLocal("idx1")),
                      o.call(r + "_mul", a, o.getLocal("inc"), a),
                      o.setLocal(
                        "i",
                        o.i32_add(o.getLocal("i"), o.i32_const(1))
                      ),
                      o.br(0)
                    )
                  )
                );
              })(),
              (function () {
                const n = t.addFunction(e + "_fftJoinExtInv");
                n.addParam("pBuff1", "i32"),
                  n.addParam("pBuff2", "i32"),
                  n.addParam("n", "i32"),
                  n.addParam("first", "i32"),
                  n.addParam("inc", "i32"),
                  n.addParam("totalBits", "i32"),
                  n.addLocal("idx1", "i32"),
                  n.addLocal("idx2", "i32"),
                  n.addLocal("i", "i32"),
                  n.addLocal("pShiftToM", "i32"),
                  n.addLocal("pSConst", "i32");
                const o = n.getCodeBuilder(),
                  a = o.i32_const(t.alloc(c)),
                  s = o.i32_const(t.alloc(d));
                n.addCode(
                  o.setLocal(
                    "pShiftToM",
                    o.i32_add(
                      o.i32_const(E),
                      o.i32_mul(o.getLocal("totalBits"), o.i32_const(c))
                    )
                  ),
                  o.setLocal(
                    "pSConst",
                    o.i32_add(
                      o.i32_const(C),
                      o.i32_mul(o.getLocal("totalBits"), o.i32_const(c))
                    )
                  ),
                  o.call(r + "_copy", o.getLocal("first"), a),
                  o.setLocal("i", o.i32_const(0)),
                  o.block(
                    o.loop(
                      o.br_if(1, o.i32_eq(o.getLocal("i"), o.getLocal("n"))),
                      o.setLocal(
                        "idx1",
                        o.i32_add(
                          o.getLocal("pBuff1"),
                          o.i32_mul(o.getLocal("i"), o.i32_const(d))
                        )
                      ),
                      o.setLocal(
                        "idx2",
                        o.i32_add(
                          o.getLocal("pBuff2"),
                          o.i32_mul(o.getLocal("i"), o.i32_const(d))
                        )
                      ),
                      o.call(l, o.getLocal("idx2"), a, s),
                      o.call(
                        i + "_sub",
                        o.getLocal("idx1"),
                        s,
                        o.getLocal("idx2")
                      ),
                      o.call(
                        l,
                        o.getLocal("idx2"),
                        o.getLocal("pSConst"),
                        o.getLocal("idx2")
                      ),
                      o.call(
                        l,
                        o.getLocal("idx1"),
                        o.getLocal("pShiftToM"),
                        o.getLocal("idx1")
                      ),
                      o.call(
                        i + "_sub",
                        s,
                        o.getLocal("idx1"),
                        o.getLocal("idx1")
                      ),
                      o.call(
                        l,
                        o.getLocal("idx1"),
                        o.getLocal("pSConst"),
                        o.getLocal("idx1")
                      ),
                      o.call(r + "_mul", a, o.getLocal("inc"), a),
                      o.setLocal(
                        "i",
                        o.i32_add(o.getLocal("i"), o.i32_const(1))
                      ),
                      o.br(0)
                    )
                  )
                );
              })(),
              (function () {
                const n = t.addFunction(e + "_fftMix");
                n.addParam("pBuff", "i32"),
                  n.addParam("n", "i32"),
                  n.addParam("exp", "i32"),
                  n.addLocal("nGroups", "i32"),
                  n.addLocal("nPerGroup", "i32"),
                  n.addLocal("nPerGroupDiv2", "i32"),
                  n.addLocal("pairOffset", "i32"),
                  n.addLocal("idx1", "i32"),
                  n.addLocal("idx2", "i32"),
                  n.addLocal("i", "i32"),
                  n.addLocal("j", "i32"),
                  n.addLocal("pwm", "i32");
                const o = n.getCodeBuilder(),
                  a = o.i32_const(t.alloc(c)),
                  s = o.i32_const(t.alloc(d)),
                  u = o.i32_const(t.alloc(d));
                n.addCode(
                  o.setLocal(
                    "nPerGroup",
                    o.i32_shl(o.i32_const(1), o.getLocal("exp"))
                  ),
                  o.setLocal(
                    "nPerGroupDiv2",
                    o.i32_shr_u(o.getLocal("nPerGroup"), o.i32_const(1))
                  ),
                  o.setLocal(
                    "nGroups",
                    o.i32_shr_u(o.getLocal("n"), o.getLocal("exp"))
                  ),
                  o.setLocal(
                    "pairOffset",
                    o.i32_mul(o.getLocal("nPerGroupDiv2"), o.i32_const(d))
                  ),
                  o.setLocal(
                    "pwm",
                    o.i32_add(
                      o.i32_const(b),
                      o.i32_mul(o.getLocal("exp"), o.i32_const(c))
                    )
                  ),
                  o.setLocal("i", o.i32_const(0)),
                  o.block(
                    o.loop(
                      o.br_if(
                        1,
                        o.i32_eq(o.getLocal("i"), o.getLocal("nGroups"))
                      ),
                      o.call(r + "_one", a),
                      o.setLocal("j", o.i32_const(0)),
                      o.block(
                        o.loop(
                          o.br_if(
                            1,
                            o.i32_eq(
                              o.getLocal("j"),
                              o.getLocal("nPerGroupDiv2")
                            )
                          ),
                          o.setLocal(
                            "idx1",
                            o.i32_add(
                              o.getLocal("pBuff"),
                              o.i32_mul(
                                o.i32_add(
                                  o.i32_mul(
                                    o.getLocal("i"),
                                    o.getLocal("nPerGroup")
                                  ),
                                  o.getLocal("j")
                                ),
                                o.i32_const(d)
                              )
                            )
                          ),
                          o.setLocal(
                            "idx2",
                            o.i32_add(
                              o.getLocal("idx1"),
                              o.getLocal("pairOffset")
                            )
                          ),
                          o.call(l, o.getLocal("idx2"), a, s),
                          o.call(i + "_copy", o.getLocal("idx1"), u),
                          o.call(i + "_add", u, s, o.getLocal("idx1")),
                          o.call(i + "_sub", u, s, o.getLocal("idx2")),
                          o.call(r + "_mul", a, o.getLocal("pwm"), a),
                          o.setLocal(
                            "j",
                            o.i32_add(o.getLocal("j"), o.i32_const(1))
                          ),
                          o.br(0)
                        )
                      ),
                      o.setLocal(
                        "i",
                        o.i32_add(o.getLocal("i"), o.i32_const(1))
                      ),
                      o.br(0)
                    )
                  )
                );
              })(),
              (function () {
                const n = t.addFunction(e + "_fftFinal");
                n.addParam("pBuff", "i32"),
                  n.addParam("n", "i32"),
                  n.addParam("factor", "i32"),
                  n.addLocal("idx1", "i32"),
                  n.addLocal("idx2", "i32"),
                  n.addLocal("i", "i32"),
                  n.addLocal("ndiv2", "i32");
                const o = n.getCodeBuilder(),
                  a = o.i32_const(t.alloc(d));
                n.addCode(
                  o.setLocal(
                    "ndiv2",
                    o.i32_shr_u(o.getLocal("n"), o.i32_const(1))
                  ),
                  o.if(
                    o.i32_and(o.getLocal("n"), o.i32_const(1)),
                    o.call(
                      l,
                      o.i32_add(
                        o.getLocal("pBuff"),
                        o.i32_mul(o.getLocal("ndiv2"), o.i32_const(d))
                      ),
                      o.getLocal("factor"),
                      o.i32_add(
                        o.getLocal("pBuff"),
                        o.i32_mul(o.getLocal("ndiv2"), o.i32_const(d))
                      )
                    )
                  ),
                  o.setLocal("i", o.i32_const(0)),
                  o.block(
                    o.loop(
                      o.br_if(
                        1,
                        o.i32_ge_u(o.getLocal("i"), o.getLocal("ndiv2"))
                      ),
                      o.setLocal(
                        "idx1",
                        o.i32_add(
                          o.getLocal("pBuff"),
                          o.i32_mul(o.getLocal("i"), o.i32_const(d))
                        )
                      ),
                      o.setLocal(
                        "idx2",
                        o.i32_add(
                          o.getLocal("pBuff"),
                          o.i32_mul(
                            o.i32_sub(
                              o.i32_sub(o.getLocal("n"), o.i32_const(1)),
                              o.getLocal("i")
                            ),
                            o.i32_const(d)
                          )
                        )
                      ),
                      o.call(l, o.getLocal("idx2"), o.getLocal("factor"), a),
                      o.call(
                        l,
                        o.getLocal("idx1"),
                        o.getLocal("factor"),
                        o.getLocal("idx2")
                      ),
                      o.call(i + "_copy", a, o.getLocal("idx1")),
                      o.setLocal(
                        "i",
                        o.i32_add(o.getLocal("i"), o.i32_const(1))
                      ),
                      o.br(0)
                    )
                  )
                );
              })(),
              (function () {
                const n = t.addFunction(e + "_prepareLagrangeEvaluation");
                n.addParam("pBuff1", "i32"),
                  n.addParam("pBuff2", "i32"),
                  n.addParam("n", "i32"),
                  n.addParam("first", "i32"),
                  n.addParam("inc", "i32"),
                  n.addParam("totalBits", "i32"),
                  n.addLocal("idx1", "i32"),
                  n.addLocal("idx2", "i32"),
                  n.addLocal("i", "i32"),
                  n.addLocal("pShiftToM", "i32"),
                  n.addLocal("pSConst", "i32");
                const o = n.getCodeBuilder(),
                  a = o.i32_const(t.alloc(c)),
                  s = o.i32_const(t.alloc(d));
                n.addCode(
                  o.setLocal(
                    "pShiftToM",
                    o.i32_add(
                      o.i32_const(E),
                      o.i32_mul(o.getLocal("totalBits"), o.i32_const(c))
                    )
                  ),
                  o.setLocal(
                    "pSConst",
                    o.i32_add(
                      o.i32_const(C),
                      o.i32_mul(o.getLocal("totalBits"), o.i32_const(c))
                    )
                  ),
                  o.call(r + "_copy", o.getLocal("first"), a),
                  o.setLocal("i", o.i32_const(0)),
                  o.block(
                    o.loop(
                      o.br_if(1, o.i32_eq(o.getLocal("i"), o.getLocal("n"))),
                      o.setLocal(
                        "idx1",
                        o.i32_add(
                          o.getLocal("pBuff1"),
                          o.i32_mul(o.getLocal("i"), o.i32_const(d))
                        )
                      ),
                      o.setLocal(
                        "idx2",
                        o.i32_add(
                          o.getLocal("pBuff2"),
                          o.i32_mul(o.getLocal("i"), o.i32_const(d))
                        )
                      ),
                      o.call(l, o.getLocal("idx1"), o.getLocal("pShiftToM"), s),
                      o.call(i + "_sub", o.getLocal("idx2"), s, s),
                      o.call(
                        i + "_sub",
                        o.getLocal("idx1"),
                        o.getLocal("idx2"),
                        o.getLocal("idx2")
                      ),
                      o.call(l, s, o.getLocal("pSConst"), o.getLocal("idx1")),
                      o.call(l, o.getLocal("idx2"), a, o.getLocal("idx2")),
                      o.call(r + "_mul", a, o.getLocal("inc"), a),
                      o.setLocal(
                        "i",
                        o.i32_add(o.getLocal("i"), o.i32_const(1))
                      ),
                      o.br(0)
                    )
                  )
                );
              })(),
              t.exportFunction(e + "_fft"),
              t.exportFunction(e + "_ifft"),
              t.exportFunction(e + "_rawfft"),
              t.exportFunction(e + "_fftJoin"),
              t.exportFunction(e + "_fftJoinExt"),
              t.exportFunction(e + "_fftJoinExtInv"),
              t.exportFunction(e + "_fftMix"),
              t.exportFunction(e + "_fftFinal"),
              t.exportFunction(e + "_prepareLagrangeEvaluation");
          };
        },
        754: (t) => {
          t.exports = function (t, e, i) {
            const n = i || "int";
            if (t.modules[n]) return n;
            t.modules[n] = {};
            const o = 2 * e,
              a = 8 * e;
            return (
              (function () {
                const i = t.addFunction(n + "_copy");
                i.addParam("px", "i32"), i.addParam("pr", "i32");
                const o = i.getCodeBuilder();
                for (let t = 0; t < e; t++)
                  i.addCode(
                    o.i64_store(
                      o.getLocal("pr"),
                      8 * t,
                      o.i64_load(o.getLocal("px"), 8 * t)
                    )
                  );
              })(),
              (function () {
                const i = t.addFunction(n + "_zero");
                i.addParam("pr", "i32");
                const o = i.getCodeBuilder();
                for (let t = 0; t < e; t++)
                  i.addCode(
                    o.i64_store(o.getLocal("pr"), 8 * t, o.i64_const(0))
                  );
              })(),
              (function () {
                const i = t.addFunction(n + "_isZero");
                i.addParam("px", "i32"), i.setReturnType("i32");
                const o = i.getCodeBuilder();
                i.addCode(
                  (function t(e) {
                    return 0 == e
                      ? o.ret(o.i64_eqz(o.i64_load(o.getLocal("px"))))
                      : o.if(
                          o.i64_eqz(o.i64_load(o.getLocal("px"), 8 * e)),
                          t(e - 1),
                          o.ret(o.i32_const(0))
                        );
                  })(e - 1)
                ),
                  i.addCode(o.ret(o.i32_const(0)));
              })(),
              (function () {
                const i = t.addFunction(n + "_one");
                i.addParam("pr", "i32");
                const o = i.getCodeBuilder();
                i.addCode(o.i64_store(o.getLocal("pr"), 0, o.i64_const(1)));
                for (let t = 1; t < e; t++)
                  i.addCode(
                    o.i64_store(o.getLocal("pr"), 8 * t, o.i64_const(0))
                  );
              })(),
              (function () {
                const i = t.addFunction(n + "_eq");
                i.addParam("px", "i32"),
                  i.addParam("py", "i32"),
                  i.setReturnType("i32");
                const o = i.getCodeBuilder();
                i.addCode(
                  (function t(e) {
                    return 0 == e
                      ? o.ret(
                          o.i64_eq(
                            o.i64_load(o.getLocal("px")),
                            o.i64_load(o.getLocal("py"))
                          )
                        )
                      : o.if(
                          o.i64_eq(
                            o.i64_load(o.getLocal("px"), 8 * e),
                            o.i64_load(o.getLocal("py"), 8 * e)
                          ),
                          t(e - 1),
                          o.ret(o.i32_const(0))
                        );
                  })(e - 1)
                ),
                  i.addCode(o.ret(o.i32_const(0)));
              })(),
              (function () {
                const i = t.addFunction(n + "_gte");
                i.addParam("px", "i32"),
                  i.addParam("py", "i32"),
                  i.setReturnType("i32");
                const o = i.getCodeBuilder();
                i.addCode(
                  (function t(e) {
                    return 0 == e
                      ? o.ret(
                          o.i64_ge_u(
                            o.i64_load(o.getLocal("px")),
                            o.i64_load(o.getLocal("py"))
                          )
                        )
                      : o.if(
                          o.i64_lt_u(
                            o.i64_load(o.getLocal("px"), 8 * e),
                            o.i64_load(o.getLocal("py"), 8 * e)
                          ),
                          o.ret(o.i32_const(0)),
                          o.if(
                            o.i64_gt_u(
                              o.i64_load(o.getLocal("px"), 8 * e),
                              o.i64_load(o.getLocal("py"), 8 * e)
                            ),
                            o.ret(o.i32_const(1)),
                            t(e - 1)
                          )
                        );
                  })(e - 1)
                ),
                  i.addCode(o.ret(o.i32_const(0)));
              })(),
              (function () {
                const e = t.addFunction(n + "_add");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.addParam("r", "i32"),
                  e.setReturnType("i32"),
                  e.addLocal("c", "i64");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.setLocal(
                    "c",
                    i.i64_add(
                      i.i64_load32_u(i.getLocal("x")),
                      i.i64_load32_u(i.getLocal("y"))
                    )
                  )
                ),
                  e.addCode(i.i64_store32(i.getLocal("r"), i.getLocal("c")));
                for (let t = 1; t < o; t++)
                  e.addCode(
                    i.setLocal(
                      "c",
                      i.i64_add(
                        i.i64_add(
                          i.i64_load32_u(i.getLocal("x"), 4 * t),
                          i.i64_load32_u(i.getLocal("y"), 4 * t)
                        ),
                        i.i64_shr_u(i.getLocal("c"), i.i64_const(32))
                      )
                    )
                  ),
                    e.addCode(
                      i.i64_store32(i.getLocal("r"), 4 * t, i.getLocal("c"))
                    );
                e.addCode(
                  i.i32_wrap_i64(i.i64_shr_u(i.getLocal("c"), i.i64_const(32)))
                );
              })(),
              (function () {
                const e = t.addFunction(n + "_sub");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.addParam("r", "i32"),
                  e.setReturnType("i32"),
                  e.addLocal("c", "i64");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.setLocal(
                    "c",
                    i.i64_sub(
                      i.i64_load32_u(i.getLocal("x")),
                      i.i64_load32_u(i.getLocal("y"))
                    )
                  )
                ),
                  e.addCode(
                    i.i64_store32(
                      i.getLocal("r"),
                      i.i64_and(i.getLocal("c"), i.i64_const("0xFFFFFFFF"))
                    )
                  );
                for (let t = 1; t < o; t++)
                  e.addCode(
                    i.setLocal(
                      "c",
                      i.i64_add(
                        i.i64_sub(
                          i.i64_load32_u(i.getLocal("x"), 4 * t),
                          i.i64_load32_u(i.getLocal("y"), 4 * t)
                        ),
                        i.i64_shr_s(i.getLocal("c"), i.i64_const(32))
                      )
                    )
                  ),
                    e.addCode(
                      i.i64_store32(
                        i.getLocal("r"),
                        4 * t,
                        i.i64_and(i.getLocal("c"), i.i64_const("0xFFFFFFFF"))
                      )
                    );
                e.addCode(
                  i.i32_wrap_i64(i.i64_shr_s(i.getLocal("c"), i.i64_const(32)))
                );
              })(),
              (function () {
                const e = t.addFunction(n + "_mul");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.addParam("r", "i32"),
                  e.addLocal("c0", "i64"),
                  e.addLocal("c1", "i64");
                for (let t = 0; t < o; t++)
                  e.addLocal("x" + t, "i64"), e.addLocal("y" + t, "i64");
                const i = e.getCodeBuilder(),
                  a = [],
                  s = [];
                function r(t, e) {
                  let n, o;
                  return (
                    a[t]
                      ? (n = i.getLocal("x" + t))
                      : ((n = i.teeLocal(
                          "x" + t,
                          i.i64_load32_u(i.getLocal("x"), 4 * t)
                        )),
                        (a[t] = !0)),
                    s[e]
                      ? (o = i.getLocal("y" + e))
                      : ((o = i.teeLocal(
                          "y" + e,
                          i.i64_load32_u(i.getLocal("y"), 4 * e)
                        )),
                        (s[e] = !0)),
                    i.i64_mul(n, o)
                  );
                }
                let l = "c0",
                  c = "c1";
                for (let t = 0; t < 2 * o - 1; t++) {
                  for (let n = Math.max(0, t - o + 1); n <= t && n < o; n++) {
                    const o = t - n;
                    e.addCode(
                      i.setLocal(
                        l,
                        i.i64_add(
                          i.i64_and(i.getLocal(l), i.i64_const(4294967295)),
                          r(n, o)
                        )
                      )
                    ),
                      e.addCode(
                        i.setLocal(
                          c,
                          i.i64_add(
                            i.getLocal(c),
                            i.i64_shr_u(i.getLocal(l), i.i64_const(32))
                          )
                        )
                      );
                  }
                  e.addCode(
                    i.i64_store32(i.getLocal("r"), 4 * t, i.getLocal(l))
                  ),
                    ([l, c] = [c, l]),
                    e.addCode(
                      i.setLocal(c, i.i64_shr_u(i.getLocal(l), i.i64_const(32)))
                    );
                }
                e.addCode(
                  i.i64_store32(i.getLocal("r"), 4 * o * 2 - 4, i.getLocal(l))
                );
              })(),
              (function () {
                const e = t.addFunction(n + "_square");
                e.addParam("x", "i32"),
                  e.addParam("r", "i32"),
                  e.addLocal("c0", "i64"),
                  e.addLocal("c1", "i64"),
                  e.addLocal("c0_old", "i64"),
                  e.addLocal("c1_old", "i64");
                for (let t = 0; t < o; t++) e.addLocal("x" + t, "i64");
                const i = e.getCodeBuilder(),
                  a = [];
                function s(t, e) {
                  let n, o;
                  return (
                    a[t]
                      ? (n = i.getLocal("x" + t))
                      : ((n = i.teeLocal(
                          "x" + t,
                          i.i64_load32_u(i.getLocal("x"), 4 * t)
                        )),
                        (a[t] = !0)),
                    a[e]
                      ? (o = i.getLocal("x" + e))
                      : ((o = i.teeLocal(
                          "x" + e,
                          i.i64_load32_u(i.getLocal("x"), 4 * e)
                        )),
                        (a[e] = !0)),
                    i.i64_mul(n, o)
                  );
                }
                let r = "c0",
                  l = "c1",
                  c = "c0_old",
                  d = "c1_old";
                for (let t = 0; t < 2 * o - 1; t++) {
                  e.addCode(
                    i.setLocal(r, i.i64_const(0)),
                    i.setLocal(l, i.i64_const(0))
                  );
                  for (
                    let n = Math.max(0, t - o + 1);
                    n < (t + 1) >> 1 && n < o;
                    n++
                  ) {
                    const o = t - n;
                    e.addCode(
                      i.setLocal(
                        r,
                        i.i64_add(
                          i.i64_and(i.getLocal(r), i.i64_const(4294967295)),
                          s(n, o)
                        )
                      )
                    ),
                      e.addCode(
                        i.setLocal(
                          l,
                          i.i64_add(
                            i.getLocal(l),
                            i.i64_shr_u(i.getLocal(r), i.i64_const(32))
                          )
                        )
                      );
                  }
                  e.addCode(
                    i.setLocal(
                      r,
                      i.i64_shl(
                        i.i64_and(i.getLocal(r), i.i64_const(4294967295)),
                        i.i64_const(1)
                      )
                    )
                  ),
                    e.addCode(
                      i.setLocal(
                        l,
                        i.i64_add(
                          i.i64_shl(i.getLocal(l), i.i64_const(1)),
                          i.i64_shr_u(i.getLocal(r), i.i64_const(32))
                        )
                      )
                    ),
                    t % 2 == 0 &&
                      (e.addCode(
                        i.setLocal(
                          r,
                          i.i64_add(
                            i.i64_and(i.getLocal(r), i.i64_const(4294967295)),
                            s(t >> 1, t >> 1)
                          )
                        )
                      ),
                      e.addCode(
                        i.setLocal(
                          l,
                          i.i64_add(
                            i.getLocal(l),
                            i.i64_shr_u(i.getLocal(r), i.i64_const(32))
                          )
                        )
                      )),
                    t > 0 &&
                      (e.addCode(
                        i.setLocal(
                          r,
                          i.i64_add(
                            i.i64_and(i.getLocal(r), i.i64_const(4294967295)),
                            i.i64_and(i.getLocal(c), i.i64_const(4294967295))
                          )
                        )
                      ),
                      e.addCode(
                        i.setLocal(
                          l,
                          i.i64_add(
                            i.i64_add(
                              i.getLocal(l),
                              i.i64_shr_u(i.getLocal(r), i.i64_const(32))
                            ),
                            i.getLocal(d)
                          )
                        )
                      )),
                    e.addCode(
                      i.i64_store32(i.getLocal("r"), 4 * t, i.getLocal(r))
                    ),
                    e.addCode(
                      i.setLocal(c, i.getLocal(l)),
                      i.setLocal(d, i.i64_shr_u(i.getLocal(c), i.i64_const(32)))
                    );
                }
                e.addCode(
                  i.i64_store32(i.getLocal("r"), 4 * o * 2 - 4, i.getLocal(c))
                );
              })(),
              (function () {
                const e = t.addFunction(n + "_squareOld");
                e.addParam("x", "i32"), e.addParam("r", "i32");
                const i = e.getCodeBuilder();
                e.addCode(
                  i.call(
                    n + "_mul",
                    i.getLocal("x"),
                    i.getLocal("x"),
                    i.getLocal("r")
                  )
                );
              })(),
              (function () {
                !(function () {
                  const e = t.addFunction(n + "__mul1");
                  e.addParam("px", "i32"),
                    e.addParam("y", "i64"),
                    e.addParam("pr", "i32"),
                    e.addLocal("c", "i64");
                  const i = e.getCodeBuilder();
                  e.addCode(
                    i.setLocal(
                      "c",
                      i.i64_mul(
                        i.i64_load32_u(i.getLocal("px"), 0, 0),
                        i.getLocal("y")
                      )
                    )
                  ),
                    e.addCode(
                      i.i64_store32(i.getLocal("pr"), 0, 0, i.getLocal("c"))
                    );
                  for (let t = 1; t < o; t++)
                    e.addCode(
                      i.setLocal(
                        "c",
                        i.i64_add(
                          i.i64_mul(
                            i.i64_load32_u(i.getLocal("px"), 4 * t, 0),
                            i.getLocal("y")
                          ),
                          i.i64_shr_u(i.getLocal("c"), i.i64_const(32))
                        )
                      )
                    ),
                      e.addCode(
                        i.i64_store32(
                          i.getLocal("pr"),
                          4 * t,
                          0,
                          i.getLocal("c")
                        )
                      );
                })(),
                  (function () {
                    const e = t.addFunction(n + "__add1");
                    e.addParam("x", "i32"),
                      e.addParam("y", "i64"),
                      e.addLocal("c", "i64"),
                      e.addLocal("px", "i32");
                    const i = e.getCodeBuilder();
                    e.addCode(i.setLocal("px", i.getLocal("x"))),
                      e.addCode(
                        i.setLocal(
                          "c",
                          i.i64_add(
                            i.i64_load32_u(i.getLocal("px"), 0, 0),
                            i.getLocal("y")
                          )
                        )
                      ),
                      e.addCode(
                        i.i64_store32(i.getLocal("px"), 0, 0, i.getLocal("c"))
                      ),
                      e.addCode(
                        i.setLocal(
                          "c",
                          i.i64_shr_u(i.getLocal("c"), i.i64_const(32))
                        )
                      ),
                      e.addCode(
                        i.block(
                          i.loop(
                            i.br_if(1, i.i64_eqz(i.getLocal("c"))),
                            i.setLocal(
                              "px",
                              i.i32_add(i.getLocal("px"), i.i32_const(4))
                            ),
                            i.setLocal(
                              "c",
                              i.i64_add(
                                i.i64_load32_u(i.getLocal("px"), 0, 0),
                                i.getLocal("c")
                              )
                            ),
                            i.i64_store32(
                              i.getLocal("px"),
                              0,
                              0,
                              i.getLocal("c")
                            ),
                            i.setLocal(
                              "c",
                              i.i64_shr_u(i.getLocal("c"), i.i64_const(32))
                            ),
                            i.br(0)
                          )
                        )
                      );
                  })();
                const e = t.addFunction(n + "_div");
                e.addParam("x", "i32"),
                  e.addParam("y", "i32"),
                  e.addParam("c", "i32"),
                  e.addParam("r", "i32"),
                  e.addLocal("rr", "i32"),
                  e.addLocal("cc", "i32"),
                  e.addLocal("eX", "i32"),
                  e.addLocal("eY", "i32"),
                  e.addLocal("sy", "i64"),
                  e.addLocal("sx", "i64"),
                  e.addLocal("ec", "i32");
                const i = e.getCodeBuilder(),
                  s = i.i32_const(t.alloc(a)),
                  r = i.i32_const(t.alloc(a)),
                  l = i.i32_const(t.alloc(a)),
                  c = i.getLocal("cc"),
                  d = i.getLocal("rr"),
                  u = t.alloc(2 * a),
                  h = i.i32_const(u),
                  f = i.i32_const(u + a);
                e.addCode(
                  i.if(
                    i.getLocal("c"),
                    i.setLocal("cc", i.getLocal("c")),
                    i.setLocal("cc", r)
                  )
                ),
                  e.addCode(
                    i.if(
                      i.getLocal("r"),
                      i.setLocal("rr", i.getLocal("r")),
                      i.setLocal("rr", l)
                    )
                  ),
                  e.addCode(i.call(n + "_copy", i.getLocal("x"), d)),
                  e.addCode(i.call(n + "_copy", i.getLocal("y"), s)),
                  e.addCode(i.call(n + "_zero", c)),
                  e.addCode(i.call(n + "_zero", h)),
                  e.addCode(i.setLocal("eX", i.i32_const(a - 1))),
                  e.addCode(i.setLocal("eY", i.i32_const(a - 1))),
                  e.addCode(
                    i.block(
                      i.loop(
                        i.br_if(
                          1,
                          i.i32_or(
                            i.i32_load8_u(i.i32_add(s, i.getLocal("eY")), 0, 0),
                            i.i32_eq(i.getLocal("eY"), i.i32_const(3))
                          )
                        ),
                        i.setLocal(
                          "eY",
                          i.i32_sub(i.getLocal("eY"), i.i32_const(1))
                        ),
                        i.br(0)
                      )
                    )
                  ),
                  e.addCode(
                    i.setLocal(
                      "sy",
                      i.i64_add(
                        i.i64_load32_u(
                          i.i32_sub(
                            i.i32_add(s, i.getLocal("eY")),
                            i.i32_const(3)
                          ),
                          0,
                          0
                        ),
                        i.i64_const(1)
                      )
                    )
                  ),
                  e.addCode(
                    i.if(
                      i.i64_eq(i.getLocal("sy"), i.i64_const(1)),
                      i.drop(i.i64_div_u(i.i64_const(0), i.i64_const(0)))
                    )
                  ),
                  e.addCode(
                    i.block(
                      i.loop(
                        i.block(
                          i.loop(
                            i.br_if(
                              1,
                              i.i32_or(
                                i.i32_load8_u(
                                  i.i32_add(d, i.getLocal("eX")),
                                  0,
                                  0
                                ),
                                i.i32_eq(i.getLocal("eX"), i.i32_const(7))
                              )
                            ),
                            i.setLocal(
                              "eX",
                              i.i32_sub(i.getLocal("eX"), i.i32_const(1))
                            ),
                            i.br(0)
                          )
                        ),
                        i.setLocal(
                          "sx",
                          i.i64_load(
                            i.i32_sub(
                              i.i32_add(d, i.getLocal("eX")),
                              i.i32_const(7)
                            ),
                            0,
                            0
                          )
                        ),
                        i.setLocal(
                          "sx",
                          i.i64_div_u(i.getLocal("sx"), i.getLocal("sy"))
                        ),
                        i.setLocal(
                          "ec",
                          i.i32_sub(
                            i.i32_sub(i.getLocal("eX"), i.getLocal("eY")),
                            i.i32_const(4)
                          )
                        ),
                        i.block(
                          i.loop(
                            i.br_if(
                              1,
                              i.i32_and(
                                i.i64_eqz(
                                  i.i64_and(
                                    i.getLocal("sx"),
                                    i.i64_const("0xFFFFFFFF00000000")
                                  )
                                ),
                                i.i32_ge_s(i.getLocal("ec"), i.i32_const(0))
                              )
                            ),
                            i.setLocal(
                              "sx",
                              i.i64_shr_u(i.getLocal("sx"), i.i64_const(8))
                            ),
                            i.setLocal(
                              "ec",
                              i.i32_add(i.getLocal("ec"), i.i32_const(1))
                            ),
                            i.br(0)
                          )
                        ),
                        i.if(i.i64_eqz(i.getLocal("sx")), [
                          ...i.br_if(2, i.i32_eqz(i.call(n + "_gte", d, s))),
                          ...i.setLocal("sx", i.i64_const(1)),
                          ...i.setLocal("ec", i.i32_const(0)),
                        ]),
                        i.call(n + "__mul1", s, i.getLocal("sx"), f),
                        i.drop(
                          i.call(
                            n + "_sub",
                            d,
                            i.i32_sub(f, i.getLocal("ec")),
                            d
                          )
                        ),
                        i.call(
                          n + "__add1",
                          i.i32_add(c, i.getLocal("ec")),
                          i.getLocal("sx")
                        ),
                        i.br(0)
                      )
                    )
                  );
              })(),
              (function () {
                const e = t.addFunction(n + "_inverseMod");
                e.addParam("px", "i32"),
                  e.addParam("pm", "i32"),
                  e.addParam("pr", "i32"),
                  e.addLocal("t", "i32"),
                  e.addLocal("newt", "i32"),
                  e.addLocal("r", "i32"),
                  e.addLocal("qq", "i32"),
                  e.addLocal("qr", "i32"),
                  e.addLocal("newr", "i32"),
                  e.addLocal("swp", "i32"),
                  e.addLocal("x", "i32"),
                  e.addLocal("signt", "i32"),
                  e.addLocal("signnewt", "i32"),
                  e.addLocal("signx", "i32");
                const i = e.getCodeBuilder(),
                  o = i.i32_const(t.alloc(a)),
                  s = i.i32_const(t.alloc(a)),
                  r = i.i32_const(t.alloc(a)),
                  l = i.i32_const(t.alloc(a)),
                  c = i.i32_const(t.alloc(a)),
                  d = i.i32_const(t.alloc(a)),
                  u = i.i32_const(t.alloc(2 * a)),
                  h = i.i32_const(t.alloc(a));
                e.addCode(
                  i.setLocal("t", o),
                  i.call(n + "_zero", o),
                  i.setLocal("signt", i.i32_const(0))
                ),
                  e.addCode(
                    i.setLocal("r", s),
                    i.call(n + "_copy", i.getLocal("pm"), s)
                  ),
                  e.addCode(
                    i.setLocal("newt", r),
                    i.call(n + "_one", r),
                    i.setLocal("signnewt", i.i32_const(0))
                  ),
                  e.addCode(
                    i.setLocal("newr", l),
                    i.call(n + "_copy", i.getLocal("px"), l)
                  ),
                  e.addCode(i.setLocal("qq", c)),
                  e.addCode(i.setLocal("qr", d)),
                  e.addCode(i.setLocal("x", h)),
                  e.addCode(
                    i.block(
                      i.loop(
                        i.br_if(1, i.call(n + "_isZero", i.getLocal("newr"))),
                        i.call(
                          n + "_div",
                          i.getLocal("r"),
                          i.getLocal("newr"),
                          i.getLocal("qq"),
                          i.getLocal("qr")
                        ),
                        i.call(
                          n + "_mul",
                          i.getLocal("qq"),
                          i.getLocal("newt"),
                          u
                        ),
                        i.if(
                          i.getLocal("signt"),
                          i.if(
                            i.getLocal("signnewt"),
                            i.if(
                              i.call(n + "_gte", u, i.getLocal("t")),
                              [
                                ...i.drop(
                                  i.call(
                                    n + "_sub",
                                    u,
                                    i.getLocal("t"),
                                    i.getLocal("x")
                                  )
                                ),
                                ...i.setLocal("signx", i.i32_const(0)),
                              ],
                              [
                                ...i.drop(
                                  i.call(
                                    n + "_sub",
                                    i.getLocal("t"),
                                    u,
                                    i.getLocal("x")
                                  )
                                ),
                                ...i.setLocal("signx", i.i32_const(1)),
                              ]
                            ),
                            [
                              ...i.drop(
                                i.call(
                                  n + "_add",
                                  u,
                                  i.getLocal("t"),
                                  i.getLocal("x")
                                )
                              ),
                              ...i.setLocal("signx", i.i32_const(1)),
                            ]
                          ),
                          i.if(
                            i.getLocal("signnewt"),
                            [
                              ...i.drop(
                                i.call(
                                  n + "_add",
                                  u,
                                  i.getLocal("t"),
                                  i.getLocal("x")
                                )
                              ),
                              ...i.setLocal("signx", i.i32_const(0)),
                            ],
                            i.if(
                              i.call(n + "_gte", i.getLocal("t"), u),
                              [
                                ...i.drop(
                                  i.call(
                                    n + "_sub",
                                    i.getLocal("t"),
                                    u,
                                    i.getLocal("x")
                                  )
                                ),
                                ...i.setLocal("signx", i.i32_const(0)),
                              ],
                              [
                                ...i.drop(
                                  i.call(
                                    n + "_sub",
                                    u,
                                    i.getLocal("t"),
                                    i.getLocal("x")
                                  )
                                ),
                                ...i.setLocal("signx", i.i32_const(1)),
                              ]
                            )
                          )
                        ),
                        i.setLocal("swp", i.getLocal("t")),
                        i.setLocal("t", i.getLocal("newt")),
                        i.setLocal("newt", i.getLocal("x")),
                        i.setLocal("x", i.getLocal("swp")),
                        i.setLocal("signt", i.getLocal("signnewt")),
                        i.setLocal("signnewt", i.getLocal("signx")),
                        i.setLocal("swp", i.getLocal("r")),
                        i.setLocal("r", i.getLocal("newr")),
                        i.setLocal("newr", i.getLocal("qr")),
                        i.setLocal("qr", i.getLocal("swp")),
                        i.br(0)
                      )
                    )
                  ),
                  e.addCode(
                    i.if(
                      i.getLocal("signt"),
                      i.drop(
                        i.call(
                          n + "_sub",
                          i.getLocal("pm"),
                          i.getLocal("t"),
                          i.getLocal("pr")
                        )
                      ),
                      i.call(n + "_copy", i.getLocal("t"), i.getLocal("pr"))
                    )
                  );
              })(),
              t.exportFunction(n + "_copy"),
              t.exportFunction(n + "_zero"),
              t.exportFunction(n + "_one"),
              t.exportFunction(n + "_isZero"),
              t.exportFunction(n + "_eq"),
              t.exportFunction(n + "_gte"),
              t.exportFunction(n + "_add"),
              t.exportFunction(n + "_sub"),
              t.exportFunction(n + "_mul"),
              t.exportFunction(n + "_square"),
              t.exportFunction(n + "_squareOld"),
              t.exportFunction(n + "_div"),
              t.exportFunction(n + "_inverseMod"),
              n
            );
          };
        },
        911: (t) => {
          t.exports = function (t, e, i, n, o) {
            const a = 8 * t.modules[e].n64;
            !(function () {
              const e = t.addFunction(i + "_getChunk");
              e.addParam("pScalar", "i32"),
                e.addParam("scalarSize", "i32"),
                e.addParam("startBit", "i32"),
                e.addParam("chunkSize", "i32"),
                e.addLocal("bitsToEnd", "i32"),
                e.addLocal("mask", "i32"),
                e.setReturnType("i32");
              const n = e.getCodeBuilder();
              e.addCode(
                n.setLocal(
                  "bitsToEnd",
                  n.i32_sub(
                    n.i32_mul(n.getLocal("scalarSize"), n.i32_const(8)),
                    n.getLocal("startBit")
                  )
                ),
                n.if(
                  n.i32_gt_s(n.getLocal("chunkSize"), n.getLocal("bitsToEnd")),
                  n.setLocal(
                    "mask",
                    n.i32_sub(
                      n.i32_shl(n.i32_const(1), n.getLocal("bitsToEnd")),
                      n.i32_const(1)
                    )
                  ),
                  n.setLocal(
                    "mask",
                    n.i32_sub(
                      n.i32_shl(n.i32_const(1), n.getLocal("chunkSize")),
                      n.i32_const(1)
                    )
                  )
                ),
                n.i32_and(
                  n.i32_shr_u(
                    n.i32_load(
                      n.i32_add(
                        n.getLocal("pScalar"),
                        n.i32_shr_u(n.getLocal("startBit"), n.i32_const(3))
                      ),
                      0,
                      0
                    ),
                    n.i32_and(n.getLocal("startBit"), n.i32_const(7))
                  ),
                  n.getLocal("mask")
                )
              );
            })(),
              (function () {
                const n = t.addFunction(i + "_reduceTable");
                n.addParam("pTable", "i32"),
                  n.addParam("p", "i32"),
                  n.addLocal("half", "i32"),
                  n.addLocal("it1", "i32"),
                  n.addLocal("it2", "i32"),
                  n.addLocal("pAcc", "i32");
                const o = n.getCodeBuilder();
                n.addCode(
                  o.if(o.i32_eq(o.getLocal("p"), o.i32_const(1)), o.ret([])),
                  o.setLocal(
                    "half",
                    o.i32_shl(
                      o.i32_const(1),
                      o.i32_sub(o.getLocal("p"), o.i32_const(1))
                    )
                  ),
                  o.setLocal("it1", o.getLocal("pTable")),
                  o.setLocal(
                    "it2",
                    o.i32_add(
                      o.getLocal("pTable"),
                      o.i32_mul(o.getLocal("half"), o.i32_const(a))
                    )
                  ),
                  o.setLocal(
                    "pAcc",
                    o.i32_sub(o.getLocal("it2"), o.i32_const(a))
                  ),
                  o.block(
                    o.loop(
                      o.br_if(
                        1,
                        o.i32_eq(o.getLocal("it1"), o.getLocal("pAcc"))
                      ),
                      o.call(
                        e + "_add",
                        o.getLocal("it1"),
                        o.getLocal("it2"),
                        o.getLocal("it1")
                      ),
                      o.call(
                        e + "_add",
                        o.getLocal("pAcc"),
                        o.getLocal("it2"),
                        o.getLocal("pAcc")
                      ),
                      o.setLocal(
                        "it1",
                        o.i32_add(o.getLocal("it1"), o.i32_const(a))
                      ),
                      o.setLocal(
                        "it2",
                        o.i32_add(o.getLocal("it2"), o.i32_const(a))
                      ),
                      o.br(0)
                    )
                  ),
                  o.call(
                    i + "_reduceTable",
                    o.getLocal("pTable"),
                    o.i32_sub(o.getLocal("p"), o.i32_const(1))
                  ),
                  o.setLocal("p", o.i32_sub(o.getLocal("p"), o.i32_const(1))),
                  o.block(
                    o.loop(
                      o.br_if(1, o.i32_eqz(o.getLocal("p"))),
                      o.call(
                        e + "_double",
                        o.getLocal("pAcc"),
                        o.getLocal("pAcc")
                      ),
                      o.setLocal(
                        "p",
                        o.i32_sub(o.getLocal("p"), o.i32_const(1))
                      ),
                      o.br(0)
                    )
                  ),
                  o.call(
                    e + "_add",
                    o.getLocal("pTable"),
                    o.getLocal("pAcc"),
                    o.getLocal("pTable")
                  )
                );
              })(),
              (function () {
                const s = t.addFunction(i + "_chunk");
                s.addParam("pBases", "i32"),
                  s.addParam("pScalars", "i32"),
                  s.addParam("scalarSize", "i32"),
                  s.addParam("n", "i32"),
                  s.addParam("startBit", "i32"),
                  s.addParam("chunkSize", "i32"),
                  s.addParam("pr", "i32"),
                  s.addLocal("nChunks", "i32"),
                  s.addLocal("itScalar", "i32"),
                  s.addLocal("endScalar", "i32"),
                  s.addLocal("itBase", "i32"),
                  s.addLocal("i", "i32"),
                  s.addLocal("j", "i32"),
                  s.addLocal("nTable", "i32"),
                  s.addLocal("pTable", "i32"),
                  s.addLocal("idx", "i32"),
                  s.addLocal("pIdxTable", "i32");
                const r = s.getCodeBuilder();
                s.addCode(
                  r.if(r.i32_eqz(r.getLocal("n")), [
                    ...r.call(e + "_zero", r.getLocal("pr")),
                    ...r.ret([]),
                  ]),
                  r.setLocal(
                    "nTable",
                    r.i32_shl(r.i32_const(1), r.getLocal("chunkSize"))
                  ),
                  r.setLocal("pTable", r.i32_load(r.i32_const(0))),
                  r.i32_store(
                    r.i32_const(0),
                    r.i32_add(
                      r.getLocal("pTable"),
                      r.i32_mul(r.getLocal("nTable"), r.i32_const(a))
                    )
                  ),
                  r.setLocal("j", r.i32_const(0)),
                  r.block(
                    r.loop(
                      r.br_if(
                        1,
                        r.i32_eq(r.getLocal("j"), r.getLocal("nTable"))
                      ),
                      r.call(
                        e + "_zero",
                        r.i32_add(
                          r.getLocal("pTable"),
                          r.i32_mul(r.getLocal("j"), r.i32_const(a))
                        )
                      ),
                      r.setLocal(
                        "j",
                        r.i32_add(r.getLocal("j"), r.i32_const(1))
                      ),
                      r.br(0)
                    )
                  ),
                  r.setLocal("itBase", r.getLocal("pBases")),
                  r.setLocal("itScalar", r.getLocal("pScalars")),
                  r.setLocal(
                    "endScalar",
                    r.i32_add(
                      r.getLocal("pScalars"),
                      r.i32_mul(r.getLocal("n"), r.getLocal("scalarSize"))
                    )
                  ),
                  r.block(
                    r.loop(
                      r.br_if(
                        1,
                        r.i32_eq(
                          r.getLocal("itScalar"),
                          r.getLocal("endScalar")
                        )
                      ),
                      r.setLocal(
                        "idx",
                        r.call(
                          i + "_getChunk",
                          r.getLocal("itScalar"),
                          r.getLocal("scalarSize"),
                          r.getLocal("startBit"),
                          r.getLocal("chunkSize")
                        )
                      ),
                      r.if(r.getLocal("idx"), [
                        ...r.setLocal(
                          "pIdxTable",
                          r.i32_add(
                            r.getLocal("pTable"),
                            r.i32_mul(
                              r.i32_sub(r.getLocal("idx"), r.i32_const(1)),
                              r.i32_const(a)
                            )
                          )
                        ),
                        ...r.call(
                          n,
                          r.getLocal("pIdxTable"),
                          r.getLocal("itBase"),
                          r.getLocal("pIdxTable")
                        ),
                      ]),
                      r.setLocal(
                        "itScalar",
                        r.i32_add(
                          r.getLocal("itScalar"),
                          r.getLocal("scalarSize")
                        )
                      ),
                      r.setLocal(
                        "itBase",
                        r.i32_add(r.getLocal("itBase"), r.i32_const(o))
                      ),
                      r.br(0)
                    )
                  ),
                  r.call(
                    i + "_reduceTable",
                    r.getLocal("pTable"),
                    r.getLocal("chunkSize")
                  ),
                  r.call(e + "_copy", r.getLocal("pTable"), r.getLocal("pr")),
                  r.i32_store(r.i32_const(0), r.getLocal("pTable"))
                );
              })(),
              (function () {
                const n = t.addFunction(i);
                n.addParam("pBases", "i32"),
                  n.addParam("pScalars", "i32"),
                  n.addParam("scalarSize", "i32"),
                  n.addParam("n", "i32"),
                  n.addParam("pr", "i32"),
                  n.addLocal("chunkSize", "i32"),
                  n.addLocal("nChunks", "i32"),
                  n.addLocal("itScalar", "i32"),
                  n.addLocal("endScalar", "i32"),
                  n.addLocal("itBase", "i32"),
                  n.addLocal("itBit", "i32"),
                  n.addLocal("i", "i32"),
                  n.addLocal("j", "i32"),
                  n.addLocal("nTable", "i32"),
                  n.addLocal("pTable", "i32"),
                  n.addLocal("idx", "i32"),
                  n.addLocal("pIdxTable", "i32");
                const o = n.getCodeBuilder(),
                  s = o.i32_const(t.alloc(a)),
                  r = t.alloc([
                    17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 16, 16, 15, 14, 13,
                    13, 12, 11, 10, 9, 8, 7, 7, 6, 5, 4, 3, 2, 1, 1, 1, 1,
                  ]);
                n.addCode(
                  o.call(e + "_zero", o.getLocal("pr")),
                  o.if(o.i32_eqz(o.getLocal("n")), o.ret([])),
                  o.setLocal(
                    "chunkSize",
                    o.i32_load8_u(o.i32_clz(o.getLocal("n")), r)
                  ),
                  o.setLocal(
                    "nChunks",
                    o.i32_add(
                      o.i32_div_u(
                        o.i32_sub(
                          o.i32_shl(o.getLocal("scalarSize"), o.i32_const(3)),
                          o.i32_const(1)
                        ),
                        o.getLocal("chunkSize")
                      ),
                      o.i32_const(1)
                    )
                  ),
                  o.setLocal(
                    "itBit",
                    o.i32_mul(
                      o.i32_sub(o.getLocal("nChunks"), o.i32_const(1)),
                      o.getLocal("chunkSize")
                    )
                  ),
                  o.block(
                    o.loop(
                      o.br_if(
                        1,
                        o.i32_lt_s(o.getLocal("itBit"), o.i32_const(0))
                      ),
                      o.if(o.i32_eqz(o.call(e + "_isZero", o.getLocal("pr"))), [
                        ...o.setLocal("j", o.i32_const(0)),
                        ...o.block(
                          o.loop(
                            o.br_if(
                              1,
                              o.i32_eq(o.getLocal("j"), o.getLocal("chunkSize"))
                            ),
                            o.call(
                              e + "_double",
                              o.getLocal("pr"),
                              o.getLocal("pr")
                            ),
                            o.setLocal(
                              "j",
                              o.i32_add(o.getLocal("j"), o.i32_const(1))
                            ),
                            o.br(0)
                          )
                        ),
                      ]),
                      o.call(
                        i + "_chunk",
                        o.getLocal("pBases"),
                        o.getLocal("pScalars"),
                        o.getLocal("scalarSize"),
                        o.getLocal("n"),
                        o.getLocal("itBit"),
                        o.getLocal("chunkSize"),
                        s
                      ),
                      o.call(e + "_add", o.getLocal("pr"), s, o.getLocal("pr")),
                      o.setLocal(
                        "itBit",
                        o.i32_sub(o.getLocal("itBit"), o.getLocal("chunkSize"))
                      ),
                      o.br(0)
                    )
                  )
                );
              })(),
              t.exportFunction(i),
              t.exportFunction(i + "_chunk");
          };
        },
        896: (t) => {
          t.exports = function (t, e, i) {
            const n = 8 * t.modules[i].n64;
            return (
              (function () {
                const o = t.addFunction(e + "_zero");
                o.addParam("px", "i32"),
                  o.addParam("n", "i32"),
                  o.addLocal("lastp", "i32"),
                  o.addLocal("p", "i32");
                const a = o.getCodeBuilder();
                o.addCode(
                  a.setLocal("p", a.getLocal("px")),
                  a.setLocal(
                    "lastp",
                    a.i32_add(
                      a.getLocal("px"),
                      a.i32_mul(a.getLocal("n"), a.i32_const(n))
                    )
                  ),
                  a.block(
                    a.loop(
                      a.br_if(
                        1,
                        a.i32_eq(a.getLocal("p"), a.getLocal("lastp"))
                      ),
                      a.call(i + "_zero", a.getLocal("p")),
                      a.setLocal(
                        "p",
                        a.i32_add(a.getLocal("p"), a.i32_const(n))
                      ),
                      a.br(0)
                    )
                  )
                );
              })(),
              (function () {
                const o = t.addFunction(e + "_constructLC");
                o.addParam("ppolynomials", "i32"),
                  o.addParam("psignals", "i32"),
                  o.addParam("nSignals", "i32"),
                  o.addParam("pres", "i32"),
                  o.addLocal("i", "i32"),
                  o.addLocal("j", "i32"),
                  o.addLocal("pp", "i32"),
                  o.addLocal("ps", "i32"),
                  o.addLocal("pd", "i32"),
                  o.addLocal("ncoefs", "i32");
                const a = o.getCodeBuilder(),
                  s = a.i32_const(t.alloc(n));
                o.addCode(
                  a.setLocal("i", a.i32_const(0)),
                  a.setLocal("pp", a.getLocal("ppolynomials")),
                  a.setLocal("ps", a.getLocal("psignals")),
                  a.block(
                    a.loop(
                      a.br_if(
                        1,
                        a.i32_eq(a.getLocal("i"), a.getLocal("nSignals"))
                      ),
                      a.setLocal("ncoefs", a.i32_load(a.getLocal("pp"))),
                      a.setLocal(
                        "pp",
                        a.i32_add(a.getLocal("pp"), a.i32_const(4))
                      ),
                      a.setLocal("j", a.i32_const(0)),
                      a.block(
                        a.loop(
                          a.br_if(
                            1,
                            a.i32_eq(a.getLocal("j"), a.getLocal("ncoefs"))
                          ),
                          a.setLocal(
                            "pd",
                            a.i32_add(
                              a.getLocal("pres"),
                              a.i32_mul(
                                a.i32_load(a.getLocal("pp")),
                                a.i32_const(n)
                              )
                            )
                          ),
                          a.setLocal(
                            "pp",
                            a.i32_add(a.getLocal("pp"), a.i32_const(4))
                          ),
                          a.call(
                            i + "_mul",
                            a.getLocal("ps"),
                            a.getLocal("pp"),
                            s
                          ),
                          a.call(
                            i + "_add",
                            s,
                            a.getLocal("pd"),
                            a.getLocal("pd")
                          ),
                          a.setLocal(
                            "pp",
                            a.i32_add(a.getLocal("pp"), a.i32_const(n))
                          ),
                          a.setLocal(
                            "j",
                            a.i32_add(a.getLocal("j"), a.i32_const(1))
                          ),
                          a.br(0)
                        )
                      ),
                      a.setLocal(
                        "ps",
                        a.i32_add(a.getLocal("ps"), a.i32_const(n))
                      ),
                      a.setLocal(
                        "i",
                        a.i32_add(a.getLocal("i"), a.i32_const(1))
                      ),
                      a.br(0)
                    )
                  )
                );
              })(),
              t.exportFunction(e + "_zero"),
              t.exportFunction(e + "_constructLC"),
              e
            );
          };
        },
        637: (t) => {
          t.exports = function (t, e, i) {
            const n = 8 * t.modules[i].n64;
            return (
              (function () {
                const o = t.addFunction(e + "_buildABC");
                o.addParam("pCoefs", "i32"),
                  o.addParam("nCoefs", "i32"),
                  o.addParam("pWitness", "i32"),
                  o.addParam("pA", "i32"),
                  o.addParam("pB", "i32"),
                  o.addParam("pC", "i32"),
                  o.addParam("offsetOut", "i32"),
                  o.addParam("nOut", "i32"),
                  o.addParam("offsetWitness", "i32"),
                  o.addParam("nWitness", "i32"),
                  o.addLocal("it", "i32"),
                  o.addLocal("ita", "i32"),
                  o.addLocal("itb", "i32"),
                  o.addLocal("last", "i32"),
                  o.addLocal("m", "i32"),
                  o.addLocal("c", "i32"),
                  o.addLocal("s", "i32"),
                  o.addLocal("pOut", "i32");
                const a = o.getCodeBuilder(),
                  s = a.i32_const(t.alloc(n));
                o.addCode(
                  a.setLocal("ita", a.getLocal("pA")),
                  a.setLocal("itb", a.getLocal("pB")),
                  a.setLocal(
                    "last",
                    a.i32_add(
                      a.getLocal("pA"),
                      a.i32_mul(a.getLocal("nOut"), a.i32_const(n))
                    )
                  ),
                  a.block(
                    a.loop(
                      a.br_if(
                        1,
                        a.i32_eq(a.getLocal("ita"), a.getLocal("last"))
                      ),
                      a.call(i + "_zero", a.getLocal("ita")),
                      a.call(i + "_zero", a.getLocal("itb")),
                      a.setLocal(
                        "ita",
                        a.i32_add(a.getLocal("ita"), a.i32_const(n))
                      ),
                      a.setLocal(
                        "itb",
                        a.i32_add(a.getLocal("itb"), a.i32_const(n))
                      ),
                      a.br(0)
                    )
                  ),
                  a.setLocal("it", a.getLocal("pCoefs")),
                  a.setLocal(
                    "last",
                    a.i32_add(
                      a.getLocal("pCoefs"),
                      a.i32_mul(a.getLocal("nCoefs"), a.i32_const(n + 12))
                    )
                  ),
                  a.block(
                    a.loop(
                      a.br_if(
                        1,
                        a.i32_eq(a.getLocal("it"), a.getLocal("last"))
                      ),
                      a.setLocal("s", a.i32_load(a.getLocal("it"), 8)),
                      a.if(
                        a.i32_or(
                          a.i32_lt_u(
                            a.getLocal("s"),
                            a.getLocal("offsetWitness")
                          ),
                          a.i32_ge_u(
                            a.getLocal("s"),
                            a.i32_add(
                              a.getLocal("offsetWitness"),
                              a.getLocal("nWitness")
                            )
                          )
                        ),
                        [
                          ...a.setLocal(
                            "it",
                            a.i32_add(a.getLocal("it"), a.i32_const(n + 12))
                          ),
                          ...a.br(1),
                        ]
                      ),
                      a.setLocal("m", a.i32_load(a.getLocal("it"))),
                      a.if(
                        a.i32_eq(a.getLocal("m"), a.i32_const(0)),
                        a.setLocal("pOut", a.getLocal("pA")),
                        a.if(
                          a.i32_eq(a.getLocal("m"), a.i32_const(1)),
                          a.setLocal("pOut", a.getLocal("pB")),
                          [
                            ...a.setLocal(
                              "it",
                              a.i32_add(a.getLocal("it"), a.i32_const(n + 12))
                            ),
                            ...a.br(1),
                          ]
                        )
                      ),
                      a.setLocal("c", a.i32_load(a.getLocal("it"), 4)),
                      a.if(
                        a.i32_or(
                          a.i32_lt_u(a.getLocal("c"), a.getLocal("offsetOut")),
                          a.i32_ge_u(
                            a.getLocal("c"),
                            a.i32_add(
                              a.getLocal("offsetOut"),
                              a.getLocal("nOut")
                            )
                          )
                        ),
                        [
                          ...a.setLocal(
                            "it",
                            a.i32_add(a.getLocal("it"), a.i32_const(n + 12))
                          ),
                          ...a.br(1),
                        ]
                      ),
                      a.setLocal(
                        "pOut",
                        a.i32_add(
                          a.getLocal("pOut"),
                          a.i32_mul(
                            a.i32_sub(a.getLocal("c"), a.getLocal("offsetOut")),
                            a.i32_const(n)
                          )
                        )
                      ),
                      a.call(
                        i + "_mul",
                        a.i32_add(
                          a.getLocal("pWitness"),
                          a.i32_mul(
                            a.i32_sub(
                              a.getLocal("s"),
                              a.getLocal("offsetWitness")
                            ),
                            a.i32_const(n)
                          )
                        ),
                        a.i32_add(a.getLocal("it"), a.i32_const(12)),
                        s
                      ),
                      a.call(
                        i + "_add",
                        a.getLocal("pOut"),
                        s,
                        a.getLocal("pOut")
                      ),
                      a.setLocal(
                        "it",
                        a.i32_add(a.getLocal("it"), a.i32_const(n + 12))
                      ),
                      a.br(0)
                    )
                  ),
                  a.setLocal("ita", a.getLocal("pA")),
                  a.setLocal("itb", a.getLocal("pB")),
                  a.setLocal("it", a.getLocal("pC")),
                  a.setLocal(
                    "last",
                    a.i32_add(
                      a.getLocal("pA"),
                      a.i32_mul(a.getLocal("nOut"), a.i32_const(n))
                    )
                  ),
                  a.block(
                    a.loop(
                      a.br_if(
                        1,
                        a.i32_eq(a.getLocal("ita"), a.getLocal("last"))
                      ),
                      a.call(
                        i + "_mul",
                        a.getLocal("ita"),
                        a.getLocal("itb"),
                        a.getLocal("it")
                      ),
                      a.setLocal(
                        "ita",
                        a.i32_add(a.getLocal("ita"), a.i32_const(n))
                      ),
                      a.setLocal(
                        "itb",
                        a.i32_add(a.getLocal("itb"), a.i32_const(n))
                      ),
                      a.setLocal(
                        "it",
                        a.i32_add(a.getLocal("it"), a.i32_const(n))
                      ),
                      a.br(0)
                    )
                  )
                );
              })(),
              (function () {
                const o = t.addFunction(e + "_joinABC");
                o.addParam("pA", "i32"),
                  o.addParam("pB", "i32"),
                  o.addParam("pC", "i32"),
                  o.addParam("n", "i32"),
                  o.addParam("pP", "i32"),
                  o.addLocal("ita", "i32"),
                  o.addLocal("itb", "i32"),
                  o.addLocal("itc", "i32"),
                  o.addLocal("itp", "i32"),
                  o.addLocal("last", "i32");
                const a = o.getCodeBuilder(),
                  s = a.i32_const(t.alloc(n));
                o.addCode(
                  a.setLocal("ita", a.getLocal("pA")),
                  a.setLocal("itb", a.getLocal("pB")),
                  a.setLocal("itc", a.getLocal("pC")),
                  a.setLocal("itp", a.getLocal("pP")),
                  a.setLocal(
                    "last",
                    a.i32_add(
                      a.getLocal("pA"),
                      a.i32_mul(a.getLocal("n"), a.i32_const(n))
                    )
                  ),
                  a.block(
                    a.loop(
                      a.br_if(
                        1,
                        a.i32_eq(a.getLocal("ita"), a.getLocal("last"))
                      ),
                      a.call(
                        i + "_mul",
                        a.getLocal("ita"),
                        a.getLocal("itb"),
                        s
                      ),
                      a.call(
                        i + "_sub",
                        s,
                        a.getLocal("itc"),
                        a.getLocal("itp")
                      ),
                      a.setLocal(
                        "ita",
                        a.i32_add(a.getLocal("ita"), a.i32_const(n))
                      ),
                      a.setLocal(
                        "itb",
                        a.i32_add(a.getLocal("itb"), a.i32_const(n))
                      ),
                      a.setLocal(
                        "itc",
                        a.i32_add(a.getLocal("itc"), a.i32_const(n))
                      ),
                      a.setLocal(
                        "itp",
                        a.i32_add(a.getLocal("itp"), a.i32_const(n))
                      ),
                      a.br(0)
                    )
                  )
                );
              })(),
              (function () {
                const o = t.addFunction(e + "_batchAdd");
                o.addParam("pa", "i32"),
                  o.addParam("pb", "i32"),
                  o.addParam("n", "i32"),
                  o.addParam("pr", "i32"),
                  o.addLocal("ita", "i32"),
                  o.addLocal("itb", "i32"),
                  o.addLocal("itr", "i32"),
                  o.addLocal("last", "i32");
                const a = o.getCodeBuilder();
                o.addCode(
                  a.setLocal("ita", a.getLocal("pa")),
                  a.setLocal("itb", a.getLocal("pb")),
                  a.setLocal("itr", a.getLocal("pr")),
                  a.setLocal(
                    "last",
                    a.i32_add(
                      a.getLocal("pa"),
                      a.i32_mul(a.getLocal("n"), a.i32_const(n))
                    )
                  ),
                  a.block(
                    a.loop(
                      a.br_if(
                        1,
                        a.i32_eq(a.getLocal("ita"), a.getLocal("last"))
                      ),
                      a.call(
                        i + "_add",
                        a.getLocal("ita"),
                        a.getLocal("itb"),
                        a.getLocal("itr")
                      ),
                      a.setLocal(
                        "ita",
                        a.i32_add(a.getLocal("ita"), a.i32_const(n))
                      ),
                      a.setLocal(
                        "itb",
                        a.i32_add(a.getLocal("itb"), a.i32_const(n))
                      ),
                      a.setLocal(
                        "itr",
                        a.i32_add(a.getLocal("itr"), a.i32_const(n))
                      ),
                      a.br(0)
                    )
                  )
                );
              })(),
              t.exportFunction(e + "_buildABC"),
              t.exportFunction(e + "_joinABC"),
              t.exportFunction(e + "_batchAdd"),
              e
            );
          };
        },
        345: (t) => {
          t.exports = function (t, e, i, n, o, a, s) {
            const r = t.addFunction(e);
            r.addParam("base", "i32"),
              r.addParam("scalar", "i32"),
              r.addParam("scalarLength", "i32"),
              r.addParam("r", "i32"),
              r.addLocal("i", "i32"),
              r.addLocal("b", "i32");
            const l = r.getCodeBuilder(),
              c = l.i32_const(t.alloc(i));
            r.addCode(
              l.if(l.i32_eqz(l.getLocal("scalarLength")), [
                ...l.call(s, l.getLocal("r")),
                ...l.ret([]),
              ])
            ),
              r.addCode(l.call(a, l.getLocal("base"), c)),
              r.addCode(l.call(s, l.getLocal("r"))),
              r.addCode(l.setLocal("i", l.getLocal("scalarLength"))),
              r.addCode(
                l.block(
                  l.loop(
                    l.setLocal("i", l.i32_sub(l.getLocal("i"), l.i32_const(1))),
                    l.setLocal(
                      "b",
                      l.i32_load8_u(
                        l.i32_add(l.getLocal("scalar"), l.getLocal("i"))
                      )
                    ),
                    ...(function () {
                      const t = [];
                      for (let e = 0; e < 8; e++)
                        t.push(
                          ...l.call(o, l.getLocal("r"), l.getLocal("r")),
                          ...l.if(
                            l.i32_ge_u(l.getLocal("b"), l.i32_const(128 >> e)),
                            [
                              ...l.setLocal(
                                "b",
                                l.i32_sub(
                                  l.getLocal("b"),
                                  l.i32_const(128 >> e)
                                )
                              ),
                              ...l.call(n, l.getLocal("r"), c, l.getLocal("r")),
                            ]
                          )
                        );
                      return t;
                    })(),
                    l.br_if(1, l.i32_eqz(l.getLocal("i"))),
                    l.br(0)
                  )
                )
              );
          };
        },
        591: (t) => {
          t.exports = function (t, e, i, n, o, a, s, r) {
            const l = t.addFunction(e);
            l.addParam("base", "i32"),
              l.addParam("scalar", "i32"),
              l.addParam("scalarLength", "i32"),
              l.addParam("r", "i32"),
              l.addLocal("old0", "i32"),
              l.addLocal("nbits", "i32"),
              l.addLocal("i", "i32"),
              l.addLocal("last", "i32"),
              l.addLocal("cur", "i32"),
              l.addLocal("carry", "i32"),
              l.addLocal("p", "i32");
            const c = l.getCodeBuilder(),
              d = c.i32_const(t.alloc(i));
            function u(t) {
              return c.i32_and(
                c.i32_shr_u(
                  c.i32_load(
                    c.i32_add(
                      c.getLocal("scalar"),
                      c.i32_and(
                        c.i32_shr_u(t, c.i32_const(3)),
                        c.i32_const(4294967292)
                      )
                    )
                  ),
                  c.i32_and(t, c.i32_const(31))
                ),
                c.i32_const(1)
              );
            }
            function h(t) {
              return [
                ...c.i32_store8(c.getLocal("p"), c.i32_const(t)),
                ...c.setLocal("p", c.i32_add(c.getLocal("p"), c.i32_const(1))),
              ];
            }
            l.addCode(
              c.if(c.i32_eqz(c.getLocal("scalarLength")), [
                ...c.call(r, c.getLocal("r")),
                ...c.ret([]),
              ]),
              c.setLocal(
                "nbits",
                c.i32_shl(c.getLocal("scalarLength"), c.i32_const(3))
              ),
              c.setLocal("old0", c.i32_load(c.i32_const(0))),
              c.setLocal("p", c.getLocal("old0")),
              c.i32_store(
                c.i32_const(0),
                c.i32_and(
                  c.i32_add(
                    c.i32_add(c.getLocal("old0"), c.i32_const(32)),
                    c.getLocal("nbits")
                  ),
                  c.i32_const(4294967288)
                )
              ),
              c.setLocal("i", c.i32_const(1)),
              c.setLocal("last", u(c.i32_const(0))),
              c.setLocal("carry", c.i32_const(0)),
              c.block(
                c.loop(
                  c.br_if(1, c.i32_eq(c.getLocal("i"), c.getLocal("nbits"))),
                  c.setLocal("cur", u(c.getLocal("i"))),
                  c.if(
                    c.getLocal("last"),
                    c.if(
                      c.getLocal("cur"),
                      c.if(
                        c.getLocal("carry"),
                        [
                          ...c.setLocal("last", c.i32_const(0)),
                          ...c.setLocal("carry", c.i32_const(1)),
                          ...h(1),
                        ],
                        [
                          ...c.setLocal("last", c.i32_const(0)),
                          ...c.setLocal("carry", c.i32_const(1)),
                          ...h(255),
                        ]
                      ),
                      c.if(
                        c.getLocal("carry"),
                        [
                          ...c.setLocal("last", c.i32_const(0)),
                          ...c.setLocal("carry", c.i32_const(1)),
                          ...h(255),
                        ],
                        [
                          ...c.setLocal("last", c.i32_const(0)),
                          ...c.setLocal("carry", c.i32_const(0)),
                          ...h(1),
                        ]
                      )
                    ),
                    c.if(
                      c.getLocal("cur"),
                      c.if(
                        c.getLocal("carry"),
                        [
                          ...c.setLocal("last", c.i32_const(0)),
                          ...c.setLocal("carry", c.i32_const(1)),
                          ...h(0),
                        ],
                        [
                          ...c.setLocal("last", c.i32_const(1)),
                          ...c.setLocal("carry", c.i32_const(0)),
                          ...h(0),
                        ]
                      ),
                      c.if(
                        c.getLocal("carry"),
                        [
                          ...c.setLocal("last", c.i32_const(1)),
                          ...c.setLocal("carry", c.i32_const(0)),
                          ...h(0),
                        ],
                        [
                          ...c.setLocal("last", c.i32_const(0)),
                          ...c.setLocal("carry", c.i32_const(0)),
                          ...h(0),
                        ]
                      )
                    )
                  ),
                  c.setLocal("i", c.i32_add(c.getLocal("i"), c.i32_const(1))),
                  c.br(0)
                )
              ),
              c.if(
                c.getLocal("last"),
                c.if(
                  c.getLocal("carry"),
                  [...h(255), ...h(0), ...h(1)],
                  [...h(1)]
                ),
                c.if(c.getLocal("carry"), [...h(0), ...h(1)])
              ),
              c.setLocal("p", c.i32_sub(c.getLocal("p"), c.i32_const(1))),
              c.call(s, c.getLocal("base"), d),
              c.call(r, c.getLocal("r")),
              c.block(
                c.loop(
                  c.call(o, c.getLocal("r"), c.getLocal("r")),
                  c.setLocal("cur", c.i32_load8_u(c.getLocal("p"))),
                  c.if(
                    c.getLocal("cur"),
                    c.if(
                      c.i32_eq(c.getLocal("cur"), c.i32_const(1)),
                      c.call(n, c.getLocal("r"), d, c.getLocal("r")),
                      c.call(a, c.getLocal("r"), d, c.getLocal("r"))
                    )
                  ),
                  c.br_if(1, c.i32_eq(c.getLocal("old0"), c.getLocal("p"))),
                  c.setLocal("p", c.i32_sub(c.getLocal("p"), c.i32_const(1))),
                  c.br(0)
                )
              ),
              c.i32_store(c.i32_const(0), c.getLocal("old0"))
            );
          };
        },
        333: (t, e) => {
          (e.bigInt2BytesLE = function (t, e) {
            const i = Array(e);
            let n = BigInt(t);
            for (let t = 0; t < e; t++) (i[t] = Number(0xffn & n)), (n >>= 8n);
            return i;
          }),
            (e.bigInt2U32LE = function (t, e) {
              const i = Array(e);
              let n = BigInt(t);
              for (let t = 0; t < e; t++)
                (i[t] = Number(0xffffffffn & n)), (n >>= 32n);
              return i;
            }),
            (e.isOcamNum = function (t) {
              return (
                !!Array.isArray(t) &&
                3 == t.length &&
                "number" == typeof t[0] &&
                "number" == typeof t[1] &&
                !!Array.isArray(t[2])
              );
            });
        },
        667: (t, e, i) => {
          "use strict";
          i.r(e), i.d(e, { default: () => f });
          const n = require("url");
          var o = i.n(n);
          const a = require("vm");
          var s = i.n(a);
          const r = require("worker_threads");
          var l = i.n(r);
          const c = Symbol.for("worker"),
            d = Symbol.for("events");
          class u {
            constructor() {
              Object.defineProperty(this, d, { value: new Map() });
            }
            dispatchEvent(t) {
              if (((t.target = t.currentTarget = this), this["on" + t.type]))
                try {
                  this["on" + t.type](t);
                } catch (t) {
                  console.error(t);
                }
              const e = this[d].get(t.type);
              null != e &&
                e.forEach((e) => {
                  try {
                    e.call(this, t);
                  } catch (t) {
                    console.error(t);
                  }
                });
            }
            addEventListener(t, e) {
              let i = this[d].get(t);
              i || this[d].set(t, (i = [])), i.push(e);
            }
            removeEventListener(t, e) {
              let i = this[d].get(t);
              if (i) {
                const t = i.indexOf(e);
                -1 !== t && i.splice(t, 1);
              }
            }
          }
          function h(t, e) {
            (this.type = t),
              (this.timeStamp = Date.now()),
              (this.target = this.currentTarget = this.data = null);
          }
          const f = l().isMainThread
              ? p()
              : (function () {
                  let { mod: t, name: e, type: n } = l().workerData;
                  if (!t) return p();
                  const o = (global.self = global);
                  let a = [];
                  function s() {
                    const t = a;
                    (a = null),
                      t.forEach((t) => {
                        o.dispatchEvent(t);
                      });
                  }
                  l().parentPort.on("message", (t) => {
                    const e = new h("message");
                    (e.data = t), null == a ? o.dispatchEvent(e) : a.push(e);
                  }),
                    l().parentPort.on("error", (t) => {
                      (t.type = "Error"), o.dispatchEvent(t);
                    });
                  class r extends u {
                    postMessage(t, e) {
                      l().parentPort.postMessage(t, e);
                    }
                    close() {
                      process.exit();
                    }
                  }
                  let c = Object.getPrototypeOf(global);
                  delete c.constructor,
                    Object.defineProperties(r.prototype, c),
                    (c = Object.setPrototypeOf(global, new r())),
                    [
                      "postMessage",
                      "addEventListener",
                      "removeEventListener",
                      "dispatchEvent",
                    ].forEach((t) => {
                      c[t] = c[t].bind(global);
                    }),
                    (global.name = e);
                  const d = /^data:/.test(t);
                  if ("module" === n)
                    i(235)(t)
                      .catch((i) => {
                        if (d && "Not supported" === i.message)
                          return (
                            console.warn(
                              "Worker(): Importing data: URLs requires Node 12.10+. Falling back to classic worker."
                            ),
                            g(t, e)
                          );
                        console.error(i);
                      })
                      .then(s);
                  else {
                    try {
                      /^data:/.test(t) ? g(t, e) : i(759)(t);
                    } catch (t) {
                      console.error(t);
                    }
                    Promise.resolve().then(s);
                  }
                })(),
            _ = o().pathToFileURL(process.cwd() + "/");
          function p() {
            class t extends u {
              constructor(t, e) {
                super();
                const { name: i, type: n } = e || {};
                let a;
                a = /^data:/.test((t += ""))
                  ? t
                  : o().fileURLToPath(new (o().URL)(t, _));
                const s = new (l().Worker)(__filename, {
                  workerData: { mod: a, name: i, type: n },
                });
                Object.defineProperty(this, c, { value: s }),
                  s.on("message", (t) => {
                    const e = new h("message");
                    (e.data = t), this.dispatchEvent(e);
                  }),
                  s.on("error", (t) => {
                    (t.type = "error"), this.dispatchEvent(t);
                  }),
                  s.on("exit", () => {
                    this.dispatchEvent(new h("close"));
                  });
              }
              postMessage(t, e) {
                this[c].postMessage(t, e);
              }
              terminate() {
                this[c].terminate();
              }
            }
            return (
              (t.prototype.onmessage =
                t.prototype.onerror =
                t.prototype.onclose =
                  null),
              t
            );
          }
          function g(t, e) {
            const { data: i } = (function (t) {
              let [e, i, n, o] =
                t.match(/^data: *([^;,]*)(?: *; *([^,]*))? *,(.*)$/) || [];
              if (!e) throw Error("Invalid Data URL.");
              if (n) {
                if ("base64" !== n.toLowerCase())
                  throw Error('Unknown Data URL encoding "' + n + '"');
                o = Buffer.from(o, "base64").toString();
              }
              return { type: i, data: o };
            })(t);
            return s().runInThisContext(i, {
              filename: "worker.<" + (e || "data:") + ">",
            });
          }
        },
        235: (t) => {
          function e(t) {
            return Promise.resolve().then(() => {
              var e = new Error("Cannot find module '" + t + "'");
              throw ((e.code = "MODULE_NOT_FOUND"), e);
            });
          }
          (e.keys = () => []), (e.resolve = e), (e.id = 235), (t.exports = e);
        },
        759: (t) => {
          function e(t) {
            var e = new Error("Cannot find module '" + t + "'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          }
          (e.keys = () => []), (e.resolve = e), (e.id = 759), (t.exports = e);
        },
        140: (t) => {
          "use strict";
          t.exports = require("constants");
        },
        982: (t) => {
          "use strict";
          t.exports = require("crypto");
        },
        515: (t) => {
          "use strict";
          t.exports = require("fs");
        },
        857: (t) => {
          "use strict";
          t.exports = require("os");
        },
        149: (t, e, i) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = i(758);
          function o(t) {
            var e = [];
            return (
              (function t(e, i) {
                if (Array.isArray(i))
                  for (let n = 0; n < i.length; n++) t(e, i[n]);
                else e.push(i);
              })(e, t),
              e
            );
          }
          function a(t) {
            const e = BigInt(2) ** BigInt(64);
            let i = BigInt("0xCBF29CE484222325");
            for (var n = 0; n < t.length; n++)
              (i ^= BigInt(t[n].charCodeAt())),
                (i *= BigInt(1099511628211)),
                (i %= e);
            let o = i.toString(16),
              a = 16 - o.length;
            return (o = "0".repeat(a).concat(o)), o;
          }
          function s(t, e) {
            const i = [];
            let n = BigInt(t);
            const o = BigInt(4294967296);
            for (; n; ) i.unshift(Number(n % o)), (n /= o);
            if (e) for (var a = e - i.length; a > 0; ) i.unshift(0), a--;
            return i;
          }
          class r {
            constructor(t, e, i) {
              (this.memory = t),
                (this.i32 = new Uint32Array(t.buffer)),
                (this.instance = e),
                (this.n32 = (this.instance.exports.getFrLen() >> 2) - 2);
              const o = this.instance.exports.getPRawPrime(),
                a = new Array(this.n32);
              for (let t = 0; t < this.n32; t++)
                a[this.n32 - 1 - t] = this.i32[(o >> 2) + t];
              (this.prime = n.Scalar.fromArray(a, 4294967296)),
                (this.Fr = new n.F1Field(this.prime)),
                (this.mask32 = n.Scalar.fromString("FFFFFFFF", 16)),
                (this.NVars = this.instance.exports.getNVars()),
                (this.n64 = Math.floor((this.Fr.bitLength - 1) / 64) + 1),
                (this.R = this.Fr.e(n.Scalar.shiftLeft(1, 64 * this.n64))),
                (this.RInv = this.Fr.inv(this.R)),
                (this.sanityCheck = i);
            }
            circom_version() {
              return 1;
            }
            async _doCalculateWitness(t, e) {
              this.instance.exports.init(this.sanityCheck || e ? 1 : 0);
              const i = this.allocInt(),
                n = this.allocFr();
              Object.keys(t).forEach((e) => {
                const s = a(e),
                  r = parseInt(s.slice(0, 8), 16),
                  l = parseInt(s.slice(8, 16), 16);
                try {
                  this.instance.exports.getSignalOffset32(i, 0, r, l);
                } catch (t) {
                  throw new Error(
                    `Signal ${e} is not an input of the circuit.`
                  );
                }
                const c = this.getInt(i),
                  d = o(t[e]);
                for (let t = 0; t < d.length; t++)
                  this.setFr(n, d[t]),
                    this.instance.exports.setSignal(0, 0, c + t, n);
              });
            }
            async calculateWitness(t, e) {
              const i = this,
                n = i.i32[0],
                o = [];
              await i._doCalculateWitness(t, e);
              for (let t = 0; t < i.NVars; t++) {
                const e = i.instance.exports.getPWitness(t);
                o.push(i.getFr(e));
              }
              return (i.i32[0] = n), o;
            }
            async calculateBinWitness(t, e) {
              const i = this,
                n = i.i32[0];
              await i._doCalculateWitness(t, e);
              const o = i.instance.exports.getWitnessBuffer();
              i.i32[0] = n;
              const a = i.memory.buffer.slice(o, o + i.NVars * i.n64 * 8);
              return new Uint8Array(a);
            }
            allocInt() {
              const t = this.i32[0];
              return (this.i32[0] = t + 8), t;
            }
            allocFr() {
              const t = this.i32[0];
              return (this.i32[0] = t + 4 * this.n32 + 8), t;
            }
            getInt(t) {
              return this.i32[t >> 2];
            }
            setInt(t, e) {
              this.i32[t >> 2] = e;
            }
            getFr(t) {
              const e = this,
                i = t >> 2;
              if (2147483648 & e.i32[i + 1]) {
                const t = new Array(e.n32);
                for (let n = 0; n < e.n32; n++)
                  t[e.n32 - 1 - n] = e.i32[i + 2 + n];
                const a = e.Fr.e(n.Scalar.fromArray(t, 4294967296));
                return 1073741824 & e.i32[i + 1]
                  ? ((o = a), e.Fr.mul(e.RInv, o))
                  : a;
              }
              return 2147483648 & e.i32[i]
                ? e.Fr.e(e.i32[i] - 4294967296)
                : e.Fr.e(e.i32[i]);
              var o;
            }
            setFr(t, e) {
              const i = this;
              e = i.Fr.e(e);
              const o = i.Fr.neg(i.Fr.e("80000000", 16)),
                a = i.Fr.e("7FFFFFFF", 16);
              if (i.Fr.geq(e, o) && i.Fr.leq(e, a)) {
                let a;
                return (
                  i.Fr.geq(e, i.Fr.zero)
                    ? (a = n.Scalar.toNumber(e))
                    : ((a = n.Scalar.toNumber(i.Fr.sub(e, o))),
                      (a -= 2147483648),
                      (a = 4294967296 + a)),
                  (i.i32[t >> 2] = a),
                  void (i.i32[1 + (t >> 2)] = 0)
                );
              }
              (i.i32[t >> 2] = 0), (i.i32[1 + (t >> 2)] = 2147483648);
              const s = n.Scalar.toArray(e, 4294967296);
              for (let e = 0; e < i.n32; e++) {
                const n = s.length - 1 - e;
                i.i32[2 + (t >> 2) + e] = n >= 0 ? s[n] : 0;
              }
            }
          }
          class l {
            constructor(t, e) {
              (this.instance = t),
                (this.version = this.instance.exports.getVersion()),
                (this.n32 = this.instance.exports.getFieldNumLen32()),
                this.instance.exports.getRawPrime();
              const i = new Array(this.n32);
              for (let t = 0; t < this.n32; t++)
                i[this.n32 - 1 - t] =
                  this.instance.exports.readSharedRWMemory(t);
              (this.prime = n.Scalar.fromArray(i, 4294967296)),
                (this.witnessSize = this.instance.exports.getWitnessSize()),
                (this.sanityCheck = e);
            }
            circom_version() {
              return this.instance.exports.getVersion();
            }
            async _doCalculateWitness(t, e) {
              this.instance.exports.init(this.sanityCheck || e ? 1 : 0);
              const i = Object.keys(t);
              var n = 0;
              if (
                (i.forEach((e) => {
                  const i = a(e),
                    r = parseInt(i.slice(0, 8), 16),
                    l = parseInt(i.slice(8, 16), 16),
                    c = o(t[e]);
                  for (let t = 0; t < c.length; t++) {
                    const e = s(c[t], this.n32);
                    for (let t = 0; t < this.n32; t++)
                      this.instance.exports.writeSharedRWMemory(
                        t,
                        e[this.n32 - 1 - t]
                      );
                    try {
                      this.instance.exports.setInputSignal(r, l, t), n++;
                    } catch (t) {
                      throw new Error(t);
                    }
                  }
                }),
                n < this.instance.exports.getInputSize())
              )
                throw new Error(
                  `Not all inputs have been set. Only ${n} out of ${this.instance.exports.getInputSize()}`
                );
            }
            async calculateWitness(t, e) {
              const i = [];
              await this._doCalculateWitness(t, e);
              for (let t = 0; t < this.witnessSize; t++) {
                this.instance.exports.getWitness(t);
                const e = new Uint32Array(this.n32);
                for (let t = 0; t < this.n32; t++)
                  e[this.n32 - 1 - t] =
                    this.instance.exports.readSharedRWMemory(t);
                i.push(n.Scalar.fromArray(e, 4294967296));
              }
              return i;
            }
            async calculateWTNSBin(t, e) {
              const i = new Uint32Array(
                  this.witnessSize * this.n32 + this.n32 + 11
                ),
                n = new Uint8Array(i.buffer);
              await this._doCalculateWitness(t, e),
                (n[0] = "w".charCodeAt(0)),
                (n[1] = "t".charCodeAt(0)),
                (n[2] = "n".charCodeAt(0)),
                (n[3] = "s".charCodeAt(0)),
                (i[1] = 2),
                (i[2] = 2),
                (i[3] = 1);
              const o = 4 * this.n32,
                a = (8 + o).toString(16);
              (i[4] = parseInt(a.slice(0, 8), 16)),
                (i[5] = parseInt(a.slice(8, 16), 16)),
                (i[6] = o),
                this.instance.exports.getRawPrime();
              var s = 7;
              for (let t = 0; t < this.n32; t++)
                i[s + t] = this.instance.exports.readSharedRWMemory(t);
              (i[(s += this.n32)] = this.witnessSize), (i[++s] = 2), s++;
              const r = (o * this.witnessSize).toString(16);
              (i[s] = parseInt(r.slice(0, 8), 16)),
                (i[s + 1] = parseInt(r.slice(8, 16), 16)),
                (s += 2);
              for (let t = 0; t < this.witnessSize; t++) {
                this.instance.exports.getWitness(t);
                for (let t = 0; t < this.n32; t++)
                  i[s + t] = this.instance.exports.readSharedRWMemory(t);
                s += this.n32;
              }
              return n;
            }
          }
          e.WitnessCalculatorBuilder = async function (t, e) {
            e = e || {};
            let i,
              o = 32767,
              a = !1;
            for (; !a; )
              try {
                (i = new WebAssembly.Memory({ initial: o })), (a = !0);
              } catch (t) {
                if (1 === o) throw t;
                console.warn(
                  "Could not allocate " +
                    1024 * o * 64 +
                    " bytes. This may cause severe instability. Trying with " +
                    (1024 * o * 64) / 2 +
                    " bytes"
                ),
                  (o = Math.floor(o / 2));
              }
            const s = await WebAssembly.compile(t);
            let c,
              d = "",
              u = "",
              h = 1,
              f = 0,
              _ = 0;
            const p = await WebAssembly.instantiate(s, {
              env: { memory: i },
              runtime: {
                exceptionHandler: function (t) {
                  let e;
                  throw (
                    ((e =
                      1 == t
                        ? "Signal not found. "
                        : 2 == t
                          ? "Too many signals set. "
                          : 3 == t
                            ? "Signal already set. "
                            : 4 == t
                              ? "Assert Failed. "
                              : 5 == t
                                ? "Not enough memory. "
                                : 6 == t
                                  ? "Input signal array access exceeds the size. "
                                  : "Unknown error. "),
                    console.error("ERROR: ", t, d),
                    new Error(e + d))
                  );
                },
                printErrorMessage: function () {
                  d += m() + "\n";
                },
                writeBufferMessage: function () {
                  const t = m();
                  "\n" === t
                    ? (console.log(u), (u = ""))
                    : ("" !== u && (u += " "), (u += t));
                },
                showSharedRWMemory: function () {
                  const t = p.exports.getFieldNumLen32(),
                    e = new Uint32Array(t);
                  for (let i = 0; i < t; i++)
                    e[t - 1 - i] = p.exports.readSharedRWMemory(i);
                  if (h >= 2 && (f >= 1 || _ >= 7)) {
                    "" !== u && (u += " ");
                    const t = n.Scalar.fromArray(e, 4294967296).toString();
                    u += t;
                  } else console.log(n.Scalar.fromArray(e, 4294967296));
                },
                error: function (t, i, n, o, a, s) {
                  let r;
                  throw (
                    ((r =
                      7 == t
                        ? L(i) +
                          " " +
                          c.getFr(o).toString() +
                          " != " +
                          c.getFr(a).toString() +
                          " " +
                          L(s)
                        : 9 == t
                          ? L(i) + " " + c.getFr(o).toString() + " " + L(a)
                          : 5 == t && e.sym
                            ? L(i) + " " + e.sym.labelIdx2Name[a]
                            : L(i) + " " + n + " " + o + " " + a + " " + s),
                    console.log("ERROR: ", t, r),
                    new Error(r))
                  );
                },
                log: function (t) {
                  console.log(c.getFr(t).toString());
                },
                logGetSignal: function (t, i) {
                  e.logGetSignal && e.logGetSignal(t, c.getFr(i));
                },
                logSetSignal: function (t, i) {
                  e.logSetSignal && e.logSetSignal(t, c.getFr(i));
                },
                logStartComponent: function (t) {
                  e.logStartComponent && e.logStartComponent(t);
                },
                logFinishComponent: function (t) {
                  e.logFinishComponent && e.logFinishComponent(t);
                },
              },
            });
            "function" == typeof p.exports.getVersion &&
              (h = p.exports.getVersion()),
              "function" == typeof p.exports.getMinorVersion &&
                (f = p.exports.getMinorVersion()),
              "function" == typeof p.exports.getPatchVersion &&
                (_ = p.exports.getPatchVersion());
            const g =
              e &&
              (e.sanityCheck ||
                e.logGetSignal ||
                e.logSetSignal ||
                e.logStartComponent ||
                e.logFinishComponent);
            return (c = 2 === h ? new l(p, g) : new r(i, p, g)), c;
            function m() {
              for (var t = "", e = p.exports.getMessageChar(); 0 != e; )
                (t += String.fromCharCode(e)), (e = p.exports.getMessageChar());
              return t;
            }
            function L(t) {
              const e = new Uint8Array(i.buffer),
                n = [];
              for (let i = 0; e[t + i] > 0; i++) n.push(e[t + i]);
              return String.fromCharCode.apply(null, n);
            }
          };
        },
        758: (t, e, i) => {
          "use strict";
          Object.defineProperty(e, "__esModule", { value: !0 });
          var n = i(982),
            o = i(189),
            a = i(857),
            s = i(667),
            r = i(14);
          function l(t) {
            return t && "object" == typeof t && "default" in t
              ? t
              : { default: t };
          }
          var c = l(n),
            d = l(a),
            u = l(s);
          const h = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
          function f(t, e) {
            return e && 10 != e
              ? 16 == e
                ? "0x" == t.slice(0, 2)
                  ? BigInt(t)
                  : BigInt("0x" + t)
                : void 0
              : BigInt(t);
          }
          const _ = f;
          function p(t) {
            const e = t.toString(16);
            return 4 * (e.length - 1) + h[parseInt(e[0], 16)];
          }
          function g(t) {
            return BigInt(t) < BigInt(0);
          }
          function m(t) {
            return !t;
          }
          function L(t, e) {
            return BigInt(t) << BigInt(e);
          }
          function b(t, e) {
            return BigInt(t) >> BigInt(e);
          }
          const F = L,
            y = b;
          function x(t) {
            return (BigInt(t) & BigInt(1)) == BigInt(1);
          }
          function w(t) {
            let e = BigInt(t);
            const i = [];
            for (; e; ) {
              if (e & BigInt(1)) {
                const t = 2 - Number(e % BigInt(4));
                i.push(t), (e -= BigInt(t));
              } else i.push(0);
              e >>= BigInt(1);
            }
            return i;
          }
          function B(t) {
            let e = BigInt(t);
            const i = [];
            for (; e; )
              e & BigInt(1) ? i.push(1) : i.push(0), (e >>= BigInt(1));
            return i;
          }
          function v(t) {
            if (t > BigInt(Number.MAX_SAFE_INTEGER))
              throw new Error("Number too big");
            return Number(t);
          }
          function E(t, e) {
            return BigInt(t) + BigInt(e);
          }
          function C(t, e) {
            return BigInt(t) - BigInt(e);
          }
          function A(t) {
            return -BigInt(t);
          }
          function q(t, e) {
            return BigInt(t) * BigInt(e);
          }
          function O(t, e) {
            return BigInt(t) ** BigInt(e);
          }
          function I(t, e) {
            return BigInt(t) / BigInt(e);
          }
          function S(t, e) {
            return BigInt(t) % BigInt(e);
          }
          function P(t, e) {
            return BigInt(t) == BigInt(e);
          }
          function z(t, e) {
            return BigInt(t) > BigInt(e);
          }
          function M(t, e) {
            return BigInt(t) >= BigInt(e);
          }
          function R(t, e) {
            return BigInt(t) & BigInt(e);
          }
          function T(t, e, i, n) {
            const o = "0000000" + i.toString(16),
              a = new Uint32Array(t.buffer, t.byteOffset + e, n / 4),
              s = 1 + ((4 * (o.length - 7) - 1) >> 5);
            for (let t = 0; t < s; t++)
              a[t] = parseInt(
                o.substring(o.length - 8 * t - 8, o.length - 8 * t),
                16
              );
            for (let t = s; t < a.length; t++) a[t] = 0;
            for (let e = 4 * a.length; e < n; e++)
              t[e] = v(R(b(i, 8 * e), 255));
          }
          function N(t, e, i, n) {
            const o = "0000000" + i.toString(16),
              a = new DataView(t.buffer, t.byteOffset + e, n),
              s = 1 + ((4 * (o.length - 7) - 1) >> 5);
            for (let t = 0; t < s; t++)
              a.setUint32(
                n - 4 * t - 4,
                parseInt(
                  o.substring(o.length - 8 * t - 8, o.length - 8 * t),
                  16
                ),
                !1
              );
            for (let t = 0; t < n / 4 - s; t++) a[t] = 0;
          }
          function U(t, e, i) {
            (i = i || t.byteLength), (e = e || 0);
            const n = new Uint32Array(t.buffer, t.byteOffset + e, i / 4),
              o = new Array(i / 4);
            return (
              n.forEach(
                (t, e) =>
                  (o[o.length - e - 1] = t.toString(16).padStart(8, "0"))
              ),
              f(o.join(""), 16)
            );
          }
          function G(t, e, i) {
            (i = i || t.byteLength), (e = e || 0);
            const n = new DataView(t.buffer, t.byteOffset + e, i),
              o = new Array(i / 4);
            for (let t = 0; t < i / 4; t++)
              o[t] = n
                .getUint32(4 * t, !1)
                .toString(16)
                .padStart(8, "0");
            return f(o.join(""), 16);
          }
          function j(t, e) {
            return t.toString(e);
          }
          function k(t) {
            const e = new Uint8Array(Math.floor((p(t) - 1) / 8) + 1);
            return T(e, 0, t, e.byteLength), e;
          }
          const $ = _(0),
            Z = _(1);
          var W = Object.freeze({
            __proto__: null,
            fromString: f,
            e: _,
            fromArray: function (t, e) {
              let i = BigInt(0);
              e = BigInt(e);
              for (let n = 0; n < t.length; n++) i = i * e + BigInt(t[n]);
              return i;
            },
            bitLength: p,
            isNegative: g,
            isZero: m,
            shiftLeft: L,
            shiftRight: b,
            shl: F,
            shr: y,
            isOdd: x,
            naf: w,
            bits: B,
            toNumber: v,
            toArray: function (t, e) {
              const i = [];
              let n = BigInt(t);
              for (e = BigInt(e); n; ) i.unshift(Number(n % e)), (n /= e);
              return i;
            },
            add: E,
            sub: C,
            neg: A,
            mul: q,
            square: function (t) {
              return BigInt(t) * BigInt(t);
            },
            pow: O,
            exp: function (t, e) {
              return BigInt(t) ** BigInt(e);
            },
            abs: function (t) {
              return BigInt(t) >= 0 ? BigInt(t) : -BigInt(t);
            },
            div: I,
            mod: S,
            eq: P,
            neq: function (t, e) {
              return BigInt(t) != BigInt(e);
            },
            lt: function (t, e) {
              return BigInt(t) < BigInt(e);
            },
            gt: z,
            leq: function (t, e) {
              return BigInt(t) <= BigInt(e);
            },
            geq: M,
            band: R,
            bor: function (t, e) {
              return BigInt(t) | BigInt(e);
            },
            bxor: function (t, e) {
              return BigInt(t) ^ BigInt(e);
            },
            land: function (t, e) {
              return BigInt(t) && BigInt(e);
            },
            lor: function (t, e) {
              return BigInt(t) || BigInt(e);
            },
            lnot: function (t) {
              return !BigInt(t);
            },
            toRprLE: T,
            toRprBE: N,
            fromRprLE: U,
            fromRprBE: G,
            toString: j,
            toLEBuff: k,
            zero: $,
            one: Z,
          });
          function D(t) {
            return (
              (4294901760 & t ? ((t &= 4294901760), 16) : 0) |
              (4278255360 & t ? ((t &= 4278255360), 8) : 0) |
              (4042322160 & t ? ((t &= 4042322160), 4) : 0) |
              (3435973836 & t ? ((t &= 3435973836), 2) : 0) |
              !!(2863311530 & t)
            );
          }
          function J(t, e, i, n, o) {
            const a = 1 << i;
            if (1 == a) return [e[n]];
            if (2 == a)
              return [t.F.add(e[n], e[n + o]), t.F.sub(e[n], e[n + o])];
            const s = a >> 1,
              r = J(t, e, i - 1, n, 2 * o),
              l = J(t, e, i - 1, n + o, 2 * o),
              c = new Array(a);
            for (let e = 0; e < s; e++)
              (c[e] = t.F.add(r[e], t.F.mul(t.roots[i][e], l[e]))),
                (c[e + s] = t.F.sub(r[e], t.F.mul(t.roots[i][e], l[e])));
            return c;
          }
          function V(t, e, i) {
            const n = 1 << i;
            if (1 == n) return [e[0]];
            const o = n >> 1,
              a = V(t, e.slice(0, o), i - 1),
              s = V(t, e.slice(o), i - 1),
              r = new Array(n);
            for (let e = 0; e < o; e++)
              (r[e] = t.F.add(a[e], t.F.mul(t.roots[i][e], s[e]))),
                (r[e + o] = t.F.sub(a[e], t.F.mul(t.roots[i][e], s[e])));
            return r;
          }
          const Q = [];
          for (let t = 0; t < 256; t++) Q[t] = X(t, 8);
          function X(t, e) {
            let i = 0,
              n = t;
            for (let t = 0; t < e; t++) (i <<= 1), (i |= 1 & n), (n >>= 1);
            return i;
          }
          function K(t, e) {
            return (
              (Q[t >>> 24] |
                (Q[(t >>> 16) & 255] << 8) |
                (Q[(t >>> 8) & 255] << 16) |
                (Q[255 & t] << 24)) >>>
              (32 - e)
            );
          }
          function Y(t, e) {
            for (let i = 0; i < t.length; i++) {
              const n = K(i, e);
              if (n > i) {
                const e = t[i];
                (t[i] = t[n]), (t[n] = e);
              }
            }
          }
          function H(t, e, i) {
            let n;
            if (m(i)) return t.zero;
            const o = w(i);
            if (1 == o[o.length - 1]) n = e;
            else {
              if (-1 != o[o.length - 1]) throw new Error("invlaud NAF");
              n = t.neg(e);
            }
            for (let i = o.length - 2; i >= 0; i--)
              (n = t.double(n)),
                1 == o[i] ? (n = t.add(n, e)) : -1 == o[i] && (n = t.sub(n, e));
            return n;
          }
          function tt(t, e, i) {
            if (m(i)) return t.one;
            const n = B(i);
            if (0 == n.length) return t.one;
            let o = e;
            for (let i = n.length - 2; i >= 0; i--)
              (o = t.square(o)), n[i] && (o = t.mul(o, e));
            return o;
          }
          function et(t) {
            if (t.m % 2 == 1)
              if (P(S(t.p, 4), 1))
                if (P(S(t.p, 8), 1))
                  if (P(S(t.p, 16), 1))
                    !(function (t) {
                      for (
                        t.sqrt_q = O(t.p, t.m),
                          t.sqrt_s = 0,
                          t.sqrt_t = C(t.sqrt_q, 1);
                        !x(t.sqrt_t);

                      )
                        (t.sqrt_s = t.sqrt_s + 1), (t.sqrt_t = I(t.sqrt_t, 2));
                      let e = t.one;
                      for (; t.eq(e, t.one); ) {
                        const i = t.random();
                        (t.sqrt_z = t.pow(i, t.sqrt_t)),
                          (e = t.pow(t.sqrt_z, 2 ** (t.sqrt_s - 1)));
                      }
                      (t.sqrt_tm1d2 = I(C(t.sqrt_t, 1), 2)),
                        (t.sqrt = function (t) {
                          const e = this;
                          if (e.isZero(t)) return e.zero;
                          let i = e.pow(t, e.sqrt_tm1d2);
                          const n = e.pow(
                            e.mul(e.square(i), t),
                            2 ** (e.sqrt_s - 1)
                          );
                          if (e.eq(n, e.negone)) return null;
                          let o = e.sqrt_s,
                            a = e.mul(t, i),
                            s = e.mul(a, i),
                            r = e.sqrt_z;
                          for (; !e.eq(s, e.one); ) {
                            let t = e.square(s),
                              n = 1;
                            for (; !e.eq(t, e.one); ) (t = e.square(t)), n++;
                            i = r;
                            for (let t = 0; t < o - n - 1; t++) i = e.square(i);
                            (r = e.square(i)),
                              (s = e.mul(s, r)),
                              (a = e.mul(a, i)),
                              (o = n);
                          }
                          return e.geq(a, e.zero) ? a : e.neg(a);
                        });
                    })(t);
                  else {
                    if (!P(S(t.p, 16), 9)) throw new Error("Field withot sqrt");
                    !(function (t) {
                      t.sqrt = function () {
                        throw new Error("Sqrt alg 4 not implemented");
                      };
                    })(t);
                  }
                else {
                  if (!P(S(t.p, 8), 5)) throw new Error("Field withot sqrt");
                  !(function (t) {
                    t.sqrt = function () {
                      throw new Error("Sqrt alg 3 not implemented");
                    };
                  })(t);
                }
              else
                P(S(t.p, 4), 3) &&
                  (function (t) {
                    (t.sqrt_q = O(t.p, t.m)),
                      (t.sqrt_e1 = I(C(t.sqrt_q, 3), 4)),
                      (t.sqrt = function (e) {
                        if (this.isZero(e)) return this.zero;
                        const i = this.pow(e, this.sqrt_e1),
                          n = this.mul(this.square(i), e);
                        if (this.eq(n, this.negone)) return null;
                        const o = this.mul(i, e);
                        return t.geq(o, t.zero) ? o : t.neg(o);
                      });
                  })(t);
            else {
              const e = S(O(t.p, t.m / 2), 4);
              1 == e
                ? (function (t) {
                    t.sqrt = function () {
                      throw new Error("Sqrt alg 10 not implemented");
                    };
                  })(t)
                : 3 == e
                  ? (function (t) {
                      (t.sqrt_q = O(t.p, t.m / 2)),
                        (t.sqrt_e34 = I(C(t.sqrt_q, 3), 4)),
                        (t.sqrt_e12 = I(C(t.sqrt_q, 1), 2)),
                        (t.frobenius = function (e, i) {
                          return e % 2 == 1 ? t.conjugate(i) : i;
                        }),
                        (t.sqrt = function (t) {
                          const e = this,
                            i = e.pow(t, e.sqrt_e34),
                            n = e.mul(e.square(i), t),
                            o = e.mul(e.frobenius(1, n), n);
                          if (e.eq(o, e.negone)) return null;
                          const a = e.mul(i, t);
                          let s;
                          if (e.eq(n, e.negone))
                            s = e.mul(a, [e.F.zero, e.F.one]);
                          else {
                            const t = e.pow(e.add(e.one, n), e.sqrt_e12);
                            s = e.mul(t, a);
                          }
                          return e.geq(s, e.zero) ? s : e.neg(s);
                        });
                    })(t)
                  : (function (t) {
                      t.sqrt = function () {
                        throw new Error("Sqrt alg 8 not implemented");
                      };
                    })(t);
            }
          }
          function it(t, e, i, n, o) {
            (t[e] = (t[e] + t[i]) >>> 0),
              (t[o] = (t[o] ^ t[e]) >>> 0),
              (t[o] = ((t[o] << 16) | ((t[o] >>> 16) & 65535)) >>> 0),
              (t[n] = (t[n] + t[o]) >>> 0),
              (t[i] = (t[i] ^ t[n]) >>> 0),
              (t[i] = ((t[i] << 12) | ((t[i] >>> 20) & 4095)) >>> 0),
              (t[e] = (t[e] + t[i]) >>> 0),
              (t[o] = (t[o] ^ t[e]) >>> 0),
              (t[o] = ((t[o] << 8) | ((t[o] >>> 24) & 255)) >>> 0),
              (t[n] = (t[n] + t[o]) >>> 0),
              (t[i] = (t[i] ^ t[n]) >>> 0),
              (t[i] = ((t[i] << 7) | ((t[i] >>> 25) & 127)) >>> 0);
          }
          class nt {
            constructor(t) {
              (t = t || [0, 0, 0, 0, 0, 0, 0, 0]),
                (this.state = [
                  1634760805,
                  857760878,
                  2036477234,
                  1797285236,
                  t[0],
                  t[1],
                  t[2],
                  t[3],
                  t[4],
                  t[5],
                  t[6],
                  t[7],
                  0,
                  0,
                  0,
                  0,
                ]),
                (this.idx = 16),
                (this.buff = new Array(16));
            }
            nextU32() {
              return 16 == this.idx && this.update(), this.buff[this.idx++];
            }
            nextU64() {
              return E(q(this.nextU32(), 4294967296), this.nextU32());
            }
            nextBool() {
              return !(1 & ~this.nextU32());
            }
            update() {
              for (let t = 0; t < 16; t++) this.buff[t] = this.state[t];
              for (let e = 0; e < 10; e++)
                it((t = this.buff), 0, 4, 8, 12),
                  it(t, 1, 5, 9, 13),
                  it(t, 2, 6, 10, 14),
                  it(t, 3, 7, 11, 15),
                  it(t, 0, 5, 10, 15),
                  it(t, 1, 6, 11, 12),
                  it(t, 2, 7, 8, 13),
                  it(t, 3, 4, 9, 14);
              var t;
              for (let t = 0; t < 16; t++)
                this.buff[t] = (this.buff[t] + this.state[t]) >>> 0;
              (this.idx = 0),
                (this.state[12] = (this.state[12] + 1) >>> 0),
                0 == this.state[12] &&
                  ((this.state[13] = (this.state[13] + 1) >>> 0),
                  0 == this.state[13] &&
                    ((this.state[14] = (this.state[14] + 1) >>> 0),
                    0 == this.state[14] &&
                      (this.state[15] = (this.state[15] + 1) >>> 0)));
            }
          }
          function ot(t) {
            let e = new Uint8Array(t);
            if (process.browser)
              if (void 0 !== globalThis.crypto)
                globalThis.crypto.getRandomValues(e);
              else
                for (let i = 0; i < t; i++)
                  e[i] = (4294967296 * Math.random()) >>> 0;
            else c.default.randomFillSync(e);
            return e;
          }
          let at = null;
          function st() {
            return (
              at ||
              ((at = new nt(
                (function () {
                  const t = ot(32),
                    e = new Uint32Array(t.buffer),
                    i = [];
                  for (let t = 0; t < 8; t++) i.push(e[t]);
                  return i;
                })()
              )),
              at)
            );
          }
          class rt {
            constructor(t, e, i) {
              (this.F = e), (this.G = t), (this.opMulGF = i);
              let n = e.sqrt_t || e.t,
                o = e.sqrt_s || e.s,
                a = e.one;
              for (; e.eq(e.pow(a, e.half), e.one); ) a = e.add(a, e.one);
              (this.w = new Array(o + 1)),
                (this.wi = new Array(o + 1)),
                (this.w[o] = this.F.pow(a, n)),
                (this.wi[o] = this.F.inv(this.w[o]));
              let s = o - 1;
              for (; s >= 0; )
                (this.w[s] = this.F.square(this.w[s + 1])),
                  (this.wi[s] = this.F.square(this.wi[s + 1])),
                  s--;
              (this.roots = []), this._setRoots(Math.min(o, 15));
            }
            _setRoots(t) {
              for (let e = t; e >= 0 && !this.roots[e]; e--) {
                let t = this.F.one;
                const i = 1 << e,
                  n = new Array(i);
                for (let o = 0; o < i; o++)
                  (n[o] = t), (t = this.F.mul(t, this.w[e]));
                this.roots[e] = n;
              }
            }
            fft(t) {
              if (t.length <= 1) return t;
              const e = lt(t.length - 1) + 1;
              this._setRoots(e);
              const i = 1 << e;
              if (t.length != i) throw new Error("Size must be multiple of 2");
              return ct(this, t, e, 0, 1);
            }
            ifft(t) {
              if (t.length <= 1) return t;
              const e = lt(t.length - 1) + 1;
              this._setRoots(e);
              const i = 1 << e;
              if (t.length != i) throw new Error("Size must be multiple of 2");
              const n = ct(this, t, e, 0, 1),
                o = this.F.inv(this.F.mulScalar(this.F.one, i)),
                a = new Array(i);
              for (let t = 0; t < i; t++)
                a[t] = this.opMulGF(n[(i - t) % i], o);
              return a;
            }
          }
          function lt(t) {
            return (
              (4294901760 & t ? ((t &= 4294901760), 16) : 0) |
              (4278255360 & t ? ((t &= 4278255360), 8) : 0) |
              (4042322160 & t ? ((t &= 4042322160), 4) : 0) |
              (3435973836 & t ? ((t &= 3435973836), 2) : 0) |
              !!(2863311530 & t)
            );
          }
          function ct(t, e, i, n, o) {
            const a = 1 << i;
            if (1 == a) return [e[n]];
            if (2 == a)
              return [t.G.add(e[n], e[n + o]), t.G.sub(e[n], e[n + o])];
            const s = a >> 1,
              r = ct(t, e, i - 1, n, 2 * o),
              l = ct(t, e, i - 1, n + o, 2 * o),
              c = new Array(a);
            for (let e = 0; e < s; e++)
              (c[e] = t.G.add(r[e], t.opMulGF(l[e], t.roots[i][e]))),
                (c[e + s] = t.G.sub(r[e], t.opMulGF(l[e], t.roots[i][e])));
            return c;
          }
          class dt {
            constructor(t) {
              (this.type = "F1"),
                (this.one = BigInt(1)),
                (this.zero = BigInt(0)),
                (this.p = BigInt(t)),
                (this.m = 1),
                (this.negone = this.p - this.one),
                (this.two = BigInt(2)),
                (this.half = this.p >> this.one),
                (this.bitLength = p(this.p)),
                (this.mask = (this.one << BigInt(this.bitLength)) - this.one),
                (this.n64 = Math.floor((this.bitLength - 1) / 64) + 1),
                (this.n32 = 2 * this.n64),
                (this.n8 = 8 * this.n64),
                (this.R = this.e(this.one << BigInt(64 * this.n64))),
                (this.Ri = this.inv(this.R));
              const e = this.negone >> this.one;
              this.nqr = this.two;
              let i = this.pow(this.nqr, e);
              for (; !this.eq(i, this.negone); )
                (this.nqr = this.nqr + this.one), (i = this.pow(this.nqr, e));
              for (
                this.s = 0, this.t = this.negone;
                (this.t & this.one) == this.zero;

              )
                (this.s = this.s + 1), (this.t = this.t >> this.one);
              (this.nqr_to_t = this.pow(this.nqr, this.t)),
                et(this),
                (this.FFT = new rt(this, this, this.mul.bind(this))),
                (this.fft = this.FFT.fft.bind(this.FFT)),
                (this.ifft = this.FFT.ifft.bind(this.FFT)),
                (this.w = this.FFT.w),
                (this.wi = this.FFT.wi),
                (this.shift = this.square(this.nqr)),
                (this.k = this.exp(this.nqr, 2 ** this.s));
            }
            e(t, e) {
              let i;
              if (
                (e ? 16 == e && (i = BigInt("0x" + t)) : (i = BigInt(t)), i < 0)
              ) {
                let t = -i;
                return t >= this.p && (t %= this.p), this.p - t;
              }
              return i >= this.p ? i % this.p : i;
            }
            add(t, e) {
              const i = t + e;
              return i >= this.p ? i - this.p : i;
            }
            sub(t, e) {
              return t >= e ? t - e : this.p - e + t;
            }
            neg(t) {
              return t ? this.p - t : t;
            }
            mul(t, e) {
              return (t * e) % this.p;
            }
            mulScalar(t, e) {
              return (t * this.e(e)) % this.p;
            }
            square(t) {
              return (t * t) % this.p;
            }
            eq(t, e) {
              return t == e;
            }
            neq(t, e) {
              return t != e;
            }
            lt(t, e) {
              return (
                (t > this.half ? t - this.p : t) <
                (e > this.half ? e - this.p : e)
              );
            }
            gt(t, e) {
              return (
                (t > this.half ? t - this.p : t) >
                (e > this.half ? e - this.p : e)
              );
            }
            leq(t, e) {
              return (
                (t > this.half ? t - this.p : t) <=
                (e > this.half ? e - this.p : e)
              );
            }
            geq(t, e) {
              return (
                (t > this.half ? t - this.p : t) >=
                (e > this.half ? e - this.p : e)
              );
            }
            div(t, e) {
              return this.mul(t, this.inv(e));
            }
            idiv(t, e) {
              if (!e) throw new Error("Division by zero");
              return t / e;
            }
            inv(t) {
              if (!t) throw new Error("Division by zero");
              let e = this.zero,
                i = this.p,
                n = this.one,
                o = t % this.p;
              for (; o; ) {
                let t = i / o;
                ([e, n] = [n, e - t * n]), ([i, o] = [o, i - t * o]);
              }
              return e < this.zero && (e += this.p), e;
            }
            mod(t, e) {
              return t % e;
            }
            pow(t, e) {
              return tt(this, t, e);
            }
            exp(t, e) {
              return tt(this, t, e);
            }
            band(t, e) {
              const i = t & e & this.mask;
              return i >= this.p ? i - this.p : i;
            }
            bor(t, e) {
              const i = (t | e) & this.mask;
              return i >= this.p ? i - this.p : i;
            }
            bxor(t, e) {
              const i = (t ^ e) & this.mask;
              return i >= this.p ? i - this.p : i;
            }
            bnot(t) {
              const e = t ^ this.mask;
              return e >= this.p ? e - this.p : e;
            }
            shl(t, e) {
              if (Number(e) < this.bitLength) {
                const i = (t << e) & this.mask;
                return i >= this.p ? i - this.p : i;
              }
              {
                const i = this.p - e;
                return Number(i) < this.bitLength ? t >> i : this.zero;
              }
            }
            shr(t, e) {
              if (Number(e) < this.bitLength) return t >> e;
              {
                const i = this.p - e;
                if (Number(i) < this.bitLength) {
                  const e = (t << i) & this.mask;
                  return e >= this.p ? e - this.p : e;
                }
                return 0;
              }
            }
            land(t, e) {
              return t && e ? this.one : this.zero;
            }
            lor(t, e) {
              return t || e ? this.one : this.zero;
            }
            lnot(t) {
              return t ? this.zero : this.one;
            }
            sqrt_old(t) {
              if (t == this.zero) return this.zero;
              if (this.pow(t, this.negone >> this.one) != this.one) return null;
              let e = this.s,
                i = this.nqr_to_t,
                n = this.pow(t, this.t),
                o = this.pow(t, this.add(this.t, this.one) >> this.one);
              for (; n != this.one; ) {
                let t = this.square(n),
                  a = 1;
                for (; t != this.one; ) a++, (t = this.square(t));
                let s = i;
                for (let t = 0; t < e - a - 1; t++) s = this.square(s);
                (e = a),
                  (i = this.square(s)),
                  (n = this.mul(n, i)),
                  (o = this.mul(o, s));
              }
              return o > this.p >> this.one && (o = this.neg(o)), o;
            }
            normalize(t, e) {
              if ((t = BigInt(t, e)) < 0) {
                let e = -t;
                return e >= this.p && (e %= this.p), this.p - e;
              }
              return t >= this.p ? t % this.p : t;
            }
            random() {
              const t = (2 * this.bitLength) / 8;
              let e = this.zero;
              for (let i = 0; i < t; i++)
                e = (e << BigInt(8)) + BigInt(ot(1)[0]);
              return e % this.p;
            }
            toString(t, e) {
              let i;
              return (
                (e = e || 10),
                (i =
                  t > this.half && 10 == e
                    ? "-" + (this.p - t).toString(e)
                    : t.toString(e)),
                i
              );
            }
            isZero(t) {
              return t == this.zero;
            }
            fromRng(t) {
              let e;
              do {
                e = this.zero;
                for (let i = 0; i < this.n64; i++)
                  e += t.nextU64() << BigInt(64 * i);
                e &= this.mask;
              } while (e >= this.p);
              return (e = (e * this.Ri) % this.p), e;
            }
            fft(t) {
              return this.FFT.fft(t);
            }
            ifft(t) {
              return this.FFT.ifft(t);
            }
            toRprLE(t, e, i) {
              T(t, e, i, 8 * this.n64);
            }
            toRprBE(t, e, i) {
              N(t, e, i, 8 * this.n64);
            }
            toRprBEM(t, e, i) {
              return this.toRprBE(t, e, this.mul(this.R, i));
            }
            toRprLEM(t, e, i) {
              return this.toRprLE(t, e, this.mul(this.R, i));
            }
            fromRprLE(t, e) {
              return U(t, e, this.n8);
            }
            fromRprBE(t, e) {
              return G(t, e, this.n8);
            }
            fromRprLEM(t, e) {
              return this.mul(this.fromRprLE(t, e), this.Ri);
            }
            fromRprBEM(t, e) {
              return this.mul(this.fromRprBE(t, e), this.Ri);
            }
            toObject(t) {
              return t;
            }
          }
          function ut(t, e) {
            if (Array.isArray(e)) {
              for (let i = e.length - 1; i >= 0; i--)
                if (!t.F.isZero(e[i])) return ut(t.F, e[i]);
              return 0;
            }
            return z(e, t.neg(e));
          }
          function ht(t, e) {
            let i = t;
            void 0 === e &&
              0 == (e = Math.floor((p(t) - 1) / 8) + 1) &&
              (e = 1);
            const n = new Uint8Array(e),
              o = new DataView(n.buffer);
            let a = 0;
            for (; a < e; )
              a + 4 <= e
                ? (o.setUint32(a, Number(i & BigInt(4294967295)), !0),
                  (a += 4),
                  (i >>= BigInt(32)))
                : a + 2 <= e
                  ? (o.setUint16(a, Number(i & BigInt(65535)), !0),
                    (a += 2),
                    (i >>= BigInt(16)))
                  : (o.setUint8(a, Number(i & BigInt(255)), !0),
                    (a += 1),
                    (i >>= BigInt(8)));
            if (i) throw new Error("Number does not fit in this length");
            return n;
          }
          const ft = [];
          for (let t = 0; t < 256; t++) ft[t] = _t(t, 8);
          function _t(t, e) {
            let i = 0,
              n = t;
            for (let t = 0; t < e; t++) (i <<= 1), (i |= 1 & n), (n >>= 1);
            return i;
          }
          function pt(t, e) {
            return (
              (ft[t >>> 24] |
                (ft[(t >>> 16) & 255] << 8) |
                (ft[(t >>> 8) & 255] << 16) |
                (ft[255 & t] << 24)) >>>
              (32 - e)
            );
          }
          function gt(t) {
            return (
              (4294901760 & t ? ((t &= 4294901760), 16) : 0) |
              (4278255360 & t ? ((t &= 4278255360), 8) : 0) |
              (4042322160 & t ? ((t &= 4042322160), 4) : 0) |
              (3435973836 & t ? ((t &= 3435973836), 2) : 0) |
              !!(2863311530 & t)
            );
          }
          function mt(t, e) {
            const i = t.byteLength / e,
              n = gt(i);
            if (i != 1 << n) throw new Error("Invalid number of pointers");
            for (let o = 0; o < i; o++) {
              const i = pt(o, n);
              if (o > i) {
                const n = t.slice(o * e, (o + 1) * e);
                t.set(t.slice(i * e, (i + 1) * e), o * e), t.set(n, i * e);
              }
            }
          }
          function Lt(t, e) {
            const i = new Uint8Array(e * t.length);
            for (let n = 0; n < t.length; n++) i.set(t[n], n * e);
            return i;
          }
          function bt(t, e) {
            const i = t.byteLength / e,
              n = new Array(i);
            for (let o = 0; o < i; o++) n[o] = t.slice(o * e, o * e + e);
            return n;
          }
          var Ft = Object.freeze({
            __proto__: null,
            stringifyBigInts: function t(e) {
              if ("bigint" == typeof e || void 0 !== e.eq)
                return e.toString(10);
              if (e instanceof Uint8Array) return U(e, 0);
              if (Array.isArray(e)) return e.map(t);
              if ("object" == typeof e) {
                const i = {};
                return (
                  Object.keys(e).forEach((n) => {
                    i[n] = t(e[n]);
                  }),
                  i
                );
              }
              return e;
            },
            unstringifyBigInts: function t(e) {
              if ("string" == typeof e && /^[0-9]+$/.test(e)) return BigInt(e);
              if ("string" == typeof e && /^0x[0-9a-fA-F]+$/.test(e))
                return BigInt(e);
              if (Array.isArray(e)) return e.map(t);
              if ("object" == typeof e) {
                if (null === e) return null;
                const i = {};
                return (
                  Object.keys(e).forEach((n) => {
                    i[n] = t(e[n]);
                  }),
                  i
                );
              }
              return e;
            },
            beBuff2int: function (t) {
              let e = BigInt(0),
                i = t.length,
                n = 0;
              const o = new DataView(t.buffer, t.byteOffset, t.byteLength);
              for (; i > 0; )
                i >= 4
                  ? ((i -= 4),
                    (e += BigInt(o.getUint32(i)) << BigInt(8 * n)),
                    (n += 4))
                  : i >= 2
                    ? ((i -= 2),
                      (e += BigInt(o.getUint16(i)) << BigInt(8 * n)),
                      (n += 2))
                    : ((i -= 1),
                      (e += BigInt(o.getUint8(i)) << BigInt(8 * n)),
                      (n += 1));
              return e;
            },
            beInt2Buff: function (t, e) {
              let i = t;
              const n = new Uint8Array(e),
                o = new DataView(n.buffer);
              let a = e;
              for (; a > 0; )
                a - 4 >= 0
                  ? ((a -= 4),
                    o.setUint32(a, Number(i & BigInt(4294967295))),
                    (i >>= BigInt(32)))
                  : a - 2 >= 0
                    ? ((a -= 2),
                      o.setUint16(a, Number(i & BigInt(65535))),
                      (i >>= BigInt(16)))
                    : ((a -= 1),
                      o.setUint8(a, Number(i & BigInt(255))),
                      (i >>= BigInt(8)));
              if (i) throw new Error("Number does not fit in this length");
              return n;
            },
            leBuff2int: function (t) {
              let e = BigInt(0),
                i = 0;
              const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
              for (; i < t.length; )
                i + 4 <= t.length
                  ? ((e += BigInt(n.getUint32(i, !0)) << BigInt(8 * i)),
                    (i += 4))
                  : i + 2 <= t.length
                    ? ((e += BigInt(n.getUint16(i, !0)) << BigInt(8 * i)),
                      (i += 2))
                    : ((e += BigInt(n.getUint8(i, !0)) << BigInt(8 * i)),
                      (i += 1));
              return e;
            },
            leInt2Buff: ht,
            stringifyFElements: function t(e, i) {
              if ("bigint" == typeof i || void 0 !== i.eq)
                return i.toString(10);
              if (i instanceof Uint8Array) return e.toString(e.e(i));
              if (Array.isArray(i)) return i.map(t.bind(this, e));
              if ("object" == typeof i) {
                const n = {};
                return (
                  Object.keys(i).forEach((o) => {
                    n[o] = t(e, i[o]);
                  }),
                  n
                );
              }
              return i;
            },
            unstringifyFElements: function t(e, i) {
              if ("string" == typeof i && /^[0-9]+$/.test(i)) return e.e(i);
              if ("string" == typeof i && /^0x[0-9a-fA-F]+$/.test(i))
                return e.e(i);
              if (Array.isArray(i)) return i.map(t.bind(this, e));
              if ("object" == typeof i) {
                if (null === i) return null;
                const n = {};
                return (
                  Object.keys(i).forEach((o) => {
                    n[o] = t(e, i[o]);
                  }),
                  n
                );
              }
              return i;
            },
            bitReverse: pt,
            log2: gt,
            buffReverseBits: mt,
            array2buffer: Lt,
            buffer2array: bt,
          });
          const yt = 1 << 30;
          class xt {
            constructor(t) {
              (this.buffers = []), (this.byteLength = t);
              for (let e = 0; e < t; e += yt) {
                const i = Math.min(t - e, yt);
                this.buffers.push(new Uint8Array(i));
              }
            }
            slice(t, e) {
              void 0 === e && (e = this.byteLength), void 0 === t && (t = 0);
              const i = e - t,
                n = Math.floor(t / yt);
              if (n == Math.floor((t + i - 1) / yt) || 0 == i)
                return this.buffers[n].slice(t % yt, (t % yt) + i);
              let o,
                a = n,
                s = t % yt,
                r = i;
              for (; r > 0; ) {
                const t = s + r > yt ? yt - s : r,
                  e = new Uint8Array(
                    this.buffers[a].buffer,
                    this.buffers[a].byteOffset + s,
                    t
                  );
                if (t == i) return e.slice();
                o || (o = i <= yt ? new Uint8Array(i) : new xt(i)),
                  o.set(e, i - r),
                  (r -= t),
                  a++,
                  (s = 0);
              }
              return o;
            }
            set(t, e) {
              void 0 === e && (e = 0);
              const i = t.byteLength;
              if (0 == i) return;
              const n = Math.floor(e / yt);
              if (n == Math.floor((e + i - 1) / yt))
                return t instanceof xt && 1 == t.buffers.length
                  ? this.buffers[n].set(t.buffers[0], e % yt)
                  : this.buffers[n].set(t, e % yt);
              let o = n,
                a = e % yt,
                s = i;
              for (; s > 0; ) {
                const e = a + s > yt ? yt - a : s,
                  n = t.slice(i - s, i - s + e);
                new Uint8Array(
                  this.buffers[o].buffer,
                  this.buffers[o].byteOffset + a,
                  e
                ).set(n),
                  (s -= e),
                  o++,
                  (a = 0);
              }
            }
          }
          function wt(t, e, i, n) {
            return async function (o) {
              const a = Math.floor(o.byteLength / i);
              if (a * i !== o.byteLength)
                throw new Error("Invalid buffer size");
              const s = Math.floor(a / t.concurrency),
                r = [];
              for (let l = 0; l < t.concurrency; l++) {
                let c;
                if (((c = l < t.concurrency - 1 ? s : a - l * s), 0 == c))
                  continue;
                const d = [
                  {
                    cmd: "ALLOCSET",
                    var: 0,
                    buff: o.slice(l * s * i, l * s * i + c * i),
                  },
                  { cmd: "ALLOC", var: 1, len: n * c },
                  {
                    cmd: "CALL",
                    fnName: e,
                    params: [{ var: 0 }, { val: c }, { var: 1 }],
                  },
                  { cmd: "GET", out: 0, var: 1, len: n * c },
                ];
                r.push(t.queueAction(d));
              }
              const l = await Promise.all(r);
              let c;
              c = o instanceof xt ? new xt(a * n) : new Uint8Array(a * n);
              let d = 0;
              for (let t = 0; t < l.length; t++)
                c.set(l[t][0], d), (d += l[t][0].byteLength);
              return c;
            };
          }
          class Bt {
            constructor(t, e, i, n) {
              if (
                ((this.tm = t),
                (this.prefix = e),
                (this.p = n),
                (this.n8 = i),
                (this.type = "F1"),
                (this.m = 1),
                (this.half = b(n, Z)),
                (this.bitLength = p(n)),
                (this.mask = C(L(Z, this.bitLength), Z)),
                (this.pOp1 = t.alloc(i)),
                (this.pOp2 = t.alloc(i)),
                (this.pOp3 = t.alloc(i)),
                this.tm.instance.exports[e + "_zero"](this.pOp1),
                (this.zero = this.tm.getBuff(this.pOp1, this.n8)),
                this.tm.instance.exports[e + "_one"](this.pOp1),
                (this.one = this.tm.getBuff(this.pOp1, this.n8)),
                (this.negone = this.neg(this.one)),
                (this.two = this.add(this.one, this.one)),
                (this.n64 = Math.floor(i / 8)),
                (this.n32 = Math.floor(i / 4)),
                8 * this.n64 != this.n8)
              )
                throw new Error("n8 must be a multiple of 8");
              (this.half = b(this.p, Z)), (this.nqr = this.two);
              let o = this.exp(this.nqr, this.half);
              for (; !this.eq(o, this.negone); )
                (this.nqr = this.add(this.nqr, this.one)),
                  (o = this.exp(this.nqr, this.half));
              (this.shift = this.mul(this.nqr, this.nqr)),
                (this.shiftInv = this.inv(this.shift)),
                (this.s = 0);
              let a = C(this.p, Z);
              for (; !x(a); ) (this.s = this.s + 1), (a = b(a, Z));
              (this.w = []), (this.w[this.s] = this.exp(this.nqr, a));
              for (let t = this.s - 1; t >= 0; t--)
                this.w[t] = this.square(this.w[t + 1]);
              if (!this.eq(this.w[0], this.one))
                throw new Error("Error calculating roots of unity");
              (this.batchToMontgomery = wt(
                t,
                e + "_batchToMontgomery",
                this.n8,
                this.n8
              )),
                (this.batchFromMontgomery = wt(
                  t,
                  e + "_batchFromMontgomery",
                  this.n8,
                  this.n8
                ));
            }
            op2(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            op2Bool(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2
                )
              );
            }
            op1(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.instance.exports[this.prefix + t](this.pOp1, this.pOp3),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            op1Bool(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp3
                )
              );
            }
            add(t, e) {
              return this.op2("_add", t, e);
            }
            eq(t, e) {
              return this.op2Bool("_eq", t, e);
            }
            isZero(t) {
              return this.op1Bool("_isZero", t);
            }
            sub(t, e) {
              return this.op2("_sub", t, e);
            }
            neg(t) {
              return this.op1("_neg", t);
            }
            inv(t) {
              return this.op1("_inverse", t);
            }
            toMontgomery(t) {
              return this.op1("_toMontgomery", t);
            }
            fromMontgomery(t) {
              return this.op1("_fromMontgomery", t);
            }
            mul(t, e) {
              return this.op2("_mul", t, e);
            }
            div(t, e) {
              return (
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[this.prefix + "_inverse"](
                  this.pOp2,
                  this.pOp2
                ),
                this.tm.instance.exports[this.prefix + "_mul"](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            square(t) {
              return this.op1("_square", t);
            }
            isSquare(t) {
              return this.op1Bool("_isSquare", t);
            }
            sqrt(t) {
              return this.op1("_sqrt", t);
            }
            exp(t, e) {
              return (
                e instanceof Uint8Array || (e = k(_(e))),
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[this.prefix + "_exp"](
                  this.pOp1,
                  this.pOp2,
                  e.byteLength,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            isNegative(t) {
              return this.op1Bool("_isNegative", t);
            }
            e(t, e) {
              if (t instanceof Uint8Array) return t;
              let i = _(t, e);
              g(i)
                ? ((i = A(i)),
                  z(i, this.p) && (i = S(i, this.p)),
                  (i = C(this.p, i)))
                : z(i, this.p) && (i = S(i, this.p));
              const n = ht(i, this.n8);
              return this.toMontgomery(n);
            }
            toString(t, e) {
              return j(U(this.fromMontgomery(t), 0), e);
            }
            fromRng(t) {
              let e;
              const i = new Uint8Array(this.n8);
              do {
                e = $;
                for (let i = 0; i < this.n64; i++)
                  e = E(e, L(t.nextU64(), 64 * i));
                e = R(e, this.mask);
              } while (M(e, this.p));
              return T(i, 0, e, this.n8), i;
            }
            random() {
              return this.fromRng(st());
            }
            toObject(t) {
              return U(this.fromMontgomery(t), 0);
            }
            fromObject(t) {
              const e = new Uint8Array(this.n8);
              return T(e, 0, t, this.n8), this.toMontgomery(e);
            }
            toRprLE(t, e, i) {
              t.set(this.fromMontgomery(i), e);
            }
            toRprBE(t, e, i) {
              const n = this.fromMontgomery(i);
              for (let t = 0; t < this.n8 / 2; t++) {
                const e = n[t];
                (n[t] = n[this.n8 - 1 - t]), (n[this.n8 - 1 - t] = e);
              }
              t.set(n, e);
            }
            fromRprLE(t, e) {
              e = e || 0;
              const i = t.slice(e, e + this.n8);
              return this.toMontgomery(i);
            }
            async batchInverse(t) {
              let e = !1;
              const i = this.n8,
                n = this.n8;
              Array.isArray(t)
                ? ((t = Lt(t, i)), (e = !0))
                : (t = t.slice(0, t.byteLength));
              const o = Math.floor(t.byteLength / i);
              if (o * i !== t.byteLength)
                throw new Error("Invalid buffer size");
              const a = Math.floor(o / this.tm.concurrency),
                s = [];
              for (let e = 0; e < this.tm.concurrency; e++) {
                let r;
                if (((r = e < this.tm.concurrency - 1 ? a : o - e * a), 0 == r))
                  continue;
                const l = [
                  {
                    cmd: "ALLOCSET",
                    var: 0,
                    buff: t.slice(e * a * i, e * a * i + r * i),
                  },
                  { cmd: "ALLOC", var: 1, len: n * r },
                  {
                    cmd: "CALL",
                    fnName: this.prefix + "_batchInverse",
                    params: [
                      { var: 0 },
                      { val: i },
                      { val: r },
                      { var: 1 },
                      { val: n },
                    ],
                  },
                  { cmd: "GET", out: 0, var: 1, len: n * r },
                ];
                s.push(this.tm.queueAction(l));
              }
              const r = await Promise.all(s);
              let l;
              l = t instanceof xt ? new xt(o * n) : new Uint8Array(o * n);
              let c = 0;
              for (let t = 0; t < r.length; t++)
                l.set(r[t][0], c), (c += r[t][0].byteLength);
              return e ? bt(l, n) : l;
            }
          }
          class vt {
            constructor(t, e, i) {
              (this.tm = t),
                (this.prefix = e),
                (this.F = i),
                (this.type = "F2"),
                (this.m = 2 * i.m),
                (this.n8 = 2 * this.F.n8),
                (this.n32 = 2 * this.F.n32),
                (this.n64 = 2 * this.F.n64),
                (this.pOp1 = t.alloc(2 * i.n8)),
                (this.pOp2 = t.alloc(2 * i.n8)),
                (this.pOp3 = t.alloc(2 * i.n8)),
                this.tm.instance.exports[e + "_zero"](this.pOp1),
                (this.zero = t.getBuff(this.pOp1, this.n8)),
                this.tm.instance.exports[e + "_one"](this.pOp1),
                (this.one = t.getBuff(this.pOp1, this.n8)),
                (this.negone = this.neg(this.one)),
                (this.two = this.add(this.one, this.one));
            }
            op2(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            op2Bool(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2
                )
              );
            }
            op1(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.instance.exports[this.prefix + t](this.pOp1, this.pOp3),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            op1Bool(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp3
                )
              );
            }
            add(t, e) {
              return this.op2("_add", t, e);
            }
            eq(t, e) {
              return this.op2Bool("_eq", t, e);
            }
            isZero(t) {
              return this.op1Bool("_isZero", t);
            }
            sub(t, e) {
              return this.op2("_sub", t, e);
            }
            neg(t) {
              return this.op1("_neg", t);
            }
            inv(t) {
              return this.op1("_inverse", t);
            }
            isNegative(t) {
              return this.op1Bool("_isNegative", t);
            }
            toMontgomery(t) {
              return this.op1("_toMontgomery", t);
            }
            fromMontgomery(t) {
              return this.op1("_fromMontgomery", t);
            }
            mul(t, e) {
              return this.op2("_mul", t, e);
            }
            mul1(t, e) {
              return this.op2("_mul1", t, e);
            }
            div(t, e) {
              return (
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[this.prefix + "_inverse"](
                  this.pOp2,
                  this.pOp2
                ),
                this.tm.instance.exports[this.prefix + "_mul"](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            square(t) {
              return this.op1("_square", t);
            }
            isSquare(t) {
              return this.op1Bool("_isSquare", t);
            }
            sqrt(t) {
              return this.op1("_sqrt", t);
            }
            exp(t, e) {
              return (
                e instanceof Uint8Array || (e = k(_(e))),
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[this.prefix + "_exp"](
                  this.pOp1,
                  this.pOp2,
                  e.byteLength,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            e(t, e) {
              if (t instanceof Uint8Array) return t;
              if (Array.isArray(t) && 2 == t.length) {
                const i = this.F.e(t[0], e),
                  n = this.F.e(t[1], e),
                  o = new Uint8Array(2 * this.F.n8);
                return o.set(i), o.set(n, 2 * this.F.n8), o;
              }
              throw new Error("invalid F2");
            }
            toString(t, e) {
              return `[${this.F.toString(t.slice(0, this.F.n8), e)}, ${this.F.toString(t.slice(this.F.n8), e)}]`;
            }
            fromRng(t) {
              const e = this.F.fromRng(t),
                i = this.F.fromRng(t),
                n = new Uint8Array(2 * this.F.n8);
              return n.set(e), n.set(i, this.F.n8), n;
            }
            random() {
              return this.fromRng(st());
            }
            toObject(t) {
              return [
                this.F.toObject(t.slice(0, this.F.n8)),
                this.F.toObject(t.slice(this.F.n8, 2 * this.F.n8)),
              ];
            }
            fromObject(t) {
              const e = new Uint8Array(2 * this.F.n8),
                i = this.F.fromObject(t[0]),
                n = this.F.fromObject(t[1]);
              return e.set(i), e.set(n, this.F.n8), e;
            }
            c1(t) {
              return t.slice(0, this.F.n8);
            }
            c2(t) {
              return t.slice(this.F.n8);
            }
          }
          class Et {
            constructor(t, e, i) {
              (this.tm = t),
                (this.prefix = e),
                (this.F = i),
                (this.type = "F3"),
                (this.m = 3 * i.m),
                (this.n8 = 3 * this.F.n8),
                (this.n32 = 3 * this.F.n32),
                (this.n64 = 3 * this.F.n64),
                (this.pOp1 = t.alloc(3 * i.n8)),
                (this.pOp2 = t.alloc(3 * i.n8)),
                (this.pOp3 = t.alloc(3 * i.n8)),
                this.tm.instance.exports[e + "_zero"](this.pOp1),
                (this.zero = t.getBuff(this.pOp1, this.n8)),
                this.tm.instance.exports[e + "_one"](this.pOp1),
                (this.one = t.getBuff(this.pOp1, this.n8)),
                (this.negone = this.neg(this.one)),
                (this.two = this.add(this.one, this.one));
            }
            op2(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            op2Bool(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2
                )
              );
            }
            op1(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.instance.exports[this.prefix + t](this.pOp1, this.pOp3),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            op1Bool(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp3
                )
              );
            }
            eq(t, e) {
              return this.op2Bool("_eq", t, e);
            }
            isZero(t) {
              return this.op1Bool("_isZero", t);
            }
            add(t, e) {
              return this.op2("_add", t, e);
            }
            sub(t, e) {
              return this.op2("_sub", t, e);
            }
            neg(t) {
              return this.op1("_neg", t);
            }
            inv(t) {
              return this.op1("_inverse", t);
            }
            isNegative(t) {
              return this.op1Bool("_isNegative", t);
            }
            toMontgomery(t) {
              return this.op1("_toMontgomery", t);
            }
            fromMontgomery(t) {
              return this.op1("_fromMontgomery", t);
            }
            mul(t, e) {
              return this.op2("_mul", t, e);
            }
            div(t, e) {
              return (
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[this.prefix + "_inverse"](
                  this.pOp2,
                  this.pOp2
                ),
                this.tm.instance.exports[this.prefix + "_mul"](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            square(t) {
              return this.op1("_square", t);
            }
            isSquare(t) {
              return this.op1Bool("_isSquare", t);
            }
            sqrt(t) {
              return this.op1("_sqrt", t);
            }
            exp(t, e) {
              return (
                e instanceof Uint8Array || (e = k(_(e))),
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[this.prefix + "_exp"](
                  this.pOp1,
                  this.pOp2,
                  e.byteLength,
                  this.pOp3
                ),
                this.getBuff(this.pOp3, this.n8)
              );
            }
            e(t, e) {
              if (t instanceof Uint8Array) return t;
              if (Array.isArray(t) && 3 == t.length) {
                const i = this.F.e(t[0], e),
                  n = this.F.e(t[1], e),
                  o = this.F.e(t[2], e),
                  a = new Uint8Array(3 * this.F.n8);
                return (
                  a.set(i), a.set(n, this.F.n8), a.set(o, 2 * this.F.n8), a
                );
              }
              throw new Error("invalid F3");
            }
            toString(t, e) {
              return `[${this.F.toString(t.slice(0, this.F.n8), e)}, ${this.F.toString(t.slice(this.F.n8, 2 * this.F.n8), e)}, ${this.F.toString(t.slice(2 * this.F.n8), e)}]`;
            }
            fromRng(t) {
              const e = this.F.fromRng(t),
                i = this.F.fromRng(t),
                n = this.F.fromRng(t),
                o = new Uint8Array(3 * this.F.n8);
              return o.set(e), o.set(i, this.F.n8), o.set(n, 2 * this.F.n8), o;
            }
            random() {
              return this.fromRng(st());
            }
            toObject(t) {
              return [
                this.F.toObject(t.slice(0, this.F.n8)),
                this.F.toObject(t.slice(this.F.n8, 2 * this.F.n8)),
                this.F.toObject(t.slice(2 * this.F.n8, 3 * this.F.n8)),
              ];
            }
            fromObject(t) {
              const e = new Uint8Array(3 * this.F.n8),
                i = this.F.fromObject(t[0]),
                n = this.F.fromObject(t[1]),
                o = this.F.fromObject(t[2]);
              return e.set(i), e.set(n, this.F.n8), e.set(o, 2 * this.F.n8), e;
            }
            c1(t) {
              return t.slice(0, this.F.n8);
            }
            c2(t) {
              return t.slice(this.F.n8, 2 * this.F.n8);
            }
            c3(t) {
              return t.slice(2 * this.F.n8);
            }
          }
          class Ct {
            constructor(t, e, i, n, o, a) {
              (this.tm = t),
                (this.prefix = e),
                (this.F = i),
                (this.pOp1 = t.alloc(3 * i.n8)),
                (this.pOp2 = t.alloc(3 * i.n8)),
                (this.pOp3 = t.alloc(3 * i.n8)),
                this.tm.instance.exports[e + "_zero"](this.pOp1),
                (this.zero = this.tm.getBuff(this.pOp1, 3 * i.n8)),
                this.tm.instance.exports[e + "_zeroAffine"](this.pOp1),
                (this.zeroAffine = this.tm.getBuff(this.pOp1, 2 * i.n8)),
                (this.one = this.tm.getBuff(n, 3 * i.n8)),
                (this.g = this.one),
                (this.oneAffine = this.tm.getBuff(n, 2 * i.n8)),
                (this.gAffine = this.oneAffine),
                (this.b = this.tm.getBuff(o, i.n8)),
                a && (this.cofactor = k(a)),
                (this.negone = this.neg(this.one)),
                (this.two = this.add(this.one, this.one)),
                (this.batchLEMtoC = wt(t, e + "_batchLEMtoC", 2 * i.n8, i.n8)),
                (this.batchLEMtoU = wt(
                  t,
                  e + "_batchLEMtoU",
                  2 * i.n8,
                  2 * i.n8
                )),
                (this.batchCtoLEM = wt(t, e + "_batchCtoLEM", i.n8, 2 * i.n8)),
                (this.batchUtoLEM = wt(
                  t,
                  e + "_batchUtoLEM",
                  2 * i.n8,
                  2 * i.n8
                )),
                (this.batchToJacobian = wt(
                  t,
                  e + "_batchToJacobian",
                  2 * i.n8,
                  3 * i.n8
                )),
                (this.batchToAffine = wt(
                  t,
                  e + "_batchToAffine",
                  3 * i.n8,
                  2 * i.n8
                ));
            }
            op2(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, 3 * this.F.n8)
              );
            }
            op2bool(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                )
              );
            }
            op1(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.instance.exports[this.prefix + t](this.pOp1, this.pOp3),
                this.tm.getBuff(this.pOp3, 3 * this.F.n8)
              );
            }
            op1Affine(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.instance.exports[this.prefix + t](this.pOp1, this.pOp3),
                this.tm.getBuff(this.pOp3, 2 * this.F.n8)
              );
            }
            op1Bool(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp3
                )
              );
            }
            add(t, e) {
              if (t.byteLength == 3 * this.F.n8) {
                if (e.byteLength == 3 * this.F.n8)
                  return this.op2("_add", t, e);
                if (e.byteLength == 2 * this.F.n8)
                  return this.op2("_addMixed", t, e);
                throw new Error("invalid point size");
              }
              if (t.byteLength == 2 * this.F.n8) {
                if (e.byteLength == 3 * this.F.n8)
                  return this.op2("_addMixed", e, t);
                if (e.byteLength == 2 * this.F.n8)
                  return this.op2("_addAffine", t, e);
                throw new Error("invalid point size");
              }
              throw new Error("invalid point size");
            }
            sub(t, e) {
              if (t.byteLength == 3 * this.F.n8) {
                if (e.byteLength == 3 * this.F.n8)
                  return this.op2("_sub", t, e);
                if (e.byteLength == 2 * this.F.n8)
                  return this.op2("_subMixed", t, e);
                throw new Error("invalid point size");
              }
              if (t.byteLength == 2 * this.F.n8) {
                if (e.byteLength == 3 * this.F.n8)
                  return this.op2("_subMixed", e, t);
                if (e.byteLength == 2 * this.F.n8)
                  return this.op2("_subAffine", t, e);
                throw new Error("invalid point size");
              }
              throw new Error("invalid point size");
            }
            neg(t) {
              if (t.byteLength == 3 * this.F.n8) return this.op1("_neg", t);
              if (t.byteLength == 2 * this.F.n8)
                return this.op1Affine("_negAffine", t);
              throw new Error("invalid point size");
            }
            double(t) {
              if (t.byteLength == 3 * this.F.n8) return this.op1("_double", t);
              if (t.byteLength == 2 * this.F.n8)
                return this.op1("_doubleAffine", t);
              throw new Error("invalid point size");
            }
            isZero(t) {
              if (t.byteLength == 3 * this.F.n8)
                return this.op1Bool("_isZero", t);
              if (t.byteLength == 2 * this.F.n8)
                return this.op1Bool("_isZeroAffine", t);
              throw new Error("invalid point size");
            }
            timesScalar(t, e) {
              let i;
              if (
                (e instanceof Uint8Array || (e = k(_(e))),
                t.byteLength == 3 * this.F.n8)
              )
                i = this.prefix + "_timesScalar";
              else {
                if (t.byteLength != 2 * this.F.n8)
                  throw new Error("invalid point size");
                i = this.prefix + "_timesScalarAffine";
              }
              return (
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[i](
                  this.pOp1,
                  this.pOp2,
                  e.byteLength,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, 3 * this.F.n8)
              );
            }
            timesFr(t, e) {
              let i;
              if (t.byteLength == 3 * this.F.n8) i = this.prefix + "_timesFr";
              else {
                if (t.byteLength != 2 * this.F.n8)
                  throw new Error("invalid point size");
                i = this.prefix + "_timesFrAffine";
              }
              return (
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[i](this.pOp1, this.pOp2, this.pOp3),
                this.tm.getBuff(this.pOp3, 3 * this.F.n8)
              );
            }
            eq(t, e) {
              if (t.byteLength == 3 * this.F.n8) {
                if (e.byteLength == 3 * this.F.n8)
                  return this.op2bool("_eq", t, e);
                if (e.byteLength == 2 * this.F.n8)
                  return this.op2bool("_eqMixed", t, e);
                throw new Error("invalid point size");
              }
              if (t.byteLength == 2 * this.F.n8) {
                if (e.byteLength == 3 * this.F.n8)
                  return this.op2bool("_eqMixed", e, t);
                if (e.byteLength == 2 * this.F.n8)
                  return this.op2bool("_eqAffine", t, e);
                throw new Error("invalid point size");
              }
              throw new Error("invalid point size");
            }
            toAffine(t) {
              if (t.byteLength == 3 * this.F.n8)
                return this.op1Affine("_toAffine", t);
              if (t.byteLength == 2 * this.F.n8) return t;
              throw new Error("invalid point size");
            }
            toJacobian(t) {
              if (t.byteLength == 3 * this.F.n8) return t;
              if (t.byteLength == 2 * this.F.n8)
                return this.op1("_toJacobian", t);
              throw new Error("invalid point size");
            }
            toRprUncompressed(t, e, i) {
              if (
                (this.tm.setBuff(this.pOp1, i), i.byteLength == 3 * this.F.n8)
              )
                this.tm.instance.exports[this.prefix + "_toAffine"](
                  this.pOp1,
                  this.pOp1
                );
              else if (i.byteLength != 2 * this.F.n8)
                throw new Error("invalid point size");
              this.tm.instance.exports[this.prefix + "_LEMtoU"](
                this.pOp1,
                this.pOp1
              );
              const n = this.tm.getBuff(this.pOp1, 2 * this.F.n8);
              t.set(n, e);
            }
            fromRprUncompressed(t, e) {
              const i = t.slice(e, e + 2 * this.F.n8);
              return (
                this.tm.setBuff(this.pOp1, i),
                this.tm.instance.exports[this.prefix + "_UtoLEM"](
                  this.pOp1,
                  this.pOp1
                ),
                this.tm.getBuff(this.pOp1, 2 * this.F.n8)
              );
            }
            toRprCompressed(t, e, i) {
              if (
                (this.tm.setBuff(this.pOp1, i), i.byteLength == 3 * this.F.n8)
              )
                this.tm.instance.exports[this.prefix + "_toAffine"](
                  this.pOp1,
                  this.pOp1
                );
              else if (i.byteLength != 2 * this.F.n8)
                throw new Error("invalid point size");
              this.tm.instance.exports[this.prefix + "_LEMtoC"](
                this.pOp1,
                this.pOp1
              );
              const n = this.tm.getBuff(this.pOp1, this.F.n8);
              t.set(n, e);
            }
            fromRprCompressed(t, e) {
              const i = t.slice(e, e + this.F.n8);
              return (
                this.tm.setBuff(this.pOp1, i),
                this.tm.instance.exports[this.prefix + "_CtoLEM"](
                  this.pOp1,
                  this.pOp2
                ),
                this.tm.getBuff(this.pOp2, 2 * this.F.n8)
              );
            }
            toUncompressed(t) {
              const e = new Uint8Array(2 * this.F.n8);
              return this.toRprUncompressed(e, 0, t), e;
            }
            toRprLEM(t, e, i) {
              if (i.byteLength != 2 * this.F.n8) {
                if (i.byteLength != 3 * this.F.n8)
                  throw new Error("invalid point size");
                {
                  this.tm.setBuff(this.pOp1, i),
                    this.tm.instance.exports[this.prefix + "_toAffine"](
                      this.pOp1,
                      this.pOp1
                    );
                  const n = this.tm.getBuff(this.pOp1, 2 * this.F.n8);
                  t.set(n, e);
                }
              } else t.set(i, e);
            }
            fromRprLEM(t, e) {
              return (e = e || 0), t.slice(e, e + 2 * this.F.n8);
            }
            toString(t, e) {
              if (t.byteLength == 3 * this.F.n8)
                return `[ ${this.F.toString(t.slice(0, this.F.n8), e)}, ${this.F.toString(t.slice(this.F.n8, 2 * this.F.n8), e)}, ${this.F.toString(t.slice(2 * this.F.n8), e)} ]`;
              if (t.byteLength == 2 * this.F.n8)
                return `[ ${this.F.toString(t.slice(0, this.F.n8), e)}, ${this.F.toString(t.slice(this.F.n8), e)} ]`;
              throw new Error("invalid point size");
            }
            isValid(t) {
              if (this.isZero(t)) return !0;
              const e = this.F,
                i = this.toAffine(t),
                n = i.slice(0, this.F.n8),
                o = i.slice(this.F.n8, 2 * this.F.n8),
                a = e.add(e.mul(e.square(n), n), this.b),
                s = e.square(o);
              return e.eq(a, s);
            }
            fromRng(t) {
              const e = this.F;
              let i,
                n,
                o = [];
              do {
                (o[0] = e.fromRng(t)),
                  (i = t.nextBool()),
                  (n = e.add(e.mul(e.square(o[0]), o[0]), this.b));
              } while (!e.isSquare(n));
              (o[1] = e.sqrt(n)),
                i ^ e.isNegative(o[1]) && (o[1] = e.neg(o[1]));
              let a = new Uint8Array(2 * this.F.n8);
              return (
                a.set(o[0]),
                a.set(o[1], this.F.n8),
                this.cofactor && (a = this.timesScalar(a, this.cofactor)),
                a
              );
            }
            toObject(t) {
              if (this.isZero(t))
                return [
                  this.F.toObject(this.F.zero),
                  this.F.toObject(this.F.one),
                  this.F.toObject(this.F.zero),
                ];
              const e = this.F.toObject(t.slice(0, this.F.n8)),
                i = this.F.toObject(t.slice(this.F.n8, 2 * this.F.n8));
              let n;
              return (
                (n =
                  t.byteLength == 3 * this.F.n8
                    ? this.F.toObject(t.slice(2 * this.F.n8, 3 * this.F.n8))
                    : this.F.toObject(this.F.one)),
                [e, i, n]
              );
            }
            fromObject(t) {
              const e = this.F.fromObject(t[0]),
                i = this.F.fromObject(t[1]);
              let n;
              if (
                ((n = 3 == t.length ? this.F.fromObject(t[2]) : this.F.one),
                this.F.isZero(n, this.F.one))
              )
                return this.zeroAffine;
              if (this.F.eq(n, this.F.one)) {
                const t = new Uint8Array(2 * this.F.n8);
                return t.set(e), t.set(i, this.F.n8), t;
              }
              {
                const t = new Uint8Array(3 * this.F.n8);
                return (
                  t.set(e), t.set(i, this.F.n8), t.set(n, 2 * this.F.n8), t
                );
              }
            }
            e(t) {
              return t instanceof Uint8Array ? t : this.fromObject(t);
            }
            x(t) {
              return this.toAffine(t).slice(0, this.F.n8);
            }
            y(t) {
              return this.toAffine(t).slice(this.F.n8);
            }
          }
          function At(t) {
            const e = 32767;
            let i, n;
            async function o(t) {
              const o = new Uint8Array(t.code),
                a = await WebAssembly.compile(o);
              (n = new WebAssembly.Memory({ initial: t.init, maximum: e })),
                (i = await WebAssembly.instantiate(a, { env: { memory: n } }));
            }
            function a(t) {
              const i = new Uint32Array(n.buffer, 0, 1);
              for (; 3 & i[0]; ) i[0]++;
              const o = i[0];
              if (((i[0] += t), i[0] + t > n.buffer.byteLength)) {
                const o = n.buffer.byteLength / 65536;
                let a = Math.floor((i[0] + t) / 65536) + 1;
                a > e && (a = e), n.grow(a - o);
              }
              return o;
            }
            function s(t) {
              const e = a(t.byteLength);
              return l(e, t), e;
            }
            function r(t, e) {
              const i = new Uint8Array(n.buffer);
              return new Uint8Array(i.buffer, i.byteOffset + t, e);
            }
            function l(t, e) {
              new Uint8Array(n.buffer).set(new Uint8Array(e), t);
            }
            function c(t) {
              if ("INIT" == t[0].cmd) return o(t[0]);
              const e = { vars: [], out: [] },
                c = new Uint32Array(n.buffer, 0, 1)[0];
              for (let n = 0; n < t.length; n++)
                switch (t[n].cmd) {
                  case "ALLOCSET":
                    e.vars[t[n].var] = s(t[n].buff);
                    break;
                  case "ALLOC":
                    e.vars[t[n].var] = a(t[n].len);
                    break;
                  case "SET":
                    l(e.vars[t[n].var], t[n].buff);
                    break;
                  case "CALL": {
                    const o = [];
                    for (let i = 0; i < t[n].params.length; i++) {
                      const a = t[n].params[i];
                      void 0 !== a.var
                        ? o.push(e.vars[a.var] + (a.offset || 0))
                        : void 0 !== a.val && o.push(a.val);
                    }
                    i.exports[t[n].fnName](...o);
                    break;
                  }
                  case "GET":
                    e.out[t[n].out] = r(e.vars[t[n].var], t[n].len).slice();
                    break;
                  default:
                    throw new Error("Invalid cmd");
                }
              return (new Uint32Array(n.buffer, 0, 1)[0] = c), e.out;
            }
            return (
              t &&
                (t.onmessage = function (e) {
                  let i;
                  if (((i = e.data ? e.data : e), "INIT" == i[0].cmd))
                    o(i[0]).then(function () {
                      t.postMessage(i.result);
                    });
                  else if ("TERMINATE" == i[0].cmd) t.close();
                  else {
                    const e = c(i);
                    t.postMessage(e);
                  }
                }),
              c
            );
          }
          const qt = 25;
          class Ot {
            constructor() {
              this.promise = new Promise((t, e) => {
                (this.reject = e), (this.resolve = t);
              });
            }
          }
          var It;
          const St =
            "data:application/javascript;base64," +
            ((It = "(" + At.toString() + ")(self)"),
            process.browser
              ? globalThis.btoa(It)
              : Buffer.from(It).toString("base64"));
          class Pt {
            constructor() {
              (this.actionQueue = []), (this.oldPFree = 0);
            }
            startSyncOp() {
              if (0 != this.oldPFree)
                throw new Error("Sync operation in progress");
              this.oldPFree = this.u32[0];
            }
            endSyncOp() {
              if (0 == this.oldPFree)
                throw new Error("No sync operation in progress");
              (this.u32[0] = this.oldPFree), (this.oldPFree = 0);
            }
            postAction(t, e, i, n) {
              if (this.working[t])
                throw new Error("Posting a job t a working worker");
              return (
                (this.working[t] = !0),
                (this.pendingDeferreds[t] = n || new Ot()),
                this.workers[t].postMessage(e, i),
                this.pendingDeferreds[t].promise
              );
            }
            processWorks() {
              for (
                let t = 0;
                t < this.workers.length && this.actionQueue.length > 0;
                t++
              )
                if (0 == this.working[t]) {
                  const e = this.actionQueue.shift();
                  this.postAction(t, e.data, e.transfers, e.deferred);
                }
            }
            queueAction(t, e) {
              const i = new Ot();
              if (this.singleThread) {
                const e = this.taskManager(t);
                i.resolve(e);
              } else
                this.actionQueue.push({ data: t, transfers: e, deferred: i }),
                  this.processWorks();
              return i.promise;
            }
            resetMemory() {
              this.u32[0] = this.initalPFree;
            }
            allocBuff(t) {
              const e = this.alloc(t.byteLength);
              return this.setBuff(e, t), e;
            }
            getBuff(t, e) {
              return this.u8.slice(t, t + e);
            }
            setBuff(t, e) {
              this.u8.set(new Uint8Array(e), t);
            }
            alloc(t) {
              for (; 3 & this.u32[0]; ) this.u32[0]++;
              const e = this.u32[0];
              return (this.u32[0] += t), e;
            }
            async terminate() {
              for (let t = 0; t < this.workers.length; t++)
                this.workers[t].postMessage([{ cmd: "TERMINATE" }]);
              await (200, new Promise((t) => setTimeout(t, 200)));
            }
          }
          function zt(t, e) {
            const i = t[e],
              n = t.Fr,
              o = t.tm;
            t[e].batchApplyKey = async function (t, a, s, r, l) {
              let c, d, u, h, f;
              if (((r = r || "affine"), (l = l || "affine"), "G1" == e))
                "jacobian" == r
                  ? ((u = 3 * i.F.n8), (c = "g1m_batchApplyKey"))
                  : ((u = 2 * i.F.n8), (c = "g1m_batchApplyKeyMixed")),
                  (h = 3 * i.F.n8),
                  "jacobian" == l
                    ? (f = 3 * i.F.n8)
                    : ((d = "g1m_batchToAffine"), (f = 2 * i.F.n8));
              else if ("G2" == e)
                "jacobian" == r
                  ? ((u = 3 * i.F.n8), (c = "g2m_batchApplyKey"))
                  : ((u = 2 * i.F.n8), (c = "g2m_batchApplyKeyMixed")),
                  (h = 3 * i.F.n8),
                  "jacobian" == l
                    ? (f = 3 * i.F.n8)
                    : ((d = "g2m_batchToAffine"), (f = 2 * i.F.n8));
              else {
                if ("Fr" != e) throw new Error("Invalid group: " + e);
                (c = "frm_batchApplyKey"), (u = i.n8), (h = i.n8), (f = i.n8);
              }
              const _ = Math.floor(t.byteLength / u),
                p = Math.floor(_ / o.concurrency),
                g = [];
              s = n.e(s);
              let m = n.e(a);
              for (let e = 0; e < o.concurrency; e++) {
                let i;
                if (((i = e < o.concurrency - 1 ? p : _ - e * p), 0 == i))
                  continue;
                const a = [];
                a.push({
                  cmd: "ALLOCSET",
                  var: 0,
                  buff: t.slice(e * p * u, e * p * u + i * u),
                }),
                  a.push({ cmd: "ALLOCSET", var: 1, buff: m }),
                  a.push({ cmd: "ALLOCSET", var: 2, buff: s }),
                  a.push({ cmd: "ALLOC", var: 3, len: i * Math.max(h, f) }),
                  a.push({
                    cmd: "CALL",
                    fnName: c,
                    params: [
                      { var: 0 },
                      { val: i },
                      { var: 1 },
                      { var: 2 },
                      { var: 3 },
                    ],
                  }),
                  d &&
                    a.push({
                      cmd: "CALL",
                      fnName: d,
                      params: [{ var: 3 }, { val: i }, { var: 3 }],
                    }),
                  a.push({ cmd: "GET", out: 0, var: 3, len: i * f }),
                  g.push(o.queueAction(a)),
                  (m = n.mul(m, n.exp(s, i)));
              }
              const L = await Promise.all(g);
              let b;
              b = t instanceof xt ? new xt(_ * f) : new Uint8Array(_ * f);
              let F = 0;
              for (let t = 0; t < L.length; t++)
                b.set(L[t][0], F), (F += L[t][0].byteLength);
              return b;
            };
          }
          const Mt = [
            1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 13, 14, 15,
            16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
          ];
          function Rt(t, e) {
            const i = t[e],
              n = i.tm;
            async function o(t, n, o, a, s) {
              if (!(t instanceof Uint8Array))
                throw (
                  (a &&
                    a.error(`${s} _multiExpChunk buffBases is not Uint8Array`),
                  new Error(`${s} _multiExpChunk buffBases is not Uint8Array`))
                );
              if (!(n instanceof Uint8Array))
                throw (
                  (a &&
                    a.error(
                      `${s} _multiExpChunk buffScalars is not Uint8Array`
                    ),
                  new Error(
                    `${s} _multiExpChunk buffScalars is not Uint8Array`
                  ))
                );
              let r, l;
              if (((o = o || "affine"), "G1" == e))
                "affine" == o
                  ? ((l = "g1m_multiexpAffine_chunk"), (r = 2 * i.F.n8))
                  : ((l = "g1m_multiexp_chunk"), (r = 3 * i.F.n8));
              else {
                if ("G2" != e) throw new Error("Invalid group");
                "affine" == o
                  ? ((l = "g2m_multiexpAffine_chunk"), (r = 2 * i.F.n8))
                  : ((l = "g2m_multiexp_chunk"), (r = 3 * i.F.n8));
              }
              const c = Math.floor(t.byteLength / r);
              if (0 == c) return i.zero;
              const d = Math.floor(n.byteLength / c);
              if (d * c != n.byteLength)
                throw new Error("Scalar size does not match");
              const u = Mt[gt(c)],
                h = Math.floor((8 * d - 1) / u) + 1,
                f = [];
              for (let e = 0; e < h; e++) {
                const o = [
                  { cmd: "ALLOCSET", var: 0, buff: t },
                  { cmd: "ALLOCSET", var: 1, buff: n },
                  { cmd: "ALLOC", var: 2, len: 3 * i.F.n8 },
                  {
                    cmd: "CALL",
                    fnName: l,
                    params: [
                      { var: 0 },
                      { var: 1 },
                      { val: d },
                      { val: c },
                      { val: e * u },
                      { val: Math.min(8 * d - e * u, u) },
                      { var: 2 },
                    ],
                  },
                  { cmd: "GET", out: 0, var: 2, len: 3 * i.F.n8 },
                ];
                f.push(i.tm.queueAction(o));
              }
              const _ = await Promise.all(f);
              let p = i.zero;
              for (let t = _.length - 1; t >= 0; t--) {
                if (!i.isZero(p)) for (let t = 0; t < u; t++) p = i.double(p);
                p = i.add(p, _[t][0]);
              }
              return p;
            }
            async function a(t, a, s, r, l) {
              const c = 1 << 22;
              let d;
              if ("G1" == e) d = "affine" == s ? 2 * i.F.n8 : 3 * i.F.n8;
              else {
                if ("G2" != e) throw new Error("Invalid group");
                d = "affine" == s ? 2 * i.F.n8 : 3 * i.F.n8;
              }
              const u = Math.floor(t.byteLength / d),
                h = Math.floor(a.byteLength / u);
              if (h * u != a.byteLength)
                throw new Error("Scalar size does not match");
              const f = Mt[gt(u)],
                _ = Math.floor((8 * h - 1) / f) + 1;
              let p;
              (p = Math.floor(u / (n.concurrency / _))),
                p > c && (p = c),
                p < 1024 && (p = 1024);
              const g = [];
              for (let e = 0; e < u; e += p) {
                r && r.debug(`Multiexp start: ${l}: ${e}/${u}`);
                const i = Math.min(u - e, p),
                  n = t.slice(e * d, (e + i) * d),
                  c = a.slice(e * h, (e + i) * h);
                g.push(
                  o(n, c, s, r, l).then(
                    (t) => (r && r.debug(`Multiexp end: ${l}: ${e}/${u}`), t)
                  )
                );
              }
              const m = await Promise.all(g);
              let L = i.zero;
              for (let t = m.length - 1; t >= 0; t--) L = i.add(L, m[t]);
              return L;
            }
            (i.multiExp = async function (t, e, i, n) {
              return await a(t, e, "jacobian", i, n);
            }),
              (i.multiExpAffine = async function (t, e, i, n) {
                return await a(t, e, "affine", i, n);
              });
          }
          function Tt(t, e) {
            const i = t[e],
              n = t.Fr,
              o = i.tm;
            async function a(t, r, l, c, d, u) {
              let h, f, _, p, g, m, L, b;
              (l = l || "affine"),
                (c = c || "affine"),
                "G1" == e
                  ? ("affine" == l
                      ? ((h = 2 * i.F.n8), (p = "g1m_batchToJacobian"))
                      : (h = 3 * i.F.n8),
                    (f = 3 * i.F.n8),
                    r && (b = "g1m_fftFinal"),
                    (L = "g1m_fftJoin"),
                    (m = "g1m_fftMix"),
                    "affine" == c
                      ? ((_ = 2 * i.F.n8), (g = "g1m_batchToAffine"))
                      : (_ = 3 * i.F.n8))
                  : "G2" == e
                    ? ("affine" == l
                        ? ((h = 2 * i.F.n8), (p = "g2m_batchToJacobian"))
                        : (h = 3 * i.F.n8),
                      (f = 3 * i.F.n8),
                      r && (b = "g2m_fftFinal"),
                      (L = "g2m_fftJoin"),
                      (m = "g2m_fftMix"),
                      "affine" == c
                        ? ((_ = 2 * i.F.n8), (g = "g2m_batchToAffine"))
                        : (_ = 3 * i.F.n8))
                    : "Fr" == e &&
                      ((h = i.n8),
                      (f = i.n8),
                      (_ = i.n8),
                      r && (b = "frm_fftFinal"),
                      (m = "frm_fftMix"),
                      (L = "frm_fftJoin"));
              let F = !1;
              Array.isArray(t)
                ? ((t = Lt(t, h)), (F = !0))
                : (t = t.slice(0, t.byteLength));
              const y = t.byteLength / h,
                x = gt(y);
              if (1 << x != y) throw new Error("fft must be multiple of 2");
              if (x == n.s + 1) {
                let e;
                return (
                  (e = r
                    ? await (async function (t, e, i, o, r) {
                        let l, c;
                        (l = t.slice(0, t.byteLength / 2)),
                          (c = t.slice(t.byteLength / 2, t.byteLength));
                        const d = [];
                        d.push(a(l, !0, e, "jacobian", o, r)),
                          d.push(a(c, !0, e, "jacobian", o, r)),
                          ([l, c] = await Promise.all(d));
                        const u = await s(
                          l,
                          c,
                          "fftJoinExtInv",
                          n.one,
                          n.shiftInv,
                          "jacobian",
                          i,
                          o,
                          r
                        );
                        let h;
                        return (
                          (h =
                            u[0].byteLength > 1 << 28
                              ? new xt(2 * u[0].byteLength)
                              : new Uint8Array(2 * u[0].byteLength)),
                          h.set(u[0]),
                          h.set(u[1], u[0].byteLength),
                          h
                        );
                      })(t, l, c, d, u)
                    : await (async function (t, e, i, o, r) {
                        let l, c;
                        (l = t.slice(0, t.byteLength / 2)),
                          (c = t.slice(t.byteLength / 2, t.byteLength));
                        const d = [];
                        ([l, c] = await s(
                          l,
                          c,
                          "fftJoinExt",
                          n.one,
                          n.shift,
                          e,
                          "jacobian",
                          o,
                          r
                        )),
                          d.push(a(l, !1, "jacobian", i, o, r)),
                          d.push(a(c, !1, "jacobian", i, o, r));
                        const u = await Promise.all(d);
                        let h;
                        return (
                          (h =
                            u[0].byteLength > 1 << 28
                              ? new xt(2 * u[0].byteLength)
                              : new Uint8Array(2 * u[0].byteLength)),
                          h.set(u[0]),
                          h.set(u[1], u[0].byteLength),
                          h
                        );
                      })(t, l, c, d, u)),
                  F ? bt(e, _) : e
                );
              }
              let w, B, v;
              r && (w = n.inv(n.e(y))), mt(t, h);
              let E = Math.min(16384, y),
                C = y / E;
              for (; C < o.concurrency && E >= 16; ) (C *= 2), (E /= 2);
              const A = gt(E),
                q = [];
              for (let e = 0; e < C; e++) {
                d && d.debug(`${u}: fft ${x} mix start: ${e}/${C}`);
                const i = [];
                i.push({ cmd: "ALLOC", var: 0, len: f * E });
                const n = t.slice(E * e * h, E * (e + 1) * h);
                i.push({ cmd: "SET", var: 0, buff: n }),
                  p &&
                    i.push({
                      cmd: "CALL",
                      fnName: p,
                      params: [{ var: 0 }, { val: E }, { var: 0 }],
                    });
                for (let t = 1; t <= A; t++)
                  i.push({
                    cmd: "CALL",
                    fnName: m,
                    params: [{ var: 0 }, { val: E }, { val: t }],
                  });
                A == x
                  ? (b &&
                      (i.push({ cmd: "ALLOCSET", var: 1, buff: w }),
                      i.push({
                        cmd: "CALL",
                        fnName: b,
                        params: [{ var: 0 }, { val: E }, { var: 1 }],
                      })),
                    g &&
                      i.push({
                        cmd: "CALL",
                        fnName: g,
                        params: [{ var: 0 }, { val: E }, { var: 0 }],
                      }),
                    i.push({ cmd: "GET", out: 0, var: 0, len: E * _ }))
                  : i.push({ cmd: "GET", out: 0, var: 0, len: f * E }),
                  q.push(
                    o
                      .queueAction(i)
                      .then(
                        (t) => (
                          d && d.debug(`${u}: fft ${x} mix end: ${e}/${C}`), t
                        )
                      )
                  );
              }
              v = await Promise.all(q);
              for (let t = 0; t < C; t++) v[t] = v[t][0];
              for (let t = A + 1; t <= x; t++) {
                d && d.debug(`${u}: fft  ${x}  join: ${t}/${x}`);
                const e = 1 << (x - t),
                  i = C / e,
                  a = [];
                for (let s = 0; s < e; s++)
                  for (let r = 0; r < i / 2; r++) {
                    const l = n.exp(n.w[t], r * E),
                      c = n.w[t],
                      h = s * i + r,
                      p = s * i + r + i / 2,
                      m = [];
                    m.push({ cmd: "ALLOCSET", var: 0, buff: v[h] }),
                      m.push({ cmd: "ALLOCSET", var: 1, buff: v[p] }),
                      m.push({ cmd: "ALLOCSET", var: 2, buff: l }),
                      m.push({ cmd: "ALLOCSET", var: 3, buff: c }),
                      m.push({
                        cmd: "CALL",
                        fnName: L,
                        params: [
                          { var: 0 },
                          { var: 1 },
                          { val: E },
                          { var: 2 },
                          { var: 3 },
                        ],
                      }),
                      t == x
                        ? (b &&
                            (m.push({ cmd: "ALLOCSET", var: 4, buff: w }),
                            m.push({
                              cmd: "CALL",
                              fnName: b,
                              params: [{ var: 0 }, { val: E }, { var: 4 }],
                            }),
                            m.push({
                              cmd: "CALL",
                              fnName: b,
                              params: [{ var: 1 }, { val: E }, { var: 4 }],
                            })),
                          g &&
                            (m.push({
                              cmd: "CALL",
                              fnName: g,
                              params: [{ var: 0 }, { val: E }, { var: 0 }],
                            }),
                            m.push({
                              cmd: "CALL",
                              fnName: g,
                              params: [{ var: 1 }, { val: E }, { var: 1 }],
                            })),
                          m.push({ cmd: "GET", out: 0, var: 0, len: E * _ }),
                          m.push({ cmd: "GET", out: 1, var: 1, len: E * _ }))
                        : (m.push({ cmd: "GET", out: 0, var: 0, len: E * f }),
                          m.push({ cmd: "GET", out: 1, var: 1, len: E * f })),
                      a.push(
                        o
                          .queueAction(m)
                          .then(
                            (n) => (
                              d &&
                                d.debug(
                                  `${u}: fft ${x} join  ${t}/${x}  ${s + 1}/${e} ${r}/${i / 2}`
                                ),
                              n
                            )
                          )
                      );
                  }
                const s = await Promise.all(a);
                for (let t = 0; t < e; t++)
                  for (let e = 0; e < i / 2; e++) {
                    const n = t * i + e,
                      o = t * i + e + i / 2,
                      a = s.shift();
                    (v[n] = a[0]), (v[o] = a[1]);
                  }
              }
              if (
                ((B = t instanceof xt ? new xt(y * _) : new Uint8Array(y * _)),
                r)
              ) {
                B.set(v[0].slice((E - 1) * _));
                let t = _;
                for (let e = C - 1; e > 0; e--)
                  B.set(v[e], t), (t += E * _), delete v[e];
                B.set(v[0].slice(0, (E - 1) * _), t), delete v[0];
              } else
                for (let t = 0; t < C; t++) B.set(v[t], E * _ * t), delete v[t];
              return F ? bt(B, _) : B;
            }
            async function s(t, a, s, r, l, c, d, u, h) {
              let f, _, p, g, m, L;
              if ("G1" == e)
                "affine" == c
                  ? ((m = 2 * i.F.n8), (_ = "g1m_batchToJacobian"))
                  : (m = 3 * i.F.n8),
                  (L = 3 * i.F.n8),
                  (f = "g1m_" + s),
                  "affine" == d
                    ? ((p = "g1m_batchToAffine"), (g = 2 * i.F.n8))
                    : (g = 3 * i.F.n8);
              else if ("G2" == e)
                "affine" == c
                  ? ((m = 2 * i.F.n8), (_ = "g2m_batchToJacobian"))
                  : (m = 3 * i.F.n8),
                  (f = "g2m_" + s),
                  (L = 3 * i.F.n8),
                  "affine" == d
                    ? ((p = "g2m_batchToAffine"), (g = 2 * i.F.n8))
                    : (g = 3 * i.F.n8);
              else {
                if ("Fr" != e) throw new Error("Invalid group");
                (m = n.n8), (g = n.n8), (L = n.n8), (f = "frm_" + s);
              }
              if (t.byteLength != a.byteLength)
                throw new Error("Invalid buffer size");
              const b = Math.floor(t.byteLength / m);
              if (b != 1 << gt(b)) throw new Error("Invalid number of points");
              let F = Math.floor(b / o.concurrency);
              F < 16 && (F = 16), F > 65536 && (F = 65536);
              const y = [];
              for (let e = 0; e < b; e += F) {
                u && u.debug(`${h}: fftJoinExt Start: ${e}/${b}`);
                const i = Math.min(b - e, F),
                  s = n.mul(r, n.exp(l, e)),
                  c = [],
                  d = t.slice(e * m, (e + i) * m),
                  x = a.slice(e * m, (e + i) * m);
                c.push({ cmd: "ALLOC", var: 0, len: L * i }),
                  c.push({ cmd: "SET", var: 0, buff: d }),
                  c.push({ cmd: "ALLOC", var: 1, len: L * i }),
                  c.push({ cmd: "SET", var: 1, buff: x }),
                  c.push({ cmd: "ALLOCSET", var: 2, buff: s }),
                  c.push({ cmd: "ALLOCSET", var: 3, buff: l }),
                  _ &&
                    (c.push({
                      cmd: "CALL",
                      fnName: _,
                      params: [{ var: 0 }, { val: i }, { var: 0 }],
                    }),
                    c.push({
                      cmd: "CALL",
                      fnName: _,
                      params: [{ var: 1 }, { val: i }, { var: 1 }],
                    })),
                  c.push({
                    cmd: "CALL",
                    fnName: f,
                    params: [
                      { var: 0 },
                      { var: 1 },
                      { val: i },
                      { var: 2 },
                      { var: 3 },
                      { val: n.s },
                    ],
                  }),
                  p &&
                    (c.push({
                      cmd: "CALL",
                      fnName: p,
                      params: [{ var: 0 }, { val: i }, { var: 0 }],
                    }),
                    c.push({
                      cmd: "CALL",
                      fnName: p,
                      params: [{ var: 1 }, { val: i }, { var: 1 }],
                    })),
                  c.push({ cmd: "GET", out: 0, var: 0, len: i * g }),
                  c.push({ cmd: "GET", out: 1, var: 1, len: i * g }),
                  y.push(
                    o
                      .queueAction(c)
                      .then(
                        (t) => (
                          u && u.debug(`${h}: fftJoinExt End: ${e}/${b}`), t
                        )
                      )
                  );
              }
              const x = await Promise.all(y);
              let w, B;
              b * g > 1 << 28
                ? ((w = new xt(b * g)), (B = new xt(b * g)))
                : ((w = new Uint8Array(b * g)), (B = new Uint8Array(b * g)));
              let v = 0;
              for (let t = 0; t < x.length; t++)
                w.set(x[t][0], v), B.set(x[t][1], v), (v += x[t][0].byteLength);
              return [w, B];
            }
            (i.fft = async function (t, e, i, n, o) {
              return await a(t, !1, e, i, n, o);
            }),
              (i.ifft = async function (t, e, i, n, o) {
                return await a(t, !0, e, i, n, o);
              }),
              (i.lagrangeEvaluations = async function (t, o, r, l, c) {
                let d;
                if (((o = o || "affine"), (r = r || "affine"), "G1" == e))
                  d = "affine" == o ? 2 * i.F.n8 : 3 * i.F.n8;
                else if ("G2" == e) d = "affine" == o ? 2 * i.F.n8 : 3 * i.F.n8;
                else {
                  if ("Fr" != e) throw new Error("Invalid group");
                  d = n.n8;
                }
                const u = t.byteLength / d,
                  h = gt(u);
                if (2 ** h * d != t.byteLength)
                  throw (
                    (l && l.error("lagrangeEvaluations iinvalid input size"),
                    new Error("lagrangeEvaluations invalid Input size"))
                  );
                if (h <= n.s) return await i.ifft(t, o, r, l, c);
                if (h > n.s + 1)
                  throw (
                    (l && l.error("lagrangeEvaluations input too big"),
                    new Error("lagrangeEvaluations input too big"))
                  );
                let f = t.slice(0, t.byteLength / 2),
                  _ = t.slice(t.byteLength / 2, t.byteLength);
                const p = n.exp(n.shift, u / 2),
                  g = n.inv(n.sub(n.one, p));
                [f, _] = await s(
                  f,
                  _,
                  "prepareLagrangeEvaluation",
                  g,
                  n.shiftInv,
                  o,
                  "jacobian",
                  l,
                  c + " prep"
                );
                const m = [];
                let L;
                return (
                  m.push(a(f, !0, "jacobian", r, l, c + " t0")),
                  m.push(a(_, !0, "jacobian", r, l, c + " t1")),
                  ([f, _] = await Promise.all(m)),
                  (L =
                    f.byteLength > 1 << 28
                      ? new xt(2 * f.byteLength)
                      : new Uint8Array(2 * f.byteLength)),
                  L.set(f),
                  L.set(_, f.byteLength),
                  L
                );
              }),
              (i.fftMix = async function (t) {
                const a = 3 * i.F.n8;
                let s, r;
                if ("G1" == e) (s = "g1m_fftMix"), (r = "g1m_fftJoin");
                else if ("G2" == e) (s = "g2m_fftMix"), (r = "g2m_fftJoin");
                else {
                  if ("Fr" != e) throw new Error("Invalid group");
                  (s = "frm_fftMix"), (r = "frm_fftJoin");
                }
                const l = Math.floor(t.byteLength / a),
                  c = gt(l);
                let d = 1 << gt(o.concurrency);
                l <= 2 * d && (d = 1);
                const u = l / d,
                  h = gt(u),
                  f = [];
                for (let e = 0; e < d; e++) {
                  const i = [],
                    n = t.slice(e * u * a, (e + 1) * u * a);
                  i.push({ cmd: "ALLOCSET", var: 0, buff: n });
                  for (let t = 1; t <= h; t++)
                    i.push({
                      cmd: "CALL",
                      fnName: s,
                      params: [{ var: 0 }, { val: u }, { val: t }],
                    });
                  i.push({ cmd: "GET", out: 0, var: 0, len: u * a }),
                    f.push(o.queueAction(i));
                }
                const _ = await Promise.all(f),
                  p = [];
                for (let t = 0; t < _.length; t++) p[t] = _[t][0];
                for (let t = h + 1; t <= c; t++) {
                  const e = 1 << (c - t),
                    i = d / e,
                    s = [];
                  for (let l = 0; l < e; l++)
                    for (let e = 0; e < i / 2; e++) {
                      const c = n.exp(n.w[t], e * u),
                        d = n.w[t],
                        h = l * i + e,
                        f = l * i + e + i / 2,
                        _ = [];
                      _.push({ cmd: "ALLOCSET", var: 0, buff: p[h] }),
                        _.push({ cmd: "ALLOCSET", var: 1, buff: p[f] }),
                        _.push({ cmd: "ALLOCSET", var: 2, buff: c }),
                        _.push({ cmd: "ALLOCSET", var: 3, buff: d }),
                        _.push({
                          cmd: "CALL",
                          fnName: r,
                          params: [
                            { var: 0 },
                            { var: 1 },
                            { val: u },
                            { var: 2 },
                            { var: 3 },
                          ],
                        }),
                        _.push({ cmd: "GET", out: 0, var: 0, len: u * a }),
                        _.push({ cmd: "GET", out: 1, var: 1, len: u * a }),
                        s.push(o.queueAction(_));
                    }
                  const l = await Promise.all(s);
                  for (let t = 0; t < e; t++)
                    for (let e = 0; e < i / 2; e++) {
                      const n = t * i + e,
                        o = t * i + e + i / 2,
                        a = l.shift();
                      (p[n] = a[0]), (p[o] = a[1]);
                    }
                }
                let g;
                g = t instanceof xt ? new xt(l * a) : new Uint8Array(l * a);
                let m = 0;
                for (let t = 0; t < d; t++)
                  g.set(p[t], m), (m += p[t].byteLength);
                return g;
              }),
              (i.fftJoin = async function (t, a, s, r) {
                const l = 3 * i.F.n8;
                let c;
                if ("G1" == e) c = "g1m_fftJoin";
                else if ("G2" == e) c = "g2m_fftJoin";
                else {
                  if ("Fr" != e) throw new Error("Invalid group");
                  c = "frm_fftJoin";
                }
                if (t.byteLength != a.byteLength)
                  throw new Error("Invalid buffer size");
                const d = Math.floor(t.byteLength / l);
                if (d != 1 << gt(d))
                  throw new Error("Invalid number of points");
                let u = 1 << gt(o.concurrency);
                d <= 2 * u && (u = 1);
                const h = d / u,
                  f = [];
                for (let e = 0; e < u; e++) {
                  const i = [],
                    d = n.mul(s, n.exp(r, e * h)),
                    u = t.slice(e * h * l, (e + 1) * h * l),
                    _ = a.slice(e * h * l, (e + 1) * h * l);
                  i.push({ cmd: "ALLOCSET", var: 0, buff: u }),
                    i.push({ cmd: "ALLOCSET", var: 1, buff: _ }),
                    i.push({ cmd: "ALLOCSET", var: 2, buff: d }),
                    i.push({ cmd: "ALLOCSET", var: 3, buff: r }),
                    i.push({
                      cmd: "CALL",
                      fnName: c,
                      params: [
                        { var: 0 },
                        { var: 1 },
                        { val: h },
                        { var: 2 },
                        { var: 3 },
                      ],
                    }),
                    i.push({ cmd: "GET", out: 0, var: 0, len: h * l }),
                    i.push({ cmd: "GET", out: 1, var: 1, len: h * l }),
                    f.push(o.queueAction(i));
                }
                const _ = await Promise.all(f);
                let p, g;
                t instanceof xt
                  ? ((p = new xt(d * l)), (g = new xt(d * l)))
                  : ((p = new Uint8Array(d * l)), (g = new Uint8Array(d * l)));
                let m = 0;
                for (let t = 0; t < _.length; t++)
                  p.set(_[t][0], m),
                    g.set(_[t][1], m),
                    (m += _[t][0].byteLength);
                return [p, g];
              }),
              (i.fftFinal = async function (t, n) {
                const a = 3 * i.F.n8,
                  s = 2 * i.F.n8;
                let r, l;
                if ("G1" == e) (r = "g1m_fftFinal"), (l = "g1m_batchToAffine");
                else {
                  if ("G2" != e) throw new Error("Invalid group");
                  (r = "g2m_fftFinal"), (l = "g2m_batchToAffine");
                }
                const c = Math.floor(t.byteLength / a);
                if (c != 1 << gt(c))
                  throw new Error("Invalid number of points");
                const d = Math.floor(c / o.concurrency),
                  u = [];
                for (let e = 0; e < o.concurrency; e++) {
                  let i;
                  if (((i = e < o.concurrency - 1 ? d : c - e * d), 0 == i))
                    continue;
                  const h = [],
                    f = t.slice(e * d * a, (e * d + i) * a);
                  h.push({ cmd: "ALLOCSET", var: 0, buff: f }),
                    h.push({ cmd: "ALLOCSET", var: 1, buff: n }),
                    h.push({
                      cmd: "CALL",
                      fnName: r,
                      params: [{ var: 0 }, { val: i }, { var: 1 }],
                    }),
                    h.push({
                      cmd: "CALL",
                      fnName: l,
                      params: [{ var: 0 }, { val: i }, { var: 0 }],
                    }),
                    h.push({ cmd: "GET", out: 0, var: 0, len: i * s }),
                    u.push(o.queueAction(h));
                }
                const h = await Promise.all(u);
                let f;
                f = t instanceof xt ? new xt(c * s) : new Uint8Array(c * s);
                let _ = 0;
                for (let t = h.length - 1; t >= 0; t--)
                  f.set(h[t][0], _), (_ += h[t][0].byteLength);
                return f;
              });
          }
          async function Nt(t) {
            const e = await (async function (t, e) {
                const i = new Pt();
                (i.memory = new WebAssembly.Memory({ initial: qt })),
                  (i.u8 = new Uint8Array(i.memory.buffer)),
                  (i.u32 = new Uint32Array(i.memory.buffer));
                const n = await WebAssembly.compile(t.code);
                if (
                  ((i.instance = await WebAssembly.instantiate(n, {
                    env: { memory: i.memory },
                  })),
                  (i.singleThread = e),
                  (i.initalPFree = i.u32[0]),
                  (i.pq = t.pq),
                  (i.pr = t.pr),
                  (i.pG1gen = t.pG1gen),
                  (i.pG1zero = t.pG1zero),
                  (i.pG2gen = t.pG2gen),
                  (i.pG2zero = t.pG2zero),
                  (i.pOneT = t.pOneT),
                  e)
                )
                  (i.code = t.code),
                    (i.taskManager = At()),
                    await i.taskManager([
                      { cmd: "INIT", init: qt, code: i.code.slice() },
                    ]),
                    (i.concurrency = 1);
                else {
                  let e;
                  (i.workers = []),
                    (i.pendingDeferreds = []),
                    (i.working = []),
                    (e =
                      "object" == typeof navigator &&
                      navigator.hardwareConcurrency
                        ? navigator.hardwareConcurrency
                        : d.default.cpus().length),
                    0 == e && (e = 2),
                    e > 64 && (e = 64),
                    (i.concurrency = e);
                  for (let t = 0; t < e; t++)
                    (i.workers[t] = new u.default(St)),
                      i.workers[t].addEventListener("message", o(t)),
                      (i.working[t] = !1);
                  const n = [];
                  for (let e = 0; e < i.workers.length; e++) {
                    const o = t.code.slice();
                    n.push(
                      i.postAction(
                        e,
                        [{ cmd: "INIT", init: qt, code: o }],
                        [o.buffer]
                      )
                    );
                  }
                  await Promise.all(n);
                }
                return i;
                function o(t) {
                  return function (e) {
                    let n;
                    (n = e && e.data ? e.data : e),
                      (i.working[t] = !1),
                      i.pendingDeferreds[t].resolve(n),
                      i.processWorks();
                  };
                }
              })(t.wasm, t.singleThread),
              i = {};
            return (
              (i.q = _(t.wasm.q.toString())),
              (i.r = _(t.wasm.r.toString())),
              (i.name = t.name),
              (i.tm = e),
              (i.prePSize = t.wasm.prePSize),
              (i.preQSize = t.wasm.preQSize),
              (i.Fr = new Bt(e, "frm", t.n8r, t.r)),
              (i.F1 = new Bt(e, "f1m", t.n8q, t.q)),
              (i.F2 = new vt(e, "f2m", i.F1)),
              (i.G1 = new Ct(
                e,
                "g1m",
                i.F1,
                t.wasm.pG1gen,
                t.wasm.pG1b,
                t.cofactorG1
              )),
              (i.G2 = new Ct(
                e,
                "g2m",
                i.F2,
                t.wasm.pG2gen,
                t.wasm.pG2b,
                t.cofactorG2
              )),
              (i.F6 = new Et(e, "f6m", i.F2)),
              (i.F12 = new vt(e, "ftm", i.F6)),
              (i.Gt = i.F12),
              zt(i, "G1"),
              zt(i, "G2"),
              zt(i, "Fr"),
              Rt(i, "G1"),
              Rt(i, "G2"),
              Tt(i, "G1"),
              Tt(i, "G2"),
              Tt(i, "Fr"),
              (function (t) {
                const e = t.tm;
                (t.pairing = function (i, n) {
                  e.startSyncOp();
                  const o = e.allocBuff(t.G1.toJacobian(i)),
                    a = e.allocBuff(t.G2.toJacobian(n)),
                    s = e.alloc(t.Gt.n8);
                  e.instance.exports[t.name + "_pairing"](o, a, s);
                  const r = e.getBuff(s, t.Gt.n8);
                  return e.endSyncOp(), r;
                }),
                  (t.pairingEq = async function () {
                    let i, n;
                    arguments.length % 2 == 1
                      ? ((i = arguments[arguments.length - 1]),
                        (n = (arguments.length - 1) / 2))
                      : ((i = t.Gt.one), (n = arguments.length / 2));
                    const o = [];
                    for (let i = 0; i < n; i++) {
                      const n = [],
                        a = t.G1.toJacobian(arguments[2 * i]);
                      n.push({ cmd: "ALLOCSET", var: 0, buff: a }),
                        n.push({ cmd: "ALLOC", var: 1, len: t.prePSize });
                      const s = t.G2.toJacobian(arguments[2 * i + 1]);
                      n.push({ cmd: "ALLOCSET", var: 2, buff: s }),
                        n.push({ cmd: "ALLOC", var: 3, len: t.preQSize }),
                        n.push({ cmd: "ALLOC", var: 4, len: t.Gt.n8 }),
                        n.push({
                          cmd: "CALL",
                          fnName: t.name + "_prepareG1",
                          params: [{ var: 0 }, { var: 1 }],
                        }),
                        n.push({
                          cmd: "CALL",
                          fnName: t.name + "_prepareG2",
                          params: [{ var: 2 }, { var: 3 }],
                        }),
                        n.push({
                          cmd: "CALL",
                          fnName: t.name + "_millerLoop",
                          params: [{ var: 1 }, { var: 3 }, { var: 4 }],
                        }),
                        n.push({ cmd: "GET", out: 0, var: 4, len: t.Gt.n8 }),
                        o.push(e.queueAction(n));
                    }
                    const a = await Promise.all(o);
                    e.startSyncOp();
                    const s = e.alloc(t.Gt.n8);
                    e.instance.exports.ftm_one(s);
                    for (let t = 0; t < a.length; t++) {
                      const i = e.allocBuff(a[t][0]);
                      e.instance.exports.ftm_mul(s, i, s);
                    }
                    e.instance.exports[t.name + "_finalExponentiation"](s, s);
                    const r = e.allocBuff(i),
                      l = !!e.instance.exports.ftm_eq(s, r);
                    return e.endSyncOp(), l;
                  }),
                  (t.prepareG1 = function (t) {
                    this.tm.startSyncOp();
                    const e = this.tm.allocBuff(t),
                      i = this.tm.alloc(this.prePSize);
                    this.tm.instance.exports[this.name + "_prepareG1"](e, i);
                    const n = this.tm.getBuff(i, this.prePSize);
                    return this.tm.endSyncOp(), n;
                  }),
                  (t.prepareG2 = function (t) {
                    this.tm.startSyncOp();
                    const e = this.tm.allocBuff(t),
                      i = this.tm.alloc(this.preQSize);
                    this.tm.instance.exports[this.name + "_prepareG2"](e, i);
                    const n = this.tm.getBuff(i, this.preQSize);
                    return this.tm.endSyncOp(), n;
                  }),
                  (t.millerLoop = function (t, e) {
                    this.tm.startSyncOp();
                    const i = this.tm.allocBuff(t),
                      n = this.tm.allocBuff(e),
                      o = this.tm.alloc(this.Gt.n8);
                    this.tm.instance.exports[this.name + "_millerLoop"](
                      i,
                      n,
                      o
                    );
                    const a = this.tm.getBuff(o, this.Gt.n8);
                    return this.tm.endSyncOp(), a;
                  }),
                  (t.finalExponentiation = function (t) {
                    this.tm.startSyncOp();
                    const e = this.tm.allocBuff(t),
                      i = this.tm.alloc(this.Gt.n8);
                    this.tm.instance.exports[
                      this.name + "_finalExponentiation"
                    ](e, i);
                    const n = this.tm.getBuff(i, this.Gt.n8);
                    return this.tm.endSyncOp(), n;
                  });
              })(i),
              (i.array2buffer = function (t, e) {
                const i = new Uint8Array(e * t.length);
                for (let n = 0; n < t.length; n++) i.set(t[n], n * e);
                return i;
              }),
              (i.buffer2array = function (t, e) {
                const i = t.byteLength / e,
                  n = new Array(i);
                for (let o = 0; o < i; o++) n[o] = t.slice(o * e, o * e + e);
                return n;
              }),
              i
            );
          }
          async function Ut(t, e) {
            const i = new r.ModuleBuilder();
            i.setMemory(25), o.buildBn128(i), e && e(i);
            const n = {};
            if (
              ((n.code = i.build()),
              (n.pq = i.modules.f1m.pq),
              (n.pr = i.modules.frm.pq),
              (n.pG1gen = i.modules.bn128.pG1gen),
              (n.pG1zero = i.modules.bn128.pG1zero),
              (n.pG1b = i.modules.bn128.pG1b),
              (n.pG2gen = i.modules.bn128.pG2gen),
              (n.pG2zero = i.modules.bn128.pG2zero),
              (n.pG2b = i.modules.bn128.pG2b),
              (n.pOneT = i.modules.bn128.pOneT),
              (n.prePSize = i.modules.bn128.prePSize),
              (n.preQSize = i.modules.bn128.preQSize),
              (n.n8q = 32),
              (n.n8r = 32),
              (n.q = i.modules.bn128.q),
              (n.r = i.modules.bn128.r),
              !t && globalThis.curve_bn128)
            )
              return globalThis.curve_bn128;
            const a = {
                name: "bn128",
                wasm: n,
                q: _(
                  "21888242871839275222246405745257275088696311157297823662689037894645226208583"
                ),
                r: _(
                  "21888242871839275222246405745257275088548364400416034343698204186575808495617"
                ),
                n8q: 32,
                n8r: 32,
                cofactorG2: _(
                  "30644e72e131a029b85045b68181585e06ceecda572a2489345f2299c0f9fa8d",
                  16
                ),
                singleThread: !!t,
              },
              s = await Nt(a);
            return (
              (s.terminate = async function () {
                a.singleThread ||
                  ((globalThis.curve_bn128 = null), await this.tm.terminate());
              }),
              t || (globalThis.curve_bn128 = s),
              s
            );
          }
          async function Gt(t, e) {
            const i = new r.ModuleBuilder();
            i.setMemory(25), o.buildBls12381(i), e && e(i);
            const n = {};
            if (
              ((n.code = i.build()),
              (n.pq = i.modules.f1m.pq),
              (n.pr = i.modules.frm.pq),
              (n.pG1gen = i.modules.bls12381.pG1gen),
              (n.pG1zero = i.modules.bls12381.pG1zero),
              (n.pG1b = i.modules.bls12381.pG1b),
              (n.pG2gen = i.modules.bls12381.pG2gen),
              (n.pG2zero = i.modules.bls12381.pG2zero),
              (n.pG2b = i.modules.bls12381.pG2b),
              (n.pOneT = i.modules.bls12381.pOneT),
              (n.prePSize = i.modules.bls12381.prePSize),
              (n.preQSize = i.modules.bls12381.preQSize),
              (n.n8q = 48),
              (n.n8r = 32),
              (n.q = i.modules.bls12381.q),
              (n.r = i.modules.bls12381.r),
              !t && globalThis.curve_bls12381)
            )
              return globalThis.curve_bls12381;
            const a = {
                name: "bls12381",
                wasm: n,
                q: _(
                  "1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab",
                  16
                ),
                r: _(
                  "73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001",
                  16
                ),
                n8q: 48,
                n8r: 32,
                cofactorG1: _("0x396c8c005555e1568c00aaab0000aaab", 16),
                cofactorG2: _(
                  "0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5",
                  16
                ),
                singleThread: !!t,
              },
              s = await Nt(a);
            return (
              (s.terminate = async function () {
                a.singleThread ||
                  ((globalThis.curve_bls12381 = null),
                  await this.tm.terminate());
              }),
              t || (globalThis.curve_bls12381 = s),
              s
            );
          }
          (globalThis.curve_bn128 = null), (globalThis.curve_bls12381 = null);
          const jt = _(
              "73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001",
              16
            ),
            kt = _(
              "21888242871839275222246405745257275088548364400416034343698204186575808495617"
            ),
            $t = _(
              "1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab",
              16
            ),
            Zt = _(
              "21888242871839275222246405745257275088696311157297823662689037894645226208583"
            ),
            Wt = W,
            Dt = Ft;
          (e.BigBuffer = xt),
            (e.ChaCha = nt),
            (e.EC = class {
              constructor(t, e) {
                (this.F = t),
                  (this.g = e),
                  2 == this.g.length && (this.g[2] = this.F.one),
                  (this.zero = [this.F.zero, this.F.one, this.F.zero]);
              }
              add(t, e) {
                const i = this.F;
                if (this.eq(t, this.zero)) return e;
                if (this.eq(e, this.zero)) return t;
                const n = new Array(3),
                  o = i.square(t[2]),
                  a = i.square(e[2]),
                  s = i.mul(t[0], a),
                  r = i.mul(e[0], o),
                  l = i.mul(t[2], o),
                  c = i.mul(e[2], a),
                  d = i.mul(t[1], c),
                  u = i.mul(e[1], l);
                if (i.eq(s, r) && i.eq(d, u)) return this.double(t);
                const h = i.sub(r, s),
                  f = i.sub(u, d),
                  _ = i.square(i.add(h, h)),
                  p = i.mul(h, _),
                  g = i.add(f, f),
                  m = i.mul(s, _);
                n[0] = i.sub(i.sub(i.square(g), p), i.add(m, m));
                const L = i.mul(d, p);
                return (
                  (n[1] = i.sub(i.mul(g, i.sub(m, n[0])), i.add(L, L))),
                  (n[2] = i.mul(
                    h,
                    i.sub(i.square(i.add(t[2], e[2])), i.add(o, a))
                  )),
                  n
                );
              }
              neg(t) {
                return [t[0], this.F.neg(t[1]), t[2]];
              }
              sub(t, e) {
                return this.add(t, this.neg(e));
              }
              double(t) {
                const e = this.F,
                  i = new Array(3);
                if (this.eq(t, this.zero)) return t;
                const n = e.square(t[0]),
                  o = e.square(t[1]),
                  a = e.square(o);
                let s = e.sub(e.square(e.add(t[0], o)), e.add(n, a));
                s = e.add(s, s);
                const r = e.add(e.add(n, n), n),
                  l = e.square(r);
                i[0] = e.sub(l, e.add(s, s));
                let c = e.add(a, a);
                (c = e.add(c, c)),
                  (c = e.add(c, c)),
                  (i[1] = e.sub(e.mul(r, e.sub(s, i[0])), c));
                const d = e.mul(t[1], t[2]);
                return (i[2] = e.add(d, d)), i;
              }
              timesScalar(t, e) {
                return H(this, t, e);
              }
              mulScalar(t, e) {
                return H(this, t, e);
              }
              affine(t) {
                const e = this.F;
                if (this.isZero(t)) return this.zero;
                if (e.eq(t[2], e.one)) return t;
                {
                  const i = e.inv(t[2]),
                    n = e.square(i),
                    o = e.mul(n, i),
                    a = new Array(3);
                  return (
                    (a[0] = e.mul(t[0], n)),
                    (a[1] = e.mul(t[1], o)),
                    (a[2] = e.one),
                    a
                  );
                }
              }
              multiAffine(t) {
                const e = Object.keys(t),
                  i = this.F,
                  n = new Array(e.length + 1);
                n[0] = i.one;
                for (let o = 0; o < e.length; o++)
                  i.eq(t[e[o]][2], i.zero)
                    ? (n[o + 1] = n[o])
                    : (n[o + 1] = i.mul(n[o], t[e[o]][2]));
                n[e.length] = i.inv(n[e.length]);
                for (let o = e.length - 1; o >= 0; o--)
                  if (i.eq(t[e[o]][2], i.zero))
                    (n[o] = n[o + 1]), (t[e[o]] = this.zero);
                  else {
                    const a = i.mul(n[o], n[o + 1]);
                    n[o] = i.mul(t[e[o]][2], n[o + 1]);
                    const s = i.square(a),
                      r = i.mul(s, a);
                    (t[e[o]][0] = i.mul(t[e[o]][0], s)),
                      (t[e[o]][1] = i.mul(t[e[o]][1], r)),
                      (t[e[o]][2] = i.one);
                  }
              }
              eq(t, e) {
                const i = this.F;
                if (this.F.eq(t[2], this.F.zero))
                  return this.F.eq(e[2], this.F.zero);
                if (this.F.eq(e[2], this.F.zero)) return !1;
                const n = i.square(t[2]),
                  o = i.square(e[2]),
                  a = i.mul(t[0], o),
                  s = i.mul(e[0], n),
                  r = i.mul(t[2], n),
                  l = i.mul(e[2], o),
                  c = i.mul(t[1], l),
                  d = i.mul(e[1], r);
                return i.eq(a, s) && i.eq(c, d);
              }
              isZero(t) {
                return this.F.isZero(t[2]);
              }
              toString(t) {
                const e = this.affine(t);
                return `[ ${this.F.toString(e[0])} , ${this.F.toString(e[1])} ]`;
              }
              fromRng(t) {
                const e = this.F;
                let i,
                  n = [];
                do {
                  (n[0] = e.fromRng(t)), (i = t.nextBool());
                  const o = e.add(e.mul(e.square(n[0]), n[0]), this.b);
                  n[1] = e.sqrt(o);
                } while (null == n[1] || e.isZero[n]);
                return (
                  i ^ ut(e, n[1]) && (n[1] = e.neg(n[1])),
                  (n[2] = e.one),
                  this.cofactor && (n = this.mulScalar(n, this.cofactor)),
                  (n = this.affine(n)),
                  n
                );
              }
              toRprLE(t, e, i) {
                (i = this.affine(i)),
                  this.isZero(i)
                    ? new Uint8Array(t, e, 2 * this.F.n8).fill(0)
                    : (this.F.toRprLE(t, e, i[0]),
                      this.F.toRprLE(t, e + this.F.n8, i[1]));
              }
              toRprBE(t, e, i) {
                (i = this.affine(i)),
                  this.isZero(i)
                    ? new Uint8Array(t, e, 2 * this.F.n8).fill(0)
                    : (this.F.toRprBE(t, e, i[0]),
                      this.F.toRprBE(t, e + this.F.n8, i[1]));
              }
              toRprLEM(t, e, i) {
                (i = this.affine(i)),
                  this.isZero(i)
                    ? new Uint8Array(t, e, 2 * this.F.n8).fill(0)
                    : (this.F.toRprLEM(t, e, i[0]),
                      this.F.toRprLEM(t, e + this.F.n8, i[1]));
              }
              toRprLEJM(t, e, i) {
                (i = this.affine(i)),
                  this.isZero(i)
                    ? new Uint8Array(t, e, 2 * this.F.n8).fill(0)
                    : (this.F.toRprLEM(t, e, i[0]),
                      this.F.toRprLEM(t, e + this.F.n8, i[1]),
                      this.F.toRprLEM(t, e + 2 * this.F.n8, i[2]));
              }
              toRprBEM(t, e, i) {
                (i = this.affine(i)),
                  this.isZero(i)
                    ? new Uint8Array(t, e, 2 * this.F.n8).fill(0)
                    : (this.F.toRprBEM(t, e, i[0]),
                      this.F.toRprBEM(t, e + this.F.n8, i[1]));
              }
              fromRprLE(t, e) {
                e = e || 0;
                const i = this.F.fromRprLE(t, e),
                  n = this.F.fromRprLE(t, e + this.F.n8);
                return this.F.isZero(i) && this.F.isZero(n)
                  ? this.zero
                  : [i, n, this.F.one];
              }
              fromRprBE(t, e) {
                e = e || 0;
                const i = this.F.fromRprBE(t, e),
                  n = this.F.fromRprBE(t, e + this.F.n8);
                return this.F.isZero(i) && this.F.isZero(n)
                  ? this.zero
                  : [i, n, this.F.one];
              }
              fromRprLEM(t, e) {
                e = e || 0;
                const i = this.F.fromRprLEM(t, e),
                  n = this.F.fromRprLEM(t, e + this.F.n8);
                return this.F.isZero(i) && this.F.isZero(n)
                  ? this.zero
                  : [i, n, this.F.one];
              }
              fromRprLEJM(t, e) {
                e = e || 0;
                const i = this.F.fromRprLEM(t, e),
                  n = this.F.fromRprLEM(t, e + this.F.n8),
                  o = this.F.fromRprLEM(t, e + 2 * this.F.n8);
                return this.F.isZero(i) && this.F.isZero(n)
                  ? this.zero
                  : [i, n, o];
              }
              fromRprBEM(t, e) {
                e = e || 0;
                const i = this.F.fromRprBEM(t, e),
                  n = this.F.fromRprBEM(t, e + this.F.n8);
                return this.F.isZero(i) && this.F.isZero(n)
                  ? this.zero
                  : [i, n, this.F.one];
              }
              fromRprCompressed(t, e) {
                const i = this.F,
                  n = new Uint8Array(t.buffer, e, i.n8);
                if (64 & n[0]) return this.zero;
                const o = new Array(3),
                  a = !!(128 & n[0]);
                (n[0] = 127 & n[0]),
                  (o[0] = i.fromRprBE(t, e)),
                  a && (n[0] = 128 | n[0]);
                const s = i.add(i.mul(i.square(o[0]), o[0]), this.b);
                if (((o[1] = i.sqrt(s)), null === o[1]))
                  throw new Error("Invalid Point!");
                return (
                  a ^ ut(i, o[1]) && (o[1] = i.neg(o[1])), (o[2] = i.one), o
                );
              }
              toRprCompressed(t, e, i) {
                i = this.affine(i);
                const n = new Uint8Array(t.buffer, e, this.F.n8);
                if (this.isZero(i)) return n.fill(0), void (n[0] = 64);
                this.F.toRprBE(t, e, i[0]),
                  ut(this.F, i[1]) && (n[0] = 128 | n[0]);
              }
              fromRprUncompressed(t, e) {
                return 64 & t[0] ? this.zero : this.fromRprBE(t, e);
              }
              toRprUncompressed(t, e, i) {
                this.toRprBE(t, e, i), this.isZero(i) && (t[e] = 64 | t[e]);
              }
            }),
            (e.F1Field = dt),
            (e.F2Field = class {
              constructor(t, e) {
                (this.type = "F2"),
                  (this.F = t),
                  (this.zero = [this.F.zero, this.F.zero]),
                  (this.one = [this.F.one, this.F.zero]),
                  (this.negone = this.neg(this.one)),
                  (this.nonResidue = e),
                  (this.m = 2 * t.m),
                  (this.p = t.p),
                  (this.n64 = 2 * t.n64),
                  (this.n32 = 2 * this.n64),
                  (this.n8 = 8 * this.n64),
                  et(this);
              }
              _mulByNonResidue(t) {
                return this.F.mul(this.nonResidue, t);
              }
              copy(t) {
                return [this.F.copy(t[0]), this.F.copy(t[1])];
              }
              add(t, e) {
                return [this.F.add(t[0], e[0]), this.F.add(t[1], e[1])];
              }
              double(t) {
                return this.add(t, t);
              }
              sub(t, e) {
                return [this.F.sub(t[0], e[0]), this.F.sub(t[1], e[1])];
              }
              neg(t) {
                return this.sub(this.zero, t);
              }
              conjugate(t) {
                return [t[0], this.F.neg(t[1])];
              }
              mul(t, e) {
                const i = this.F.mul(t[0], e[0]),
                  n = this.F.mul(t[1], e[1]);
                return [
                  this.F.add(i, this._mulByNonResidue(n)),
                  this.F.sub(
                    this.F.mul(this.F.add(t[0], t[1]), this.F.add(e[0], e[1])),
                    this.F.add(i, n)
                  ),
                ];
              }
              inv(t) {
                const e = this.F.square(t[0]),
                  i = this.F.square(t[1]),
                  n = this.F.sub(e, this._mulByNonResidue(i)),
                  o = this.F.inv(n);
                return [this.F.mul(t[0], o), this.F.neg(this.F.mul(t[1], o))];
              }
              div(t, e) {
                return this.mul(t, this.inv(e));
              }
              square(t) {
                const e = this.F.mul(t[0], t[1]);
                return [
                  this.F.sub(
                    this.F.mul(
                      this.F.add(t[0], t[1]),
                      this.F.add(t[0], this._mulByNonResidue(t[1]))
                    ),
                    this.F.add(e, this._mulByNonResidue(e))
                  ),
                  this.F.add(e, e),
                ];
              }
              isZero(t) {
                return this.F.isZero(t[0]) && this.F.isZero(t[1]);
              }
              eq(t, e) {
                return this.F.eq(t[0], e[0]) && this.F.eq(t[1], e[1]);
              }
              mulScalar(t, e) {
                return H(this, t, e);
              }
              pow(t, e) {
                return tt(this, t, e);
              }
              exp(t, e) {
                return tt(this, t, e);
              }
              toString(t) {
                return `[ ${this.F.toString(t[0])} , ${this.F.toString(t[1])} ]`;
              }
              fromRng(t) {
                return [this.F.fromRng(t), this.F.fromRng(t)];
              }
              gt(t, e) {
                return (
                  !!this.F.gt(t[0], e[0]) ||
                  (!this.F.gt(e[0], t[0]) && !!this.F.gt(t[1], e[1]))
                );
              }
              geq(t, e) {
                return this.gt(t, e) || this.eq(t, e);
              }
              lt(t, e) {
                return !this.geq(t, e);
              }
              leq(t, e) {
                return !this.gt(t, e);
              }
              neq(t, e) {
                return !this.eq(t, e);
              }
              random() {
                return [this.F.random(), this.F.random()];
              }
              toRprLE(t, e, i) {
                this.F.toRprLE(t, e, i[0]),
                  this.F.toRprLE(t, e + this.F.n8, i[1]);
              }
              toRprBE(t, e, i) {
                this.F.toRprBE(t, e, i[1]),
                  this.F.toRprBE(t, e + this.F.n8, i[0]);
              }
              toRprLEM(t, e, i) {
                this.F.toRprLEM(t, e, i[0]),
                  this.F.toRprLEM(t, e + this.F.n8, i[1]);
              }
              toRprBEM(t, e, i) {
                this.F.toRprBEM(t, e, i[1]),
                  this.F.toRprBEM(t, e + this.F.n8, i[0]);
              }
              fromRprLE(t, e) {
                return (
                  (e = e || 0),
                  [this.F.fromRprLE(t, e), this.F.fromRprLE(t, e + this.F.n8)]
                );
              }
              fromRprBE(t, e) {
                e = e || 0;
                const i = this.F.fromRprBE(t, e);
                return [this.F.fromRprBE(t, e + this.F.n8), i];
              }
              fromRprLEM(t, e) {
                return (
                  (e = e || 0),
                  [this.F.fromRprLEM(t, e), this.F.fromRprLEM(t, e + this.F.n8)]
                );
              }
              fromRprBEM(t, e) {
                e = e || 0;
                const i = this.F.fromRprBEM(t, e);
                return [this.F.fromRprBEM(t, e + this.F.n8), i];
              }
              toObject(t) {
                return t;
              }
            }),
            (e.F3Field = class {
              constructor(t, e) {
                (this.type = "F3"),
                  (this.F = t),
                  (this.zero = [this.F.zero, this.F.zero, this.F.zero]),
                  (this.one = [this.F.one, this.F.zero, this.F.zero]),
                  (this.negone = this.neg(this.one)),
                  (this.nonResidue = e),
                  (this.m = 3 * t.m),
                  (this.p = t.p),
                  (this.n64 = 3 * t.n64),
                  (this.n32 = 2 * this.n64),
                  (this.n8 = 8 * this.n64);
              }
              _mulByNonResidue(t) {
                return this.F.mul(this.nonResidue, t);
              }
              copy(t) {
                return [
                  this.F.copy(t[0]),
                  this.F.copy(t[1]),
                  this.F.copy(t[2]),
                ];
              }
              add(t, e) {
                return [
                  this.F.add(t[0], e[0]),
                  this.F.add(t[1], e[1]),
                  this.F.add(t[2], e[2]),
                ];
              }
              double(t) {
                return this.add(t, t);
              }
              sub(t, e) {
                return [
                  this.F.sub(t[0], e[0]),
                  this.F.sub(t[1], e[1]),
                  this.F.sub(t[2], e[2]),
                ];
              }
              neg(t) {
                return this.sub(this.zero, t);
              }
              mul(t, e) {
                const i = this.F.mul(t[0], e[0]),
                  n = this.F.mul(t[1], e[1]),
                  o = this.F.mul(t[2], e[2]);
                return [
                  this.F.add(
                    i,
                    this._mulByNonResidue(
                      this.F.sub(
                        this.F.mul(
                          this.F.add(t[1], t[2]),
                          this.F.add(e[1], e[2])
                        ),
                        this.F.add(n, o)
                      )
                    )
                  ),
                  this.F.add(
                    this.F.sub(
                      this.F.mul(
                        this.F.add(t[0], t[1]),
                        this.F.add(e[0], e[1])
                      ),
                      this.F.add(i, n)
                    ),
                    this._mulByNonResidue(o)
                  ),
                  this.F.add(
                    this.F.sub(
                      this.F.mul(
                        this.F.add(t[0], t[2]),
                        this.F.add(e[0], e[2])
                      ),
                      this.F.add(i, o)
                    ),
                    n
                  ),
                ];
              }
              inv(t) {
                const e = this.F.square(t[0]),
                  i = this.F.square(t[1]),
                  n = this.F.square(t[2]),
                  o = this.F.mul(t[0], t[1]),
                  a = this.F.mul(t[0], t[2]),
                  s = this.F.mul(t[1], t[2]),
                  r = this.F.sub(e, this._mulByNonResidue(s)),
                  l = this.F.sub(this._mulByNonResidue(n), o),
                  c = this.F.sub(i, a),
                  d = this.F.inv(
                    this.F.add(
                      this.F.mul(t[0], r),
                      this._mulByNonResidue(
                        this.F.add(this.F.mul(t[2], l), this.F.mul(t[1], c))
                      )
                    )
                  );
                return [this.F.mul(d, r), this.F.mul(d, l), this.F.mul(d, c)];
              }
              div(t, e) {
                return this.mul(t, this.inv(e));
              }
              square(t) {
                const e = this.F.square(t[0]),
                  i = this.F.mul(t[0], t[1]),
                  n = this.F.add(i, i),
                  o = this.F.square(this.F.add(this.F.sub(t[0], t[1]), t[2])),
                  a = this.F.mul(t[1], t[2]),
                  s = this.F.add(a, a),
                  r = this.F.square(t[2]);
                return [
                  this.F.add(e, this._mulByNonResidue(s)),
                  this.F.add(n, this._mulByNonResidue(r)),
                  this.F.sub(this.F.add(this.F.add(n, o), s), this.F.add(e, r)),
                ];
              }
              isZero(t) {
                return (
                  this.F.isZero(t[0]) &&
                  this.F.isZero(t[1]) &&
                  this.F.isZero(t[2])
                );
              }
              eq(t, e) {
                return (
                  this.F.eq(t[0], e[0]) &&
                  this.F.eq(t[1], e[1]) &&
                  this.F.eq(t[2], e[2])
                );
              }
              affine(t) {
                return [
                  this.F.affine(t[0]),
                  this.F.affine(t[1]),
                  this.F.affine(t[2]),
                ];
              }
              mulScalar(t, e) {
                return H(this, t, e);
              }
              pow(t, e) {
                return tt(this, t, e);
              }
              exp(t, e) {
                return tt(this, t, e);
              }
              toString(t) {
                return `[ ${this.F.toString(t[0])} , ${this.F.toString(t[1])}, ${this.F.toString(t[2])} ]`;
              }
              fromRng(t) {
                return [
                  this.F.fromRng(t),
                  this.F.fromRng(t),
                  this.F.fromRng(t),
                ];
              }
              gt(t, e) {
                return (
                  !!this.F.gt(t[0], e[0]) ||
                  (!this.F.gt(e[0], t[0]) &&
                    (!!this.F.gt(t[1], e[1]) ||
                      (!this.F.gt(e[1], t[1]) && !!this.F.gt(t[2], e[2]))))
                );
              }
              geq(t, e) {
                return this.gt(t, e) || this.eq(t, e);
              }
              lt(t, e) {
                return !this.geq(t, e);
              }
              leq(t, e) {
                return !this.gt(t, e);
              }
              neq(t, e) {
                return !this.eq(t, e);
              }
              random() {
                return [this.F.random(), this.F.random(), this.F.random()];
              }
              toRprLE(t, e, i) {
                this.F.toRprLE(t, e, i[0]),
                  this.F.toRprLE(t, e + this.F.n8, i[1]),
                  this.F.toRprLE(t, e + 2 * this.F.n8, i[2]);
              }
              toRprBE(t, e, i) {
                this.F.toRprBE(t, e, i[2]),
                  this.F.toRprBE(t, e + this.F.n8, i[1]),
                  this.F.toRprBE(t, e + 2 * this.F.n8, i[0]);
              }
              toRprLEM(t, e, i) {
                this.F.toRprLEM(t, e, i[0]),
                  this.F.toRprLEM(t, e + this.F.n8, i[1]),
                  this.F.toRprLEM(t, e + 2 * this.F.n8, i[2]);
              }
              toRprBEM(t, e, i) {
                this.F.toRprBEM(t, e, i[2]),
                  this.F.toRprBEM(t, e + this.F.n8, i[1]),
                  this.F.toRprBEM(t, e + 2 * this.F.n8, i[0]);
              }
              fromRprLE(t, e) {
                return (
                  (e = e || 0),
                  [
                    this.F.fromRprLE(t, e),
                    this.F.fromRprLE(t, e + this.n8),
                    this.F.fromRprLE(t, e + 2 * this.n8),
                  ]
                );
              }
              fromRprBE(t, e) {
                e = e || 0;
                const i = this.F.fromRprBE(t, e),
                  n = this.F.fromRprBE(t, e + this.n8);
                return [this.F.fromRprBE(t, e + 2 * this.n8), n, i];
              }
              fromRprLEM(t, e) {
                return (
                  (e = e || 0),
                  [
                    this.F.fromRprLEM(t, e),
                    this.F.fromRprLEM(t, e + this.n8),
                    this.F.fromRprLEM(t, e + 2 * this.n8),
                  ]
                );
              }
              fromRprBEM(t, e) {
                e = e || 0;
                const i = this.F.fromRprBEM(t, e),
                  n = this.F.fromRprBEM(t, e + this.n8);
                return [this.F.fromRprBEM(t, e + 2 * this.n8), n, i];
              }
              toObject(t) {
                return t;
              }
            }),
            (e.PolField = class {
              constructor(t) {
                this.F = t;
                let e = t.sqrt_t,
                  i = t.sqrt_s;
                const n = this.F.add(
                  this.F.add(this.F.two, this.F.two),
                  this.F.one
                );
                (this.w = new Array(i + 1)),
                  (this.wi = new Array(i + 1)),
                  (this.w[i] = this.F.pow(n, e)),
                  (this.wi[i] = this.F.inv(this.w[i]));
                let o = i - 1;
                for (; o >= 0; )
                  (this.w[o] = this.F.square(this.w[o + 1])),
                    (this.wi[o] = this.F.square(this.wi[o + 1])),
                    o--;
                (this.roots = []), this._setRoots(15);
              }
              _setRoots(t) {
                t > this.F.sqrt_s && (t = this.s);
                for (let e = t; e >= 0 && !this.roots[e]; e--) {
                  let t = this.F.one;
                  const i = 1 << e,
                    n = new Array(i);
                  for (let o = 0; o < i; o++)
                    (n[o] = t), (t = this.F.mul(t, this.w[e]));
                  this.roots[e] = n;
                }
              }
              add(t, e) {
                const i = Math.max(t.length, e.length),
                  n = new Array(i);
                for (let o = 0; o < i; o++)
                  n[o] = this.F.add(t[o] || this.F.zero, e[o] || this.F.zero);
                return this.reduce(n);
              }
              double(t) {
                return this.add(t, t);
              }
              sub(t, e) {
                const i = Math.max(t.length, e.length),
                  n = new Array(i);
                for (let o = 0; o < i; o++)
                  n[o] = this.F.sub(t[o] || this.F.zero, e[o] || this.F.zero);
                return this.reduce(n);
              }
              mulScalar(t, e) {
                if (this.F.eq(e, this.F.zero)) return [];
                if (this.F.eq(e, this.F.one)) return t;
                const i = new Array(t.length);
                for (let n = 0; n < t.length; n++) i[n] = this.F.mul(t[n], e);
                return i;
              }
              mul(t, e) {
                return 0 == t.length || 0 == e.length
                  ? []
                  : 1 == t.length
                    ? this.mulScalar(e, t[0])
                    : 1 == e.length
                      ? this.mulScalar(t, e[0])
                      : (e.length > t.length && ([e, t] = [t, e]),
                        e.length <= 2 || e.length < D(t.length)
                          ? this.mulNormal(t, e)
                          : this.mulFFT(t, e));
              }
              mulNormal(t, e) {
                let i = [];
                for (let n = 0; n < e.length; n++)
                  i = this.add(i, this.scaleX(this.mulScalar(t, e[n]), n));
                return i;
              }
              mulFFT(t, e) {
                const i = D(Math.max(t.length, e.length) - 1) + 2;
                this._setRoots(i);
                const n = 1 << i,
                  o = this.extend(t, n),
                  a = this.extend(e, n),
                  s = J(this, o, i, 0, 1),
                  r = J(this, a, i, 0, 1),
                  l = new Array(n);
                for (let t = 0; t < n; t++) l[t] = this.F.mul(s[t], r[t]);
                const c = J(this, l, i, 0, 1),
                  d = this.F.inv(this.F.mulScalar(this.F.one, n)),
                  u = new Array(n);
                for (let t = 0; t < n; t++)
                  u[t] = this.F.mul(c[(n - t) % n], d);
                return this.reduce(u);
              }
              square(t) {
                return this.mul(t, t);
              }
              scaleX(t, e) {
                return 0 == e
                  ? t
                  : e > 0
                    ? new Array(e).fill(this.F.zero).concat(t)
                    : -e >= t.length
                      ? []
                      : t.slice(-e);
              }
              eval2(t, e) {
                let i = this.F.zero,
                  n = this.F.one;
                for (let o = 0; o < t.length; o++)
                  (i = this.F.add(i, this.F.mul(t[o], n))),
                    (n = this.F.mul(n, e));
                return i;
              }
              eval(t, e) {
                const i = this.F;
                if (0 == t.length) return i.zero;
                const n = this._next2Power(t.length);
                return (function t(e, n, o, a, s) {
                  if (1 == s) return e[o];
                  const r = i.square(n);
                  return i.add(
                    t(e, r, o, a << 1, s >> 1),
                    i.mul(n, t(e, r, o + a, a << 1, s >> 1))
                  );
                })(this.extend(t, n), e, 0, 1, n);
              }
              lagrange(t) {
                let e = [this.F.one];
                for (let i = 0; i < t.length; i++)
                  e = this.mul(e, [this.F.neg(t[i][0]), this.F.one]);
                let i = [];
                for (let n = 0; n < t.length; n++) {
                  let o = this.ruffini(e, t[n][0]);
                  const a = this.F.mul(
                    this.F.inv(this.eval(o, t[n][0])),
                    t[n][1]
                  );
                  (o = this.mulScalar(o, a)), (i = this.add(i, o));
                }
                return i;
              }
              fft(t) {
                if (t.length <= 1) return t;
                const e = D(t.length - 1) + 1;
                this._setRoots(e);
                const i = 1 << e;
                return J(this, this.extend(t, i), e, 0, 1);
              }
              fft2(t) {
                if (t.length <= 1) return t;
                const e = D(t.length - 1) + 1;
                this._setRoots(e);
                const i = 1 << e,
                  n = this.extend(t, i);
                return Y(n, e), V(this, n, e);
              }
              ifft(t) {
                if (t.length <= 1) return t;
                const e = D(t.length - 1) + 1;
                this._setRoots(e);
                const i = 1 << e,
                  n = J(this, this.extend(t, i), e, 0, 1),
                  o = this.F.inv(this.F.mulScalar(this.F.one, i)),
                  a = new Array(i);
                for (let t = 0; t < i; t++)
                  a[t] = this.F.mul(n[(i - t) % i], o);
                return a;
              }
              ifft2(t) {
                if (t.length <= 1) return t;
                const e = D(t.length - 1) + 1;
                this._setRoots(e);
                const i = 1 << e,
                  n = this.extend(t, i);
                Y(n, e);
                const o = V(this, n, e),
                  a = this.F.inv(this.F.mulScalar(this.F.one, i)),
                  s = new Array(i);
                for (let t = 0; t < i; t++)
                  s[t] = this.F.mul(o[(i - t) % i], a);
                return s;
              }
              _fft(t, e, i, n) {
                const o = 1 << e;
                if (1 == o) return [t[i]];
                const a = o >> 1,
                  s = this._fft(t, e - 1, i, 2 * n),
                  r = this._fft(t, e - 1, i + n, 2 * n),
                  l = new Array(o);
                let c = this.F.one;
                for (let t = 0; t < a; t++)
                  (l[t] = this.F.add(s[t], this.F.mul(c, r[t]))),
                    (l[t + a] = this.F.sub(s[t], this.F.mul(c, r[t]))),
                    (c = this.F.mul(c, this.w[e]));
                return l;
              }
              extend(t, e) {
                if (e == t.length) return t;
                const i = new Array(e - t.length).fill(this.F.zero);
                return t.concat(i);
              }
              reduce(t) {
                if (0 == t.length) return t;
                if (!this.F.eq(t[t.length - 1], this.F.zero)) return t;
                let e = t.length - 1;
                for (; e > 0 && this.F.eq(t[e], this.F.zero); ) e--;
                return t.slice(0, e + 1);
              }
              eq(t, e) {
                const i = this.reduce(t),
                  n = this.reduce(e);
                if (i.length != n.length) return !1;
                for (let t = 0; t < n.length; t++)
                  if (!this.F.eq(i[t], n[t])) return !1;
                return !0;
              }
              ruffini(t, e) {
                const i = new Array(t.length - 1);
                i[i.length - 1] = t[t.length - 1];
                for (let n = i.length - 2; n >= 0; n--)
                  i[n] = this.F.add(this.F.mul(i[n + 1], e), t[n + 1]);
                return i;
              }
              _next2Power(t) {
                return (
                  t--,
                  (t |= t >> 1),
                  (t |= t >> 2),
                  (t |= t >> 4),
                  (t |= t >> 8),
                  (t |= t >> 16),
                  ++t
                );
              }
              toString(t) {
                let e = "";
                for (let i = this.normalize(t).length - 1; i >= 0; i--)
                  this.F.eq(t[i], this.F.zero) ||
                    ("" != e && (e += " + "),
                    (e += t[i].toString(10)),
                    i > 0 && ((e += "x"), i > 1 && (e = e + "^" + i)));
                return e;
              }
              normalize(t) {
                const e = new Array(t.length);
                for (let i = 0; i < t.length; i++)
                  e[i] = this.F.normalize(t[i]);
                return e;
              }
              _reciprocal(t, e) {
                const i = 1 << e;
                if (1 == i) return [this.F.inv(t[0])];
                const n = this.scaleX(t, -i / 2),
                  o = this._reciprocal(n, e - 1),
                  a = this.scaleX(this.double(o), (3 * i) / 2 - 2),
                  s = this.mul(this.square(o), t);
                return this.scaleX(this.sub(a, s), -(i - 2));
              }
              _div2(t, e) {
                const i = D(e.length - 1) + 1,
                  n = 1 << i,
                  o = n - e.length,
                  a = this._reciprocal(this.scaleX(e, o), i);
                return this.scaleX(a, t - 2 * n + 2 + o);
              }
              div(t, e) {
                if (t.length < e.length) return [];
                const i = D(e.length - 1) + 1,
                  n = 1 << i,
                  o = this.scaleX(t, n - e.length),
                  a = this.scaleX(e, n - e.length),
                  s = a.length - 1;
                let r = o.length - 1;
                const l = this._reciprocal(a, i);
                let c;
                r > 2 * s &&
                  (c = this.sub(
                    this.scaleX([this.F.one], 2 * s),
                    this.mul(l, a)
                  ));
                let d,
                  u,
                  h = [],
                  f = o,
                  _ = !1;
                for (; !_; )
                  (d = this.mul(f, l)),
                    (h = this.add(h, this.scaleX(d, -2 * s))),
                    r > 2 * s
                      ? ((u = this.mul(f, c)),
                        (f = this.scaleX(u, -2 * s)),
                        (r = f.length - 1))
                      : (_ = !0);
                return h;
              }
              oneRoot(t, e) {
                let i = D(t - 1) + 1,
                  n = this.F.one,
                  o = e;
                if (e >= t)
                  throw new Error("Given 'i' should be lower than 'n'");
                if (1 << i !== t)
                  throw new Error(
                    `Internal errlr: ${t} should equal ${1 << i}`
                  );
                for (; o > 0; )
                  !0 & o && (n = this.F.mul(n, this.w[i])), (o >>= 1), i--;
                return n;
              }
              computeVanishingPolinomial(t, e) {
                const i = 1 << t;
                return this.F.sub(this.F.pow(e, i), this.F.one);
              }
              evaluateLagrangePolynomials(t, e) {
                const i = 1 << t,
                  n = this.F.pow(e, i),
                  o = new Array(i).fill(this.F.zero);
                this._setRoots(t);
                const a = this.w[t];
                if (this.F.eq(n, this.F.one))
                  for (let n = 0; n < i; n++)
                    if (this.F.eq(this.roots[t][0], e))
                      return (o[n] = this.F.one), o;
                const s = this.F.sub(n, this.F.one);
                let r = this.F.mul(s, this.F.inv(this.F.e(i)));
                for (let n = 0; n < i; n++)
                  (o[n] = this.F.mul(
                    r,
                    this.F.inv(this.F.sub(e, this.roots[t][n]))
                  )),
                    (r = this.F.mul(r, a));
                return o;
              }
              log2(t) {
                return D(t);
              }
            }),
            (e.Scalar = Wt),
            (e.ZqField = dt),
            (e.buildBls12381 = Gt),
            (e.buildBn128 = Ut),
            (e.getCurveFromName = async function (t, e, i) {
              let n;
              const o = t
                .toUpperCase()
                .match(/[A-Za-z0-9]+/g)
                .join("");
              if (["BN128", "BN254", "ALTBN128"].indexOf(o) >= 0)
                n = await Ut(e, i);
              else {
                if (!(["BLS12381"].indexOf(o) >= 0))
                  throw new Error(`Curve not supported: ${t}`);
                n = await Gt(e, i);
              }
              return n;
            }),
            (e.getCurveFromQ = async function (t, e, i) {
              let n;
              if (P(t, Zt)) n = await Ut(e, i);
              else {
                if (!P(t, $t))
                  throw new Error(`Curve not supported: ${j(t, 16)}`);
                n = await Gt(e, i);
              }
              return n;
            }),
            (e.getCurveFromR = async function (t, e, i) {
              let n;
              if (P(t, kt)) n = await Ut(e, i);
              else {
                if (!P(t, jt)) throw new Error(`Curve not supported: ${j(t)}`);
                n = await Gt(e, i);
              }
              return n;
            }),
            (e.utils = Dt);
        },
        190: (t, e, i) => {
          "use strict";
          var n = i(982),
            o = i(189),
            a = i(857),
            s = (i(667), i(14));
          const r = [0, 1, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4];
          function l(t, e) {
            return e && 10 != e
              ? 16 == e
                ? "0x" == t.slice(0, 2)
                  ? BigInt(t)
                  : BigInt("0x" + t)
                : void 0
              : BigInt(t);
          }
          const c = l;
          function d(t) {
            const e = t.toString(16);
            return 4 * (e.length - 1) + r[parseInt(e[0], 16)];
          }
          function u(t) {
            return BigInt(t) < BigInt(0);
          }
          function h(t) {
            return !t;
          }
          function f(t, e) {
            return BigInt(t) << BigInt(e);
          }
          function _(t, e) {
            return BigInt(t) >> BigInt(e);
          }
          const p = f,
            g = _;
          function m(t) {
            return (BigInt(t) & BigInt(1)) == BigInt(1);
          }
          function L(t) {
            let e = BigInt(t);
            const i = [];
            for (; e; ) {
              if (e & BigInt(1)) {
                const t = 2 - Number(e % BigInt(4));
                i.push(t), (e -= BigInt(t));
              } else i.push(0);
              e >>= BigInt(1);
            }
            return i;
          }
          function b(t) {
            let e = BigInt(t);
            const i = [];
            for (; e; )
              e & BigInt(1) ? i.push(1) : i.push(0), (e >>= BigInt(1));
            return i;
          }
          function F(t) {
            if (t > BigInt(Number.MAX_SAFE_INTEGER))
              throw new Error("Number too big");
            return Number(t);
          }
          function y(t, e) {
            return BigInt(t) + BigInt(e);
          }
          function x(t, e) {
            return BigInt(t) - BigInt(e);
          }
          function w(t) {
            return -BigInt(t);
          }
          function B(t, e) {
            return BigInt(t) * BigInt(e);
          }
          function v(t, e) {
            return BigInt(t) ** BigInt(e);
          }
          function E(t, e) {
            return BigInt(t) / BigInt(e);
          }
          function C(t, e) {
            return BigInt(t) % BigInt(e);
          }
          function A(t, e) {
            return BigInt(t) == BigInt(e);
          }
          function q(t, e) {
            return BigInt(t) > BigInt(e);
          }
          function O(t, e) {
            return BigInt(t) >= BigInt(e);
          }
          function I(t, e) {
            return BigInt(t) & BigInt(e);
          }
          function S(t, e, i, n) {
            const o = "0000000" + i.toString(16),
              a = new Uint32Array(t.buffer, t.byteOffset + e, n / 4),
              s = 1 + ((4 * (o.length - 7) - 1) >> 5);
            for (let t = 0; t < s; t++)
              a[t] = parseInt(
                o.substring(o.length - 8 * t - 8, o.length - 8 * t),
                16
              );
            for (let t = s; t < a.length; t++) a[t] = 0;
            for (let e = 4 * a.length; e < n; e++)
              t[e] = F(I(_(i, 8 * e), 255));
          }
          function P(t, e, i, n) {
            const o = "0000000" + i.toString(16),
              a = new DataView(t.buffer, t.byteOffset + e, n),
              s = 1 + ((4 * (o.length - 7) - 1) >> 5);
            for (let t = 0; t < s; t++)
              a.setUint32(
                n - 4 * t - 4,
                parseInt(
                  o.substring(o.length - 8 * t - 8, o.length - 8 * t),
                  16
                ),
                !1
              );
            for (let t = 0; t < n / 4 - s; t++) a[t] = 0;
          }
          function z(t, e, i) {
            (i = i || t.byteLength), (e = e || 0);
            const n = new Uint32Array(t.buffer, t.byteOffset + e, i / 4),
              o = new Array(i / 4);
            return (
              n.forEach(
                (t, e) =>
                  (o[o.length - e - 1] = t.toString(16).padStart(8, "0"))
              ),
              l(o.join(""), 16)
            );
          }
          function M(t, e, i) {
            (i = i || t.byteLength), (e = e || 0);
            const n = new DataView(t.buffer, t.byteOffset + e, i),
              o = new Array(i / 4);
            for (let t = 0; t < i / 4; t++)
              o[t] = n
                .getUint32(4 * t, !1)
                .toString(16)
                .padStart(8, "0");
            return l(o.join(""), 16);
          }
          function R(t, e) {
            return t.toString(e);
          }
          function T(t) {
            const e = new Uint8Array(Math.floor((d(t) - 1) / 8) + 1);
            return S(e, 0, t, e.byteLength), e;
          }
          const N = c(0),
            U = c(1);
          var G = Object.freeze({
            __proto__: null,
            abs: function (t) {
              return BigInt(t) >= 0 ? BigInt(t) : -BigInt(t);
            },
            add: y,
            band: I,
            bitLength: d,
            bits: b,
            bor: function (t, e) {
              return BigInt(t) | BigInt(e);
            },
            bxor: function (t, e) {
              return BigInt(t) ^ BigInt(e);
            },
            div: E,
            e: c,
            eq: A,
            exp: function (t, e) {
              return BigInt(t) ** BigInt(e);
            },
            fromArray: function (t, e) {
              let i = BigInt(0);
              e = BigInt(e);
              for (let n = 0; n < t.length; n++) i = i * e + BigInt(t[n]);
              return i;
            },
            fromRprBE: M,
            fromRprLE: z,
            fromString: l,
            geq: O,
            gt: q,
            isNegative: u,
            isOdd: m,
            isZero: h,
            land: function (t, e) {
              return BigInt(t) && BigInt(e);
            },
            leq: function (t, e) {
              return BigInt(t) <= BigInt(e);
            },
            lnot: function (t) {
              return !BigInt(t);
            },
            lor: function (t, e) {
              return BigInt(t) || BigInt(e);
            },
            lt: function (t, e) {
              return BigInt(t) < BigInt(e);
            },
            mod: C,
            mul: B,
            naf: L,
            neg: w,
            neq: function (t, e) {
              return BigInt(t) != BigInt(e);
            },
            one: U,
            pow: v,
            shiftLeft: f,
            shiftRight: _,
            shl: p,
            shr: g,
            square: function (t) {
              return BigInt(t) * BigInt(t);
            },
            sub: x,
            toArray: function (t, e) {
              const i = [];
              let n = BigInt(t);
              for (e = BigInt(e); n; ) i.unshift(Number(n % e)), (n /= e);
              return i;
            },
            toLEBuff: T,
            toNumber: F,
            toRprBE: P,
            toRprLE: S,
            toString: R,
            zero: N,
          });
          function j(t) {
            return (
              (4294901760 & t ? ((t &= 4294901760), 16) : 0) |
              (4278255360 & t ? ((t &= 4278255360), 8) : 0) |
              (4042322160 & t ? ((t &= 4042322160), 4) : 0) |
              (3435973836 & t ? ((t &= 3435973836), 2) : 0) |
              !!(2863311530 & t)
            );
          }
          function k(t, e, i, n, o) {
            const a = 1 << i;
            if (1 == a) return [e[n]];
            if (2 == a)
              return [t.F.add(e[n], e[n + o]), t.F.sub(e[n], e[n + o])];
            const s = a >> 1,
              r = k(t, e, i - 1, n, 2 * o),
              l = k(t, e, i - 1, n + o, 2 * o),
              c = new Array(a);
            for (let e = 0; e < s; e++)
              (c[e] = t.F.add(r[e], t.F.mul(t.roots[i][e], l[e]))),
                (c[e + s] = t.F.sub(r[e], t.F.mul(t.roots[i][e], l[e])));
            return c;
          }
          function $(t, e, i) {
            const n = 1 << i;
            if (1 == n) return [e[0]];
            const o = n >> 1,
              a = $(t, e.slice(0, o), i - 1),
              s = $(t, e.slice(o), i - 1),
              r = new Array(n);
            for (let e = 0; e < o; e++)
              (r[e] = t.F.add(a[e], t.F.mul(t.roots[i][e], s[e]))),
                (r[e + o] = t.F.sub(a[e], t.F.mul(t.roots[i][e], s[e])));
            return r;
          }
          const Z = [];
          for (let t = 0; t < 256; t++) Z[t] = W(t, 8);
          function W(t, e) {
            let i = 0,
              n = t;
            for (let t = 0; t < e; t++) (i <<= 1), (i |= 1 & n), (n >>= 1);
            return i;
          }
          function D(t, e) {
            return (
              (Z[t >>> 24] |
                (Z[(t >>> 16) & 255] << 8) |
                (Z[(t >>> 8) & 255] << 16) |
                (Z[255 & t] << 24)) >>>
              (32 - e)
            );
          }
          function J(t, e) {
            for (let i = 0; i < t.length; i++) {
              const n = D(i, e);
              if (n > i) {
                const e = t[i];
                (t[i] = t[n]), (t[n] = e);
              }
            }
          }
          function V(t, e, i) {
            let n;
            if (h(i)) return t.zero;
            const o = L(i);
            if (1 == o[o.length - 1]) n = e;
            else {
              if (-1 != o[o.length - 1]) throw new Error("invlaud NAF");
              n = t.neg(e);
            }
            for (let i = o.length - 2; i >= 0; i--)
              (n = t.double(n)),
                1 == o[i] ? (n = t.add(n, e)) : -1 == o[i] && (n = t.sub(n, e));
            return n;
          }
          function Q(t, e, i) {
            if (h(i)) return t.one;
            const n = b(i);
            if (0 == n.length) return t.one;
            let o = e;
            for (let i = n.length - 2; i >= 0; i--)
              (o = t.square(o)), n[i] && (o = t.mul(o, e));
            return o;
          }
          function X(t) {
            if (t.m % 2 == 1)
              if (A(C(t.p, 4), 1))
                if (A(C(t.p, 8), 1))
                  if (A(C(t.p, 16), 1))
                    !(function (t) {
                      for (
                        t.sqrt_q = v(t.p, t.m),
                          t.sqrt_s = 0,
                          t.sqrt_t = x(t.sqrt_q, 1);
                        !m(t.sqrt_t);

                      )
                        (t.sqrt_s = t.sqrt_s + 1), (t.sqrt_t = E(t.sqrt_t, 2));
                      let e = t.one;
                      for (; t.eq(e, t.one); ) {
                        const i = t.random();
                        (t.sqrt_z = t.pow(i, t.sqrt_t)),
                          (e = t.pow(t.sqrt_z, 2 ** (t.sqrt_s - 1)));
                      }
                      (t.sqrt_tm1d2 = E(x(t.sqrt_t, 1), 2)),
                        (t.sqrt = function (t) {
                          const e = this;
                          if (e.isZero(t)) return e.zero;
                          let i = e.pow(t, e.sqrt_tm1d2);
                          const n = e.pow(
                            e.mul(e.square(i), t),
                            2 ** (e.sqrt_s - 1)
                          );
                          if (e.eq(n, e.negone)) return null;
                          let o = e.sqrt_s,
                            a = e.mul(t, i),
                            s = e.mul(a, i),
                            r = e.sqrt_z;
                          for (; !e.eq(s, e.one); ) {
                            let t = e.square(s),
                              n = 1;
                            for (; !e.eq(t, e.one); ) (t = e.square(t)), n++;
                            i = r;
                            for (let t = 0; t < o - n - 1; t++) i = e.square(i);
                            (r = e.square(i)),
                              (s = e.mul(s, r)),
                              (a = e.mul(a, i)),
                              (o = n);
                          }
                          return e.geq(a, e.zero) ? a : e.neg(a);
                        });
                    })(t);
                  else {
                    if (!A(C(t.p, 16), 9)) throw new Error("Field withot sqrt");
                    !(function (t) {
                      t.sqrt = function () {
                        throw new Error("Sqrt alg 4 not implemented");
                      };
                    })(t);
                  }
                else {
                  if (!A(C(t.p, 8), 5)) throw new Error("Field withot sqrt");
                  !(function (t) {
                    t.sqrt = function () {
                      throw new Error("Sqrt alg 3 not implemented");
                    };
                  })(t);
                }
              else
                A(C(t.p, 4), 3) &&
                  (function (t) {
                    (t.sqrt_q = v(t.p, t.m)),
                      (t.sqrt_e1 = E(x(t.sqrt_q, 3), 4)),
                      (t.sqrt = function (e) {
                        if (this.isZero(e)) return this.zero;
                        const i = this.pow(e, this.sqrt_e1),
                          n = this.mul(this.square(i), e);
                        if (this.eq(n, this.negone)) return null;
                        const o = this.mul(i, e);
                        return t.geq(o, t.zero) ? o : t.neg(o);
                      });
                  })(t);
            else {
              const e = C(v(t.p, t.m / 2), 4);
              1 == e
                ? (function (t) {
                    t.sqrt = function () {
                      throw new Error("Sqrt alg 10 not implemented");
                    };
                  })(t)
                : 3 == e
                  ? (function (t) {
                      (t.sqrt_q = v(t.p, t.m / 2)),
                        (t.sqrt_e34 = E(x(t.sqrt_q, 3), 4)),
                        (t.sqrt_e12 = E(x(t.sqrt_q, 1), 2)),
                        (t.frobenius = function (e, i) {
                          return e % 2 == 1 ? t.conjugate(i) : i;
                        }),
                        (t.sqrt = function (t) {
                          const e = this,
                            i = e.pow(t, e.sqrt_e34),
                            n = e.mul(e.square(i), t),
                            o = e.mul(e.frobenius(1, n), n);
                          if (e.eq(o, e.negone)) return null;
                          const a = e.mul(i, t);
                          let s;
                          if (e.eq(n, e.negone))
                            s = e.mul(a, [e.F.zero, e.F.one]);
                          else {
                            const t = e.pow(e.add(e.one, n), e.sqrt_e12);
                            s = e.mul(t, a);
                          }
                          return e.geq(s, e.zero) ? s : e.neg(s);
                        });
                    })(t)
                  : (function (t) {
                      t.sqrt = function () {
                        throw new Error("Sqrt alg 8 not implemented");
                      };
                    })(t);
            }
          }
          function K(t, e, i, n, o) {
            (t[e] = (t[e] + t[i]) >>> 0),
              (t[o] = (t[o] ^ t[e]) >>> 0),
              (t[o] = ((t[o] << 16) | ((t[o] >>> 16) & 65535)) >>> 0),
              (t[n] = (t[n] + t[o]) >>> 0),
              (t[i] = (t[i] ^ t[n]) >>> 0),
              (t[i] = ((t[i] << 12) | ((t[i] >>> 20) & 4095)) >>> 0),
              (t[e] = (t[e] + t[i]) >>> 0),
              (t[o] = (t[o] ^ t[e]) >>> 0),
              (t[o] = ((t[o] << 8) | ((t[o] >>> 24) & 255)) >>> 0),
              (t[n] = (t[n] + t[o]) >>> 0),
              (t[i] = (t[i] ^ t[n]) >>> 0),
              (t[i] = ((t[i] << 7) | ((t[i] >>> 25) & 127)) >>> 0);
          }
          class Y {
            constructor(t) {
              (t = t || [0, 0, 0, 0, 0, 0, 0, 0]),
                (this.state = [
                  1634760805,
                  857760878,
                  2036477234,
                  1797285236,
                  t[0],
                  t[1],
                  t[2],
                  t[3],
                  t[4],
                  t[5],
                  t[6],
                  t[7],
                  0,
                  0,
                  0,
                  0,
                ]),
                (this.idx = 16),
                (this.buff = new Array(16));
            }
            nextU32() {
              return 16 == this.idx && this.update(), this.buff[this.idx++];
            }
            nextU64() {
              return y(B(this.nextU32(), 4294967296), this.nextU32());
            }
            nextBool() {
              return !(1 & ~this.nextU32());
            }
            update() {
              for (let t = 0; t < 16; t++) this.buff[t] = this.state[t];
              for (let e = 0; e < 10; e++)
                K((t = this.buff), 0, 4, 8, 12),
                  K(t, 1, 5, 9, 13),
                  K(t, 2, 6, 10, 14),
                  K(t, 3, 7, 11, 15),
                  K(t, 0, 5, 10, 15),
                  K(t, 1, 6, 11, 12),
                  K(t, 2, 7, 8, 13),
                  K(t, 3, 4, 9, 14);
              var t;
              for (let t = 0; t < 16; t++)
                this.buff[t] = (this.buff[t] + this.state[t]) >>> 0;
              (this.idx = 0),
                (this.state[12] = (this.state[12] + 1) >>> 0),
                0 == this.state[12] &&
                  ((this.state[13] = (this.state[13] + 1) >>> 0),
                  0 == this.state[13] &&
                    ((this.state[14] = (this.state[14] + 1) >>> 0),
                    0 == this.state[14] &&
                      (this.state[15] = (this.state[15] + 1) >>> 0)));
            }
          }
          function H(t) {
            let e = new Uint8Array(t);
            if (process.browser)
              if (void 0 !== globalThis.crypto)
                globalThis.crypto.getRandomValues(e);
              else
                for (let i = 0; i < t; i++)
                  e[i] = (4294967296 * Math.random()) >>> 0;
            else n.randomFillSync(e);
            return e;
          }
          let tt = null;
          function et() {
            return (
              tt ||
              ((tt = new Y(
                (function () {
                  const t = H(32),
                    e = new Uint32Array(t.buffer),
                    i = [];
                  for (let t = 0; t < 8; t++) i.push(e[t]);
                  return i;
                })()
              )),
              tt)
            );
          }
          class it {
            constructor(t, e, i) {
              (this.F = e), (this.G = t), (this.opMulGF = i);
              let n = e.sqrt_t || e.t,
                o = e.sqrt_s || e.s,
                a = e.one;
              for (; e.eq(e.pow(a, e.half), e.one); ) a = e.add(a, e.one);
              (this.w = new Array(o + 1)),
                (this.wi = new Array(o + 1)),
                (this.w[o] = this.F.pow(a, n)),
                (this.wi[o] = this.F.inv(this.w[o]));
              let s = o - 1;
              for (; s >= 0; )
                (this.w[s] = this.F.square(this.w[s + 1])),
                  (this.wi[s] = this.F.square(this.wi[s + 1])),
                  s--;
              (this.roots = []), this._setRoots(Math.min(o, 15));
            }
            _setRoots(t) {
              for (let e = t; e >= 0 && !this.roots[e]; e--) {
                let t = this.F.one;
                const i = 1 << e,
                  n = new Array(i);
                for (let o = 0; o < i; o++)
                  (n[o] = t), (t = this.F.mul(t, this.w[e]));
                this.roots[e] = n;
              }
            }
            fft(t) {
              if (t.length <= 1) return t;
              const e = nt(t.length - 1) + 1;
              this._setRoots(e);
              const i = 1 << e;
              if (t.length != i) throw new Error("Size must be multiple of 2");
              return ot(this, t, e, 0, 1);
            }
            ifft(t) {
              if (t.length <= 1) return t;
              const e = nt(t.length - 1) + 1;
              this._setRoots(e);
              const i = 1 << e;
              if (t.length != i) throw new Error("Size must be multiple of 2");
              const n = ot(this, t, e, 0, 1),
                o = this.F.inv(this.F.mulScalar(this.F.one, i)),
                a = new Array(i);
              for (let t = 0; t < i; t++)
                a[t] = this.opMulGF(n[(i - t) % i], o);
              return a;
            }
          }
          function nt(t) {
            return (
              (4294901760 & t ? ((t &= 4294901760), 16) : 0) |
              (4278255360 & t ? ((t &= 4278255360), 8) : 0) |
              (4042322160 & t ? ((t &= 4042322160), 4) : 0) |
              (3435973836 & t ? ((t &= 3435973836), 2) : 0) |
              !!(2863311530 & t)
            );
          }
          function ot(t, e, i, n, o) {
            const a = 1 << i;
            if (1 == a) return [e[n]];
            if (2 == a)
              return [t.G.add(e[n], e[n + o]), t.G.sub(e[n], e[n + o])];
            const s = a >> 1,
              r = ot(t, e, i - 1, n, 2 * o),
              l = ot(t, e, i - 1, n + o, 2 * o),
              c = new Array(a);
            for (let e = 0; e < s; e++)
              (c[e] = t.G.add(r[e], t.opMulGF(l[e], t.roots[i][e]))),
                (c[e + s] = t.G.sub(r[e], t.opMulGF(l[e], t.roots[i][e])));
            return c;
          }
          class at {
            constructor(t) {
              (this.type = "F1"),
                (this.one = BigInt(1)),
                (this.zero = BigInt(0)),
                (this.p = BigInt(t)),
                (this.m = 1),
                (this.negone = this.p - this.one),
                (this.two = BigInt(2)),
                (this.half = this.p >> this.one),
                (this.bitLength = d(this.p)),
                (this.mask = (this.one << BigInt(this.bitLength)) - this.one),
                (this.n64 = Math.floor((this.bitLength - 1) / 64) + 1),
                (this.n32 = 2 * this.n64),
                (this.n8 = 8 * this.n64),
                (this.R = this.e(this.one << BigInt(64 * this.n64))),
                (this.Ri = this.inv(this.R));
              const e = this.negone >> this.one;
              this.nqr = this.two;
              let i = this.pow(this.nqr, e);
              for (; !this.eq(i, this.negone); )
                (this.nqr = this.nqr + this.one), (i = this.pow(this.nqr, e));
              for (
                this.s = 0, this.t = this.negone;
                (this.t & this.one) == this.zero;

              )
                (this.s = this.s + 1), (this.t = this.t >> this.one);
              (this.nqr_to_t = this.pow(this.nqr, this.t)),
                X(this),
                (this.FFT = new it(this, this, this.mul.bind(this))),
                (this.fft = this.FFT.fft.bind(this.FFT)),
                (this.ifft = this.FFT.ifft.bind(this.FFT)),
                (this.w = this.FFT.w),
                (this.wi = this.FFT.wi),
                (this.shift = this.square(this.nqr)),
                (this.k = this.exp(this.nqr, 2 ** this.s));
            }
            e(t, e) {
              let i;
              if (
                (e ? 16 == e && (i = BigInt("0x" + t)) : (i = BigInt(t)), i < 0)
              ) {
                let t = -i;
                return t >= this.p && (t %= this.p), this.p - t;
              }
              return i >= this.p ? i % this.p : i;
            }
            add(t, e) {
              const i = t + e;
              return i >= this.p ? i - this.p : i;
            }
            sub(t, e) {
              return t >= e ? t - e : this.p - e + t;
            }
            neg(t) {
              return t ? this.p - t : t;
            }
            mul(t, e) {
              return (t * e) % this.p;
            }
            mulScalar(t, e) {
              return (t * this.e(e)) % this.p;
            }
            square(t) {
              return (t * t) % this.p;
            }
            eq(t, e) {
              return t == e;
            }
            neq(t, e) {
              return t != e;
            }
            lt(t, e) {
              return (
                (t > this.half ? t - this.p : t) <
                (e > this.half ? e - this.p : e)
              );
            }
            gt(t, e) {
              return (
                (t > this.half ? t - this.p : t) >
                (e > this.half ? e - this.p : e)
              );
            }
            leq(t, e) {
              return (
                (t > this.half ? t - this.p : t) <=
                (e > this.half ? e - this.p : e)
              );
            }
            geq(t, e) {
              return (
                (t > this.half ? t - this.p : t) >=
                (e > this.half ? e - this.p : e)
              );
            }
            div(t, e) {
              return this.mul(t, this.inv(e));
            }
            idiv(t, e) {
              if (!e) throw new Error("Division by zero");
              return t / e;
            }
            inv(t) {
              if (!t) throw new Error("Division by zero");
              let e = this.zero,
                i = this.p,
                n = this.one,
                o = t % this.p;
              for (; o; ) {
                let t = i / o;
                ([e, n] = [n, e - t * n]), ([i, o] = [o, i - t * o]);
              }
              return e < this.zero && (e += this.p), e;
            }
            mod(t, e) {
              return t % e;
            }
            pow(t, e) {
              return Q(this, t, e);
            }
            exp(t, e) {
              return Q(this, t, e);
            }
            band(t, e) {
              const i = t & e & this.mask;
              return i >= this.p ? i - this.p : i;
            }
            bor(t, e) {
              const i = (t | e) & this.mask;
              return i >= this.p ? i - this.p : i;
            }
            bxor(t, e) {
              const i = (t ^ e) & this.mask;
              return i >= this.p ? i - this.p : i;
            }
            bnot(t) {
              const e = t ^ this.mask;
              return e >= this.p ? e - this.p : e;
            }
            shl(t, e) {
              if (Number(e) < this.bitLength) {
                const i = (t << e) & this.mask;
                return i >= this.p ? i - this.p : i;
              }
              {
                const i = this.p - e;
                return Number(i) < this.bitLength ? t >> i : this.zero;
              }
            }
            shr(t, e) {
              if (Number(e) < this.bitLength) return t >> e;
              {
                const i = this.p - e;
                if (Number(i) < this.bitLength) {
                  const e = (t << i) & this.mask;
                  return e >= this.p ? e - this.p : e;
                }
                return 0;
              }
            }
            land(t, e) {
              return t && e ? this.one : this.zero;
            }
            lor(t, e) {
              return t || e ? this.one : this.zero;
            }
            lnot(t) {
              return t ? this.zero : this.one;
            }
            sqrt_old(t) {
              if (t == this.zero) return this.zero;
              if (this.pow(t, this.negone >> this.one) != this.one) return null;
              let e = this.s,
                i = this.nqr_to_t,
                n = this.pow(t, this.t),
                o = this.pow(t, this.add(this.t, this.one) >> this.one);
              for (; n != this.one; ) {
                let t = this.square(n),
                  a = 1;
                for (; t != this.one; ) a++, (t = this.square(t));
                let s = i;
                for (let t = 0; t < e - a - 1; t++) s = this.square(s);
                (e = a),
                  (i = this.square(s)),
                  (n = this.mul(n, i)),
                  (o = this.mul(o, s));
              }
              return o > this.p >> this.one && (o = this.neg(o)), o;
            }
            normalize(t, e) {
              if ((t = BigInt(t, e)) < 0) {
                let e = -t;
                return e >= this.p && (e %= this.p), this.p - e;
              }
              return t >= this.p ? t % this.p : t;
            }
            random() {
              const t = (2 * this.bitLength) / 8;
              let e = this.zero;
              for (let i = 0; i < t; i++)
                e = (e << BigInt(8)) + BigInt(H(1)[0]);
              return e % this.p;
            }
            toString(t, e) {
              let i;
              return (
                (e = e || 10),
                (i =
                  t > this.half && 10 == e
                    ? "-" + (this.p - t).toString(e)
                    : t.toString(e)),
                i
              );
            }
            isZero(t) {
              return t == this.zero;
            }
            fromRng(t) {
              let e;
              do {
                e = this.zero;
                for (let i = 0; i < this.n64; i++)
                  e += t.nextU64() << BigInt(64 * i);
                e &= this.mask;
              } while (e >= this.p);
              return (e = (e * this.Ri) % this.p), e;
            }
            fft(t) {
              return this.FFT.fft(t);
            }
            ifft(t) {
              return this.FFT.ifft(t);
            }
            toRprLE(t, e, i) {
              S(t, e, i, 8 * this.n64);
            }
            toRprBE(t, e, i) {
              P(t, e, i, 8 * this.n64);
            }
            toRprBEM(t, e, i) {
              return this.toRprBE(t, e, this.mul(this.R, i));
            }
            toRprLEM(t, e, i) {
              return this.toRprLE(t, e, this.mul(this.R, i));
            }
            fromRprLE(t, e) {
              return z(t, e, this.n8);
            }
            fromRprBE(t, e) {
              return M(t, e, this.n8);
            }
            fromRprLEM(t, e) {
              return this.mul(this.fromRprLE(t, e), this.Ri);
            }
            fromRprBEM(t, e) {
              return this.mul(this.fromRprBE(t, e), this.Ri);
            }
            toObject(t) {
              return t;
            }
          }
          function st(t, e) {
            if (Array.isArray(e)) {
              for (let i = e.length - 1; i >= 0; i--)
                if (!t.F.isZero(e[i])) return st(t.F, e[i]);
              return 0;
            }
            return q(e, t.neg(e));
          }
          function rt(t, e) {
            let i = t;
            void 0 === e &&
              0 == (e = Math.floor((d(t) - 1) / 8) + 1) &&
              (e = 1);
            const n = new Uint8Array(e),
              o = new DataView(n.buffer);
            let a = 0;
            for (; a < e; )
              a + 4 <= e
                ? (o.setUint32(a, Number(i & BigInt(4294967295)), !0),
                  (a += 4),
                  (i >>= BigInt(32)))
                : a + 2 <= e
                  ? (o.setUint16(a, Number(i & BigInt(65535)), !0),
                    (a += 2),
                    (i >>= BigInt(16)))
                  : (o.setUint8(a, Number(i & BigInt(255)), !0),
                    (a += 1),
                    (i >>= BigInt(8)));
            if (i) throw new Error("Number does not fit in this length");
            return n;
          }
          const lt = [];
          for (let t = 0; t < 256; t++) lt[t] = ct(t, 8);
          function ct(t, e) {
            let i = 0,
              n = t;
            for (let t = 0; t < e; t++) (i <<= 1), (i |= 1 & n), (n >>= 1);
            return i;
          }
          function dt(t, e) {
            return (
              (lt[t >>> 24] |
                (lt[(t >>> 16) & 255] << 8) |
                (lt[(t >>> 8) & 255] << 16) |
                (lt[255 & t] << 24)) >>>
              (32 - e)
            );
          }
          function ut(t) {
            return (
              (4294901760 & t ? ((t &= 4294901760), 16) : 0) |
              (4278255360 & t ? ((t &= 4278255360), 8) : 0) |
              (4042322160 & t ? ((t &= 4042322160), 4) : 0) |
              (3435973836 & t ? ((t &= 3435973836), 2) : 0) |
              !!(2863311530 & t)
            );
          }
          function ht(t, e) {
            const i = t.byteLength / e,
              n = ut(i);
            if (i != 1 << n) throw new Error("Invalid number of pointers");
            for (let o = 0; o < i; o++) {
              const i = dt(o, n);
              if (o > i) {
                const n = t.slice(o * e, (o + 1) * e);
                t.set(t.slice(i * e, (i + 1) * e), o * e), t.set(n, i * e);
              }
            }
          }
          function ft(t, e) {
            const i = new Uint8Array(e * t.length);
            for (let n = 0; n < t.length; n++) i.set(t[n], n * e);
            return i;
          }
          function _t(t, e) {
            const i = t.byteLength / e,
              n = new Array(i);
            for (let o = 0; o < i; o++) n[o] = t.slice(o * e, o * e + e);
            return n;
          }
          var pt = Object.freeze({
            __proto__: null,
            array2buffer: ft,
            beBuff2int: function (t) {
              let e = BigInt(0),
                i = t.length,
                n = 0;
              const o = new DataView(t.buffer, t.byteOffset, t.byteLength);
              for (; i > 0; )
                i >= 4
                  ? ((i -= 4),
                    (e += BigInt(o.getUint32(i)) << BigInt(8 * n)),
                    (n += 4))
                  : i >= 2
                    ? ((i -= 2),
                      (e += BigInt(o.getUint16(i)) << BigInt(8 * n)),
                      (n += 2))
                    : ((i -= 1),
                      (e += BigInt(o.getUint8(i)) << BigInt(8 * n)),
                      (n += 1));
              return e;
            },
            beInt2Buff: function (t, e) {
              let i = t;
              const n = new Uint8Array(e),
                o = new DataView(n.buffer);
              let a = e;
              for (; a > 0; )
                a - 4 >= 0
                  ? ((a -= 4),
                    o.setUint32(a, Number(i & BigInt(4294967295))),
                    (i >>= BigInt(32)))
                  : a - 2 >= 0
                    ? ((a -= 2),
                      o.setUint16(a, Number(i & BigInt(65535))),
                      (i >>= BigInt(16)))
                    : ((a -= 1),
                      o.setUint8(a, Number(i & BigInt(255))),
                      (i >>= BigInt(8)));
              if (i) throw new Error("Number does not fit in this length");
              return n;
            },
            bitReverse: dt,
            buffReverseBits: ht,
            buffer2array: _t,
            leBuff2int: function (t) {
              let e = BigInt(0),
                i = 0;
              const n = new DataView(t.buffer, t.byteOffset, t.byteLength);
              for (; i < t.length; )
                i + 4 <= t.length
                  ? ((e += BigInt(n.getUint32(i, !0)) << BigInt(8 * i)),
                    (i += 4))
                  : i + 2 <= t.length
                    ? ((e += BigInt(n.getUint16(i, !0)) << BigInt(8 * i)),
                      (i += 2))
                    : ((e += BigInt(n.getUint8(i, !0)) << BigInt(8 * i)),
                      (i += 1));
              return e;
            },
            leInt2Buff: rt,
            log2: ut,
            stringifyBigInts: function t(e) {
              if ("bigint" == typeof e || void 0 !== e.eq)
                return e.toString(10);
              if (e instanceof Uint8Array) return z(e, 0);
              if (Array.isArray(e)) return e.map(t);
              if ("object" == typeof e) {
                const i = {};
                return (
                  Object.keys(e).forEach((n) => {
                    i[n] = t(e[n]);
                  }),
                  i
                );
              }
              return e;
            },
            stringifyFElements: function t(e, i) {
              if ("bigint" == typeof i || void 0 !== i.eq)
                return i.toString(10);
              if (i instanceof Uint8Array) return e.toString(e.e(i));
              if (Array.isArray(i)) return i.map(t.bind(this, e));
              if ("object" == typeof i) {
                const n = {};
                return (
                  Object.keys(i).forEach((o) => {
                    n[o] = t(e, i[o]);
                  }),
                  n
                );
              }
              return i;
            },
            unstringifyBigInts: function t(e) {
              if ("string" == typeof e && /^[0-9]+$/.test(e)) return BigInt(e);
              if ("string" == typeof e && /^0x[0-9a-fA-F]+$/.test(e))
                return BigInt(e);
              if (Array.isArray(e)) return e.map(t);
              if ("object" == typeof e) {
                if (null === e) return null;
                const i = {};
                return (
                  Object.keys(e).forEach((n) => {
                    i[n] = t(e[n]);
                  }),
                  i
                );
              }
              return e;
            },
            unstringifyFElements: function t(e, i) {
              if ("string" == typeof i && /^[0-9]+$/.test(i)) return e.e(i);
              if ("string" == typeof i && /^0x[0-9a-fA-F]+$/.test(i))
                return e.e(i);
              if (Array.isArray(i)) return i.map(t.bind(this, e));
              if ("object" == typeof i) {
                if (null === i) return null;
                const n = {};
                return (
                  Object.keys(i).forEach((o) => {
                    n[o] = t(e, i[o]);
                  }),
                  n
                );
              }
              return i;
            },
          });
          const gt = 1 << 30;
          class mt {
            constructor(t) {
              (this.buffers = []), (this.byteLength = t);
              for (let e = 0; e < t; e += gt) {
                const i = Math.min(t - e, gt);
                this.buffers.push(new Uint8Array(i));
              }
            }
            slice(t, e) {
              void 0 === e && (e = this.byteLength), void 0 === t && (t = 0);
              const i = e - t,
                n = Math.floor(t / gt);
              if (n == Math.floor((t + i - 1) / gt) || 0 == i)
                return this.buffers[n].slice(t % gt, (t % gt) + i);
              let o,
                a = n,
                s = t % gt,
                r = i;
              for (; r > 0; ) {
                const t = s + r > gt ? gt - s : r,
                  e = new Uint8Array(
                    this.buffers[a].buffer,
                    this.buffers[a].byteOffset + s,
                    t
                  );
                if (t == i) return e.slice();
                o || (o = i <= gt ? new Uint8Array(i) : new mt(i)),
                  o.set(e, i - r),
                  (r -= t),
                  a++,
                  (s = 0);
              }
              return o;
            }
            set(t, e) {
              void 0 === e && (e = 0);
              const i = t.byteLength;
              if (0 == i) return;
              const n = Math.floor(e / gt);
              if (n == Math.floor((e + i - 1) / gt))
                return t instanceof mt && 1 == t.buffers.length
                  ? this.buffers[n].set(t.buffers[0], e % gt)
                  : this.buffers[n].set(t, e % gt);
              let o = n,
                a = e % gt,
                s = i;
              for (; s > 0; ) {
                const e = a + s > gt ? gt - a : s,
                  n = t.slice(i - s, i - s + e);
                new Uint8Array(
                  this.buffers[o].buffer,
                  this.buffers[o].byteOffset + a,
                  e
                ).set(n),
                  (s -= e),
                  o++,
                  (a = 0);
              }
            }
          }
          function Lt(t, e, i, n) {
            return async function (o) {
              const a = Math.floor(o.byteLength / i);
              if (a * i !== o.byteLength)
                throw new Error("Invalid buffer size");
              const s = Math.floor(a / t.concurrency),
                r = [];
              for (let l = 0; l < t.concurrency; l++) {
                let c;
                if (((c = l < t.concurrency - 1 ? s : a - l * s), 0 == c))
                  continue;
                const d = [
                  {
                    cmd: "ALLOCSET",
                    var: 0,
                    buff: o.slice(l * s * i, l * s * i + c * i),
                  },
                  { cmd: "ALLOC", var: 1, len: n * c },
                  {
                    cmd: "CALL",
                    fnName: e,
                    params: [{ var: 0 }, { val: c }, { var: 1 }],
                  },
                  { cmd: "GET", out: 0, var: 1, len: n * c },
                ];
                r.push(t.queueAction(d));
              }
              const l = await Promise.all(r);
              let c;
              c = o instanceof mt ? new mt(a * n) : new Uint8Array(a * n);
              let d = 0;
              for (let t = 0; t < l.length; t++)
                c.set(l[t][0], d), (d += l[t][0].byteLength);
              return c;
            };
          }
          class bt {
            constructor(t, e, i, n) {
              if (
                ((this.tm = t),
                (this.prefix = e),
                (this.p = n),
                (this.n8 = i),
                (this.type = "F1"),
                (this.m = 1),
                (this.half = _(n, U)),
                (this.bitLength = d(n)),
                (this.mask = x(f(U, this.bitLength), U)),
                (this.pOp1 = t.alloc(i)),
                (this.pOp2 = t.alloc(i)),
                (this.pOp3 = t.alloc(i)),
                this.tm.instance.exports[e + "_zero"](this.pOp1),
                (this.zero = this.tm.getBuff(this.pOp1, this.n8)),
                this.tm.instance.exports[e + "_one"](this.pOp1),
                (this.one = this.tm.getBuff(this.pOp1, this.n8)),
                (this.negone = this.neg(this.one)),
                (this.two = this.add(this.one, this.one)),
                (this.n64 = Math.floor(i / 8)),
                (this.n32 = Math.floor(i / 4)),
                8 * this.n64 != this.n8)
              )
                throw new Error("n8 must be a multiple of 8");
              (this.half = _(this.p, U)), (this.nqr = this.two);
              let o = this.exp(this.nqr, this.half);
              for (; !this.eq(o, this.negone); )
                (this.nqr = this.add(this.nqr, this.one)),
                  (o = this.exp(this.nqr, this.half));
              (this.shift = this.mul(this.nqr, this.nqr)),
                (this.shiftInv = this.inv(this.shift)),
                (this.s = 0);
              let a = x(this.p, U);
              for (; !m(a); ) (this.s = this.s + 1), (a = _(a, U));
              (this.w = []), (this.w[this.s] = this.exp(this.nqr, a));
              for (let t = this.s - 1; t >= 0; t--)
                this.w[t] = this.square(this.w[t + 1]);
              if (!this.eq(this.w[0], this.one))
                throw new Error("Error calculating roots of unity");
              (this.batchToMontgomery = Lt(
                t,
                e + "_batchToMontgomery",
                this.n8,
                this.n8
              )),
                (this.batchFromMontgomery = Lt(
                  t,
                  e + "_batchFromMontgomery",
                  this.n8,
                  this.n8
                ));
            }
            op2(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            op2Bool(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2
                )
              );
            }
            op1(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.instance.exports[this.prefix + t](this.pOp1, this.pOp3),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            op1Bool(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp3
                )
              );
            }
            add(t, e) {
              return this.op2("_add", t, e);
            }
            eq(t, e) {
              return this.op2Bool("_eq", t, e);
            }
            isZero(t) {
              return this.op1Bool("_isZero", t);
            }
            sub(t, e) {
              return this.op2("_sub", t, e);
            }
            neg(t) {
              return this.op1("_neg", t);
            }
            inv(t) {
              return this.op1("_inverse", t);
            }
            toMontgomery(t) {
              return this.op1("_toMontgomery", t);
            }
            fromMontgomery(t) {
              return this.op1("_fromMontgomery", t);
            }
            mul(t, e) {
              return this.op2("_mul", t, e);
            }
            div(t, e) {
              return (
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[this.prefix + "_inverse"](
                  this.pOp2,
                  this.pOp2
                ),
                this.tm.instance.exports[this.prefix + "_mul"](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            square(t) {
              return this.op1("_square", t);
            }
            isSquare(t) {
              return this.op1Bool("_isSquare", t);
            }
            sqrt(t) {
              return this.op1("_sqrt", t);
            }
            exp(t, e) {
              return (
                e instanceof Uint8Array || (e = T(c(e))),
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[this.prefix + "_exp"](
                  this.pOp1,
                  this.pOp2,
                  e.byteLength,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            isNegative(t) {
              return this.op1Bool("_isNegative", t);
            }
            e(t, e) {
              if (t instanceof Uint8Array) return t;
              let i = c(t, e);
              u(i)
                ? ((i = w(i)),
                  q(i, this.p) && (i = C(i, this.p)),
                  (i = x(this.p, i)))
                : q(i, this.p) && (i = C(i, this.p));
              const n = rt(i, this.n8);
              return this.toMontgomery(n);
            }
            toString(t, e) {
              return R(z(this.fromMontgomery(t), 0), e);
            }
            fromRng(t) {
              let e;
              const i = new Uint8Array(this.n8);
              do {
                e = N;
                for (let i = 0; i < this.n64; i++)
                  e = y(e, f(t.nextU64(), 64 * i));
                e = I(e, this.mask);
              } while (O(e, this.p));
              return S(i, 0, e, this.n8), i;
            }
            random() {
              return this.fromRng(et());
            }
            toObject(t) {
              return z(this.fromMontgomery(t), 0);
            }
            fromObject(t) {
              const e = new Uint8Array(this.n8);
              return S(e, 0, t, this.n8), this.toMontgomery(e);
            }
            toRprLE(t, e, i) {
              t.set(this.fromMontgomery(i), e);
            }
            toRprBE(t, e, i) {
              const n = this.fromMontgomery(i);
              for (let t = 0; t < this.n8 / 2; t++) {
                const e = n[t];
                (n[t] = n[this.n8 - 1 - t]), (n[this.n8 - 1 - t] = e);
              }
              t.set(n, e);
            }
            fromRprLE(t, e) {
              e = e || 0;
              const i = t.slice(e, e + this.n8);
              return this.toMontgomery(i);
            }
            async batchInverse(t) {
              let e = !1;
              const i = this.n8,
                n = this.n8;
              Array.isArray(t)
                ? ((t = ft(t, i)), (e = !0))
                : (t = t.slice(0, t.byteLength));
              const o = Math.floor(t.byteLength / i);
              if (o * i !== t.byteLength)
                throw new Error("Invalid buffer size");
              const a = Math.floor(o / this.tm.concurrency),
                s = [];
              for (let e = 0; e < this.tm.concurrency; e++) {
                let r;
                if (((r = e < this.tm.concurrency - 1 ? a : o - e * a), 0 == r))
                  continue;
                const l = [
                  {
                    cmd: "ALLOCSET",
                    var: 0,
                    buff: t.slice(e * a * i, e * a * i + r * i),
                  },
                  { cmd: "ALLOC", var: 1, len: n * r },
                  {
                    cmd: "CALL",
                    fnName: this.prefix + "_batchInverse",
                    params: [
                      { var: 0 },
                      { val: i },
                      { val: r },
                      { var: 1 },
                      { val: n },
                    ],
                  },
                  { cmd: "GET", out: 0, var: 1, len: n * r },
                ];
                s.push(this.tm.queueAction(l));
              }
              const r = await Promise.all(s);
              let l;
              l = t instanceof mt ? new mt(o * n) : new Uint8Array(o * n);
              let c = 0;
              for (let t = 0; t < r.length; t++)
                l.set(r[t][0], c), (c += r[t][0].byteLength);
              return e ? _t(l, n) : l;
            }
          }
          class Ft {
            constructor(t, e, i) {
              (this.tm = t),
                (this.prefix = e),
                (this.F = i),
                (this.type = "F2"),
                (this.m = 2 * i.m),
                (this.n8 = 2 * this.F.n8),
                (this.n32 = 2 * this.F.n32),
                (this.n64 = 2 * this.F.n64),
                (this.pOp1 = t.alloc(2 * i.n8)),
                (this.pOp2 = t.alloc(2 * i.n8)),
                (this.pOp3 = t.alloc(2 * i.n8)),
                this.tm.instance.exports[e + "_zero"](this.pOp1),
                (this.zero = t.getBuff(this.pOp1, this.n8)),
                this.tm.instance.exports[e + "_one"](this.pOp1),
                (this.one = t.getBuff(this.pOp1, this.n8)),
                (this.negone = this.neg(this.one)),
                (this.two = this.add(this.one, this.one));
            }
            op2(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            op2Bool(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2
                )
              );
            }
            op1(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.instance.exports[this.prefix + t](this.pOp1, this.pOp3),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            op1Bool(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp3
                )
              );
            }
            add(t, e) {
              return this.op2("_add", t, e);
            }
            eq(t, e) {
              return this.op2Bool("_eq", t, e);
            }
            isZero(t) {
              return this.op1Bool("_isZero", t);
            }
            sub(t, e) {
              return this.op2("_sub", t, e);
            }
            neg(t) {
              return this.op1("_neg", t);
            }
            inv(t) {
              return this.op1("_inverse", t);
            }
            isNegative(t) {
              return this.op1Bool("_isNegative", t);
            }
            toMontgomery(t) {
              return this.op1("_toMontgomery", t);
            }
            fromMontgomery(t) {
              return this.op1("_fromMontgomery", t);
            }
            mul(t, e) {
              return this.op2("_mul", t, e);
            }
            mul1(t, e) {
              return this.op2("_mul1", t, e);
            }
            div(t, e) {
              return (
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[this.prefix + "_inverse"](
                  this.pOp2,
                  this.pOp2
                ),
                this.tm.instance.exports[this.prefix + "_mul"](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            square(t) {
              return this.op1("_square", t);
            }
            isSquare(t) {
              return this.op1Bool("_isSquare", t);
            }
            sqrt(t) {
              return this.op1("_sqrt", t);
            }
            exp(t, e) {
              return (
                e instanceof Uint8Array || (e = T(c(e))),
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[this.prefix + "_exp"](
                  this.pOp1,
                  this.pOp2,
                  e.byteLength,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            e(t, e) {
              if (t instanceof Uint8Array) return t;
              if (Array.isArray(t) && 2 == t.length) {
                const i = this.F.e(t[0], e),
                  n = this.F.e(t[1], e),
                  o = new Uint8Array(2 * this.F.n8);
                return o.set(i), o.set(n, 2 * this.F.n8), o;
              }
              throw new Error("invalid F2");
            }
            toString(t, e) {
              return `[${this.F.toString(t.slice(0, this.F.n8), e)}, ${this.F.toString(t.slice(this.F.n8), e)}]`;
            }
            fromRng(t) {
              const e = this.F.fromRng(t),
                i = this.F.fromRng(t),
                n = new Uint8Array(2 * this.F.n8);
              return n.set(e), n.set(i, this.F.n8), n;
            }
            random() {
              return this.fromRng(et());
            }
            toObject(t) {
              return [
                this.F.toObject(t.slice(0, this.F.n8)),
                this.F.toObject(t.slice(this.F.n8, 2 * this.F.n8)),
              ];
            }
            fromObject(t) {
              const e = new Uint8Array(2 * this.F.n8),
                i = this.F.fromObject(t[0]),
                n = this.F.fromObject(t[1]);
              return e.set(i), e.set(n, this.F.n8), e;
            }
            c1(t) {
              return t.slice(0, this.F.n8);
            }
            c2(t) {
              return t.slice(this.F.n8);
            }
          }
          class yt {
            constructor(t, e, i) {
              (this.tm = t),
                (this.prefix = e),
                (this.F = i),
                (this.type = "F3"),
                (this.m = 3 * i.m),
                (this.n8 = 3 * this.F.n8),
                (this.n32 = 3 * this.F.n32),
                (this.n64 = 3 * this.F.n64),
                (this.pOp1 = t.alloc(3 * i.n8)),
                (this.pOp2 = t.alloc(3 * i.n8)),
                (this.pOp3 = t.alloc(3 * i.n8)),
                this.tm.instance.exports[e + "_zero"](this.pOp1),
                (this.zero = t.getBuff(this.pOp1, this.n8)),
                this.tm.instance.exports[e + "_one"](this.pOp1),
                (this.one = t.getBuff(this.pOp1, this.n8)),
                (this.negone = this.neg(this.one)),
                (this.two = this.add(this.one, this.one));
            }
            op2(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            op2Bool(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2
                )
              );
            }
            op1(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.instance.exports[this.prefix + t](this.pOp1, this.pOp3),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            op1Bool(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp3
                )
              );
            }
            eq(t, e) {
              return this.op2Bool("_eq", t, e);
            }
            isZero(t) {
              return this.op1Bool("_isZero", t);
            }
            add(t, e) {
              return this.op2("_add", t, e);
            }
            sub(t, e) {
              return this.op2("_sub", t, e);
            }
            neg(t) {
              return this.op1("_neg", t);
            }
            inv(t) {
              return this.op1("_inverse", t);
            }
            isNegative(t) {
              return this.op1Bool("_isNegative", t);
            }
            toMontgomery(t) {
              return this.op1("_toMontgomery", t);
            }
            fromMontgomery(t) {
              return this.op1("_fromMontgomery", t);
            }
            mul(t, e) {
              return this.op2("_mul", t, e);
            }
            div(t, e) {
              return (
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[this.prefix + "_inverse"](
                  this.pOp2,
                  this.pOp2
                ),
                this.tm.instance.exports[this.prefix + "_mul"](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, this.n8)
              );
            }
            square(t) {
              return this.op1("_square", t);
            }
            isSquare(t) {
              return this.op1Bool("_isSquare", t);
            }
            sqrt(t) {
              return this.op1("_sqrt", t);
            }
            exp(t, e) {
              return (
                e instanceof Uint8Array || (e = T(c(e))),
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[this.prefix + "_exp"](
                  this.pOp1,
                  this.pOp2,
                  e.byteLength,
                  this.pOp3
                ),
                this.getBuff(this.pOp3, this.n8)
              );
            }
            e(t, e) {
              if (t instanceof Uint8Array) return t;
              if (Array.isArray(t) && 3 == t.length) {
                const i = this.F.e(t[0], e),
                  n = this.F.e(t[1], e),
                  o = this.F.e(t[2], e),
                  a = new Uint8Array(3 * this.F.n8);
                return (
                  a.set(i), a.set(n, this.F.n8), a.set(o, 2 * this.F.n8), a
                );
              }
              throw new Error("invalid F3");
            }
            toString(t, e) {
              return `[${this.F.toString(t.slice(0, this.F.n8), e)}, ${this.F.toString(t.slice(this.F.n8, 2 * this.F.n8), e)}, ${this.F.toString(t.slice(2 * this.F.n8), e)}]`;
            }
            fromRng(t) {
              const e = this.F.fromRng(t),
                i = this.F.fromRng(t),
                n = this.F.fromRng(t),
                o = new Uint8Array(3 * this.F.n8);
              return o.set(e), o.set(i, this.F.n8), o.set(n, 2 * this.F.n8), o;
            }
            random() {
              return this.fromRng(et());
            }
            toObject(t) {
              return [
                this.F.toObject(t.slice(0, this.F.n8)),
                this.F.toObject(t.slice(this.F.n8, 2 * this.F.n8)),
                this.F.toObject(t.slice(2 * this.F.n8, 3 * this.F.n8)),
              ];
            }
            fromObject(t) {
              const e = new Uint8Array(3 * this.F.n8),
                i = this.F.fromObject(t[0]),
                n = this.F.fromObject(t[1]),
                o = this.F.fromObject(t[2]);
              return e.set(i), e.set(n, this.F.n8), e.set(o, 2 * this.F.n8), e;
            }
            c1(t) {
              return t.slice(0, this.F.n8);
            }
            c2(t) {
              return t.slice(this.F.n8, 2 * this.F.n8);
            }
            c3(t) {
              return t.slice(2 * this.F.n8);
            }
          }
          class xt {
            constructor(t, e, i, n, o, a) {
              (this.tm = t),
                (this.prefix = e),
                (this.F = i),
                (this.pOp1 = t.alloc(3 * i.n8)),
                (this.pOp2 = t.alloc(3 * i.n8)),
                (this.pOp3 = t.alloc(3 * i.n8)),
                this.tm.instance.exports[e + "_zero"](this.pOp1),
                (this.zero = this.tm.getBuff(this.pOp1, 3 * i.n8)),
                this.tm.instance.exports[e + "_zeroAffine"](this.pOp1),
                (this.zeroAffine = this.tm.getBuff(this.pOp1, 2 * i.n8)),
                (this.one = this.tm.getBuff(n, 3 * i.n8)),
                (this.g = this.one),
                (this.oneAffine = this.tm.getBuff(n, 2 * i.n8)),
                (this.gAffine = this.oneAffine),
                (this.b = this.tm.getBuff(o, i.n8)),
                a && (this.cofactor = T(a)),
                (this.negone = this.neg(this.one)),
                (this.two = this.add(this.one, this.one)),
                (this.batchLEMtoC = Lt(t, e + "_batchLEMtoC", 2 * i.n8, i.n8)),
                (this.batchLEMtoU = Lt(
                  t,
                  e + "_batchLEMtoU",
                  2 * i.n8,
                  2 * i.n8
                )),
                (this.batchCtoLEM = Lt(t, e + "_batchCtoLEM", i.n8, 2 * i.n8)),
                (this.batchUtoLEM = Lt(
                  t,
                  e + "_batchUtoLEM",
                  2 * i.n8,
                  2 * i.n8
                )),
                (this.batchToJacobian = Lt(
                  t,
                  e + "_batchToJacobian",
                  2 * i.n8,
                  3 * i.n8
                )),
                (this.batchToAffine = Lt(
                  t,
                  e + "_batchToAffine",
                  3 * i.n8,
                  2 * i.n8
                ));
            }
            op2(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, 3 * this.F.n8)
              );
            }
            op2bool(t, e, i) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.setBuff(this.pOp2, i),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp2,
                  this.pOp3
                )
              );
            }
            op1(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.instance.exports[this.prefix + t](this.pOp1, this.pOp3),
                this.tm.getBuff(this.pOp3, 3 * this.F.n8)
              );
            }
            op1Affine(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                this.tm.instance.exports[this.prefix + t](this.pOp1, this.pOp3),
                this.tm.getBuff(this.pOp3, 2 * this.F.n8)
              );
            }
            op1Bool(t, e) {
              return (
                this.tm.setBuff(this.pOp1, e),
                !!this.tm.instance.exports[this.prefix + t](
                  this.pOp1,
                  this.pOp3
                )
              );
            }
            add(t, e) {
              if (t.byteLength == 3 * this.F.n8) {
                if (e.byteLength == 3 * this.F.n8)
                  return this.op2("_add", t, e);
                if (e.byteLength == 2 * this.F.n8)
                  return this.op2("_addMixed", t, e);
                throw new Error("invalid point size");
              }
              if (t.byteLength == 2 * this.F.n8) {
                if (e.byteLength == 3 * this.F.n8)
                  return this.op2("_addMixed", e, t);
                if (e.byteLength == 2 * this.F.n8)
                  return this.op2("_addAffine", t, e);
                throw new Error("invalid point size");
              }
              throw new Error("invalid point size");
            }
            sub(t, e) {
              if (t.byteLength == 3 * this.F.n8) {
                if (e.byteLength == 3 * this.F.n8)
                  return this.op2("_sub", t, e);
                if (e.byteLength == 2 * this.F.n8)
                  return this.op2("_subMixed", t, e);
                throw new Error("invalid point size");
              }
              if (t.byteLength == 2 * this.F.n8) {
                if (e.byteLength == 3 * this.F.n8)
                  return this.op2("_subMixed", e, t);
                if (e.byteLength == 2 * this.F.n8)
                  return this.op2("_subAffine", t, e);
                throw new Error("invalid point size");
              }
              throw new Error("invalid point size");
            }
            neg(t) {
              if (t.byteLength == 3 * this.F.n8) return this.op1("_neg", t);
              if (t.byteLength == 2 * this.F.n8)
                return this.op1Affine("_negAffine", t);
              throw new Error("invalid point size");
            }
            double(t) {
              if (t.byteLength == 3 * this.F.n8) return this.op1("_double", t);
              if (t.byteLength == 2 * this.F.n8)
                return this.op1("_doubleAffine", t);
              throw new Error("invalid point size");
            }
            isZero(t) {
              if (t.byteLength == 3 * this.F.n8)
                return this.op1Bool("_isZero", t);
              if (t.byteLength == 2 * this.F.n8)
                return this.op1Bool("_isZeroAffine", t);
              throw new Error("invalid point size");
            }
            timesScalar(t, e) {
              let i;
              if (
                (e instanceof Uint8Array || (e = T(c(e))),
                t.byteLength == 3 * this.F.n8)
              )
                i = this.prefix + "_timesScalar";
              else {
                if (t.byteLength != 2 * this.F.n8)
                  throw new Error("invalid point size");
                i = this.prefix + "_timesScalarAffine";
              }
              return (
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[i](
                  this.pOp1,
                  this.pOp2,
                  e.byteLength,
                  this.pOp3
                ),
                this.tm.getBuff(this.pOp3, 3 * this.F.n8)
              );
            }
            timesFr(t, e) {
              let i;
              if (t.byteLength == 3 * this.F.n8) i = this.prefix + "_timesFr";
              else {
                if (t.byteLength != 2 * this.F.n8)
                  throw new Error("invalid point size");
                i = this.prefix + "_timesFrAffine";
              }
              return (
                this.tm.setBuff(this.pOp1, t),
                this.tm.setBuff(this.pOp2, e),
                this.tm.instance.exports[i](this.pOp1, this.pOp2, this.pOp3),
                this.tm.getBuff(this.pOp3, 3 * this.F.n8)
              );
            }
            eq(t, e) {
              if (t.byteLength == 3 * this.F.n8) {
                if (e.byteLength == 3 * this.F.n8)
                  return this.op2bool("_eq", t, e);
                if (e.byteLength == 2 * this.F.n8)
                  return this.op2bool("_eqMixed", t, e);
                throw new Error("invalid point size");
              }
              if (t.byteLength == 2 * this.F.n8) {
                if (e.byteLength == 3 * this.F.n8)
                  return this.op2bool("_eqMixed", e, t);
                if (e.byteLength == 2 * this.F.n8)
                  return this.op2bool("_eqAffine", t, e);
                throw new Error("invalid point size");
              }
              throw new Error("invalid point size");
            }
            toAffine(t) {
              if (t.byteLength == 3 * this.F.n8)
                return this.op1Affine("_toAffine", t);
              if (t.byteLength == 2 * this.F.n8) return t;
              throw new Error("invalid point size");
            }
            toJacobian(t) {
              if (t.byteLength == 3 * this.F.n8) return t;
              if (t.byteLength == 2 * this.F.n8)
                return this.op1("_toJacobian", t);
              throw new Error("invalid point size");
            }
            toRprUncompressed(t, e, i) {
              if (
                (this.tm.setBuff(this.pOp1, i), i.byteLength == 3 * this.F.n8)
              )
                this.tm.instance.exports[this.prefix + "_toAffine"](
                  this.pOp1,
                  this.pOp1
                );
              else if (i.byteLength != 2 * this.F.n8)
                throw new Error("invalid point size");
              this.tm.instance.exports[this.prefix + "_LEMtoU"](
                this.pOp1,
                this.pOp1
              );
              const n = this.tm.getBuff(this.pOp1, 2 * this.F.n8);
              t.set(n, e);
            }
            fromRprUncompressed(t, e) {
              const i = t.slice(e, e + 2 * this.F.n8);
              return (
                this.tm.setBuff(this.pOp1, i),
                this.tm.instance.exports[this.prefix + "_UtoLEM"](
                  this.pOp1,
                  this.pOp1
                ),
                this.tm.getBuff(this.pOp1, 2 * this.F.n8)
              );
            }
            toRprCompressed(t, e, i) {
              if (
                (this.tm.setBuff(this.pOp1, i), i.byteLength == 3 * this.F.n8)
              )
                this.tm.instance.exports[this.prefix + "_toAffine"](
                  this.pOp1,
                  this.pOp1
                );
              else if (i.byteLength != 2 * this.F.n8)
                throw new Error("invalid point size");
              this.tm.instance.exports[this.prefix + "_LEMtoC"](
                this.pOp1,
                this.pOp1
              );
              const n = this.tm.getBuff(this.pOp1, this.F.n8);
              t.set(n, e);
            }
            fromRprCompressed(t, e) {
              const i = t.slice(e, e + this.F.n8);
              return (
                this.tm.setBuff(this.pOp1, i),
                this.tm.instance.exports[this.prefix + "_CtoLEM"](
                  this.pOp1,
                  this.pOp2
                ),
                this.tm.getBuff(this.pOp2, 2 * this.F.n8)
              );
            }
            toUncompressed(t) {
              const e = new Uint8Array(2 * this.F.n8);
              return this.toRprUncompressed(e, 0, t), e;
            }
            toRprLEM(t, e, i) {
              if (i.byteLength != 2 * this.F.n8) {
                if (i.byteLength != 3 * this.F.n8)
                  throw new Error("invalid point size");
                {
                  this.tm.setBuff(this.pOp1, i),
                    this.tm.instance.exports[this.prefix + "_toAffine"](
                      this.pOp1,
                      this.pOp1
                    );
                  const n = this.tm.getBuff(this.pOp1, 2 * this.F.n8);
                  t.set(n, e);
                }
              } else t.set(i, e);
            }
            fromRprLEM(t, e) {
              return (e = e || 0), t.slice(e, e + 2 * this.F.n8);
            }
            toString(t, e) {
              if (t.byteLength == 3 * this.F.n8)
                return `[ ${this.F.toString(t.slice(0, this.F.n8), e)}, ${this.F.toString(t.slice(this.F.n8, 2 * this.F.n8), e)}, ${this.F.toString(t.slice(2 * this.F.n8), e)} ]`;
              if (t.byteLength == 2 * this.F.n8)
                return `[ ${this.F.toString(t.slice(0, this.F.n8), e)}, ${this.F.toString(t.slice(this.F.n8), e)} ]`;
              throw new Error("invalid point size");
            }
            isValid(t) {
              if (this.isZero(t)) return !0;
              const e = this.F,
                i = this.toAffine(t),
                n = i.slice(0, this.F.n8),
                o = i.slice(this.F.n8, 2 * this.F.n8),
                a = e.add(e.mul(e.square(n), n), this.b),
                s = e.square(o);
              return e.eq(a, s);
            }
            fromRng(t) {
              const e = this.F;
              let i,
                n,
                o = [];
              do {
                (o[0] = e.fromRng(t)),
                  (i = t.nextBool()),
                  (n = e.add(e.mul(e.square(o[0]), o[0]), this.b));
              } while (!e.isSquare(n));
              (o[1] = e.sqrt(n)),
                i ^ e.isNegative(o[1]) && (o[1] = e.neg(o[1]));
              let a = new Uint8Array(2 * this.F.n8);
              return (
                a.set(o[0]),
                a.set(o[1], this.F.n8),
                this.cofactor && (a = this.timesScalar(a, this.cofactor)),
                a
              );
            }
            toObject(t) {
              if (this.isZero(t))
                return [
                  this.F.toObject(this.F.zero),
                  this.F.toObject(this.F.one),
                  this.F.toObject(this.F.zero),
                ];
              const e = this.F.toObject(t.slice(0, this.F.n8)),
                i = this.F.toObject(t.slice(this.F.n8, 2 * this.F.n8));
              let n;
              return (
                (n =
                  t.byteLength == 3 * this.F.n8
                    ? this.F.toObject(t.slice(2 * this.F.n8, 3 * this.F.n8))
                    : this.F.toObject(this.F.one)),
                [e, i, n]
              );
            }
            fromObject(t) {
              const e = this.F.fromObject(t[0]),
                i = this.F.fromObject(t[1]);
              let n;
              if (
                ((n = 3 == t.length ? this.F.fromObject(t[2]) : this.F.one),
                this.F.isZero(n, this.F.one))
              )
                return this.zeroAffine;
              if (this.F.eq(n, this.F.one)) {
                const t = new Uint8Array(2 * this.F.n8);
                return t.set(e), t.set(i, this.F.n8), t;
              }
              {
                const t = new Uint8Array(3 * this.F.n8);
                return (
                  t.set(e), t.set(i, this.F.n8), t.set(n, 2 * this.F.n8), t
                );
              }
            }
            e(t) {
              return t instanceof Uint8Array ? t : this.fromObject(t);
            }
            x(t) {
              return this.toAffine(t).slice(0, this.F.n8);
            }
            y(t) {
              return this.toAffine(t).slice(this.F.n8);
            }
          }
          function wt(t) {
            const e = 32767;
            let i, n;
            async function o(t) {
              const o = new Uint8Array(t.code),
                a = await WebAssembly.compile(o);
              (n = new WebAssembly.Memory({ initial: t.init, maximum: e })),
                (i = await WebAssembly.instantiate(a, { env: { memory: n } }));
            }
            function a(t) {
              const i = new Uint32Array(n.buffer, 0, 1);
              for (; 3 & i[0]; ) i[0]++;
              const o = i[0];
              if (((i[0] += t), i[0] + t > n.buffer.byteLength)) {
                const o = n.buffer.byteLength / 65536;
                let a = Math.floor((i[0] + t) / 65536) + 1;
                a > e && (a = e), n.grow(a - o);
              }
              return o;
            }
            function s(t) {
              const e = a(t.byteLength);
              return l(e, t), e;
            }
            function r(t, e) {
              const i = new Uint8Array(n.buffer);
              return new Uint8Array(i.buffer, i.byteOffset + t, e);
            }
            function l(t, e) {
              new Uint8Array(n.buffer).set(new Uint8Array(e), t);
            }
            function c(t) {
              if ("INIT" == t[0].cmd) return o(t[0]);
              const e = { vars: [], out: [] },
                c = new Uint32Array(n.buffer, 0, 1)[0];
              for (let n = 0; n < t.length; n++)
                switch (t[n].cmd) {
                  case "ALLOCSET":
                    e.vars[t[n].var] = s(t[n].buff);
                    break;
                  case "ALLOC":
                    e.vars[t[n].var] = a(t[n].len);
                    break;
                  case "SET":
                    l(e.vars[t[n].var], t[n].buff);
                    break;
                  case "CALL": {
                    const o = [];
                    for (let i = 0; i < t[n].params.length; i++) {
                      const a = t[n].params[i];
                      void 0 !== a.var
                        ? o.push(e.vars[a.var] + (a.offset || 0))
                        : void 0 !== a.val && o.push(a.val);
                    }
                    i.exports[t[n].fnName](...o);
                    break;
                  }
                  case "GET":
                    e.out[t[n].out] = r(e.vars[t[n].var], t[n].len).slice();
                    break;
                  default:
                    throw new Error("Invalid cmd");
                }
              return (new Uint32Array(n.buffer, 0, 1)[0] = c), e.out;
            }
            return (
              t &&
                (t.onmessage = function (e) {
                  let i;
                  if (((i = e.data ? e.data : e), "INIT" == i[0].cmd))
                    o(i[0]).then(function () {
                      t.postMessage(i.result);
                    });
                  else if ("TERMINATE" == i[0].cmd) t.close();
                  else {
                    const e = c(i);
                    t.postMessage(e);
                  }
                }),
              c
            );
          }
          const Bt = 25;
          class vt {
            constructor() {
              this.promise = new Promise((t, e) => {
                (this.reject = e), (this.resolve = t);
              });
            }
          }
          var Et;
          const Ct =
            "data:application/javascript;base64," +
            ((Et = "(" + wt.toString() + ")(self)"),
            process.browser
              ? globalThis.btoa(Et)
              : Buffer.from(Et).toString("base64"));
          class At {
            constructor() {
              (this.actionQueue = []), (this.oldPFree = 0);
            }
            startSyncOp() {
              if (0 != this.oldPFree)
                throw new Error("Sync operation in progress");
              this.oldPFree = this.u32[0];
            }
            endSyncOp() {
              if (0 == this.oldPFree)
                throw new Error("No sync operation in progress");
              (this.u32[0] = this.oldPFree), (this.oldPFree = 0);
            }
            postAction(t, e, i, n) {
              if (this.working[t])
                throw new Error("Posting a job t a working worker");
              return (
                (this.working[t] = !0),
                (this.pendingDeferreds[t] = n || new vt()),
                this.workers[t].postMessage(e, i),
                this.pendingDeferreds[t].promise
              );
            }
            processWorks() {
              for (
                let t = 0;
                t < this.workers.length && this.actionQueue.length > 0;
                t++
              )
                if (0 == this.working[t]) {
                  const e = this.actionQueue.shift();
                  this.postAction(t, e.data, e.transfers, e.deferred);
                }
            }
            queueAction(t, e) {
              const i = new vt();
              if (this.singleThread) {
                const e = this.taskManager(t);
                i.resolve(e);
              } else
                this.actionQueue.push({ data: t, transfers: e, deferred: i }),
                  this.processWorks();
              return i.promise;
            }
            resetMemory() {
              this.u32[0] = this.initalPFree;
            }
            allocBuff(t) {
              const e = this.alloc(t.byteLength);
              return this.setBuff(e, t), e;
            }
            getBuff(t, e) {
              return this.u8.slice(t, t + e);
            }
            setBuff(t, e) {
              this.u8.set(new Uint8Array(e), t);
            }
            alloc(t) {
              for (; 3 & this.u32[0]; ) this.u32[0]++;
              const e = this.u32[0];
              return (this.u32[0] += t), e;
            }
            async terminate() {
              for (let t = 0; t < this.workers.length; t++)
                this.workers[t].postMessage([{ cmd: "TERMINATE" }]);
              await (200, new Promise((t) => setTimeout(t, 200)));
            }
          }
          function qt(t, e) {
            const i = t[e],
              n = t.Fr,
              o = t.tm;
            t[e].batchApplyKey = async function (t, a, s, r, l) {
              let c, d, u, h, f;
              if (((r = r || "affine"), (l = l || "affine"), "G1" == e))
                "jacobian" == r
                  ? ((u = 3 * i.F.n8), (c = "g1m_batchApplyKey"))
                  : ((u = 2 * i.F.n8), (c = "g1m_batchApplyKeyMixed")),
                  (h = 3 * i.F.n8),
                  "jacobian" == l
                    ? (f = 3 * i.F.n8)
                    : ((d = "g1m_batchToAffine"), (f = 2 * i.F.n8));
              else if ("G2" == e)
                "jacobian" == r
                  ? ((u = 3 * i.F.n8), (c = "g2m_batchApplyKey"))
                  : ((u = 2 * i.F.n8), (c = "g2m_batchApplyKeyMixed")),
                  (h = 3 * i.F.n8),
                  "jacobian" == l
                    ? (f = 3 * i.F.n8)
                    : ((d = "g2m_batchToAffine"), (f = 2 * i.F.n8));
              else {
                if ("Fr" != e) throw new Error("Invalid group: " + e);
                (c = "frm_batchApplyKey"), (u = i.n8), (h = i.n8), (f = i.n8);
              }
              const _ = Math.floor(t.byteLength / u),
                p = Math.floor(_ / o.concurrency),
                g = [];
              s = n.e(s);
              let m = n.e(a);
              for (let e = 0; e < o.concurrency; e++) {
                let i;
                if (((i = e < o.concurrency - 1 ? p : _ - e * p), 0 == i))
                  continue;
                const a = [];
                a.push({
                  cmd: "ALLOCSET",
                  var: 0,
                  buff: t.slice(e * p * u, e * p * u + i * u),
                }),
                  a.push({ cmd: "ALLOCSET", var: 1, buff: m }),
                  a.push({ cmd: "ALLOCSET", var: 2, buff: s }),
                  a.push({ cmd: "ALLOC", var: 3, len: i * Math.max(h, f) }),
                  a.push({
                    cmd: "CALL",
                    fnName: c,
                    params: [
                      { var: 0 },
                      { val: i },
                      { var: 1 },
                      { var: 2 },
                      { var: 3 },
                    ],
                  }),
                  d &&
                    a.push({
                      cmd: "CALL",
                      fnName: d,
                      params: [{ var: 3 }, { val: i }, { var: 3 }],
                    }),
                  a.push({ cmd: "GET", out: 0, var: 3, len: i * f }),
                  g.push(o.queueAction(a)),
                  (m = n.mul(m, n.exp(s, i)));
              }
              const L = await Promise.all(g);
              let b;
              b = t instanceof mt ? new mt(_ * f) : new Uint8Array(_ * f);
              let F = 0;
              for (let t = 0; t < L.length; t++)
                b.set(L[t][0], F), (F += L[t][0].byteLength);
              return b;
            };
          }
          const Ot = [
            1, 1, 1, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 13, 14, 15,
            16, 16, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17,
          ];
          function It(t, e) {
            const i = t[e],
              n = i.tm;
            async function o(t, n, o, a, s) {
              if (!(t instanceof Uint8Array))
                throw (
                  (a &&
                    a.error(`${s} _multiExpChunk buffBases is not Uint8Array`),
                  new Error(`${s} _multiExpChunk buffBases is not Uint8Array`))
                );
              if (!(n instanceof Uint8Array))
                throw (
                  (a &&
                    a.error(
                      `${s} _multiExpChunk buffScalars is not Uint8Array`
                    ),
                  new Error(
                    `${s} _multiExpChunk buffScalars is not Uint8Array`
                  ))
                );
              let r, l;
              if (((o = o || "affine"), "G1" == e))
                "affine" == o
                  ? ((l = "g1m_multiexpAffine_chunk"), (r = 2 * i.F.n8))
                  : ((l = "g1m_multiexp_chunk"), (r = 3 * i.F.n8));
              else {
                if ("G2" != e) throw new Error("Invalid group");
                "affine" == o
                  ? ((l = "g2m_multiexpAffine_chunk"), (r = 2 * i.F.n8))
                  : ((l = "g2m_multiexp_chunk"), (r = 3 * i.F.n8));
              }
              const c = Math.floor(t.byteLength / r);
              if (0 == c) return i.zero;
              const d = Math.floor(n.byteLength / c);
              if (d * c != n.byteLength)
                throw new Error("Scalar size does not match");
              const u = Ot[ut(c)],
                h = Math.floor((8 * d - 1) / u) + 1,
                f = [];
              for (let e = 0; e < h; e++) {
                const o = [
                  { cmd: "ALLOCSET", var: 0, buff: t },
                  { cmd: "ALLOCSET", var: 1, buff: n },
                  { cmd: "ALLOC", var: 2, len: 3 * i.F.n8 },
                  {
                    cmd: "CALL",
                    fnName: l,
                    params: [
                      { var: 0 },
                      { var: 1 },
                      { val: d },
                      { val: c },
                      { val: e * u },
                      { val: Math.min(8 * d - e * u, u) },
                      { var: 2 },
                    ],
                  },
                  { cmd: "GET", out: 0, var: 2, len: 3 * i.F.n8 },
                ];
                f.push(i.tm.queueAction(o));
              }
              const _ = await Promise.all(f);
              let p = i.zero;
              for (let t = _.length - 1; t >= 0; t--) {
                if (!i.isZero(p)) for (let t = 0; t < u; t++) p = i.double(p);
                p = i.add(p, _[t][0]);
              }
              return p;
            }
            async function a(t, a, s, r, l) {
              const c = 1 << 22;
              let d;
              if ("G1" == e) d = "affine" == s ? 2 * i.F.n8 : 3 * i.F.n8;
              else {
                if ("G2" != e) throw new Error("Invalid group");
                d = "affine" == s ? 2 * i.F.n8 : 3 * i.F.n8;
              }
              const u = Math.floor(t.byteLength / d),
                h = Math.floor(a.byteLength / u);
              if (h * u != a.byteLength)
                throw new Error("Scalar size does not match");
              const f = Ot[ut(u)],
                _ = Math.floor((8 * h - 1) / f) + 1;
              let p;
              (p = Math.floor(u / (n.concurrency / _))),
                p > c && (p = c),
                p < 1024 && (p = 1024);
              const g = [];
              for (let e = 0; e < u; e += p) {
                r && r.debug(`Multiexp start: ${l}: ${e}/${u}`);
                const i = Math.min(u - e, p),
                  n = t.slice(e * d, (e + i) * d),
                  c = a.slice(e * h, (e + i) * h);
                g.push(
                  o(n, c, s, r, l).then(
                    (t) => (r && r.debug(`Multiexp end: ${l}: ${e}/${u}`), t)
                  )
                );
              }
              const m = await Promise.all(g);
              let L = i.zero;
              for (let t = m.length - 1; t >= 0; t--) L = i.add(L, m[t]);
              return L;
            }
            (i.multiExp = async function (t, e, i, n) {
              return await a(t, e, "jacobian", i, n);
            }),
              (i.multiExpAffine = async function (t, e, i, n) {
                return await a(t, e, "affine", i, n);
              });
          }
          function St(t, e) {
            const i = t[e],
              n = t.Fr,
              o = i.tm;
            async function a(t, r, l, c, d, u) {
              let h, f, _, p, g, m, L, b;
              (l = l || "affine"),
                (c = c || "affine"),
                "G1" == e
                  ? ("affine" == l
                      ? ((h = 2 * i.F.n8), (p = "g1m_batchToJacobian"))
                      : (h = 3 * i.F.n8),
                    (f = 3 * i.F.n8),
                    r && (b = "g1m_fftFinal"),
                    (L = "g1m_fftJoin"),
                    (m = "g1m_fftMix"),
                    "affine" == c
                      ? ((_ = 2 * i.F.n8), (g = "g1m_batchToAffine"))
                      : (_ = 3 * i.F.n8))
                  : "G2" == e
                    ? ("affine" == l
                        ? ((h = 2 * i.F.n8), (p = "g2m_batchToJacobian"))
                        : (h = 3 * i.F.n8),
                      (f = 3 * i.F.n8),
                      r && (b = "g2m_fftFinal"),
                      (L = "g2m_fftJoin"),
                      (m = "g2m_fftMix"),
                      "affine" == c
                        ? ((_ = 2 * i.F.n8), (g = "g2m_batchToAffine"))
                        : (_ = 3 * i.F.n8))
                    : "Fr" == e &&
                      ((h = i.n8),
                      (f = i.n8),
                      (_ = i.n8),
                      r && (b = "frm_fftFinal"),
                      (m = "frm_fftMix"),
                      (L = "frm_fftJoin"));
              let F = !1;
              Array.isArray(t)
                ? ((t = ft(t, h)), (F = !0))
                : (t = t.slice(0, t.byteLength));
              const y = t.byteLength / h,
                x = ut(y);
              if (1 << x != y) throw new Error("fft must be multiple of 2");
              if (x == n.s + 1) {
                let e;
                return (
                  (e = r
                    ? await (async function (t, e, i, o, r) {
                        let l, c;
                        (l = t.slice(0, t.byteLength / 2)),
                          (c = t.slice(t.byteLength / 2, t.byteLength));
                        const d = [];
                        d.push(a(l, !0, e, "jacobian", o, r)),
                          d.push(a(c, !0, e, "jacobian", o, r)),
                          ([l, c] = await Promise.all(d));
                        const u = await s(
                          l,
                          c,
                          "fftJoinExtInv",
                          n.one,
                          n.shiftInv,
                          "jacobian",
                          i,
                          o,
                          r
                        );
                        let h;
                        return (
                          (h =
                            u[0].byteLength > 1 << 28
                              ? new mt(2 * u[0].byteLength)
                              : new Uint8Array(2 * u[0].byteLength)),
                          h.set(u[0]),
                          h.set(u[1], u[0].byteLength),
                          h
                        );
                      })(t, l, c, d, u)
                    : await (async function (t, e, i, o, r) {
                        let l, c;
                        (l = t.slice(0, t.byteLength / 2)),
                          (c = t.slice(t.byteLength / 2, t.byteLength));
                        const d = [];
                        ([l, c] = await s(
                          l,
                          c,
                          "fftJoinExt",
                          n.one,
                          n.shift,
                          e,
                          "jacobian",
                          o,
                          r
                        )),
                          d.push(a(l, !1, "jacobian", i, o, r)),
                          d.push(a(c, !1, "jacobian", i, o, r));
                        const u = await Promise.all(d);
                        let h;
                        return (
                          (h =
                            u[0].byteLength > 1 << 28
                              ? new mt(2 * u[0].byteLength)
                              : new Uint8Array(2 * u[0].byteLength)),
                          h.set(u[0]),
                          h.set(u[1], u[0].byteLength),
                          h
                        );
                      })(t, l, c, d, u)),
                  F ? _t(e, _) : e
                );
              }
              let w, B, v;
              r && (w = n.inv(n.e(y))), ht(t, h);
              let E = Math.min(16384, y),
                C = y / E;
              for (; C < o.concurrency && E >= 16; ) (C *= 2), (E /= 2);
              const A = ut(E),
                q = [];
              for (let e = 0; e < C; e++) {
                d && d.debug(`${u}: fft ${x} mix start: ${e}/${C}`);
                const i = [];
                i.push({ cmd: "ALLOC", var: 0, len: f * E });
                const n = t.slice(E * e * h, E * (e + 1) * h);
                i.push({ cmd: "SET", var: 0, buff: n }),
                  p &&
                    i.push({
                      cmd: "CALL",
                      fnName: p,
                      params: [{ var: 0 }, { val: E }, { var: 0 }],
                    });
                for (let t = 1; t <= A; t++)
                  i.push({
                    cmd: "CALL",
                    fnName: m,
                    params: [{ var: 0 }, { val: E }, { val: t }],
                  });
                A == x
                  ? (b &&
                      (i.push({ cmd: "ALLOCSET", var: 1, buff: w }),
                      i.push({
                        cmd: "CALL",
                        fnName: b,
                        params: [{ var: 0 }, { val: E }, { var: 1 }],
                      })),
                    g &&
                      i.push({
                        cmd: "CALL",
                        fnName: g,
                        params: [{ var: 0 }, { val: E }, { var: 0 }],
                      }),
                    i.push({ cmd: "GET", out: 0, var: 0, len: E * _ }))
                  : i.push({ cmd: "GET", out: 0, var: 0, len: f * E }),
                  q.push(
                    o
                      .queueAction(i)
                      .then(
                        (t) => (
                          d && d.debug(`${u}: fft ${x} mix end: ${e}/${C}`), t
                        )
                      )
                  );
              }
              v = await Promise.all(q);
              for (let t = 0; t < C; t++) v[t] = v[t][0];
              for (let t = A + 1; t <= x; t++) {
                d && d.debug(`${u}: fft  ${x}  join: ${t}/${x}`);
                const e = 1 << (x - t),
                  i = C / e,
                  a = [];
                for (let s = 0; s < e; s++)
                  for (let r = 0; r < i / 2; r++) {
                    const l = n.exp(n.w[t], r * E),
                      c = n.w[t],
                      h = s * i + r,
                      p = s * i + r + i / 2,
                      m = [];
                    m.push({ cmd: "ALLOCSET", var: 0, buff: v[h] }),
                      m.push({ cmd: "ALLOCSET", var: 1, buff: v[p] }),
                      m.push({ cmd: "ALLOCSET", var: 2, buff: l }),
                      m.push({ cmd: "ALLOCSET", var: 3, buff: c }),
                      m.push({
                        cmd: "CALL",
                        fnName: L,
                        params: [
                          { var: 0 },
                          { var: 1 },
                          { val: E },
                          { var: 2 },
                          { var: 3 },
                        ],
                      }),
                      t == x
                        ? (b &&
                            (m.push({ cmd: "ALLOCSET", var: 4, buff: w }),
                            m.push({
                              cmd: "CALL",
                              fnName: b,
                              params: [{ var: 0 }, { val: E }, { var: 4 }],
                            }),
                            m.push({
                              cmd: "CALL",
                              fnName: b,
                              params: [{ var: 1 }, { val: E }, { var: 4 }],
                            })),
                          g &&
                            (m.push({
                              cmd: "CALL",
                              fnName: g,
                              params: [{ var: 0 }, { val: E }, { var: 0 }],
                            }),
                            m.push({
                              cmd: "CALL",
                              fnName: g,
                              params: [{ var: 1 }, { val: E }, { var: 1 }],
                            })),
                          m.push({ cmd: "GET", out: 0, var: 0, len: E * _ }),
                          m.push({ cmd: "GET", out: 1, var: 1, len: E * _ }))
                        : (m.push({ cmd: "GET", out: 0, var: 0, len: E * f }),
                          m.push({ cmd: "GET", out: 1, var: 1, len: E * f })),
                      a.push(
                        o
                          .queueAction(m)
                          .then(
                            (n) => (
                              d &&
                                d.debug(
                                  `${u}: fft ${x} join  ${t}/${x}  ${s + 1}/${e} ${r}/${i / 2}`
                                ),
                              n
                            )
                          )
                      );
                  }
                const s = await Promise.all(a);
                for (let t = 0; t < e; t++)
                  for (let e = 0; e < i / 2; e++) {
                    const n = t * i + e,
                      o = t * i + e + i / 2,
                      a = s.shift();
                    (v[n] = a[0]), (v[o] = a[1]);
                  }
              }
              if (
                ((B = t instanceof mt ? new mt(y * _) : new Uint8Array(y * _)),
                r)
              ) {
                B.set(v[0].slice((E - 1) * _));
                let t = _;
                for (let e = C - 1; e > 0; e--)
                  B.set(v[e], t), (t += E * _), delete v[e];
                B.set(v[0].slice(0, (E - 1) * _), t), delete v[0];
              } else
                for (let t = 0; t < C; t++) B.set(v[t], E * _ * t), delete v[t];
              return F ? _t(B, _) : B;
            }
            async function s(t, a, s, r, l, c, d, u, h) {
              let f, _, p, g, m, L;
              if ("G1" == e)
                "affine" == c
                  ? ((m = 2 * i.F.n8), (_ = "g1m_batchToJacobian"))
                  : (m = 3 * i.F.n8),
                  (L = 3 * i.F.n8),
                  (f = "g1m_" + s),
                  "affine" == d
                    ? ((p = "g1m_batchToAffine"), (g = 2 * i.F.n8))
                    : (g = 3 * i.F.n8);
              else if ("G2" == e)
                "affine" == c
                  ? ((m = 2 * i.F.n8), (_ = "g2m_batchToJacobian"))
                  : (m = 3 * i.F.n8),
                  (f = "g2m_" + s),
                  (L = 3 * i.F.n8),
                  "affine" == d
                    ? ((p = "g2m_batchToAffine"), (g = 2 * i.F.n8))
                    : (g = 3 * i.F.n8);
              else {
                if ("Fr" != e) throw new Error("Invalid group");
                (m = n.n8), (g = n.n8), (L = n.n8), (f = "frm_" + s);
              }
              if (t.byteLength != a.byteLength)
                throw new Error("Invalid buffer size");
              const b = Math.floor(t.byteLength / m);
              if (b != 1 << ut(b)) throw new Error("Invalid number of points");
              let F = Math.floor(b / o.concurrency);
              F < 16 && (F = 16), F > 65536 && (F = 65536);
              const y = [];
              for (let e = 0; e < b; e += F) {
                u && u.debug(`${h}: fftJoinExt Start: ${e}/${b}`);
                const i = Math.min(b - e, F),
                  s = n.mul(r, n.exp(l, e)),
                  c = [],
                  d = t.slice(e * m, (e + i) * m),
                  x = a.slice(e * m, (e + i) * m);
                c.push({ cmd: "ALLOC", var: 0, len: L * i }),
                  c.push({ cmd: "SET", var: 0, buff: d }),
                  c.push({ cmd: "ALLOC", var: 1, len: L * i }),
                  c.push({ cmd: "SET", var: 1, buff: x }),
                  c.push({ cmd: "ALLOCSET", var: 2, buff: s }),
                  c.push({ cmd: "ALLOCSET", var: 3, buff: l }),
                  _ &&
                    (c.push({
                      cmd: "CALL",
                      fnName: _,
                      params: [{ var: 0 }, { val: i }, { var: 0 }],
                    }),
                    c.push({
                      cmd: "CALL",
                      fnName: _,
                      params: [{ var: 1 }, { val: i }, { var: 1 }],
                    })),
                  c.push({
                    cmd: "CALL",
                    fnName: f,
                    params: [
                      { var: 0 },
                      { var: 1 },
                      { val: i },
                      { var: 2 },
                      { var: 3 },
                      { val: n.s },
                    ],
                  }),
                  p &&
                    (c.push({
                      cmd: "CALL",
                      fnName: p,
                      params: [{ var: 0 }, { val: i }, { var: 0 }],
                    }),
                    c.push({
                      cmd: "CALL",
                      fnName: p,
                      params: [{ var: 1 }, { val: i }, { var: 1 }],
                    })),
                  c.push({ cmd: "GET", out: 0, var: 0, len: i * g }),
                  c.push({ cmd: "GET", out: 1, var: 1, len: i * g }),
                  y.push(
                    o
                      .queueAction(c)
                      .then(
                        (t) => (
                          u && u.debug(`${h}: fftJoinExt End: ${e}/${b}`), t
                        )
                      )
                  );
              }
              const x = await Promise.all(y);
              let w, B;
              b * g > 1 << 28
                ? ((w = new mt(b * g)), (B = new mt(b * g)))
                : ((w = new Uint8Array(b * g)), (B = new Uint8Array(b * g)));
              let v = 0;
              for (let t = 0; t < x.length; t++)
                w.set(x[t][0], v), B.set(x[t][1], v), (v += x[t][0].byteLength);
              return [w, B];
            }
            (i.fft = async function (t, e, i, n, o) {
              return await a(t, !1, e, i, n, o);
            }),
              (i.ifft = async function (t, e, i, n, o) {
                return await a(t, !0, e, i, n, o);
              }),
              (i.lagrangeEvaluations = async function (t, o, r, l, c) {
                let d;
                if (((o = o || "affine"), (r = r || "affine"), "G1" == e))
                  d = "affine" == o ? 2 * i.F.n8 : 3 * i.F.n8;
                else if ("G2" == e) d = "affine" == o ? 2 * i.F.n8 : 3 * i.F.n8;
                else {
                  if ("Fr" != e) throw new Error("Invalid group");
                  d = n.n8;
                }
                const u = t.byteLength / d,
                  h = ut(u);
                if (2 ** h * d != t.byteLength)
                  throw (
                    (l && l.error("lagrangeEvaluations iinvalid input size"),
                    new Error("lagrangeEvaluations invalid Input size"))
                  );
                if (h <= n.s) return await i.ifft(t, o, r, l, c);
                if (h > n.s + 1)
                  throw (
                    (l && l.error("lagrangeEvaluations input too big"),
                    new Error("lagrangeEvaluations input too big"))
                  );
                let f = t.slice(0, t.byteLength / 2),
                  _ = t.slice(t.byteLength / 2, t.byteLength);
                const p = n.exp(n.shift, u / 2),
                  g = n.inv(n.sub(n.one, p));
                [f, _] = await s(
                  f,
                  _,
                  "prepareLagrangeEvaluation",
                  g,
                  n.shiftInv,
                  o,
                  "jacobian",
                  l,
                  c + " prep"
                );
                const m = [];
                let L;
                return (
                  m.push(a(f, !0, "jacobian", r, l, c + " t0")),
                  m.push(a(_, !0, "jacobian", r, l, c + " t1")),
                  ([f, _] = await Promise.all(m)),
                  (L =
                    f.byteLength > 1 << 28
                      ? new mt(2 * f.byteLength)
                      : new Uint8Array(2 * f.byteLength)),
                  L.set(f),
                  L.set(_, f.byteLength),
                  L
                );
              }),
              (i.fftMix = async function (t) {
                const a = 3 * i.F.n8;
                let s, r;
                if ("G1" == e) (s = "g1m_fftMix"), (r = "g1m_fftJoin");
                else if ("G2" == e) (s = "g2m_fftMix"), (r = "g2m_fftJoin");
                else {
                  if ("Fr" != e) throw new Error("Invalid group");
                  (s = "frm_fftMix"), (r = "frm_fftJoin");
                }
                const l = Math.floor(t.byteLength / a),
                  c = ut(l);
                let d = 1 << ut(o.concurrency);
                l <= 2 * d && (d = 1);
                const u = l / d,
                  h = ut(u),
                  f = [];
                for (let e = 0; e < d; e++) {
                  const i = [],
                    n = t.slice(e * u * a, (e + 1) * u * a);
                  i.push({ cmd: "ALLOCSET", var: 0, buff: n });
                  for (let t = 1; t <= h; t++)
                    i.push({
                      cmd: "CALL",
                      fnName: s,
                      params: [{ var: 0 }, { val: u }, { val: t }],
                    });
                  i.push({ cmd: "GET", out: 0, var: 0, len: u * a }),
                    f.push(o.queueAction(i));
                }
                const _ = await Promise.all(f),
                  p = [];
                for (let t = 0; t < _.length; t++) p[t] = _[t][0];
                for (let t = h + 1; t <= c; t++) {
                  const e = 1 << (c - t),
                    i = d / e,
                    s = [];
                  for (let l = 0; l < e; l++)
                    for (let e = 0; e < i / 2; e++) {
                      const c = n.exp(n.w[t], e * u),
                        d = n.w[t],
                        h = l * i + e,
                        f = l * i + e + i / 2,
                        _ = [];
                      _.push({ cmd: "ALLOCSET", var: 0, buff: p[h] }),
                        _.push({ cmd: "ALLOCSET", var: 1, buff: p[f] }),
                        _.push({ cmd: "ALLOCSET", var: 2, buff: c }),
                        _.push({ cmd: "ALLOCSET", var: 3, buff: d }),
                        _.push({
                          cmd: "CALL",
                          fnName: r,
                          params: [
                            { var: 0 },
                            { var: 1 },
                            { val: u },
                            { var: 2 },
                            { var: 3 },
                          ],
                        }),
                        _.push({ cmd: "GET", out: 0, var: 0, len: u * a }),
                        _.push({ cmd: "GET", out: 1, var: 1, len: u * a }),
                        s.push(o.queueAction(_));
                    }
                  const l = await Promise.all(s);
                  for (let t = 0; t < e; t++)
                    for (let e = 0; e < i / 2; e++) {
                      const n = t * i + e,
                        o = t * i + e + i / 2,
                        a = l.shift();
                      (p[n] = a[0]), (p[o] = a[1]);
                    }
                }
                let g;
                g = t instanceof mt ? new mt(l * a) : new Uint8Array(l * a);
                let m = 0;
                for (let t = 0; t < d; t++)
                  g.set(p[t], m), (m += p[t].byteLength);
                return g;
              }),
              (i.fftJoin = async function (t, a, s, r) {
                const l = 3 * i.F.n8;
                let c;
                if ("G1" == e) c = "g1m_fftJoin";
                else if ("G2" == e) c = "g2m_fftJoin";
                else {
                  if ("Fr" != e) throw new Error("Invalid group");
                  c = "frm_fftJoin";
                }
                if (t.byteLength != a.byteLength)
                  throw new Error("Invalid buffer size");
                const d = Math.floor(t.byteLength / l);
                if (d != 1 << ut(d))
                  throw new Error("Invalid number of points");
                let u = 1 << ut(o.concurrency);
                d <= 2 * u && (u = 1);
                const h = d / u,
                  f = [];
                for (let e = 0; e < u; e++) {
                  const i = [],
                    d = n.mul(s, n.exp(r, e * h)),
                    u = t.slice(e * h * l, (e + 1) * h * l),
                    _ = a.slice(e * h * l, (e + 1) * h * l);
                  i.push({ cmd: "ALLOCSET", var: 0, buff: u }),
                    i.push({ cmd: "ALLOCSET", var: 1, buff: _ }),
                    i.push({ cmd: "ALLOCSET", var: 2, buff: d }),
                    i.push({ cmd: "ALLOCSET", var: 3, buff: r }),
                    i.push({
                      cmd: "CALL",
                      fnName: c,
                      params: [
                        { var: 0 },
                        { var: 1 },
                        { val: h },
                        { var: 2 },
                        { var: 3 },
                      ],
                    }),
                    i.push({ cmd: "GET", out: 0, var: 0, len: h * l }),
                    i.push({ cmd: "GET", out: 1, var: 1, len: h * l }),
                    f.push(o.queueAction(i));
                }
                const _ = await Promise.all(f);
                let p, g;
                t instanceof mt
                  ? ((p = new mt(d * l)), (g = new mt(d * l)))
                  : ((p = new Uint8Array(d * l)), (g = new Uint8Array(d * l)));
                let m = 0;
                for (let t = 0; t < _.length; t++)
                  p.set(_[t][0], m),
                    g.set(_[t][1], m),
                    (m += _[t][0].byteLength);
                return [p, g];
              }),
              (i.fftFinal = async function (t, n) {
                const a = 3 * i.F.n8,
                  s = 2 * i.F.n8;
                let r, l;
                if ("G1" == e) (r = "g1m_fftFinal"), (l = "g1m_batchToAffine");
                else {
                  if ("G2" != e) throw new Error("Invalid group");
                  (r = "g2m_fftFinal"), (l = "g2m_batchToAffine");
                }
                const c = Math.floor(t.byteLength / a);
                if (c != 1 << ut(c))
                  throw new Error("Invalid number of points");
                const d = Math.floor(c / o.concurrency),
                  u = [];
                for (let e = 0; e < o.concurrency; e++) {
                  let i;
                  if (((i = e < o.concurrency - 1 ? d : c - e * d), 0 == i))
                    continue;
                  const h = [],
                    f = t.slice(e * d * a, (e * d + i) * a);
                  h.push({ cmd: "ALLOCSET", var: 0, buff: f }),
                    h.push({ cmd: "ALLOCSET", var: 1, buff: n }),
                    h.push({
                      cmd: "CALL",
                      fnName: r,
                      params: [{ var: 0 }, { val: i }, { var: 1 }],
                    }),
                    h.push({
                      cmd: "CALL",
                      fnName: l,
                      params: [{ var: 0 }, { val: i }, { var: 0 }],
                    }),
                    h.push({ cmd: "GET", out: 0, var: 0, len: i * s }),
                    u.push(o.queueAction(h));
                }
                const h = await Promise.all(u);
                let f;
                f = t instanceof mt ? new mt(c * s) : new Uint8Array(c * s);
                let _ = 0;
                for (let t = h.length - 1; t >= 0; t--)
                  f.set(h[t][0], _), (_ += h[t][0].byteLength);
                return f;
              });
          }
          async function Pt(t) {
            const e = await (async function (t, e) {
                const i = new At();
                (i.memory = new WebAssembly.Memory({ initial: Bt })),
                  (i.u8 = new Uint8Array(i.memory.buffer)),
                  (i.u32 = new Uint32Array(i.memory.buffer));
                const n = await WebAssembly.compile(t.code);
                if (
                  ((i.instance = await WebAssembly.instantiate(n, {
                    env: { memory: i.memory },
                  })),
                  (i.singleThread = e),
                  (i.initalPFree = i.u32[0]),
                  (i.pq = t.pq),
                  (i.pr = t.pr),
                  (i.pG1gen = t.pG1gen),
                  (i.pG1zero = t.pG1zero),
                  (i.pG2gen = t.pG2gen),
                  (i.pG2zero = t.pG2zero),
                  (i.pOneT = t.pOneT),
                  e)
                )
                  (i.code = t.code),
                    (i.taskManager = wt()),
                    await i.taskManager([
                      { cmd: "INIT", init: Bt, code: i.code.slice() },
                    ]),
                    (i.concurrency = 1);
                else {
                  (i.workers = []), (i.pendingDeferreds = []), (i.working = []);
                  let e = 2;
                  process.browser
                    ? "object" == typeof navigator &&
                      navigator.hardwareConcurrency &&
                      (e = navigator.hardwareConcurrency)
                    : (e = a.cpus().length),
                    0 == e && (e = 2),
                    e > 64 && (e = 64),
                    (i.concurrency = e);
                  for (let t = 0; t < e; t++)
                    (i.workers[t] = new Worker(Ct)),
                      i.workers[t].addEventListener("message", o(t)),
                      (i.working[t] = !1);
                  const n = [];
                  for (let e = 0; e < i.workers.length; e++) {
                    const o = t.code.slice();
                    n.push(
                      i.postAction(
                        e,
                        [{ cmd: "INIT", init: Bt, code: o }],
                        [o.buffer]
                      )
                    );
                  }
                  await Promise.all(n);
                }
                return i;
                function o(t) {
                  return function (e) {
                    let n;
                    (n = e && e.data ? e.data : e),
                      (i.working[t] = !1),
                      i.pendingDeferreds[t].resolve(n),
                      i.processWorks();
                  };
                }
              })(t.wasm, t.singleThread),
              i = {};
            return (
              (i.q = c(t.wasm.q.toString())),
              (i.r = c(t.wasm.r.toString())),
              (i.name = t.name),
              (i.tm = e),
              (i.prePSize = t.wasm.prePSize),
              (i.preQSize = t.wasm.preQSize),
              (i.Fr = new bt(e, "frm", t.n8r, t.r)),
              (i.F1 = new bt(e, "f1m", t.n8q, t.q)),
              (i.F2 = new Ft(e, "f2m", i.F1)),
              (i.G1 = new xt(
                e,
                "g1m",
                i.F1,
                t.wasm.pG1gen,
                t.wasm.pG1b,
                t.cofactorG1
              )),
              (i.G2 = new xt(
                e,
                "g2m",
                i.F2,
                t.wasm.pG2gen,
                t.wasm.pG2b,
                t.cofactorG2
              )),
              (i.F6 = new yt(e, "f6m", i.F2)),
              (i.F12 = new Ft(e, "ftm", i.F6)),
              (i.Gt = i.F12),
              qt(i, "G1"),
              qt(i, "G2"),
              qt(i, "Fr"),
              It(i, "G1"),
              It(i, "G2"),
              St(i, "G1"),
              St(i, "G2"),
              St(i, "Fr"),
              (function (t) {
                const e = t.tm;
                (t.pairing = function (i, n) {
                  e.startSyncOp();
                  const o = e.allocBuff(t.G1.toJacobian(i)),
                    a = e.allocBuff(t.G2.toJacobian(n)),
                    s = e.alloc(t.Gt.n8);
                  e.instance.exports[t.name + "_pairing"](o, a, s);
                  const r = e.getBuff(s, t.Gt.n8);
                  return e.endSyncOp(), r;
                }),
                  (t.pairingEq = async function () {
                    let i, n;
                    arguments.length % 2 == 1
                      ? ((i = arguments[arguments.length - 1]),
                        (n = (arguments.length - 1) / 2))
                      : ((i = t.Gt.one), (n = arguments.length / 2));
                    const o = [];
                    for (let i = 0; i < n; i++) {
                      const n = [],
                        a = t.G1.toJacobian(arguments[2 * i]);
                      n.push({ cmd: "ALLOCSET", var: 0, buff: a }),
                        n.push({ cmd: "ALLOC", var: 1, len: t.prePSize });
                      const s = t.G2.toJacobian(arguments[2 * i + 1]);
                      n.push({ cmd: "ALLOCSET", var: 2, buff: s }),
                        n.push({ cmd: "ALLOC", var: 3, len: t.preQSize }),
                        n.push({ cmd: "ALLOC", var: 4, len: t.Gt.n8 }),
                        n.push({
                          cmd: "CALL",
                          fnName: t.name + "_prepareG1",
                          params: [{ var: 0 }, { var: 1 }],
                        }),
                        n.push({
                          cmd: "CALL",
                          fnName: t.name + "_prepareG2",
                          params: [{ var: 2 }, { var: 3 }],
                        }),
                        n.push({
                          cmd: "CALL",
                          fnName: t.name + "_millerLoop",
                          params: [{ var: 1 }, { var: 3 }, { var: 4 }],
                        }),
                        n.push({ cmd: "GET", out: 0, var: 4, len: t.Gt.n8 }),
                        o.push(e.queueAction(n));
                    }
                    const a = await Promise.all(o);
                    e.startSyncOp();
                    const s = e.alloc(t.Gt.n8);
                    e.instance.exports.ftm_one(s);
                    for (let t = 0; t < a.length; t++) {
                      const i = e.allocBuff(a[t][0]);
                      e.instance.exports.ftm_mul(s, i, s);
                    }
                    e.instance.exports[t.name + "_finalExponentiation"](s, s);
                    const r = e.allocBuff(i),
                      l = !!e.instance.exports.ftm_eq(s, r);
                    return e.endSyncOp(), l;
                  }),
                  (t.prepareG1 = function (t) {
                    this.tm.startSyncOp();
                    const e = this.tm.allocBuff(t),
                      i = this.tm.alloc(this.prePSize);
                    this.tm.instance.exports[this.name + "_prepareG1"](e, i);
                    const n = this.tm.getBuff(i, this.prePSize);
                    return this.tm.endSyncOp(), n;
                  }),
                  (t.prepareG2 = function (t) {
                    this.tm.startSyncOp();
                    const e = this.tm.allocBuff(t),
                      i = this.tm.alloc(this.preQSize);
                    this.tm.instance.exports[this.name + "_prepareG2"](e, i);
                    const n = this.tm.getBuff(i, this.preQSize);
                    return this.tm.endSyncOp(), n;
                  }),
                  (t.millerLoop = function (t, e) {
                    this.tm.startSyncOp();
                    const i = this.tm.allocBuff(t),
                      n = this.tm.allocBuff(e),
                      o = this.tm.alloc(this.Gt.n8);
                    this.tm.instance.exports[this.name + "_millerLoop"](
                      i,
                      n,
                      o
                    );
                    const a = this.tm.getBuff(o, this.Gt.n8);
                    return this.tm.endSyncOp(), a;
                  }),
                  (t.finalExponentiation = function (t) {
                    this.tm.startSyncOp();
                    const e = this.tm.allocBuff(t),
                      i = this.tm.alloc(this.Gt.n8);
                    this.tm.instance.exports[
                      this.name + "_finalExponentiation"
                    ](e, i);
                    const n = this.tm.getBuff(i, this.Gt.n8);
                    return this.tm.endSyncOp(), n;
                  });
              })(i),
              (i.array2buffer = function (t, e) {
                const i = new Uint8Array(e * t.length);
                for (let n = 0; n < t.length; n++) i.set(t[n], n * e);
                return i;
              }),
              (i.buffer2array = function (t, e) {
                const i = t.byteLength / e,
                  n = new Array(i);
                for (let o = 0; o < i; o++) n[o] = t.slice(o * e, o * e + e);
                return n;
              }),
              i
            );
          }
          async function zt(t, e) {
            const i = new s.ModuleBuilder();
            i.setMemory(25), o.buildBn128(i), e && e(i);
            const n = {};
            if (
              ((n.code = i.build()),
              (n.pq = i.modules.f1m.pq),
              (n.pr = i.modules.frm.pq),
              (n.pG1gen = i.modules.bn128.pG1gen),
              (n.pG1zero = i.modules.bn128.pG1zero),
              (n.pG1b = i.modules.bn128.pG1b),
              (n.pG2gen = i.modules.bn128.pG2gen),
              (n.pG2zero = i.modules.bn128.pG2zero),
              (n.pG2b = i.modules.bn128.pG2b),
              (n.pOneT = i.modules.bn128.pOneT),
              (n.prePSize = i.modules.bn128.prePSize),
              (n.preQSize = i.modules.bn128.preQSize),
              (n.n8q = 32),
              (n.n8r = 32),
              (n.q = i.modules.bn128.q),
              (n.r = i.modules.bn128.r),
              !t && globalThis.curve_bn128)
            )
              return globalThis.curve_bn128;
            const a = {
                name: "bn128",
                wasm: n,
                q: c(
                  "21888242871839275222246405745257275088696311157297823662689037894645226208583"
                ),
                r: c(
                  "21888242871839275222246405745257275088548364400416034343698204186575808495617"
                ),
                n8q: 32,
                n8r: 32,
                cofactorG2: c(
                  "30644e72e131a029b85045b68181585e06ceecda572a2489345f2299c0f9fa8d",
                  16
                ),
                singleThread: !!t,
              },
              r = await Pt(a);
            return (
              (r.terminate = async function () {
                a.singleThread ||
                  ((globalThis.curve_bn128 = null), await this.tm.terminate());
              }),
              t || (globalThis.curve_bn128 = r),
              r
            );
          }
          async function Mt(t, e) {
            const i = new s.ModuleBuilder();
            i.setMemory(25), o.buildBls12381(i), e && e(i);
            const n = {};
            if (
              ((n.code = i.build()),
              (n.pq = i.modules.f1m.pq),
              (n.pr = i.modules.frm.pq),
              (n.pG1gen = i.modules.bls12381.pG1gen),
              (n.pG1zero = i.modules.bls12381.pG1zero),
              (n.pG1b = i.modules.bls12381.pG1b),
              (n.pG2gen = i.modules.bls12381.pG2gen),
              (n.pG2zero = i.modules.bls12381.pG2zero),
              (n.pG2b = i.modules.bls12381.pG2b),
              (n.pOneT = i.modules.bls12381.pOneT),
              (n.prePSize = i.modules.bls12381.prePSize),
              (n.preQSize = i.modules.bls12381.preQSize),
              (n.n8q = 48),
              (n.n8r = 32),
              (n.q = i.modules.bls12381.q),
              (n.r = i.modules.bls12381.r),
              !t && globalThis.curve_bls12381)
            )
              return globalThis.curve_bls12381;
            const a = {
                name: "bls12381",
                wasm: n,
                q: c(
                  "1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab",
                  16
                ),
                r: c(
                  "73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001",
                  16
                ),
                n8q: 48,
                n8r: 32,
                cofactorG1: c("0x396c8c005555e1568c00aaab0000aaab", 16),
                cofactorG2: c(
                  "0x5d543a95414e7f1091d50792876a202cd91de4547085abaa68a205b2e5a7ddfa628f1cb4d9e82ef21537e293a6691ae1616ec6e786f0c70cf1c38e31c7238e5",
                  16
                ),
                singleThread: !!t,
              },
              r = await Pt(a);
            return (
              (r.terminate = async function () {
                a.singleThread ||
                  ((globalThis.curve_bls12381 = null),
                  await this.tm.terminate());
              }),
              t || (globalThis.curve_bls12381 = r),
              r
            );
          }
          (globalThis.curve_bn128 = null), (globalThis.curve_bls12381 = null);
          const Rt = c(
              "73eda753299d7d483339d80809a1d80553bda402fffe5bfeffffffff00000001",
              16
            ),
            Tt = c(
              "21888242871839275222246405745257275088548364400416034343698204186575808495617"
            ),
            Nt = c(
              "1a0111ea397fe69a4b1ba7b6434bacd764774b84f38512bf6730d2a0f6b0f6241eabfffeb153ffffb9feffffffffaaab",
              16
            ),
            Ut = c(
              "21888242871839275222246405745257275088696311157297823662689037894645226208583"
            ),
            Gt = G,
            jt = pt;
          (e.BigBuffer = mt),
            (e.ChaCha = Y),
            (e.EC = class {
              constructor(t, e) {
                (this.F = t),
                  (this.g = e),
                  2 == this.g.length && (this.g[2] = this.F.one),
                  (this.zero = [this.F.zero, this.F.one, this.F.zero]);
              }
              add(t, e) {
                const i = this.F;
                if (this.eq(t, this.zero)) return e;
                if (this.eq(e, this.zero)) return t;
                const n = new Array(3),
                  o = i.square(t[2]),
                  a = i.square(e[2]),
                  s = i.mul(t[0], a),
                  r = i.mul(e[0], o),
                  l = i.mul(t[2], o),
                  c = i.mul(e[2], a),
                  d = i.mul(t[1], c),
                  u = i.mul(e[1], l);
                if (i.eq(s, r) && i.eq(d, u)) return this.double(t);
                const h = i.sub(r, s),
                  f = i.sub(u, d),
                  _ = i.square(i.add(h, h)),
                  p = i.mul(h, _),
                  g = i.add(f, f),
                  m = i.mul(s, _);
                n[0] = i.sub(i.sub(i.square(g), p), i.add(m, m));
                const L = i.mul(d, p);
                return (
                  (n[1] = i.sub(i.mul(g, i.sub(m, n[0])), i.add(L, L))),
                  (n[2] = i.mul(
                    h,
                    i.sub(i.square(i.add(t[2], e[2])), i.add(o, a))
                  )),
                  n
                );
              }
              neg(t) {
                return [t[0], this.F.neg(t[1]), t[2]];
              }
              sub(t, e) {
                return this.add(t, this.neg(e));
              }
              double(t) {
                const e = this.F,
                  i = new Array(3);
                if (this.eq(t, this.zero)) return t;
                const n = e.square(t[0]),
                  o = e.square(t[1]),
                  a = e.square(o);
                let s = e.sub(e.square(e.add(t[0], o)), e.add(n, a));
                s = e.add(s, s);
                const r = e.add(e.add(n, n), n),
                  l = e.square(r);
                i[0] = e.sub(l, e.add(s, s));
                let c = e.add(a, a);
                (c = e.add(c, c)),
                  (c = e.add(c, c)),
                  (i[1] = e.sub(e.mul(r, e.sub(s, i[0])), c));
                const d = e.mul(t[1], t[2]);
                return (i[2] = e.add(d, d)), i;
              }
              timesScalar(t, e) {
                return V(this, t, e);
              }
              mulScalar(t, e) {
                return V(this, t, e);
              }
              affine(t) {
                const e = this.F;
                if (this.isZero(t)) return this.zero;
                if (e.eq(t[2], e.one)) return t;
                {
                  const i = e.inv(t[2]),
                    n = e.square(i),
                    o = e.mul(n, i),
                    a = new Array(3);
                  return (
                    (a[0] = e.mul(t[0], n)),
                    (a[1] = e.mul(t[1], o)),
                    (a[2] = e.one),
                    a
                  );
                }
              }
              multiAffine(t) {
                const e = Object.keys(t),
                  i = this.F,
                  n = new Array(e.length + 1);
                n[0] = i.one;
                for (let o = 0; o < e.length; o++)
                  i.eq(t[e[o]][2], i.zero)
                    ? (n[o + 1] = n[o])
                    : (n[o + 1] = i.mul(n[o], t[e[o]][2]));
                n[e.length] = i.inv(n[e.length]);
                for (let o = e.length - 1; o >= 0; o--)
                  if (i.eq(t[e[o]][2], i.zero))
                    (n[o] = n[o + 1]), (t[e[o]] = this.zero);
                  else {
                    const a = i.mul(n[o], n[o + 1]);
                    n[o] = i.mul(t[e[o]][2], n[o + 1]);
                    const s = i.square(a),
                      r = i.mul(s, a);
                    (t[e[o]][0] = i.mul(t[e[o]][0], s)),
                      (t[e[o]][1] = i.mul(t[e[o]][1], r)),
                      (t[e[o]][2] = i.one);
                  }
              }
              eq(t, e) {
                const i = this.F;
                if (this.F.eq(t[2], this.F.zero))
                  return this.F.eq(e[2], this.F.zero);
                if (this.F.eq(e[2], this.F.zero)) return !1;
                const n = i.square(t[2]),
                  o = i.square(e[2]),
                  a = i.mul(t[0], o),
                  s = i.mul(e[0], n),
                  r = i.mul(t[2], n),
                  l = i.mul(e[2], o),
                  c = i.mul(t[1], l),
                  d = i.mul(e[1], r);
                return i.eq(a, s) && i.eq(c, d);
              }
              isZero(t) {
                return this.F.isZero(t[2]);
              }
              toString(t) {
                const e = this.affine(t);
                return `[ ${this.F.toString(e[0])} , ${this.F.toString(e[1])} ]`;
              }
              fromRng(t) {
                const e = this.F;
                let i,
                  n = [];
                do {
                  (n[0] = e.fromRng(t)), (i = t.nextBool());
                  const o = e.add(e.mul(e.square(n[0]), n[0]), this.b);
                  n[1] = e.sqrt(o);
                } while (null == n[1] || e.isZero[n]);
                return (
                  i ^ st(e, n[1]) && (n[1] = e.neg(n[1])),
                  (n[2] = e.one),
                  this.cofactor && (n = this.mulScalar(n, this.cofactor)),
                  (n = this.affine(n)),
                  n
                );
              }
              toRprLE(t, e, i) {
                (i = this.affine(i)),
                  this.isZero(i)
                    ? new Uint8Array(t, e, 2 * this.F.n8).fill(0)
                    : (this.F.toRprLE(t, e, i[0]),
                      this.F.toRprLE(t, e + this.F.n8, i[1]));
              }
              toRprBE(t, e, i) {
                (i = this.affine(i)),
                  this.isZero(i)
                    ? new Uint8Array(t, e, 2 * this.F.n8).fill(0)
                    : (this.F.toRprBE(t, e, i[0]),
                      this.F.toRprBE(t, e + this.F.n8, i[1]));
              }
              toRprLEM(t, e, i) {
                (i = this.affine(i)),
                  this.isZero(i)
                    ? new Uint8Array(t, e, 2 * this.F.n8).fill(0)
                    : (this.F.toRprLEM(t, e, i[0]),
                      this.F.toRprLEM(t, e + this.F.n8, i[1]));
              }
              toRprLEJM(t, e, i) {
                (i = this.affine(i)),
                  this.isZero(i)
                    ? new Uint8Array(t, e, 2 * this.F.n8).fill(0)
                    : (this.F.toRprLEM(t, e, i[0]),
                      this.F.toRprLEM(t, e + this.F.n8, i[1]),
                      this.F.toRprLEM(t, e + 2 * this.F.n8, i[2]));
              }
              toRprBEM(t, e, i) {
                (i = this.affine(i)),
                  this.isZero(i)
                    ? new Uint8Array(t, e, 2 * this.F.n8).fill(0)
                    : (this.F.toRprBEM(t, e, i[0]),
                      this.F.toRprBEM(t, e + this.F.n8, i[1]));
              }
              fromRprLE(t, e) {
                e = e || 0;
                const i = this.F.fromRprLE(t, e),
                  n = this.F.fromRprLE(t, e + this.F.n8);
                return this.F.isZero(i) && this.F.isZero(n)
                  ? this.zero
                  : [i, n, this.F.one];
              }
              fromRprBE(t, e) {
                e = e || 0;
                const i = this.F.fromRprBE(t, e),
                  n = this.F.fromRprBE(t, e + this.F.n8);
                return this.F.isZero(i) && this.F.isZero(n)
                  ? this.zero
                  : [i, n, this.F.one];
              }
              fromRprLEM(t, e) {
                e = e || 0;
                const i = this.F.fromRprLEM(t, e),
                  n = this.F.fromRprLEM(t, e + this.F.n8);
                return this.F.isZero(i) && this.F.isZero(n)
                  ? this.zero
                  : [i, n, this.F.one];
              }
              fromRprLEJM(t, e) {
                e = e || 0;
                const i = this.F.fromRprLEM(t, e),
                  n = this.F.fromRprLEM(t, e + this.F.n8),
                  o = this.F.fromRprLEM(t, e + 2 * this.F.n8);
                return this.F.isZero(i) && this.F.isZero(n)
                  ? this.zero
                  : [i, n, o];
              }
              fromRprBEM(t, e) {
                e = e || 0;
                const i = this.F.fromRprBEM(t, e),
                  n = this.F.fromRprBEM(t, e + this.F.n8);
                return this.F.isZero(i) && this.F.isZero(n)
                  ? this.zero
                  : [i, n, this.F.one];
              }
              fromRprCompressed(t, e) {
                const i = this.F,
                  n = new Uint8Array(t.buffer, e, i.n8);
                if (64 & n[0]) return this.zero;
                const o = new Array(3),
                  a = !!(128 & n[0]);
                (n[0] = 127 & n[0]),
                  (o[0] = i.fromRprBE(t, e)),
                  a && (n[0] = 128 | n[0]);
                const s = i.add(i.mul(i.square(o[0]), o[0]), this.b);
                if (((o[1] = i.sqrt(s)), null === o[1]))
                  throw new Error("Invalid Point!");
                return (
                  a ^ st(i, o[1]) && (o[1] = i.neg(o[1])), (o[2] = i.one), o
                );
              }
              toRprCompressed(t, e, i) {
                i = this.affine(i);
                const n = new Uint8Array(t.buffer, e, this.F.n8);
                if (this.isZero(i)) return n.fill(0), void (n[0] = 64);
                this.F.toRprBE(t, e, i[0]),
                  st(this.F, i[1]) && (n[0] = 128 | n[0]);
              }
              fromRprUncompressed(t, e) {
                return 64 & t[0] ? this.zero : this.fromRprBE(t, e);
              }
              toRprUncompressed(t, e, i) {
                this.toRprBE(t, e, i), this.isZero(i) && (t[e] = 64 | t[e]);
              }
            }),
            (e.F1Field = at),
            (e.F2Field = class {
              constructor(t, e) {
                (this.type = "F2"),
                  (this.F = t),
                  (this.zero = [this.F.zero, this.F.zero]),
                  (this.one = [this.F.one, this.F.zero]),
                  (this.negone = this.neg(this.one)),
                  (this.nonResidue = e),
                  (this.m = 2 * t.m),
                  (this.p = t.p),
                  (this.n64 = 2 * t.n64),
                  (this.n32 = 2 * this.n64),
                  (this.n8 = 8 * this.n64),
                  X(this);
              }
              _mulByNonResidue(t) {
                return this.F.mul(this.nonResidue, t);
              }
              copy(t) {
                return [this.F.copy(t[0]), this.F.copy(t[1])];
              }
              add(t, e) {
                return [this.F.add(t[0], e[0]), this.F.add(t[1], e[1])];
              }
              double(t) {
                return this.add(t, t);
              }
              sub(t, e) {
                return [this.F.sub(t[0], e[0]), this.F.sub(t[1], e[1])];
              }
              neg(t) {
                return this.sub(this.zero, t);
              }
              conjugate(t) {
                return [t[0], this.F.neg(t[1])];
              }
              mul(t, e) {
                const i = this.F.mul(t[0], e[0]),
                  n = this.F.mul(t[1], e[1]);
                return [
                  this.F.add(i, this._mulByNonResidue(n)),
                  this.F.sub(
                    this.F.mul(this.F.add(t[0], t[1]), this.F.add(e[0], e[1])),
                    this.F.add(i, n)
                  ),
                ];
              }
              inv(t) {
                const e = this.F.square(t[0]),
                  i = this.F.square(t[1]),
                  n = this.F.sub(e, this._mulByNonResidue(i)),
                  o = this.F.inv(n);
                return [this.F.mul(t[0], o), this.F.neg(this.F.mul(t[1], o))];
              }
              div(t, e) {
                return this.mul(t, this.inv(e));
              }
              square(t) {
                const e = this.F.mul(t[0], t[1]);
                return [
                  this.F.sub(
                    this.F.mul(
                      this.F.add(t[0], t[1]),
                      this.F.add(t[0], this._mulByNonResidue(t[1]))
                    ),
                    this.F.add(e, this._mulByNonResidue(e))
                  ),
                  this.F.add(e, e),
                ];
              }
              isZero(t) {
                return this.F.isZero(t[0]) && this.F.isZero(t[1]);
              }
              eq(t, e) {
                return this.F.eq(t[0], e[0]) && this.F.eq(t[1], e[1]);
              }
              mulScalar(t, e) {
                return V(this, t, e);
              }
              pow(t, e) {
                return Q(this, t, e);
              }
              exp(t, e) {
                return Q(this, t, e);
              }
              toString(t) {
                return `[ ${this.F.toString(t[0])} , ${this.F.toString(t[1])} ]`;
              }
              fromRng(t) {
                return [this.F.fromRng(t), this.F.fromRng(t)];
              }
              gt(t, e) {
                return (
                  !!this.F.gt(t[0], e[0]) ||
                  (!this.F.gt(e[0], t[0]) && !!this.F.gt(t[1], e[1]))
                );
              }
              geq(t, e) {
                return this.gt(t, e) || this.eq(t, e);
              }
              lt(t, e) {
                return !this.geq(t, e);
              }
              leq(t, e) {
                return !this.gt(t, e);
              }
              neq(t, e) {
                return !this.eq(t, e);
              }
              random() {
                return [this.F.random(), this.F.random()];
              }
              toRprLE(t, e, i) {
                this.F.toRprLE(t, e, i[0]),
                  this.F.toRprLE(t, e + this.F.n8, i[1]);
              }
              toRprBE(t, e, i) {
                this.F.toRprBE(t, e, i[1]),
                  this.F.toRprBE(t, e + this.F.n8, i[0]);
              }
              toRprLEM(t, e, i) {
                this.F.toRprLEM(t, e, i[0]),
                  this.F.toRprLEM(t, e + this.F.n8, i[1]);
              }
              toRprBEM(t, e, i) {
                this.F.toRprBEM(t, e, i[1]),
                  this.F.toRprBEM(t, e + this.F.n8, i[0]);
              }
              fromRprLE(t, e) {
                return (
                  (e = e || 0),
                  [this.F.fromRprLE(t, e), this.F.fromRprLE(t, e + this.F.n8)]
                );
              }
              fromRprBE(t, e) {
                e = e || 0;
                const i = this.F.fromRprBE(t, e);
                return [this.F.fromRprBE(t, e + this.F.n8), i];
              }
              fromRprLEM(t, e) {
                return (
                  (e = e || 0),
                  [this.F.fromRprLEM(t, e), this.F.fromRprLEM(t, e + this.F.n8)]
                );
              }
              fromRprBEM(t, e) {
                e = e || 0;
                const i = this.F.fromRprBEM(t, e);
                return [this.F.fromRprBEM(t, e + this.F.n8), i];
              }
              toObject(t) {
                return t;
              }
            }),
            (e.F3Field = class {
              constructor(t, e) {
                (this.type = "F3"),
                  (this.F = t),
                  (this.zero = [this.F.zero, this.F.zero, this.F.zero]),
                  (this.one = [this.F.one, this.F.zero, this.F.zero]),
                  (this.negone = this.neg(this.one)),
                  (this.nonResidue = e),
                  (this.m = 3 * t.m),
                  (this.p = t.p),
                  (this.n64 = 3 * t.n64),
                  (this.n32 = 2 * this.n64),
                  (this.n8 = 8 * this.n64);
              }
              _mulByNonResidue(t) {
                return this.F.mul(this.nonResidue, t);
              }
              copy(t) {
                return [
                  this.F.copy(t[0]),
                  this.F.copy(t[1]),
                  this.F.copy(t[2]),
                ];
              }
              add(t, e) {
                return [
                  this.F.add(t[0], e[0]),
                  this.F.add(t[1], e[1]),
                  this.F.add(t[2], e[2]),
                ];
              }
              double(t) {
                return this.add(t, t);
              }
              sub(t, e) {
                return [
                  this.F.sub(t[0], e[0]),
                  this.F.sub(t[1], e[1]),
                  this.F.sub(t[2], e[2]),
                ];
              }
              neg(t) {
                return this.sub(this.zero, t);
              }
              mul(t, e) {
                const i = this.F.mul(t[0], e[0]),
                  n = this.F.mul(t[1], e[1]),
                  o = this.F.mul(t[2], e[2]);
                return [
                  this.F.add(
                    i,
                    this._mulByNonResidue(
                      this.F.sub(
                        this.F.mul(
                          this.F.add(t[1], t[2]),
                          this.F.add(e[1], e[2])
                        ),
                        this.F.add(n, o)
                      )
                    )
                  ),
                  this.F.add(
                    this.F.sub(
                      this.F.mul(
                        this.F.add(t[0], t[1]),
                        this.F.add(e[0], e[1])
                      ),
                      this.F.add(i, n)
                    ),
                    this._mulByNonResidue(o)
                  ),
                  this.F.add(
                    this.F.sub(
                      this.F.mul(
                        this.F.add(t[0], t[2]),
                        this.F.add(e[0], e[2])
                      ),
                      this.F.add(i, o)
                    ),
                    n
                  ),
                ];
              }
              inv(t) {
                const e = this.F.square(t[0]),
                  i = this.F.square(t[1]),
                  n = this.F.square(t[2]),
                  o = this.F.mul(t[0], t[1]),
                  a = this.F.mul(t[0], t[2]),
                  s = this.F.mul(t[1], t[2]),
                  r = this.F.sub(e, this._mulByNonResidue(s)),
                  l = this.F.sub(this._mulByNonResidue(n), o),
                  c = this.F.sub(i, a),
                  d = this.F.inv(
                    this.F.add(
                      this.F.mul(t[0], r),
                      this._mulByNonResidue(
                        this.F.add(this.F.mul(t[2], l), this.F.mul(t[1], c))
                      )
                    )
                  );
                return [this.F.mul(d, r), this.F.mul(d, l), this.F.mul(d, c)];
              }
              div(t, e) {
                return this.mul(t, this.inv(e));
              }
              square(t) {
                const e = this.F.square(t[0]),
                  i = this.F.mul(t[0], t[1]),
                  n = this.F.add(i, i),
                  o = this.F.square(this.F.add(this.F.sub(t[0], t[1]), t[2])),
                  a = this.F.mul(t[1], t[2]),
                  s = this.F.add(a, a),
                  r = this.F.square(t[2]);
                return [
                  this.F.add(e, this._mulByNonResidue(s)),
                  this.F.add(n, this._mulByNonResidue(r)),
                  this.F.sub(this.F.add(this.F.add(n, o), s), this.F.add(e, r)),
                ];
              }
              isZero(t) {
                return (
                  this.F.isZero(t[0]) &&
                  this.F.isZero(t[1]) &&
                  this.F.isZero(t[2])
                );
              }
              eq(t, e) {
                return (
                  this.F.eq(t[0], e[0]) &&
                  this.F.eq(t[1], e[1]) &&
                  this.F.eq(t[2], e[2])
                );
              }
              affine(t) {
                return [
                  this.F.affine(t[0]),
                  this.F.affine(t[1]),
                  this.F.affine(t[2]),
                ];
              }
              mulScalar(t, e) {
                return V(this, t, e);
              }
              pow(t, e) {
                return Q(this, t, e);
              }
              exp(t, e) {
                return Q(this, t, e);
              }
              toString(t) {
                return `[ ${this.F.toString(t[0])} , ${this.F.toString(t[1])}, ${this.F.toString(t[2])} ]`;
              }
              fromRng(t) {
                return [
                  this.F.fromRng(t),
                  this.F.fromRng(t),
                  this.F.fromRng(t),
                ];
              }
              gt(t, e) {
                return (
                  !!this.F.gt(t[0], e[0]) ||
                  (!this.F.gt(e[0], t[0]) &&
                    (!!this.F.gt(t[1], e[1]) ||
                      (!this.F.gt(e[1], t[1]) && !!this.F.gt(t[2], e[2]))))
                );
              }
              geq(t, e) {
                return this.gt(t, e) || this.eq(t, e);
              }
              lt(t, e) {
                return !this.geq(t, e);
              }
              leq(t, e) {
                return !this.gt(t, e);
              }
              neq(t, e) {
                return !this.eq(t, e);
              }
              random() {
                return [this.F.random(), this.F.random(), this.F.random()];
              }
              toRprLE(t, e, i) {
                this.F.toRprLE(t, e, i[0]),
                  this.F.toRprLE(t, e + this.F.n8, i[1]),
                  this.F.toRprLE(t, e + 2 * this.F.n8, i[2]);
              }
              toRprBE(t, e, i) {
                this.F.toRprBE(t, e, i[2]),
                  this.F.toRprBE(t, e + this.F.n8, i[1]),
                  this.F.toRprBE(t, e + 2 * this.F.n8, i[0]);
              }
              toRprLEM(t, e, i) {
                this.F.toRprLEM(t, e, i[0]),
                  this.F.toRprLEM(t, e + this.F.n8, i[1]),
                  this.F.toRprLEM(t, e + 2 * this.F.n8, i[2]);
              }
              toRprBEM(t, e, i) {
                this.F.toRprBEM(t, e, i[2]),
                  this.F.toRprBEM(t, e + this.F.n8, i[1]),
                  this.F.toRprBEM(t, e + 2 * this.F.n8, i[0]);
              }
              fromRprLE(t, e) {
                return (
                  (e = e || 0),
                  [
                    this.F.fromRprLE(t, e),
                    this.F.fromRprLE(t, e + this.n8),
                    this.F.fromRprLE(t, e + 2 * this.n8),
                  ]
                );
              }
              fromRprBE(t, e) {
                e = e || 0;
                const i = this.F.fromRprBE(t, e),
                  n = this.F.fromRprBE(t, e + this.n8);
                return [this.F.fromRprBE(t, e + 2 * this.n8), n, i];
              }
              fromRprLEM(t, e) {
                return (
                  (e = e || 0),
                  [
                    this.F.fromRprLEM(t, e),
                    this.F.fromRprLEM(t, e + this.n8),
                    this.F.fromRprLEM(t, e + 2 * this.n8),
                  ]
                );
              }
              fromRprBEM(t, e) {
                e = e || 0;
                const i = this.F.fromRprBEM(t, e),
                  n = this.F.fromRprBEM(t, e + this.n8);
                return [this.F.fromRprBEM(t, e + 2 * this.n8), n, i];
              }
              toObject(t) {
                return t;
              }
            }),
            (e.PolField = class {
              constructor(t) {
                this.F = t;
                let e = t.sqrt_t,
                  i = t.sqrt_s;
                const n = this.F.add(
                  this.F.add(this.F.two, this.F.two),
                  this.F.one
                );
                (this.w = new Array(i + 1)),
                  (this.wi = new Array(i + 1)),
                  (this.w[i] = this.F.pow(n, e)),
                  (this.wi[i] = this.F.inv(this.w[i]));
                let o = i - 1;
                for (; o >= 0; )
                  (this.w[o] = this.F.square(this.w[o + 1])),
                    (this.wi[o] = this.F.square(this.wi[o + 1])),
                    o--;
                (this.roots = []), this._setRoots(15);
              }
              _setRoots(t) {
                t > this.F.sqrt_s && (t = this.s);
                for (let e = t; e >= 0 && !this.roots[e]; e--) {
                  let t = this.F.one;
                  const i = 1 << e,
                    n = new Array(i);
                  for (let o = 0; o < i; o++)
                    (n[o] = t), (t = this.F.mul(t, this.w[e]));
                  this.roots[e] = n;
                }
              }
              add(t, e) {
                const i = Math.max(t.length, e.length),
                  n = new Array(i);
                for (let o = 0; o < i; o++)
                  n[o] = this.F.add(t[o] || this.F.zero, e[o] || this.F.zero);
                return this.reduce(n);
              }
              double(t) {
                return this.add(t, t);
              }
              sub(t, e) {
                const i = Math.max(t.length, e.length),
                  n = new Array(i);
                for (let o = 0; o < i; o++)
                  n[o] = this.F.sub(t[o] || this.F.zero, e[o] || this.F.zero);
                return this.reduce(n);
              }
              mulScalar(t, e) {
                if (this.F.eq(e, this.F.zero)) return [];
                if (this.F.eq(e, this.F.one)) return t;
                const i = new Array(t.length);
                for (let n = 0; n < t.length; n++) i[n] = this.F.mul(t[n], e);
                return i;
              }
              mul(t, e) {
                return 0 == t.length || 0 == e.length
                  ? []
                  : 1 == t.length
                    ? this.mulScalar(e, t[0])
                    : 1 == e.length
                      ? this.mulScalar(t, e[0])
                      : (e.length > t.length && ([e, t] = [t, e]),
                        e.length <= 2 || e.length < j(t.length)
                          ? this.mulNormal(t, e)
                          : this.mulFFT(t, e));
              }
              mulNormal(t, e) {
                let i = [];
                for (let n = 0; n < e.length; n++)
                  i = this.add(i, this.scaleX(this.mulScalar(t, e[n]), n));
                return i;
              }
              mulFFT(t, e) {
                const i = j(Math.max(t.length, e.length) - 1) + 2;
                this._setRoots(i);
                const n = 1 << i,
                  o = this.extend(t, n),
                  a = this.extend(e, n),
                  s = k(this, o, i, 0, 1),
                  r = k(this, a, i, 0, 1),
                  l = new Array(n);
                for (let t = 0; t < n; t++) l[t] = this.F.mul(s[t], r[t]);
                const c = k(this, l, i, 0, 1),
                  d = this.F.inv(this.F.mulScalar(this.F.one, n)),
                  u = new Array(n);
                for (let t = 0; t < n; t++)
                  u[t] = this.F.mul(c[(n - t) % n], d);
                return this.reduce(u);
              }
              square(t) {
                return this.mul(t, t);
              }
              scaleX(t, e) {
                return 0 == e
                  ? t
                  : e > 0
                    ? new Array(e).fill(this.F.zero).concat(t)
                    : -e >= t.length
                      ? []
                      : t.slice(-e);
              }
              eval2(t, e) {
                let i = this.F.zero,
                  n = this.F.one;
                for (let o = 0; o < t.length; o++)
                  (i = this.F.add(i, this.F.mul(t[o], n))),
                    (n = this.F.mul(n, e));
                return i;
              }
              eval(t, e) {
                const i = this.F;
                if (0 == t.length) return i.zero;
                const n = this._next2Power(t.length);
                return (function t(e, n, o, a, s) {
                  if (1 == s) return e[o];
                  const r = i.square(n);
                  return i.add(
                    t(e, r, o, a << 1, s >> 1),
                    i.mul(n, t(e, r, o + a, a << 1, s >> 1))
                  );
                })(this.extend(t, n), e, 0, 1, n);
              }
              lagrange(t) {
                let e = [this.F.one];
                for (let i = 0; i < t.length; i++)
                  e = this.mul(e, [this.F.neg(t[i][0]), this.F.one]);
                let i = [];
                for (let n = 0; n < t.length; n++) {
                  let o = this.ruffini(e, t[n][0]);
                  const a = this.F.mul(
                    this.F.inv(this.eval(o, t[n][0])),
                    t[n][1]
                  );
                  (o = this.mulScalar(o, a)), (i = this.add(i, o));
                }
                return i;
              }
              fft(t) {
                if (t.length <= 1) return t;
                const e = j(t.length - 1) + 1;
                this._setRoots(e);
                const i = 1 << e;
                return k(this, this.extend(t, i), e, 0, 1);
              }
              fft2(t) {
                if (t.length <= 1) return t;
                const e = j(t.length - 1) + 1;
                this._setRoots(e);
                const i = 1 << e,
                  n = this.extend(t, i);
                return J(n, e), $(this, n, e);
              }
              ifft(t) {
                if (t.length <= 1) return t;
                const e = j(t.length - 1) + 1;
                this._setRoots(e);
                const i = 1 << e,
                  n = k(this, this.extend(t, i), e, 0, 1),
                  o = this.F.inv(this.F.mulScalar(this.F.one, i)),
                  a = new Array(i);
                for (let t = 0; t < i; t++)
                  a[t] = this.F.mul(n[(i - t) % i], o);
                return a;
              }
              ifft2(t) {
                if (t.length <= 1) return t;
                const e = j(t.length - 1) + 1;
                this._setRoots(e);
                const i = 1 << e,
                  n = this.extend(t, i);
                J(n, e);
                const o = $(this, n, e),
                  a = this.F.inv(this.F.mulScalar(this.F.one, i)),
                  s = new Array(i);
                for (let t = 0; t < i; t++)
                  s[t] = this.F.mul(o[(i - t) % i], a);
                return s;
              }
              _fft(t, e, i, n) {
                const o = 1 << e;
                if (1 == o) return [t[i]];
                const a = o >> 1,
                  s = this._fft(t, e - 1, i, 2 * n),
                  r = this._fft(t, e - 1, i + n, 2 * n),
                  l = new Array(o);
                let c = this.F.one;
                for (let t = 0; t < a; t++)
                  (l[t] = this.F.add(s[t], this.F.mul(c, r[t]))),
                    (l[t + a] = this.F.sub(s[t], this.F.mul(c, r[t]))),
                    (c = this.F.mul(c, this.w[e]));
                return l;
              }
              extend(t, e) {
                if (e == t.length) return t;
                const i = new Array(e - t.length).fill(this.F.zero);
                return t.concat(i);
              }
              reduce(t) {
                if (0 == t.length) return t;
                if (!this.F.eq(t[t.length - 1], this.F.zero)) return t;
                let e = t.length - 1;
                for (; e > 0 && this.F.eq(t[e], this.F.zero); ) e--;
                return t.slice(0, e + 1);
              }
              eq(t, e) {
                const i = this.reduce(t),
                  n = this.reduce(e);
                if (i.length != n.length) return !1;
                for (let t = 0; t < n.length; t++)
                  if (!this.F.eq(i[t], n[t])) return !1;
                return !0;
              }
              ruffini(t, e) {
                const i = new Array(t.length - 1);
                i[i.length - 1] = t[t.length - 1];
                for (let n = i.length - 2; n >= 0; n--)
                  i[n] = this.F.add(this.F.mul(i[n + 1], e), t[n + 1]);
                return i;
              }
              _next2Power(t) {
                return (
                  t--,
                  (t |= t >> 1),
                  (t |= t >> 2),
                  (t |= t >> 4),
                  (t |= t >> 8),
                  (t |= t >> 16),
                  ++t
                );
              }
              toString(t) {
                let e = "";
                for (let i = this.normalize(t).length - 1; i >= 0; i--)
                  this.F.eq(t[i], this.F.zero) ||
                    ("" != e && (e += " + "),
                    (e += t[i].toString(10)),
                    i > 0 && ((e += "x"), i > 1 && (e = e + "^" + i)));
                return e;
              }
              normalize(t) {
                const e = new Array(t.length);
                for (let i = 0; i < t.length; i++)
                  e[i] = this.F.normalize(t[i]);
                return e;
              }
              _reciprocal(t, e) {
                const i = 1 << e;
                if (1 == i) return [this.F.inv(t[0])];
                const n = this.scaleX(t, -i / 2),
                  o = this._reciprocal(n, e - 1),
                  a = this.scaleX(this.double(o), (3 * i) / 2 - 2),
                  s = this.mul(this.square(o), t);
                return this.scaleX(this.sub(a, s), -(i - 2));
              }
              _div2(t, e) {
                const i = j(e.length - 1) + 1,
                  n = 1 << i,
                  o = n - e.length,
                  a = this._reciprocal(this.scaleX(e, o), i);
                return this.scaleX(a, t - 2 * n + 2 + o);
              }
              div(t, e) {
                if (t.length < e.length) return [];
                const i = j(e.length - 1) + 1,
                  n = 1 << i,
                  o = this.scaleX(t, n - e.length),
                  a = this.scaleX(e, n - e.length),
                  s = a.length - 1;
                let r = o.length - 1;
                const l = this._reciprocal(a, i);
                let c;
                r > 2 * s &&
                  (c = this.sub(
                    this.scaleX([this.F.one], 2 * s),
                    this.mul(l, a)
                  ));
                let d,
                  u,
                  h = [],
                  f = o,
                  _ = !1;
                for (; !_; )
                  (d = this.mul(f, l)),
                    (h = this.add(h, this.scaleX(d, -2 * s))),
                    r > 2 * s
                      ? ((u = this.mul(f, c)),
                        (f = this.scaleX(u, -2 * s)),
                        (r = f.length - 1))
                      : (_ = !0);
                return h;
              }
              oneRoot(t, e) {
                let i = j(t - 1) + 1,
                  n = this.F.one,
                  o = e;
                if (e >= t)
                  throw new Error("Given 'i' should be lower than 'n'");
                if (1 << i !== t)
                  throw new Error(
                    `Internal errlr: ${t} should equal ${1 << i}`
                  );
                for (; o > 0; )
                  !0 & o && (n = this.F.mul(n, this.w[i])), (o >>= 1), i--;
                return n;
              }
              computeVanishingPolinomial(t, e) {
                const i = 1 << t;
                return this.F.sub(this.F.pow(e, i), this.F.one);
              }
              evaluateLagrangePolynomials(t, e) {
                const i = 1 << t,
                  n = this.F.pow(e, i),
                  o = new Array(i).fill(this.F.zero);
                this._setRoots(t);
                const a = this.w[t];
                if (this.F.eq(n, this.F.one))
                  for (let n = 0; n < i; n++)
                    if (this.F.eq(this.roots[t][0], e))
                      return (o[n] = this.F.one), o;
                const s = this.F.sub(n, this.F.one);
                let r = this.F.mul(s, this.F.inv(this.F.e(i)));
                for (let n = 0; n < i; n++)
                  (o[n] = this.F.mul(
                    r,
                    this.F.inv(this.F.sub(e, this.roots[t][n]))
                  )),
                    (r = this.F.mul(r, a));
                return o;
              }
              log2(t) {
                return j(t);
              }
            }),
            (e.Scalar = Gt),
            (e.ZqField = at),
            (e.buildBls12381 = Mt),
            (e.buildBn128 = zt),
            (e.getCurveFromName = async function (t, e, i) {
              let n;
              const o = t
                .toUpperCase()
                .match(/[A-Za-z0-9]+/g)
                .join("");
              if (["BN128", "BN254", "ALTBN128"].indexOf(o) >= 0)
                n = await zt(e, i);
              else {
                if (!(["BLS12381"].indexOf(o) >= 0))
                  throw new Error(`Curve not supported: ${t}`);
                n = await Mt(e, i);
              }
              return n;
            }),
            (e.getCurveFromQ = async function (t, e, i) {
              let n;
              if (A(t, Ut)) n = await zt(e, i);
              else {
                if (!A(t, Nt))
                  throw new Error(`Curve not supported: ${R(t, 16)}`);
                n = await Mt(e, i);
              }
              return n;
            }),
            (e.getCurveFromR = async function (t, e, i) {
              let n;
              if (A(t, Tt)) n = await zt(e, i);
              else {
                if (!A(t, Rt)) throw new Error(`Curve not supported: ${R(t)}`);
                n = await Mt(e, i);
              }
              return n;
            }),
            (e.utils = jt);
        },
        14: (t, e) => {
          "use strict";
          function i(t) {
            return BigInt(t);
          }
          function n(t) {
            return t < 0n;
          }
          function o(t) {
            return 0n === t;
          }
          function a(t) {
            const e = [],
              n = i(t);
            return (
              e.push(Number(0xffn & n)),
              e.push(Number((n >> 8n) & 0xffn)),
              e.push(Number((n >> 16n) & 0xffn)),
              e.push(Number((n >> 24n) & 0xffn)),
              e
            );
          }
          function s(t) {
            const e = (function (t) {
              for (var e = [], i = 0; i < t.length; i++) {
                var n = t.charCodeAt(i);
                n < 128
                  ? e.push(n)
                  : n < 2048
                    ? e.push(192 | (n >> 6), 128 | (63 & n))
                    : n < 55296 || n >= 57344
                      ? e.push(
                          224 | (n >> 12),
                          128 | ((n >> 6) & 63),
                          128 | (63 & n)
                        )
                      : (i++,
                        (n =
                          65536 +
                          (((1023 & n) << 10) | (1023 & t.charCodeAt(i)))),
                        e.push(
                          240 | (n >> 18),
                          128 | ((n >> 12) & 63),
                          128 | ((n >> 6) & 63),
                          128 | (63 & n)
                        ));
              }
              return e;
            })(t);
            return [...u(e.length), ...e];
          }
          function r(t) {
            const e = [];
            let a = i(t);
            if (n(a)) throw new Error("Number cannot be negative");
            for (; !o(a); ) e.push(Number(0x7fn & a)), (a >>= 7n);
            0 == e.length && e.push(0);
            for (let t = 0; t < e.length - 1; t++) e[t] = 128 | e[t];
            return e;
          }
          function l(t) {
            let e, o;
            const a = (function (t) {
              return n(t) ? t.toString(2).length - 1 : t.toString(2).length;
            })(t);
            t < 0
              ? ((o = !0), (e = (1n << BigInt(a)) + t))
              : ((o = !1), (e = i(t)));
            const s = 7 - (a % 7),
              l = ((1 << (7 - s)) - 1) | 128,
              c = r(e + (((1n << BigInt(s)) - 1n) << BigInt(a)));
            return o || (c[c.length - 1] = c[c.length - 1] & l), c;
          }
          function c(t) {
            let e = i(t);
            if (e > 0xffffffffn) throw new Error("Number too big");
            if ((e > 0x7fffffffn && (e -= 0x100000000n), e < -2147483648n))
              throw new Error("Number too small");
            return l(e);
          }
          function d(t) {
            let e = i(t);
            if (e > 0xffffffffffffffffn) throw new Error("Number too big");
            if (
              (e > 0x7fffffffffffffffn && (e -= 0x10000000000000000n),
              e < -9223372036854775808n)
            )
              throw new Error("Number too small");
            return l(e);
          }
          function u(t) {
            let e = i(t);
            if (e > 0xffffffffn) throw new Error("Number too big");
            return r(e);
          }
          function h(t) {
            return Array.from(t, function (t) {
              return ("0" + (255 & t).toString(16)).slice(-2);
            }).join("");
          }
          function f(t) {
            if ("string" == typeof t) {
              let e = t.split("\n");
              for (let t = 0; t < e.length; t++) e[t] && (e[t] = "    " + e[t]);
              return e.join("\n");
            }
            if (Array.isArray(t)) {
              for (let e = 0; e < t.length; e++) t[e] = f(t[e]);
              return t;
            }
          }
          Object.defineProperty(e, "__esModule", { value: !0 });
          class _ {
            constructor(t) {
              (this.func = t),
                (this.functionName = t.functionName),
                (this.module = t.module);
            }
            setLocal(t, e) {
              const i = this.func.localIdxByName[t];
              if (void 0 === i)
                throw new Error(
                  `Local Variable not defined: Function: ${this.functionName} local: ${t} `
                );
              return [...e, 33, ...u(i)];
            }
            teeLocal(t, e) {
              const i = this.func.localIdxByName[t];
              if (void 0 === i)
                throw new Error(
                  `Local Variable not defined: Function: ${this.functionName} local: ${t} `
                );
              return [...e, 34, ...u(i)];
            }
            getLocal(t) {
              const e = this.func.localIdxByName[t];
              if (void 0 === e)
                throw new Error(
                  `Local Variable not defined: Function: ${this.functionName} local: ${t} `
                );
              return [32, ...u(e)];
            }
            i64_load8_s(t, e, i) {
              return [...t, 48, void 0 === i ? 0 : i, ...u(e || 0)];
            }
            i64_load8_u(t, e, i) {
              return [...t, 49, void 0 === i ? 0 : i, ...u(e || 0)];
            }
            i64_load16_s(t, e, i) {
              return [...t, 50, void 0 === i ? 1 : i, ...u(e || 0)];
            }
            i64_load16_u(t, e, i) {
              return [...t, 51, void 0 === i ? 1 : i, ...u(e || 0)];
            }
            i64_load32_s(t, e, i) {
              return [...t, 52, void 0 === i ? 2 : i, ...u(e || 0)];
            }
            i64_load32_u(t, e, i) {
              return [...t, 53, void 0 === i ? 2 : i, ...u(e || 0)];
            }
            i64_load(t, e, i) {
              return [...t, 41, void 0 === i ? 3 : i, ...u(e || 0)];
            }
            i64_store(t, e, i, n) {
              let o, a, s;
              return (
                Array.isArray(e)
                  ? ((o = 0), (a = 3), (s = e))
                  : Array.isArray(i)
                    ? ((o = e), (a = 3), (s = i))
                    : Array.isArray(n) && ((o = e), (a = i), (s = n)),
                [...t, ...s, 55, a, ...u(o)]
              );
            }
            i64_store32(t, e, i, n) {
              let o, a, s;
              return (
                Array.isArray(e)
                  ? ((o = 0), (a = 2), (s = e))
                  : Array.isArray(i)
                    ? ((o = e), (a = 2), (s = i))
                    : Array.isArray(n) && ((o = e), (a = i), (s = n)),
                [...t, ...s, 62, a, ...u(o)]
              );
            }
            i64_store16(t, e, i, n) {
              let o, a, s;
              return (
                Array.isArray(e)
                  ? ((o = 0), (a = 1), (s = e))
                  : Array.isArray(i)
                    ? ((o = e), (a = 1), (s = i))
                    : Array.isArray(n) && ((o = e), (a = i), (s = n)),
                [...t, ...s, 61, a, ...u(o)]
              );
            }
            i64_store8(t, e, i, n) {
              let o, a, s;
              return (
                Array.isArray(e)
                  ? ((o = 0), (a = 0), (s = e))
                  : Array.isArray(i)
                    ? ((o = e), (a = 0), (s = i))
                    : Array.isArray(n) && ((o = e), (a = i), (s = n)),
                [...t, ...s, 60, a, ...u(o)]
              );
            }
            i32_load8_s(t, e, i) {
              return [...t, 44, void 0 === i ? 0 : i, ...u(e || 0)];
            }
            i32_load8_u(t, e, i) {
              return [...t, 45, void 0 === i ? 0 : i, ...u(e || 0)];
            }
            i32_load16_s(t, e, i) {
              return [...t, 46, void 0 === i ? 1 : i, ...u(e || 0)];
            }
            i32_load16_u(t, e, i) {
              return [...t, 47, void 0 === i ? 1 : i, ...u(e || 0)];
            }
            i32_load(t, e, i) {
              return [...t, 40, void 0 === i ? 2 : i, ...u(e || 0)];
            }
            i32_store(t, e, i, n) {
              let o, a, s;
              return (
                Array.isArray(e)
                  ? ((o = 0), (a = 2), (s = e))
                  : Array.isArray(i)
                    ? ((o = e), (a = 2), (s = i))
                    : Array.isArray(n) && ((o = e), (a = i), (s = n)),
                [...t, ...s, 54, a, ...u(o)]
              );
            }
            i32_store16(t, e, i, n) {
              let o, a, s;
              return (
                Array.isArray(e)
                  ? ((o = 0), (a = 1), (s = e))
                  : Array.isArray(i)
                    ? ((o = e), (a = 1), (s = i))
                    : Array.isArray(n) && ((o = e), (a = i), (s = n)),
                [...t, ...s, 59, a, ...u(o)]
              );
            }
            i32_store8(t, e, i, n) {
              let o, a, s;
              return (
                Array.isArray(e)
                  ? ((o = 0), (a = 0), (s = e))
                  : Array.isArray(i)
                    ? ((o = e), (a = 0), (s = i))
                    : Array.isArray(n) && ((o = e), (a = i), (s = n)),
                [...t, ...s, 58, a, ...u(o)]
              );
            }
            call(t, ...e) {
              const i = this.module.functionIdxByName[t];
              if (void 0 === i)
                throw new Error(`Function not defined: Function: ${t}`);
              return [...[].concat(...e), 16, ...u(i)];
            }
            call_indirect(t, ...e) {
              return [...[].concat(...e), ...t, 17, 0, 0];
            }
            if(t, e, i) {
              return i
                ? [...t, 4, 64, ...e, 5, ...i, 11]
                : [...t, 4, 64, ...e, 11];
            }
            block(t) {
              return [2, 64, ...t, 11];
            }
            loop(...t) {
              return [3, 64, ...[].concat(...t), 11];
            }
            br_if(t, e) {
              return [...e, 13, ...u(t)];
            }
            br(t) {
              return [12, ...u(t)];
            }
            ret(t) {
              return [...t, 15];
            }
            drop(t) {
              return [...t, 26];
            }
            i64_const(t) {
              return [66, ...d(t)];
            }
            i32_const(t) {
              return [65, ...c(t)];
            }
            i64_eqz(t) {
              return [...t, 80];
            }
            i64_eq(t, e) {
              return [...t, ...e, 81];
            }
            i64_ne(t, e) {
              return [...t, ...e, 82];
            }
            i64_lt_s(t, e) {
              return [...t, ...e, 83];
            }
            i64_lt_u(t, e) {
              return [...t, ...e, 84];
            }
            i64_gt_s(t, e) {
              return [...t, ...e, 85];
            }
            i64_gt_u(t, e) {
              return [...t, ...e, 86];
            }
            i64_le_s(t, e) {
              return [...t, ...e, 87];
            }
            i64_le_u(t, e) {
              return [...t, ...e, 88];
            }
            i64_ge_s(t, e) {
              return [...t, ...e, 89];
            }
            i64_ge_u(t, e) {
              return [...t, ...e, 90];
            }
            i64_add(t, e) {
              return [...t, ...e, 124];
            }
            i64_sub(t, e) {
              return [...t, ...e, 125];
            }
            i64_mul(t, e) {
              return [...t, ...e, 126];
            }
            i64_div_s(t, e) {
              return [...t, ...e, 127];
            }
            i64_div_u(t, e) {
              return [...t, ...e, 128];
            }
            i64_rem_s(t, e) {
              return [...t, ...e, 129];
            }
            i64_rem_u(t, e) {
              return [...t, ...e, 130];
            }
            i64_and(t, e) {
              return [...t, ...e, 131];
            }
            i64_or(t, e) {
              return [...t, ...e, 132];
            }
            i64_xor(t, e) {
              return [...t, ...e, 133];
            }
            i64_shl(t, e) {
              return [...t, ...e, 134];
            }
            i64_shr_s(t, e) {
              return [...t, ...e, 135];
            }
            i64_shr_u(t, e) {
              return [...t, ...e, 136];
            }
            i64_extend_i32_s(t) {
              return [...t, 172];
            }
            i64_extend_i32_u(t) {
              return [...t, 173];
            }
            i64_clz(t) {
              return [...t, 121];
            }
            i64_ctz(t) {
              return [...t, 122];
            }
            i32_eqz(t) {
              return [...t, 69];
            }
            i32_eq(t, e) {
              return [...t, ...e, 70];
            }
            i32_ne(t, e) {
              return [...t, ...e, 71];
            }
            i32_lt_s(t, e) {
              return [...t, ...e, 72];
            }
            i32_lt_u(t, e) {
              return [...t, ...e, 73];
            }
            i32_gt_s(t, e) {
              return [...t, ...e, 74];
            }
            i32_gt_u(t, e) {
              return [...t, ...e, 75];
            }
            i32_le_s(t, e) {
              return [...t, ...e, 76];
            }
            i32_le_u(t, e) {
              return [...t, ...e, 77];
            }
            i32_ge_s(t, e) {
              return [...t, ...e, 78];
            }
            i32_ge_u(t, e) {
              return [...t, ...e, 79];
            }
            i32_add(t, e) {
              return [...t, ...e, 106];
            }
            i32_sub(t, e) {
              return [...t, ...e, 107];
            }
            i32_mul(t, e) {
              return [...t, ...e, 108];
            }
            i32_div_s(t, e) {
              return [...t, ...e, 109];
            }
            i32_div_u(t, e) {
              return [...t, ...e, 110];
            }
            i32_rem_s(t, e) {
              return [...t, ...e, 111];
            }
            i32_rem_u(t, e) {
              return [...t, ...e, 112];
            }
            i32_and(t, e) {
              return [...t, ...e, 113];
            }
            i32_or(t, e) {
              return [...t, ...e, 114];
            }
            i32_xor(t, e) {
              return [...t, ...e, 115];
            }
            i32_shl(t, e) {
              return [...t, ...e, 116];
            }
            i32_shr_s(t, e) {
              return [...t, ...e, 117];
            }
            i32_shr_u(t, e) {
              return [...t, ...e, 118];
            }
            i32_rotl(t, e) {
              return [...t, ...e, 119];
            }
            i32_rotr(t, e) {
              return [...t, ...e, 120];
            }
            i32_wrap_i64(t) {
              return [...t, 167];
            }
            i32_clz(t) {
              return [...t, 103];
            }
            i32_ctz(t) {
              return [...t, 104];
            }
            unreachable() {
              return [0];
            }
            current_memory() {
              return [63, 0];
            }
            comment() {
              return [];
            }
          }
          const p = {
            i32: 127,
            i64: 126,
            f32: 125,
            f64: 124,
            anyfunc: 112,
            func: 96,
            emptyblock: 64,
          };
          class g {
            constructor(t, e, i, n, o) {
              if ("import" == i)
                (this.fnType = "import"),
                  (this.moduleName = n),
                  (this.fieldName = o);
              else {
                if ("internal" != i)
                  throw new Error("Invalid function fnType: " + i);
                this.fnType = "internal";
              }
              (this.module = t),
                (this.fnName = e),
                (this.params = []),
                (this.locals = []),
                (this.localIdxByName = {}),
                (this.code = []),
                (this.returnType = null),
                (this.nextLocal = 0);
            }
            addParam(t, e) {
              if (this.localIdxByName[t])
                throw new Error(
                  `param already exists. Function: ${this.fnName}, Param: ${t} `
                );
              const i = this.nextLocal++;
              (this.localIdxByName[t] = i), this.params.push({ type: e });
            }
            addLocal(t, e, i) {
              const n = i || 1;
              if (this.localIdxByName[t])
                throw new Error(
                  `local already exists. Function: ${this.fnName}, Param: ${t} `
                );
              const o = this.nextLocal++;
              (this.localIdxByName[t] = o),
                this.locals.push({ type: e, length: n });
            }
            setReturnType(t) {
              if (this.returnType)
                throw new Error(
                  `returnType already defined. Function: ${this.fnName}`
                );
              this.returnType = t;
            }
            getSignature() {
              return [
                96,
                ...u(this.params.length),
                ...this.params.map((t) => p[t.type]),
                ...(this.returnType ? [1, p[this.returnType]] : [0]),
              ];
            }
            getBody() {
              const t = this.locals.map((t) => [...u(t.length), p[t.type]]),
                e = [
                  ...u(this.locals.length),
                  ...[].concat(...t),
                  ...this.code,
                  11,
                ];
              return [...u(e.length), ...e];
            }
            addCode(...t) {
              this.code.push(...[].concat(...t));
            }
            getCodeBuilder() {
              return new _(this);
            }
          }
          class m {
            constructor() {
              (this.functions = []),
                (this.functionIdxByName = {}),
                (this.nImportFunctions = 0),
                (this.nInternalFunctions = 0),
                (this.memory = {
                  pagesSize: 1,
                  moduleName: "env",
                  fieldName: "memory",
                }),
                (this.free = 8),
                (this.datas = []),
                (this.modules = {}),
                (this.exports = []),
                (this.functionsTable = []);
            }
            build() {
              return (
                this._setSignatures(),
                new Uint8Array([
                  ...a(1836278016),
                  ...a(1),
                  ...this._buildType(),
                  ...this._buildImport(),
                  ...this._buildFunctionDeclarations(),
                  ...this._buildFunctionsTable(),
                  ...this._buildExports(),
                  ...this._buildElements(),
                  ...this._buildCode(),
                  ...this._buildData(),
                ])
              );
            }
            addFunction(t) {
              if (void 0 !== this.functionIdxByName[t])
                throw new Error(`Function already defined: ${t}`);
              const e = this.functions.length;
              return (
                (this.functionIdxByName[t] = e),
                this.functions.push(new g(this, t, "internal")),
                this.nInternalFunctions++,
                this.functions[e]
              );
            }
            addIimportFunction(t, e, i) {
              if (void 0 !== this.functionIdxByName[t])
                throw new Error(`Function already defined: ${t}`);
              if (
                this.functions.length > 0 &&
                "internal" == this.functions[this.functions.length - 1].type
              )
                throw new Error(
                  `Import functions must be declared before internal: ${t}`
                );
              let n = i || t;
              const o = this.functions.length;
              return (
                (this.functionIdxByName[t] = o),
                this.functions.push(new g(this, t, "import", e, n)),
                this.nImportFunctions++,
                this.functions[o]
              );
            }
            setMemory(t, e, i) {
              this.memory = {
                pagesSize: t,
                moduleName: e || "env",
                fieldName: i || "memory",
              };
            }
            exportFunction(t, e) {
              const i = e || t;
              if (void 0 === this.functionIdxByName[t])
                throw new Error(`Function not defined: ${t}`);
              const n = this.functionIdxByName[t];
              i != t && (this.functionIdxByName[i] = n),
                this.exports.push({ exportName: i, idx: n });
            }
            addFunctionToTable(t) {
              const e = this.functionIdxByName[t];
              this.functionsTable.push(e);
            }
            addData(t, e) {
              this.datas.push({ offset: t, bytes: e });
            }
            alloc(t, e) {
              let i, n;
              (Array.isArray(t) || ArrayBuffer.isView(t)) && void 0 === e
                ? ((i = t.length), (n = t))
                : ((i = t), (n = e)),
                (i = (1 + ((i - 1) >> 3)) << 3);
              const o = this.free;
              return (this.free += i), n && this.addData(o, n), o;
            }
            allocString(t) {
              const e = new globalThis.TextEncoder().encode(t);
              return this.alloc([...e, 0]);
            }
            _setSignatures() {
              this.signatures = [];
              const t = {};
              if (this.functionsTable.length > 0) {
                const e = this.functions[this.functionsTable[0]].getSignature();
                (t["s_" + h(e)] = 0), this.signatures.push(e);
              }
              for (let e = 0; e < this.functions.length; e++) {
                const i = this.functions[e].getSignature(),
                  n = "s_" + h(i);
                void 0 === t[n] &&
                  ((t[n] = this.signatures.length), this.signatures.push(i)),
                  (this.functions[e].signatureIdx = t[n]);
              }
            }
            _buildSection(t, e) {
              return [t, ...u(e.length), ...e];
            }
            _buildType() {
              return this._buildSection(1, [
                ...u(this.signatures.length),
                ...[].concat(...this.signatures),
              ]);
            }
            _buildImport() {
              const t = [];
              t.push([
                ...s(this.memory.moduleName),
                ...s(this.memory.fieldName),
                2,
                0,
                ...u(this.memory.pagesSize),
              ]);
              for (let e = 0; e < this.nImportFunctions; e++)
                t.push([
                  ...s(this.functions[e].moduleName),
                  ...s(this.functions[e].fieldName),
                  0,
                  ...u(this.functions[e].signatureIdx),
                ]);
              return this._buildSection(2, u(t.length).concat(...t));
            }
            _buildFunctionDeclarations() {
              const t = [];
              for (
                let e = this.nImportFunctions;
                e < this.nImportFunctions + this.nInternalFunctions;
                e++
              )
                t.push(...u(this.functions[e].signatureIdx));
              return this._buildSection(3, [...u(t.length), ...t]);
            }
            _buildFunctionsTable() {
              return 0 == this.functionsTable.length
                ? []
                : this._buildSection(4, [
                    ...u(1),
                    112,
                    0,
                    ...u(this.functionsTable.length),
                  ]);
            }
            _buildElements() {
              if (0 == this.functionsTable.length) return [];
              const t = [];
              for (let e = 0; e < this.functionsTable.length; e++)
                t.push(...u(this.functionsTable[e]));
              return this._buildSection(9, [
                ...u(1),
                ...u(0),
                65,
                ...c(0),
                11,
                ...u(this.functionsTable.length),
                ...t,
              ]);
            }
            _buildExports() {
              const t = [];
              for (let e = 0; e < this.exports.length; e++)
                t.push([
                  ...s(this.exports[e].exportName),
                  0,
                  ...u(this.exports[e].idx),
                ]);
              return this._buildSection(7, u(t.length).concat(...t));
            }
            _buildCode() {
              const t = [];
              for (
                let e = this.nImportFunctions;
                e < this.nImportFunctions + this.nInternalFunctions;
                e++
              )
                t.push(this.functions[e].getBody());
              return this._buildSection(10, u(t.length).concat(...t));
            }
            _buildData() {
              const t = [];
              t.push([0, 65, 0, 11, 4, ...a(this.free)]);
              for (let e = 0; e < this.datas.length; e++)
                t.push([
                  0,
                  65,
                  ...c(this.datas[e].offset),
                  11,
                  ...u(this.datas[e].bytes.length),
                  ...this.datas[e].bytes,
                ]);
              return this._buildSection(11, u(t.length).concat(...t));
            }
          }
          class L {
            constructor(t) {
              (this.func = t),
                (this.functionName = t.functionName),
                (this.module = t.module);
            }
            setLocal(t, e) {
              if (void 0 === this.func.localIdxByName[t])
                throw new Error(
                  `Local Variable not defined: Function: ${this.functionName} local: ${t} `
                );
              return [e, `set_local $${t}`];
            }
            teeLocal(t, e) {
              if (void 0 === this.func.localIdxByName[t])
                throw new Error(
                  `Local Variable not defined: Function: ${this.functionName} local: ${t} `
                );
              return [e, `tee_local $${t}`];
            }
            getLocal(t) {
              if (void 0 === this.func.localIdxByName[t])
                throw new Error(
                  `Local Variable not defined: Function: ${this.functionName} local: ${t} `
                );
              return `get_local $${t}`;
            }
            genLoad(t, e, i, n, o) {
              let a = t;
              const s = n || 0;
              s > 0 && (a += ` offset=${s}`);
              const r = void 0 === o ? e : o;
              return r != e && (a += " align=" + (1 << r)), [i, a];
            }
            genStore(t, e, i, n, o, a) {
              let s, r, l;
              void 0 === o
                ? ((s = 0), (r = e), (l = n))
                : void 0 === a
                  ? ((s = n), (r = e), (l = o))
                  : ((s = n), (r = o), (l = a));
              let c = t;
              return (
                s > 0 && (c += ` offset=${s}`),
                r != e && (c += " align=" + (1 << r)),
                [i, l, c]
              );
            }
            i64_load8_s(t, e, i) {
              return this.genLoad("i64.load8_s", 0, t, e, i);
            }
            i64_load8_u(t, e, i) {
              return this.genLoad("i64.load8_u", 0, t, e, i);
            }
            i64_load16_s(t, e, i) {
              return this.genLoad("i64.load16_s", 1, t, e, i);
            }
            i64_load16_u(t, e, i) {
              return this.genLoad("i64.load16_u", 1, t, e, i);
            }
            i64_load32_s(t, e, i) {
              return this.genLoad("i64.load32_s", 2, t, e, i);
            }
            i64_load32_u(t, e, i) {
              return this.genLoad("i64.load32_u", 2, t, e, i);
            }
            i64_load(t, e, i) {
              return this.genLoad("i64.load", 3, t, e, i);
            }
            i64_store(t, e, i, n) {
              return this.genStore("i64.store", 3, t, e, i, n);
            }
            i64_store32(t, e, i, n) {
              return this.genStore("i64.store32", 2, t, e, i, n);
            }
            i64_store16(t, e, i, n) {
              return this.genStore("i64.store16", 1, t, e, i, n);
            }
            i64_store8(t, e, i, n) {
              return this.genStore("i64.store8", 0, t, e, i, n);
            }
            i32_load8_s(t, e, i) {
              return this.genLoad("i32.load8_s", 0, t, e, i);
            }
            i32_load8_u(t, e, i) {
              return this.genLoad("i32.load8_u", 0, t, e, i);
            }
            i32_load16_s(t, e, i) {
              return this.genLoad("i32.load16_s", 1, t, e, i);
            }
            i32_load16_u(t, e, i) {
              return this.genLoad("i32.load16_u", 1, t, e, i);
            }
            i32_load(t, e, i) {
              return this.genLoad("i32.load", 2, t, e, i);
            }
            i32_store(t, e, i, n) {
              return this.genStore("i32.store", 2, t, e, i, n);
            }
            i32_store16(t, e, i, n) {
              return this.genStore("i32.store16", 1, t, e, i, n);
            }
            i32_store8(t, e, i, n) {
              return this.genStore("i32.store8", 0, t, e, i, n);
            }
            call(t, ...e) {
              if (void 0 === this.module.functionIdxByName[t])
                throw new Error(`Function not defined: Function: ${t}`);
              return [e, `call $${t}`];
            }
            call_indirect(t, ...e) {
              return [e, t, "call_indirect (type 0)"];
            }
            if(t, e, i) {
              return i
                ? [t, "if", f(e), "else", f(i), "end"]
                : [t, "if", f(e), "end"];
            }
            block(t) {
              return ["block", f(t), "end"];
            }
            loop(...t) {
              return ["loop", f(t), "end"];
            }
            br_if(t, e) {
              return [e, `br_if ${t}`];
            }
            br(t) {
              return `br ${t}`;
            }
            ret(t) {
              return [t, "return"];
            }
            drop(t) {
              return [t, "drop"];
            }
            i64_const(t) {
              return `i64.const ${t}`;
            }
            i32_const(t) {
              return `i32.const ${t}`;
            }
            i64_eqz(t) {
              return [t, "i64.eqz"];
            }
            i64_eq(t, e) {
              return [t, e, "i64.eq"];
            }
            i64_ne(t, e) {
              return [t, e, "i64.ne"];
            }
            i64_lt_s(t, e) {
              return [t, e, "i64.lt_s"];
            }
            i64_lt_u(t, e) {
              return [t, e, "i64.lt_u"];
            }
            i64_gt_s(t, e) {
              return [t, e, "i64.gt_s"];
            }
            i64_gt_u(t, e) {
              return [t, e, "i64.gt_u"];
            }
            i64_le_s(t, e) {
              return [t, e, "i64.le_s"];
            }
            i64_le_u(t, e) {
              return [t, e, "i64.le_u"];
            }
            i64_ge_s(t, e) {
              return [t, e, "i64.ge_s"];
            }
            i64_ge_u(t, e) {
              return [t, e, "i64.ge_u"];
            }
            i64_add(t, e) {
              return [t, e, "i64.add"];
            }
            i64_sub(t, e) {
              return [t, e, "i64.sub"];
            }
            i64_mul(t, e) {
              return [t, e, "i64.mul"];
            }
            i64_div_s(t, e) {
              return [t, e, "i64.div_s"];
            }
            i64_div_u(t, e) {
              return [t, e, "i64.div_u"];
            }
            i64_rem_s(t, e) {
              return [t, e, "i64.rem_s"];
            }
            i64_rem_u(t, e) {
              return [t, e, "i64.rem_u"];
            }
            i64_and(t, e) {
              return [t, e, "i64.and"];
            }
            i64_or(t, e) {
              return [t, e, "i64.or"];
            }
            i64_xor(t, e) {
              return [t, e, "i64.xor"];
            }
            i64_shl(t, e) {
              return [t, e, "i64.shl"];
            }
            i64_shr_s(t, e) {
              return [t, e, "i64.shr_s"];
            }
            i64_shr_u(t, e) {
              return [t, e, "i64.shr_u"];
            }
            i64_extend_i32_s(t) {
              return [t, "i64.extend_s/i32"];
            }
            i64_extend_i32_u(t) {
              return [t, "i64.extend_u/i32"];
            }
            i32_eqz(t) {
              return [t, "i32.eqz"];
            }
            i32_eq(t, e) {
              return [t, e, "i32.eq"];
            }
            i32_ne(t, e) {
              return [t, e, "i32.ne"];
            }
            i32_lt_s(t, e) {
              return [t, e, "i32.lt_s"];
            }
            i32_lt_u(t, e) {
              return [t, e, "i32.lt_u"];
            }
            i32_gt_s(t, e) {
              return [t, e, "i32.gt_s"];
            }
            i32_gt_u(t, e) {
              return [t, e, "i32.gt_u"];
            }
            i32_le_s(t, e) {
              return [t, e, "i32.le_s"];
            }
            i32_le_u(t, e) {
              return [t, e, "i32.le_u"];
            }
            i32_ge_s(t, e) {
              return [t, e, "i32.ge_s"];
            }
            i32_ge_u(t, e) {
              return [t, e, "i32.ge_u"];
            }
            i32_add(t, e) {
              return [t, e, "i32.add"];
            }
            i32_sub(t, e) {
              return [t, e, "i32.sub"];
            }
            i32_mul(t, e) {
              return [t, e, "i32.mul"];
            }
            i32_div_s(t, e) {
              return [t, e, "i32.div_s"];
            }
            i32_div_u(t, e) {
              return [t, e, "i32.div_u"];
            }
            i32_rem_s(t, e) {
              return [t, e, "i32.rem_s"];
            }
            i32_rem_u(t, e) {
              return [t, e, "i32.rem_u"];
            }
            i32_and(t, e) {
              return [t, e, "i32.and"];
            }
            i32_or(t, e) {
              return [t, e, "i32.or"];
            }
            i32_xor(t, e) {
              return [t, e, "i32.xor"];
            }
            i32_shl(t, e) {
              return [t, e, "i32.shl"];
            }
            i32_shr_s(t, e) {
              return [t, e, "i32.shr_s"];
            }
            i32_shr_u(t, e) {
              return [t, e, "i32.shr_u"];
            }
            i32_rotl(t, e) {
              return [t, e, "i32.rotl"];
            }
            i32_rotr(t, e) {
              return [t, e, "i32.rotr"];
            }
            i32_wrap_i64(t) {
              return [t, "i32.wrap/i64"];
            }
            ureachable() {
              return "unreachable";
            }
            current_memory() {
              return "current_memory";
            }
            comment(t) {
              return ";; " + t;
            }
          }
          class b {
            constructor(t, e, i, n, o) {
              if ("import" == i)
                (this.fnType = "import"),
                  (this.moduleName = n),
                  (this.fieldName = o);
              else {
                if ("internal" != i)
                  throw new Error("Invalid function fnType: " + i);
                (this.fnType = "internal"), (this.comment = n);
              }
              (this.module = t),
                (this.fnName = e),
                (this.params = []),
                (this.locals = []),
                (this.localIdxByName = {}),
                (this.code = []),
                (this.returnType = null),
                (this.nextLocal = 0);
            }
            addParam(t, e) {
              if (this.localIdxByName[t])
                throw new Error(
                  `param already exists. Function: ${this.fnName}, Param: ${t} `
                );
              const i = this.nextLocal++;
              (this.localIdxByName[t] = i),
                this.params.push({ type: e, name: t });
            }
            addLocal(t, e, i) {
              if (void 0 !== i && 1 != i)
                throw new Error("Locals greater than 1 not implemented");
              if (this.localIdxByName[t])
                throw new Error(
                  `local already exists. Function: ${this.fnName}, Param: ${t} `
                );
              const n = this.nextLocal++;
              (this.localIdxByName[t] = n),
                this.locals.push({ type: e, name: t });
            }
            setReturnType(t) {
              if (this.returnType)
                throw new Error(
                  `returnType already defined. Function: ${this.fnName}`
                );
              this.returnType = t;
            }
            getSignature() {
              let t = "";
              for (let e = 0; e < this.params.length; e++)
                0 == e && (t += " (param"), (t += " " + this.params[e].type);
              "" != t && (t += ")");
              let e = "";
              return (
                this.returnType && (e += ` (result ${this.returnType})`),
                `(type $${this.getSignatureName()} (func ${t}${e}))`
              );
            }
            getSignatureName() {
              let t = "_sig_";
              for (let e = 0; e < this.params.length; e++)
                t += this.params[e].type;
              return this.returnType && (t += "r" + this.returnType), t;
            }
            getBody() {
              const t = [];
              for (let e = 0; e < this.params.length; e++)
                t.push(
                  ` (param $${this.params[e].name} ${this.params[e].type})`
                );
              this.returnType && t.push(`(result ${this.returnType})`);
              for (let e = 0; e < this.locals.length; e++)
                t.push(
                  ` (local $${this.locals[e].name} ${this.locals[e].type})`
                );
              let e;
              if ((t.push(this.code), this.comment)) {
                e = this.comment.split("\n");
                for (let t = 0; t < e.length; t++) e[t] = ";; " + e[t];
              } else e = [];
              return [
                ...e,
                `(func $${this.fnName} (type $${this.getSignatureName()})`,
                f(t),
                ")",
              ];
            }
            addCode(...t) {
              this.code.push(t);
            }
            getCodeBuilder() {
              return new L(this);
            }
          }
          class F {
            constructor() {}
            alloc(t) {
              void 0 === t && (t = this.defBytes),
                (t = (1 + ((t - 1) >> 3)) << 3);
              const e = this.i32[0];
              return (this.i32[0] += t), e;
            }
            set(t, e, i) {
              Array.isArray(e) || (e = [e]),
                void 0 === i && (i = this.defBytes);
              const n = Math.floor((i - 1) / 4) + 1;
              let o = t;
              const a = 1n << BigInt(this.bitsPerBytes);
              for (let t = 0; t < e.length; t++) {
                let i = BigInt(e[t]);
                for (let t = 0; t < n; t++) {
                  const t = i / a,
                    e = i % a;
                  (this.i32[o >> 2] = Number(e)), (i = t), (o += 4);
                }
                if (0n !== i) throw new Error("Expected v to be 0");
              }
              return t;
            }
            get(t, e, i) {
              void 0 === i &&
                (void 0 === e
                  ? ((e = 1), (i = this.defBytes))
                  : ((e = i), (i = this.defBytes)));
              const n = Math.floor((i - 1) / 4) + 1,
                o = 1n << BigInt(this.bitsPerBytes),
                a = [];
              for (let i = 0; i < e; i++) {
                let e = 0n;
                for (let i = n - 1; i >= 0; i--) {
                  e *= o;
                  let n = this.i32[(t >> 2) + i];
                  this.bitsPerBytes < 32 && 2147483648 & n && (n -= 4294967296),
                    (e += BigInt(n));
                }
                a.push(e), (t += 4 * n);
              }
              return 1 == a.length ? a[0] : a;
            }
          }
          (e.ModuleBuilder = m),
            (e.ModuleBuilderWat = class {
              constructor() {
                (this.functions = []),
                  (this.functionIdxByName = {}),
                  (this.nImportFunctions = 0),
                  (this.nInternalFunctions = 0),
                  (this.memory = {
                    pagesSize: 1,
                    moduleName: "env",
                    fieldName: "memory",
                  }),
                  (this.free = 8),
                  (this.datas = []),
                  (this.modules = {}),
                  (this.exports = []),
                  (this.functionsTable = []);
              }
              build() {
                const t = [];
                return (
                  this._setSignatures(),
                  t.push(this._buildType()),
                  t.push(this._buildImport()),
                  this.functionsTable.length > 0 &&
                    t.push(this._buildFunctionsTable()),
                  this.exports.length > 0 && t.push(this._buildExports()),
                  this.functionsTable.length > 0 &&
                    t.push(this._buildElements()),
                  this.nInternalFunctions > 0 && t.push(this._buildFunctions()),
                  t.push(this._buildData()),
                  ["(module", f(t), ")"]
                );
              }
              addFunction(t, e) {
                if (void 0 !== this.functionIdxByName[t])
                  throw new Error(`Function already defined: ${t}`);
                const i = this.functions.length;
                return (
                  (this.functionIdxByName[t] = i),
                  this.functions.push(new b(this, t, "internal", e)),
                  this.nInternalFunctions++,
                  this.functions[i]
                );
              }
              addIimportFunction(t, e, i) {
                if (void 0 !== this.functionIdxByName[t])
                  throw new Error(`Function already defined: ${t}`);
                if (
                  this.functions.length > 0 &&
                  "internal" == this.functions[this.functions.length - 1].type
                )
                  throw new Error(
                    `Import functions must be declared before internal: ${t}`
                  );
                let n = i || t;
                const o = this.functions.length;
                return (
                  (this.functionIdxByName[t] = o),
                  this.functions.push(new b(this, t, "import", e, n)),
                  this.nImportFunctions++,
                  this.functions[o]
                );
              }
              setMemory(t, e, i) {
                this.memory = {
                  pagesSize: t,
                  moduleName: e || "env",
                  fieldName: i || "memory",
                };
              }
              exportFunction(t, e) {
                const i = e || t;
                if (void 0 === this.functionIdxByName[t])
                  throw new Error(`Function not defined: ${t}`);
                const n = this.functionIdxByName[t];
                i != t && (this.functionIdxByName[i] = n),
                  this.exports.push({ exportName: i, idx: n });
              }
              addFunctionToTable(t) {
                const e = this.functionIdxByName[t];
                this.functionsTable.push(e);
              }
              addData(t, e) {
                this.datas.push({ offset: t, bytes: e });
              }
              alloc(t, e) {
                let i, n;
                (Array.isArray(t) || ArrayBuffer.isView(t)) && void 0 === e
                  ? ((i = t.length), (n = t))
                  : ((i = t), (n = e)),
                  (i = (1 + ((i - 1) >> 3)) << 3);
                const o = this.free;
                return (this.free += i), n && this.addData(o, n), o;
              }
              allocString(t) {
                const e = new TextEncoder().encode(t);
                return this.alloc([...e, 0]);
              }
              _setSignatures() {
                this.signatures = [];
                const t = {};
                if (this.functionsTable.length > 0) {
                  const e =
                    this.functions[this.functionsTable[0]].getSignature();
                  (t[
                    this.functions[this.functionsTable[0]].getSignatureName()
                  ] = 0),
                    this.signatures.push(e);
                }
                for (let e = 0; e < this.functions.length; e++) {
                  const i = this.functions[e].getSignature(),
                    n = this.functions[e].getSignatureName();
                  void 0 === t[n] &&
                    ((t[n] = this.signatures.length), this.signatures.push(i)),
                    (this.functions[e].signatureIdx = t[n]),
                    (this.functions[e].signatureName = n);
                }
              }
              _buildType() {
                return this.signatures;
              }
              _buildImport() {
                const t = [];
                t.push(
                  `(import "${this.memory.moduleName}" "${this.memory.fieldName}" (memory ${this.memory.pagesSize}))`
                );
                for (let e = 0; e < this.nImportFunctions; e++)
                  t.push(
                    `(import "${this.functions[e].moduleName}" "${this.functions[e].fieldName}" (func $${this.functions[e].fnName} (type $${this.functions[e].getSignatureName()})))`
                  );
                return t;
              }
              _buildFunctionsTable() {
                return `(table ${this.functionsTable.length} anyfunc)`;
              }
              _buildElements() {
                let t = "";
                for (let e = 0; e < this.functionsTable.length; e++)
                  t += " $" + this.functions[this.functionsTable[e]].fnName;
                return `(elem (i32.const 0) ${t})`;
              }
              _buildExports() {
                const t = [];
                for (let e = 0; e < this.exports.length; e++)
                  t.push(
                    `(export "${this.exports[e].exportName}" (func $${this.functions[this.exports[e].idx].fnName}))`
                  );
                return t;
              }
              _buildFunctions() {
                const t = [];
                for (
                  let e = this.nImportFunctions;
                  e < this.nImportFunctions + this.nInternalFunctions;
                  e++
                )
                  t.push(this.functions[e].getBody());
                return t;
              }
              _buildData() {
                const t = [],
                  e = Buffer.alloc(4);
                e.writeUInt32LE(this.free, 0),
                  t.push(`(data (i32.const 0) ${i(e)})`);
                for (let e = 0; e < this.datas.length; e++)
                  t.push(
                    `(data (i32.const ${this.datas[e].offset}) ${i(this.datas[e].bytes)})`
                  );
                return t;
                function i(t) {
                  let e = '"';
                  for (let i = 0; i < t.length; i++)
                    if (t[i] < 32 || t[i] > 126 || 34 == t[i] || 92 == t[i]) {
                      let n = t[i].toString(16);
                      for (; n.length < 2; ) n = "0" + n;
                      e += "\\" + n;
                    } else e += String.fromCharCode(t[i]);
                  return (e += '"'), e;
                }
              }
            }),
            (e.buildProtoboard = async function (t, e, i) {
              const n = new F();
              (n.defBytes = e),
                (n.bitsPerBytes = i || 32),
                (n.memory = new WebAssembly.Memory({ initial: 2e4 })),
                (n.i32 = new Uint32Array(n.memory.buffer)),
                (n.i8 = new Uint8Array(n.memory.buffer));
              const o = new m();
              o.addIimportFunction("debug_log32", "debug", "log32").addParam(
                "x",
                "i32"
              );
              const a = o.addIimportFunction("debug_log64", "debug", "log64");
              a.addParam("x", "i32"),
                a.addParam("y", "i32"),
                (function (t) {
                  const e = t.addFunction("log32");
                  e.addParam("x", "i32");
                  const i = e.getCodeBuilder();
                  e.addCode(i.call("debug_log32", i.getLocal("x")));
                })(o),
                (function (t) {
                  const e = t.addFunction("log64");
                  e.addParam("x", "i64");
                  const i = e.getCodeBuilder();
                  e.addCode(
                    i.call(
                      "debug_log64",
                      i.i32_wrap_i64(i.getLocal("x")),
                      i.i32_wrap_i64(
                        i.i64_shr_u(i.getLocal("x"), i.i64_const(32))
                      )
                    )
                  );
                })(o),
                t(o, n);
              const s = o.build(),
                r = await WebAssembly.compile(s);
              return (
                (n.log = console.log),
                (n.instance = await WebAssembly.instantiate(r, {
                  env: { memory: n.memory },
                  debug: {
                    log32: function (t) {
                      t < 0 && (t = 4294967296 + t);
                      let e = t.toString(16);
                      for (; e.length < 8; ) e = "0" + e;
                      n.log(e + ": " + t.toString());
                    },
                    log64: function (t, e) {
                      t < 0 && (t = 4294967296 + t),
                        e < 0 && (e = 4294967296 + e);
                      const i = BigInt(t) + (BigInt(e) << 32n);
                      let o = i.toString(16);
                      for (; o.length < 16; ) o = "0" + o;
                      n.log(o + ": " + i.toString());
                    },
                  },
                })),
                Object.assign(n, n.instance.exports),
                Object.assign(n, o.modules),
                n
              );
            });
        },
      },
      e = {};
    function i(n) {
      var o = e[n];
      if (void 0 !== o) return o.exports;
      var a = (e[n] = { exports: {} });
      return t[n](a, a.exports, i), a.exports;
    }
    return (
      (i.n = (t) => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return i.d(e, { a: e }), e;
      }),
      (i.d = (t, e) => {
        for (var n in e)
          i.o(e, n) &&
            !i.o(t, n) &&
            Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
      }),
      (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
      (i.r = (t) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      i(174)
    );
  })()
);
