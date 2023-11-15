import { PreviewIntro, PreviewQuestion } from "@sphinx-immer/op-preview";

const App = () => {
	return (
		<PreviewIntro
			data={{
				id: "1",
				title: "Khảo sát Mức độ hài lòng của Khách hàng đối với MoMo!",
				description:
					"Nhầm đem lại trải nghiệm sản phẩm tốt nhất đến khách hàng, Mời Quý Anh/ Chị tham gia đánh giá và đóng góp ý kiến cho những cải tiến về ứng dụng và ý tưởng cho MoMo. Mọi phản hồi của Quý Anh/ Chị đều hết sức quý giá đối với chúng tôi và sẽ được bảo mật hoàn toàn, chỉ nhằm mục đích thống kê.",
				welcomePage: {
					title: "1",
					gift: "10.000VNĐ",
					giftInfo: "",
					dateStart: 1699414327,
					dateEnd: 1699414327,
					templateCode: "001",
				},
			}}
		/>
	);

	// return (
	//     <PreviewQuestion
	//         data={{
	//             id: '1',
	//             format: 'QUESTION',
	//             questionType: 'OPEN_ENDED',
	//             mediaType: 'NONE',
	//             title: 'Vui lòng cho biết số điện thoại đăng ký ví MoMo của bạn? ',
	//             description: 'Số điện thoại MoMo nhận được thông báo mời tham gia khảo sát',
	//             dragRankingStartLabel: '0',
	//             dragRankingEndLabel: '0',
	//             required: true,
	//             randomizeOption: false,
	//             options: [],
	//         }}
	//     />
	// );
};

export default App;

