





  const $1 = document.querySelector.bind(document)
  const $$2 = document.querySelectorAll.bind(document)
  
  

  const app = {

    id_ren : 0,

    
    data: [
  
      {
        id: 1,
        _name: 'Cam Sành Vĩnh Nguyên',
        mota: 'Cam là một loại trái cây tuyệt vời với nhiều lợi ích sức khỏe đáng kinh ngạc.Trái cam giàu vitamin C, giúp tăng cường hệ miễn dịch, bảo vệ cơ thể khỏi bệnh tật và tăng cường quá trình tái tạo tế bào.',
        gia: 50,
        image: './images/orange-fruit-isolated-white-background-109006430.jpg',
        image2:'./images/orange-fruit-isolated-white-background-109006430.jpg'
      },

      {
        id: 2,
        _name: 'Bưởi Da Xanh Vĩnh Nguyên',
        mota: 'Bưởi Da xanh là trái cây đặc sản nổi tiếng của Việt Nam. Bưởi da xanh có đặc điểm vỏ có màu xanh đến xanh hơi vàng khi chín.Tép bưởi màu hồng đỏ, vị ngọt thanh, màu sắc đẹp mắt, là một trong những loại trái cây cực tốt cho sức khoẻ với nhiều công dụng thần kỳ khác nhau đã được khoa học chứng minh.',
        gia: 160,
        image: './images/hang1.png',
        image2:'./images/hang1.png'
      },

      {
        id: 3,
        _name: 'Ổi sạch Vĩnh Nguyên',
        mota: 'Ổi rất giảu chất xơ và chứa chất hypoglycemic tự nhiên. Hai chất này có tác dụng hạ huyết áp và giảm cholesterol trong máu. Do đó, những người có nguy cơ bị cao huyết áp và mắc các bệnh về tim mạch nên ăn ổi thường xuyên hơn.',
        gia: 60,
        image: './images/ổi.jpg'
        ,
        image2:'./images/ổi.jpg'
      },

      {
        id: 4,
        _name: 'Quýt đường Vĩnh Nguyên',
        mota: 'Quýt chứa nhiều chất dinh dưỡng và chất chống oxy hóa, giúp tăng cường hệ miễn dịch, hỗ trợ sức khỏe não bộ, cải thiện các vấn đề về da và tim mạch.',
        gia: 50,
        image: './images/qua-quyt-mang-lai-7-loi-ich-cho-suc-khoe-do-la-gi1623910739.jpg',
        image2:'./images/qua-quyt-mang-lai-7-loi-ich-cho-suc-khoe-do-la-gi1623910739.jpg'
      },
      {
        id: 5,
        _name: 'Thanh Trà Vĩnh Nguyên',
        mota: 'Ăn bưởi thường xuyên giúp bạn có một hệ miễn dịch khỏe mạnh do bổ sung hàm lượng lớn Vitamin C cùng các chất chống oxy hóa khác, hỗ trợ hệ miễn dịch, giảm tổn thương tế bào do gốc tự do. ',
        gia: 150,
        image: './images/hang2.png',
        image2:'./images/hang2.png'
      },

      {
        id: 6,
        _name: 'Xoài non siêu sạch',
        mota: 'Xoài được gọi là “vua của các loại trái cây”. Xoài có nguồn gốc từ Ấn Độ và Đông Nam Á và đã được trồng trong hơn 4.000 năm. Có hàng trăm loại xoài, mỗi loại có một hương vị, hình dáng, kích thước và màu sắc riêng.',
        gia: 70,
        image: 'images/xoai-cát-chu-600x600-600x600.png',
        image2:'images/xoai-cát-chu-600x600-600x600.png'
      },
      
    ],


    returnid:function(a){
      const app_body = document.getElementById('app_body');
      var b = parseInt(a)
      console.log(b)
      app.data.forEach(function(elmen,index){
        if(elmen.id == b){
          console.log(elmen)

          const newHTML = `
          <div class="bansanpham_app">
          <div class="containerchitiet_sanpham">

           
            <div class="left-column">
             
            <a data-fslightbox="gallery" href="${elmen.image2}">
            <img data-image="red" class="active" src="${elmen.image}" alt="">
          </a>
          <a data-fslightbox="gallery" href="./images/cam.jpg"></a>
              
            
             

              
              
             
             
            </div>
      
      
            <!-- Right Column -->
            <div class="right-column">
      
              <!-- Product Description -->
              <div class="product-description">
                <span>Trái cây sạch</span>
                <h1>${elmen._name}</h1>
                <p> ${elmen.mota}</p>
               
              </div>
      
              <!-- Product Configuration -->
              <div class="product-configuration">
      
              
                
      
                <!-- Cable Configuration -->
                <div class="cable-config">
                  <span>Số lượng</span>
      
                  <div class="cable-choose">
                    <button class="button-quantiti" >10 quả</button>
                    <button class="button-quantiti" >20 quả</button>
                    <button class="button-quantiti" >30 quả</button>
                  </div>
      
                  <a href="#">Cách để nhận biết trái cam ngon</a>
                </div>
              </div>
      
              <!-- Product Pricing -->
              <div class="product-price">
                <span class="price_qoantiti" value="${elmen.gia}" >${elmen.gia}.000vnđ</span>
                <a href="#" class="cart-btn">Mua Ngay</a>
                <a href="#" class="cart-btn m-l">Thêm vào giỏ hàng</a>
              </div>
            </div>

          </div>
          <h1 class="app_cacsanpamlienquan">CÁC SẢN PHẨM LIÊN QUAN</h1>
          
        <div class="product_app">
        <div class="container">
            <div class="content_product_content">
              
                <ul class="row col-lg-12 content_product_list">
                    <li class="col-lg-4 content_product_item">
                
                        <div class="content_product_item_img">
                              <img src="images/hang2.png" alt="">
                        </div>
                        <div class="content_product_describe">
                            <h2 class="content_product_name">Thanh Trà Vĩnh Nguyên</h2>
                            <h2 class="content_product_price">120.000vnđ</h2>

                        </div>

                        <a class="product-btn btn" href="#" data-id="5">
                           Đặt Mua
                        </a>
                        



                </li>
                    
                    <li class="col-lg-4 content_product_item">
              
                            <div class="content_product_item_img">
                                  <img src="images/hang1.png" alt="">
                            </div>
                            <div class="content_product_describe">
                                <h2 class="content_product_name">Bưởi da xanh Vĩnh Nguyên</h2>
                                <h2 class="content_product_price">99.000vnđ</h2>

                            </div>

                            <a class="product-btn btn" href="#" data-id="2">
                               Đặt Mua
                            </a>
                            



                    </li>
                    <li class="col-lg-4 content_product_item">
                    
                            <div class="content_product_item_img">
                                  <img src="images/ổi.jpg" alt="">
                            </div>
                            <div class="content_product_describe">
                                <h2 class="content_product_name">Ổi sạch Vỉnh Nguyên</h2>
                                <h2 class="content_product_price">60.000vnđ</h2>

                            </div>

                            <a class="product-btn btn" href="#" data-id="3">
                               Đặt Mua
                            </a>
                            



                    </li>
                    <li class="col-lg-4 content_product_item">
            
                            <div class="content_product_item_img">
                                  <img src="images/qua-quyt-mang-lai-7-loi-ich-cho-suc-khoe-do-la-gi1623910739.jpg" alt="">
                            </div>
                            <div class="content_product_describe">
                                <h2 class="content_product_name">Quýt đường Vỉnh Nguyên</h2>
                                <h2 class="content_product_price">50.000vnđ</h2>

                            </div>

                            <a class="product-btn btn" href="#" data-id="4">
                               Đặt Mua
                            </a>
                            


          

                    </li>
                    <li class="col-lg-4 content_product_item">
                        
                        <div class="content_product_item_img">
                              <img src="images/orange-fruit-isolated-white-background-109006430.jpg" alt="">
                        </div>
                        <div class="content_product_describe">
                            <h2 class="content_product_name">Cam sành Vĩnh Nguyên</h2>
                            <h2 class="content_product_price">50.000vnđ</h2>

                        </div>

                        <a class="product-btn btn" href="#" data-id="1">
                           Đặt Mua
                        </a>
                        


                    

                </li>
                
                    <li class="col-lg-4 content_product_item">
                        
                            <div class="content_product_item_img">
                                  <img src="images/xoai-cát-chu-600x600-600x600.png" alt="">
                            </div>
                            <div class="content_product_describe">
                                <h2 class="content_product_name">Xoài Non siêu sạch</h2>
                                <h2 class="content_product_price">50.000vnđ</h2>

                            </div>

                            <a class="product-btn btn" href="#" data-id="6">
                               Đặt Mua
                            </a>
                            


                       

                    </li>
                    
                    

                   
                    
                    
                </ul>
                


            </div>




    </div>


          
          `;

          app_body.innerHTML = newHTML;

          app.quantiti();

          app.rensanpham();
          app.renmodal();     
        
          
          
          
  


          
    
         



        }
      })  
      

           
           
    },
    renmodal:function(){
      const buyBtns = document.querySelectorAll('.cart-btn')
      const modal=document.querySelector('.modal')
      const modalcontiner=document.querySelector('.js-modal-container')
      const modalclose=document.querySelector('.js-modal-close')

      function showbuytickets(){ 
         modal.classList.add('open')
           }
      function closebuytickets(){
          modal.classList.remove('open')
      } 
      
      

       for(const buyBtn of buyBtns){
          buyBtn.addEventListener('click',showbuytickets)
      }
      modalclose.addEventListener('click', closebuytickets)
      modal.addEventListener('click',closebuytickets)
      modalcontiner.addEventListener('click',function(event){
           event.stopPropagation()
      })
    },

    quantiti:function(){
      const arrquantitit = $$2('.button-quantiti');
      const price_qoantiti = $1('.price_qoantiti');

      arrquantitit.forEach(function(elmen,index){
          elmen.onclick = function(){
            var new_pice;
            if(index==0){
               new_pice = `${price_qoantiti.getAttribute("value")}.000vnđ`  
            

            }else if(index == 1){

              var a = price_qoantiti.getAttribute("value") * 2;

              new_pice = `${a}.000vnđ`


            
          }else if(index == 2){

            var a = price_qoantiti.getAttribute("value") * 3;

            new_pice = `${a}.000vnđ`


          }
          price_qoantiti.innerHTML = new_pice;
          console.log(new_pice)
          }
      })
        
      console.log(arrquantitit);

      

    },

    rensanpham:function(){
      const product_btn_arr = $$2('.product-btn')
 
      product_btn_arr.forEach(function(elmen,index){
        elmen.onclick = function(e){
            
            app.returnid(elmen.getAttribute('data-id'))
            
        }
    });




    },

    

      
      

    



    
    strar:function(){
      app.rensanpham();
      
        
        
       


       

        
    }


    






}


app.strar()





            