'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
   
    //   await queryInterface.bulkInsert('Photos', [
    //     // { 
    //     //   photo: '["https://firebasestorage.googleapis.com/v0/b/sosedushka-react-storage-4eb95.appspot.com/o/files%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-02-09%20%D0%B2%2011.07.20.png?alt=media&token=e30c3f4e-603f-479a-b385-effa81d01e63", "https://firebasestorage.googleapis.com/v0/b/sosedushka-react-storage-4eb95.appspot.com/o/files%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-02-09%20%D0%B2%2011.07.17.png?alt=media&token=ca1d6915-e43a-4c14-b7d6-07322e6f42f4", "https://firebasestorage.googleapis.com/v0/b/sosedushka-react-storage-4eb95.appspot.com/o/files%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-02-09%20%D0%B2%2011.07.15.png?alt=media&token=f81946fa-4e81-4b8b-9f13-d94f18ea9daf"]', 
    //     //   notice_id: 1, 
    //     //   createdAt: new Date(), updatedAt: new Date() 
    //     // },
    //     { 
    //       photo: '["https://firebasestorage.googleapis.com/v0/b/sosedushka-react-storage-4eb95.appspot.com/o/files%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-02-09%20%D0%B2%2011.07.20.png?alt=media&token=e30c3f4e-603f-479a-b385-effa81d01e63", "https://firebasestorage.googleapis.com/v0/b/sosedushka-react-storage-4eb95.appspot.com/o/files%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-02-09%20%D0%B2%2011.07.17.png?alt=media&token=ca1d6915-e43a-4c14-b7d6-07322e6f42f4", "https://firebasestorage.googleapis.com/v0/b/sosedushka-react-storage-4eb95.appspot.com/o/files%2F%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202022-02-09%20%D0%B2%2011.07.15.png?alt=media&token=f81946fa-4e81-4b8b-9f13-d94f18ea9daf"]', 
    //       notice_id: 2, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { photo: '["https://cdn-p.cian.site/images/87/244/901/kvartira-moskva-hodynskiy-bulvar-1094427844-1.jpg"]',
    //       notice_id: 3,
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/87/244/901/kvartira-moskva-hodynskiy-bulvar-1094427844-1.jpg"]', 
    //       notice_id: 4, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/40/933/221/kvartira-moskva-ulica-akademika-yangelya-1223390427-1.jpg"]', 
    //       notice_id: 5, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { photo: '["https://cdn-p.cian.site/images/09/280/321/kvartira-moskva-ulica-tvardovskogo-1230829099-1.jpg"]',
    //       notice_id: 6,
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/09/280/321/kvartira-moskva-ulica-tvardovskogo-1230829066-1.jpg"]', 
    //       notice_id: 7, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/52/734/021/kvartira-moskva-michurinskiy-prospekt-1204372568-1.jpg"]', 
    //       notice_id: 8, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { photo: '["https://cdn-p.cian.site/images/53/587/221/kvartira-moskva-bolshaya-naberezhnaya-ulica-1227853560-1.jpg"]',
    //       notice_id: 9,
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/87/244/901/kvartira-moskva-hodynskiy-bulvar-1094427844-1.jpg"]', 
    //       notice_id: 10, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/87/244/901/kvartira-moskva-hodynskiy-bulvar-1094427857-1.jpg"]', 
    //       notice_id: 11, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { photo: '["https://cdn-p.cian.site/images/40/933/221/kvartira-moskva-ulica-akademika-yangelya-1223390427-1.jpg"]',
    //       notice_id: 12,
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/09/280/321/kvartira-moskva-ulica-tvardovskogo-1230829099-1.jpg"]', 
    //       notice_id: 13, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/53/587/221/kvartira-moskva-bolshaya-naberezhnaya-ulica-1227853560-1.jpg"]', 
    //       notice_id: 14, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { photo: '["https://cdn-p.cian.site/images/66/687/221/kvartira-moskva-bolshaya-naberezhnaya-ulica-1227866640-1.jpg"]',
    //       notice_id: 15,
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/69/287/221/kvartira-moskva-bolshaya-naberezhnaya-ulica-1227829642-1.jpg"]', 
    //       notice_id: 16, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/38/906/221/kvartira-moskva-malomoskovskaya-ulica-1226098365-1.jpg"]', 
    //       notice_id: 17, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/22/726/221/kvartira-moskva-malomoskovskaya-ulica-1226272291-1.jpg"]', 
    //       notice_id: 18, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/87/244/901/kvartira-moskva-hodynskiy-bulvar-1094427857-1.jpg"]', 
    //       notice_id: 19, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     },
    //     { 
    //       photo: '["https://cdn-p.cian.site/images/87/244/901/kvartira-moskva-hodynskiy-bulvar-1094427844-1.jpg"]', 
    //       notice_id: 20, 
    //       createdAt: new Date(), updatedAt: new Date() 
    //     }

    // ], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
