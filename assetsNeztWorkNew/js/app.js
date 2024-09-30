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