const n=5;

let sum="";

for(let i=0; i<n;i++)
{
    for(let j=0; j<n; j++)
    {
        if(i===0||i===n-1)
        {
            sum=sum+'*'
        }
        else if(j===0||j===n-1)
        {
            sum=sum+"*"
        }
        else
        {
            sum=sum+" "
        }
    }
    sum=sum+'\n';
} 
console.log(sum)
