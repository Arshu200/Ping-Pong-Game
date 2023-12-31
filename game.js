parcelRequire = function (e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire,
        u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) return i(t, !0);
                if (o) return o(t, !0);
                if (u && "string" == typeof t)
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            } p.resolve = function (r) {
                return e[t][1][r] || r
            },
                p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0,
        f.Module = function (e) {
            this.id = e, this.bundle = f,
                this.exports = {}
        },
        f.modules = e,
        f.cache = r,
        f.parent = o,
        f.register = function (r, t) {
            e[r] = [function (e, r) {
                r.exports = t
            },
            {}]
        };
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        }
        catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ?
            define(function () {
                return l
            })
            : n && (this[n] = l)
    } if (parcelRequire = f, i)
        throw i;
    return f
}({
    "H99C": [function (require, module, exports) {
        var t = document.getElementById("rod1"),
            e = document.getElementById("rod2"),
            a = document.getElementById("ball"),
            o = 0,
            i = 0,
            s = !1;
        function l() {
            var l = a.getBoundingClientRect(),
                n = t.getBoundingClientRect(),
                r = e.getBoundingClientRect();
            if (l.bottom < 0 || l.top > window.innerHeight) {
                var m = parseInt(localStorage.getItem("rod1_max_score")),
                    d = parseInt(localStorage.getItem("rod2_max_score")),
                    c = Math.max(m, o).toString(),
                    g = Math.max(d, i).toString();
                localStorage.setItem("rod1_max_score", c),
                    localStorage.setItem("rod2_max_score", g),
                    s = !1, a.classList.remove(a.classList[0]),
                    document.getElementById("audio1").play(),
                    alert("GAME OVER😓 \n------------------------------\nRod 1 Current Score: " + o + "\nRod 2 Current Score: " + i + "\n------------------------------\nRod 1 Highest Score: " + c + "\nRod 2 Highest Score: " + g),
                    o = 0,
                    i = 0,
                    t.style.left = window.innerWidth / 2 - t.clientWidth / 2 + "px",
                    e.style.left = window.innerWidth / 2 - t.clientWidth / 2 + "px"
            }
            else if (l.right >= window.innerWidth) {
                if ("animate-top-right" === a.classList[0])
                    document.getElementById("audio").play(),
                        a.classList.remove("animate-top-right"),
                        a.classList.add("animate-top-left");
                else if ("animate-bottom-right" === a.classList[0]) {
                    document.getElementById("audio").play(),
                        a.classList.remove("animate-bottom-right"),
                        a.classList.add("animate-bottom-left")
                }
            }
            else if (l.left <= 0) {
                if ("animate-top-left" === a.classList[0])
                    document.getElementById("audio").play(),
                        a.classList.remove("animate-top-left"),
                        a.classList.add("animate-top-right");
                else if ("animate-bottom-left" === a.classList[0]) {
                    document.getElementById("audio").play(),
                        a.classList.remove("animate-bottom-left"),
                        a.classList.add("animate-bottom-right")
                }
            } else if (n.bottom >= l.top && l.right >= n.left && l.left <= n.right) {
                if ("animate-top-right" === a.classList[0])
                    o++,
                        document.getElementById("audio").play(),
                        a.classList.remove("animate-top-right"),
                        a.classList.add("animate-bottom-right");
                else if ("animate-top-left" === a.classList[0]) {
                    o++,
                        document.getElementById("audio").play(),
                        a.classList.remove("animate-top-left"),
                        a.classList.add("animate-bottom-left")
                }
            }
            else if (r.top <= l.bottom && l.right >= n.left && l.left <= n.right) {
                if ("animate-bottom-right" === a.classList[0])
                    i++,
                        document.getElementById("audio").play(),
                        a.classList.remove("animate-bottom-right"),
                        a.classList.add("animate-top-right");
                else if ("animate-bottom-left" === a.classList[0]) {
                    i++,
                        document.getElementById("audio").play(),
                        a.classList.remove("animate-bottom-left"),
                        a.classList.add("animate-top-left")
                }
            }
        }
        function n(o) {
            var i = t.getBoundingClientRect(),
                l = o.keyCode;
            if (13 === l && !1 === s)
                s = !0,
                    a.classList.add("animate-bottom-right");
            else if (68 === l || 39 === l) {
                if (i.left === window.innerWidth - t.clientWidth - 6)
                    return;
                var n = i.left;
                n += 15,
                    t.style.left = Math.min(n, window.innerWidth - t.clientWidth - 6) + "px",
                    e.style.left = Math.min(n, window.innerWidth - t.clientWidth - 6) + "px"
            }
            else if (65 === l || 37 === l) {
                if (0 === i.left) return;
                var r = i.left;
                r -= 15, t.style.left = Math.max(r, 0) + "px",
                    e.style.left = Math.max(r, 0) + "px"
            }
        }
        "false" !== localStorage.getItem("isFirstTime") &&
            (localStorage.setItem("isFirstTime", "true"), localStorage.setItem("rod1_max_score", "0"),
                localStorage.setItem("rod2_max_score", "0")),
            "true" === localStorage.getItem("isFirstTime") ? (
                localStorage.setItem("isFirstTime", "false"),
                alert("Hello Player! I am Shaik Arshad 😎 Devloper of this Ping Pong Game! \n🟩This is your first time Go and show that you are a real Gamer🟩 \n\nGAME RULES:\n1. To start the Game Press Enter \n2. For moving the rod press left-right arrow key or A&D key")) : alert("-------------------------------------------------------------------\nHello Player! I am Shaik Arshad  😎 Devloper of this Ping Pong Game! \n-------------------------------------------------------------------\nGAME RULES:\n1. To start the Game Press Enter \n2. For moving the rod press left-right arrow key or A&D key\n------------------------------------------------------------------- \nRod 1 has maximum score of " + localStorage.getItem("rod1_max_score") + "\nRod 2 has maximum score of " + localStorage.getItem("rod2_max_score")
                ),
            setInterval(l, 1),
            window.addEventListener("keydown", n);
    }, {}]
}, {}, ["H99C"], null)