var screen_h = screen.height;

if(navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1){
    alert("익스플로어 11에서는 정상적인 작동이 되지 않습니다. 엣지 환경에서 실행해주세요");
    history.back();
}


document.write("<div id='canvas_border' style='width:"+screen_h*1.30+"px'><canvas id='c' height='"+screen_h*0.65+"' width='"+screen_h*1.30+"'></canvas></div>");