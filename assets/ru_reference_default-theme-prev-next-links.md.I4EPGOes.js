import{_ as s,c as a,o as i,ab as e}from"./chunks/framework.B0HOCPjW.js";const u=JSON.parse('{"title":"Предыдущая и следующая страницы","description":"","frontmatter":{},"headers":[],"relativePath":"ru/reference/default-theme-prev-next-links.md","filePath":"ru/reference/default-theme-prev-next-links.md","lastUpdated":1728027062000}'),n={name:"ru/reference/default-theme-prev-next-links.md"},t=e(`<h1 id="prev-next-links" tabindex="-1">Предыдущая и следующая страницы <a class="header-anchor" href="#prev-next-links" aria-label="Permalink to &quot;Предыдущая и следующая страницы {#prev-next-links}&quot;">​</a></h1><p>Вы можете настроить текст и ссылку для предыдущей и следующей страниц (отображаются в нижней части страницы). Это полезно, если вы хотите, чтобы текст отличался от того, что находится в сайдбаре. Кроме того, вы можете счесть полезным отключить подвал или ссылку на страницу, которая не включена в сайдбар.</p><h2 id="prev" tabindex="-1">prev <a class="header-anchor" href="#prev" aria-label="Permalink to &quot;prev {#prev}&quot;">​</a></h2><ul><li><p>Тип: <code>string | false | { text?: string; link?: string }</code></p></li><li><p>Подробности:</p><p>Указывает текст/ссылку, который должен отображаться при переходе на предыдущую страницу. Если вы не зададите это в метаданных, текст/ссылка будет определяться из конфигурации сайдбара.</p></li><li><p>Примеры:</p><ul><li><p>Для настройки только текста:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Начать | Markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li><li><p>Для настройки текста и ссылки:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/guide/markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li><li><p>Для скрытия предыдущей страницы:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li></ul></li></ul><h2 id="next" tabindex="-1">next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next {#next}&quot;">​</a></h2><p>Аналогично параметру <code>prev</code>, но для следующей страницы.</p>`,6),l=[t];function p(h,r,k,d,c,o){return i(),a("div",null,l)}const v=s(n,[["render",p]]);export{u as __pageData,v as default};
