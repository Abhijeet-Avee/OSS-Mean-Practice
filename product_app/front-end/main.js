$(window).on("load", function () {
    $("#getDataBtn").on("click", function () {
        $.ajax({
            url: "http://localhost:8080/products", //API URL
            type: "GET", // GET OR POST,
            beforeSend: function () {
                // This function calls before ajax API Hits
                // Here we have to show our loader
                $(".loader-row").removeClass("d-none");
            },
            success: function (response, status) {

                $(".loader-row").addClass("d-none");
                let html = "";
                for (let i = 0; i < response.length; i++) {
                    const { _id, pname, price, category} = response[i];
                    html += `
                        <tr>
                            <td>${_id}</td>
                            <td>${pname}</td>
                            <td>${price}</td>
                            <td>${category}</td>
                        </tr>
                    `;
                }
                $(".user-table").find("tbody").append(html);
            },
            error: function (error, status) {
                // IF our API get any error
                // this function gets called.
                $(".loader-row").addClass("d-none");
                let html = `
                        <tr>
                            <td colspan="3"> 
                                <div class="alert alert-danger">
                                    Error while fetching data  
                                </div>
                            </td>
                        </tr>
                    `;
                $(".user-table").find("tbody").append(html);
            },
        });
    });
});
