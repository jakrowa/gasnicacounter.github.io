const _0x3573a7=_0x4406;function _0x4406(_0x3634b3,_0x27cab6){const _0x2ecace=_0x2eca();return _0x4406=function(_0x440695,_0x22837c){_0x440695=_0x440695-0x11e;let _0x34ba86=_0x2ecace[_0x440695];return _0x34ba86;},_0x4406(_0x3634b3,_0x27cab6);}function _0x2eca(){const _0x482a54=['firestore','doc','submit','log','1706124fJwhCQ','Zalogowano\x20pomyślnie','update','Licznik\x20został\x20ustawiony\x20na\x20','counterValue','Zaktualizowano','38722410oBbagZ','password','Podaj\x20nową\x20wartość\x20licznika:','1:776426877928:web:0c6559a3fcc4c64d206a5d','create','User\x20is\x20interacting\x20with\x20the\x20page','Zostałeś\x20wylogowany\x20z\x20powodu\x20braku\x20aktywności\x20przez\x2010\x20minut!','where','Podana\x20wartość\x20nie\x20jest\x20liczbą!','admin_status','#counter-section','776426877928','exists','data','click','#loginForm','14349150syfzOZ','Pomyślnie\x20załadowano\x20licznik!','style','error','Wylogowano','users','Nie\x20znaleziono\x20licznika!\x20Sprawdź\x20czy\x20został\x20utworzony!','38648VfqoPP','none','Success','Logowanie\x20nie\x20powiodło\x20się.\x20Sprawdź\x20login\x20bądź\x20hasło!','login','value','querySelector','preventDefault','Licznik\x20nie\x20widnieje\x20w\x20bazie\x20danych!','countergasnica','block','collection','get','logoutButton','G-6Z9SFEGPKR','getElementById','docs','display','3359846QCZxDo','countergasnica.firebaseapp.com','Nie\x20znaleziono\x20użytkownika!\x20Sprawdź\x20czy\x20został\x20utworzony!','loginForm','Error','15664ayLsvb','empty','reload','then','catch','471GfYxDl','userLogged','Wylogowano\x20pomyślnie','1141FdFXWt','countergasnica.appspot.com','#adminPanelButton','Błąd\x20podczas\x20aktualizowania\x20statusu\x20użytkownika:\x20','487500CPGaYZ','User\x20is\x20closing\x20the\x20page','addEventListener','95kaFmMW','counter','innerHTML','Wystąpił\x20niezidentyfikowany\x20błąd!\x20Wartość:\x20'];_0x2eca=function(){return _0x482a54;};return _0x2eca();}(function(_0x2e4822,_0x3af040){const _0x1ce6ff=_0x4406,_0x49db82=_0x2e4822();while(!![]){try{const _0x337150=parseInt(_0x1ce6ff(0x161))/0x1+parseInt(_0x1ce6ff(0x145))/0x2+-parseInt(_0x1ce6ff(0x14f))/0x3*(-parseInt(_0x1ce6ff(0x14a))/0x4)+-parseInt(_0x1ce6ff(0x159))/0x5*(-parseInt(_0x1ce6ff(0x156))/0x6)+-parseInt(_0x1ce6ff(0x152))/0x7*(-parseInt(_0x1ce6ff(0x133))/0x8)+-parseInt(_0x1ce6ff(0x12c))/0x9+-parseInt(_0x1ce6ff(0x167))/0xa;if(_0x337150===_0x3af040)break;else _0x49db82['push'](_0x49db82['shift']());}catch(_0x1759d2){_0x49db82['push'](_0x49db82['shift']());}}}(_0x2eca,0xd34bf));var firebaseConfig={'apiKey':'AIzaSyBCiswuXhqa5tUe2-DhyZyyC_1nop8dLXU','authDomain':_0x3573a7(0x146),'projectId':_0x3573a7(0x13c),'storageBucket':_0x3573a7(0x153),'messagingSenderId':_0x3573a7(0x127),'appId':_0x3573a7(0x11f),'measurementId':_0x3573a7(0x141)};firebase['initializeApp'](firebaseConfig);var db=firebase[_0x3573a7(0x15d)](),userLogged=![];function getCounter(){const _0x219aab=_0x3573a7;if(!userLogged)return;else{const _0xe17bab=db['collection'](_0x219aab(0x15a))['doc'](_0x219aab(0x15a));_0xe17bab['get']()[_0x219aab(0x14d)](function(_0x5d2476){const _0x8da2af=_0x219aab;if(_0x5d2476[_0x8da2af(0x128)]){const _0x4550e2=_0x5d2476[_0x8da2af(0x129)]()[_0x8da2af(0x138)];document['getElementById'](_0x8da2af(0x165))[_0x8da2af(0x15b)]=_0x4550e2;}else notis[_0x8da2af(0x120)](_0x8da2af(0x149),_0x8da2af(0x132),0xa,!![]);})[_0x219aab(0x14e)](function(_0x25e4ec){const _0x5c1057=_0x219aab;notis['create'](_0x5c1057(0x149),_0x5c1057(0x15c)+_0x25e4ec+'!',0xa,!![]),console[_0x5c1057(0x160)](_0x25e4ec);});}}function checkAdminStatus(_0x182ab5,_0x5347e1){const _0x1e8578=_0x3573a7;if(!userLogged)return;else{const _0x248a60=db[_0x1e8578(0x13e)](_0x1e8578(0x131));_0x248a60[_0x1e8578(0x123)](_0x1e8578(0x150),'==',!![])[_0x1e8578(0x123)]('login','==',_0x182ab5)[_0x1e8578(0x123)]('password','==',_0x5347e1)[_0x1e8578(0x13f)]()[_0x1e8578(0x14d)](function(_0x50859b){const _0x422e8f=_0x1e8578;if(_0x50859b['empty'])notis[_0x422e8f(0x120)](_0x422e8f(0x149),_0x422e8f(0x147),0xa,!![]);else{const _0x22b6a3=_0x50859b['docs'][0x0][_0x422e8f(0x129)](),_0x57b261=_0x50859b[_0x422e8f(0x143)][0x0]['id'];if(_0x22b6a3[_0x422e8f(0x125)]){const _0xd919f1=document['querySelector'](_0x422e8f(0x154));_0xd919f1['style'][_0x422e8f(0x144)]=_0x422e8f(0x13d),_0xd919f1['addEventListener']('click',function(){const _0x5d6412=_0x422e8f;var _0x83a532=prompt(_0x5d6412(0x11e),'0');_0x83a532!=null&&setCounter(parseInt(_0x83a532));});}}})[_0x1e8578(0x14e)](function(_0x7bd640){const _0x3bac47=_0x1e8578;notis[_0x3bac47(0x120)](_0x3bac47(0x149),_0x3bac47(0x15c)+_0x7bd640+'!',0xa,!![]),console[_0x3bac47(0x160)](_0x7bd640);});}}document[_0x3573a7(0x142)](_0x3573a7(0x148))['addEventListener'](_0x3573a7(0x15f),function(_0x3e2c7e){const _0x58a64c=_0x3573a7;_0x3e2c7e['preventDefault']();var _0x43d8d9=document[_0x58a64c(0x142)](_0x58a64c(0x137))[_0x58a64c(0x138)],_0x50b558=document[_0x58a64c(0x142)](_0x58a64c(0x168))[_0x58a64c(0x138)],_0x24b2f3=db[_0x58a64c(0x13e)](_0x58a64c(0x131));_0x24b2f3[_0x58a64c(0x123)]('login','==',_0x43d8d9)[_0x58a64c(0x123)]('password','==',_0x50b558)[_0x58a64c(0x13f)]()[_0x58a64c(0x14d)](function(_0x346326){const _0x5884a5=_0x58a64c;if(_0x346326[_0x5884a5(0x14b)])notis['create'](_0x5884a5(0x149),_0x5884a5(0x136),0xf,!![]);else{const _0x421640=_0x346326['docs'][0x0][_0x5884a5(0x129)](),_0x476be3=_0x346326[_0x5884a5(0x143)][0x0]['id'];db['collection'](_0x5884a5(0x131))[_0x5884a5(0x15e)](_0x476be3)[_0x5884a5(0x163)]({'userLogged':!![]})[_0x5884a5(0x14d)](function(){const _0x4b812e=_0x5884a5;notis['create'](_0x4b812e(0x135),_0x4b812e(0x162),0xf,!![]);const _0x51e57f=document[_0x4b812e(0x139)](_0x4b812e(0x12b));_0x51e57f['style']['display']=_0x4b812e(0x134);const _0x2ddb00=document['querySelector'](_0x4b812e(0x126));_0x2ddb00[_0x4b812e(0x12e)][_0x4b812e(0x144)]=_0x4b812e(0x13d);const _0x273592=document[_0x4b812e(0x139)]('#logoutButton');_0x273592[_0x4b812e(0x12e)][_0x4b812e(0x144)]=_0x4b812e(0x13d),userLogged=!![];userLogged&&(getCounter(),checkAdminStatus(_0x43d8d9,_0x50b558),notis[_0x4b812e(0x120)](_0x4b812e(0x135),_0x4b812e(0x12d),0x5,!![]));setTimeout(function(){const _0x248d2b=_0x4b812e;db[_0x248d2b(0x13e)](_0x248d2b(0x131))[_0x248d2b(0x15e)](_0x476be3)[_0x248d2b(0x163)]({'userLogged':![]})[_0x248d2b(0x14d)](function(){const _0x5c6f54=_0x248d2b;notis[_0x5c6f54(0x120)](_0x5c6f54(0x130),_0x5c6f54(0x122),0x5,!![]);const _0x1f507e=document[_0x5c6f54(0x139)](_0x5c6f54(0x12b));_0x1f507e[_0x5c6f54(0x12e)]['display']=_0x5c6f54(0x13d);const _0x3ac46d=document['querySelector']('#counter-section');_0x3ac46d[_0x5c6f54(0x12e)][_0x5c6f54(0x144)]=_0x5c6f54(0x134),userLogged=![];});},0x927c0);let _0x5dc405=![];window[_0x4b812e(0x158)]('beforeunload',function(_0x20ca08){const _0x54823a=_0x4b812e;_0x20ca08[_0x54823a(0x13a)](),_0x5dc405=!![],setTimeout(()=>{const _0x5e930b=_0x54823a;_0x5dc405&&db[_0x5e930b(0x13e)]('users')[_0x5e930b(0x15e)](_0x476be3)[_0x5e930b(0x163)]({'userLogged':![]})[_0x5e930b(0x14d)](function(){const _0x87b559=_0x5e930b;console[_0x87b559(0x160)](_0x87b559(0x157));const _0x3739b2=document['querySelector']('#loginForm');_0x3739b2[_0x87b559(0x12e)][_0x87b559(0x144)]='block';const _0x44da3a=document[_0x87b559(0x139)](_0x87b559(0x126));_0x44da3a[_0x87b559(0x12e)][_0x87b559(0x144)]='none',userLogged=![];});},0x3e8);}),document[_0x4b812e(0x158)]('click',function(){const _0x22e5b2=_0x4b812e;console['log'](_0x22e5b2(0x121)),_0x5dc405=![];});})[_0x5884a5(0x14e)](function(_0x4e7221){const _0x21580c=_0x5884a5;console[_0x21580c(0x12f)](_0x21580c(0x155),_0x4e7221);});}})[_0x58a64c(0x14e)](function(_0x3f7fcf){console['error']('Błąd\x20podczas\x20edycji\x20dokumentu:\x20',_0x3f7fcf);});});function updateCounter(_0x5b4a02){const _0x18d563=_0x3573a7;if(!userLogged)return;else{const _0x3f524f=db[_0x18d563(0x13e)]('counter')[_0x18d563(0x15e)]('counter');_0x3f524f[_0x18d563(0x13f)]()[_0x18d563(0x14d)](function(_0x24c78f){const _0x2d5068=_0x18d563;if(_0x24c78f[_0x2d5068(0x128)]){const _0x3be623=_0x24c78f['data']()[_0x2d5068(0x138)],_0x14710e=_0x3be623+parseInt(_0x5b4a02);if(isNaN(_0x14710e)){notis[_0x2d5068(0x120)]('Error',_0x2d5068(0x124),0x5,!![]);return;}return _0x3f524f[_0x2d5068(0x163)]({'value':_0x14710e});}else notis['create'](_0x2d5068(0x149),'Licznik\x20nie\x20widnieje\x20w\x20bazie\x20danych!',0xa,!![]);})[_0x18d563(0x14d)](function(){const _0x144644=_0x18d563;if(isNaN(_0x5b4a02))return;notis['create'](_0x144644(0x166),'Licznik\x20został\x20zwiększony\x20o\x20'+_0x5b4a02+'!',0x5,!![]),getCounter();})[_0x18d563(0x14e)](function(_0x21d8bb){const _0x3d4dde=_0x18d563;notis[_0x3d4dde(0x120)](_0x3d4dde(0x149),'Wystąpił\x20niezidentyfikowany\x20błąd!\x20Wartość:\x20'+_0x21d8bb+'!',0x5,!![]),console[_0x3d4dde(0x160)](_0x21d8bb);});}}function setCounter(_0x2d8540){const _0xc4f9ee=_0x3573a7;if(!userLogged)return;else{const _0x19b324=db[_0xc4f9ee(0x13e)]('counter')[_0xc4f9ee(0x15e)](_0xc4f9ee(0x15a));_0x19b324['get']()[_0xc4f9ee(0x14d)](function(_0x49b454){const _0xb8b6ea=_0xc4f9ee;if(_0x49b454[_0xb8b6ea(0x128)]){const _0x116a64=parseInt(_0x2d8540);if(isNaN(_0x116a64)){notis['create'](_0xb8b6ea(0x149),_0xb8b6ea(0x124),0x5,!![]);return;}return _0x19b324['update']({'value':_0x116a64});}else notis['create'](_0xb8b6ea(0x149),_0xb8b6ea(0x13b),0x5,!![]);})['then'](function(){const _0x4ec9b0=_0xc4f9ee;if(isNaN(_0x2d8540))return;notis['create'](_0x4ec9b0(0x166),_0x4ec9b0(0x164)+_0x2d8540+'!',0x5,!![]),getCounter();})[_0xc4f9ee(0x14e)](function(_0x4c5afc){const _0x3d4b33=_0xc4f9ee;notis[_0x3d4b33(0x120)](_0x3d4b33(0x149),_0x3d4b33(0x15c)+_0x4c5afc+'!',0x5,!![]),console[_0x3d4b33(0x160)](_0x4c5afc);});}}function logout(){const _0x4015ea=_0x3573a7;if(!userLogged)return;else{const _0x563b97=db[_0x4015ea(0x13e)](_0x4015ea(0x131));_0x563b97['where']('userLogged','==',!![])[_0x4015ea(0x13f)]()[_0x4015ea(0x14d)](function(_0x507d33){const _0x29e423=_0x4015ea;if(_0x507d33[_0x29e423(0x14b)])notis[_0x29e423(0x120)]('Error','Nie\x20znaleziono\x20użytkownika!\x20Sprawdź\x20czy\x20został\x20utworzony!',0xa,!![]);else{const _0x5a3391=_0x507d33[_0x29e423(0x143)][0x0][_0x29e423(0x129)](),_0x5b92d5=_0x507d33[_0x29e423(0x143)][0x0]['id'];db['collection']('users')[_0x29e423(0x15e)](_0x5b92d5)[_0x29e423(0x163)]({'userLogged':![]})['then'](function(){const _0x418fc9=_0x29e423;notis['create'](_0x418fc9(0x135),_0x418fc9(0x151),0xa,!![]),userLogged=![],location[_0x418fc9(0x14c)]();});}})[_0x4015ea(0x14e)](function(_0x2ff95d){const _0x2d3a20=_0x4015ea;notis[_0x2d3a20(0x120)](_0x2d3a20(0x149),_0x2d3a20(0x15c)+_0x2ff95d+'!',0xa,!![]),console[_0x2d3a20(0x160)](_0x2ff95d);});}}document[_0x3573a7(0x142)](_0x3573a7(0x140))[_0x3573a7(0x158)](_0x3573a7(0x12a),function(){logout();});