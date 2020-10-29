import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DataItem} from '../biz/bo/DataItem';
import TimeUtil from '../../util/time-util';

@Component({
  selector: 'app-echart-demo',
  templateUrl: './echart-demo.component.html',
  styleUrls: ['./echart-demo.component.less']
})
export class EchartDemoComponent implements OnInit {

  constructor() {
  }

  private items: Array<DataItem> = [];


  ngOnInit(): void {
    this.getItems();
  }

  public getItems(): Array<DataItem> {
    let jsonArray = [
      {
        'rssi': '-54dbm',
        'vbat': '3.4760000705718994',
        'created_time': '1/10/2020 11:43:12.592112+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.4649999141693115',
        'created_time': '1/10/2020 11:51:44.609009+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.4709999561309814',
        'created_time': '1/10/2020 12:00:17.610466+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.4700000286102295',
        'created_time': '1/10/2020 12:10:57.613762+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.4560000896453857',
        'created_time': '1/10/2020 12:21:37.587527+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.4660000801086426',
        'created_time': '1/10/2020 12:30:09.569603+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.4630000591278076',
        'created_time': '1/10/2020 12:40:50.602708+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.4600000381469727',
        'created_time': '1/10/2020 12:51:31.643149+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.443000078201294',
        'created_time': '1/10/2020 13:00:03.586716+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.4000000953674316',
        'created_time': '1/10/2020 13:10:43.596914+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.453000068664551',
        'created_time': '1/10/2020 13:21:21.631943+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.440999984741211',
        'created_time': '1/10/2020 13:31:57.638452+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.447000026702881',
        'created_time': '1/10/2020 13:40:28.619811+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-48dbm',
        'vbat': '3.444000005722046',
        'created_time': '1/10/2020 13:51:08.648477+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.433000087738037',
        'created_time': '1/10/2020 14:01:48.63719+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.4549999237060547',
        'created_time': '1/10/2020 14:10:21.649055+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.427999973297119',
        'created_time': '1/10/2020 14:21:03.682476+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.4240000247955322',
        'created_time': '1/10/2020 14:31:46.678501+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.4230000972747803',
        'created_time': '1/10/2020 14:40:20.648723+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-54dbm',
        'vbat': '3.427999973297119',
        'created_time': '1/10/2020 14:51:01.695364+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-45dbm',
        'vbat': '3.427999973297119',
        'created_time': '1/10/2020 15:04:32.890177+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.4230000972747803',
        'created_time': '1/10/2020 15:10:55.620487+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.4210000038146973',
        'created_time': '1/10/2020 15:21:34.612027+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.4189999103546143',
        'created_time': '1/10/2020 15:30:06.608057+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.4159998893737793',
        'created_time': '1/10/2020 15:40:46.623231+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.4130001068115234',
        'created_time': '1/10/2020 15:51:26.639921+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.4130001068115234',
        'created_time': '1/10/2020 16:02:05.711742+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.4000000953674316',
        'created_time': '1/10/2020 16:10:37.653809+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.4070000648498535',
        'created_time': '1/10/2020 16:21:17.664293+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.4040000438690186',
        'created_time': '1/10/2020 16:31:57.694904+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.4170000553131104',
        'created_time': '1/10/2020 16:40:29.670964+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.3989999294281006',
        'created_time': '1/10/2020 16:51:09.686275+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.3959999084472656',
        'created_time': '1/10/2020 17:01:45.70248+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-52dbm',
        'vbat': '3.3940000534057617',
        'created_time': '1/10/2020 17:10:14.704373+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-49dbm',
        'vbat': '3.9579999446868896',
        'created_time': '13/10/2020 15:30:01.184038+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-58dbm',
        'vbat': '3.9260001182556152',
        'created_time': '13/10/2020 16:00:16.514193+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-61dbm',
        'vbat': '3.9200000762939453',
        'created_time': '13/10/2020 16:10:02.54961+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-66dbm',
        'vbat': '3.9140000343322754',
        'created_time': '13/10/2020 17:20:12.462027+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-63dbm',
        'vbat': '3.8989999294281006',
        'created_time': '13/10/2020 17:40:01.660929+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-77dbm',
        'vbat': '3.8949999809265137',
        'created_time': '13/10/2020 17:50:03.57328+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-72dbm',
        'vbat': '3.878999948501587',
        'created_time': '13/10/2020 18:20:09.489756+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-70dbm',
        'vbat': '3.687000036239624',
        'created_time': '13/10/2020 18:30:15.554362+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-68dbm',
        'vbat': '3.86899995803833',
        'created_time': '13/10/2020 18:40:24.561907+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-71dbm',
        'vbat': '3.8610000610351562',
        'created_time': '13/10/2020 18:50:22.569544+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-61dbm',
        'vbat': '3.8559999465942383',
        'created_time': '13/10/2020 19:00:01.651969+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-68dbm',
        'vbat': '3.8519999980926514',
        'created_time': '13/10/2020 19:10:23.500026+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-68dbm',
        'vbat': '3.8480000495910645',
        'created_time': '13/10/2020 19:20:10.449903+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-70dbm',
        'vbat': '3.8380000591278076',
        'created_time': '13/10/2020 19:40:11.644449+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-66dbm',
        'vbat': '3.8340001106262207',
        'created_time': '13/10/2020 19:50:06.526766+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-72dbm',
        'vbat': '3.8299999237060547',
        'created_time': '13/10/2020 20:00:20.532306+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-61dbm',
        'vbat': '3.812999963760376',
        'created_time': '14/10/2020 07:10:03.636802+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-61dbm',
        'vbat': '3.805000066757202',
        'created_time': '14/10/2020 07:20:07.688367+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-71dbm',
        'vbat': '3.802999973297119',
        'created_time': '14/10/2020 07:30:17.746787+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-71dbm',
        'vbat': '3.7980000972747803',
        'created_time': '14/10/2020 07:40:01.717621+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-61dbm',
        'vbat': '3.7909998893737793',
        'created_time': '14/10/2020 07:50:10.678145+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-69dbm',
        'vbat': '3.7730000019073486',
        'created_time': '14/10/2020 08:20:13.841574+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-74dbm',
        'vbat': '3.7230000495910645',
        'created_time': '14/10/2020 08:30:21.092165+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-69dbm',
        'vbat': '3.759999990463257',
        'created_time': '14/10/2020 08:40:17.992904+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-63dbm',
        'vbat': '3.688999891281128',
        'created_time': '14/10/2020 08:50:11.117934+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-68dbm',
        'vbat': '3.749000072479248',
        'created_time': '14/10/2020 09:00:09.037322+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-71dbm',
        'vbat': '3.740999937057495',
        'created_time': '14/10/2020 09:10:22.850735+08:08',
        'reg_code': '356802050055416'
      },
      {
        'rssi': '-69dbm',
        'vbat': '3.7360000610351562',
        'created_time': '14/10/2020 09:20:00.082321+08:08',
        'reg_code': '356802050055416'
      }
    ];



    let data = ['rssi', 'vbat', 'created_time', 'reg_code'];
    this.dataArray.push(data);
    console.log(jsonArray.length);
    for (let i = 0; i < jsonArray.length; i++) {
      let tempArray = [];
      let rssi: number = Number(jsonArray[i].rssi.substr(0, jsonArray[i].rssi.length - 3));
      tempArray.push(Math.abs(rssi));
      tempArray.push(jsonArray[i].vbat);
      tempArray.push(jsonArray[i].created_time);

      tempArray.push(jsonArray[i].reg_code);
      this.dataArray.push(tempArray);
      console.log(i);
      console.log(jsonArray[i].created_time);
      console.log(new Date(jsonArray[i].created_time));
      console.log(Date.parse(jsonArray[i].created_time));
      if (Date.parse(jsonArray[i].created_time)) {
        console.log(TimeUtil.getDateYYYYMMDD(Date.parse(jsonArray[i].created_time)));
      }

      console.log('==================');
    }
    console.log(this.dataArray);

    // @ts-ignore
    this.items = jsonArray;
    return this.items;
  }

