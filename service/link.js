
//实时聊天系统

var ws = require("nodejs-websocket");
let User = {};

var server = ws.createServer(function (conn) {
    conn.on("text", function (str) {
        let msg = JSON.parse(str);

        if (msg.pos == 'world') {
            for (const key in User) {
                if (User[key]) {
                    User[key].sendText(str);
                }
            }
        }

        //进入
        if (msg.pos == 'identity') {
            User[msg.id] = conn;
        }
        //离开
        if (msg.pos == 'leave') {
            User[msg.id] = null;
        }
        if (msg.pos == 'msg') {
            if (User[msg.id]) {

                User[msg.id].sendText(str);
            } else {
                let Msg = { msg: '对方不在线', id: msg.id, code: 2071 };
                Msg = JSON.stringify(Msg);
                User[msg.myId].sendText(Msg);
            }
        }
    })
    conn.on("close", function (code, reason) {

    });
    conn.on("error", function (code, reason) {

    });
}).listen(9061)
