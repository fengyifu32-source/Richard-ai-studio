const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const form = document.querySelector('#lead-form');
const formStatus = document.querySelector('#form-status');
const formSubmit = form.querySelector('[type="submit"]');
const serviceSelect = document.querySelector('#service-select');

const zh = {
  'Skip to content':'跳至主要内容','Work':'作品','Services':'服务','Nationwide Services':'全美服务','Houston':'休斯顿','AI Video Houston':'休斯顿AI视频','Pricing':'价格','About':'关于我','Start a Project':'开始合作','Get 3 Free Ideas':'免费获取3个创意','Mr.Feng No Sleep':'小疯未眠',
  'Houston-based · Serving businesses nationwide':'总部位于休斯顿 · 服务全美企业','AI Video Ads That Make People':'让人停下滑动的','Stop Scrolling':'AI视频广告',
  'Richard Feng Creative produces cinematic AI commercials, short-form video ads and bilingual campaigns for real estate, professional services and small businesses across the United States.':'Richard Feng Creative 为全美的房地产、专业服务和小企业制作电影感AI商业视频、短视频广告与中英双语推广内容。','View My Work':'查看作品',
  'Concept':'创意','Ideas built to interrupt the feed':'用创意打破信息流惯性','Production':'制作','AI-powered, creatively directed':'AI赋能，创意主导','Delivery':'交付','Made for short-form platforms':'专为短视频平台打造',
  'Selected portfolio':'精选作品','Featured Real Estate':'地产创意','Creative Work':'精选作品','Creative property advertising developed for Houston real estate agent Serene Wong—turning listings and real estate ideas into stories people want to watch.':'为休斯顿地产经纪人 Serene Wong 创作的创意地产广告——把房源和地产理念变成观众愿意看下去的故事。','Medical aesthetics portfolio':'医美作品','Medical Aesthetics':'医美','A short-form medical aesthetics concept balancing cinematic polish, humor and aspirational beauty storytelling.':'融合电影质感、幽默表达与理想之美叙事的医美短视频创意。','Med Spa / 医美':'医美 / Med Spa','Legal services portfolio':'律师作品','Legal Services':'法律服务','A cinematic legal-services concept that turns authority, justice and professional strength into a visually unforgettable short-form story.':'以电影化视觉呈现权威、正义与专业力量，打造令人过目难忘的律师短视频。','正义归位｜Justice Restored':'正义归位｜Justice Restored','Legal / 律师':'律师 / Legal','Insurance portfolio':'保险作品','A cinematic insurance concept that transforms financial protection into a clear, powerful promise: when income stops, life does not.':'用电影化视觉把保障转化为清晰有力的承诺：收入停止，生活不会暂停。','守住未来｜Protect the Future':'守住未来｜Protect the Future','Insurance / 保险':'保险 / Insurance','Dental portfolio':'牙科作品','Dental':'牙科','A cinematic dental concept that turns a tiny hidden crack into a city-sized warning—because early care keeps small problems small.':'用电影化视觉把一条隐蔽的小裂缝放大成城市级警报——及时检查，才能让小问题停留在小阶段。','小牙大事｜Small Tooth, Big Trouble':'小牙大事｜Small Tooth, Big Trouble','Dental / 牙科':'牙科 / Dental',
  'Nationwide AI video advertising':'全美AI视频广告','Video ads built for':'为您的市场量身打造','your market.':'视频广告。','From one-time campaigns to monthly short-form content, every project can be completed remotely for clients anywhere in the United States.':'无论是一次性广告还是每月短视频内容，都可以为美国任何地区的客户远程完成。','Nationwide Service':'全美服务','AI Video Advertising Agency':'AI视频广告公司','Creative strategy, scripts, AI visuals, editing and delivery for businesses across the United States.':'为全美企业提供创意策略、脚本、AI视觉、剪辑与成片交付。','Explore nationwide services':'了解全美服务','Social Advertising':'社交平台广告','Short-Form Video Ads':'短视频广告','Platform-ready advertising for TikTok, Instagram, Facebook, YouTube Shorts and Xiaohongshu.':'为 TikTok、Instagram、Facebook、YouTube Shorts 和小红书制作可直接发布的广告。','Short-form video ads':'短视频广告','Commercial Production':'商业视频制作','AI Commercial Videos':'AI商业视频','Cinematic concepts that turn a product, service or offer into a memorable visual story.':'用电影感创意把产品、服务或优惠转化为令人难忘的视觉故事。','AI commercial production':'AI商业视频制作','English + Chinese':'英文 + 中文','Bilingual Video Ads':'双语视频广告','Campaign concepts for brands that want to reach English- and Chinese-speaking audiences.':'为希望触达英语与中文受众的品牌打造双语广告创意。','Bilingual advertising':'双语广告',
  'Video coming soon':'视频即将上线','Play video':'播放视频','Portfolio Selection Pending':'作品待选','Video to be selected':'根据实际作品选择','Alien Real Estate Concept':'外星人地产创意','Digital Forest Concept':'数字森林地产创意','Texas Cowboy Concept':'德州牛仔地产创意','Helicopter Real Estate Concept':'直升机地产创意','The Tribal Real Estate Test':'部落的地产考验','价格擂台｜The Price Fight':'价格擂台｜The Price Fight','AI Creative · Short-Form Ad':'AI创意 · 短视频广告','Real Estate':'房地产',
  'Simple, transparent pricing':'简单透明的价格','Choose the right':'选择合适的','creative package.':'创意套餐。','Clear options for testing an idea, launching a campaign, or building a consistent monthly content rhythm.':'无论是测试创意、推出广告，还是稳定产出月度内容，都有清晰合适的选择。',
  'First-Time Client Offer':'仅限首次合作','15-Second Trial Video':'15秒体验视频','Up to 15 seconds':'最长15秒','1 creative concept':'1个创意方向','AI production + basic editing':'AI制作 + 基础剪辑','1 minor revision':'1次小幅修改','Vertical short-form format':'竖屏短视频格式','Suitable for TikTok / Instagram / Facebook / YouTube Shorts / Xiaohongshu':'适用于 TikTok / Instagram / Facebook / YouTube Shorts / 小红书','Buy Now — $49':'立即购买 — $49','First-time clients only. One use per client.':'仅限首次合作客户，每位客户仅可使用一次。','One-time payment · Secure checkout by Stripe':'一次性付款 · Stripe 安全结账',
  'Creative Video':'创意视频','30-Second Creative Video':'30秒创意视频','Creative concept':'创意构思','Full short script':'完整脚本','AI production':'AI制作','Editing':'剪辑','Voice / sound integration when needed':'配音 / 音效（如需要）','1 revision':'1次修改','Buy Now — $199':'立即购买 — $199',
  'Brand Video':'品牌视频','60-Second Brand Video':'60秒品牌视频','More complete story structure':'更完整的故事结构','Multiple scenes':'多场景呈现','Voice / sound integration':'配音 / 音效','Buy Now — $349':'立即购买 — $349',
  'Best Value':'最划算','Monthly Content':'月度内容','Monthly Package — 8 Videos':'包月套餐 — 每月8条视频','/ month':'/ 月','Each video: Up to 30 seconds':'每条最长30秒','Regular price:':'单独购买：','Monthly package:':'包月价格：','You save:':'每月节省：','$393 per month / ≈ 25% off':'$393 / 约优惠 25%','Per video: ≈ $150':'每条约：$150','8 videos per month':'每月8条视频','Up to 30 seconds each':'每条最长30秒','Creative direction':'创意方向','Script':'脚本','1 minor revision per video':'每条1次小幅修改','Priority scheduling':'优先排期','A 60-second video uses 2 monthly video credits.':'60秒视频占用2条包月视频额度。','Subscribe — $1,199 / month':'订阅 — $1,199 / 月','Monthly subscription · Secure checkout by Stripe':'按月订阅 · Stripe 安全结账',
  'Longer videos, advanced visual effects, complex character consistency, rush delivery, multiple languages, or custom campaigns require a custom quote.':'更长视频、高级视觉特效、复杂人物一致性、加急交付、多语言版本或定制广告项目需单独报价。','Request a Custom Quote':'获取定制报价',
  'Free creative starter':'免费创意方案','Get 3 Free Creative Video Ideas for Your Business':'免费获取3个适合你业务的创意视频方案','Tell me what you want to promote. I’ll create three tailored creative directions for your brand—free, with no obligation.':'告诉我你想推广什么，我会免费为你的品牌构思三个针对性的创意方向，无需承担任何合作义务。','Free original concepts':'免费原创方案','Built around your offer':'围绕你的业务打造',
  'Name *':'姓名 *','Company':'公司','Industry *':'行业 *','Select industry':'选择行业','Other':'其他','Website or Social Media':'网站或社交媒体','Service':'服务项目','Select a service':'选择服务项目','$49 Trial':'$49 体验视频','30-Second Video':'30秒视频','60-Second Video':'60秒视频','Monthly Package':'包月套餐','Custom Project':'定制项目','What do you want to promote? *':'你想推广什么？*','Email *':'电子邮箱 *','Phone':'电话（选填）','Budget Range':'预算范围（选填）','Select a range':'选择预算范围','Under $1,000':'低于 $1,000','$5,000+':'$5,000 以上','Not sure yet':'暂不确定','Get My 3 Free Ideas':'免费获取我的3个方案',
  'The creator behind the work':'作品背后的创作者','Richard Feng (小疯未眠) is an independent music artist, AI visual creator and cross-media content creator based in Houston.':'Richard Feng（小疯未眠）是一位独立音乐人、AI视觉创作者及跨媒介内容创作者，现居美国休斯顿。','His work spans original music, visual storytelling, AI imagery and commercial creativity, building a distinctive creative language between music and moving image.':'他的创作横跨原创音乐、视觉叙事、AI影像与商业创意，以情绪表达与电影化叙事为核心，在音乐与影像之间建立起具有个人辨识度的创作体系。','Music preserves emotion. Images make stories visible.':'音乐负责保存情绪，影像负责让故事被看见。','Portrait':'肖像',
  'A secondary creative practice':'个人品牌的另一面','Original Music by':'原创音乐 ·','Original songs, writing and sound from the same creative perspective behind the visual work.':'原创歌曲、文字与声音，延续视觉作品背后的同一创意视角。','Signature works':'代表作','“Wandering Los Angeles” · “A Perfectly Timed Encounter” · “The Warmth of a Cappuccino” · “A Quiet Understanding Called Missing You” · “Dallas After Dark” · “It\'s the Same Here”':'《流浪洛杉矶》 · 《恰好的相遇》 · 《卡布奇诺的温度》 · 《有一种默契叫牵挂》 · 《达拉斯夜未央》 · 《这里也一样》','Signature original':'代表作','Wandering Los Angeles':'流浪洛杉矶','A Perfectly Timed Encounter':'恰好的相遇','The Warmth of a Cappuccino':'卡布奇诺的温度','A Quiet Understanding Called Missing You':'有一种默契叫牵挂','Dallas After Dark':'达拉斯夜未央','It\'s the Same Here':'这里也一样','Listen on YouTube ↗':'在 YouTube 收听 ↗','Not yet on this channel':'该频道暂未发布',
  'Have something to promote?':'有内容想推广？','Let’s make it':'让你的品牌','impossible to ignore.':'无法被忽视。','Email':'电子邮箱','Back to top ↑':'返回顶部 ↑'
};

