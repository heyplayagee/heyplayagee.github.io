// Javascript "class" - to create tapioca objects
function Tapioca(date, establishment, drink, addressShort, addressLong, image, description) {
  this.date = date;
  this.establishment = establishment;
  this.drink = drink;
  this.addressShort = addressShort;
  this.addressLong = addressLong;
  this.image = image;
  this.description = description;
}

// Take .csv file of tapioca and parse the data similar to Master Pixel property addition
// 1. Import .csv file to var
var csvTap = "tapiocount_sheet";
// 2. Create new tapioca object and add to tapiocount
// for(var i=0; i<csvTap.length; i++){
// 	//delimiter is comma ,
// 	tapiocount[i] = (csvTap[i][0],csvTap[i][1],csvTap[i][2],csvTap[i][3],csvTap[i][4],csvTap[i][5],csvTap[i][6]);
// }

var jsonData = [
  {
     "date":"Date"
    ,"establishment":"Establishment"
    ,"drink":"Drink"
    ,"addressShort":"Short Address"
    ,"image1":"Image"
    ,"image2":"Image 2"
    ,"addressLong":"Map Address"
  },
  {
     "date":"1/1/17"
    ,"establishment":"Purple Kow"
    ,"drink":"Jasmine milk tea"
    ,"addressShort":"SF"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"1/21/17"
    ,"establishment":"85 Degrees"
    ,"drink":"Black tea"
    ,"addressShort":"Daly City, CA"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"1/21/17"
    ,"establishment":"TeaOne"
    ,"drink":"Okinawa milk tea"
    ,"addressShort":"SF"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"1/27/17"
    ,"establishment":"Teaspoon"
    ,"drink":"Rose milk tea"
    ,"addressShort":"SF"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"2/3/17"
    ,"establishment":"Cassava Cafe"
    ,"drink":"Earl grey milk tea"
    ,"addressShort":"Chicago, IL"
    ,"image1":"https://farm5.staticflickr.com/4588/38336346285_9bd11eaa6e_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4646/27436514369_92a0d57144_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"2/4/17"
    ,"establishment":"Kung Fu Tea"
    ,"drink":"Black milk tea"
    ,"addressShort":"Evanston, IL"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"2/4/17"
    ,"establishment":"i-Tea"
    ,"drink":"Oriental Beauty"
    ,"addressShort":"SF (Sunset)"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"2/8/17"
    ,"establishment":"Sharetea"
    ,"drink":"Black milk tea"
    ,"addressShort":"SF (Metreon)"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"2/13/17"
    ,"establishment":"Stir it Up"
    ,"drink":"Jasmine milk tea"
    ,"addressShort":"Wailuku, Maui, HI"
    ,"image1":"https://farm5.staticflickr.com/4739/38505051634_17c970eb1a_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"2/18/17"
    ,"establishment":"i-Tea"
    ,"drink":"Jasmine green milk tea"
    ,"addressShort":"SF (Sunset)"
    ,"image1":"https://farm5.staticflickr.com/4685/38505045874_fd8500fff2_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"2/25/17"
    ,"establishment":"Aqua Club Dessert & Beverage"
    ,"drink":"Matcha red bean milk tea"
    ,"addressShort":"San Bruno, CA"
    ,"image1":"https://farm5.staticflickr.com/4691/38505051364_e9fd2b3e46_n.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"3/4/17"
    ,"establishment":"Teaspoon"
    ,"drink":"Earl grey milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4633/38505051054_b397738c38_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4681/38336346175_9c2175e688_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"3/10/17"
    ,"establishment":"Thirst-tea"
    ,"drink":"Black milk tea"
    ,"addressShort":"Omaha, NE"
    ,"image1":"https://farm5.staticflickr.com/4726/38505045754_03e1cc782b_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"3/11/17"
    ,"establishment":"Teaspoon"
    ,"drink":"Japanese rice milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4591/27436513809_f06ce3b5d5_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"3/12/17"
    ,"establishment":"Bubbles"
    ,"drink":"Roast sencha milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4639/38505050864_389229162b_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"3/18/17"
    ,"establishment":"TFM"
    ,"drink":"Rose milk tea"
    ,"addressShort":"SF (Stonestown)"
    ,"image1":"https://farm5.staticflickr.com/4681/27436513619_40a1355729_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"3/19/17"
    ,"establishment":"Pekoe"
    ,"drink":"Pekoe special (earl grey milk tea w/ grass jelly and tapioca)"
    ,"addressShort":"San Jose, CA"
    ,"image1":"https://farm5.staticflickr.com/4587/38505045714_d1b7224577_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4690/38505050724_824cf0e69c_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"3/23/17"
    ,"establishment":"Tbaar"
    ,"drink":"Black milk tea"
    ,"addressShort":"Las Vegas, NV"
    ,"image1":"https://farm5.staticflickr.com/4686/38506601594_d7f4b2474e_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4637/24351971527_f0b4850bb4_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"4/4/17"
    ,"establishment":"Asha Tea House"
    ,"drink":"Iced matcha latte"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4693/27436513349_424db03085_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"4/7/17"
    ,"establishment":"i-Tea"
    ,"drink":"Black milk tea"
    ,"addressShort":"Newark, CA"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"4/9/17"
    ,"establishment":"Cha Express"
    ,"drink":"Handmade black rice milk tea"
    ,"addressShort":"San Mateo, CA"
    ,"image1":"https://farm5.staticflickr.com/4733/38336345995_cfe7feff10_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4727/27436513189_def858b678_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"4/10/17"
    ,"establishment":"Sharetea"
    ,"drink":"Honey green tea"
    ,"addressShort":"SF (Metreon)"
    ,"image1":"https://farm5.staticflickr.com/4680/38505045644_81081e0fd8_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4595/27436513069_4d74fb90d6_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"4/11/17"
    ,"establishment":"Home Plate Boba"
    ,"drink":"Thai milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4681/24352054427_13004ca608_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"4/21/17"
    ,"establishment":"T4"
    ,"drink":"Earl Grey milk tea"
    ,"addressShort":"Millbrae, CA"
    ,"image1":"https://farm5.staticflickr.com/4739/38505050194_7eee884eb3_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"4/23/17"
    ,"establishment":"Boba Guys"
    ,"drink":"Matcha latte"
    ,"addressShort":"SF (Fillmore)"
    ,"image1":"https://farm5.staticflickr.com/4587/38505050084_6e4e582c52_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"4/29/17"
    ,"establishment":"Sencha Tea Bar"
    ,"drink":"Silver Needles (black tea)"
    ,"addressShort":"Bloomington, MN"
    ,"image1":"https://farm5.staticflickr.com/4729/38505050004_bcc14ca9b9_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4735/27436512779_e51f5abc3f_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"4/30/17"
    ,"establishment":"Eggettes"
    ,"drink":"Jasmine milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4692/24352056737_7cd30c9295_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"5/15/17"
    ,"establishment":"Thirst-Tea"
    ,"drink":"Black milk tea"
    ,"addressShort":"Omaha, NE"
    ,"image1":"https://farm5.staticflickr.com/4735/24352057277_8c56bacd84_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4589/24352055527_e1cfe74331_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"5/22/17"
    ,"establishment":"Wonderful Foods Co."
    ,"drink":"Green milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4690/38505045524_405e2904a9_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"5/25/17"
    ,"establishment":"7-Eleven"
    ,"drink":"Emial milk tea"
    ,"addressShort":"Tokyo, Japan (Akihabara)"
    ,"image1":"https://farm5.staticflickr.com/4646/39186409572_cedbae96e5_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"5/26/17"
    ,"establishment":"Santa Monica Crepes"
    ,"drink":"Matcha milk tea"
    ,"addressShort":"Tokyo, Japan (Harajuku)"
    ,"image1":"https://farm5.staticflickr.com/4643/39186409562_8ba382135d_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"6/4/17"
    ,"establishment":"Bubble Market"
    ,"drink":"Matcha milk tea"
    ,"addressShort":"Kyoto, Japan (Teramachi)"
    ,"image1":"https://farm5.staticflickr.com/4634/39186409382_cf83fcdde1_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"6/5/17"
    ,"establishment":"i-Tea"
    ,"drink":"Oriental Beauty"
    ,"addressShort":"SF (Sunset)"
    ,"image1":"https://farm5.staticflickr.com/4600/38336345645_3799d0e21b_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"6/5/17"
    ,"establishment":"Purple Kow"
    ,"drink":"Purplekow iced tea (black tea)"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4685/38336349835_b49635a716_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"6/11/17"
    ,"establishment":"Infinitea"
    ,"drink":"Earl grey milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4636/38505049454_722fe7536b_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"6/13/17"
    ,"establishment":"Plentea"
    ,"drink":"Thai milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4735/38505049364_b61e6953e2_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"6/15/17"
    ,"establishment":"Eggettes"
    ,"drink":"Honey green tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4591/38505049224_afc79abbb0_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4587/38336349605_4b61b6a6bc_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"6/16/17"
    ,"establishment":"i-Tea"
    ,"drink":"Brown rice milk tea"
    ,"addressShort":"SF (Sunset)"
    ,"image1":"https://farm5.staticflickr.com/4684/38505049284_1f3a99f822_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"6/18/17"
    ,"establishment":"i-Tea"
    ,"drink":"Fresh taro milk tea"
    ,"addressShort":"SF (Sunset)"
    ,"image1":"https://farm5.staticflickr.com/4597/38505045394_f9b3541243_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"6/28/17"
    ,"establishment":"TeaOne"
    ,"drink":"Jade pearl milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4733/38505049094_0792b162da_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"7/2/17"
    ,"establishment":"i-Tea"
    ,"drink":"Brown rice milk tea"
    ,"addressShort":"SF (Sunset)"
    ,"image1":"https://farm5.staticflickr.com/4646/38336349355_47aa904c25_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4639/38336345455_aa57ef8194_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"7/3/17"
    ,"establishment":"Wonderful Foods Co."
    ,"drink":"Green bean tapioca"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4643/38505048954_41eddbf209_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"7/4/17"
    ,"establishment":"i-Tea"
    ,"drink":"Matcha milk tea"
    ,"addressShort":"San Jose, CA"
    ,"image1":"https://farm5.staticflickr.com/4683/38505045264_2e545b1789_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4639/38336349215_14d8c01102_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"7/8/17"
    ,"establishment":"Cha Express"
    ,"drink":"Handmade black rice milk tea"
    ,"addressShort":"San Mateo, CA"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"7/10/17"
    ,"establishment":"i-Tea"
    ,"drink":"Oriental Beauty"
    ,"addressShort":"SF (Sunset)"
    ,"image1":"https://farm5.staticflickr.com/4595/38336349115_2b2f944568_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4645/38505048784_278b4122c4_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"7/11/17"
    ,"establishment":"Sweethut"
    ,"drink":"Red bean tapioca"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4596/38336345395_d39ee5fc83_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"7/13/17"
    ,"establishment":"Little Sweet"
    ,"drink":"Tin guan yin milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4734/38336348975_39c6d5337b_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4593/38336348845_38ab419a6c_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"7/14/17"
    ,"establishment":"Gosu"
    ,"drink":"Something Just Like This "
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4680/38505048224_afabb864ea_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4642/38505045254_f445613a12_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"7/16/17"
    ,"establishment":"Tea Era"
    ,"drink":"Iron Buddha milk tea"
    ,"addressShort":"Mountain View, CA"
    ,"image1":"https://farm5.staticflickr.com/4727/38505048124_b8b94dd6f2_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4727/38336348735_9a83218ffc_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"7/18/17"
    ,"establishment":"Plentea"
    ,"drink":"Matcha latte"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4734/38336345195_8d2509d120_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"7/20/17"
    ,"establishment":"Asha Tea House"
    ,"drink":"Matcha latte"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4735/38336348635_b4f6378915_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"7/24/17"
    ,"establishment":"Little Sweet"
    ,"drink":"Roast milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4727/38505047814_8f4889a723_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4600/38336348455_0f5c85df3a_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"7/29/17"
    ,"establishment":"U Cha"
    ,"drink":"Okinawa milk tea "
    ,"addressShort":"Berkeley, CA"
    ,"image1":"https://farm5.staticflickr.com/4688/38505045154_004d5a325d_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"8/4/17"
    ,"establishment":"Twinkle Brown Sugar"
    ,"drink":"Brown sugar milk tea"
    ,"addressShort":"Los Angeles, CA"
    ,"image1":"https://farm5.staticflickr.com/4593/38505047704_0ee03b1a97_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"8/4/17"
    ,"establishment":"Snow Monster"
    ,"drink":"Jasmine milk tea"
    ,"addressShort":"Los Angeles, CA (Koreatown)"
    ,"image1":"https://farm5.staticflickr.com/4638/38336348275_f02bb482cd_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"8/6/17"
    ,"establishment":"7Leaves"
    ,"drink":"Mung bean milk tea"
    ,"addressShort":"Westminster, CA"
    ,"image1":"https://farm5.staticflickr.com/4633/38336344965_29c34ee31b_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"8/7/17"
    ,"establishment":"Milkbox"
    ,"drink":"Earl Grey lavender "
    ,"addressShort":"Irvine, CA"
    ,"image1":"https://farm5.staticflickr.com/4596/38505047624_673b4b232b_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"8/10/17"
    ,"establishment":"Asha Tea House"
    ,"drink":"Iced matcha latte "
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4646/38505045094_1998f126f2_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4683/38505047524_39aac506a0_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"8/13/17"
    ,"establishment":"Little Sweet"
    ,"drink":"Roast milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4638/38505047354_344440c92b_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"8/15/17"
    ,"establishment":"i-Tea"
    ,"drink":"Earl grey milk tea"
    ,"addressShort":"SF (FiDi)"
    ,"image1":"https://farm5.staticflickr.com/4732/38336344805_0be9652969_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4689/38336347745_4619bfea14_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"8/16/17"
    ,"establishment":"Sno-Crave"
    ,"drink":"Jasmine milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4634/24352183527_62be1eeb12_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"8/25/17"
    ,"establishment":"Plentea"
    ,"drink":"Jasmine green tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4644/38505047194_92ffbe9c18_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4587/38336347635_939e3e4f37_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"8/26/17"
    ,"establishment":"Little Sweet"
    ,"drink":"Roast milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4588/38505047154_405fedc08e_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"9/5/17"
    ,"establishment":"Sweethut"
    ,"drink":"Jasmine green tea"
    ,"addressShort":"SF"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"9/6/17"
    ,"establishment":"i-Tea"
    ,"drink":"3G milk tea (tapioca, grass jelly, pudding)"
    ,"addressShort":"SF (Sunset)"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"9/7/17"
    ,"establishment":"Ramen Bar"
    ,"drink":"Jasmine milk tea"
    ,"addressShort":"SF"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"9/10/17"
    ,"establishment":"E Tea"
    ,"drink":"Oolong milk tea"
    ,"addressShort":"SF (Richmond)"
    ,"image1":"https://farm5.staticflickr.com/4685/38507098624_f1d2cfaf30_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"9/11/17"
    ,"establishment":"i-Tea"
    ,"drink":"Jinxuan tea"
    ,"addressShort":"SF (Kearny)"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"9/15/17"
    ,"establishment":"Hanlin Tea House"
    ,"drink":"Mango green tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4600/38338718405_06ae8d1c1b_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"9/16/17"
    ,"establishment":"Sharetea"
    ,"drink":"Green milk tea"
    ,"addressShort":"N/A (catered)"
    ,"image1":"https://farm5.staticflickr.com/4682/38338723345_96be6d2db7_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4593/38338723115_2c783b57e7_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"9/17/17"
    ,"establishment":"Home Plate Boba"
    ,"drink":"Black milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4593/24352701347_4093468364_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4727/38507099684_b6d2140c63_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"9/18/17"
    ,"establishment":"T4"
    ,"drink":"Watermelon freeze"
    ,"addressShort":"Millbrae, CA"
    ,"image1":"https://farm5.staticflickr.com/4598/39186899852_065153baaf_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"9/21/17"
    ,"establishment":"Mr. and Mrs. Tea House"
    ,"drink":"Black tea sea salt creama"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4646/38338705005_66068ff373_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"9/22/17"
    ,"establishment":"Thainery Restaurant"
    ,"drink":"Thai iced tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4686/39186901042_fd6021d227_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"9/23/17"
    ,"establishment":"TJ Cups"
    ,"drink":"Genmaicha milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4681/38338735995_53cedb45fa_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4726/38338736095_0e603c90e7_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"9/24/17"
    ,"establishment":"Teaspoon"
    ,"drink":"Rooibos milk tea"
    ,"addressShort":"San Jose, CA"
    ,"image1":"https://farm5.staticflickr.com/4596/38338741175_69970166e8_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"9/28/17"
    ,"establishment":"Sharetea"
    ,"drink":"Matcha milk tea"
    ,"addressShort":"Santa Clara, CA"
    ,"image1":"https://farm5.staticflickr.com/4644/39214658371_078d8d7069_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4645/39214656741_86a5acaa38_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"10/1/17"
    ,"establishment":"MoSa"
    ,"drink":"Classic (black) milk tea"
    ,"addressShort":"Dublin, Ireland"
    ,"image1":"https://farm5.staticflickr.com/4633/39214663281_fa5a909b1d_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"10/8/17"
    ,"establishment":"Chatime"
    ,"drink":"Oolong milk tea"
    ,"addressShort":"Paris, France"
    ,"image1":"https://farm5.staticflickr.com/4738/24352738387_25100a26c5_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"10/9/17"
    ,"establishment":"BobaJam"
    ,"drink":"Classic black milk tea"
    ,"addressShort":"London, England"
    ,"image1":"https://farm5.staticflickr.com/4728/24352751077_f0734e698c_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"10/10/17"
    ,"establishment":"Cuppacha"
    ,"drink":"Jasmine green milk tea"
    ,"addressShort":"London, England"
    ,"image1":"https://farm5.staticflickr.com/4588/24352741677_36f0ae3e00_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"10/13/17"
    ,"establishment":"i-Tea"
    ,"drink":"Roasted oolong milk tea"
    ,"addressShort":"SF (Sunset)"
    ,"image1":"https://farm5.staticflickr.com/4633/24352745557_3568990c59_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"10/15/17"
    ,"establishment":"Happy Lemon"
    ,"drink":"Black tea with salted cheese"
    ,"addressShort":"Burlingame, CA"
    ,"image1":"https://farm5.staticflickr.com/4727/24352748297_ef46e3a746_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"10/16/17"
    ,"establishment":"i-Tea"
    ,"drink":"Earl grey milk tea"
    ,"addressShort":"SF (Kearny)"
    ,"image1":"https://farm5.staticflickr.com/4588/25348928978_8d91ce4f09_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"10/22/17"
    ,"establishment":"Wonderful Foods Co."
    ,"drink":"Watermelon juice"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4634/25348935088_42f77e95e4_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4590/38507146304_b2fab7f48c_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"10/23/17"
    ,"establishment":"Plentea"
    ,"drink":"Roasted oolong milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4641/38507148174_0e6119ea5c_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4588/25348936698_94fea95bb1_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"10/28/17"
    ,"establishment":"Boba Guys"
    ,"drink":"Matchata (matcha and horchata)"
    ,"addressShort":"SF (Fillmore)"
    ,"image1":"https://farm5.staticflickr.com/4733/25348938078_98f5e355fc_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"10/29/17"
    ,"establishment":"Tastea"
    ,"drink":"Bootea Shaker (mango, peach, & pineapple tea with black jelly)"
    ,"addressShort":"San Jose, CA"
    ,"image1":"https://farm5.staticflickr.com/4730/38507169604_995584eb0a_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4681/25348949848_b5091d9815_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"11/2/17"
    ,"establishment":"Little Sweet"
    ,"drink":"Creamy high mountain tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4693/38507175094_2c193f6398_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"11/4/17"
    ,"establishment":"Infinitea"
    ,"drink":"Green milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4738/24352780527_d5cc4bc5c0_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"11/10/17"
    ,"establishment":"Sweetheart Cafe"
    ,"drink":"Roasted milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4690/24350573407_ed6dd089b3_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"11/18/17"
    ,"establishment":"Teaspoon"
    ,"drink":"Oolong tea creama"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4636/38505046894_a575eb223e_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"11/20/17"
    ,"establishment":"Steap"
    ,"drink":"Oolong milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4640/38505045004_103c5aff52_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4738/38336347345_0697de2728_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"11/21/17"
    ,"establishment":"Steap"
    ,"drink":"Taro milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4725/38505046704_9aa28c7729_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"11/23/17"
    ,"establishment":"Wonderful Foods Co."
    ,"drink":"Green milk tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4730/38505046634_510fc50533_z.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"11/24/17"
    ,"establishment":"Sharetea"
    ,"drink":"Oolong tea creama"
    ,"addressShort":"SF (Metreon)"
    ,"image1":"https://farm5.staticflickr.com/4735/24350573357_2a796d15af_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4647/38505046574_a3be875bba_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"11/25/17"
    ,"establishment":"Happy Lemon"
    ,"drink":"Matcha latte"
    ,"addressShort":"Fremont, CA"
    ,"image1":"https://farm5.staticflickr.com/4599/38505046474_cb18d85b59_b.jpg"
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"12/2/17"
    ,"establishment":"i-Tea"
    ,"drink":"Alishan high mountain tea kreama"
    ,"addressShort":"Burlingame, CA"
    ,"image1":"https://farm5.staticflickr.com/4685/38336346895_acf55f5d53_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4592/38505046284_4e2beaa50e_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"12/3/17"
    ,"establishment":"Super Cue"
    ,"drink":"Jasmine milk tea (hot)"
    ,"addressShort":"SF (Ocean)"
    ,"image1":"https://farm5.staticflickr.com/4730/38336346675_0942fecbe7_b.jpg"
    ,"image2":"https://farm5.staticflickr.com/4731/24350573327_1f78c01bb3_b.jpg"
    ,"addressLong":""
  },
  {
     "date":"12/6/17"
    ,"establishment":"Plentea"
    ,"drink":"Honey lime jasmine tea"
    ,"addressShort":"SF"
    ,"image1":""
    ,"image2":""
    ,"addressLong":""
  },
  {
     "date":"12/15/17"
    ,"establishment":"Plentea"
    ,"drink":"Honey lime jasmine tea"
    ,"addressShort":"SF"
    ,"image1":"https://farm5.staticflickr.com/4639/27436514459_f5a45ec0bc_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4598/38505049594_8fd880db21_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"12/16/17"
    ,"establishment":"Comebuy"
    ,"drink":"Taiwan roasted oolong green tea"
    ,"addressShort":"Redwood City, CA"
    ,"image1":"https://farm5.staticflickr.com/4681/38336346495_31b2f1a76a_z.jpg"
    ,"image2":"https://farm5.staticflickr.com/4691/38505046034_39d1948665_z.jpg"
    ,"addressLong":""
  },
  {
     "date":"12/19/17"
    ,"establishment":"i-Tea"
    ,"drink":"Honey brown rice milk tea"
    ,"addressShort":"SF (Sunset)"
    ,"image1":"https://farm5.staticflickr.com/4679/38336344555_06e1ed7806_z.jpg"
    ,"image2":""
    ,"addressLong":""
  }];