  private dataArray = [];

  private echartsIntance:any;

  onChartInit(ec) {
    this.echartsIntance = ec;
    console.log(this.echartsIntance);
  }

  chartOption = {
    color: '#3D71F7',

    dataset: {
      source: this.dataArray
    },
    title: {
      text: "Main Title",
      subtext: "Sub Title",
      left: "center",
      top: "center",
      textStyle: {
        fontSize: 30
      },
      subtextStyle: {
        fontSize: 20
      }
    },
    tooltip: {
      trigger: 'axis',
      showContent:true,
      transitionDuration:0,
      // formatter: '{c}',
      // axisPointer: {
      //   type: 'cross',
      //   label:{
      //     formatter:"aa:dd"
      //   }
      // },
      backgroundColor: 'rgba(245, 245, 245, 0.8)',
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      textStyle: {
        color: '#000'
      },

      position: function (pos, params, el, elRect, size) {
        console.log(pos);
        console.log(params);
        console.log(elRect);
        console.log(size);
        var obj = {top: pos[1], left: pos[0]};
        return obj;
      },
      // extraCssText: 'width: 170px'
      extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        show: true,
        formatter: (value) => {
          console.log(new Date(value));
          let date = new Date(value);
          let dateYYYYMMDDHHMMSS = '';
          if (date) {
            try {
              dateYYYYMMDDHHMMSS = TimeUtil.getDateYYYYMMDDHHMMSS(date.getTime());
            } catch (e) {
            }
          }
          return dateYYYYMMDDHHMMSS;
        }
      },
    },
    yAxis: {
      /*axisPointer: {
        triggerTooltip: true,
        show: true
      }*/
      // axisPointer:{
      //   label:{
      //     formatter:'ccc'
      //   }
      // },
    },
    series: [
      {
        type: 'line',
        encode: {
          // 将 "created_time" 列映射到 X 轴。
          x: 'created_time',
          // 将 "rssi" 列映射到 Y 轴。
          y: 'rssi'
        },
        // smooth: true
      }
    ]
  };
}
