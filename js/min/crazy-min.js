$(document).on("pageinit","#crazyPage",function(e){function t(e){var t=0,a="",n=0;return n=99*Math.random()+1,99*Math.random()+1<25&&(t=Math.floor(Math.random()*(e.length-1)+0),a=e[t]+a+" ",20>n&&(a="<b>"+a+"</b>")),a}var a="Crazy? I was crazy once. They stuck me in a padded room with rats. Rats! Rats drive me crazy!",n=["But my story...","I don't want to rest. I want to tell my stories.","It is to me. If I don't finish my story... if Sisko doesn't open the Orb box... he can't contact the Prophets...","You want me to paint over my story?","Got to cover it up... bury it...","But I haven't finished my story. Captain Sisko has found the Orb of the Emissary...","But he hasn't opened it yet.","No one will give me any paper...","I want to go home. I don't belong here.","I feel fine.","Then give me a typewriter.","Dangerous? To whom?","What for?"],o=["I know you.","You're an impostor.","It is difficult with so many interruptions.","The Doctor comes on Wednesdays.","Commander Barclay's visits are erratic.","71 53 53 31 71 53 53 31 71 53","Long range sensors have detected no trace. Her disappearance remains a mystery. I am deeply concerned.","Her disappearance.","53 31 71 53","Her disappearance remains a mystery.","I am deeply concerned, deeply concerned.","She's never coming back! Her disappearance remains a mystery. I'm deeply concerned. Deeply concerned."];$("input").change(),$("input").change(function(e,r){for(var i="",s=$("#siskotize").is(":checked"),c=$("#tuvoktize").is(":checked"),d=0,m=0,y=0,h=0;h<$("#crazySldr").val();h++)y=Math.floor(99*Math.random()+1),30>y&&""!==i&&(i="</p><p>"+i),i=y>90?"<b>"+a+"</b> "+i:a+" "+i,s&&(i=t(n)+i),c&&(i=t(o)+i);i="<p>"+i+"</p>",$("#crazyText").html(i)})});