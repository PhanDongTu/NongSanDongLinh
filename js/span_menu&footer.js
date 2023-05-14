$(document).ready(function () {


    $(".menu").append(`
     <div id="wrapper">

         <!-- Sidebar -->
         <nav class="navbar navbar-inverse fixed-top" id="sidebar-wrapper" role="navigation">
             <ul class="nav sidebar-nav">
                 <div class="sidebar-header">
                     <div class="sidebar-brand">
                         <a href="#">MENU</a>
                     </div>
                 </div>
                 <li><a class="sidebar-brand-link" href="#home">Trang Chủ</a></li>
                 <li><a class="sidebar-brand-link" href="#about">Giới Thiệu</a></li>
                 <li><a class="sidebar-brand-link" href="#events">Sản Phẩm</a></li>
                 <li><a class="sidebar-brand-link" href="#team">Nhà Vườn</a></li>
                 <li><a class="sidebar-brand-link" href="#services">Mua hàng ở đâu</a></li>
                 <li><a class="sidebar-brand-link" href="#contact">Tin tức</a></li>

             </ul>
         </nav>
         <!-- /#sidebar-wrapper -->

         <!-- Page Content -->
         <div id="page-content-wr">
             <button type="button" class="hamburger animated fadeInLeft is-closed btn-navbar"
                 data-toggle="offcanvas">
                 <span class="hamb-top"></span>
                 <span class="hamb-middle"></span>
                 <span class="hamb-bottom"></span>
             </button>


             <div class="container mobile">


                 <div class="navbar-menu">

                     <div class="navbar-logo wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                         <a href="/home.html" class="menu-item-link"><img src="images/LOGONEW.png" alt=""></a>
                         
                     </div>

                     <ul class="menu-list">
                     <li class="menu-item">
                     <a href="./home.html" class="menu-item-link">TRANG CHỦ</a>

                 </li>
                         <li class="menu-item">
                             <a href="./gioithieu.html" class="menu-item-link">GIỚI THIỆU</a>
                         </li>
                         <li class="menu-item">
                             <a href="./sanpham.html" class="menu-item-link">SẢN PHẨM</a>

                         </li>
                         <li class="menu-item">
                             <a href="./nhavuon.html" class="menu-item-link">NHÀ VƯỜN</a>

                         </li>
          
                         <li class="menu-item">
                             <a href="./muahangodau.html" class="menu-item-link">MUA HÀNG Ở ĐÂU</a>

                         </li>
                     </ul>
                     <div class="menu-cart">
                         <a href="#">
                             <span class="material-symbols-outlined menu-cart-icon">
                                 shopping_cart
                             </span>

                             <div class="cart-quantity">3</div>
                         </a>

                     </div>


                 </div>


             </div>
             <!-- /#page-content-wrapper -->

         </div>
         <!-- /#wrapper -->
     </div>`);




    $("#app_footer").append(
        `
        <div class="container">
                    <div class="app_footer_content">
                        <h1 class="app_footer_heding">LIÊN HỆ</h1>
                        <div class="app_footer_contact">
                            <div class="text-center text-md-start">
                                <!-- Grid row -->
                                <div class="row">


                                    <!-- Grid column -->
                                    <div class="col-12 col-md-2 col-sm-6 col-lg-4 col-xl-4 contact_list wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <!-- Links -->
                                        <h6 class="text-uppercase mb-4 contact_heding ">
                                            NÔNG SẢN ĐỒNG LINH
                                        </h6>
                                        <p>
                                            <img src="images/Địa chỉ_icon.png" alt="" class="contact_icon">
                                            Địa chỉ:
                                            <a href="#!" class="text-reset">Vỉnh Nguyên,Phong Điền, Huế</a>
                                        </p>
                                        <p>
                                            <img src="images/telephone.png" alt="" class="contact_icon">
                                            Hotline:
                                            <a href="#!" class="text-reset maudo">0327172943</a>
                                        </p>
                                        <p>
                                            <span class="material-symbols-outlined contact_icon xanhla">
                                                mail
                                            </span>
                                            Email:
                                            <a href="#!" class="text-reset">Tudong2k3@gmail.com</a>
                                        </p>
                                        <p>
                                            <span class="material-symbols-outlined contact_icon xanhla">
                                                language
                                            </span>
                                            Website:
                                            <a href="#!" class="text-reset">nongsandonglinh.com</a>
                                        </p>
                                        <div class="contact_social_network">
                                            <a href="#">
                                                <img src="images/zalo-icon-5664.png" alt="">
                                            </a>
                                            <a href="#">
                                                <img src="images/facebook-3935.png" alt="">
                                            </a>
                                        </div>
                                    </div>
                                    <!-- Grid column -->

                                    <!-- Grid column -->
                                    <div class="col-md-3 col-12 col-sm-6 col-lg-4 col-xl-4 contact_list wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <!-- Links -->
                                        <h6 class="text-uppercase mb-4 contact_heding">
                                            Chính Sách
                                        </h6>
                                        <p>
                                            <a href="#!" class="text-reset">Nhà Phân Phối</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">Chính sách giao hàng</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">Chính sách bảo mật thông tin</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">Chính sách bán hàng</a>
                                        </p>
                                    </div>
                                    <!-- Grid column -->

                                    <!-- Grid column -->
                                    <di v class="col-md-4 col-12 col-sm-6 col-lg-4 col-xl-4 contact_list wow bounceInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                                        <!-- Links -->
                                        <h6 class="text-uppercase mb-4 contact_heding">HỆ THỐNG PHÂN PHỐI</h6>
                                        <ul class="Distribution_list">
                                            <li class="Distribution_item">
                                                <a href="" class="province">Huế</a>
                                            </li>
                                            <li class="Distribution_item">
                                                <span class="Distribution_location">Phong Điền:</span>
                                                <a href="#">Đội 3 TDP, Vỉnh Nguyên,Huế</a>

                                            </li>
                                            <li class="Distribution_item">
                                                <span class="Distribution_location">Phong Điền:</span>
                                                <a href="#">Đội 3 TDP, Vỉnh Nguyên</a>

                                            </li>
                                            <li class="Distribution_item">
                                                <span class="Distribution_location">Phong Điền:</span>
                                                <a href="#">Đội 3 TDP, Vỉnh Nguyên,Huế</a>

                                            </li>
                                            <li class="Distribution_item">
                                                <span class="Distribution_location">Phong Điền:</span>
                                                <a href="#">Đội 3 TDP, Vỉnh Nguyên,Huế</a>

                                            </li>
                                            <li class="Distribution_item">
                                                <span class="Distribution_location">Phong Điền:</span>
                                                <a href="#">Đội 3 TDP, Vỉnh Nguyên,Huế</a>

                                            </li>
                                            <li class="Distribution_item">
                                                <span class="Distribution_location">Phong Điền:</span>
                                                <a href="#">Đội 3 TDP, Vỉnh Nguyên,Huế</a>

                                            </li>
                                            <li class="Distribution_item">
                                                <span class="Distribution_location">Phong Điền:</span>
                                                <a href="#">Đội 3 TDP, Vỉnh Nguyên,Huế</a>

                                            </li>


                                        </ul>

                                    </di>
                                    <!-- Grid column -->
                                </div>
                                <!-- Grid row -->
                            </div>
                        </div>
                        <form class="form-newsletter validation-newsletter" novalidate="" method="post" action=""
                            enctype="multipart/form-data">
                            <div class="title-letter">Để lại thông tin nếu bạn quan tâm và muốn làm nhà phân phối của
                                chúng tôi</div>
                            <div class="clear"></div>
                            <div class="w-clear">
                                <div class="newsletter-input">
                                    <input type="text" class="form-control" id="name-newsletter" name="name-newsletter"
                                        placeholder="Họ và tên" required="">

                                    <input type="text" class="form-control" id="phone-newsletter"
                                        name="phone-newsletter" placeholder="Điện thoại" required="">
                                    <input type="email" class="form-control" id="email-newsletter"
                                        name="email-newsletter" placeholder="Email" required="">
                                </div>

                                <input type="submit" name="submit-newsletter" value="Đăng ký" class="send-letter btn">
                            </div>


                        </form>







                    </div>




                </div>
                <div class="text-center p-2 background_Copyright">
                    © 2023 Copyright:
                    <a class="text-reset" href="https://www.facebook.com/phann.tu.792"> Được
                        thiết kế bởi Phan Đồng Tú</a>
                </div>

    
    `);
    $("#chatbox").append(
        `
        <a href="tel:0123456789" class="phone-bubble zoom-in-out-box">
        <span class="material-symbols-outlined">
            call
            </span>
    </a>
    <a href="mailto:example@gmail.com" class="email-bubble zoom-in-out-box">
        <img src="./images/facebook-3935.png" alt="" style=" width: 100%; height: 100%; float: left;">
    </a>
    <a href="tel:0123456789" class="zalo-bubble zoom-in-out-box">
        <img src="./images/zalo-icon-5664.png" alt="" style=" width: 100%; height: 100%; float: left;">
      </a>

    
    `);
});