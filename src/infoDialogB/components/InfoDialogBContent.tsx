import * as React from "react";

class InfoDialogBContent extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <>
        <section>
          <p>
            佛洛伊德曾說過：「不被理解的事物將再度出現，就像一個尚未找到位置的鬼魂。直到解開神秘知識，破除鬼魂之後才會安息。」
          </p>
          <p>
            未曾表露的哀傷、恐懼等情緒會累積在身體裡，甚至影響我們的人際關係和行為。
          </p>
        </section>
        <section>
          <div className="title">
            <h3>
              你已經知道每個人都可能得到怕怕病毒，所以不要覺得羞恥也不要排斥會害怕的自己。
              那你有想過自己在害怕什麼，為什麼害怕嗎？
            </h3>
          </div>
          <p>
            在1920年進行的「小艾伯特實驗」（Little Albert
            experiment）雖然極具爭議，但也片面證實了可以通過後天培養讓嬰兒對他本來並不害怕的物體產生恐懼感。後續也有相關的研究，而這些研究為「恐懼來自對事物的認識方式」提供了依據。
          </p>
          <p>所以我們有辦法改變嗎?</p>
        </section>
        <section>
          <div className="title">
            <h2>如果想要改變，必須先知道原因。</h2>
          </div>
          <p>
            自我覺察是很重要的，瞭解自己真正的感受，當你確定自己想要改變並且知曉改變將帶給生命如何的意義，通常會更容易有機會改變。例如有些人害怕與人群接觸，可能是因為和家人之間的關係不好，一旦瞭解後，或許就有機會用另一種方式和他人發展不一樣的關係。
          </p>
          <p>
            心理諮商研究學者裡的維克多·弗蘭克(Viktor Emil
            Frankl)提出意義治療，所謂意義治療(logotherapy)，是指協助患者從生活中領悟自己生命的意義，藉以改變其人生觀，進而面對現實，積極樂觀的活下去，努力追求生命的意義。
          </p>
          <p>
            弗蘭克認為，我們過去的一切會帶給我們什麼意義，我們可以自由地決定，雖然我們無法改變過去發生的事情，但是我們可以改變我們詮釋的方式，從而建構我們的未來。當你用不同角度，從另一個面向去看待，你或許也多了一個選擇可以生活。
          </p>
          <p>
            像是Eason之所以會害怕蜜蜂，是因為他覺得蜜蜂有刺所以都是壞蛋，但或許他也可以用另一種角度看待蜜蜂，減緩自己的怕怕病毒。
          </p>
          <p>
            雖然每個人得到怕怕病毒的原因是複雜、細微也不盡相同的，因此解決和改變的方法也都不一樣。但當你知道原因後，便可以針對原因設定解決方法，甚至是賦予怕怕病毒不同意義。
          </p>
        </section>
        <section>
          <div className="title">
            <h2>給自己一點獨處、思考的時間吧！</h2>
          </div>
          <p>不過找出原因其實並不是容易的事，慢慢來沒關係的。</p>
        </section>
        <section>
          <div className="ps">
            ※以上部分文章經由原作者
            <a href="http://womany.net/read/article/10194" target="_blank">
              Psydetective──貓心
            </a>
            同意使用
          </div>
        </section>
      </>
    );
  }
}

export default InfoDialogBContent;
