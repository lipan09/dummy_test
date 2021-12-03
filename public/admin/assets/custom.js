//start Search from admin company List
$('#search-input').on('keyup',function(e){
    let data = new FormData();
    data.append('search', this.value);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');

    var config = {
        method: 'post',
        url: '/api/admin-company-search',
        data: data
    };

    axios(config).then(function (response) {
        // console.log(response.data.data)
        // return
            let companyArr = [];
            let results = response.data.data;
			results.forEach((details, i)=> {
				companyArr.push({id:details.id,value:details.company_name})
			});
        var availableTags = companyArr;
        
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        
        var arr = availableTags.filter(onlyUnique);
        console.log('thisArrayUnoqe',arr);
        $( "#search-input" ).autocomplete({
            // source: arr,
            source: function (request, response) {

                var friendsArray = [];
                friendsArray = arr;

                response(friendsArray);
                return;

            },
            select: function (e, ui) {
                //alert(ui.item.id);

            },

            change: function (e, ui) {

                alert("changed!");
            }
        });
    }).catch(function (error) {
        console.log(error)
        return error;
    });
} );
//end Search from admin company List
function inactiveFromSearch(id){
    if (confirm("Are you sure you want to inactive this company from list!")) {

        let status = document.getElementById(id).getAttribute('status');
        let companyname = document.getElementById(id).getAttribute('companyname');

        let data = new FormData();
        data.append('inactiveCompanyName', companyname);
        data.append('status', status);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');

        var config = {
            method: 'post',
            url: '/api/admin-company-inactive',
            data: data
        };

        axios(config).then(function (response) {
            if(status == 'active'){
                document.getElementById(id).setAttribute('status','inactive');
                document.getElementById(id).innerHTML='Inactive';
            }else{
                document.getElementById(id).setAttribute('status','active');
                document.getElementById(id).innerHTML='Active';
            }
        }).catch(function (error) {
            console.log(error)
            return error;
        });
    }
}
function jobboardActivities(id){
    if (confirm("Are you sure you want to inactive this jobboard from list!")) {
        
        let status = document.getElementById(id).getAttribute('status');
        let datajobboardname = document.getElementById(id).getAttribute('datajobboardname');

        let data = new FormData();
        data.append('datajobboardname', datajobboardname);
        data.append('status', status);
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:5000');

        var config = {
            method: 'post',
            url: '/api/admin-jobboard-status',
            data: data
        };

        axios(config).then(function (response) {
            if(status == 'active'){
                document.getElementById(id).setAttribute('status','inactive');
                document.getElementById(id).innerHTML='Inactive';
            }else{
                document.getElementById(id).setAttribute('status','active');
                document.getElementById(id).innerHTML='Active';
            }
        }).catch(function (error) {
            console.log(error)
            return error;
        });
    }

}