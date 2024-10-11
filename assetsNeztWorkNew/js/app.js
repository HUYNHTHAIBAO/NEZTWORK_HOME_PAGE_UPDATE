           // Lấy đối tượng của header  
           window.addEventListener("load", function () {
            const menu = document.querySelector(".menu");
            const menuBg = document.querySelector(".menu-bg");
            const menuToggle = document.querySelector(".menu-toggle");
            const menuClose = document.querySelector(".menu-close");
            const menuHomeMobile = document.querySelector(".menu_home_mobile");
            menuToggle.addEventListener("click", handleToggleMenu);
            function handleToggleMenu(e) {
              menuBg.classList.add("is-active");
              menu.classList.add("is-active");
              menuClose.classList.add("is-active");
              menuHomeMobile.classList.add("is-active");
            }
            menuClose.addEventListener("click", function () {
              menuBg.classList.remove("is-active");
              menu.classList.remove("is-active");
              menuClose.classList.remove("is-active");
              menuHomeMobile.classList.remove("is-active");
              // change
            });
          });


          $(document).ready(function () {
            $(".event_slider").slick({
                slidesToShow: 2, // Hiển thị 2 cột
                slidesToScroll: 1,
                arrows: true,  
                draggable: true,  
                prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left icon_slider"></i></button>`,
                nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right icon_slider"></i></button>`,
                dots: false,
                infinite: true,
                speed: 300,
                centerMode: false,
                rows: 1, // Hiển thị 2 hàng
                variableWidth: true,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
                responsive: [
             
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            arrows: false,
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            arrows: false,
                        },
                    },
                ],
            });
        });



        $(document).ready(function () {
            $(".creator_slider").slick({
                slidesToShow: 2, // Hiển thị 2 cột
                slidesToScroll: 1,
                arrows: false,  
                draggable: true,  
                prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left icon_slider"></i></button>`,
                nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right icon_slider"></i></button>`,
                dots: false,
                infinite: true,
                speed: 300,
                centerMode: false,
                rows: 1, // Hiển thị 2 hàng
                variableWidth: true,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
                responsive: [
             
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                   
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        },
                    },
                ],
            });
        });
        $(document).ready(function () {
            $(".topic_list_slider").slick({
                slidesToShow: 2, // Hiển thị 2 cột
                slidesToScroll: 1,
                arrows: false,  
                draggable: true,  
                prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left icon_slider"></i></button>`,
                nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right icon_slider"></i></button>`,
                dots: false,
                infinite: true,
                speed: 300,
                centerMode: false,
                rows: 1, // Hiển thị 2 hàng
                variableWidth: true,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
                responsive: [
             
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                   
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: false,
                        },
                    },
                ],
            });
        });

        $(document).ready(function () {
          $(".banner_categories_tags_list").slick({
              slidesToShow: 2, // Hiển thị 2 cột
              slidesToScroll: 1,
              arrows: false,  // Hiển thị nút điều hướng
              draggable: true,
              prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left icon_slider"></i></button>`,
              nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right icon_slider"></i></button>`,
              dots: false,
              infinite: true, // Cho phép lặp lại liên tục các slide
              speed: 4500,
              centerMode: false,
              rows: 1, // Hiển thị 2 hàng
              variableWidth: true,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
              autoplay: true, // Bật tự động chạy
              autoplaySpeed: 0, // Tốc độ giữa các slide, đặt về 0 để chạy liên tục
              cssEase: 'linear', // Cách chuyển động mượt
              responsive: [
                  {
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 1, // Trên màn hình nhỏ hiển thị 1 cột
                          rows: 1, // Hiển thị 1 hàng trên màn hình nhỏ
                      },
                  },
                  {
                      breakpoint: 480,
                      settings: {
                          slidesToShow: 1,
                          rows: 1, // Hiển thị 1 hàng trên màn hình rất nhỏ
                          arrows: false, // Ẩn nút điều hướng trên màn hình rất nhỏ
                      },
                  },
              ],
          });
      });
      


        

        // $(document).ready(function () {
        //     $(".partner_list_top").slick({
        //         slidesToShow: 5, // Hiển thị 2 cột
        //         slidesToScroll: 1,
        //         arrows: false,
        //         draggable: true,
        //         prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-arrow-left icon_slider"></i></button>`,
        //         nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-arrow-right icon_slider"></i></button>`,
        //         dots: false,
        //         infinite: true,
        //         responsive: [
        //             {
        //                 breakpoint: 1025,
        //                 settings: {
        //                     slidesToShow: 3,
        //                 },
        //             },
        //             {
        //                 breakpoint: 480,
        //                 settings: {
        //                     slidesToShow: 1,
        //                     arrows: false,
        //                     infinite: false,
        //                 },
        //             },
        //         ],
        //     });
        // });


        $(document).ready(function () {
            $(".partner_list_top").slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              draggable: true,
              prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
              nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
              dots: false,
              responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    arrows: false,
                    infinite: true,
                    speed: 300,
                    centerMode: false,
                    rows: 1, // Hiển thị 2 hàng
                    variableWidth: true,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
                  },
                },
              ],
              // autoplay: true,
              // autoplaySpeed: 1000,
            });
          });

          $(document).ready(function () {
            $(".partner_list_bottom").slick({
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              arrows: false,
              draggable: true,
              prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
              nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
              dots: false,
              responsive: [
                {
                  breakpoint: 1025,
                  settings: {
                    slidesToShow: 3,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    arrows: false,
                    infinite: true,
                    speed: 300,
                    centerMode: false,
                    rows: 1, // Hiển thị 2 hàng
                    variableWidth: true,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
                  },
                },
              ],
              // autoplay: true,
              // autoplaySpeed: 1000,
            });
          });
          


          $(document).ready(function () {
            $(".creator_page_content_video_slide").slick({
                slidesToShow: 2, // Hiển thị 2 cột
                slidesToScroll: 1,
                arrows: true,  
                draggable: true,  
                prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left icon_slider_creator"></i></button>`,
                nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right icon_slider_creator"></i></button>`,
                dots: false,
                infinite: true,
                speed: 300,
                centerMode: false,
                rows: 1, // Hiển thị 2 hàng
                variableWidth: true,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
                responsive: [
             
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                   
                        },
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            arrows: true,
                            variableWidth: false,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
                        },
                    },
                ],
            });
        });


        $(document).ready(function () {
          $(".creator_page_content_blogs_slide").slick({
              slidesToShow: 2, // Hiển thị 2 cột
              slidesToScroll: 1,
              arrows: true,  
              draggable: true,  
              prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left icon_slider_creator"></i></button>`,
              nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right icon_slider_creator"></i></button>`,
              dots: false,
              infinite: true,
              speed: 300,
              centerMode: false,
              rows: 1, // Hiển thị 2 hàng
              variableWidth: true,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
              responsive: [
           
                  {
                      breakpoint: 1024,
                      settings: {
                          slidesToShow: 1,
                 
                      },
                  },
                  {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1,
                        arrows: true,
                        variableWidth: false,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
                      },
                  },
              ],
          });
      });


      $(document).ready(function () {
        $(".creator_page_content_review_slide").slick({
            slidesToShow: 2, // Hiển thị 2 cột
            slidesToScroll: 1,
            arrows: true,  
            draggable: true,  
            prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left icon_slider_creator"></i></button>`,
            nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right icon_slider_creator"></i></button>`,
            dots: false,
            infinite: true,
            speed: 300,
            centerMode: false,
            rows: 1, // Hiển thị 2 hàng
            variableWidth: true,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
            responsive: [
         
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
               
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      arrows: true,
                      variableWidth: false,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
                    },
                },
            ],
        });
    });

    $(document).ready(function () {
      $(".creator_page_content_similar_slide").slick({
          slidesToShow: 2, // Hiển thị 2 cột
          slidesToScroll: 1,
          arrows: true,  
          draggable: true,  
          prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa-solid fa-chevron-left icon_slider_creator"></i></button>`,
          nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa-solid fa-chevron-right icon_slider_creator"></i></button>`,
          dots: false,
          infinite: true,
          speed: 300,
          centerMode: false,
          rows: 1, // Hiển thị 2 hàng
          variableWidth: true,  // Cho phép chiều rộng linh hoạt để che khuất một phần hàng
          responsive: [
       
              {
                  breakpoint: 1024,
                  settings: {
                      slidesToShow: 1,
             
                  },
              },
              {
                  breakpoint: 480,
                  settings: {
                      slidesToShow: 1,
                      arrows: false,
                  },
              },
          ],
      });
  });

        const input = document.getElementById('searchInput');
        const placeholderText = "Tìm creator..."; // Text bạn muốn chạy
        let placeholderIndex = 0;
        let typingSpeed = 150; // Tốc độ gõ chữ
        let deletingSpeed = 100; // Tốc độ xóa chữ
        let isDeleting = false; // Trạng thái gõ hoặc xóa
      
        function typePlaceholder() {
          let currentText = placeholderText.substring(0, placeholderIndex);
          
          // Thêm dấu nháy nhấp nháy vào cuối văn bản
          currentText = `${currentText}|`;
      
          // Cập nhật nội dung placeholder
          input.setAttribute('placeholder', currentText);
      
          if (!isDeleting && placeholderIndex < placeholderText.length) {
            // Nếu đang gõ và chưa hết chữ
            placeholderIndex++;
            setTimeout(typePlaceholder, typingSpeed);
          } else if (isDeleting && placeholderIndex > 0) {
            // Nếu đang xóa và còn chữ
            placeholderIndex--;
            setTimeout(typePlaceholder, deletingSpeed);
          } else if (!isDeleting && placeholderIndex === placeholderText.length) {
            // Chờ 2 giây sau khi hoàn thành gõ rồi bắt đầu xóa
            setTimeout(() => {
              isDeleting = true;
              typePlaceholder();
            }, 2000);
          } else if (isDeleting && placeholderIndex === 0) {
            // Reset lại và bắt đầu gõ lại từ đầu sau khi xóa hết chữ
            isDeleting = false;
            setTimeout(typePlaceholder, 500);
          }
        }
      
        // Bắt đầu chạy chữ khi trang tải
        window.onload = typePlaceholder;


        $(function () {
          $.datepicker.regional["vi-VN"] = {
              closeText: "Đóng",
              prevText: "Trước",
              nextText: "Sau",
              currentText: "Hôm nay",
              monthNames: ["Tháng một", "Tháng hai", "Tháng ba", "Tháng tư", "Tháng năm", "Tháng sáu", "Tháng bảy", "Tháng tám", "Tháng chín", "Tháng mười", "Tháng mười một", "Tháng mười hai"],
              monthNamesShort: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
              dayNames: ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"],
              dayNamesShort: ["CN", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"],
              dayNamesMin: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
              weekHeader: "Tuần",
              dateFormat: "dd/mm/yy",
              firstDay: 1,
              isRTL: false,
              showMonthAfterYear: false,
              yearSuffix: ""
          };
  
          $.datepicker.setDefaults($.datepicker.regional["vi-VN"]);
          // Lấy năm hiện tại
          var currentYear = new Date().getFullYear();
          // Đặt ngày bắt đầu của năm hiện tại
          var minDate = new Date(currentYear, 0, 1);
          $(".datepicker-popup").datepicker({
              dateFormat: "dd-mm-yy",
              duration: "fast",
              changeMonth: true, // Cho phép chọn tháng
              changeYear: true,  // Cho phép chọn năm
              showOtherMonths: true,
              selectOtherMonths: true,
              showAnim: "fadeIn",
              minDate: new Date(), // Cấm chọn ngày trước ngày hiện tại
  
          }).datepicker("show");
  
  
      });
      

