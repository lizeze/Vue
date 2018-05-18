function getAjax(url, success) {


    var xhr = new XMLHttpRequest()
    xhr.open('get', url)
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var data = JSON.parse(xhr.responseText)
                success && success(data)
            } else {
                alert("error");
            }
        }
    }
    xhr.send(null);
}