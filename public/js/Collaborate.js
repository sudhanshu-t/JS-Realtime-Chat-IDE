// Client Side JS

$(document).ready(function(){
    var socket, currentUser;

    

    function Init(){
        socket = io();
        socket.on("connect", socketConnected);
        socket.on("user-joined", userJoined);
        $(document).on("click", "input[action = loginUser", loginUser);
    }

    Init();
});