const statusCopy = {
  en: { default:'Your inquiry will be sent securely.', invalid:'Please check the highlighted fields. Complete all required fields and enter a valid email.', sending:'Sending your request…', success:'Thank you. I received your request and will review your business before preparing 3 free creative video ideas.', error:'Something went wrong. Please try again or contact me by email.' },
  zh: { default:'你的需求将通过安全表单发送。', invalid:'请检查标出的项目，填写所有必填内容并确认邮箱格式正确。', sending:'正在发送你的需求……', success:'谢谢，我已经收到你的需求。我会先了解你的业务，再免费为你准备3个针对性的创意视频方案。', error:'提交失败，请稍后重试，或通过电子邮件联系我。' }
};
const placeholderZh = {'Tell me about your offer, audience and goal...':'请介绍你的业务、受众和目标……','https:// or @username':'网址或 @社交账号'};
const originalText = new WeakMap();
const textNodes = [];
const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {acceptNode(node){return !node.textContent.trim() || ['SCRIPT','STYLE'].includes(node.parentElement?.tagName) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;}});
while(walker.nextNode()){const node=walker.currentNode;originalText.set(node,node.textContent);textNodes.push(node)}

function saveLanguage(language){try{localStorage.setItem('site-language',language)}catch(error){console.warn('Language preference could not be saved.',error)}}
function savedLanguage(){try{return localStorage.getItem('site-language')||'en'}catch{return'en'}}
function setLanguage(language){
  const selected=language==='zh'?'zh':'en';
  document.documentElement.lang=selected==='zh'?'zh-CN':'en';
  document.title=selected==='zh'?'Richard Feng Creative｜全美AI视频广告':'AI Video Advertising Agency | Richard Feng Creative';
  document.querySelector('meta[name="description"]').content=selected==='zh'?'Richard Feng Creative 为全美企业制作电影感AI商业视频、短视频广告与中英双语推广内容，总部位于休斯顿。':'Richard Feng Creative produces cinematic AI video ads, short-form commercials and bilingual advertising for businesses across the United States. Houston-based, nationwide service.';
  textNodes.forEach(node=>{const source=originalText.get(node);const key=source.trim();node.textContent=selected==='zh'&&zh[key]?zh[key]:source});
  document.querySelectorAll('[placeholder]').forEach(field=>{if(!field.dataset.placeholderEn)field.dataset.placeholderEn=field.placeholder;field.placeholder=selected==='zh'?(placeholderZh[field.dataset.placeholderEn]||field.dataset.placeholderEn):field.dataset.placeholderEn});
  document.querySelectorAll('[data-lang]').forEach(control=>control.setAttribute('aria-pressed',String(control.dataset.lang===selected)));
  document.querySelector('.language-switch').setAttribute('aria-label',selected==='zh'?'语言选择':'Language selection');
  document.querySelector('.brand').setAttribute('aria-label',selected==='zh'?'小疯未眠 | Richard Feng，首页':'Mr.Feng No Sleep | Richard Feng, home');
  formStatus.textContent=statusCopy[selected][formStatus.dataset.state||'default'];
  menuButton.setAttribute('aria-label',selected==='zh'?'打开导航菜单':'Open navigation');
  saveLanguage(selected);
}

