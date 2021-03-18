var runtimeCluster = [];
var number;

$(".inputButton").click
    (function() 
        {
            var fired_button = $(this).val();
            number = fired_button
        }
    );

function storeUrlCluster()
    {
        runtimeCluster = [];
        /*Reset runtime cluster*/
        oldCluster = JSON.parse(localStorage.getItem("cluster"+number+"Data"));
        /* gets cluster data */
        newUrl = document.getElementById("cluster_"+number+"_link").value;
        /* gets new url */
        runtimeCluster = oldCluster.unshift(newUrl);
        /*adds old cluster data into runtimeCluster*/
        localStorage.setItem("cluster"+number+"Data", JSON.stringify(runtimeCluster));
        return;
    }

function resetCluster()
    {
        /*checks confirmation checkbox*/
        if($('#cluster_'+number+'_reset:checkbox:checked').length > 0==true)
            {
                localStorage.setItem("cluster"+number+"Data", 0);
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

function storeUrlCluster()
    {
        runtimeCluster = [];
        /*Reset runtime cluster*/
        oldCluster = JSON.parse(localStorage.getItem("cluster"+number+"Data"));
        /* gets cluster data */
        newUrl = document.getElementById("cluster_"+number+"_link").value;
        /* gets new url */
        runtimeCluster = oldCluster;
        /*adds old cluster data into runtimeCluster*/
        localStorage.setItem("cluster"+number+"Data", JSON.stringify(runtimeCluster));
        return;
    }

/* return false found here https://stackoverflow.com/questions/47078498/javascript-add-value-from-input-box-to-array */
/*json method found here https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage */