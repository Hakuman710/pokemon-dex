// data.js - 你的宝可梦评分数据
const pokemonList = [
  {
    name: '狐大盗（闪光）',
    types: ['恶'], 
    preference: '输出',           // 偏好：输出/肉盾/辅助/全能
    envScore: 7.5,                  // 环境评分 0-10
    abilityScore: 9.5,              // 特性评分 0-10
    raceScore: 7.5,                 // 有效种族评分 0-10
    movepoolScore: 8,             // 技能池评分 0-10
    // 总分自动计算，不需要手动写
    description: '蹲守加高能恶爪超暴力输出，速度种族值压线100刚好及格，有妖毒恶等较为不错的打击面以及虫反等灵活中转技能，可惜本身恶系被版本热门的妖压一头',  // 评分解释
    imageUrl: 'images/hdd.jpg'    // 图片路径，可用网络图片如 'https://...'
  },
  {
    name: '喷火龙',
    types: ['火', '飞'], 
    preference: '输出',
    envScore: 7,
    abilityScore: 9,
    raceScore: 7.5,
    movepoolScore: 7,
    description: '晴天太阳能量有着全星星杯数一数二的输出，101速度线能压制大部分的100速度线输出手，但本身身板较脆，且输出极度依赖天气',
    imageUrl: 'images/phl.jpg'
  },
  {
    name: '盖诺赛克特',
    types: ['钢', '虫'], 
    preference: '输出',
    envScore: 7.5,
    abilityScore: 6,
    raceScore: 7.5,
    movepoolScore: 8,
    description: '卡带的存在让虫神具有十分良好的环境打击面，具有破坏技术与百万虫鸣两大高威力技能，但特性加攻的不稳定性是一大败笔',
    imageUrl: 'images/gnskt.jpg'
  },
  {
    name: '重泥挽马',
    types: ['地'], 
    preference: '全能',
    envScore: 9,
    abilityScore: 10,
    raceScore: 8,
    movepoolScore: 7,
    description: '环境破坏者之一，超模特性让泥马双防种族值一般的情况下具有超乎寻常的肉度，特性的增伤让泥马兼具坦度的同时还有不俗的输出，可惜仅有睡觉一个回复技能',
    imageUrl: 'images/znwm.jpg'
  },
  {
    name: '重摇滚皮卡丘',
    types: ['钢', '电'], 
    preference: '输出',
    envScore: 8,
    abilityScore: 9,
    raceScore: 8.5,
    movepoolScore: 7,
    description: '电气皮肤爆音波随手一A就是95%精灵看不懂的伤害，拥有超一线的速度以及双刀能力，可惜仅有电系高威力打击面，极其容易被针对',
    imageUrl: 'images/zygpkq.jpg'
  },
  {
    name: '葱游兵大葱鸭',
    types: ['毒', '飞'], 
    preference: '输出',
    envScore: 7.5,
    abilityScore: 9,
    raceScore: 8,
    movepoolScore: 8.5,
    description: '技能必中以及穿透替守的特性，让葱油饼有很强的环境对策性，120+的速度线也领先一众脆皮输出手，拥有飞格钢冰等多个打击面',
    imageUrl: 'images/cybdcy.jpg'
  },
  {
    name: '土王',
    types: ['毒', '地'], 
    preference: '肉盾',
    envScore: 9,
    abilityScore: 8,
    raceScore: 8.5,
    movepoolScore: 9.5,
    description: '雨天队大爹，储水加墨镜让大部分雨天输出手对此束手无策，有碉堡、保护冲撞等防御性技能以及毒钉、放狠话等辅助技能代表',
    imageUrl: 'images/tw.jpg'
  },
  {
    name: '卡璞哞哞',
    types: ['妖', '草'], 
    preference: '输出',
    envScore: 7.5,// 环境评分 0-10
    abilityScore: 7,// 特性评分 0-10
    raceScore: 9,// 有效种族评分 0-10
    movepoolScore: 7.5,// 技能池评分 0-10
    description: '奇迹藤蔓的存在让哞哞具有不错的输出同时还有超强的续航，可惜技能池稍浅，且没有一个合格的妖本，草妖的抗性也相当有限',
    imageUrl: 'images/kpmm.jpg'
  },
  {
    name: '甲贺忍蛙',
    types: ['恶', '水'], 
    preference: '输出',
    envScore: 8,// 环境评分 0-10
    abilityScore: 8,// 特性评分 0-10
    raceScore: 8,// 有效种族评分 0-10
    movepoolScore: 9.5,// 技能池评分 0-10
    description: '环境适应者，不俗的速度线以及超强的技能池让忍蛙在绝大多数局面都能有不错的发挥，可惜卷轴被ban导致环境针对能力大幅下降',
    imageUrl: 'images/jhrw.jpg'
  },
  {
    name: '玛机雅娜',
    types: ['妖', '钢'], 
    preference: '全能',
    envScore: 8,// 环境评分 0-10
    abilityScore: 8.5,// 特性评分 0-10
    raceScore: 8.5,// 有效种族评分 0-10
    movepoolScore: 9,// 技能池评分 0-10
    description: '具有后知后觉和钢能力者两个强力，钢妖抗性打击面良好，进具备众多大威力输出技能，退后知后觉三级头，还能开骗术中转辅助队伍，全能精灵之一',
    imageUrl: 'images/mjyn.jpg'
  }
];