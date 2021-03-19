var runtimeCluster = [];
var number;
var clusterNumbers = [1, 2, 3, 4, 5, 6];
$( document ).ready(function() 
{
/* prevents functions to be launched before dom is ready*/
loadClusterNames();
$(".inputButton").click
    (function() 
        {
            var fired_button = $(this).val();
            number = fired_button;

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
$(".emailJS").click
    (function() 
        {
            
            emailjs.send("service_po9swwo","template_34o8pkm",{
            from_name: document.getElementById(submittedName).value;
            message: document.getElementById(submittedMessage).value;
            reply_to:document.getElementById(submittedEmail).value;
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
                oldCluster = [];
            }
        newUrl = document.getElementById("cluster_"+number+"_link").value;
        /* gets new url */
        runtimeCluster = oldCluster;
        if(runtimeCluster.length == 0) 
            {
                runtimeCluster = [newUrl];
            } 
        else 
            {
                runtimeCluster.push(newUrl);
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
                if(localStorage.getItem("cluster"+number+"Name")!=undefined)
                    {
                        localStorage.removeItem("cluster"+number+"Name");
                    }
                if(localStorage.getItem("cluster"+number+"Data")!=undefined)
                    {
                        localStorage.removeItem("cluster"+number+"Data");
                    }
                    alert("cluster "+number+" reset");
                return;
            } 
            else 
            {
                alert("Checkbox not filled");
            }
            /*alerts user if checkbox not filled*/
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
    }

function nameClusterButton()
    {
        newName = document.getElementById("cluster_"+number+"_name").value;
        localStorage.setItem("cluster"+number+"Name", JSON.stringify(newName));
    }
    
function loadClusterNames()
    {
        for(let id of clusterNumbers) 
            {
                if(localStorage.getItem("cluster"+id+"Name")!=undefined)
                    {
                        $('#cluster_'+id).html(JSON.parse(localStorage.getItem("cluster"+id+"Name")));
                    }
            }
    }
    /* this adds the names of the cluster onto the buttons/*
/*json method found here https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage */