var runtimeCluster = [];
var number;
$( document ).ready(function() 
{
/* prevents functions to be launched before dom is ready*/
$(".inputButton").click
    (function() 
        {
            var fired_button = $(this).val();
            number = fired_button

        }
    );

$(".addURL").click
    (function() 
        {
            var fired_button = $(this).val();
            number = fired_button;
            storeUrlCluster();
        }
    );

$(".resetCluster").click
    (function() 
        {
            var fired_button = $(this).val();
            number = fired_button;
            resetCluster();
        }
    );

$(".nameCluster").click
    (function() 
        {
            var fired_button = $(this).val();
            number = fired_button;
            nameClusterButton();
        }
    );

$(".launch").click
    (function() 
        {
            var fired_button = $(this).val();
            number = fired_button;
            launchCluster();
        }
    );
});
/* set's the value of number and launches function */
function storeUrlCluster()
    {
        runtimeCluster = [];
        /*Reset runtime cluster*/
        oldCluster = JSON.parse(localStorage.getItem("cluster"+number+"Data"));
        /* gets cluster data */
        if(oldCluster==null)
            {
                oldCluster = []
            }
        newUrl = document.getElementById("cluster_"+number+"_link").value;
        /* gets new url */
        runtimeCluster = oldCluster;
        runtimeCluster = oldCluster;
        if(runtimeCluster.length == 0) 
            {
                runtimeCluster = [newUrl];
            } 
        else 
            {
                runtimeCluster.push(newUrl)
            }   
        /*adds old cluster and the new url into runtimeCluster*/
        localStorage.setItem("cluster"+number+"Data", JSON.stringify(runtimeCluster));
        /*stores runtimeCluster to local storage*/
        return;
    }

function resetCluster()
    {
        /*checks confirmation checkbox*/
        if($('#cluster_'+number+'_reset:checkbox:checked').length > 0==true)
            {
                newUrl= document.getElementById("cluster_"+number+"_name").value
                localStorage.setItem("cluster"+number+"name", newUrl);
                return;
            }

    }

function launchCluster()
    {
        runtimeCluster = [];
        /* resets runtime cluster */
        runtimeCluster = JSON.parse(localStorage.getItem("cluster"+number+"Data"));
        /*adds url's into runtimeCluster array*/
        for(URL of runtimeCluster) 
            {
                window.open(URL);
            }
        /*launches websites*/
        close();
        /*closes the clusterpages site*/
    }

function nameClusterButton()
    {
        newName = 
        localStorage.setItem("cluster"+number+"name", JSON.stringify(newName))
    }
/* return false found here https://stackoverflow.com/questions/47078498/javascript-add-value-from-input-box-to-array */
/*json method found here https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage */