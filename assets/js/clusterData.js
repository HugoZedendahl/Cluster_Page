var cluster1 = []

function storeUrlCluster1 ()
    {
        cluster1.length = 0
        localStorage.getItem("cluster1Data")
        newUrl = document.getElementById('cluster_1_link').value;
        items.unshift(newUrl+localStorage.getItem("cluster1Data"))
        localStorage.setItem("cluster1Data", JSON.stringify(cluster1));
        return false
    }

function resetCluster1 ()
    {
        localStorage.setItem("cluster1Data", 0);
        return false
    }

/* return false found here https://stackoverflow.com/questions/47078498/javascript-add-value-from-input-box-to-array */
/*json method found here https://stackoverflow.com/questions/3357553/how-do-i-store-an-array-in-localstorage */