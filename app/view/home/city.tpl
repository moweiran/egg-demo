<html>
<head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/city.css" />
</head>
<body class="content">
     <div>
        城市：
        <select id='selCity'>
            {% for item in list %}
            <option value="{{item.gys_city}}">{{item.gys_city}}</option>
            {% endfor %}
        </select>
        供应商：
        <select id='selGys'>
        </select>
        <!-- 供应商：<input type="text" id="gys_name" /> -->
        运费：<input type="text" id="yunfei" value="0" />
        米数：<input type="text" id="mishu" value="0" />
        规格：<input type="text" id="guige" value="" />
        点数：<input type="text" id="zhekou" value="0.10" />
        <input type="button" id="btnSearch" value="搜索" style="width:80px;height:20px;">
    </div>

    <table cellpadding="3" cellspacing="0">
        <thead>
            <tr>
                <th width="120">编号</th>
                <th width="300">规格</th>
                <th width="120">价格</th>
                <th width="*"></th>
            </tr>
        </thead>
        <tbody id="bjResult">

        </tbody>
    </table>
    <script src="/public/js/jquery.min.js" type="text/javascript"></script>
</body>

</html>