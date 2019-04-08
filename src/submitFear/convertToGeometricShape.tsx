import * as React from "react";

export const convertToGeometricShape = (char: string): React.ReactNode => {
  switch (char) {
    // ㄅ
    case "畢":
    case "別":
    case "報":
    case "抱":
    case "爆":
    case "暴":
    case "變":
    case "便":
    case "避":
    case "閉":
    case "不":
    case "別":
    case "敗":
    case "霸":
    case "本":
    case "被":
    case "表":
    case "病":
    case "搬":
    case "博":
      return (
        <path
          fill="#e57452"
          d="M24,2c-.63,0-1.28,0-1.91.09C15.39,2.71,10.67,7.18,10.63,13A7.84,7.84,0,0,0,12.49,18c-3.31,1.35-6.15,4.07-6.15,8.48A8.53,8.53,0,0,0,12.13,35a7.18,7.18,0,0,0-1.92,5.75c.44,6.35,6.48,9.74,11.91,10.2.66.06,1.33.09,2,.09h0a21.46,21.46,0,0,0,16.27-7.41A25.74,25.74,0,0,0,46.66,26.5C46.66,13.22,36.29,2,24,2Z"
        />
      );

    // ㄆ
    case "怕":
    case "拋":
    case "迫":
    case "破":
    case "泡":
    case "片":
    case "騙":
    case "胖":
    case "朋":
      return (
        <path
          fill="#e57452"
          d="M46.46,17.53C41,11.35,33.76,7.81,26.66,7.81c-7.25,0-15.34,3.81-20.62,9.71-5.5,6.15-7.4,16.63-1,23.54a12.58,12.58,0,0,0,9.36,4.13,14.8,14.8,0,0,0,12.31-6.91A14.79,14.79,0,0,0,39,45.19h0a12.62,12.62,0,0,0,9.37-4.13C54.61,34.22,52.06,23.83,46.46,17.53Z"
        />
      );

    // ㄇ
    case "蜜":
    case "嗎":
    case "母":
    case "蜜":
    case "沒":
    case "木":
    case "夢":
    case "罵":
    case "面":
    case "媽":
    case "毛":
    case "貓":
    case "妹":
    case "麼":
    case "盲":
    case "忙":
      return (
        <path
          fill="#e57452"
          d="M44.3,26.5a14.32,14.32,0,0,0,4.54-8.06A11.24,11.24,0,0,0,45.91,8.8a12.14,12.14,0,0,0-9-4A14,14,0,0,0,26.5,9.6,13.94,13.94,0,0,0,16.12,4.82a12.14,12.14,0,0,0-9,4,11.24,11.24,0,0,0-2.93,9.64A14.32,14.32,0,0,0,8.7,26.5a14.32,14.32,0,0,0-4.54,8.06A11.24,11.24,0,0,0,7.09,44.2a12.14,12.14,0,0,0,9,4A13.9,13.9,0,0,0,26.5,43.4a13.94,13.94,0,0,0,10.38,4.78,12.14,12.14,0,0,0,9-4,11.24,11.24,0,0,0,2.93-9.64A14.29,14.29,0,0,0,44.3,26.5Z"
        />
      );

    // ㄈ
    case "風":
    case "蜂":
    case "封":
    case "父":
    case "分":
    case "負":
    case "否":
    case "粉":
    case "犯":
    case "肥":
      return (
        <path
          fill="#e57452"
          d="M50.09,15.54A9.94,9.94,0,0,0,46.32,8.9a9.73,9.73,0,0,0-6-2.1H12.81a10,10,0,0,0,0,19.94h7l-4.19,5.38A10,10,0,1,0,31.29,44.37L48.05,22.89A9.92,9.92,0,0,0,50.09,15.54Z"
        />
      );

    // ㄉ
    case "打":
    case "電":
    case "端":
    case "獨":
    case "毒":
    case "掉":
    case "大":
    case "讀":
    case "定":
    case "的":
    case "對":
    case "弟":
    case "丟":
    case "地":
    case "刀":
    case "蝶":
    case "跌":
    case "到":
    case "東":
    case "都":
    case "但":
    case "蛋":
    case "道":
      return (
        <>
          <path
            fill="#e57452"
            d="M44.11,31.5H8.89a7.38,7.38,0,0,0,0,14.76H44.11a7.38,7.38,0,0,0,0-14.76Z"
          />
          <path
            fill="#e57452"
            d="M12.13,26.91H40.87a6.29,6.29,0,0,0,0-12.57H37.44a11,11,0,0,0-21.88,0H12.13a6.29,6.29,0,0,0,0,12.57Z"
          />
        </>
      );

    // ㄊ
    case "特":
    case "討":
    case "他":
    case "她":
    case "體":
    case "同":
    case "脫":
    case "痛":
    case "跳":
    case "偷":
    case "談":
    case "圖":
    case "太":
    case "態":
      return (
        <path
          fill="#e57452"
          d="M51.43,18.08a8,8,0,0,0-8-8H9.59a8,8,0,0,0,0,16h4L8.42,31.24A8,8,0,0,0,19.76,42.59l6.74-6.74,6.74,6.74A8,8,0,0,0,44.58,31.24L39.44,26.1h4A8,8,0,0,0,51.43,18.08Z"
        />
      );

    // ㄋ
    case "你":
    case "乃":
    case "那":
    case "年":
    case "鳥":
    case "男":
    case "女":
    case "難":
    case "內":
    case "奶":
    case "牛":
    case "妞":
    case "暖":
    case "努":
    case "奴":
      return (
        <path
          fill="#e57452"
          d="M48.69,14.86a9.86,9.86,0,0,0-18.47-4.81,20.5,20.5,0,0,0-7.53-.15,9.86,9.86,0,1,0-15.44,12,20.31,20.31,0,0,0-1.72,8.23C5.53,41.73,16.09,48,26,48s20.49-6.27,20.49-17.88a20.45,20.45,0,0,0-1.46-7.62A9.82,9.82,0,0,0,48.69,14.86Z"
        />
      );

    // ㄌ
    case "老":
    case "雷":
    case "戀":
    case "離":
    case "狼":
    case "螂":
    case "流":
    case "留":
    case "凌":
    case "林":
    case "了":
    case "靈":
    case "累":
    case "淚":
    case "李":
    case "裡":
    case "禮":
    case "冷":
    case "理":
    case "論":
    case "路":
      return (
        <path
          fill="#e57452"
          d="M49.14,17.27a13.39,13.39,0,0,0-17.07-1.6,12.87,12.87,0,0,0-3.58,3.73h-4a12.92,12.92,0,0,0-4.3-4.21,13.23,13.23,0,1,0-.06,22.64,12.9,12.9,0,0,0,4.36-4.24h4a12.91,12.91,0,0,0,1.81,2.26A13.23,13.23,0,0,0,49.14,17.27Z"
        />
      );

    // ㄍ
    case "根":
    case "高":
    case "跟":
    case "狗":
    case "廣":
    case "幹":
    case "哥":
    case "光":
    case "公":
    case "蚣":
    case "鬼":
    case "國":
    case "工":
    case "格":
      return (
        <path
          fill="#e57452"
          d="M51.31,34.57,40.86,12.17a7.43,7.43,0,0,0-6.64-4.28h-.34a7.45,7.45,0,0,0-6.71,4.28l-.67,1.44-.67-1.44a7.42,7.42,0,0,0-6.65-4.28h-.34a7.45,7.45,0,0,0-6.7,4.28L1.69,34.57a7.46,7.46,0,0,0-.17,5.88A7.37,7.37,0,0,0,5.7,44.61a7.14,7.14,0,0,0,2.63.5,7.66,7.66,0,0,0,6.9-4.48l3.75-8,.75,1.61a7.39,7.39,0,0,0,6.47,4.27h.58a7.4,7.4,0,0,0,6.49-4.27L34,32.59l3.74,8a7.55,7.55,0,0,0,9.54,4,7.37,7.37,0,0,0,4.18-4.16A7.46,7.46,0,0,0,51.31,34.57ZM34.05,9.26Zm-.13,0Z"
        />
      );

    // ㄎ
    case "苦":
    case "克":
    case "口":
    case "開":
    case "恐":
    case "考":
    case "哭":
    case "靠":
    case "困":
    case "看":
    case "褲":
    case "空":
      return (
        <path
          fill="#e57452"
          d="M43.07,6l-.18-.08-.11,0a8.45,8.45,0,0,0-2.3-.58h-.29a5.3,5.3,0,0,0-.57,0H13.38a8.43,8.43,0,1,0,0,16.85H31.2v3.81H11.64a6.69,6.69,0,1,0,0,13.37H31.2v2a8.43,8.43,0,1,0,16.85,0V13.68A8.43,8.43,0,0,0,43.07,6Z"
        />
      );

    // ㄏ
    case "害":
    case "好":
    case "很":
    case "黑":
    case "後":
    case "話":
    case "壞":
    case "歡":
    case "恨":
    case "灰":
    case "火":
    case "海":
    case "呼":
    case "蝴":
    case "紅":
    case "會":
    case "回":
    case "畫":
    case "化":
    case "謊":
    case "禍":
    case "換":
    case "毀":
    case "悔":
      return (
        <path
          fill="#e57452"
          d="M39.08,21.15a14.1,14.1,0,1,0-25.16,0,18.13,18.13,0,1,0,25.16,0Z"
        />
      );

    // ㄐ
    case "懼":
    case "集":
    case "架":
    case "尖":
    case "姦":
    case "家":
    case "焦":
    case "交":
    case "己":
    case "緊":
    case "計":
    case "吉":
    case "姐":
    case "叫":
    case "進":
    case "劫":
    case "結":
    case "潔":
    case "及":
    case "級":
    case "近":
    case "見":
    case "賤":
    case "解":
      return (
        <path
          fill="#e57452"
          d="M49.47,20.28a11.05,11.05,0,0,0-9-7.57l-2.78-.4L36.47,9.78a11.12,11.12,0,0,0-19.94,0l-1.25,2.53-2.78.4a11.12,11.12,0,0,0-6.16,19l2,2-.47,2.78a11.11,11.11,0,0,0,11,13A11.23,11.23,0,0,0,24,48.14l2.49-1.32L29,48.13A11.11,11.11,0,0,0,45.12,36.42l-.47-2.78,2-2A11.06,11.06,0,0,0,49.47,20.28Z"
        />
      );

    // ㄑ
    case "強":
    case "親":
    case "侵":
    case "群":
    case "去":
    case "前":
    case "錢":
    case "氣":
    case "欺":
    case "切":
    case "歧":
    case "請":
    case "慶":
      return (
        <path
          fill="#e57452"
          d="M28.26,8.43A20.36,20.36,0,0,0,23.33,9,10.13,10.13,0,1,0,9,22.69,20.19,20.19,0,1,0,28.26,8.43Z"
        />
      );

    // ㄒ
    case "小":
    case "性":
    case "心":
    case "血":
    case "喜":
    case "學":
    case "校":
    case "下":
    case "兄":
    case "需":
    case "嘯":
    case "吸":
    case "星":
    case "現":
    case "向":
    case "象":
    case "巷":
    case "西":
    case "想":
      return (
        <path
          fill="#e57452"
          d="M43.15,7.08a4.7,4.7,0,0,0-6.65,0l-10,10-10-10a4.7,4.7,0,0,0-6.65,0,23.51,23.51,0,1,0,33.3,0Z"
        />
      );

    // ㄓ
    case "張":
    case "蟑":
    case "蜘":
    case "蛛":
    case "障":
    case "豬":
    case "製":
    case "症":
    case "追":
    case "真":
    case "志":
    case "智":
    case "長":
    case "震":
    case "戰":
    case "爭":
    case "找":
    case "炸":
    case "之":
    case "知":
    case "隻":
    case "住":
    case "種":
    case "只":
      return (
        <path
          fill="#e57452"
          d="M45.81,33.48l-.1-.1A20.41,20.41,0,0,0,19.62,7.29l-.1-.1A8.72,8.72,0,0,0,7.19,19.52l.1.1A20.41,20.41,0,0,0,33.38,45.71l.1.1A8.72,8.72,0,0,0,45.81,33.48Z"
        />
      );

    // ㄔ
    case "超":
    case "吵":
    case "醜":
    case "丑":
    case "陳":
    case "場":
    case "蟲":
    case "塵":
    case "仇":
    case "愁":
    case "齒":
    case "吃":
    case "出":
    case "車":
      return (
        <path
          fill="#e57452"
          d="M36.45,10.33H16.55a16.17,16.17,0,0,0,0,32.34h19.9a16.17,16.17,0,0,0,0-32.34ZM21.54,29.62a4.41,4.41,0,1,1,0-6.24A4.42,4.42,0,0,1,21.54,29.62Zm9.92-6.24a4.42,4.42,0,0,1,6.24,0,4.41,4.41,0,0,1-3.12,7.53h0a4.41,4.41,0,0,1-3.12-7.53Z"
        />
      );

    // ㄕ
    case "蛇":
    case "鼠":
    case "殺":
    case "傷":
    case "屍":
    case "說":
    case "師":
    case "獅":
    case "失":
    case "濕":
    case "試":
    case "是":
    case "閃":
    case "善":
    case "身":
    case "深":
    case "聲":
    case "生":
    case "水":
    case "什":
    case "舌":
    case "士":
    case "叔":
    case "手":
    case "視":
    case "受":
    case "碩":
    case "社":
    case "申":
    case "釋":
    case "上":
      return (
        <>
          <path
            fill="#e57452"
            d="M42.6,26.44H10.4A9.28,9.28,0,0,0,10.4,45H42.6a9.28,9.28,0,1,0,0-18.56Z"
          />
          <path
            fill="#e57452"
            d="M15.73,23.18h0A7.51,7.51,0,0,0,21.09,21,7.59,7.59,0,0,0,10.36,10.22h0a7.6,7.6,0,0,0,5.37,13Z"
          />
          <path
            fill="#e57452"
            d="M37.28,23.18h0A7.51,7.51,0,0,0,42.64,21a7.59,7.59,0,0,0,0-10.73h0A7.59,7.59,0,0,0,31.91,21,7.52,7.52,0,0,0,37.28,23.18Z"
          />
        </>
      );

    // ㄖ
    case "人":
    case "銳":
    case "肉":
    case "然":
    case "染":
    case "擾":
    case "軟":
      return (
        <>
          <path
            fill="#e57452"
            d="M10.1,45.08A24.4,24.4,0,0,0,26.37,51.6a26.46,26.46,0,0,0,16.94-6.52c4.53-4.12,6.09-11.16.87-15.8a11.52,11.52,0,0,0-7.7-2.77,13,13,0,0,0-10.11,4.64,12.94,12.94,0,0,0-10.11-4.64h0a11.49,11.49,0,0,0-7.69,2.77C3.4,33.87,5.5,40.85,10.1,45.08Z"
          />
          <path
            fill="#e57452"
            d="M26.5,1.4c-8.11,0-14.71,5.32-14.71,11.86s6.6,11.87,14.71,11.87,14.71-5.32,14.71-11.87S34.61,1.4,26.5,1.4Z"
          />
        </>
      );

    // ㄗ
    case "在":
    case "子":
    case "自":
    case "造":
    case "做":
    case "作":
    case "髒":
    case "災":
    case "阻":
    case "組":
    case "再":
    case "總":
      return (
        <>
          <path
            fill="#e57452"
            d="M20.09,6.78A9.25,9.25,0,0,0,7,6.77H7A9.26,9.26,0,0,0,7,19.84l25.8,25.8A9.24,9.24,0,1,0,45.88,32.57Z"
          />
          <path
            fill="#e57452"
            d="M5.94,35.43a7.91,7.91,0,1,0,11.19,0A7.91,7.91,0,0,0,5.94,35.43Z"
          />
          <path
            fill="#e57452"
            d="M41.47,19.94a7.92,7.92,0,1,0-5.59-2.32A7.87,7.87,0,0,0,41.47,19.94Z"
          />
        </>
      );

    // ㄘ
    case "次":
    case "刺":
    case "錯":
    case "叢":
    case "從":
      return (
        <path
          fill="#e57452"
          d="M39.58,31.75l-4.2-4.2V13A11.69,11.69,0,0,0,12,13V32a.87.87,0,0,0,0,.18,11.59,11.59,0,0,0,3.41,8.52l7.63,7.63a11.65,11.65,0,0,0,8.27,3.43h0a11.7,11.7,0,0,0,8.26-20Z"
        />
      );

    // ㄙ
    case "所":
    case "死":
    case "蘇":
    case "三":
    case "四":
    case "森":
    case "司":
    case "私":
    case "思":
    case "騷":
    case "素":
    case "酸":
    case "訴":
    case "塑":
    case "宿":
    case "散":
      return (
        <>
          <path
            fill="#e57452"
            d="M42.33,29H10.67a9.16,9.16,0,0,0,0,18.32H42.33a9.16,9.16,0,1,0,0-18.32Z"
          />
          <path
            fill="#e57452"
            d="M26.5,25.26A9.76,9.76,0,0,0,33.4,8.59a9.77,9.77,0,0,0-13.81,0h0A9.77,9.77,0,0,0,26.5,25.26Z"
          />
        </>
      );

    // ㄚ
    case "啊":
    case "阿":
      return (
        <path
          fill="#e57452"
          d="M50.91,16.61a8.62,8.62,0,0,0-12.12-1.5L35.13,18V10.84a8.63,8.63,0,1,0-17.26,0V18l-3.66-2.86A8.64,8.64,0,0,0,.33,23a8.54,8.54,0,0,0,3.26,5.74L17.87,39.87v2.29a8.63,8.63,0,1,0,17.26,0V39.87L49.41,28.72a8.62,8.62,0,0,0,1.5-12.11Z"
        />
      );

    // ㄛ
    case "喔":
      return (
        <path
          fill="#e57452"
          d="M26.5,4.2A22.3,22.3,0,1,0,48.8,26.5,22.32,22.32,0,0,0,26.5,4.2Zm0,27.1a4.8,4.8,0,1,1,4.8-4.8A4.81,4.81,0,0,1,26.5,31.3Z"
        />
      );

    // ㄜ
    case "噁":
    case "惡":
    case "餓":
    case "噩":
    case "蛾":
    case "鵝":
      return (
        <path
          fill="#e57452"
          d="M39.71,17.58c1.81-5.85,1.9-10.13.28-12.76a5.86,5.86,0,0,0-4.37-2.71A6.51,6.51,0,0,0,34.55,2C31.67,2,28,3.82,26.24,12c-2.14-7.78-5.7-9.5-8.42-9.5a7.11,7.11,0,0,0-1.5.17,5.78,5.78,0,0,0-4.06,2.89c-1.46,2.63-1.23,6.77.68,12.31a18.21,18.21,0,0,0-7,14.21C5.94,42.49,15.16,51,26.5,51s20.56-8.48,20.56-18.91A18.2,18.2,0,0,0,39.71,17.58ZM26.5,36.24a4.76,4.76,0,1,1,4.76-4.75A4.76,4.76,0,0,1,26.5,36.24Z"
        />
      );

    // 沒有ㄝ
    // ㄞ
    case "癌":
    case "愛":
    case "哀":
    case "挨":
    case "唉":
    case "礙":
      return (
        <path
          fill="#e57452"
          d="M44,19.41a9,9,0,0,0-6.74-1.8H32.13L33,16.43A9,9,0,0,0,31.45,3.89,8.81,8.81,0,0,0,26,2a8.92,8.92,0,0,0-7.09,3.5L7.43,21.05a8.93,8.93,0,0,0,7.05,14.43h6.93l-.76,1.09a8.94,8.94,0,0,0,7,14.43,9,9,0,0,0,7.13-3.55l10.56-15.2a8.69,8.69,0,0,0,1.46-2.49l.15-.41c0-.1.06-.2.08-.25A9,9,0,0,0,44,19.41Z"
        />
      );

    // ㄟ
    case "欸":
      return (
        <path
          fill="#e57452"
          d="M16.48,26.73a9.32,9.32,0,1,0-9.32-9.32A9.33,9.33,0,0,0,16.48,26.73Z"
        />
      );

    // ㄠ
    case "凹":
    case "懊":
    case "傲":
    case "熬":
      return (
        <path
          fill="#e57452"
          d="M42.91,22.16c-.63-.06-1.42-.09-2.35-.09-.71,0-1.39,0-1.93,0C38.09,15.33,32.86,10,26.5,10S14.91,15.33,14.37,22.1c-.49,0-1.1,0-1.76,0-.93,0-1.77,0-2.5.1C4.27,22.65.93,26.32.93,32.23c0,5.15,3.66,9.19,9.1,10.05A106,106,0,0,0,24.6,43c6.77,0,14.13-.28,18.31-.71a10,10,0,0,0,9.16-10.06A9.76,9.76,0,0,0,42.91,22.16Z"
        />
      );

    // ㄡ
    case "歐":
    case "毆":
    case "偶":
    case "嘔":
      return (
        <path
          fill="#e57452"
          d="M42,17.26C42,9.1,34.59,2.47,25.47,2.47A17.59,17.59,0,0,0,15.41,5.55,8.65,8.65,0,0,0,11,13V40a8.5,8.5,0,0,0,3.49,6.78l.23.2a17.74,17.74,0,0,0,10.75,3.57C34.59,50.53,42,43.9,42,35.74a13.82,13.82,0,0,0-3.64-9.24A13.82,13.82,0,0,0,42,17.26Z"
        />
      );

    // ㄢ
    case "安":
    case "按":
    case "案":
    case "岸":
    case "黯":
    case "暗":
      return (
        <path
          fill="#e57452"
          d="M47.42,20.22a8.83,8.83,0,0,0-4.23-2.36V14a7.17,7.17,0,1,0-14.33,0V39a7.17,7.17,0,1,0,14.33,0V35.14a8.88,8.88,0,0,0,4.23-14.92Z"
        />
      );

    // ㄣ
    case "恩":
    case "嗯":
      return (
        <path
          fill="#e57452"
          d="M37.87,33a6.51,6.51,0,0,0,4.48-1.8,7.8,7.8,0,0,0,2.88-6.05V11.43a7.78,7.78,0,0,0-2.88-6,6.52,6.52,0,0,0-4.48-1.81h-23a6.46,6.46,0,1,0,0,12.92H29.47V20H14.91a6.43,6.43,0,0,0-5.6,3.22,7.87,7.87,0,0,0-1.54,4.63V41.57a7.82,7.82,0,0,0,1.55,4.64,6.4,6.4,0,0,0,5.59,3.22h23a6.46,6.46,0,1,0,0-12.92H23.53V33Z"
        />
      );

    // ㄤ
    case "昂":
    case "骯":
    case "盎":
      return (
        <path
          fill="#e57452"
          d="M39.18,17.71l1.33-1a5.7,5.7,0,1,0-7-9l-1.28,1V8.46a5.71,5.71,0,0,0-11.41,0v.22l-1.29-1a5.7,5.7,0,0,0-7,9l1.33,1A18.55,18.55,0,0,0,7.75,31.49a18.75,18.75,0,0,0,37.5,0A18.55,18.55,0,0,0,39.18,17.71Z"
        />
      );

    // 沒有ㄥ
    // ㄦ
    case "而":
    case "兒":
    case "爾":
    case "耳":
    case "二":
      return (
        <path
          fill="#e57452"
          d="M45.86,29.33c-2.43-2.56-7.58-6.24-9.82-7.79L37,20.32a8.88,8.88,0,0,0,1.76-6.84,9.52,9.52,0,0,0-3.67-6,8.65,8.65,0,0,0-5.31-1.81,11.08,11.08,0,0,0-7.7,3.44A129.43,129.43,0,0,0,5.59,30.62c-2.72,4.73-2,10.07,1.83,13a8.84,8.84,0,0,0,5.43,1.78,12.06,12.06,0,0,0,7.58-2.86,22.14,22.14,0,0,0,4.63-6.13c2.1,1.9,6.46,5.7,9.63,7.32a13,13,0,0,0,5.84,1.52A8.27,8.27,0,0,0,47.29,42C50.43,38,49,32.59,45.86,29.33Z"
        />
      );

    // 一
    case "一":
    case "業":
    case "有":
    case "厭":
    case "伊":
    case "疫":
    case "以":
    case "樣":
    case "夜":
    case "幽":
    case "優":
    case "憂":
    case "怡":
    case "要":
    case "淹":
    case "菸":
    case "煙":
    case "嬰":
    case "異":
    case "因":
    case "陰":
    case "音":
    case "眼":
    case "遺":
    case "意":
    case "憶":
    case "友":
    case "藥":
    case "言":
    case "又":
    case "養":
      return (
        <path
          fill="#e57452"
          d="M48.36,21.81A9,9,0,0,0,38.69,8a9.37,9.37,0,0,0-5.46,4.15,26.38,26.38,0,0,0-3,6.57,29.39,29.39,0,0,1-7.51.1,26.47,26.47,0,0,0-3-6.65A9.42,9.42,0,0,0,14.31,8,9,9,0,0,0,4.64,21.81c.76,1.09,2.69,5.93.31,9.06a8.07,8.07,0,0,0-1.52,2.86,9.11,9.11,0,0,0,3.2,9.73,8.94,8.94,0,0,0,6.67,1.76,9.26,9.26,0,0,0,6.17-3.8,23.07,23.07,0,0,0,2.64-4.63,43.44,43.44,0,0,0,8.76,0,23.41,23.41,0,0,0,2.65,4.67,9.28,9.28,0,0,0,6.18,3.81,9,9,0,0,0,6.67-1.76,9.13,9.13,0,0,0,3.21-9.73,8,8,0,0,0-1.51-2.84C45.66,27.76,47.6,22.9,48.36,21.81Z"
        />
      );

    // ㄨ
    case "韋":
    case "危":
    case "瘟":
    case "物":
    case "誤":
    case "王":
    case "亡":
    case "晚":
    case "五":
    case "未":
    case "為":
    case "無":
    case "吳":
    case "蜈":
    case "外":
    case "玩":
    case "娃":
    case "忘":
    case "完":
    case "文":
    case "聞":
    case "網":
    case "望":
      return (
        <path
          fill="#e57452"
          d="M39.71,17.58c1.81-5.85,1.9-10.13.28-12.76a5.86,5.86,0,0,0-4.37-2.71A6.51,6.51,0,0,0,34.55,2C31.67,2,28,3.82,26.24,12c-2.14-7.78-5.7-9.5-8.42-9.5a7.11,7.11,0,0,0-1.5.17,5.78,5.78,0,0,0-4.06,2.89c-1.46,2.63-1.23,6.77.68,12.31a18.21,18.21,0,0,0-7,14.21C5.94,42.49,15.16,51,26.5,51s20.56-8.48,20.56-18.91A18.2,18.2,0,0,0,39.71,17.58Z"
        />
      );

    // ㄩ
    case "語":
    case "雨":
    case "宇":
    case "魚":
    case "予":
    case "遇":
    case "鬱":
    case "源":
    case "園":
    case "原":
    case "員":
    case "遠":
    case "怨":
      return (
        <path
          fill="#e57452"
          d="M48,14.31A10.41,10.41,0,0,0,36.65,9.37a10.39,10.39,0,0,0-19.93-.24A10.39,10.39,0,0,0,6.57,26.28a10.38,10.38,0,0,0,9.76,17.36,10.36,10.36,0,0,0,10,7.56h0a10.38,10.38,0,0,0,9.91-7.32A10.4,10.4,0,0,0,46.43,26.74,10.38,10.38,0,0,0,48,14.31ZM31,26.5A4.49,4.49,0,1,1,26.5,22,4.49,4.49,0,0,1,31,26.5Z"
        />
      );

    // 無
    default:
      return (
        <path
          fill="#e57452"
          d="M41,19.3a8,8,0,0,0-7.69-7.81C32.39,8.32,29.61,5.2,26.5,5.2c-3.54,0-6,3.06-6.78,6.29a8,8,0,0,0-7.67,7.81,12.53,12.53,0,0,0-9,12c0,6.41,4.92,11.78,12.23,13.36a58.85,58.85,0,0,0,11.4,1.11,56.32,56.32,0,0,0,11.19-1.12C45.22,42.78,50,37.54,50,31.33A12.53,12.53,0,0,0,41,19.3Z"
        />
      );
  }
};