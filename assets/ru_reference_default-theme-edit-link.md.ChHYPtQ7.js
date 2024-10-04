import{_ as s,c as i,o as a,ab as n}from"./chunks/framework.B0HOCPjW.js";const g=JSON.parse('{"title":"Ссылка для редактирования","description":"","frontmatter":{},"headers":[],"relativePath":"ru/reference/default-theme-edit-link.md","filePath":"ru/reference/default-theme-edit-link.md","lastUpdated":1728027062000}'),t={name:"ru/reference/default-theme-edit-link.md"},e=n(`<h1 id="edit-link" tabindex="-1">Ссылка для редактирования <a class="header-anchor" href="#edit-link" aria-label="Permalink to &quot;Ссылка для редактирования {#edit-link}&quot;">​</a></h1><h2 id="site-level-config" tabindex="-1">Настройка в файле конфигурации <a class="header-anchor" href="#site-level-config" aria-label="Permalink to &quot;Настройка в файле конфигурации {#site-level-config}&quot;">​</a></h2><p>Ссылка на редактирование позволяет отобразить ссылку для редактирования страницы на сервисах управления Git, таких как GitHub или GitLab. Чтобы включить её, добавьте опции <code>themeConfig.editLink</code> в свой конфиг:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    editLink: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pattern: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Параметр <code>pattern</code> задает структуру URL для ссылки, а <code>:path</code> будет заменён на путь к странице.</p><p>Вы также можете поместить чистую функцию, которая принимает <a href="./runtime-api#usedata"><code>PageData</code></a> в качестве аргумента и возвращает строку URL.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    editLink: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      pattern</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: ({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">filePath</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (filePath.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">startsWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;packages/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`https://github.com/acme/monorepo/edit/main/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filePath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">          return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`https://github.com/acme/monorepo/edit/main/docs/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filePath</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Она не должна иметь побочных эффектов или доступа к чему-либо за пределами своей области, поскольку будет сериализована и выполнена в браузере.</p><p>По умолчанию это добавит текст ссылки «Редактировать страницу» в нижней части документа. Вы можете настроить этот текст, определив опцию <code>text</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    editLink: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      pattern: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      text: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Редактировать эту страницу на GitHub&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="frontmatter-config" tabindex="-1">Настройка в метаданных <a class="header-anchor" href="#frontmatter-config" aria-label="Permalink to &quot;Настройка в метаданных {#frontmatter-config}&quot;">​</a></h2><p>Эту ссылку можно отключить на конкретной странице с помощью опции <code>editLink</code> в метаданных:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">editLink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div>`,13),l=[e];function p(h,k,d,E,r,c){return a(),i("div",null,l)}const y=s(t,[["render",p]]);export{g as __pageData,y as default};
