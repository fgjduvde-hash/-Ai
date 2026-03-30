<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI المطور عسكري | النسخة النهائية</title>
    <style>
        :root {
            --primary: #00ff41;
            --dark: #0a0a0a;
            --panel: #0d1117;
            --border: #003b00;
            --glow: 0 0 10px rgba(0, 255, 65, 0.5);
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Courier New', monospace; background: var(--dark); color: var(--primary); min-height: 100vh; overflow-x: hidden; }
        .bg-animation { position: fixed; top:0; left:0; width:100%; height:100%; background: linear-gradient(0deg, transparent 24%, rgba(0,255,65,.03) 25%, rgba(0,255,65,.03) 26%, transparent 27%, transparent 74%, rgba(0,255,65,.03) 75%, rgba(0,255,65,.03) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0,255,65,.03) 25%, rgba(0,255,65,.03) 26%, transparent 27%, transparent 74%, rgba(0,255,65,.03) 75%, rgba(0,255,65,.03) 76%, transparent 77%, transparent); background-size:50px 50px; z-index:-1; }
        .container { max-width: 1200px; margin:0 auto; padding:20px; }
        header { text-align:center; padding:30px 20px; border-bottom:2px solid var(--primary); box-shadow: var(--glow); margin-bottom:30px; background: rgba(13,17,23,0.9); border-radius:10px; }
        header h1 { font-size:2em; text-shadow: var(--glow); margin-bottom:10px; }
        .subtitle { color:#00aa22; font-size:1em; }
        .status-bar { display:flex; justify-content:center; gap:20px; margin-top:15px; flex-wrap:wrap; }
        .status-badge { padding:8px 15px; border:1px solid var(--primary); border-radius:5px; background: rgba(0,255,65,0.1); font-size:0.9em; animation:pulse 2s infinite; }
        @keyframes pulse { 0%,100%{box-shadow:0 0 5px var(--primary);} 50%{box-shadow:0 0 15px var(--primary);} }
        .main-content { display:grid; grid-template-columns:1fr 350px; gap:20px; }
        @media (max-width:900px){ .main-content{grid-template-columns:1fr;} }
        .chat-section { background: rgba(13,17,23,0.9); border:1px solid var(--primary); border-radius:10px; overflow:hidden; }
        .chat-header { padding:15px; border-bottom:1px solid var(--primary); background: rgba(0,20,0,0.5); display:flex; justify-content:space-between; align-items:center; }
        #chat-box { height:450px; overflow-y:auto; padding:20px; display:flex; flex-direction:column; gap:15px; }
        .message { max-width:85%; padding:15px; border-radius:8px; line-height:1.6; animation:slideIn 0.3s ease; }
        @keyframes slideIn { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
        .user-msg { align-self:flex-start; background: rgba(0,255,65,0.15); border-right:3px solid var(--primary); }
        .ai-msg { align-self:flex-end; background: rgba(0,50,0,0.3); border-left:3px solid var(--primary); border:1px solid var(--border); }
        .ai-msg strong { color:#00ff41; display:block; margin-bottom:8px; font-size:0.9em; border-bottom:1px solid var(--border); padding-bottom:5px; }
        .input-area { padding:15px; border-top:1px solid var(--primary); display:flex; gap:10px; background: rgba(0,20,0,0.8); }
        #user-input { flex:1; padding:12px; background:#000; border:1px solid var(--primary); color:var(--primary); font-family:inherit; font-size:1em; border-radius:5px; outline:none; }
        #user-input:focus { box-shadow: var(--glow); }
        #send-btn { padding:12px 25px; background:var(--primary); color:#000; border:none; font-weight:bold; cursor:pointer; border-radius:5px; font-family:inherit; transition:0.3s; }
        #send-btn:hover { background:#00cc33; box-shadow: var(--glow); }
        #send-btn:disabled { background:#005511; cursor:not-allowed; }
        .sidebar { display:flex; flex-direction:column; gap:20px; }
        .panel { background: rgba(13,17,23,0.9); border:1px solid var(--primary); border-radius:10px; padding:20px; }
        .panel h3 { color:var(--primary); margin-bottom:15px; border-bottom:1px solid var(--border); padding-bottom:10px; }
        .code-list { display:flex; flex-direction:column; gap:10px; }
        .code-btn { padding:10px 15px; background: rgba(0,255,65,0.1); border:1px solid var(--primary); color:var(--primary); border-radius:5px; cursor:pointer; text-align:right; transition:0.3s; font-family:inherit; }
        .code-btn:hover { background: rgba(0,255,65,0.2); box-shadow: var(--glow); }
        .developer-info { text-align:center; line-height:2; }
        .developer-info p { margin:5px 0; }
        pre { background:#000; padding:15px; border-radius:5px; overflow-x:auto; border:1px solid var(--border); margin:10px 0; direction:ltr; text-align:left; }
        code { color:#00ff41; font-family:'Consolas', monospace; font-size:0.9em; }
        .copy-btn { display:inline-block; margin-top:10px; padding:8px 15px; background:var(--primary); color:#000; border:none; border-radius:5px; cursor:pointer; font-family:inherit; font-weight:bold; }
        .copy-btn:hover { background:#00cc33; box-shadow: var(--glow); }
        footer { text-align:center; padding:30px; margin-top:30px; border-top:1px solid var(--primary); color:#00aa22; }
        ::-webkit-scrollbar { width:8px; } ::-webkit-scrollbar-track { background:#000; } ::-webkit-scrollbar-thumb { background:var(--primary); border-radius:4px; } ::-webkit-scrollbar-thumb:hover { background:#00cc33; }
        .typing-indicator { color:#00aa22; font-size:0.9em; padding:10px; display:none; }
        .typing-indicator.show { display:block; }
    </style>
</head>
<body>
    <div class="bg-animation"></div>
    <div class="container">
        <header>
            <h1>⚡ AI المطور عسكري ⚡</h1>
            <div class="subtitle">نظام الذكاء الاصطناعي المتخصص في بايثون والأمن السيبراني</div>
            <div class="status-bar">
                <div class="status-badge">🟢 النظام نشط</div>
                <div class="status-badge">🛡️ الإصدار 3.0 Ultimate</div>
                <div class="status-badge">🐍 Python Expert</div>
            </div>
        </header>

        <div class="main-content">
            <div class="chat-section">
                <div class="chat-header">
                    <span>💬 المحادثة الذكية</span>
                    <span id="chat-status">متصل</span>
                </div>
                
                <div id="chat-box">
                    <div class="message ai-msg">
                        <strong>🤖 AI المطور عسكري</strong>
                        أهلاً بك في <strong>النظام المركزي للمطور عسكري</strong> 🎯<br><br>
                        أنا مساعدك الذكي المتخصص في:<br>
                        • 🐍 إنشاء أكواد بايثون احترافية<br>
                        • 🔧 حل المشاكل التقنية<br>
                        • 📊 تحليل البيانات والأتمتة<br>
                        • 🛡️ أدوات أمنية وقانونية<br><br>
                        <em>اكتب طلبك وسأرد بأفضل جودة ممكنة...</em>
                    </div>
                </div>
                
                <div class="typing-indicator" id="typing">جاري المعالجة...</div>
                
                <div class="input-area">
                    <input type="text" id="user-input" placeholder="اكتب سؤالك أو طلب الكود هنا..." autocomplete="off">
                    <button id="send-btn">إرسال ➤</button>
                </div>
            </div>

            <div class="sidebar">
                <div class="panel">
                    <h3>📋 أكواد بايثون جاهزة</h3>
                    <div class="code-list">
                        <button class="code-btn" onclick="insertCode('hello')">👋 كود ترحيب</button>
                        <button class="code-btn" onclick="insertCode('scanner')">🔍 فحص بورتات</button>
                        <button class="code-btn" onclick="insertCode('automation')">⚙️ أتمتة ملفات</button>
                        <button class="code-btn" onclick="insertCode('api')">🌐 ربط API</button>
                        <button class="code-btn" onclick="insertCode('crypto')">🔐 تشفير</button>
                        <button class="code-btn" onclick="insertCode('database')">🗄️ قاعدة بيانات</button>
                        <button class="code-btn" onclick="insertCode('scraper')">🕷️ سحب بيانات</button>
                        <button class="code-btn" onclick="insertCode('file')">📁 معالجة ملفات</button>
                    </div>
                </div>

                <div class="panel">
                    <h3>👤 معلومات المطور</h3>
                    <div class="developer-info">
                        <p><strong>الاسم:</strong> المطور عسكري</p>
                        <p><strong>التخصص:</strong> بايثون وأمن سيبراني</p>
                        <p><strong>الإصدار:</strong> 3.0 Ultimate</p>
                        <p><strong>الحالة:</strong>  متاح</p>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <p>© 2024 جميع الحقوق محفوظة | المطور عسكري</p>
            <p>🛡️ نظام ذكي للأغراض التعليمية والقانونية فقط</p>
        </footer>
    </div>

    <script>
        // === إعدادات النظام ===
        const CONFIG = {
            developer: "المطور عسكري",
            version: "3.0 Ultimate",
            specialty: "بايثون، أمن سيبراني، أتمتة",
            apiKey: "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"
        };

        const chatBox = document.getElementById('chat-box');
        const userInput = document.getElementById('user-input');
        const sendBtn = document.getElementById('send-btn');
        const typing = document.getElementById('typing');

        const CODES = { /* نفس مكتبة الأكواد اللي عندك */ };

        function addMessage(text, isUser = false) {
            const msgDiv = document.createElement('div');
            msgDiv.className = `message ${isUser ? 'user-msg' : 'ai-msg'}`;
            if (isUser) { msgDiv.textContent = text; }
            else { msgDiv.innerHTML = `<strong>🤖 AI ${CONFIG.developer}</strong><br>${text}`; }
            chatBox.appendChild(msgDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        async function generateSmartResponse(prompt) {
            try {
                const response = await fetch("https://api.openai.com/v1/chat/completions", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "Authorization": `Bearer ${CONFIG.apiKey}` },
                    body: JSON.stringify({
                        model: "gpt-4o-mini",
                        messages: [{ role: "user", content: prompt }],
                        max_tokens: 800
                    })
                });
                const data = await response.json();
                return data.choices[0].message.content;
            } catch (e) { console.error(e); return "حدث خطأ أثناء توليد الرد 😓"; }
        }

        async function generateResponse(input) {
            input = input.toLowerCase().trim();
            if (input.includes("من هو المطور") || input.includes("المطور")) {
                return `المطور هو ${CONFIG.developer} - خبير في هندسة البرمجيات والأمن السيبراني.`;
            }
            if (input.includes("كود") || input.includes("بايثون") || input.includes("python")) {
                // معالجة أكواد بسيطة
                let codeKey = "hello";
                if (input.includes("فحص") || input.includes("سكانر")) codeKey = "scanner";
                else if (input.includes("أتمتة") || input.includes("ملفات")) codeKey = "automation";
                else if (input.includes("api") || input.includes("ربط")) codeKey = "api";
                else if (input.includes("تشفير") || input.includes("هاش")) codeKey = "crypto";
                else if (input.includes("قاعدة") || input.includes("database")) codeKey = "database";
                else if (input.includes("سحب") || input.includes("scraper")) codeKey = "scraper";
                else if (input.includes("ملف") || input.includes("file")) codeKey = "file";

                return `✅ تفضل <strong>كود جاهز</strong>:<br><br>
<pre><code>${CODES[codeKey]}</code></pre>
<button class="copy-btn" onclick="copyCode(this)">📋 نسخ الكود</button>`;
            }
            return await generateSmartResponse(input);
        }

        async function handleSend() {
            const text = userInput.value.trim();
            if (!text) return;
            addMessage(text, true);
            userInput.value = '';
            sendBtn.disabled = true;
            typing.classList.add('show');

            setTimeout(async () => {
                const response = await generateResponse(text);
                addMessage(response);
                typing.classList.remove('show');
                sendBtn.disabled = false;
                userInput.focus();
            }, 300);
        }

        function insertCode(codeKey) {
            const code = CODES[codeKey];
            const response = `✅ تفضل الكود:<br><br>
<pre><code>${code}</code></pre>
<button class="copy-btn" onclick="copyCode(this)">📋 نسخ الكود</button>`;
            addMessage(response);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function copyCode(btn) {
            const code = btn.previousElementSibling.textContent;
            navigator.clipboard.writeText(code).then(() => {
                btn.textContent = "✓ تم النسخ";
                setTimeout(() => { btn.textContent = "📋 نسخ الكود"; }, 2000);
            });
        }

        sendBtn.addEventListener('click', handleSend);
        userInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSend(); });
        userInput.focus();
    </script>
</body>
</html>