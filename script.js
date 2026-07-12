const questions = [
  // باب 1: اعداد
  {q: "حقی اعداد کی تعریف کریں؟", ans: "وہ اعداد جو نمبر لائن پر ظاہر کیے جا سکتے ہیں۔ جیسے 2, -3, 1/2, √2"},
  {q: "کسری اور غیر کسری اعداد میں فرق لکھیں؟", ans: "کسری: p/q کی شکل میں۔ غیر کسری: √2, π کی شکل میں"},
  {q: "| -7 | کی قیمت کیا ہے؟", ans: "7"},
  {q: "3.14159... کیسا عدد ہے؟", ans: "غیر کسری عدد"},
  {q: "√25 کی قیمت بتائیں؟", ans: "5"},
  {q: "معیاری فارم 0.00045 لکھیں؟", ans: "4.5 × 10⁻⁴"},
  {q: "2 + 3i میں حقیقی اور مختلط حصہ الگ کریں؟", ans: "حقی = 2, مختلط = 3i"},
  {q: "i² کی قیمت کیا ہے؟", ans: "-1"},
  {q: "(2+3i) + (1-2i) کا جواب؟", ans: "3 + i"},
  {q: "بند وقفہ [2,5] میں کتنے صحیح اعداد ہیں؟", ans: "2, 3, 4, 5 یعنی 4 اعداد"},
  {q: "√(-4) کو i کی شکل میں لکھیں؟", ans: "2i"},
  {q: "10⁻³ کی قیمت؟", ans: "0.001"},
  {q: "0 کیسا عدد ہے؟", ans: "صحیح، کسری، حقیقی"},
  {q: "-5 کا معکوس جمعی بتائیں؟", ans: "5"},
  {q: "4 کا معکوس ضربی بتائیں؟", ans: "1/4"},

  // باب 2: الجبرا
  {q: "(a+b)² کا فارمولا لکھیں؟", ans: "a² + 2ab + b²"},
  {q: "a² - b² کے فیکٹر کریں؟", ans: "(a+b)(a-b)"},
  {q: "x² + 5x + 6 کے فیکٹر کریں؟", ans: "(x+2)(x+3)"},
  {q: "2x - 10 = 0 میں x کی قیمت؟", ans: "5"},
  {q: "3x + 2y = 12 میں اگر x=2 تو y کی قیمت؟", ans: "3"},
  {q: "(x+2)(x-2) کا جواب؟", ans: "x² - 4"},
  {q: "ایک متغیرہ والی لکیری مساوات کی ڈگری؟", ans: "1"},
  {q: "x² + 4x + 4 کے فیکٹر؟", ans: "(x+2)²"},
  {q: "6 اور 9 کا LCM؟", ans: "18"},
  {q: "12 اور 16 کا HCF؟", ans: "4"},
  {q: "(a-b)² کا فارمولا؟", ans: "a² - 2ab + b²"},
  {q: "5x²y کا Coefficient کیا ہے؟", ans: "5"},
  {q: "2x + 3 = 7 میں x کی قیمت؟", ans: "2"},
  {q: "x³ - 1 کے فیکٹر؟", ans: "(x-1)(x²+x+1)"},
  {q: "x/2 = 5 کا حل؟", ans: "x = 10"},
  {q: "x+y=5, x-y=1 کو حل کریں؟", ans: "x=3, y=2"},
  {q: "Variable کا اردو مطلب؟", ans: "متغیر"},
  {q: "4x+9 میں Constant Term؟", ans: "9"},
  {q: "x² = 16 میں x کی قیمت؟", ans: "±4"},
  {q: "(2x)² کا جواب؟", ans: "4x²"},

  // باب 3: لکیری مساوات
  {q: "y = mx + c میں m کیا ہے؟", ans: "ڈھلان"},
  {q: "y = mx + c میں c کیا ہے؟", ans: "Y-intercept"},
  {q: "نقطہ (0,0) کو کیا کہتے ہیں؟", ans: "مبداء"},
  {q: "x + y < 5 کا گراف کیسا ہو گا؟", ans: "ڈاٹڈ لائن"},
  {q: "2x > 10 میں x کی قیمت؟", ans: "x > 5"},
  {q: "(-2, 3) کس Quadrant میں ہے؟", ans: "2nd Quadrant"},
  {q: "y = 3 کی لائن کیسی ہو گی؟", ans: "X-axis کے متوازی"},
  {q: "x = -4 کی لائن کیسی ہو گی؟", ans: "Y-axis کے متوازی"},
  {q: "ڈھلان کا فارمولا لکھیں؟", ans: "m = (y2-y1)/(x2-x1)"},
  {q: "نقطہ وسط کا فارمولا؟", ans: "((x1+x2)/2, (y1+y2)/2)"},

  // باب 4: تناسب
  {q: "4 : 8 کا تناسب سادہ کریں؟", ans: "1 : 2"},
  {q: "اگر 3 : 5 = 9 : x تو x کی قیمت؟", ans: "15"},
  {q: "فیصد کا مطلب کیا ہے؟", ans: "فی 100"},
  {q: "25% کو کسر میں لکھیں؟", ans: "1/4"},
  {q: "20 کا 10% کتنا ہے؟", ans: "2"},

  // باب 5: ہندسہ
  {q: "مثلث کے زاویوں کا مجموعہ؟", ans: "180°"},
  {q: "مربع کی خصوصیات لکھیں؟", ans: "4 سائیڈ برابر، 4 زاویے 90°"},
  {q: "دائرے کا محیط کا فارمولا؟", ans: "2πr"},
  {q: "دائرے کا رقبہ کا فارمولا؟", ans: "πr²"},
  {q: "فیثاغورس تھیورم لکھیں؟", ans: "a² + b² = c²"},
  {q: "متوازی اضلاع میں مخالف سائیڈیں کیسی ہوتیں؟", ans: "برابر اور متوازی"},
  {q: "مستطیل کا رقبہ؟", ans: "لمبائی × چوڑائی"},
  {q: "مکعب کا حجم؟", ans: "a³"},
  {q: "قطر کا رداس سے تعلق؟", ans: "قطر = 2 × رداس"},
  {q: "عمودی زاویے کیسے ہوتے ہیں؟", ans: "برابر"},
  {q: "متکمل زاویوں کا مجموعہ؟", ans: "180°"},
  {q: "متتم زاویوں کا مجموعہ؟", ans: "90°"},
  {q: "مثلث کی مساحت کا فارمولا؟", ans: "1/2 × بنیاد × اونچائی"},
  {q: "سلنڈر کا کل رقبہ؟", ans: "2πr(r + h)"},
  {q: "کروی کا حجم؟", ans: "4/3 πr³"},
  {q: "مخروط کا حجم؟", ans: "1/3 πr²h"},
  {q: "متوازی الاضلاع کا رقبہ؟", ans: "بنیاد × اونچائی"},
  {q: "رومبس کے قطروں کی خصوصیت؟", ans: "ایک دوسرے کو 90° پر قطع کرتے ہیں"},
  {q: "باقاعدہ پینٹاگون کے زاویوں کا مجموعہ؟", ans: "540°"},
  {q: "1 میٹر = ؟ سینٹی میٹر", ans: "100 cm"},

  // باب 6: مثلثیات
  {q: "sin 30° کی قیمت؟", ans: "1/2"},
  {q: "cos 60° کی قیمت؟", ans: "1/2"},
  {q: "tan 45° کی قیمت؟", ans: "1"},
  {q: "sin θ کا فارمولا؟", ans: "P/H"},
  {q: "cos θ کا فارمولا؟", ans: "B/H"},
  {q: "tan θ کا فارمولا؟", ans: "P/B"},
  {q: "cot θ کا فارمولا؟", ans: "B/P"},
  {q: "sec θ کا فارمولا؟", ans: "1/cos θ"},
  {q: "cosec θ کا فارمولا؟", ans: "1/sin θ"},
  {q: "sin²θ + cos²θ =؟", ans: "1"},

  // باب 7: احصاء
  {q: "ڈیٹا کی اوسط کو کیا کہتے ہیں؟", ans: "Mean"},
  {q: "ڈیٹا کی درمیانی قیمت؟", ans: "Median"},
  {q: "جو قدر سب سے زیادہ آئے اسے کیا کہتے؟", ans: "Mode"},
  {q: "2,4,6,8 کا Mean؟", ans: "5"},
  {q: "Range کا فارمولا؟", ans: "Max - Min"},
  {q: "Bar Graph کس لیے استعمال ہوتا؟", ans: "تقابل کے لیے"},
  {q: "Pie Chart کیا دکھاتا ہے؟", ans: "حصوں کا تناسب"},
  {q: "ڈیٹا جمع کرنے کا 1 طریقہ؟", ans: "Questionnaire"},
  {q: "Frequency Table کا مقصد؟", ans: "ڈیٹا کو ترتیب دینا"},
  {q: "Histogram اور Bar Graph میں فرق؟", ans: "Histogram میں ستون جڑے ہوتے ہیں"},

  // باب 8: احتمال
  {q: "احتمال کی کم سے کم قیمت؟", ans: "0"},
  {q: "احتمال کی زیادہ سے زیادہ قیمت؟", ans: "1"},
  {q: "سکہ اچھالنے پر Head کا احتمال؟", ans: "1/2"},
  {q: "تاش میں بادشاہ کا احتمال؟", ans: "4/52 = 1/13"},
  {q: "P(E) کا فارمولا؟", ans: "Favorable Outcomes / Total Outcomes"},

  // باب 9: مجموعے
  {q: "مجموعہ کی تعریف؟", ans: "مخصوص اشیاء کا مجموعہ"},
  {q: "A ∪ B کا مطلب؟", ans: "Union"},
  {q: "A ∩ B کا مطلب؟", ans: "Intersection"},
  {q: "خالی مجموعہ کی علامت؟", ans: "{ } یا ∅"},
  {q: "Universal Set کی علامت؟", ans: "U"}
];

let current = 0; let shuffled = [];
window.onload = function() { shuffled = questions.sort(() => Math.random() - 0.5); loadQuestion(); }

function loadQuestion() {
  document.getElementById("answer-box").style.display = "none";
  document.getElementById("answer").innerText = "";
  if(current >= shuffled.length) {
    document.getElementById("question").innerText = "🎉 100 سوالات مکمل! 🎉";
    document.getElementById("showAnsBtn").style.display = "none";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("score").innerText = "مکمل";
    return;
  }
  document.getElementById("question").innerText = "سوال " + (current+1) + ": " + shuffled[current].q;
  document.getElementById("score").innerText = "سوال: " + (current+1) + " / 100";
}

document.getElementById("showAnsBtn").onclick = () => {
  document.getElementById("answer-box").style.display = "block";
  document.getElementById("answer").innerText = "جواب: " + shuffled[current].ans;
}

document.getElementById("nextBtn").onclick = () => { current++; loadQuestion(); }

if('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); }
