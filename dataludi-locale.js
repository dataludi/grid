////////////////////////////////////////////////////////////////////////////////
// dataludi-locale file.
// 2016.12.26, created by dataludi
// ----------------------------------------------------------------------------
// Copyright (C) 2016 DataLudi Inc.
// All Rights Reserved. 
////////////////////////////////////////////////////////////////////////////////

DataLudi.setLocale('ja', {
    year: '年',
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    shortMonths: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    weekDays: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    shortWeekDays: ['日', '月', '火', '水', '木', '金', '土'],

    thousandSep: ',',
    decimalSep: '.',
    dateSep: '/',
    timeSep: ':',

    am: '午前',
    pm: '午後',

    halfs: ['前半期', '後半期'],
    quarters: ['第1四半期', '第2四半期', '第3四半期', '第4四半期'],

    dateFormat: 'yyyy-MM-dd HH:mm:ss',
    shortDateFormat: 'yyyy-MM-dd',
    minuteFormat: 'yyyy-MM-dd HH:mm',
    hourFormat: 'yyyy-MM-dd HH',
    monthFormat: 'yyyy-MM',
    yearFormat: 'yyyy',

    untermintatedExpression: "終結されてない数式です",
    invalidToken: "間違ったtokenです",
    untermintatedString: "終結されてない文字列です",
    unknownOperator: "分別できない演算子です",
    notExpectedTokenKind: "予測していないトークンの種類です",
    invalidIsOperand: "is演算子の被演算子はdefined、null、emptyの中で一つでなければなりません",
    unknownToken: "知られていないトークンです",

    invalidIdentifierToken: "トークンが識別子ではありません",
    invalidIdentifierKey: "間違った識別子キーです",
    invalidIdentifierIndexer: "間違ったインデクサー識別子です",

    invalidDateTimeFormat: "日付の形式が間違っています",
    invalidDateTimeText: "日付の値が間違っています",
    invalidDateTimeOutputFormat: "日付の出力形式が間違っています",
    invalidDateTimeFormat2: "間違った日付形式 - 'H'と'a'が一緒に存在してはいけません",
    invalidDateTimeFormat3: "間違った日付形式 - 'h'があると'a'が必要です",
    invalidDateTimeInputFormat: "日付の入力の形式が間違っています",

    invalidColorText: "間違ったcolorテキストです",
    invalidLinearGradientText: "間違ったlinear gradientテキストです",
    invalidRadialGradientText: "間違ったradial gradientテキストです",
    valueIsRequired: "必ず必要な値です",
    notImplemeted: "まだ具現されていません"
}, {
    dataFieldIndexOutOfBounds: "データフィールドのインデックスが範囲から外れました。",
    valueIndexOutOfBounds: "値のインデックスが範囲から外れました。",

    emptyGridMessage: "ここに表示されるメッセージをDisplayOptions.emptyGridMessageプロパティーで設定します。",
    emptyDataMessage: "データが見つかりません。",

    invalidDerivedFieldType: 'DerivedField는 object 자료형일 수 없습니다.',
    deleteRowsConfirm: '選択された行（達)を削除しますか？',
    sortingToast: "ソーティング中...",
    filteringToast: "フィルタリング...",
    groupingToast: "グルーピング...",
    completeEditing: "まず編集を完了してください。",
    invalidInputFormat: "間違った入力形式です。",
    minLengthRequired: "最少${length}以上の文字が入力されなければなりません。",
    invalidCode128Char: "認識できないcode128の文字です。",
    invalidcode39Char: "認識できないcode39の文字です。"
});

DataLudi.setLocale('zh', {
    year: '年',
    months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    shortMonths: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    weekDays: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    shortWeekDays: ['日', '月', '火', '水', '木', '金', '土'],

    thousandSep: ',',
    decimalSep: '.',
    dateSep: '/',
    timeSep: ':',

    am: '午前',
    pm: '午後',

    halfs: ['上半年', '下半年'],
    quarters: ['第1季度', '第2季度', '第3季度', '第4季度'],

    dateFormat: 'yyyy-MM-dd HH:mm:ss',
    shortDateFormat: 'yyyy-MM-dd',
    minuteFormat: 'yyyy-MM-dd HH:mm',
    hourFormat: 'yyyy-MM-dd HH',
    monthFormat: 'yyyy-MM',
    yearFormat: 'yyyy',

    untermintatedExpression: "表达式未正确结束",
    invalidToken: "记号不正确",
    untermintatedString: "字符串未正确结束",
    unknownOperator: "运算符不正确",
    notExpectedTokenKind: "记号类型不符",
    invalidIsOperand: "is运算符的被运算符必须是defined, null, empty中的一个",
    unknownToken: "记号不正确",

    invalidIdentifierToken: "记号标识符不正确",
    invalidIdentifierKey: "标识符不正确",
    invalidIdentifierIndexer: "序列码标识符不正确",

    invalidDateTimeFormat: "日期格式不正确",
    invalidDateTimeText: "日期值不正确",
    invalidDateTimeOutputFormat: "日期输出格式不正确",
    invalidDateTimeFormat2: "日期格式不正确 - 'H'和'a'不能同时存在",
    invalidDateTimeFormat3: "日期格式不正确 - 'h'存在时'a'必须要存在",
    invalidDateTimeInputFormat: "日期输入格式不正确",

    invalidColorText: "颜色名不正确",
    invalidLinearGradientText: "线形梯度名不正确",
    invalidRadialGradientText: "放射形梯度名不正确",
    valueIsRequired: "此值是必输值",
    notImplemeted: "还没有实现"
}, {
    dataFieldIndexOutOfBounds: "数据字段的序号超出了范围",
    valueIndexOutOfBounds: "值序号超出了范围",

    emptyGridMessage: "此处展示信息用DisplayOptions.emptyGridMessage属性设置",
    emptyDataMessage: "数据无法查到",

    invalidDerivedFieldType: 'DerivedField不能是object数据类型',
    deleteRowsConfirm: '确定删除选中行吗？',
    sortingToast: "排列中...",
    filteringToast: "筛选中...",
    groupingToast: "分组中...",
    completeEditing: "请先完成编辑",
    invalidInputFormat: "输入格式不正确",
    minLengthRequired: "请输入最小${length}位字符",
    invalidCode128Char: "无法识别code128文字",
    invalidcode39Char: "无法识别code39文字"
});
DataLudi.resetLanguage();