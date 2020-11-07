    <link rel="stylesheet" type="text/css" href="../bootstrap.min.css" />
    <script src="../jquery.min.js"></script>
    <script src="../bootstrap.min.js"></script>
    <script src="../bootbox.min.js"></script>
    
    
    
    <p>警示語：. <a class="alert btn btn-primary" href="#">請點選我！</a></p>
    <p>有CallBack值：. <a class="callBack btn btn-primary" href="#">請點選我！</a></p>
    
    
    <script>
           $(".callBack").click(function (e) {
                bootbox.confirm(
                    {
                        message: "數量不正確，確定要新增嗎？",
                        buttons: {
                            confirm: { label: '確定', className: 'btn-success' },
                            cancel: { label: '取消', className: 'btn-danger' }
                        },
                        callback: function (result) {

                            alert(result);                                                                   
                        }
                    });       
            });


            $(".alert").click(function (e) {
                bootbox.alert("This is the default alert!");           
            });
    </script>
