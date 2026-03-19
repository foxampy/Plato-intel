@extends('vendor.voyager.calendar')

@section('content')
    <div class="container-fluid">
        <div id="scheduler_here" class="dhx_cal_container">
            <div class="dhx_cal_navline">
                <div class="dhx_cal_prev_button">&nbsp;</div>
                <div class="dhx_cal_next_button">&nbsp;</div>
                <div class="dhx_cal_today_button"></div>
                <div class="dhx_cal_date"></div>
            </div>
            <div class="dhx_cal_header"></div>
            <div class="dhx_cal_data"></div>
        </div>
    </div>
@stop



@section('javascript')
    <style>
        .app-container .content-container .side-body.padding-top{
            padding-top:0px!important;
        }
        .dhx_cal_event{top:0!important}
        .dishType{
            font-weight: bold;
            font-size: 18px;
            display: block;
            margin-top:14px;
        }
        a.button.more{
            color: white;
            display: block;
            margin-top: 20px;
            border: 1px solid white;
            width: 120px;
            padding: 10px;
            text-align: center;
        }
        .app-container .content-container .navbar-top{display:none!important}
        .dhx_scheduler_unit{height:1000px!important}
        .dhx_cal_data{height:900px!important;font-family: 'Open Sans'!important;}
        .custom_btn_pay_set{
            border: 1px solid #ff9823;
            color: #fff;
            text-shadow: none;
            background-color: #ff9823;
        }

        .custom_btn_paid_set{
            border: 1px solid #ff9823;
            color: #fff;
            text-shadow: none;
            background-color: #ff9823;
        }
        .dhx_body{    font-size: 15px!important;}
    </style>


    <script type="text/javascript" charset="utf-8">

        var sections = [
            {key:11, label:"11:00 - 12:00"},
            {key:12, label:"12:00 - 13:00"},
            {key:13, label:"13:00 - 14:00"},
            {key:14, label:"14:00 - 15:00"},
            {key:15, label:"15:00 - 16:00"},
            {key:16, label:"16:00 - 17:00"}
        ];
        scheduler.config.first_hour = 0;
        scheduler.config.last_hour = 1;
        scheduler.config.multi_day = true;
        scheduler.config.hour_size_px = 900;
        scheduler.config.xml_date = "%Y-%m-%d %H:%i";
        scheduler.templates.event_class = function(s,e,ev){ return ev.custom?"custom":""; };
        scheduler.templates.event_header = function(s,e,ev){ return ev.name };
        scheduler.templates.event_text = function(s,e,ev){ return ev.text };
        scheduler.config.lightbox.sections = [
            {name:"description", height:330, map_to:"text", type:"textarea" },
            {name:"custom", height:330, type:"select", options:sections, map_to:"time" },
            {name:"time", height:330, type:"time", map_to:"auto"}
        ]

        scheduler.createUnitsView({
            name:"unit",
            property:"section_id",
            list:sections
        });

        scheduler.init('scheduler_here',new Date(),"unit");
            scheduler.load("/admin/calendar/orders.json", 'json');

    </script>
@stop
