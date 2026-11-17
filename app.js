/* Roy Kamwanza portfolio. Rendered with Preact + htm (vendor/htm-preact.js). */
(function () {
const { html, render, Component: PreactComponent } = window.htmPreact;

function view($v) {
  const { accent, badgeShift, circleShift, closeMenu, cmd, focusTerm, fpArea, fpAria, fpColor, fpDistricts, fpGrid, fpHasHover, fpHoverLeft, fpHoverMonth, fpHoverPrice, fpHoverTop, fpInsight, fpIsDistrict, fpIsTime, fpIsYear, fpKey, fpLeave, fpLine, fpMove, fpPeakLabel, fpPeakLeft, fpPeakShift, fpPeakTop, fpProducts, fpStats, fpTipShift, fpTitle, fpUnit, fpViews, fpXTicks, fpYears, history, localTime, menuClosed, menuExpanded, menuOpen, onCmd, onCmdKey, onStageLeave, onStageMove, personShift, projects, ready, rv_about_cls, rv_contact_cls, rv_experience_cls, rv_play_cls, rv_work_cls, statA, statB, statC, statD, tabLog, tabOther, tabText, termTabs, tilt, toggleMenu, typed, typing, underAnim, word, wordAnim } = $v;
  return html`<div style="background: #F5F3ED; color: #202522; font-family: Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif; font-size: 16px; line-height: 1.65">

<header style="border-bottom: 1px solid #DDD8CC; position: sticky; top: 0; z-index: 40; background: rgba(245,243,237,.84); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px)">
<div style="max-width: 1180px; margin: 0 auto; padding: 18px 24px; display: flex; align-items: center; justify-content: flex-end; gap: 16px">
<nav class="rk-nav" aria-label="Main" style="align-items: center; gap: 30px; font-size: 15px">
<a href="#work" style="color: #5C635E; padding: 10px 0">Work</a>
<a href="#about" style="color: #5C635E; padding: 10px 0">About</a>
<a href="#experience" style="color: #5C635E; padding: 10px 0">Experience</a>
<a href="#contact" style="color: #5C635E; padding: 10px 0">Contact</a>
<a href="#top" class="rk-btn rk-btn-line" style="padding: 9px 16px; border: 1px solid #202522; border-radius: 8px; font-weight: 600">Résumé</a>
</nav>
<button type="button" class="rk-menu-btn" onClick=${toggleMenu} aria-expanded=${menuExpanded} aria-controls="rk-mobile-menu" aria-label="Menu" style="width: 44px; height: 44px; align-items: center; justify-content: center; border: 1px solid #CFC9BB; border-radius: 10px; background: #FBFAF6; color: #202522; cursor: pointer">
${(menuOpen) ? html`
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"></path></svg>
` : null}
${(menuClosed) ? html`
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>
` : null}
</button>
</div>
${(menuOpen) ? html`
<nav id="rk-mobile-menu" aria-label="Mobile" style="border-top: 1px solid #DDD8CC; background: #FBFAF6; padding: 8px 24px 16px; display: flex; flex-direction: column; animation: sl-land 260ms ease both">
<a href="#work" onClick=${closeMenu} style="padding: 12px 0; font-weight: 600; border-bottom: 1px solid #ECE9E0">Work</a>
<a href="#about" onClick=${closeMenu} style="padding: 12px 0; font-weight: 600; border-bottom: 1px solid #ECE9E0">About</a>
<a href="#experience" onClick=${closeMenu} style="padding: 12px 0; font-weight: 600; border-bottom: 1px solid #ECE9E0">Experience</a>
<a href="#contact" onClick=${closeMenu} style="padding: 12px 0; font-weight: 600; border-bottom: 1px solid #ECE9E0">Contact</a>
<a href="#top" onClick=${closeMenu} style=${"" + `padding: 12px 0; font-weight: 600; color: ${accent}`}>Résumé</a>
</nav>
` : null}
</header>

<section id="top" style="position: relative; overflow: hidden; background: radial-gradient(60% 70% at 85% 30%, rgba(40,122,89,.10), rgba(40,122,89,0) 70%), #F5F3ED">

<div style="position: relative; max-width: 1180px; margin: 0 auto; padding: 48px 24px 48px">
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 40px">
<div style="flex: 1 1 540px; min-width: 0">
<div style="display: flex; align-items: center; gap: 14px; animation: rk-fade 900ms ease 100ms both">
<div>
<div style="font-weight: 700; font-size: 18px">Hi, I’m Roy Kamwanza</div>
<div style="display: flex; flex-direction: column; align-items: flex-start; gap: 2px; font-size: 14px; color: #5C635E"><span style="display: inline-flex; align-items: center; gap: 6px"><span style="width: 8px; height: 8px; border-radius: 999px; background: #22C55E; animation: rk-livedot 1.8s ease-out infinite"></span>Lusaka, Zambia · ${localTime}</span></div>
</div>
</div>
<h1 style="margin: 22px 0 0; font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-weight: 700; line-height: 0.98; letter-spacing: -0.035em; font-size: clamp(46px, 7vw, 96px); animation: rk-rise 1100ms cubic-bezier(.16,.8,.2,1) 350ms both"><span style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">I build AI products, data stories and web apps end to end.</span><span aria-hidden="true">I build <span style=${"" + `position: relative; display: inline-block; color: ${accent}`}><span style=${"" + `display: inline-block; animation: ${wordAnim}`}>${word}</span><svg viewBox="0 0 300 20" preserveAspectRatio="none" style="position: absolute; left: -2%; bottom: -0.12em; width: 104%; height: 0.22em; overflow: visible"><path d="M4 14 C 60 4, 120 18, 180 9 S 270 6, 296 12" fill="none" stroke=${accent} stroke-opacity=".45" stroke-width="7" stroke-linecap="round" stroke-dasharray="320" style=${"" + `animation: ${underAnim}`}></path></svg></span><br />end to end.</span></h1>
<p style="margin: 24px 0 0; max-width: 520px; font-size: 18px; color: #5C635E; animation: sl-land 800ms cubic-bezier(.2,.7,.2,1) 360ms both">I’m a software developer focused on AI, machine learning and data science, building tools that solve real problems.</p>
<div style="margin-top: 32px; display: flex; flex-wrap: wrap; gap: 14px; animation: sl-land 800ms cubic-bezier(.2,.7,.2,1) 480ms both">
<a href="#work" class="rk-btn rk-btn-dark" style="display: inline-flex; align-items: center; gap: 10px; min-height: 50px; padding: 0 26px; border-radius: 8px; background: #202522; color: #F5F3ED; font-weight: 600">See my work
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
<a href="#contact" class="rk-btn rk-btn-line" style="display: inline-flex; align-items: center; min-height: 50px; padding: 0 26px; border-radius: 8px; border: 1px solid #CFC9BB; font-weight: 600">Get in touch</a>
</div>
</div>
<div class="rk-stage" onMouseMove=${onStageMove} onMouseLeave=${onStageLeave} style="flex: 1 1 420px; min-width: 0; max-width: 500px; position: relative; padding: 0 0 96px; perspective: 1100px; animation: rk-fade 1000ms ease 300ms both">
<div style=${"" + `position: relative; width: 100%; aspect-ratio: 4 / 5; transform-style: preserve-3d; transform: ${tilt}; transition: transform 350ms cubic-bezier(.2,.7,.2,1)`}>
<div aria-hidden="true" style=${"" + `position: absolute; left: 50%; bottom: 7%; width: 84%; aspect-ratio: 1; margin-left: -42%; border-radius: 999px; background: radial-gradient(circle at 35% 30%, #3A9471 0%, ${accent} 55%, #1F5A41 100%); box-shadow: inset 0 -20px 40px rgba(0,0,0,.18), 0 40px 70px -40px rgba(32,37,34,.7); transform: ${circleShift}; transition: transform 350ms cubic-bezier(.2,.7,.2,1); animation: rk-fade 900ms ease 350ms both`}></div>
<div aria-hidden="true" style="position: absolute; left: 22%; right: 22%; bottom: 2%; height: 18px; border-radius: 999px; background: radial-gradient(ellipse, rgba(32,37,34,.35), rgba(32,37,34,0) 70%); filter: blur(2px)"></div>
<div style="position: absolute; left: 50%; bottom: 3%; width: 74%; margin-left: -37%; animation: rk-float 6s ease-in-out 1.4s infinite">
<img class="rk-avatar" src="assets/roy-portrait.webp" alt="Roy Kamwanza with arms crossed, smiling" style=${"" + `display: block; width: 100%; height: auto; transform: ${personShift}; transition: transform 350ms cubic-bezier(.2,.7,.2,1); filter: drop-shadow(0 24px 24px rgba(32,37,34,.28)); -webkit-mask-image: linear-gradient(to bottom, #000 84%, transparent 100%); mask-image: linear-gradient(to bottom, #000 84%, transparent 100%); animation: rk-rise 1100ms cubic-bezier(.16,.8,.2,1) 500ms both`} />
</div>
<div style=${"" + `position: absolute; right: 0; top: 30%; padding: 8px 12px; border-radius: 12px; background: #FBFAF6; border: 1px solid #DDD8CC; box-shadow: 0 14px 30px -18px rgba(32,37,34,.5); font-size: 13px; font-weight: 700; transform: ${badgeShift}; transition: transform 350ms cubic-bezier(.2,.7,.2,1); animation: rk-fade 700ms ease 1100ms both`}><span style="display: inline-block; width: 8px; height: 8px; margin-right: 6px; border-radius: 999px; background: #22C55E"></span>Open to work</div>
</div>
<div class="rk-term rk-term-hero" onClick=${focusTerm} style="position: absolute; left: -10%; bottom: 0; width: min(340px, 92%); background: #202522; color: #F5F3ED; border-radius: 14px; overflow: hidden; box-shadow: 0 30px 60px -30px rgba(32,37,34,.7); animation: sl-land 900ms cubic-bezier(.2,.7,.2,1) 800ms both; cursor: text">
<div role="tablist" aria-label="Code window" style="display: flex; align-items: stretch; gap: 2px; padding: 0 8px; border-bottom: 1px solid #3A403C; overflow-x: auto">
${(termTabs || []).map((t, $index) => html`
<button type="button" role="tab" class="rk-tab" aria-selected=${t.selected} onClick=${t.pick} style=${"" + `flex: none; min-height: 42px; padding: 0 10px; border: 0; border-bottom: 2px solid ${t.line}; background: transparent; color: ${t.color}; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; cursor: pointer`}>${t.label}</button>
`)}
</div>
${(tabLog) ? html`
<div id="rk-term-body" aria-live="polite" style="padding: 14px 16px 16px; height: 196px; overflow-y: auto; box-sizing: border-box; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 13px; line-height: 1.75">
<span style="white-space: pre-wrap">${typed}</span>${(typing) ? html`<span aria-hidden="true" style="display: inline-block; width: 8px; height: 16px; margin-left: 1px; vertical-align: -3px; background: #8FD3B2; animation: sl-blink 1s steps(1) infinite"></span>` : null}
${(history || []).map((h, $index) => html`
<div style=${"" + `white-space: pre-wrap; color: ${h.color}`}>${h.text}</div>
`)}
${(ready) ? html`
<div style="display: flex; align-items: center; gap: 8px">
<span aria-hidden="true" style="color: #8FD3B2">$</span>
<label for="rk-term-input" style="position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0)">Terminal command</label>
<input id="rk-term-input" class="rk-term-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" value=${cmd} onInput=${onCmd} onKeyDown=${onCmdKey} placeholder="type help" />
</div>
` : null}
</div>
` : null}
${(tabOther) ? html`
<div role="tabpanel" style="padding: 14px 16px 16px; height: 196px; overflow-y: auto; box-sizing: border-box; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12.5px; line-height: 1.7; white-space: pre; color: #E4E7E2; animation: rk-fade 300ms ease both">${tabText}</div>
` : null}
</div>
</div>
</div>
<div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid #DDD8CC; display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 20px 32px">
<div style="display: flex; align-items: center; gap: 12px"><span style="font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-size: 40px; font-weight: 700; letter-spacing: -0.03em; line-height: 1">${statA}</span><span style="font-size: 13.5px; color: #5C635E; line-height: 1.35">Professional<br />certifications</span></div>
<div style="display: flex; align-items: center; gap: 12px"><span style="font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-size: 40px; font-weight: 700; letter-spacing: -0.03em; line-height: 1">${statB}</span><span style="font-size: 13.5px; color: #5C635E; line-height: 1.35">Selected<br />projects</span></div>
<div style="display: flex; align-items: center; gap: 12px"><span style="font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-size: 40px; font-weight: 700; letter-spacing: -0.03em; line-height: 1">${statC}</span><span style="font-size: 13.5px; color: #5C635E; line-height: 1.35">Months of price<br />data analysed</span></div>
<div style="display: flex; align-items: center; gap: 12px"><span style="font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-size: 40px; font-weight: 700; letter-spacing: -0.03em; line-height: 1">${statD}</span><span style="font-size: 13.5px; color: #5C635E; line-height: 1.35">Platforms shipped<br />to: web & mobile</span></div>
</div>
</div>
</section>

<section id="work" class=${rv_work_cls} style="position: relative; background: #ECE9E0; border-top: 1px solid #DDD8CC; border-bottom: 1px solid #DDD8CC">
<div style="max-width: 1180px; margin: 0 auto; padding: 64px 24px">
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 12px 40px">
<div style="flex: 1 1 420px; min-width: 0">
<h2 class="rk-stag" style="--i: 0; margin: 0; font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-weight: 700; font-size: clamp(34px, 4vw, 48px); letter-spacing: -0.03em; line-height: 1.05">Selected projects</h2>
</div>
</div>
<div style="margin-top: 28px; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr)); gap: 20px">
${(projects || []).map((p, $index) => html`
<article class="rk-card rk-stag" style=${"" + `--i: ${p.i}; display: flex; flex-direction: column; min-width: 0; background: #FBFAF6; border: 1px solid #DDD8CC; border-radius: 16px; padding: 8px; transition: transform 250ms ease, box-shadow 250ms ease, border-color 250ms ease`}>
<div class=${"" + `rk-media ${p.fxClass}`} style="background: #111412; border-radius: 12px">
<img class=${p.imgClass} src=${p.img} alt=${p.alt} style=${"" + `display: block; width: 100%; aspect-ratio: 16 / 10; object-fit: ${p.imgFit}; filter: ${p.imgFilter}`} />
${(p.isHand) ? html`
<svg class="rk-fx" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<rect x="24" y="16" width="42" height="52" rx="3" fill="none" stroke="#8FD3B2" stroke-width="0.8" stroke-dasharray="3 2"></rect>
<rect x="24" y="9" width="22" height="7" rx="1.5" fill="#287A59"></rect>
<text x="27" y="14.2" font-size="5" font-family="JetBrains Mono, monospace" fill="#FFFFFF">hello</text>
<g fill="none" stroke="#8FD3B2" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round">
<path class="rk-draw" d="M44 62 L34 52 L29 44"></path>
<path class="rk-draw" d="M44 62 L40 46 L38 34 L37 26"></path>
<path class="rk-draw" d="M44 62 L45 45 L45 32 L45 23"></path>
<path class="rk-draw" d="M44 62 L50 46 L52 34 L53 27"></path>
<path class="rk-draw" d="M44 62 L54 49 L58 40 L60 34"></path>
<path class="rk-draw" d="M40 46 L45 45 L50 46 L54 49"></path>
</g>
<g fill="#FFFFFF" stroke="#287A59" stroke-width="0.6">
<circle class="rk-dot" cx="44" cy="62" r="1.6"></circle><circle class="rk-dot" cx="29" cy="44" r="1.3"></circle><circle class="rk-dot" cx="37" cy="26" r="1.3"></circle><circle class="rk-dot" cx="45" cy="23" r="1.3"></circle><circle class="rk-dot" cx="53" cy="27" r="1.3"></circle><circle class="rk-dot" cx="60" cy="34" r="1.3"></circle><circle class="rk-dot" cx="40" cy="46" r="1.2"></circle><circle class="rk-dot" cx="45" cy="45" r="1.2"></circle><circle class="rk-dot" cx="50" cy="46" r="1.2"></circle><circle class="rk-dot" cx="54" cy="49" r="1.2"></circle>
</g>
</svg>
` : null}
${(p.isCar) ? html`
<svg class="rk-fx" viewBox="0 0 160 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
<path id=${p.routeId} d="M12 74 C 40 66, 46 36, 78 42 S 128 62, 148 18" fill="none" stroke="#202522" stroke-opacity="0.35" stroke-width="4" stroke-linecap="round"></path>
<path d="M12 74 C 40 66, 46 36, 78 42 S 128 62, 148 18" fill="none" stroke="#287A59" stroke-width="2" stroke-dasharray="4 3" stroke-linecap="round"></path>
<circle cx="12" cy="74" r="3" fill="#FFFFFF" stroke="#202522" stroke-width="1.2"></circle>
<circle cx="148" cy="18" r="3.2" fill="#287A59" stroke="#FFFFFF" stroke-width="1.2"></circle>
<g>
<circle r="7" fill="#287A59" fill-opacity="0.25"></circle>
<circle r="3.6" fill="#FFFFFF" stroke="#287A59" stroke-width="1.6"></circle>
<animateMotion dur="3.2s" repeatCount="indefinite" path="M12 74 C 40 66, 46 36, 78 42 S 128 62, 148 18"></animateMotion>
</g>
</svg>
` : null}
${(p.isFilm) ? html`
<div class="rk-fx" aria-hidden="true">
<div style="position: absolute; left: 0; right: 0; top: 0; height: 14px; background: #202522 repeating-linear-gradient(90deg, transparent 0 8px, #F5F3ED 8px 15px, transparent 15px 22px) center / 100% 6px no-repeat"></div>
<div style="position: absolute; left: 0; right: 0; bottom: 0; height: 14px; background: #202522 repeating-linear-gradient(90deg, transparent 0 8px, #F5F3ED 8px 15px, transparent 15px 22px) center / 100% 6px no-repeat"></div>
<div style="position: absolute; right: 12px; top: 22px; padding: 2px 8px; border-radius: 6px; background: #202522; color: #F5F3ED; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11px">● REC</div>
</div>
` : null}
${(p.isHand) ? html`
<button type="button" onClick=${p.toggleFx} aria-pressed=${p.fxPressed} style="position: absolute; left: 10px; bottom: 10px; min-height: 36px; padding: 0 12px; border: 0; border-radius: 999px; background: #202522; color: #F5F3ED; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; cursor: pointer; z-index: 2"><span style=${"" + `display: inline-block; width: 8px; height: 8px; margin-right: 6px; border-radius: 999px; background: ${p.fxDot}`}></span>Landmarks: ${p.fxLabel}</button>
` : null}
</div>
<div style="display: flex; flex-direction: column; flex: 1; padding: 18px 14px 14px">
<div style="display: flex; justify-content: space-between; align-items: baseline; gap: 12px; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 12px; color: #5C635E"><span>${p.num} · ${p.kicker}</span><span>${p.year}</span></div>
<h3 style="margin: 8px 0 0; font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-size: 22px; font-weight: 700; line-height: 1.2; letter-spacing: -0.015em">${p.title}</h3>
<p style="margin: 8px 0 0; color: #4A514C; font-size: 15px; line-height: 1.55">${p.desc}</p>
<div style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 6px">
${(p.stack || []).map((t, $index) => html`<span style="padding: 3px 9px; border-radius: 6px; border: 1px solid #DDD8CC; font-family: 'JetBrains Mono', ui-monospace, monospace; font-size: 11.5px; color: #3F4541">${t}</span>`)}
</div>
<div style="margin-top: auto; padding-top: 16px; display: flex; flex-wrap: wrap; gap: 4px 22px; border-top: 1px solid #ECE9E0">
<a href=${p.link} target=${p.target} rel="noopener noreferrer" class="rk-ul" style="display: inline-flex; align-items: center; gap: 6px; min-height: 44px; font-size: 14.5px; font-weight: 700">${p.linkText}<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></a>
${(p.hasLink2) ? html`<a href=${p.link2} target="_blank" rel="noopener noreferrer" class="rk-ul" style="display: inline-flex; align-items: center; gap: 6px; min-height: 44px; font-size: 14.5px; font-weight: 600; color: #5C635E">${p.link2Text}<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg></a>` : null}
</div>
</div>
</article>
`)}
</div>
</div>
</section>

<section id="play" class=${rv_play_cls} style="position: relative; max-width: 1180px; margin: 0 auto; padding: 64px 24px 24px">
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 16px 40px">
<div style="flex: 1 1 520px; min-width: 0">
<h2 class="rk-stag" style="--i: 0; margin: 0; font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-weight: 700; font-size: clamp(34px, 4vw, 48px); letter-spacing: -0.03em; line-height: 1.05">What a bag of mealie meal cost, month by month</h2>
<p class="rk-stag" style="--i: 1; margin: 14px 0 0; max-width: 640px; color: #5C635E">Four years of official ZamStats prices, from my Zambia food prices project. Pick a food, then hover over or tap the chart to see the price in any month.</p>
</div>
<div class="rk-stag" style="--i: 1; display: flex; flex-wrap: wrap; gap: 10px">
<a href="https://github.com/roykamwanza/zambia-food-prices" target="_blank" rel="noopener noreferrer" class="rk-btn rk-btn-line" style="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 10px; border: 1px solid #CFC9BB; font-size: 14px; font-weight: 600">View on GitHub</a>
<a href="https://colab.research.google.com/github/roykamwanza/zambia-food-prices/blob/main/zambia_food_prices.ipynb" target="_blank" rel="noopener noreferrer" class="rk-btn rk-btn-dark" style="display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 18px; border-radius: 10px; background: #202522; color: #F5F3ED; font-size: 14px; font-weight: 600">Open the notebook</a>
</div>
</div>

<div class="rk-stag" style="--i: 2; margin-top: 28px; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px">
<div role="group" aria-label="Choose a food" style="display: flex; flex-wrap: wrap; gap: 8px">
${(fpProducts || []).map((o, $index) => html`
<button type="button" class="rk-btn" onClick=${o.pick} aria-pressed=${o.pressed} style=${"" + `display: inline-flex; align-items: center; gap: 8px; min-height: 44px; padding: 0 16px; border-radius: 999px; border: 1px solid ${o.border}; background: ${o.bg}; color: ${o.fg}; font-family: inherit; font-size: 14px; font-weight: 600; cursor: pointer`}><span aria-hidden="true" style=${"" + `width: 10px; height: 10px; border-radius: 999px; background: ${o.dot}`}></span>${o.label}</button>
`)}
</div>
<div role="tablist" aria-label="Choose a view" style="display: inline-flex; padding: 4px; border-radius: 12px; background: #ECE9E0; border: 1px solid #DDD8CC">
${(fpViews || []).map((v, $index) => html`
<button type="button" role="tab" aria-selected=${v.selected} onClick=${v.pick} style=${"" + `min-height: 38px; padding: 0 14px; border: 0; border-radius: 9px; background: ${v.bg}; color: ${v.fg}; font-family: inherit; font-size: 14px; font-weight: 600; cursor: pointer; box-shadow: ${v.shadow}; transition: background 200ms ease`}>${v.label}</button>
`)}
</div>
</div>

<div class="rk-stag" style="--i: 3; margin-top: 16px; display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px">
${(fpStats || []).map((t, $index) => html`
<div style="padding: 14px 16px; border-radius: 14px; background: #FBFAF6; border: 1px solid #DDD8CC">
<div style="font-size: 13px; color: #5C635E">${t.label}</div>
<div style=${"" + `margin-top: 2px; font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-size: 28px; font-weight: 700; letter-spacing: -0.02em; color: ${t.color}`}>${t.value}</div>
<div style="font-size: 13px; color: #5C635E">${t.note}</div>
</div>
`)}
</div>

<div class="rk-stag" style="--i: 4; margin-top: 16px; padding: 22px 22px 18px; border-radius: 20px; background: #FBFAF6; color: #202522; border: 1px solid #DDD8CC; box-shadow: 0 24px 50px -40px rgba(32,37,34,.45)">
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 6px 16px">
<div style="font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-size: 20px; font-weight: 700">${fpTitle}</div>
<div style="font-size: 13px; color: #5C635E">${fpUnit}</div>
</div>
<p style="margin: 6px 0 0; font-size: 15px; color: #3F4541">${fpInsight}</p>

${(fpIsTime) ? html`
<div style="margin-top: 18px; display: flex; gap: 10px">
<div aria-hidden="true" style="width: 46px; flex: none"></div>
<div style="flex: 1; min-width: 0">
<div tabindex="0" role="img" aria-label=${fpAria} onPointerMove=${fpMove} onPointerDown=${fpMove} onPointerLeave=${fpLeave} onKeyDown=${fpKey} style="position: relative; width: 100%; aspect-ratio: 5 / 2; min-height: 220px; touch-action: pan-y; cursor: crosshair; outline-offset: 4px; border-radius: 6px">
${(fpGrid || []).map((gl, $index) => html`
<span aria-hidden="true" style=${"" + `position: absolute; left: 0; right: 0; top: ${gl.top}; height: 1px; background: #ECE9E0`}></span>
`)}
${(fpGrid || []).map((gl, $index) => html`
<span aria-hidden="true" style=${"" + `position: absolute; right: calc(100% + 10px); top: ${gl.top}; transform: translateY(-50%); font-size: 12px; color: #5C635E; white-space: nowrap`}>${gl.label}</span>
`)}
<svg viewBox="0 0 1000 400" preserveAspectRatio="none" aria-hidden="true" style="position: absolute; inset: 0; width: 100%; height: 100%; overflow: visible">
<path d=${fpArea} fill=${fpColor} fill-opacity="0.12"></path>
<path d=${fpLine} fill="none" stroke=${fpColor} stroke-width="3" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"></path>
</svg>
<span aria-hidden="true" style=${"" + `position: absolute; left: ${fpPeakLeft}; top: ${fpPeakTop}; width: 12px; height: 12px; margin: -6px 0 0 -6px; border-radius: 999px; background: ${fpColor}; border: 2px solid #FBFAF6`}></span>
<span aria-hidden="true" style=${"" + `position: absolute; left: ${fpPeakLeft}; top: ${fpPeakTop}; transform: ${fpPeakShift}; white-space: nowrap; font-size: 12.5px; font-weight: 700; color: ${fpColor}`}>${fpPeakLabel}</span>
${(fpHasHover) ? html`
<span aria-hidden="true" style=${"" + `position: absolute; top: 0; bottom: 0; left: ${fpHoverLeft}; width: 1px; background: #B9BFB9`}></span>
<span aria-hidden="true" style=${"" + `position: absolute; left: ${fpHoverLeft}; top: ${fpHoverTop}; width: 14px; height: 14px; margin: -7px 0 0 -7px; border-radius: 999px; background: #FFFFFF; border: 3px solid ${fpColor}`}></span>
<div role="status" style=${"" + `position: absolute; left: ${fpHoverLeft}; top: 0; transform: ${fpTipShift}; padding: 8px 12px; border-radius: 10px; background: #202522; color: #F5F3ED; white-space: nowrap; box-shadow: 0 10px 24px -12px rgba(0,0,0,.5); pointer-events: none`}>
<div style="font-size: 12px; color: #B9BFB9">${fpHoverMonth}</div>
<div style="font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-size: 20px; font-weight: 700">${fpHoverPrice}</div>
</div>
` : null}
</div>
<div aria-hidden="true" style="position: relative; height: 22px; margin-top: 8px">
${(fpXTicks || []).map((x, $index) => html`
<span style=${"" + `position: absolute; left: ${x.left}; transform: translateX(-50%); font-size: 12px; color: #5C635E; white-space: nowrap`}>${x.label}</span>
`)}
</div>
</div>
</div>
<p style="margin: 10px 0 0; font-size: 12.5px; color: #6B726D">Tip: on a keyboard, focus the chart and use the arrow keys.</p>
` : null}

${(fpIsYear) ? html`
<div style="margin-top: 18px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; align-items: end; height: 260px">
${(fpYears || []).map((y, $index) => html`
<div style="height: 100%; display: flex; flex-direction: column; justify-content: flex-end; align-items: center; gap: 6px">
<div style="font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-size: 18px; font-weight: 700">${y.value}</div>
<div style=${"" + `width: 100%; max-width: 120px; height: ${y.height}; border-radius: 10px 10px 4px 4px; background: ${y.color}; transition: height 500ms cubic-bezier(.2,.7,.2,1)`}></div>
<div style="font-size: 14px; font-weight: 600">${y.label}</div>
</div>
`)}
</div>
<p style="margin: 12px 0 0; font-size: 12.5px; color: #6B726D">Average of each year’s monthly prices. 2026 covers January to October.</p>
` : null}

${(fpIsDistrict) ? html`
<div style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 16px; font-size: 13px; color: #5C635E">
<span style="display: inline-flex; align-items: center; gap: 6px"><span style="width: 10px; height: 10px; border-radius: 999px; background: #287A59"></span>Cheapest district</span>
<span style="display: inline-flex; align-items: center; gap: 6px"><span style="width: 9px; height: 9px; background: #202522; transform: rotate(45deg)"></span>National average</span>
<span style="display: inline-flex; align-items: center; gap: 6px"><span style="width: 10px; height: 10px; border-radius: 999px; background: #C2410C"></span>Most expensive district</span>
</div>
<ol style="list-style: none; margin: 14px 0 0; padding: 0; display: flex; flex-direction: column; gap: 14px">
${(fpDistricts || []).map((r, $index) => html`
<li style="display: grid; grid-template-columns: 76px minmax(0, 1fr); gap: 4px 14px; align-items: center">
<span style="font-size: 13px; font-weight: 600">${r.month}</span>
<div style="position: relative; height: 14px">
<span aria-hidden="true" style=${"" + `position: absolute; top: 50%; height: 6px; margin-top: -3px; left: ${r.minLeft}; width: ${r.width}; border-radius: 999px; background: #E2DED3`}></span>
<span aria-hidden="true" style=${"" + `position: absolute; top: 50%; left: ${r.minLeft}; width: 12px; height: 12px; margin: -6px 0 0 -6px; border-radius: 999px; background: #287A59`}></span>
<span aria-hidden="true" style=${"" + `position: absolute; top: 50%; left: ${r.natLeft}; width: 10px; height: 10px; margin: -5px 0 0 -5px; background: #202522; transform: rotate(45deg)`}></span>
<span aria-hidden="true" style=${"" + `position: absolute; top: 50%; left: ${r.maxLeft}; width: 12px; height: 12px; margin: -6px 0 0 -6px; border-radius: 999px; background: #C2410C`}></span>
</div>
<span></span>
<span style="font-size: 12.5px; color: #5C635E">${r.text}</span>
</li>
`)}
</ol>
` : null}

<div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid #ECE9E0; font-size: 12px; color: #6B726D">Source: ZamStats Monthly Bulletins (10 issues, Dec 2023 – Oct 2026). National average retail prices.</div>
</div>
</section>

<section id="about" class=${rv_about_cls} style="position: relative; max-width: 1180px; margin: 0 auto; padding: 64px 24px; display: flex; flex-wrap: wrap; gap: 40px">
<div style="flex: 1 1 440px; min-width: 0">
<h2 class="rk-stag" style="--i: 0; margin: 0; font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-weight: 700; font-size: clamp(34px, 4vw, 48px); letter-spacing: -0.03em; line-height: 1.05">A bit about me</h2>
<p style="margin: 18px 0 0; color: #3F4541; font-size: 17px">I’m a software developer focused on AI, machine learning and data science, building tools that solve real problems.</p>
<p style="margin: 12px 0 0; color: #5C635E; font-size: 16px">I’m currently studying Computing at Cavendish University Zambia and working as a Software Developer Intern at Imuks, where I build web and mobile applications.</p>
<p style="margin: 12px 0 0; color: #5C635E; font-size: 16px">I’m also building a real-time Zambian Sign Language recognition system using computer vision, to help deaf and hearing people communicate more easily.</p>
<p style="margin: 12px 0 0; color: #5C635E; font-size: 16px">I hold the IBM AI Engineering certification and DataCamp’s Associate Data Scientist certification.</p>
<p style="margin: 12px 0 0; color: #5C635E; font-size: 16px">I’m open to full-time roles, collaborations and freelance work in software development, AI and data science. Feel free to <a href="#contact" class="rk-ul" style=${"" + `font-weight: 700; border-bottom: 2px solid ${accent}`}>get in touch</a>.</p>
</div>
<div id="skills" class="rk-stag" style="--i: 2; flex: 1 1 400px; min-width: 0">
<h3 style="margin: 0; font-size: 15px; font-weight: 700">Tools I use</h3>
<div style="margin-top: 14px; display: flex; flex-direction: column; gap: 14px">
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px"><span style="width: 64px; font-size: 13px; color: #5C635E">Build</span>
<span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">TypeScript</span><span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">React</span><span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">React Native</span><span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">Next.js</span><span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">PostgreSQL</span></div>
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px"><span style="width: 64px; font-size: 13px; color: #5C635E">AI</span>
<span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">Python</span><span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">Computer vision</span><span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">PyTorch</span><span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">Machine learning</span></div>
<div style="display: flex; flex-wrap: wrap; align-items: center; gap: 8px"><span style="width: 64px; font-size: 13px; color: #5C635E">Data</span>
<span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">SQL</span><span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">Pandas</span><span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">KoboToolbox</span><span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">Docker</span><span style="padding: 5px 12px; border-radius: 999px; border: 1px solid #CFC9BB; background: #FBFAF6; font-size: 14px; font-weight: 600">Git & Linux</span></div>
</div>
</div>
</section>

<section id="experience" class=${rv_experience_cls} style="position: relative; background: #ECE9E0; border-top: 1px solid #DDD8CC">
<div style="max-width: 1180px; margin: 0 auto; padding: 64px 24px">
<h2 class="rk-stag" style="--i: 0; margin: 0; font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-weight: 700; font-size: clamp(34px, 4vw, 48px); letter-spacing: -0.03em; line-height: 1.05">Experience & credentials</h2>
<div style="margin-top: 32px; display: flex; flex-wrap: wrap; gap: 36px">
<div style="flex: 1.4 1 480px; min-width: 0">
<div style="position: relative">
<span aria-hidden="true" style="position: absolute; left: 6px; top: 12px; bottom: 12px; width: 2px; background: #CFC9BB"></span>
<ol style="list-style: none; margin: 0; padding: 0; position: relative">
<li class="rk-stag" style="--i: 1; position: relative; padding: 0 0 28px 34px">
<span aria-hidden="true" style=${"" + `position: absolute; left: 0; top: 6px; width: 14px; height: 14px; border-radius: 999px; background: #F5F3ED; border: 3px solid ${accent}`}></span>
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 4px 16px">
<h3 style="margin: 0; font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-size: 22px; font-weight: 700; letter-spacing: -0.01em">Software Developer Intern</h3>
<span style="font-size: 14px; color: #5C635E">Jun 2026 – Present</span>
</div>
<div style="margin-top: 2px; font-weight: 600; color: #3F4541">Imuks · Internship</div>
<div style="font-size: 14px; color: #5C635E">Lusaka, Zambia · Remote</div>
<ul style="list-style: none; margin: 10px 0 0; padding: 0; color: #3F4541; font-size: 15.5px; line-height: 1.6">
<li style="position: relative; padding-left: 18px; margin-top: 8px"><span aria-hidden="true" style=${"" + `position: absolute; left: 0; top: 10px; width: 7px; height: 7px; border-radius: 999px; background: ${accent}`}></span>Built web and mobile features for Ride Along, a ride-hailing platform, using React, Next.js, React Native and TypeScript.</li><li style="position: relative; padding-left: 18px; margin-top: 8px"><span aria-hidden="true" style=${"" + `position: absolute; left: 0; top: 10px; width: 7px; height: 7px; border-radius: 999px; background: ${accent}`}></span>Built an admin dashboard for user management, the mobile profile photo upload, and WhatsApp messaging between passengers and drivers.</li><li style="position: relative; padding-left: 18px; margin-top: 8px"><span aria-hidden="true" style=${"" + `position: absolute; left: 0; top: 10px; width: 7px; height: 7px; border-radius: 999px; background: ${accent}`}></span>Created reusable UI components and shared styles to keep screens consistent across devices, and worked with QA to test features and fix issues.</li><li style="position: relative; padding-left: 18px; margin-top: 8px"><span aria-hidden="true" style=${"" + `position: absolute; left: 0; top: 10px; width: 7px; height: 7px; border-radius: 999px; background: ${accent}`}></span>Took part in code reviews, daily stand-ups and sprint planning, fixed CI/CD issues such as GitHub Actions secrets and merge conflicts, and collaborated through GitHub PRs and ClickUp.</li>
</ul>
<div style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 6px"><span style="padding: 3px 10px; border-radius: 999px; background: #FBFAF6; border: 1px solid #DDD8CC; font-size: 12.5px; font-weight: 600; color: #3F4541">TypeScript</span><span style="padding: 3px 10px; border-radius: 999px; background: #FBFAF6; border: 1px solid #DDD8CC; font-size: 12.5px; font-weight: 600; color: #3F4541">React</span><span style="padding: 3px 10px; border-radius: 999px; background: #FBFAF6; border: 1px solid #DDD8CC; font-size: 12.5px; font-weight: 600; color: #3F4541">Next.js</span><span style="padding: 3px 10px; border-radius: 999px; background: #FBFAF6; border: 1px solid #DDD8CC; font-size: 12.5px; font-weight: 600; color: #3F4541">React Native</span><span style="padding: 3px 10px; border-radius: 999px; background: #FBFAF6; border: 1px solid #DDD8CC; font-size: 12.5px; font-weight: 600; color: #3F4541">GitHub Actions</span></div>
</li>
<li class="rk-stag" style="--i: 2; position: relative; padding: 0 0 0px 34px">
<span aria-hidden="true" style=${"" + `position: absolute; left: 0; top: 6px; width: 14px; height: 14px; border-radius: 999px; background: #F5F3ED; border: 3px solid ${accent}`}></span>
<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: baseline; gap: 4px 16px">
<h3 style="margin: 0; font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-size: 22px; font-weight: 700; letter-spacing: -0.01em">Data Collection Assistant</h3>
<span style="font-size: 14px; color: #5C635E">Apr – May 2025</span>
</div>
<div style="margin-top: 2px; font-weight: 600; color: #3F4541">Koei Africa Co. Ltd. · Contract</div>
<div style="font-size: 14px; color: #5C635E">Lusaka Province, Zambia</div>
<ul style="list-style: none; margin: 10px 0 0; padding: 0; color: #3F4541; font-size: 15.5px; line-height: 1.6">
<li style="position: relative; padding-left: 18px; margin-top: 8px"><span aria-hidden="true" style=${"" + `position: absolute; left: 0; top: 10px; width: 7px; height: 7px; border-radius: 999px; background: ${accent}`}></span>Collected field data for a study of trade costs, trade time and greenhouse gas emissions on the New Central Corridor routes linking Malawi, Zambia and the DRC.</li><li style="position: relative; padding-left: 18px; margin-top: 8px"><span aria-hidden="true" style=${"" + `position: absolute; left: 0; top: 10px; width: 7px; height: 7px; border-radius: 999px; background: ${accent}`}></span>Ran questionnaires and interviews using KoboToolbox.</li><li style="position: relative; padding-left: 18px; margin-top: 8px"><span aria-hidden="true" style=${"" + `position: absolute; left: 0; top: 10px; width: 7px; height: 7px; border-radius: 999px; background: ${accent}`}></span>Kept the data accurate and met collection targets within project deadlines.</li>
</ul>
<div style="margin-top: 14px; display: flex; flex-wrap: wrap; gap: 6px"><span style="padding: 3px 10px; border-radius: 999px; background: #FBFAF6; border: 1px solid #DDD8CC; font-size: 12.5px; font-weight: 600; color: #3F4541">Field research</span><span style="padding: 3px 10px; border-radius: 999px; background: #FBFAF6; border: 1px solid #DDD8CC; font-size: 12.5px; font-weight: 600; color: #3F4541">Data collection</span><span style="padding: 3px 10px; border-radius: 999px; background: #FBFAF6; border: 1px solid #DDD8CC; font-size: 12.5px; font-weight: 600; color: #3F4541">KoboToolbox</span></div>
</li>
</ol>
</div>
</div>
<div style="flex: 1 1 360px; min-width: 0">
<h3 class="rk-stag" style="--i: 1; margin: 0; font-size: 15px; font-weight: 700">Education</h3>
<div class="rk-stag" style="--i: 1; margin-top: 12px; padding: 18px; background: #FBFAF6; border: 1px solid #DDD8CC; border-radius: 14px">
<div style="font-weight: 700; font-size: 17px">BSc Computing</div>
<div style="color: #3F4541">Cavendish University Zambia</div>
<div style="font-size: 14px; color: #5C635E">Feb 2024 – Aug 2028 (expected) · Member of CUZITA</div>
</div>
<h3 class="rk-stag" style="--i: 2; margin: 32px 0 0; font-size: 15px; font-weight: 700">Certifications</h3>
<ul style="list-style: none; margin: 12px 0 0; padding: 0; display: flex; flex-direction: column; gap: 10px">
<li class="rk-card rk-stag" style="--i: 2; display: flex; gap: 14px; align-items: flex-start; padding: 16px; background: #FBFAF6; border: 1px solid #DDD8CC; border-radius: 14px">
<span aria-hidden="true" style="flex: none; width: 44px; height: 44px; border-radius: 10px; background: #1F3A93; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; letter-spacing: -0.02em">IBM</span>
<div style="min-width: 0">
<div style="font-weight: 700; line-height: 1.3">IBM AI Engineering</div>
<div style="font-size: 14px; color: #3F4541">IBM · Sep 2026</div>
<div style="margin-top: 2px; font-size: 13px; color: #5C635E; font-family: 'JetBrains Mono', ui-monospace, monospace">Credential ID M6YMEF44SUBT</div>
<div style="margin-top: 6px; font-size: 13px; color: #5C635E">Machine learning, PyTorch and more</div>
</div>
</li>
<li class="rk-card rk-stag" style="--i: 3; display: flex; gap: 14px; align-items: flex-start; padding: 16px; background: #FBFAF6; border: 1px solid #DDD8CC; border-radius: 14px">
<span aria-hidden="true" style="flex: none; width: 44px; height: 44px; border-radius: 10px; background: #1F3A93; color: #FFFFFF; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; letter-spacing: -0.02em">IBM</span>
<div style="min-width: 0">
<div style="font-weight: 700; line-height: 1.3">AI-Assisted Code Modernization</div>
<div style="font-size: 14px; color: #3F4541">IBM · Sep 2026</div>

<div style="margin-top: 6px; font-size: 13px; color: #5C635E">Code refactoring, reviewing and validating AI-generated code</div>
</div>
</li>
<li class="rk-card rk-stag" style="--i: 4; display: flex; gap: 14px; align-items: flex-start; padding: 16px; background: #FBFAF6; border: 1px solid #DDD8CC; border-radius: 14px">
<span aria-hidden="true" style="flex: none; width: 44px; height: 44px; border-radius: 10px; background: #202522; color: #F5F3ED; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; letter-spacing: -0.02em">CS</span>
<div style="min-width: 0">
<div style="font-weight: 700; line-height: 1.3">CS302: Software Engineering</div>
<div style="font-size: 14px; color: #3F4541">Saylor University · Aug 2026</div>

<div style="margin-top: 6px; font-size: 13px; color: #5C635E">Object-oriented programming, software design</div>
</div>
</li>
<li class="rk-card rk-stag" style="--i: 5; display: flex; gap: 14px; align-items: flex-start; padding: 16px; background: #FBFAF6; border: 1px solid #DDD8CC; border-radius: 14px">
<span aria-hidden="true" style="flex: none; width: 44px; height: 44px; border-radius: 10px; background: #03EF62; color: #05192D; display: inline-flex; align-items: center; justify-content: center; font-weight: 800; font-size: 13px; letter-spacing: -0.02em">DC</span>
<div style="min-width: 0">
<div style="font-weight: 700; line-height: 1.3">Associate Data Scientist</div>
<div style="font-size: 14px; color: #3F4541">DataCamp · May 2026 (valid to May 2028)</div>
<div style="margin-top: 2px; font-size: 13px; color: #5C635E; font-family: 'JetBrains Mono', ui-monospace, monospace">Credential ID DSA0017884127589</div>
<div style="margin-top: 6px; font-size: 13px; color: #5C635E">Data visualization, exploratory data analysis</div>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section id="contact" class=${"" + `rk-dark ${rv_contact_cls}`} style="position: relative; background: #202522; color: #F5F3ED">
<div style="max-width: 1180px; margin: 0 auto; padding: 72px 24px 56px">
<span style="display: block; width: 56px; height: 3px; background: #8FD3B2"></span>
<div style="margin-top: 24px; display: flex; flex-wrap: wrap; gap: 40px; align-items: flex-end; justify-content: space-between">
<div style="flex: 1 1 600px; min-width: 0">
<h2 class="rk-stag" style="--i: 0; margin: 0; font-family: 'Bricolage Grotesque', Manrope, sans-serif; font-weight: 700; font-size: clamp(38px, 5.2vw, 72px); line-height: 1; letter-spacing: -0.035em">Got an idea? Let’s make something good together.</h2>
<p style="margin: 22px 0 0; max-width: 540px; color: #B9BFB9; font-size: 17px">Full-time roles, freelance work or a wild side project, I read every message and usually reply within two days.</p>
</div>
<div style="display: flex; flex-direction: column; gap: 8px">
<a href="mailto:roykamwanza955@gmail.com?subject=Hello%20Roy" class="rk-btn rk-btn-accent" style=${"" + `display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px; padding: 0 28px; border-radius: 10px; background: ${accent}; color: #FFFFFF; font-size: 16px; font-weight: 700`}>
<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>Send me an email</a>
<a href="https://mail.google.com/mail/?view=cm&fs=1&to=roykamwanza955@gmail.com&su=Hello%20Roy" target="_blank" rel="noopener noreferrer" class="rk-btn" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; min-height: 48px; padding: 0 24px; border-radius: 10px; border: 1px solid #4A514C; color: #F5F3ED; font-size: 15px; font-weight: 600">Open in Gmail
<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg></a>
<div style="display: flex; gap: 24px; justify-content: center">
<a href="https://www.linkedin.com/in/roy-kamwanza-0550b5244/" target="_blank" rel="noopener noreferrer" class="rk-social" style="color: #F5F3ED; min-height: 44px; display: inline-flex; align-items: center; font-weight: 600"><span>LinkedIn</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg></a>
<a href="https://github.com/roykamwanza" target="_blank" rel="noopener noreferrer" class="rk-social" style="color: #F5F3ED; min-height: 44px; display: inline-flex; align-items: center; font-weight: 600"><span>GitHub</span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"></path></svg></a>
</div>
</div>
</div>
<div style="margin-top: 56px; padding-top: 24px; border-top: 1px solid #3A403C; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; font-size: 14px; color: #B9BFB9">
<span>© 2026 Roy Kamwanza. Thanks for scrolling all the way down.</span>
<a href="#top" style="color: #F5F3ED; min-height: 44px; display: inline-flex; align-items: center">Back to top</a>
</div>
</div>
</section>

</div>`;
}

class DCLogic extends PreactComponent {
  render() { return view(this.renderVals()); }
}
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { chars: 0, filter: 'All', email: '', error: '', subscribed: false, tries: 0, menu: false, history: [], cmd: '', copied: 0, copyMsg: '', tx: 0, ty: 0, termTab: 'log', fpProduct: 'bmm', fpView: 'time', fpHover: -1, scr: {}, scrTick: 0, wordIdx: 0, wordTick: 0, localTime: '', cardTilt: {}, fxOn: {}, openPost: -1, kmN: 60, kmSpread: 80, kmSpeed: 5, kmMax: 20, kmPlaying: false, kmStop: '', statA: 0, statB: 0, progress: 0, seen: {}, k: 3, km: null, kmIter: 0, kmPhase: 'idle' };
  }
  log() {
    return '$ whoami\nroy: software developer, lusaka\n$ cat roy.log\n> studying Computing @ Cavendish\n> shipped kwacha-net (pay + AI)\n> training a model to read ZSL\n$ status\nopen to full-time roles + projects';
  }
  componentDidMount() {
    this.setState({ km: this.kmData() });
    this.onScroll = () => {
      if (this.scrollRaf) return;
      this.scrollRaf = requestAnimationFrame(() => {
        this.scrollRaf = 0;
        const doc = document.documentElement;
        const max = Math.max(1, doc.scrollHeight - window.innerHeight);
        const progress = Math.min(100, Math.max(0, (window.scrollY || doc.scrollTop) / max * 100));
        const seen = Object.assign({}, this.state.seen);
        let changed = false;
        ['work', 'play', 'about', 'experience', 'contact'].forEach((id) => {
          const el = document.getElementById(id);
          if (el && !seen[id] && el.getBoundingClientRect().top < window.innerHeight * 0.88) { seen[id] = true; changed = true; }
        });
        this.setState(changed ? { progress, seen } : { progress });
        if (changed) this.startScramble(seen);
      });
    };
    const clock = () => {
      try { this.setState({ localTime: new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Africa/Lusaka' }).format(new Date()) }); } catch (err) { /* ignore */ }
    };
    clock();
    this.clockTimer = setInterval(clock, 30000);
    if (!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      this.wordTimer = setInterval(() => this.setState({ wordIdx: ((this.state.wordIdx || 0) + 1) % 4, wordTick: (this.state.wordTick || 0) + 1 }), 2800);
    }
    window.addEventListener('scroll', this.onScroll, true);
    window.addEventListener('resize', this.onScroll);
    setTimeout(this.onScroll, 50);
    this.revealFallback = setTimeout(() => { const all = { work: true, play: true, about: true, experience: true, contact: true }; this.setState({ seen: all }); this.startScramble(all); }, 20000);
    setTimeout(() => {
      let t = 0;
      this.countTimer = setInterval(() => {
        t += 1;
        this.setState({ statA: Math.round(4 * t / 20), statB: Math.round(3 * t / 20), statC: Math.round(47 * t / 20), statD: Math.round(2 * t / 20) });
        if (t >= 20) clearInterval(this.countTimer);
      }, 50);
    }, 1200);
    const total = this.log().length;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) { this.setState({ chars: total }); return; }
    this.startTimer = setTimeout(() => {
      this.typeTimer = setInterval(() => {
        const next = Math.min(total, (this.state.chars || 0) + 1);
        this.setState({ chars: next });
        if (next >= total) clearInterval(this.typeTimer);
      }, 30);
    }, 900);
  }
  componentWillUnmount() {
    clearInterval(this.clockTimer);
    clearInterval(this.scrTimer);
    cancelAnimationFrame(this.lenisRaf);
    if (this.onWheel) window.removeEventListener('wheel', this.onWheel);
    clearInterval(this.wordTimer);
    window.removeEventListener('scroll', this.onScroll, true);
    window.removeEventListener('resize', this.onScroll);
    clearInterval(this.countTimer);
    clearInterval(this.kmTimer);
    clearTimeout(this.startTimer);
    clearInterval(this.typeTimer);
    clearTimeout(this.copyTimer);
  }
  kmData(n, spread) {
    const N = n || this.state.kmN || 60, S = spread || this.state.kmSpread || 80;
    const pool = [[140, 100], [450, 90], [300, 260], [490, 270], [120, 270]].sort(() => Math.random() - 0.5).slice(0, 3);
    const g = () => (Math.random() + Math.random() + Math.random() - 1.5);
    const per = Math.round(N / 3), pts = [];
    pool.forEach(([cx, cy]) => { for (let i = 0; i < per; i++) pts.push({ x: Math.min(585, Math.max(15, cx + g() * S)), y: Math.min(345, Math.max(15, cy + g() * S * 0.78)), c: -1 }); });
    return { pts, cents: [] };
  }
  kmInterval(speed) { return 1300 - (speed || this.state.kmSpeed || 5) * 110; }
  kmInit() {
    const km = this.state.km || this.kmData();
    const k = this.state.k || 3;
    const pts = km.pts.map((p) => ({ x: p.x, y: p.y, c: -1 }));
    if (pts.length < k) return;
    const idx = [];
    while (idx.length < k) { const r = Math.floor(Math.random() * pts.length); if (idx.indexOf(r) < 0) idx.push(r); }
    this.setState({ km: { pts, cents: idx.map((i) => ({ x: pts[i].x, y: pts[i].y })) }, kmIter: 0, kmPhase: 'assign', kmStop: '' });
  }
  kmNeedsInit() {
    const st = this.state;
    return !st.km || !st.km.cents.length || st.kmPhase === 'done' || st.kmPhase === 'idle';
  }
  kmPlay() {
    clearInterval(this.kmTimer);
    if (this.kmNeedsInit()) this.kmInit();
    this.setState({ kmPlaying: true });
    this.kmTimer = setInterval(() => this.kmStep(), this.kmInterval());
  }
  kmPause() { clearInterval(this.kmTimer); this.setState({ kmPlaying: false }); }
  kmStepOnce() {
    clearInterval(this.kmTimer);
    this.setState({ kmPlaying: false });
    if (this.kmNeedsInit()) this.kmInit(); else this.kmStep();
  }
  kmStep() {
    const km = this.state.km; const phase = this.state.kmPhase;
    if (!km) return;
    if (phase === 'assign') {
      if ((this.state.kmIter || 0) >= (this.state.kmMax || 20)) { clearInterval(this.kmTimer); this.setState({ kmPhase: 'done', kmPlaying: false, kmStop: 'max' }); return; }
      const pts = km.pts.map((p) => {
        let best = 0, bd = Infinity;
        km.cents.forEach((c, i) => { const d = (p.x - c.x) ** 2 + (p.y - c.y) ** 2; if (d < bd) { bd = d; best = i; } });
        return { x: p.x, y: p.y, c: best };
      });
      this.setState({ km: { pts, cents: km.cents }, kmPhase: 'update', kmIter: (this.state.kmIter || 0) + 1 });
    } else if (phase === 'update') {
      let moved = 0;
      const cents = km.cents.map((c, i) => {
        const mine = km.pts.filter((p) => p.c === i);
        if (!mine.length) return c;
        const nx = mine.reduce((a, p) => a + p.x, 0) / mine.length, ny = mine.reduce((a, p) => a + p.y, 0) / mine.length;
        moved += Math.hypot(nx - c.x, ny - c.y);
        return { x: nx, y: ny };
      });
      if (moved < 0.5) { clearInterval(this.kmTimer); this.setState({ kmPhase: 'done', kmPlaying: false, kmStop: 'conv' }); }
      else this.setState({ km: { pts: km.pts, cents }, kmPhase: 'assign' });
    }
  }
  kmAdd(x, y) {
    clearInterval(this.kmTimer);
    const km = this.state.km || this.kmData();
    this.setState({ km: { pts: km.pts.map((p) => ({ x: p.x, y: p.y, c: -1 })).concat([{ x, y, c: -1 }]), cents: [] }, kmPhase: 'idle', kmIter: 0, kmPlaying: false, kmStop: '' });
  }
  kmRegen(patch) {
    clearInterval(this.kmTimer);
    const n = patch.kmN || this.state.kmN, sp = patch.kmSpread || this.state.kmSpread;
    this.setState(Object.assign({}, patch, { km: this.kmData(n, sp), kmPhase: 'idle', kmIter: 0, kmPlaying: false, kmStop: '' }));
  }
  startScramble(seen) {
    const scr = Object.assign({}, this.state.scr || {});
    const now = Date.now();
    let added = false;
    Object.keys(seen).forEach((k) => { if (seen[k] && !scr[k]) { scr[k] = now; added = true; } });
    if (!added) return;
    this.setState({ scr });
    if (this.scrTimer) return;
    this.scrTimer = setInterval(() => {
      const s2 = this.state.scr || {};
      const active = Object.keys(s2).some((k) => Date.now() - s2[k] < 1100);
      this.setState({ scrTick: (this.state.scrTick || 0) + 1 });
      if (!active) { clearInterval(this.scrTimer); this.scrTimer = 0; }
    }, 45);
  }
  scrambled(key, text) {
    const start = (this.state.scr || {})[key];
    if (!start) return text.replace(/[^ —]/g, '·');
    const t = Math.min(1, (Date.now() - start) / 1000);
    if (t >= 1) return text;
    const glyphs = '!<>-_/[]{}=+*^?#01ABCDEFX';
    const reveal = Math.floor(t * text.length);
    let out = '';
    for (let i = 0; i < text.length; i++) {
      const ch = text[i];
      out += (i < reveal || ch === ' ' || ch === '—') ? ch : glyphs[Math.floor(Math.random() * glyphs.length)];
    }
    return out;
  }
  setupSmoothScroll() {
    const mm = window.matchMedia;
    if (!mm || mm('(prefers-reduced-motion: reduce)').matches || !mm('(pointer: fine)').matches) return;
    this.cur = window.scrollY; this.target = window.scrollY; this.anim = false;
    const loop = () => {
      this.cur += (this.target - this.cur) * 0.1;
      if (Math.abs(this.target - this.cur) < 0.5) { this.cur = this.target; this.anim = false; }
      window.scrollTo({ top: this.cur, behavior: 'instant' });
      if (this.anim) this.lenisRaf = requestAnimationFrame(loop);
    };
    this.onWheel = (e) => {
      if (e.ctrlKey || e.defaultPrevented) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 2) return;
      let el = e.target;
      while (el && el !== document.body && el !== document.documentElement) {
        if (el.scrollHeight > el.clientHeight + 2) { const oy = getComputedStyle(el).overflowY; if (oy === 'auto' || oy === 'scroll') return; }
        el = el.parentElement;
      }
      e.preventDefault();
      if (!this.anim) { this.cur = window.scrollY; this.target = window.scrollY; }
      const dy = e.deltaY * (e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? window.innerHeight : 1);
      this.target = Math.max(0, Math.min(max, this.target + dy));
      if (!this.anim) { this.anim = true; this.lenisRaf = requestAnimationFrame(loop); }
    };
    window.addEventListener('wheel', this.onWheel, { passive: false });
  }
  fpData() { return {"months":["2022-12","2023-01","2023-02","2023-03","2023-04","2023-05","2023-06","2023-07","2023-08","2023-09","2023-10","2023-11","2023-12","2024-01","2024-02","2024-03","2024-04","2024-05","2024-06","2024-07","2024-08","2024-09","2024-10","2024-11","2024-12","2025-01","2025-02","2025-03","2025-04","2025-05","2025-06","2025-07","2025-08","2025-09","2025-10","2025-11","2025-12","2026-01","2026-02","2026-03","2026-04","2026-05","2026-06","2026-07","2026-08","2026-09","2026-10"],"products":{"bmm":{"name":"Breakfast mealie meal","unit":"25 kg bag","prices":[171.72,181.46,196.84,193.0,202.87,201.72,204.06,226.37,246.55,269.73,288.46,288.94,286.31,292.09,310.97,322.37,325.56,328.84,331.23,334.48,333.28,334.11,341.11,338.7,342.16,356.52,360.45,364.37,358.86,344.41,307.78,275.39,260.59,260.34,262.56,273.26,286.7,300.15,302.21,300.98,296.1,289.12,272.66,252.13,243.96,236.34,235.86],"districts":[{"m":"2023-12","min":230.0,"minD":"Monze","max":350,"maxD":"Nakonde","gap":1.52,"nat":286.31},{"m":"2024-06","min":230.0,"minD":"Chibombo","max":400,"maxD":"Chiengi","gap":1.74,"nat":331.23},{"m":"2024-07","min":230.0,"minD":"Chibombo","max":400,"maxD":"Chilubi","gap":1.74,"nat":334.48},{"m":"2024-08","min":230.0,"minD":"Mpulungu, Kalabo","max":400,"maxD":"Chienge, Chilubi","gap":1.74,"nat":333.28},{"m":"2024-10","min":250.0,"minD":"Mpika","max":400,"maxD":"Chiengi","gap":1.6,"nat":341.11},{"m":"2025-07","min":190.0,"minD":"Lusaka","max":400,"maxD":"Chilubi","gap":2.11,"nat":275.39},{"m":"2025-10","min":200.0,"minD":"Kitwe","max":380,"maxD":"Chiengi","gap":1.9,"nat":262.56},{"m":"2026-01","min":268.5,"minD":"Lusaka","max":420,"maxD":"Chilubi","gap":1.56,"nat":300.15},{"m":"2026-04","min":235.0,"minD":"Kabwe","max":400,"maxD":"Chilubi","gap":1.7,"nat":296.1},{"m":"2026-10","min":180.0,"minD":"Mkushi","max":390,"maxD":"Chilubi","gap":2.17,"nat":235.86}]},"rmm":{"name":"Roller mealie meal","unit":"25 kg bag","prices":[138.85,148.19,162.78,160.21,166.82,163.66,165.59,184.8,204.35,224.84,238.29,240.14,239.53,244.44,263.44,273.91,278.97,281.47,284.35,289.82,290.98,291.49,293.22,291.84,293.47,306.52,307.06,306.36,294.19,285.24,259.04,222.02,202.74,203.52,206.36,216.08,225.97,239.64,247.56,246.21,245.97,236.4,222.19,202.28,192.11,182.19,181.99],"districts":[{"m":"2023-12","min":190.0,"minD":"Monze","max":300,"maxD":"Lukulu","gap":1.58,"nat":239.53},{"m":"2024-06","min":195.0,"minD":"Mkushi","max":370,"maxD":"Chilubi","gap":1.9,"nat":284.35},{"m":"2024-07","min":195.0,"minD":"Chisamba","max":385,"maxD":"Chilubi","gap":1.97,"nat":289.82},{"m":"2024-08","min":190.0,"minD":"Kalabo","max":360,"maxD":"Shangombo","gap":1.89,"nat":290.98},{"m":"2024-10","min":230.0,"minD":"Kasama","max":395,"maxD":"Shangombo","gap":1.72,"nat":293.22},{"m":"2025-07","min":160.0,"minD":"Lusaka","max":355,"maxD":"Kaoma","gap":2.22,"nat":222.02},{"m":"2025-10","min":150.0,"minD":"Mwense","max":300,"maxD":"Mushindano","gap":2.0,"nat":206.36},{"m":"2026-01","min":165.0,"minD":"Kabwe","max":380,"maxD":"Chilubi","gap":2.3,"nat":239.64},{"m":"2026-04","min":165.0,"minD":"Kabwe","max":360,"maxD":"Chilubi","gap":2.18,"nat":245.97},{"m":"2026-10","min":130.0,"minD":"Kabwe","max":245,"maxD":"Lukulu","gap":1.88,"nat":181.99}]},"mg":{"name":"Maize grain","unit":"20 litre tin","prices":[87.75,93.44,97.78,108.6,109.84,101.16,99.1,105.15,108.66,120.28,134.83,138.13,145.99,159.84,172.82,186.15,180.98,179.16,171.56,176.2,168.86,168.31,170.94,174.33,185.45,191.91,228.76,211.29,182.93,142.1,119.25,113.86,111.59,119.66,121.38,129.66,138.85,145.96,158.44,157.82,149.94,126.66,110.8,99.83,97.38,101.67,106.98],"districts":[{"m":"2023-12","min":90.0,"minD":"Monze","max":200,"maxD":"Kaputa","gap":2.22,"nat":145.99},{"m":"2024-06","min":100.0,"minD":"Mungwi","max":240,"maxD":"Shangombo","gap":2.4,"nat":171.56},{"m":"2024-07","min":100.0,"minD":"Mungwi","max":240,"maxD":"Kazungula","gap":2.4,"nat":176.2},{"m":"2024-08","min":100.0,"minD":"Mfuwe, Isoka","max":260,"maxD":"Zambezi","gap":2.6,"nat":168.86},{"m":"2024-10","min":100.0,"minD":"Mafinga","max":240,"maxD":"Zambezi","gap":2.4,"nat":170.94},{"m":"2025-07","min":80.0,"minD":"Chibombo","max":200,"maxD":"Kazungula","gap":2.5,"nat":113.86},{"m":"2025-10","min":80.0,"minD":"Mbala, Lukulu, Mazabuka, Mongu","max":210,"maxD":"Mambwe","gap":2.62,"nat":121.38},{"m":"2026-01","min":90.0,"minD":"Kasempa","max":240,"maxD":"Mambwe","gap":2.67,"nat":145.96},{"m":"2026-04","min":100.0,"minD":"Katete","max":240,"maxD":"Chilubi","gap":2.4,"nat":149.94},{"m":"2026-10","min":60.0,"minD":"Kasempa","max":160,"maxD":"Lusaka","gap":2.67,"nat":106.98}]}}}; }
  scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  runCommand(raw) {
    const c = raw.trim().toLowerCase();
    const P = '#8FD3B2', T = '#F5F3ED', M = '#A9B0AA';
    let out = [{ text: '$ ' + raw, color: P }];
    let after = null, open = null;
    if (!c) out = [];
    else if (c === 'help' || c === 'ls') out.push(
      { text: 'projects   my work, one line each', color: T },
      { text: 'kwacha     open pay calculator', color: T },
      { text: 'prices     food price explorer', color: T },
      { text: 'skills     what I work with', color: T },
      { text: 'email      write to me', color: T },
      { text: 'github     my code', color: T },
      { text: 'linkedin   my profile', color: T },
      { text: 'contact    jump to contact', color: T },
      { text: 'clear      clear the screen', color: M });
    else if (c === 'whoami') out.push({ text: 'Roy Kamwanza. Software developer in Lusaka, Zambia: AI, ML and data.', color: T });
    else if (c === 'projects' || c === 'ls projects') { out.push(
      { text: 'kwacha-net       live', color: T }, { text: '  pay calculator + AI', color: M },
      { text: 'zsl-recognition  in progress', color: T }, { text: '  sign language, webcam', color: M },
      { text: 'food-prices      live below', color: T }, { text: '  4 years of ZamStats data', color: M },
      { text: 'jumping to work…', color: M }); after = 'work'; }
    else if (c === 'kwacha' || c === 'open kwacha' || c === 'kwacha-net') { out.push({ text: 'opening kwacha-net…', color: M }); open = 'https://kwacha-net.vercel.app'; }
    else if (c === 'prices' || c === 'food' || c === 'food-prices') { out.push({ text: 'jumping to the price explorer…', color: M }); after = 'play'; }
    else if (c === 'skills' || c === 'stack') out.push({ text: 'build  javascript · html/css\n       node.js\nai     python · gemini api\n       computer vision\ndata   pandas · matplotlib\ntools  git · github · vercel', color: T });
    else if (c === 'email' || c === 'mail') { out.push({ text: 'opening your email app…', color: M }); open = 'mailto:roykamwanza955@gmail.com?subject=Hello%20Roy'; }
    else if (c === 'github') { out.push({ text: 'opening github.com/roykamwanza…', color: M }); open = 'https://github.com/roykamwanza'; }
    else if (c === 'linkedin') { out.push({ text: 'opening LinkedIn…', color: M }); open = 'https://www.linkedin.com/in/roy-kamwanza-0550b5244/'; }
    else if (c === 'contact') { out.push({ text: 'opening contact…', color: M }); after = 'contact'; }
    else if (c === 'sudo hire roy' || c === 'hire roy') { out.push({ text: '[sudo] password for recruiter: ••••••••', color: M }, { text: 'access granted. excellent decision.', color: P }, { text: 'opening contact…', color: M }); after = 'contact'; }
    else if (c === 'clear') { this.setState({ history: [], cmd: '' }); return; }
    else out.push({ text: 'command not found: ' + c + '. try help', color: '#F0A8A0' });
    this.setState({ history: (this.state.history || []).concat(out).slice(-40), cmd: '' }, () => {
      const body = document.getElementById('rk-term-body');
      if (body) body.scrollTop = body.scrollHeight;
      if (after) setTimeout(() => this.scrollTo(after), 500);
      if (open) { if (open.indexOf('mailto:') === 0) window.location.href = open; else window.open(open, '_blank', 'noopener'); }
    });
  }
  renderVals() {
    const st = this.state || {};
    const accent = this.props.accent ?? '#287A59';
    const filter = st.filter || 'All';
    const all = [
      { isHand: false, isCar: false, isFilm: false, imgClass: 'rk-img', num: '01', year: '2026', stack: ['JavaScript', 'HTML & CSS', 'Node.js', 'Vercel', 'Gemini API'], imgFilter: 'none', imgFit: 'cover', target: '_blank', link: 'https://kwacha-net.vercel.app', linkText: 'Open the live app', hasLink2: false, link2: '', link2Text: '', tag: 'Web app & AI', kicker: 'Web app · AI', title: 'Kwacha Net', desc: 'A take-home pay calculator for Zambia. It works out PAYE, NAPSA and NHIMA band by band for 2026, finds the salary needed for a target take-home, and has a Gemini-powered assistant that explains each result.', role: 'Solo project: design, build, deploy', outcome: 'Live on Vercel', img: 'assets/pay-calculator.png', alt: 'Kwacha Net pay calculator showing a K10,000 salary and K8,074 take-home pay' },
      { isHand: true, isCar: false, isFilm: false, imgClass: 'rk-img', num: '02', target: '', year: '2025–26', stack: ['Python', 'Computer vision', 'Real-time'], imgFilter: 'saturate(.75) sepia(.1)', imgFit: 'cover', link: '#work', linkText: 'Case study coming soon', hasLink2: false, link2: '', link2Text: '', tag: 'Computer Vision & AI', kicker: 'Computer vision · Accessibility', title: 'Zambian Sign Language Recognition', desc: 'Real-time recognition of ZSL from a webcam, so deaf and hearing people can talk without an interpreter.', role: '[Sole engineer: data, model, app]', outcome: '[e.g. accuracy on N signs]', img: 'assets/sign-language.jpg', alt: 'Sign language recognition demo' },
      { isHand: false, isCar: false, isFilm: false, imgClass: 'rk-img', num: '03', target: '', year: '2026', stack: ['Python', 'pandas', 'matplotlib', 'Data cleaning'], imgFilter: 'none', imgFit: 'contain', link: '#play', linkText: 'Explore it live', hasLink2: true, link2: 'https://github.com/roykamwanza/zambia-food-prices', link2Text: 'View on GitHub', tag: 'Data analysis', kicker: 'Data analysis · Python', title: 'Zambia’s Staple Food Prices', desc: 'Four years of official ZamStats prices for mealie meal and maize, gathered from 10 government bulletins. Prices more than doubled in the drought, then fell back to mid-2023 levels.', role: 'Solo project: data, analysis, charts', outcome: '47 months of prices, cross-checked', img: 'assets/food-prices-chart.png', alt: 'Bar chart comparing food prices in December 2022, at their peak, and in October 2026' },
    ];
    const list0 = filter === 'All' ? all : all.filter((p) => p.tag === filter);
    const tilts = st.cardTilt || {}, fxOn = st.fxOn || {};
    const list = list0.map((p, i) => {
      const t = tilts[p.title];
      const on = !!fxOn[p.title];
      return Object.assign({}, p, {
        i: i + 2,
        tilt: t ? 'perspective(1000px) rotateX(' + (-t.y * 7).toFixed(2) + 'deg) rotateY(' + (t.x * 9).toFixed(2) + 'deg) translateZ(10px)' : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
        onMove: (e) => {
          if (window.matchMedia && (window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(hover: none)').matches)) return;
          const r = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
          if (this.cardRaf) return;
          this.cardRaf = requestAnimationFrame(() => { this.cardRaf = 0; const ct = {}; ct[p.title] = { x, y }; this.setState({ cardTilt: ct }); });
        },
        onLeave: () => this.setState({ cardTilt: {} }),
        fxClass: on ? 'rk-fx-on' : '',
        fxLabel: on ? 'on' : 'off',
        fxPressed: on ? 'true' : 'false',
        fxDot: on ? '#8FD3B2' : '#5C635E',
        toggleFx: (e) => { e.stopPropagation(); const f = Object.assign({}, this.state.fxOn); f[p.title] = !f[p.title]; this.setState({ fxOn: f }); }
      });
    });
    const filters = ['All', 'Computer Vision & AI', 'Mobile & Web Data Apps'].map((label) => {
      const on = label === filter;
      return { label, pressed: on ? 'true' : 'false', bg: on ? '#202522' : 'transparent', fg: on ? '#F5F3ED' : '#202522', border: on ? '#202522' : '#CFC9BB', pick: () => this.setState({ filter: label }) };
    });
    const invalid = !!st.error;
    return {
      accent, filters,

      ...(() => {
        const FP = this.fpData();
        const key = st.fpProduct || 'bmm';
        const view = st.fpView || 'time';
        const P = FP.products[key];
        const colors = { bmm: '#287A59', rmm: '#C2410C', mg: '#A47E1B' };
        const color = colors[key];
        const prices = P.prices, n = prices.length, months = FP.months;
        const fmtM = (m) => { const [y, mo] = m.split('-'); return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][Number(mo) - 1] + ' ' + y; };
        const K = (v) => 'K' + Math.round(v).toLocaleString('en-GB');
        const fmtLong = (m) => { const [y, mo] = m.split('-'); return ['January','February','March','April','May','June','July','August','September','October','November','December'][Number(mo) - 1] + ' ' + y; };
        let pk = 0; prices.forEach((v, i) => { if (v > prices[pk]) pk = i; });
        const first = prices[0], last = prices[n - 1], peak = prices[pk];
        const lo = Math.floor(Math.min(...prices) * 0.85 / 50) * 50, hi = Math.ceil(peak * 1.12 / 50) * 50;
        const step = hi - lo > 250 ? 100 : 50;
        const X = (i) => i / (n - 1) * 1000, Y = (v) => (1 - (v - lo) / (hi - lo)) * 400;
        const line = prices.map((v, i) => (i ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1)).join(' ');
        const area = line + ' L1000 400 L0 400 Z';
        const grid = [];
        for (let v = lo; v <= hi; v += step) grid.push({ top: ((1 - (v - lo) / (hi - lo)) * 100).toFixed(2) + '%', label: K(v) });
        const xt = []; months.forEach((m, i) => { if (m.endsWith('-01')) xt.push({ left: (i / (n - 1) * 100).toFixed(2) + '%', label: 'Jan ' + m.slice(0, 4) }); });
        const hv = (st.fpHover ?? -1);
        const hasHover = view === 'time' && hv >= 0 && hv < n;
        const leftPct = (i) => (i / (n - 1) * 100);
        const topPct = (v) => ((1 - (v - lo) / (hi - lo)) * 100);
        const setHover = (i) => this.setState({ fpHover: Math.max(0, Math.min(n - 1, i)) });
        // years
        const ys = {}; months.forEach((m, i) => { const y = m.slice(0, 4); if (y === '2022') return; (ys[y] = ys[y] || []).push(prices[i]); });
        const yAvg = Object.keys(ys).sort().map((y) => ({ y, v: ys[y].reduce((a, b) => a + b, 0) / ys[y].length }));
        const yMax = Math.max(...yAvg.map((d) => d.v));
        const yColors = { '2023': '#C9CDC9', '2024': '#C2410C', '2025': '#202522', '2026': '#287A59' };
        const topYear = yAvg.reduce((a, b) => (b.v > a.v ? b : a));
        // districts
        const D = P.districts;
        const dLo = Math.min(...D.map((d) => d.min)) * 0.9, dHi = Math.max(...D.map((d) => d.max)) * 1.04;
        const dp = (v) => ((v - dLo) / (dHi - dLo) * 100);
        const maxGap = Math.max(...D.map((d) => d.gap));
        const names = { bmm: 'Breakfast mealie meal', rmm: 'Roller mealie meal', mg: 'Maize grain' };
        const insight = view === 'year'
          ? topYear.y + ' was the most expensive year on average for ' + P.name.toLowerCase() + ', at ' + K(topYear.v) + ', even though the single highest price came in ' + months[pk].slice(0, 4) + '.'
          : view === 'district'
          ? 'In the most expensive district, ' + P.name.toLowerCase() + ' cost up to ' + maxGap.toFixed(1) + ' times as much as in the cheapest district.'
          : P.name + ' rose from ' + K(first) + ' in December 2022 to ' + K(peak) + ' in ' + fmtLong(months[pk]) + ', then fell to ' + K(last) + ' by October 2026.';
        return {
          fpProducts: Object.keys(names).map((k) => { const on = k === key; return { label: names[k], pressed: on ? 'true' : 'false', bg: on ? '#202522' : '#FBFAF6', fg: on ? '#F5F3ED' : '#202522', border: on ? '#202522' : '#CFC9BB', dot: colors[k], pick: () => this.setState({ fpProduct: k, fpHover: -1 }) }; }),
          fpViews: [['time', 'Over time'], ['year', 'By year'], ['district', 'By district']].map(([k, label]) => { const on = k === view; return { label, selected: on ? 'true' : 'false', bg: on ? '#FBFAF6' : 'transparent', fg: on ? '#202522' : '#5C635E', shadow: on ? '0 2px 6px -2px rgba(32,37,34,.25)' : 'none', pick: () => this.setState({ fpView: k, fpHover: -1 }) }; }),
          fpStats: [
            { label: 'December 2022', value: K(first), note: 'Start of the data', color: '#202522' },
            { label: 'Highest price', value: K(peak), note: fmtM(months[pk]), color: '#C2410C' },
            { label: 'October 2026', value: K(last), note: 'Latest price', color: '#1F5A41' },
            { label: 'Since the peak', value: Math.round((last / peak - 1) * 100) + '%', note: 'Still ' + Math.round((last / first - 1) * 100) + '% above Dec 2022', color: '#202522' }
          ],
          fpTitle: P.name, fpUnit: 'National average price per ' + P.unit,
          fpInsight: insight, fpColor: color,
          fpIsTime: view === 'time', fpIsYear: view === 'year', fpIsDistrict: view === 'district',
          fpLine: line, fpArea: area, fpGrid: grid, fpXTicks: xt,
          fpAria: P.name + ' price chart. ' + insight,
          fpPeakLeft: leftPct(pk).toFixed(2) + '%', fpPeakTop: topPct(peak).toFixed(2) + '%',
          fpPeakShift: leftPct(pk) > 50 ? 'translate(calc(-100% - 10px), -24px)' : 'translate(10px, -24px)',
          fpPeakLabel: 'Peak ' + K(peak) + ' · ' + fmtM(months[pk]),
          fpHasHover: hasHover,
          fpHoverLeft: hasHover ? leftPct(hv).toFixed(2) + '%' : '0%',
          fpHoverTop: hasHover ? topPct(prices[hv]).toFixed(2) + '%' : '0%',
          fpTipShift: hasHover && leftPct(hv) > 72 ? 'translate(calc(-100% - 12px), 0)' : 'translate(12px, 0)',
          fpHoverMonth: hasHover ? fmtM(months[hv]) : '',
          fpHoverPrice: hasHover ? 'K' + prices[hv].toFixed(2) : '',
          fpMove: (e) => { const r = e.currentTarget.getBoundingClientRect(); setHover(Math.round((e.clientX - r.left) / r.width * (n - 1))); },
          fpLeave: () => this.setState({ fpHover: -1 }),
          fpKey: (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') { e.preventDefault(); const cur = hv < 0 ? (e.key === 'ArrowRight' ? -1 : n) : hv; setHover(cur + (e.key === 'ArrowRight' ? 1 : -1)); }
            else if (e.key === 'Escape') this.setState({ fpHover: -1 });
          },
          fpYears: yAvg.map((d) => ({ label: d.y + (d.y === '2026' ? '*' : ''), value: K(d.v), height: (d.v / yMax * 78).toFixed(1) + '%', color: yColors[d.y] })),
          fpDistricts: D.map((d) => ({
            month: fmtM(d.m), minLeft: dp(d.min).toFixed(2) + '%', maxLeft: dp(d.max).toFixed(2) + '%', natLeft: dp(d.nat).toFixed(2) + '%',
            width: (dp(d.max) - dp(d.min)).toFixed(2) + '%',
            text: 'Cheapest: ' + (String(d.minD).split(',').length > 2 ? String(d.minD).split(',')[0] + ' + ' + (String(d.minD).split(',').length - 1) + ' more' : d.minD) + ' ' + K(d.min) + ' · Average ' + K(d.nat) + ' · Most expensive: ' + d.maxD + ' ' + K(d.max) + ' (' + d.gap.toFixed(1) + '×)'
          }))
        };
      })(),
      projects: list,
      featured: list.slice(0, 1),
      scr_work: this.scrambled('work', '01 — Selected work'),
      scr_play: this.scrambled('play', '02 — Live demo'),
      scr_about: this.scrambled('about', '03 — About'),
      scr_experience: this.scrambled('experience', '04 — Experience'),
      scr_contact: this.scrambled('contact', '05 — Contact'),
      word: ['AI products', 'data stories', 'web apps', 'smart tools'][st.wordIdx || 0],
      wordAnim: ((st.wordTick || 0) % 2 ? 'rk-wordA' : 'rk-wordB') + ' 600ms cubic-bezier(.2,.7,.2,1) both',
      underAnim: ((st.wordTick || 0) % 2 ? 'rk-underA' : 'rk-underB') + ' 900ms cubic-bezier(.6,0,.2,1) 150ms both',
      localTime: st.localTime ? st.localTime + ' local time' : 'local time',
      rv_work_cls: (st.seen || {}).work ? 'rk-seen' : 'rk-pre',
      rv_play_cls: (st.seen || {}).play ? 'rk-seen' : 'rk-pre',
      rv_about_cls: (st.seen || {}).about ? 'rk-seen' : 'rk-pre',
      rv_experience_cls: (st.seen || {}).experience ? 'rk-seen' : 'rk-pre',
      rv_writing_cls: (st.seen || {}).writing ? 'rk-seen' : 'rk-pre',
      rv_contact_cls: (st.seen || {}).contact ? 'rk-seen' : 'rk-pre',
      termTabs: [['log', 'roy.log'], ['arch', 'architecture'], ['pipe', 'pipeline'], ['stack', 'stack']].map(([id, label]) => {
        const on = (st.termTab || 'log') === id;
        return { label, selected: on ? 'true' : 'false', color: on ? '#F5F3ED' : '#A9B0AA', line: on ? '#8FD3B2' : 'transparent', pick: (e) => { e.stopPropagation(); this.setState({ termTab: id }); } };
      }),
      tabLog: (st.termTab || 'log') === 'log',
      tabOther: (st.termTab || 'log') !== 'log',
      tabText: ({
        arch: '# kwacha-net: how it works\n\nbrowser      calculator\n └▶ /api/chat  vercel · node\n   └▶ gemini   key on server\n     └▶ reply  explains pay\n\n$ kwacha   to open it',
        pipe: '# food-prices: pipeline\n\n10 ZamStats PDFs\n └▶ extract  47 months\n   └▶ clean    pandas\n     └▶ check  overlaps\n       └▶ ship  explorer\n\n$ prices   to explore it',
        stack: '# stack\n\nbuild   javascript\n        html/css · node.js\nai      python · gemini api\n        computer vision\ndata    pandas · matplotlib\ntools   git · github · vercel'
      })[st.termTab] || '',
      posts: [
        { meta: '[Date] · Computer vision', title: 'Teaching a model to read Zambian Sign Language', summary: 'What it took to collect sign data, train a model and get it recognising signs in real time, plus what I would do differently next time.' },
        { meta: '[Date] · Engineering', title: 'What a summer at a ride-hailing startup taught me about real-time apps', summary: 'Lessons from shipping features on a live ride-hailing platform: real-time updates, testing with real riders, and working inside a product team.' },
        { meta: '[Date] · AI products', title: 'Building a video ad generator: lessons from Edinova Studio', summary: 'How Edinova turns a short brief into a finished video ad, the trade-offs behind the pipeline, and what early users taught me.' }
      ].map((a, i) => {
        const open = st.openPost === i;
        return Object.assign({}, a, { i: i + 1, read: '[N] min read', panelId: 'rk-post-' + i, expanded: open ? 'true' : 'false', rows: open ? '1fr' : '0fr', op: open ? '1' : '0', chev: open ? 'rotate(180deg)' : 'rotate(0deg)', toggle: () => this.setState({ openPost: this.state.openPost === i ? -1 : i }) });
      }),
      rest: list.slice(1),
      typed: this.log().slice(0, st.chars || 0),
      tilt: 'rotateY(' + ((st.tx || 0) * 4).toFixed(2) + 'deg) rotateX(' + (-(st.ty || 0) * 3).toFixed(2) + 'deg)',
      circleShift: 'translate(' + ((st.tx || 0) * -10).toFixed(1) + 'px, ' + ((st.ty || 0) * -8).toFixed(1) + 'px)',
      ringShift: 'translate(' + ((st.tx || 0) * -18).toFixed(1) + 'px, ' + ((st.ty || 0) * -14).toFixed(1) + 'px)',
      personShift: 'translate(' + ((st.tx || 0) * 12).toFixed(1) + 'px, ' + ((st.ty || 0) * 6).toFixed(1) + 'px)',
      badgeShift: 'translate(' + ((st.tx || 0) * 22).toFixed(1) + 'px, ' + ((st.ty || 0) * 16).toFixed(1) + 'px)',
      badgeShift2: 'translate(' + ((st.tx || 0) * 30).toFixed(1) + 'px, ' + ((st.ty || 0) * 20).toFixed(1) + 'px)',
      onStageMove: (e) => {
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const r = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
        if (this.raf) return;
        this.raf = requestAnimationFrame(() => { this.raf = 0; this.setState({ tx: x, ty: y }); });
      },
      onStageLeave: () => this.setState({ tx: 0, ty: 0 }),
      statA: st.statA || 0,
      statB: st.statB || 0,
      statC: st.statC || 0,
      statD: st.statD || 0,
      progress: (st.progress || 0).toFixed(1),
      rv_work_o: (st.seen || {}).work ? '1' : '0', rv_work_t: (st.seen || {}).work ? 'none' : 'translateY(28px)',
      rv_play_o: (st.seen || {}).play ? '1' : '0', rv_play_t: (st.seen || {}).play ? 'none' : 'translateY(28px)',
      rv_about_o: (st.seen || {}).about ? '1' : '0', rv_about_t: (st.seen || {}).about ? 'none' : 'translateY(28px)',
      rv_writing_o: (st.seen || {}).writing ? '1' : '0', rv_writing_t: (st.seen || {}).writing ? 'none' : 'translateY(28px)',
      rv_contact_o: (st.seen || {}).contact ? '1' : '0', rv_contact_t: (st.seen || {}).contact ? 'none' : 'translateY(28px)',
      kOptions: [2, 3, 4].map((n) => { const on = n === (st.k || 3); return { label: String(n), pressed: on ? 'true' : 'false', bg: on ? '#202522' : 'transparent', fg: on ? '#F5F3ED' : '#202522', border: on ? '#202522' : '#CFC9BB', pick: () => { clearInterval(this.kmTimer); const km = st.km || this.kmData(); this.setState({ k: n, kmPhase: 'idle', kmIter: 0, kmPlaying: false, kmStop: '', km: { pts: km.pts.map((p) => ({ x: p.x, y: p.y, c: -1 })), cents: [] } }); } }; }),
      kmPoints: ((st.km && st.km.pts) || []).map((p) => ({ left: (p.x / 6).toFixed(2) + '%', top: (p.y / 3.6).toFixed(2) + '%', fill: p.c < 0 ? '#A39C8C' : ['#287A59', '#C2410C', '#202522', '#A47E1B'][p.c] })),
      kmCents: ((st.km && st.km.cents) || []).map((c, i) => ({ left: (c.x / 6).toFixed(2) + '%', top: (c.y / 3.6).toFixed(2) + '%', fill: ['#287A59', '#C2410C', '#202522', '#A47E1B'][i] })),
      kmLines: ((st.km && st.km.pts) || []).filter((p) => p.c >= 0 && st.km.cents[p.c]).map((p) => ({ x1: p.x.toFixed(1), y1: p.y.toFixed(1), x2: st.km.cents[p.c].x.toFixed(1), y2: st.km.cents[p.c].y.toFixed(1), color: ['#287A59', '#C2410C', '#202522', '#A47E1B'][p.c] })),
      kmStatus: st.kmPhase === 'done' ? (st.kmStop === 'max' ? '■ Stopped at the ' + (st.kmMax || 20) + '-iteration limit. Raise it or press Play again.' : '✓ Converged in ' + st.kmIter + ' iterations. Add points or change a setting to try again.') : (st.kmPhase === 'assign' || st.kmPhase === 'update') ? (!st.kmIter ? 'Placed ' + (st.k || 3) + ' random centres. ' + (st.kmPlaying ? 'Watch them move…' : 'Press Step to continue.') : 'Iteration ' + st.kmIter + ': ' + (st.kmPhase === 'update' ? 'each point joined its nearest centre' : 'centres moved to the middle of their group')) : ((st.km && st.km.pts.length) || 0) + ' points ready. Press Play, or Step through it.',
      kmPlaying: !!st.kmPlaying,
      kmNotPlaying: !st.kmPlaying,
      kmPlayLabel: st.kmPlaying ? 'Pause' : 'Play',
      kmPlayToggle: () => (this.state.kmPlaying ? this.kmPause() : this.kmPlay()),
      kmStepBtn: () => this.kmStepOnce(),
      kmN: st.kmN || 60,
      kmSpread: st.kmSpread || 80,
      kmSpreadLabel: (st.kmSpread || 80) <= 70 ? 'tight' : (st.kmSpread || 80) <= 110 ? 'medium' : 'loose',
      kmSpeed: st.kmSpeed || 5,
      kmMax: st.kmMax || 20,
      onKmN: (e) => this.kmRegen({ kmN: Number(e.target.value) }),
      onKmSpread: (e) => this.kmRegen({ kmSpread: Number(e.target.value) }),
      onKmSpeed: (e) => { const v = Number(e.target.value); this.setState({ kmSpeed: v }); if (this.state.kmPlaying) { clearInterval(this.kmTimer); this.kmTimer = setInterval(() => this.kmStep(), this.kmInterval(v)); } },
      onKmMax: (e) => this.setState({ kmMax: Number(e.target.value) }),
      kmNew: () => this.kmRegen({}),
      kmAddRandom: () => this.kmAdd(30 + Math.random() * 540, 30 + Math.random() * 300),
      kmClick: (e) => { const r = e.currentTarget.getBoundingClientRect(); this.kmAdd((e.clientX - r.left) / r.width * 600, (e.clientY - r.top) / r.height * 360); },
      typing: (st.chars || 0) < this.log().length,
      ready: (st.chars || 0) >= this.log().length,
      history: (st.history || []).length ? st.history : ((st.chars || 0) < this.log().length ? [] : [{ text: "\ntype help, or try: projects · kwacha · email", color: '#A9B0AA' }]),
      cmd: st.cmd || '',
      onCmd: (e) => this.setState({ cmd: e.target.value }),
      onCmdKey: (e) => { if (e.key === 'Enter') { e.preventDefault(); this.runCommand(e.target.value || ''); } },
      focusTerm: () => { const i = document.getElementById('rk-term-input'); if (i) i.focus({ preventScroll: true }); },
      copied: !!st.copied,
      copyMsg: st.copyMsg || '',
      copyEmail: () => {
        const email = 'roykamwanza955@gmail.com';
        const done = (msg) => {
          clearTimeout(this.copyTimer);
          this.setState({ copied: (st.copied || 0) + 1, copyMsg: msg });
          this.copyTimer = setTimeout(() => this.setState({ copied: 0 }), 1800);
        };
        try {
          navigator.clipboard.writeText(email).then(() => done('Copied!'), () => done('Couldn’t copy, press and hold to copy'));
        } catch (err) { done('Couldn’t copy, press and hold to copy'); }
      },
      menuOpen: !!st.menu,
      menuClosed: !st.menu,
      menuExpanded: st.menu ? 'true' : 'false',
      toggleMenu: () => this.setState({ menu: !st.menu }),
      closeMenu: () => this.setState({ menu: false }),
      email: st.email || '',
      error: st.error || '',
      invalid: invalid ? 'true' : 'false',
      inputBorder: invalid ? '#B42318' : '#CFC9BB',
      shake: invalid ? ((st.tries % 2 ? 'sl-shakeA' : 'sl-shakeB') + ' 420ms ease, sl-flash 600ms ease-out') : 'none',
      subscribed: !!st.subscribed,
      notSubscribed: !st.subscribed,
      onEmail: (e) => this.setState({ email: e.target.value, error: '' }),
      subscribe: () => {
        const v = (st.email || '').trim();
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) this.setState({ subscribed: true, error: '' });
        else this.setState({ error: v ? 'That email doesn’t look right. Check it and try again.' : 'Enter your email address to subscribe.', tries: (st.tries || 0) + 1 });
      }
    };
  }
}

render(html`<${Component} />`, document.getElementById("app"));
})();
