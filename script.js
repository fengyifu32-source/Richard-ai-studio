const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const form = document.querySelector('#lead-form');
const formStatus = document.querySelector('#form-status');
const formSubmit = form.querySelector('[type="submit"]');
const serviceSelect = document.querySelector('#service-select');

const zh = {
  'Skip to content':'跳至主要内容','Work':'作品','Services':'服务','About':'关于我','Start a Project':'开始合作','Get 3 Free Ideas':'免费获取3个创意','Mr.Feng No Sleep':'小疯未眠',
  'Creative advertising studio · Houston':'创意广告工作室 · 休斯顿','Creative Ads That Make People':'让人停下滑动的','Stop Scrolling':'创意广告',
  'Creative short-form video ads for real estate, professional services and local businesses.':'为地产、专业服务和本地商业打造让人停下滑动的创意短视频广告。','View My Work':'查看作品',
  'Concept':'创意','Ideas built to interrupt the feed':'用创意打破信息流惯性','Production':'制作','AI-powered, creatively directed':'AI赋能，创意主导','Delivery':'交付','Made for short-form platforms':'专为短视频平台打造',
  'Selected portfolio':'精选作品','Featured Real Estate':'地产创意','Creative Work':'精选作品','Creative property advertising developed for Houston real estate agent Serene Wong—turning listings and real estate ideas into stories people want to watch.':'为休斯顿地产经纪人 Serene Wong 创作的创意地产广告——把房源和地产理念变成观众愿意看下去的故事。','Medical aesthetics portfolio':'医美作品','Medical Aesthetics':'医美','A short-form medical aesthetics concept balancing cinematic polish, humor and aspirational beauty storytelling.':'融合电影质感、幽默表达与理想之美叙事的医美短视频创意。','Med Spa / 医美':'医美 / Med Spa','Legal services portfolio':'律师作品','Legal Services':'法律服务','A cinematic legal-services concept that turns authority, justice and professional strength into a visually unforgettable short-form story.':'以电影化视觉呈现权威、正义与专业力量，打造令人过目难忘的律师短视频。','正义归位｜Justice Restored':'正义归位｜Justice Restored','Legal / 律师':'律师 / Legal',
  'Video coming soon':'视频即将上线','Portfolio Selection Pending':'作品待选','Video to be selected':'根据实际作品选择','Alien Real Estate Concept':'外星人地产创意','Digital Forest Concept':'数字森林地产创意','Texas Cowboy Concept':'德州牛仔地产创意','Helicopter Real Estate Concept':'直升机地产创意','The Tribal Real Estate Test':'部落的地产考验','价格擂台｜The Price Fight':'价格擂台｜The Price Fight','AI Creative · Short-Form Ad':'AI创意 · 短视频广告','Real Estate':'房地产',
  'What I do':'我的服务','From a blank page to a video people':'从空白开始，打造让人','remember.':'记住的视频。','A focused creative partner for brands that want short-form content to feel like an idea—not another template.':'为不愿套用模板、追求真正创意的品牌，提供专注的短视频创作合作。','Build something distinctive':'打造与众不同的作品',
  'Creative Concept Development':'创意概念开发','Scroll-stopping hooks and visual ideas designed around your offer.':'围绕你的业务卖点，设计让人停下滑动的开场和视觉创意。','AI Video Production':'AI视频制作','Purposeful AI production guided by a clear creative direction.':'以清晰的创意方向指导有目的的AI制作。','Short-Form Advertising':'短视频广告','Platform-ready ads built for attention, clarity and action.':'为吸引注意、清晰传达和促进转化而打造的平台适配广告。','Script & Storytelling':'脚本与故事设计','Concise narratives that make the message easy to understand.':'用简洁叙事让信息更容易理解。','Editing & Post Production':'剪辑与后期制作','Pacing, sound and polish that hold attention through the final frame.':'通过节奏、声音与精细打磨，让观众看到最后一帧。',
  'Built around your audience':'围绕你的受众打造','Industries':'服务行业','Real estate, legal services and medical aesthetics are featured portfolios today. Fresh creative concepts for other industries are available upon request.':'目前展示房地产、律师服务和医美真实作品。保险与本地商业可按需提供全新创意方案。','Featured portfolio':'当前主力作品','Legal':'法律服务','Insurance':'保险','Med Spa':'医美','Local Business':'本地商业','Concepts available':'可提供创意方案',
  'How it works':'合作流程','Simple process.':'简单流程，','Original outcome.':'原创成果。','Tell me what you want to promote':'告诉我你想推广什么','Your offer, audience, goals and where the content will run.':'分享你的业务、受众、目标和发布平台。','I develop creative advertising concepts':'我为你开发创意广告方案','You receive a distinct direction built around the message.':'你将获得围绕核心信息打造的独特创意方向。','We produce the short-form video':'我们制作短视频','Concept, production and edit come together in one focused workflow.':'创意、制作与剪辑在一套专注流程中完成。','You publish or run the content as advertising':'你发布内容或将其作为广告投放','Receive a polished, platform-ready video made to perform in the feed.':'获得精心制作、适配平台并能在信息流中发挥效果的视频。',
  'Simple, transparent pricing':'简单透明的价格','Choose the right':'选择合适的','creative package.':'创意套餐。','Clear options for testing an idea, launching a campaign, or building a consistent monthly content rhythm.':'无论是测试创意、推出广告，还是稳定产出月度内容，都有清晰合适的选择。',
  'First-Time Client Offer':'仅限首次合作','15-Second Trial Video':'15秒体验视频','Up to 15 seconds':'最长15秒','1 creative concept':'1个创意方向','AI production + basic editing':'AI制作 + 基础剪辑','1 minor revision':'1次小幅修改','Vertical short-form format':'竖屏短视频格式','Suitable for TikTok / Instagram / Facebook / YouTube Shorts / Xiaohongshu':'适用于 TikTok / Instagram / Facebook / YouTube Shorts / 小红书','Buy Now — $49':'立即购买 — $49','First-time clients only. One use per client.':'仅限首次合作客户，每位客户仅可使用一次。','One-time payment · Secure checkout by Stripe':'一次性付款 · Stripe 安全结账',
  'Creative Video':'创意视频','30-Second Creative Video':'30秒创意视频','Creative concept':'创意构思','Full short script':'完整脚本','AI production':'AI制作','Editing':'剪辑','Voice / sound integration when needed':'配音 / 音效（如需要）','1 revision':'1次修改','Buy Now — $199':'立即购买 — $199',
  'Brand Video':'品牌视频','60-Second Brand Video':'60秒品牌视频','More complete story structure':'更完整的故事结构','Multiple scenes':'多场景呈现','Voice / sound integration':'配音 / 音效','Buy Now — $349':'立即购买 — $349',
  'Best Value':'最划算','Monthly Content':'月度内容','Monthly Package — 8 Videos':'包月套餐 — 每月8条视频','/ month':'/ 月','Each video: Up to 30 seconds':'每条最长30秒','Regular price:':'单独购买：','Monthly package:':'包月价格：','You save:':'每月节省：','$393 per month / ≈ 25% off':'$393 / 约优惠 25%','Per video: ≈ $150':'每条约：$150','8 videos per month':'每月8条视频','Up to 30 seconds each':'每条最长30秒','Creative direction':'创意方向','Script':'脚本','1 minor revision per video':'每条1次小幅修改','Priority scheduling':'优先排期','A 60-second video uses 2 monthly video credits.':'60秒视频占用2条包月视频额度。','Subscribe — $1,199 / month':'订阅 — $1,199 / 月','Monthly subscription · Secure checkout by Stripe':'按月订阅 · Stripe 安全结账',
  'Longer videos, advanced visual effects, complex character consistency, rush delivery, multiple languages, or custom campaigns require a custom quote.':'更长视频、高级视觉特效、复杂人物一致性、加急交付、多语言版本或定制广告项目需单独报价。','Request a Custom Quote':'获取定制报价',
  'Free creative starter':'免费创意方案','Get 3 Free Creative Video Ideas for Your Business':'免费获取3个适合你业务的创意视频方案','Tell me what you want to promote. I’ll create three tailored creative directions for your brand—free, with no obligation.':'告诉我你想推广什么，我会免费为你的品牌构思三个针对性的创意方向，无需承担任何合作义务。','Free original concepts':'免费原创方案','Built around your offer':'围绕你的业务打造',
  'Name *':'姓名 *','Company':'公司','Industry *':'行业 *','Select industry':'选择行业','Other':'其他','Website or Social Media':'网站或社交媒体','Service':'服务项目','Select a service':'选择服务项目','$49 Trial':'$49 体验视频','30-Second Video':'30秒视频','60-Second Video':'60秒视频','Monthly Package':'包月套餐','Custom Project':'定制项目','What do you want to promote? *':'你想推广什么？*','Email *':'电子邮箱 *','Phone':'电话（选填）','Budget Range':'预算范围（选填）','Select a range':'选择预算范围','Under $1,000':'低于 $1,000','$5,000+':'$5,000 以上','Not sure yet':'暂不确定','Get My 3 Free Ideas':'免费获取我的3个方案',
  'The creator behind the work':'作品背后的创作者','I’m a creator combining storytelling, visual creativity, AI production, video editing and original music.':'我是一名融合故事表达、视觉创意、AI制作、视频剪辑与原创音乐的创作者。','My work lives at the intersection of creative direction and emerging production tools. The goal is simple: help businesses communicate in a way that feels human, cinematic and worth watching.':'我的创作位于创意指导与新兴制作工具的交汇处。目标很简单：帮助企业以更有人情味、更具电影感、更值得观看的方式传递信息。','Commercial advertising is the focus. Music is the other side of the same creative identity—the place where rhythm, mood and story begin.':'商业广告是我的核心业务。音乐则是同一创意身份的另一面——节奏、情绪与故事由此开始。','Portrait':'肖像',
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
  document.title=selected==='zh'?'Richard Feng（小疯未眠）| AI视频创作者与创意导演':'Richard Feng (小疯未眠) | AI Video Creator & Creative Director';
  document.querySelector('meta[name="description"]').content=selected==='zh'?'Richard Feng（中文创作者名：小疯未眠）是休斯顿AI视频创作者与创意导演，为品牌打造电影感短视频广告。':'Richard Feng (小疯未眠) is a Houston creative director and AI video creator making cinematic short-form advertising for brands and local businesses.';
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
