# Telegram Mini App sürümü: zip/new -> repo/docs (rx.js ve kitaplar hariç)
import sys,os,shutil,re
S,D=sys.argv[1],sys.argv[2]
src=f'{S}/zip/new'
if os.path.isdir(D): shutil.rmtree(D)
for r,_,fs in os.walk(src):
    for f in fs:
        p=os.path.join(r,f); rel=os.path.relpath(p,src)
        if rel=='rx.js' or rel.startswith('rx/') or rel.startswith('kitap/') or rel.endswith('.pdf'): continue
        os.makedirs(os.path.dirname(f'{D}/{rel}'),exist_ok=True); shutil.copy(p,f'{D}/{rel}')
h=open(f'{D}/index.html',encoding='utf8').read()
for k,v in {'top':'--sat','bottom':'--sab','left':'--sal','right':'--sar'}.items():
    h=h.replace(f'env(safe-area-inset-{k},0px)',f'var({v},env(safe-area-inset-{k},0px))')
open(f'{D}/rx.js','w').write('/* Röntgen arşivi bu sürümde yok (hasta verisi). */\nconst RX=[];\n')
TG='''<style>html.tg body{padding-top:var(--sat,0px)}</style>
<script src="https://telegram.org/js/telegram-web-app.js"></script>
<script>
(function(){var w=window.Telegram&&Telegram.WebApp;if(!w||!w.initData)return;
document.documentElement.classList.add('tg');
try{w.ready();w.expand();}catch(e){}
function v(x){try{return w.isVersionAtLeast(x)}catch(e){return false}}
try{if(v('8.0')&&/android|ios/.test(w.platform))w.requestFullscreen();}catch(e){}
try{if(v('7.7'))w.disableVerticalSwipes();}catch(e){}
try{if(v('6.2'))w.enableClosingConfirmation();}catch(e){}
function ins(){var a=w.safeAreaInset||{},c=w.contentSafeAreaInset||{},r=document.documentElement.style;
['top','bottom','left','right'].forEach(function(k){r.setProperty('--sa'+k[0],((a[k]||0)+(c[k]||0))+'px')});}
ins();['safeAreaChanged','contentSafeAreaChanged','fullscreenChanged','viewportChanged'].forEach(function(e){try{w.onEvent(e,ins)}catch(x){}});
})();
</script>
'''
h=h.replace('</head>',TG+'</head>',1)
open(f'{D}/index.html','w',encoding='utf8').write(h)
open(f'{D}/.nojekyll','w').close()
print('ok',sum(len(fs) for _,_,fs in os.walk(D)))
