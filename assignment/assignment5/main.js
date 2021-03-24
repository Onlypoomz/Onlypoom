
function postFunction()
{
    var input = document.getElementById("text1").value;
    var topic = document.getElementById("topic1");
    var Comment1 = document.getElementById("comment1");
    var Comment2 = document.getElementById("comment2");


    if(topic.innerHTML == "" && input != "")
    {
        topic.innerHTML = input;
    }
    else if(Comment1.innerHTML == "" && input != "")
    {
        Comment1.innerHTML = input;
    }
    else if(Comment2.innerHTML == "" && input != "")
    {
        Comment2.innerHTML = input;
    }
    document.getElementById("InputUser").value = "";
}

function clearFunction()
{
    document.getElementById("text1").value = "";
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
}