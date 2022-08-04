var query = require('samp-query')

var options = {
    host: '203.78.128.169' //เปลี่ยนไอพีที่ต้องการยิง Api สถานะ
}

query(options, function(error, response) {
    if (error)
        console.log(error)
    else
        console.log(response)
})

//api by connecting_Z | SIRISAKz