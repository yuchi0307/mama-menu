//items
const menu =[
	{
		id: 1,
		title: '麻油腰子',
		category: '配菜',
		img: 'dish1.png',
		desc: '香醇可口、平易近人的麻油菜，麻油腰子是非常好優質的滋養食材，有效幫助產後婦女子宮收縮。'
	},
	{
		id: 2,
		title: '酪梨拼盤',
		category: '早餐',
		img: 'dish2.jpg',
		desc: '爽口酪梨配上當季水果，不僅有繽紛亮眼的配色，還有多變的豐富滋味，原味食物也能很美味。'
	},
	{
		id: 3,
		title: '水煮秋葵',
		category: '配菜',
		img: 'dish3.png',
		desc: '清脆口感配上獨門調製醬汁，保證一口接一口，營養又顧胃，更能幫助消化、穩定血壓呢！'
	},
	{
		id: 4,
		title: '蒜香鮮蝦',
		category: '配菜',
		img: 'dish4.jpg',
		desc: '濃烈蒜香與Q彈鮮蝦熱炒，配飯或者單吃都滿足，注重衛生的秀卿姐會要求把蝦的泥腸清除，讓您吃得放心又滿足。'
	},
	{
		id: 5,
		title: '香煎鮭魚',
		category: '配菜',
		img: 'dish5.jpg',
		desc: '嚴選新鮮肥美鮭魚，用小火慢煎，魚肉軟嫩又香甜，營養價值高，脂肪含量低，食用無負擔。'
	},
	{
		id: 6,
		title: '客製化早餐',
		category: '早餐',
		img: 'dish6.jpg',
		desc: '配合需求調配中西式早餐，也可與秀卿姐討論是否直接購買現有餐點，誰說滋養補身的早餐都很無聊呢？'
	},
	{
		id: 8,
		title: '蒸蛋佐菇',
		category: '配菜',
		img: 'dish8.jpg',
		desc: '日式蒸蛋入口即化，柔嫩口感配上脆脆甜甜的鮮菇，是一道大人小孩都喜愛的經典家庭料理。'
	},
	{
		id: 9,
		title: '鮮蝦蘆筍',
		category: '配菜',
		img: 'dish9.jpg',
		desc: '蘆筍有豐富的維生素E，配上甜美新鮮現剝蝦仁，口感層次再提升，營養價值up！'
	},
	{
		id: 10,
		title: '熱炒時蔬',
		category: '配菜',
		img: 'dish10.png',
		desc: '選用當季蔬菜爆香熱炒，營養均衡又美味，可因個人喜好調整蒜味或者加入枸杞調味。'
	},
	{
		id: 11,
		title: '中藥茶',
		category: '茶飲',
		img: 'dish11.jpg',
		desc: '中藥行嚴選補身養生茶飲，用心熬煮，慢火細煎，強健體質，補氣又補身。'
	}

];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");


// load items
document.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);

});
// 抓所有 item 資料
function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt=${item.title} />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");

  sectionCenter.innerHTML = displayMenu;
}

// filter items
filterBtns.forEach(function(btn){
	btn.addEventListener('click',function(e){
		const category = e.currentTarget.dataset.id; //抓到所屬的分類例如配菜
		//新的陣列 categoryMenu 存放過濾後的item
		const categoryMenu = menu.filter(function(menuItems){
			//console.log(menuItems.category); 測試
			if(menuItems.category === category){
				return menuItems;
			}
		});
		if (category === "全部") {
			return displayMenuItems(menu);//如果按全部，即顯示原本的陣列資料
		}
		else{
			return displayMenuItems(categoryMenu);//如果按其他，就顯示過濾後的資料
		}
	});
});





