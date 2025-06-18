let text = document.getElementById("screen");

let temp = "Error";

function btn_Function(value) 
{
    if(text.innerText === "Calculator" || text.innerText === "Error")
    {
        text.innerText = "";
    }
    text.innerText += value;
}

function btn_Delete()
{
    if(text.innerText !== "Calculator")
    {
        if(text.innerText !== "Error")
        {
            text.innerText = text.innerText.slice(0,-1);

            if(text.innerText === "")
            {
                text.innerText = "Calculator";
            }
        }
    }
}

function btn_equal()
{
    if(text.innerText.length >= 1)
    {
        try
        {
            if(text.innerText === "" || text.innerText === "Calculator" || text.innerText === "Error")
            {
                return;
            }
            else
            {
                text.innerText = eval(text.innerText);
            }
        }
        catch
        {
            text.innerText= temp;
        }
    }
}

function btn_Clear()
{
    text.innerText = "Calculator";
}