formStatus.dataset.state='default';
document.querySelectorAll('[data-lang]').forEach(control=>control.addEventListener('click',()=>setLanguage(control.dataset.lang)));
document.querySelector('#year').textContent=new Date().getFullYear();
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label',document.documentElement.lang==='zh-CN'?'打开导航菜单':'Open navigation')}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';nav.classList.toggle('open',!open);menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',document.documentElement.lang==='zh-CN'?(open?'打开导航菜单':'关闭导航菜单'):(open?'Open navigation':'Close navigation'))});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>24),{passive:true});
const videoCards=[...document.querySelectorAll('.work-card[data-video-src]')];
function prepareVideo(card){
  if(card.dataset.videoReady==='true')return;
  const source=card.dataset.videoSrc.trim();
  const video=card.querySelector('video');
  if(source&&video){video.src=source;card.classList.add('has-video');card.dataset.videoReady='true'}
}
if('IntersectionObserver'in window){
  const videoObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){prepareVideo(entry.target);videoObserver.unobserve(entry.target)}}),{rootMargin:'240px 0px'});
  videoCards.forEach(card=>videoObserver.observe(card));
}else{videoCards.forEach(prepareVideo)}
document.querySelectorAll('[data-pricing-service]').forEach(button=>button.addEventListener('click',()=>{serviceSelect.value=button.dataset.pricingService;serviceSelect.dispatchEvent(new Event('change',{bubbles:true}))}));
document.querySelectorAll('a[href="#"]').forEach(link=>link.addEventListener('click',event=>event.preventDefault()));
form.addEventListener('submit',async event=>{
  event.preventDefault();
  if(form.dataset.submitting==='true')return;
  form.querySelectorAll('.invalid').forEach(field=>field.classList.remove('invalid'));
  const language=document.documentElement.lang==='zh-CN'?'zh':'en';
  if(!form.checkValidity()){
    const invalid=[...form.querySelectorAll(':invalid')];
    invalid.forEach(field=>field.classList.add('invalid'));
    invalid[0]?.focus();
    formStatus.dataset.state='invalid';
    formStatus.textContent=statusCopy[language].invalid;
    return;
  }
  form.dataset.submitting='true';
  formSubmit.disabled=true;
  formSubmit.setAttribute('aria-busy','true');
  formStatus.dataset.state='sending';
  formStatus.textContent=statusCopy[language].sending;
  try{
    const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
    if(!response.ok)throw new Error(`Form submission failed with status ${response.status}`);
    form.reset();
    formStatus.dataset.state='success';
    formStatus.textContent=statusCopy[document.documentElement.lang==='zh-CN'?'zh':'en'].success;
  }catch(error){
    console.error('Form submission failed.',error);
    formStatus.dataset.state='error';
    formStatus.textContent=statusCopy[document.documentElement.lang==='zh-CN'?'zh':'en'].error;
  }finally{
    form.dataset.submitting='false';
    formSubmit.disabled=false;
    formSubmit.removeAttribute('aria-busy');
  }
});
setLanguage(savedLanguage());
