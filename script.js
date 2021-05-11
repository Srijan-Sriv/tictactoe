var operator = document.getElementsByClassName("cell");
var firstcomputerturn = true;
var computerturn = false;
var movetype = 0;
var done = 0;
var filled = [];
for(var i=0;i<9;i++)
{
    filled[i] = 0;
}

function userReciever(num0)
{
    if(operator[num0].innerText!="X" && operator[num0].innerText!="O")
    {
        if(movetype==0||movetype==(-1))
        {
            operator[num0].innerText = "O";
            filled[num0] = 1;
            movetype = 1;
            computerturn = true;
            done++;
            winnerChecker();
            computerPlayer();
        }
        else if(movetype==1)
        {
            operator[num0].innerText = "X";
            filled[num0] = (-1);
            movetype = (-1);
            computerturn = true;
            done++;
            winnerChecker();
            computerPlayer();
        }
    }
}

function computerPlayer()
{
    if(computerturn==true)
    {
        var choice = 4;
        while(filled[choice]==1||filled[choice]==(-1))
        {
            choice = Math.floor(0 + (Math.random() * 8));
            if(done==9)
            {
                alert("Its a Tie!");
                const button = document.getElementsByClassName('cell');
                for(var o=0;o<button.length;o++)
                {
                    button[o].disabled = true;
                }
                break;
            }
        }
        if(done<9)
        {
            if(movetype==0||movetype==(-1))
            {
                operator[choice].innerText = "O";
                filled[choice] = 1;
                movetype = 1;
                computerturn = false;
                done++;
                winnerChecker();
            }
            else if(movetype==1)
            {
                operator[choice].innerText = "X";
                filled[choice] = (-1);
                movetype = (-1);
                computerturn = false;
                done++;
                winnerChecker();
            }
        }
    }
}

function threeInARow()
{
    for(var k=(-1);k<2;k+=2)
    {
        for(var j=0;j<=6;j+=3)
        {
            if(filled[j]==k && filled[j+1]==k && filled[j+2]==k)
            {
                return 1;
            }
        }
    }
}

function threeInAColomn()
{
    for(var l=(-1);l<2;l+=2)
    {
        for(var j=0;j<3;j++)
        {
            if(filled[j]==l && filled[j+3]==l && filled[j+6]==l)
            {
                return 1;
            }
        }
    }
}

function threeInADiagonal()
{
    for(var m=(-1);m<2;m+=2)
    {
        if(filled[0]==m && filled[4]==m && filled[8]==m)
        {
            return 1;
        }
        else if(filled[2]==m && filled[4]==m && filled[6]==m)
        {
            return 1;
        }
    }
}

function winnerChecker()
{
    if(threeInARow()==1||threeInAColomn()==1||threeInADiagonal()==1)
    {
        if(computerturn==true)
        {
            alert("You Win!");
            computerturn = false;
            const button = document.getElementsByClassName('cell');
            for(var o=0;o<button.length;o++)
            {
                button[o].disabled = true;
            }
        }
        else
        {
            alert("Computer Wins!");
            computerturn = false;
            const button = document.getElementsByClassName('cell');
            for(var p=0;p<button.length;p++)
            {
                button[p].disabled = true;
            }
        }
    }
    else
    {
        ;
    }
}
