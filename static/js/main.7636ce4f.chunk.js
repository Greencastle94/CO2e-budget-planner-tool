(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a(217)},112:function(e,t,a){},113:function(e,t,a){},217:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),i=a(100),s=a.n(i),o=(a(112),a(25)),p=a(26),l=a(28),d=a(27),c=a(29),g=a(13),u=(a(113),a(66)),h=a(22),_=a(101),m=a.n(_),y=a(219),k=a(220),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={tempCurrentCO2e:""},a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(Object(g.a)(a))),a}return Object(c.a)(t,e),Object(p.a)(t,[{key:"handleChange",value:function(e){this.setState({tempCurrentCO2e:e})}},{key:"handleSubmit",value:function(e){this.props.confirm(this.state.tempCurrentCO2e)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h2",null,"Fyll i nedan ditt totala v\xe4xthusgasutsl\xe4pp f\xf6r ett \xe5r"),n.a.createElement("p",null,"G\xf6r klimatkalkylatorn ",n.a.createElement("a",{target:"_blank",href:"https://www.klimatkontot.se/Default"},"h\xe4r")," f\xf6rst"),n.a.createElement(b,{value:this.state.tempCurrentCO2e,handleChange:this.handleChange,handleSubmit:this.handleSubmit}))}}]),t}(r.Component);function b(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("label",null,n.a.createElement(m.a,{className:"NumberInput",strict:!0,min:0,precision:1,value:e.value,onChange:e.handleChange}),"ton"),n.a.createElement("br",null),n.a.createElement("input",{type:"submit",value:"N\xe4sta steg"}))}var f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).upperLimitRadius=100,a.exampleCountry=a.chooseExample(a.props.currentCO2e),a.exampleRadius=a.calculateRadius(a.exampleCountry.emissions),a.state={tempGoalCO2e:a.props.currentCO2e,goalRadius:a.calculateRadius(a.props.currentCO2e)},a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(Object(g.a)(a))),a}return Object(c.a)(t,e),Object(p.a)(t,[{key:"chooseExample",value:function(e){var t=e/2,a="china";for(var r in h){Math.abs(h[r].emission_per_capita-t)<Math.abs(h[a].emission_per_capita-t)&&(a=r)}return console.log(a+" "+h[a].emission_per_capita),{name:h[a].name,emissions:h[a].emission_per_capita}}},{key:"calculateRadius",value:function(e){return e/this.props.currentCO2e*this.upperLimitRadius}},{key:"handleChange",value:function(e){this.setState({tempGoalCO2e:e.target.value,goalRadius:this.calculateRadius(e.target.value)})}},{key:"handleSubmit",value:function(){this.props.confirm(this.state.tempGoalCO2e)}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"S\xe4tt din \xe5rsbudget"),n.a.createElement("svg",{viewBox:"0 0 220 220"},n.a.createElement(y.a,{standalone:!1,width:220,height:220,data:[{x:" ",y:1}],radius:this.state.goalRadius,innerRadius:this.state.goalRadius-20,colorScale:["green"]}),n.a.createElement("circle",{cx:"110",cy:"110",r:this.exampleRadius,fill:"none",stroke:"black",strokeWidth:3,strokeDasharray:"6"}),n.a.createElement("circle",{cx:"110",cy:"110",r:this.upperLimitRadius,fill:"none",stroke:"red",strokeWidth:3}),n.a.createElement(k.a,{textAnchor:"middle",verticalAnchor:"middle",x:110,y:110,style:{fontSize:20},text:"CO2e"})),n.a.createElement("div",{className:"averageCountry"},n.a.createElement("svg",{height:"10",width:"50"},n.a.createElement("line",{x1:"0",x2:"40",stroke:"black",strokeWidth:"10",strokeDasharray:"6"})),n.a.createElement("p",null,"Medelmedborgare i ",this.exampleCountry.name)),n.a.createElement("h2",null,this.state.tempGoalCO2e),n.a.createElement(C,{stepSize:"0.1",max:this.props.currentCO2e,startValue:this.state.tempGoalCO2e,handleChange:this.handleChange}),n.a.createElement("button",{type:"button",onClick:this.props.goBack},"Tillbaka"),n.a.createElement("button",{type:"button",onClick:this.handleSubmit},"N\xe4sta steg"))}}]),t}(r.Component);function C(e){return n.a.createElement("form",null,n.a.createElement("input",{type:"range",min:"0",max:e.max,step:e.stepSize,value:e.startValue,onChange:e.handleChange}))}var j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={transport:0,housing:0,food:0,other:0,pieAngle:0},a.monthlyBudget=a.props.budgetLimit/12*1e3,a.titles=["Transport","Boende","Mat & Dryck","\xd6vrig konsumtion"],a}return Object(c.a)(t,e),Object(p.a)(t,[{key:"calculateAngle",value:function(){var e=this.state;return(e.transport+e.housing+e.food+e.other)/this.monthlyBudget*360}},{key:"handleChange",value:function(e){switch(e.category){case"transport":this.setState({transport:e.emissions,pieAngle:this.calculateAngle()});break;case"housing":this.setState({housing:e.emissions,pieAngle:this.calculateAngle()});break;case"food":this.setState({food:e.emissions,pieAngle:this.calculateAngle()});break;case"other":this.setState({other:e.emissions,pieAngle:this.calculateAngle()})}}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Planera din m\xe5nadsbudget"),n.a.createElement("svg",{viewBox:"0 0 220 220"},n.a.createElement(y.a,{standalone:!1,data:[{x:this.titles[0],y:this.state.transport,label:" "},{x:this.titles[1],y:this.state.housing,label:" "},{x:this.titles[2],y:this.state.food,label:" "},{x:this.titles[3],y:this.state.other,label:" "}],startAngle:0,endAngle:this.state.pieAngle,width:220,height:220,radius:100,colorScale:["blue","yellow","green","pink"]}),n.a.createElement("circle",{cx:"110",cy:"110",r:"100",fill:"none",stroke:"black",strokeWidth:"3"})),n.a.createElement(O,{titles:this.titles,CO2eList:this.props.CO2eList,budgetLimit:this.monthlyBudget,handleChange:this.handleChange.bind(this)}),n.a.createElement("button",{type:"button",onClick:this.props.goBack},"Tillbaka"))}}]),t}(r.Component),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={openTab:"transport",budgetLeft:a.props.budgetLimit,sliderValue:0},a.categories=["transport","housing","food","other"],a}return Object(c.a)(t,e),Object(p.a)(t,[{key:"tabClick",value:function(e){this.setState({openTab:e.target.value})}},{key:"findIndexOfObject",value:function(e){for(var t in this.props.CO2eList[this.state.openTab])if(this.props.CO2eList[this.state.openTab][t].name==e.name)return t}},{key:"handleChange",value:function(e,t){var a=this.state.budgetLeft,r=e.target.value-t.moneySpent,n=r*t.intensity;if(a-n>=0){this.props.CO2eList[this.state.openTab][this.findIndexOfObject(t)].moneySpent+=r,a-=n;var i={category:this.state.openTab,emissions:0};for(var s in this.props.CO2eList[this.state.openTab])i.emissions+=this.props.CO2eList[this.state.openTab][s].co2eSpent();this.setState({budgetLeft:a}),this.props.handleChange(i)}}},{key:"calculateMax",value:function(e){return 0==e.intensity?8e3:e.moneySpent+this.state.budgetLeft/e.intensity}},{key:"render",value:function(){var e=this,t=0,a=this.props.titles.map(function(a){return n.a.createElement("button",{value:e.categories[t++],onClick:e.tabClick.bind(e)},a)}),r=this.props.CO2eList[this.state.openTab].map(function(t){return n.a.createElement("div",null,n.a.createElement("h3",null,t.display_name),n.a.createElement("p",null,t.moneySpent," kr"),n.a.createElement(C,{stepSize:"1",max:e.calculateMax(t),startValue:t.moneySpent,handleChange:function(a){return e.handleChange(a,t)}}))});return n.a.createElement("div",null,a,r)}}]),t}(r.Component),E=function(e){function t(e){var a;for(var r in Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={phase:1,currentCO2e:11,budgetLimit:6},a.CO2eList={transport:[],housing:[],food:[],other:[]},u){var n=u[r];switch(n.moneySpent=0,n.co2eSpent=function(){return this.moneySpent*this.intensity},n.chart_group){case"transport":a.CO2eList.transport.push(n);break;case"housing":a.CO2eList.housing.push(n);break;case"food":a.CO2eList.food.push(n);break;case"misc":a.CO2eList.other.push(n)}}return a}return Object(c.a)(t,e),Object(p.a)(t,[{key:"goBack",value:function(){this.setState({phase:this.state.phase-1})}},{key:"confirmCurrentEmissions",value:function(e){this.setState({currentCO2e:e,phase:2})}},{key:"confirmBudgetLimit",value:function(e){this.setState({budgetLimit:e,phase:3})}},{key:"render",value:function(){var e,t=this;switch(this.state.phase){case 1:e=n.a.createElement(v,{confirm:function(e){return t.confirmCurrentEmissions(e)}});break;case 2:e=n.a.createElement(f,{currentCO2e:this.state.currentCO2e,confirm:function(e){return t.confirmBudgetLimit(e)},goBack:this.goBack.bind(this)});break;case 3:e=n.a.createElement(j,{CO2eList:this.CO2eList,budgetLimit:this.state.budgetLimit,goBack:this.goBack.bind(this)})}return n.a.createElement("div",{className:"App"},e)}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},22:function(e){e.exports={china:{name:"Kina",emission_per_capita:"6.3"},"south africa":{name:"Sydafrika",emission_per_capita:"6.0"},greece:{name:"Grekland",emission_per_capita:"5.7"},portugal:{name:"Portugal",emission_per_capita:"5.3"},thailand:{name:"Thailand",emission_per_capita:"4.5"},mexico:{name:"Mexiko",emission_per_capita:"4.1"},romania:{name:"Rum\xe4nien",emission_per_capita:"3.7"},egypt:{name:"Egypten",emission_per_capita:"2.4"},vietnam:{name:"Vietnam",emission_per_capita:"2.2"},india:{name:"Indien",emission_per_capita:"1.7"},philippines:{name:"Fillipinerna",emission_per_capita:"1.4"},pakistan:{name:"Pakistan",emission_per_capita:"1.1"},bolivia:{name:"Bolivia",emission_per_capita:"0.5"},kenya:{name:"Kenya",emission_per_capita:"0.3"}}},66:function(e){e.exports={agriculture:{name:"agriculture",category_order:"4",display_name:"Tr\xe4dg\xe5rd & blommor",parent_code:"home_garden",parent_order:"2",parent_display:"Hem & tr\xe4dg\xe5rd",chart_group:"housing",tags:"blommor, tr\xe4dg\xe5rdsv\xe4xter, julgranar, jord, g\xf6dning o krukor, ",spending:"12333",intensity:"0.0748893"},alcohol:{name:"alcohol",category_order:"5",display_name:"Alkohol",parent_code:"food",parent_order:"5",parent_display:"Mat & dryck",chart_group:"food",tags:"sprit, vin, stark\xf6l, \xf6l klass I o II, ",spending:"35907",intensity:"0.0224244"},appliances:{name:"appliances",category_order:"3",display_name:"Husger\xe5d & aparater",parent_code:"home_garden",parent_order:"2",parent_display:"Hem & tr\xe4dg\xe5rd",chart_group:"housing",tags:"st\xf6rre hush\xe5llsapparater som till\xe4ggsutrustning, mindre elektriska hush\xe5llsapparater, husger\xe5d, st\xf6rre motordrivna apparater & verktyg, mindre verktyg, tr\xe4dg\xe5rdsutrustn, tillbeh\xf6r, batterier o lampor, ",spending:"27702",intensity:"0.0530633"},aviation:{name:"aviation",category_order:"8",display_name:"Flyg",parent_code:"transport",parent_order:"4",parent_display:"Transport",chart_group:"transport",tags:"lufttransporter, ",spending:"13318",intensity:"0.47"},bar:{name:"bar",category_order:"4",display_name:"Bar",parent_code:"food",parent_order:"5",parent_display:"Mat & dryck",chart_group:"food",tags:"restauranger, caf\xe9er, andra matserveringar, kiosker o automater, ",spending:"47260",intensity:"0.0284957"},beauty:{name:"beauty",category_order:"4",display_name:"H\xe5r & sk\xf6nhet",parent_code:"health",parent_order:"7",parent_display:"H\xe4lsa & sk\xf6nhet",chart_group:"misc",tags:"h\xe5r- & sk\xf6nhetsv\xe5rd, ",spending:"23149",intensity:"0.0129212"},books:{name:"books",category_order:"6",display_name:"B\xf6cker & tidskrifter",parent_code:"shopping",parent_order:"6",parent_display:"Shopping",chart_group:"misc",tags:"b\xf6cker inkl l\xe4rob\xf6cker, exkl frim\xe4rksalbum, tidningar & tidskrifter, \xf6vriga trycksaker, skrivmaterial, ",spending:"16924",intensity:"0.0145709"},bus:{name:"bus",category_order:"6",display_name:"L\xe5ngv\xe4ga bussresor",parent_code:"transport",parent_order:"4",parent_display:"Transport",chart_group:"transport",tags:"l\xe5ngv\xe4ga busstransporter (kolla upp intensitet), ",spending:"7397",intensity:"0.0276377"},car_maint:{name:"car_maint",category_order:"4",display_name:"Underh\xe5ll & avgifter",parent_code:"transport",parent_order:"4",parent_display:"Transport",chart_group:"transport",tags:"underh\xe5ll & reparation, bilbesiktning, broavgifter, parkering, rep & underh\xe5ll av st\xf6rre fritidsvaror, ",spending:"34833",intensity:"0.0172234"},car_rent:{name:"car_rent",category_order:"2",display_name:"Bilhyra & bilpool",parent_code:"transport",parent_order:"4",parent_display:"Transport",chart_group:"transport",tags:"bilf\xf6rm\xe5n & bilhyra, ",spending:"18730",intensity:"0.0206762"},cash:{name:"cash",category_order:"3",display_name:"Kontantuttag",parent_code:"other",parent_order:"9",parent_display:"\xf6vrigt",chart_group:"misc",tags:", ",spending:"1",intensity:"0.03"},charity:{name:"charity",category_order:"2",display_name:"V\xe4lg\xf6renhet",parent_code:"other",parent_order:"9",parent_display:"\xf6vrigt",chart_group:"misc",tags:", ",spending:"1",intensity:"0"},clothing:{name:"clothing",category_order:"1",display_name:"Kl\xe4der & accessoarer",parent_code:"shopping",parent_order:"6",parent_display:"Shopping",chart_group:"misc",tags:"material till kl\xe4der, kl\xe4der, kl\xe4daccessoarer, sybeh\xf6r & garn, skor, and personl varor, tex v\xe4skor, barnvagnar, -stolar o div accesoarer, ",spending:"86833",intensity:"0.0501757"},culture:{name:"culture",category_order:"1",display_name:"Kultur & n\xf6je",parent_code:"leisure",parent_order:"8",parent_display:"Fritid",chart_group:"misc",tags:"kulturella tj\xe4nster; bio, museer, tv-avgifter, foto- & framkallning, spel; nettot av satsade belopp minus utbetalda vinster, ",spending:"47725",intensity:"0.00992986"},district_heating:{name:"district_heating",category_order:"2",display_name:"Fj\xe4rrv\xe4rme",parent_code:"utilities_heating",parent_order:"3",parent_display:"El & uppv\xe4rmning",chart_group:"housing",tags:"fj\xe4rrv\xe4rme, ",spending:"32404",intensity:"0.108385"},electricity:{name:"electricity",category_order:"1",display_name:"El",parent_code:"utilities_heating",parent_order:"3",parent_display:"El & uppv\xe4rmning",chart_group:"housing",tags:"elstr\xf6m, ",spending:"59056",intensity:"0.0230731"},electronics:{name:"electronics",category_order:"2",display_name:"Hemelektronik",parent_code:"shopping",parent_order:"6",parent_display:"Shopping",chart_group:"misc",tags:"teleutrustning, utrust f\xf6r att ta emot, spela in o \xe5terge ljud/bild; tv, radio mm, kameror, \xf6vrig fotoutrustning & optiska instrument, It-utrustning; pc, skrivare, tillbeh\xf6r o kalkylatorer, skrivmask., film, cd, kasetter; inspelade & oinspelade, ",spending:"26195",intensity:"0.0154758"},ferry:{name:"ferry",category_order:"9",display_name:"F\xe4rja",parent_code:"transport",parent_order:"4",parent_display:"Transport",chart_group:"transport",tags:"sj\xf6transport, ",spending:"1128",intensity:"0.333029"},financial_service:{name:"financial_service",category_order:"2",display_name:"R\xe4nta & amortering",parent_code:"housing",parent_order:"1",parent_display:"Boende & hush\xe5ll",chart_group:"housing",tags:"finansiella tj\xe4nster, ",spending:"60902",intensity:"0.00462206"},food_other:{name:"food_other",category_order:"100",display_name:"Mat & dryck \xf6vrigt",parent_code:"food",parent_order:"5",parent_display:"Mat & dryck",chart_group:"food",tags:"",spending:"0",intensity:"0.0526068"},fuel:{name:"fuel",category_order:"1",display_name:"Br\xe4nsle",parent_code:"transport",parent_order:"4",parent_display:"Transport",chart_group:"transport",tags:"driv- o sm\xf6rjmedel; bensin, diesel, olja, glykol o k-sprit, ",spending:"49057",intensity:"0.249499"},furniture:{name:"furniture",category_order:"1",display_name:"M\xf6bler & inredning",parent_code:"home_garden",parent_order:"2",parent_display:"Hem & tr\xe4dg\xe5rd",chart_group:"housing",tags:"m\xf6bler, armatur, inredningsartiklar o tavlor, mattor, inkl inl\xe4ggning, hush\xe5llstextilier, ",spending:"43496",intensity:"0.0425566"},gas:{name:"gas",category_order:"3",display_name:"Gas",parent_code:"utilities_heating",parent_order:"3",parent_display:"El & uppv\xe4rmning",chart_group:"housing",tags:"gas, ",spending:"616",intensity:"0.0721686"},glasses_lenses:{name:"glasses_lenses",category_order:"3",display_name:"Optik",parent_code:"health",parent_order:"7",parent_display:"H\xe4lsa & sk\xf6nhet",chart_group:"misc",tags:"glas\xf6gon, linser, etc, ",spending:"5933",intensity:"0.0154924"},groceries:{name:"groceries",category_order:"1",display_name:"Livsmedel",parent_code:"food",parent_order:"5",parent_display:"Mat & dryck",chart_group:"food",tags:"br\xf6d & spannm\xe5lsprodukter, k\xf6tt, fisk, mj\xf6lk, ost & \xe4gg, oljor & fetter, frukt, gr\xf6nsaker, s\xf6tsaker, glass, sylt, marmelad & konfekt, salt, kryddor, s\xe5ser o homogeniserad barnmat, kaffe, te & choklad, l\xe4sk, juice, saft & mineralvatten, ",spending:"217260",intensity:"0.0841285"},health:{name:"health",category_order:"1",display_name:"V\xe5rd",parent_code:"health",parent_order:"7",parent_display:"H\xe4lsa & sk\xf6nhet",chart_group:"misc",tags:"\xf6ppen h\xe4lso- o sjukv\xe5rd, patientavgifter, tandv\xe5rd, patientavgifter, sjukgymnast, chiropraktor, terapeut, mm; patientavgifter, sluten sjukv\xe5rd, patientavgifter, ",spending:"34680",intensity:"0.00901872"},health_care:{name:"health_care",category_order:"5",display_name:"Omsorg",parent_code:"health",parent_order:"7",parent_display:"H\xe4lsa & sk\xf6nhet",chart_group:"misc",tags:"Barnomsorg, \xc4ldreomsorg, personlig assistent, Individomsorg, ",spending:"43429",intensity:"0.00161267"},health_other:{name:"health_other",category_order:"100",display_name:"H\xe4lsa & sk\xf6nhet \xf6vrigt",parent_code:"health",parent_order:"7",parent_display:"H\xe4lsa & sk\xf6nhet",chart_group:"misc",tags:"",spending:"0",intensity:"0.0134408"},home_garden_other:{name:"home_garden_other",category_order:"100",display_name:"Hem & tr\xe4dg\xe5rd \xf6vrigt",parent_code:"home_garden",parent_order:"2",parent_display:"Hem & tr\xe4dg\xe5rd",chart_group:"housing",tags:"",spending:"0",intensity:"0.0503742"},housing_other:{name:"housing_other",category_order:"100",display_name:"Boende & hush\xe5ll \xf6vrigt",parent_code:"housing",parent_order:"1",parent_display:"Boende & hush\xe5ll",chart_group:"housing",tags:"",spending:"0",intensity:"0.0019851"},insurance:{name:"insurance",category_order:"4",display_name:"F\xf6rs\xe4kring & avgifter",parent_code:"housing",parent_order:"1",parent_display:"Boende & hush\xe5ll",chart_group:"housing",tags:"f\xf6rs\xe4kringstj\xe4nster, ",spending:"25157",intensity:"0.00449631"},internet_tele:{name:"internet_tele",category_order:"3",display_name:"Media, Tele & IT",parent_code:"housing",parent_order:"1",parent_display:"Boende & hush\xe5ll",chart_group:"housing",tags:"teletj\xe4nster; fast ,mobil & internet, ",spending:"50705",intensity:"0.010041"},jewelry:{name:"jewelry",category_order:"1",display_name:"Smycken",parent_code:"shopping",parent_order:"6",parent_display:"Shopping",chart_group:"misc",tags:"smycken, ur inkl reparationer, ",spending:"6075",intensity:"0.0358219"},leisure_other:{name:"leisure_other",category_order:"100",display_name:"Fritid \xf6vrigt",parent_code:"leisure",parent_order:"8",parent_display:"Fritid",chart_group:"misc",tags:"",spending:"0",intensity:"0.014149"},liquid_fuels:{name:"liquid_fuels",category_order:"5",display_name:"Olja",parent_code:"utilities_heating",parent_order:"3",parent_display:"El & uppv\xe4rmning",chart_group:"housing",tags:"flytande br\xe4nslen; olja, fotogen & gasol, ",spending:"1665",intensity:"0.510972"},other_other:{name:"other_other",category_order:"100",display_name:"\xf6vrigt \xf6vrigt",parent_code:"other",parent_order:"9",parent_display:"\xf6vrigt",chart_group:"misc",tags:"",spending:"0",intensity:"0.0401313"},outlay:{name:"outlay",category_order:"4",display_name:"Utl\xe4gg",parent_code:"other",parent_order:"9",parent_display:"\xf6vrigt",chart_group:"misc",tags:", ",spending:"1",intensity:"0"},pets:{name:"pets",category_order:"1",display_name:"Husdjur",parent_code:"other",parent_order:"9",parent_display:"\xf6vrigt",chart_group:"misc",tags:"husdjur, djurmat o djurutrustning, veterin\xe4rs- & andra tj\xe4nster f\xf6r djur; djurpensionat etc, ",spending:"11415",intensity:"0.0401436"},pharmacy:{name:"pharmacy",category_order:"2",display_name:"Apotek",parent_code:"health",parent_order:"7",parent_display:"H\xe4lsa & sk\xf6nhet",chart_group:"misc",tags:"l\xe4kemedel & vitaminer, andra sjukv\xe5rdsprodukter, elektriska apparater f\xf6r personlig omv\xe5rdnad, andra varor f\xf6r kropps- & sk\xf6nhetsv\xe5rd, ",spending:"41903",intensity:"0.0293559"},public_trans:{name:"public_trans",category_order:"5",display_name:"Kollektivtrafik",parent_code:"transport",parent_order:"4",parent_display:"Transport",chart_group:"transport",tags:"kollektivtrafik, ",spending:"19804",intensity:"0.0713352"},rent:{name:"rent",category_order:"1",display_name:"Hyra",parent_code:"housing",parent_order:"1",parent_display:"Boende & hush\xe5ll",chart_group:"housing",tags:"faktisk hyra i hyressr\xe4tter, kallhyra, bostadsr\xe4tt, nyttjandev\xe4rde kallhyra, sm\xe5hus, nyttjandev\xe4rde kallhyra, fritidshus, nyttjandev\xe4rde kallhyra, ",spending:"357389",intensity:"0"},repair_build:{name:"repair_build",category_order:"2",display_name:"Bygg & renovering",parent_code:"home_garden",parent_order:"2",parent_display:"Hem & tr\xe4dg\xe5rd",chart_group:"housing",tags:"varor & tj\xe4nster f\xf6r underh\xe5ll av bostaden, ",spending:"7277",intensity:"0.0465002"},repair_home:{name:"repair_home",category_order:"5",display_name:"Reparation",parent_code:"home_garden",parent_order:"2",parent_display:"Hem & tr\xe4dg\xe5rd",chart_group:"housing",tags:"m\xf6belreparationer, rep av hush\xe5llsapparater, ",spending:"232",intensity:"0.0132416"},repair_rent:{name:"repair_rent",category_order:"5",display_name:"Reparation & hyra",parent_code:"shopping",parent_order:"6",parent_display:"Shopping",chart_group:"misc",tags:"lagning, hyra & tv\xe4tt av kl\xe4der, reparation & hyra av skor, rep av audiovisuell, foto- &, It-utrustning, ",spending:"1158",intensity:"0.0139583"},restaurant:{name:"restaurant",category_order:"2",display_name:"Restaurang & Lunch",parent_code:"food",parent_order:"5",parent_display:"Mat & dryck",chart_group:"food",tags:"restauranger, caf\xe9er, andra matserveringar, kiosker o automater, ",spending:"47260",intensity:"0.005"},services:{name:"services",category_order:"5",display_name:"Tj\xe4nster",parent_code:"housing",parent_order:"1",parent_display:"Boende & hush\xe5ll",chart_group:"housing",tags:"hush\xe5llstj\xe4nster; st\xe4dning, tv\xe4tt o hyra av hush\xe5llsutrustning, ",spending:"7915",intensity:"0.0117398"},shopping_other:{name:"shopping_other",category_order:"100",display_name:"Shopping \xf6vrigt",parent_code:"shopping",parent_order:"6",parent_display:"Shopping",chart_group:"misc",tags:"",spending:"0",intensity:"0.0374921"},snacks:{name:"snacks",category_order:"3",display_name:"Caf\xe9 & snacks",parent_code:"food",parent_order:"5",parent_display:"Mat & dryck",chart_group:"food",tags:"restauranger, caf\xe9er, andra matserveringar, kiosker o automater, ",spending:"47260",intensity:"0.0284957"},solid_fuels:{name:"solid_fuels",category_order:"4",display_name:"Pellets & Ved",parent_code:"utilities_heating",parent_order:"3",parent_display:"El & uppv\xe4rmning",chart_group:"housing",tags:"fasta br\xe4nslen; ved, kol, pellets & flis, ",spending:"2502",intensity:"0.0462728"},sport_equip:{name:"sport_equip",category_order:"3",display_name:"Sport- & fritidsartiklar",parent_code:"shopping",parent_order:"6",parent_display:"Shopping",chart_group:"misc",tags:"musikinstrument & utrustning f\xf6r inomhusaktiviteter, sport-, fiske-, & campingutrustning mm, ",spending:"9236",intensity:"0.0395066"},sports:{name:"sports",category_order:"2",display_name:"Sport & tr\xe4ning",parent_code:"leisure",parent_order:"8",parent_display:"Fritid",chart_group:"misc",tags:"sport- & rekreationstj\xe4nster; hyra av utrustning, deltagaravgifter, ",spending:"28273",intensity:"0.0136416"},taxi:{name:"taxi",category_order:"7",display_name:"Taxi",parent_code:"transport",parent_order:"4",parent_display:"Transport",chart_group:"transport",tags:"taxi (kolla upp intensitet), ",spending:"1",intensity:"0.0276377"},tobacco:{name:"tobacco",category_order:"6",display_name:"Tobak",parent_code:"food",parent_order:"5",parent_display:"Mat & dryck",chart_group:"food",tags:"tobak, ",spending:"28321",intensity:"0.00897328"},toys:{name:"toys",category_order:"4",display_name:"Leksaker",parent_code:"shopping",parent_order:"6",parent_display:"Shopping",chart_group:"misc",tags:"leksaker, spel, juldekorationer, fyrverkeriutrustning o hobbyartiklar, ",spending:"11855",intensity:"0.0275447"},train_bus:{name:"train_bus",category_order:"6",display_name:"T\xe5g",parent_code:"transport",parent_order:"4",parent_display:"Transport",chart_group:"transport",tags:"j\xe4rnv\xe4gstransporter, ",spending:"6123",intensity:"0.020592"},transaction:{name:"transaction",category_order:"5",display_name:"\xf6verf\xf6ring",parent_code:"other",parent_order:"9",parent_display:"\xf6vrigt",chart_group:"misc",tags:", ",spending:"1",intensity:"0"},transport_other:{name:"transport_other",category_order:"100",display_name:"Transport \xf6vrigt",parent_code:"transport",parent_order:"4",parent_display:"Transport",chart_group:"transport",tags:"",spending:"0",intensity:"0.104931"},travel:{name:"travel",category_order:"2",display_name:"Hotell & \xf6vernattning",parent_code:"leisure",parent_order:"8",parent_display:"Fritid",chart_group:"misc",tags:"paketresor, hotell- & annan \xf6vernattningsservice, ",spending:"33059",intensity:"0.0206738"},uncategorized:{name:"uncategorized",category_order:"6",display_name:"Okategoriserat",parent_code:"other",parent_order:"9",parent_display:"\xf6vrigt",chart_group:"misc",tags:", ",spending:"1",intensity:"0.03"},utilities_heating_other:{name:"utilities_heating_other",category_order:"100",display_name:"El & uppv\xe4rmning \xf6vrigt",parent_code:"utilities_heating",parent_order:"3",parent_display:"El & uppv\xe4rmning",chart_group:"housing",tags:"",spending:"0",intensity:"0.0611546"},vehicles:{name:"vehicles",category_order:"3",display_name:"Fordon & tilbeh\xf6r",parent_code:"transport",parent_order:"4",parent_display:"Transport",chart_group:"transport",tags:"bilar, motorcyklar, skotrar, mopeder o motorcross, cyklar, reservdelar & tillbeh\xf6r, st\xf6rre varaktiga fritidsvaror; husvagnar, b\xe5tar o sportutrustning, ",spending:"76103",intensity:"0.0283963"}}}},[[107,1,2]]]);
//# sourceMappingURL=main.7636ce4f.chunk.js.map