// A list of all tapioca drank this year
var tapiocount = [
    // Each of these lines of code makes a new Tapioca record from the Tapioca class
    //  Tapioca(YYYY-MM-DD, establishment, drink, addressShort, addressLong, image, description)
    ];
for(var i=0; i < jsonData.length-80; i++){
  var newTap = new Tapioca();
  newTap = jsonData[i];
  console.log(newTap);
  tapiocount.push(newTap);      
}
/* showTapiocount
    Populates the movies div with each individual movie
    Input: An array of Movie objects
    */
    function showTapiocount(tap) {
    $("#tapiogallery").empty(); // A jQuery method which clears the div
    for(var i=0; i<tap.length; i++) {
    	// Create a new row for every 2nd tapioca image
      if(i%2==0) {
        $("#tapiogallery").append("<div class='row'></div>");
      }
        // Display
        // Uses tapiocount[i] attributes so that each cell has unique data
        var tapiocountHTML = "<div>" +
        "<img style='max-width:200px' class='tapiocaImage' src='" + tap[i]['image'] + "' />" +
        "<h3 class='moviename'>" + tap[i]['date'] + " - " + tap[i]['establishment'] + "</h3>" +
            "<a href='" + tap[i]['addressLong'] + "'><p class='description'>" + tap[i]['addressShort'] + "</p></a>"; //*****Need to add maps address

        // Adds the HTML to the last cell in the gallery div
        $(" #tapiogallery .row:last-child").append(tapiocountHTML); 

        if(i%3==2) { $("#tapiogallery").append("</div>"); } //closes row div
      }
    }

