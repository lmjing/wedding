// 결혼식 데이터 설정
// 이 파일의 데이터를 수정하여 청첩장 내용을 변경할 수 있습니다.

const weddingData = {
    // 기본 정보
    wedding_info: {
        groom_name: '승재',
        bride_name: '수빈',
        wedding_date: '2026.01.18',
        wedding_time: '일요일 오전 11시 30분',
        wedding_venue: '문래역 SK리더스뷰 4층 JK아트컨벤션',
        wedding_address: '문래동3가 55-16'
    },
    
    // 가족 정보
    family_info: {
        groom_father: '故백종두',
        groom_mother: '안미혜',
        bride_father: '최재규',
        bride_mother: '황동열'
    },
    
    // 메시지
    messages: {
        poem_message: '', // 시 한구절 (필요시 입력)
        invitation_message: '', // 초대장 메시지 (필요시 입력)
        outro_message: '응원하고 격려해주신 모든 분들께 감사드리며\n행복하게 잘 살겠습니다.' // 마무리 메시지
    },
    
    // 이미지 경로
    images: {
        main_photo: 'assets/images/20250918_225238_2.png',
        invitation_photo: '', // 초대장 사진 (필요시 입력)
        outro_photo: '' // 마무리 사진 (필요시 입력)
    },
    
    // 교통 정보
    transportation: {
        subway: '', // 지하철 안내 (필요시 입력)
        bus: '', // 버스 안내 (필요시 입력)
        parking: '' // 주차 안내 (필요시 입력)
    },
    
    // 지도 설정
    map_settings: {
        mapImage: 'assets/images/1758211532_map.png', // 지도 이미지 경로
        subwayInfo: '', // 지하철 정보 (필요시 입력)
        busInfo: '', // 버스 정보 (필요시 입력)
        parkingInfo: '' // 주차 정보 (필요시 입력)
    },
    
    // 계좌 정보
    account_info: {
        groom_accounts: [
            {
                bank: '신한',
                number: '110-407-470751',
                name: '백승재'
            }
        ],
        bride_accounts: [
            {
                bank: '국민',
                number: '200123-45-678900',
                name: '최수빈'
            },
            {
                bank: '신한',
                number: '110-123-456789',
                name: '최수빈'
            }
        ]
    },
    
    // 연락처 정보
    contacts: {
        groom: {
            name: '백승재',
            phone: '010-9731-1315'
        },
        bride: {
            name: '최수빈',
            phone: '010-5043-7837'
        }
    },
    
    // 갤러리 이미지 (배열)
    gallery_images: [
        'assets/images/gallery_webp/20250918_004953_05_CJG00205-.webp',
        'assets/images/gallery_webp/20250918_005020_08_CJG00583-.webp',
        'assets/images/gallery_webp/20250918_011644_12_CJG01164-.webp',
        'assets/images/gallery_webp/20250918_011652_14_CJG01310-.webp',
        'assets/images/gallery_webp/20250918_011658_22_CJG01695-.webp',
        'assets/images/gallery_webp/20250918_011702_24_CJG01721-.webp',
        'assets/images/gallery_webp/20250918_235444_IMG_3173.webp',
        'assets/images/gallery_webp/20250919_074549_1754745093144.webp'
    ],
    
    // 메타 정보
    meta: {
        thumbnail: 'assets/images/20250918_225238_2.png' // OG 이미지
    }
};

// 페이지 제목과 설명 생성
function generatePageTitle() {
    return `${weddingData.wedding_info.groom_name} ♥ ${weddingData.wedding_info.bride_name} 결혼합니다`;
}

function generatePageDescription() {
    const info = weddingData.wedding_info;
    const parts = [];
    if (info.wedding_date) parts.push(info.wedding_date);
    if (info.wedding_time) parts.push(info.wedding_time);
    if (info.wedding_venue) parts.push(info.wedding_venue);
    return parts.join(' ') || generatePageTitle();
}