// [
//     {
//         "id": "1",
//         "format": "QUESTION",
//         "questionType": "OPEN_ENDED",
//         "mediaType": "NONE",
//         "title": "Vui lòng cho biết số điện thoại đăng ký ví MoMo của bạn? ",
//         "description": "Số điện thoại MoMo nhận được thông báo mời tham gia khảo sát",
//         "dragRankingStartLabel": "0",
//         "dragRankingEndLabel": "0",
//         "required": true,
//         "randomizeOption": false,
//         "options": []
//     },
//     {
//         "id": "2",
//         "format": "QUESTION",
//         "questionType": "DROPDOWN",
//         "mediaType": "NONE",
//         "title": "Bạn đang sinh sống ở khu vực nào sau đây?\t\t\t\t\t\t\t",
//         "description": "Chỉ chọn 1 đáp án duy nhất",
//         "dragRankingStartLabel": "0",
//         "dragRankingEndLabel": "0",
//         "required": true,
//         "randomizeOption": false,
//         "options": [
//             {
//                 "id": "1",
//                 "value": "Hồ Chí Minh\t\t\t\t\t\t",
//                 "priority": 0,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "2",
//                 "value": "Hà Nội\t\t\t\t\t\t",
//                 "priority": 1,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "74",
//                 "value": "An Giang",
//                 "priority": 2,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "75",
//                 "value": "Bà Rịa-Vũng Tàu",
//                 "priority": 3,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "76",
//                 "value": "Bắc Giang",
//                 "priority": 4,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "77",
//                 "value": "Bắc Kạn",
//                 "priority": 5,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "78",
//                 "value": "Bạc Liêu",
//                 "priority": 6,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "79",
//                 "value": "Bắc Ninh",
//                 "priority": 7,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "80",
//                 "value": "Bến Tre",
//                 "priority": 8,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "81",
//                 "value": "Bình Định",
//                 "priority": 9,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "82",
//                 "value": "Bình Dương",
//                 "priority": 10,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "83",
//                 "value": "Bình Phước",
//                 "priority": 11,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "84",
//                 "value": "Bình Thuận",
//                 "priority": 12,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "85",
//                 "value": "Cà Mau",
//                 "priority": 13,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "86",
//                 "value": "Cần Thơ",
//                 "priority": 14,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "87",
//                 "value": "Cao Bằng",
//                 "priority": 15,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "88",
//                 "value": "Đà Nẵng",
//                 "priority": 16,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "89",
//                 "value": "Đắk Lắk",
//                 "priority": 17,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "90",
//                 "value": "Đắk Nông",
//                 "priority": 18,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "91",
//                 "value": "Điện Biên",
//                 "priority": 19,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "92",
//                 "value": "Đồng Nai",
//                 "priority": 20,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "93",
//                 "value": "Đồng Tháp",
//                 "priority": 21,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "94",
//                 "value": "Gia Lai",
//                 "priority": 22,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "95",
//                 "value": "Hà Giang",
//                 "priority": 23,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "96",
//                 "value": "Hà Nam",
//                 "priority": 24,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "97",
//                 "value": "Hà Tĩnh",
//                 "priority": 25,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "98",
//                 "value": "Hải Dương",
//                 "priority": 26,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "99",
//                 "value": "Hải Phòng",
//                 "priority": 27,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "100",
//                 "value": "Hậu Giang",
//                 "priority": 28,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "101",
//                 "value": "Hòa Bình",
//                 "priority": 29,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "102",
//                 "value": "Hưng Yên",
//                 "priority": 30,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "103",
//                 "value": "Khánh Hòa",
//                 "priority": 31,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "104",
//                 "value": "Kiên Giang",
//                 "priority": 32,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "105",
//                 "value": "Kon Tum",
//                 "priority": 33,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "106",
//                 "value": "Lai Châu",
//                 "priority": 34,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "107",
//                 "value": "Lâm Đồng",
//                 "priority": 35,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "108",
//                 "value": "Lạng Sơn",
//                 "priority": 36,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "109",
//                 "value": "Lào Cai",
//                 "priority": 37,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "110",
//                 "value": "Long An",
//                 "priority": 38,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "111",
//                 "value": "Nam Định",
//                 "priority": 39,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "112",
//                 "value": "Nghệ An",
//                 "priority": 40,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "113",
//                 "value": "Ninh Bình",
//                 "priority": 41,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "114",
//                 "value": "Ninh Thuận",
//                 "priority": 42,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "115",
//                 "value": "Phú Thọ",
//                 "priority": 43,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "116",
//                 "value": "Phú Yên",
//                 "priority": 44,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "117",
//                 "value": "Quảng Bình",
//                 "priority": 45,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "118",
//                 "value": "Quảng Nam",
//                 "priority": 46,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "119",
//                 "value": "Quảng Ngãi",
//                 "priority": 47,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "120",
//                 "value": "Quảng Ninh",
//                 "priority": 48,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "121",
//                 "value": "Quảng Trị",
//                 "priority": 49,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "122",
//                 "value": "Sóc Trăng",
//                 "priority": 50,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "123",
//                 "value": "Sơn La",
//                 "priority": 51,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "124",
//                 "value": "Tây Ninh",
//                 "priority": 52,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "125",
//                 "value": "Thái Bình",
//                 "priority": 53,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "126",
//                 "value": "Thái Nguyên",
//                 "priority": 54,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "127",
//                 "value": "Thanh Hóa",
//                 "priority": 55,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "128",
//                 "value": "Thừa Thiên-Huế",
//                 "priority": 56,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "129",
//                 "value": "Tiền Giang",
//                 "priority": 57,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "130",
//                 "value": "Trà Vinh",
//                 "priority": 58,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "131",
//                 "value": "Tuyên Quang",
//                 "priority": 59,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "132",
//                 "value": "Vĩnh Long",
//                 "priority": 60,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "133",
//                 "value": "Vĩnh Phúc",
//                 "priority": 61,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "134",
//                 "value": "Yên Bái",
//                 "priority": 62,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             }
//         ]
//     },
//     {
//         "id": "3",
//         "format": "QUESTION",
//         "questionType": "SINGLE_ANSWER",
//         "mediaType": "NONE",
//         "title": "Bạn có làm việc trong những lĩnh vực sau?",
//         "description": "Chỉ chọn 1 đáp án duy nhất",
//         "dragRankingStartLabel": "0",
//         "dragRankingEndLabel": "0",
//         "required": true,
//         "randomizeOption": false,
//         "options": [
//             {
//                 "id": "3",
//                 "value": "Quảng cáo/ Tiếp thị",
//                 "priority": 1,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "4",
//                 "value": "Nghiên cứu thị trường",
//                 "priority": 2,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "5",
//                 "value": "Quan hệ truyền thông/ tổ chức sự kiện/ khuyến mãi/ phát triển sản phẩm",
//                 "priority": 3,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "6",
//                 "value": "Báo chí/ phát thanh/ truyền hình",
//                 "priority": 4,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "7",
//                 "value": "Dịch vụ trung gian thanh toán/ ví điện tử/ kinh doanh thẻ cào/ tài chính ngân hàng",
//                 "priority": 5,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "8",
//                 "value": "IT/ Kỹ thuật viên vi tính",
//                 "priority": 6,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "9",
//                 "value": "Khác, ghi rõ",
//                 "priority": 98,
//                 "haveOther": true,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "10",
//                 "value": "Không làm trong những lĩnh vực kể trên",
//                 "priority": 99,
//                 "haveOther": false,
//                 "exclusiveAll": true,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             }
//         ]
//     },
//     {
//         "id": "5",
//         "format": "QUESTION",
//         "questionType": "MULTIPLE_ANSWER",
//         "mediaType": "NONE",
//         "title": "Anh/ chị BIẾT ĐẾN tính năng/ dịch vụ nào trên MoMo dưới đây?",
//         "description": "Chọn tất cả tính năng/ dịch vụ anh/ chị từng nghe nói đến",
//         "dragRankingStartLabel": "0",
//         "dragRankingEndLabel": "0",
//         "required": true,
//         "randomizeOption": true,
//         "options": [
//             {
//                 "id": "20",
//                 "value": "Mua sắm trực tuyến trên Tiki, Nhóm Mua, Hoa Yêu Thương, Got It, v.v.",
//                 "priority": 8,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "27",
//                 "value": "Thanh toán các dịch vụ tài chính: thanh toán thẻ tín dụng, khoản vay, trả góp",
//                 "priority": 15,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "16",
//                 "value": "Thanh toán hóa đơn điện, nước, internet, học phí...",
//                 "priority": 4,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "14",
//                 "value": "Nạp tiền điện thoại",
//                 "priority": 2,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "17",
//                 "value": "Thanh toán học phí",
//                 "priority": 5,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "22",
//                 "value": "Thanh toán dịch vụ Youtube Premium/ Netfix/ Spotify/ Appstore..",
//                 "priority": 10,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "19",
//                 "value": "Đặt vé máy bay, vé xe, vé tàu hỏa, VETC",
//                 "priority": 7,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "26",
//                 "value": "Dịch vụ tài chính: Ví Trả Sau, Fast Money..",
//                 "priority": 14,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "13",
//                 "value": "Chuyển tiền cho người khác qua số điện thoại, ngân hàng",
//                 "priority": 1,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "21",
//                 "value": "Thanh toán offline tại siêu thị Co.opmart, các cửa hàng GongCha, The Coffee House, Gogi House, v.v.",
//                 "priority": 9,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "18",
//                 "value": "Mua vé xem phim, game trực tuyến, truyền hình trực tuyến",
//                 "priority": 6,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "15",
//                 "value": "Nạp data 3G/4G",
//                 "priority": 3,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "23",
//                 "value": "Đặt phòng khách sạn",
//                 "priority": 11,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "25",
//                 "value": "Sản phẩm đầu tư/ tiết kiệm: Tiết kiệm online/ chứng chỉ quỹ/ Túi Thần Tài..",
//                 "priority": 13,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "24",
//                 "value": "Thanh toán khi đặt xe/ đặt đồ ăn (Baemin/ Be...)",
//                 "priority": 12,
//                 "haveOther": false,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": false
//             },
//             {
//                 "id": "28",
//                 "value": "Khác, ghi rõ",
//                 "priority": 98,
//                 "haveOther": true,
//                 "exclusiveAll": false,
//                 "allOfAbove": false,
//                 "fixPosition": true
//             },
//             {
//                 "id": "29",
//                 "value": "Tôi không biết tính năng/ dịch vụ nào nói trên",
//                 "priority": 99,
//                 "haveOther": false,
//                 "exclusiveAll": true,
//                 "allOfAbove": false,
//                 "fixPosition": true
//             }
//         ]
//     },
//     {
//         "id": "6",
//         "format": "QUESTION",
//         "questionType": "DRAGGING",
//         "mediaType": "NONE",
//         "title": "Mức độ hài lòng của anh/ chị khi nạp tiền điện thoại trên MoMo?",
//         "description": "",
//         "dragRankingType": "FIVE",
//         "dragRankingStartLabel": "1 = Hoàn toàn không hài lòng,",
//         "dragRankingEndLabel": " 5 = Hoàn toàn hài lòng",
//         "required": true,
//         "randomizeOption": false,
//         "options": []
//     }
// ]