/* sortButtonClicked
    Calls appropriate sort method based on which link was clicked and
        repopulates movie grid.
    Input: String representing which button was clicked on

    */
    function sortButtonClicked(option) {
      switch(option){
        case "date_asc": 
        sortByDateAsc(tapiocount);
        break;
        case "date_desc":
        sortByDateDesc(tapiocount);
        break;
        case "location":
        sortByLocationAlphabetical(tapiocount);
        break;
        case "shuffle":
        shuffle(tapiocount);
        break;
      }; 
      showTapiocount(tapiocount);
    }

/* shuffle
   Input: Array
   Output: Shuffled array
   Function courtesy of http://jsfromhell.com/array/shuffle
   */
   function shuffle(o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
      return o;
  }

/*** 
  sortByDateAsc(tap)
    Input: list of drink objects.
    Output: list of drinks sorted by date ascending (choronological)
    Algorithm: Insertion Sort
    ***/
    function sortByDateAsc(tap) {
      var i=1, j, tmp;
      while (i < tap.length){
        tmp = tap[i];
        j = i-1;
        while(j >= 0 && tap[j]['date'] > tmp['date']){
          tap[j+1] = tap[j];
          j--;
        }
        tap[j+1] = tmp;
        i++;
      }
      console.log(tap);
      return tap;
    }

/*** 
  sortByDateDesc(tap)
    Input: list of drink objects.
    Output: list of drinks sorted by date descending (most recent)
    Algorithm: Insertion Sort
    ***/
    function sortByDateDesc(tap) {
      var i=1, j, tmp;
      while (i < tap.length){
        tmp = tap[i];
        j = i-1;
        while(j >= 0 && tap[j]['date'] < tmp['date']){
          tap[j+1] = tap[j];
          j--;
        }
        tap[j+1] = tmp;
        i++;
      }
      return tap;
    }

/*** 
  sortByLocationAlphabetical(tap)
    Input: list of drink objects.
    Output: list of drink objects after they have been sorted by location (A-Z)
    Algorithm: Insertion Sort
  ***/

  function sortByLocationAlphabetical(tap) {
    var i=1, j, tmp;
    while (i < tap.length){
      tmp = tap[i];
      j = i-1;
      while(j >= 0 && tap[j]['establishment'].toLowerCase() > tmp['establishment'].toLowerCase()){
        tap[j+1] = tap[j];
        j--;
      }
      tap[j+1] = tmp;
      i++;
    }
    return tap;
  }

// Run after page loads
$(document).ready(function () {
  shuffle(tapiocount);
  showTapiocount(tapiocount);
});
