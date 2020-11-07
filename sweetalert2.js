<head runat="server">    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.10.3/sweetalert2.css" />  
</head>

<body>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.10.3/sweetalert2.js" type="text/javascript"></script>

        <script type="text/javascript"> 
            $(function () {
                $("#<%= BtnSubmit.ClientID%>").click(function () {
                            myConfirm();
                        });
                    });

            function myConfirm() {
                let BtnName = $("input#<%= BtnSubmit.ClientID%>").attr("name");

                swal({
                    title: '确定刪除嗎？',
                    text: '將無法復原！',
                    type: 'question',
                    showCancelButton: true,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',

                }).then(function () {
                    swal(
                        '已删除！',
                        '您的文件已被刪除。',
                        'success'
                    );

                }, function (dismiss) {
                    if (dismiss === 'cancel') {
                        swal(
                            '已取消！',
                            '您的文件依然存在！',
                            'error'
                        );
                    }
                })
            }
        </script>

        <asp:Button ID="BtnSubmit" runat="server" Text="請點選我！！！！" OnClick="BtnSubmit_Click" OnClientClick="return false" />
        
</body>
