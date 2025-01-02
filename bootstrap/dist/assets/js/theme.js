/**
=========================================================================
=========================================================================
Template Name: Gradient Able - Admin Template
Author: CodedThemes
Support: https://codedthemes.support-hub.io/
File: themes.js
Description:  this file will contains overall theme setup and handle
              behavior of live custumizer like Dark/Light, LTR/RTL,
              preset color, theme layout, theme contarast etc.
=========================================================================
=========================================================================
*/

var rtl_flag = false;
var dark_flag = false;

function layout_change_default() {
  // Determine the initial layout based on the user's system preference for color scheme
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  let dark_layout = prefersDarkScheme.matches ? 'dark' : 'light';

  // Apply the initial layout
  layout_change(dark_layout);

  // Set the active class on the default theme button, if it exists
  const btn_control = document.querySelector('.theme-layout .btn[data-value="default"]');
  if (btn_control) {
    btn_control.classList.add('active');
  }

  // Listen for changes in the user's system color scheme preference
  prefersDarkScheme.addEventListener('change', (event) => {
    dark_layout = event.matches ? 'dark' : 'light';
    layout_change(dark_layout);
  });
}

// // dark switch mode
function dark_mode() {
  const darkModeToggle = document.getElementById('dark-mode');

  // Ensure the element exists before proceeding
  if (!darkModeToggle) return;

  // Toggle between dark and light modes based on the checkbox status
  const mode = darkModeToggle.checked ? 'dark' : 'light';
  layout_change(mode);
}

// preset color
document.addEventListener('DOMContentLoaded', function () {
  // Handle preset color changes
  const presetColors = document.querySelectorAll('.preset-color > a');

  // Check if there are preset color options available
  if (presetColors.length) {
    // Iterate over each preset color element
    presetColors.forEach((colorElement) => {
      // Add a click event listener to each color option
      colorElement.addEventListener('click', function (event) {
        let targetElement = event.target; // Get the clicked element

        // Check if the clicked element is a <span> or <img> and traverse to the parent <a>
        if (targetElement.tagName === 'SPAN') {
          targetElement = targetElement.parentNode; // If it's a <span>, move to parent <a>
        } else if (targetElement.tagName === 'IMG') {
          targetElement = targetElement.closest('a'); // If it's an <img>, find the nearest <a> ancestor
        }

        // Get the data-value attribute from the clickable element
        const presetValue = targetElement.getAttribute('data-value');

        // Call the function to apply the preset change using the selected value
        preset_change(presetValue);
      });
    });
  }

  // Check if elements with the class 'header-color' exist
  var if_exist = document.querySelectorAll('.header-color');

  if (if_exist.length > 0) {
    // Get all anchor (<a>) elements inside '.header-color' (preset color options)
    var preset_color = document.querySelectorAll('.header-color > a');

    // Iterate through each color option
    for (var h = 0; h < preset_color.length; h++) {
      var c = preset_color[h]; // current color option

      // Add click event listener to each color option
      c.addEventListener('click', function (event) {
        var targetElement = event.target; // element that triggered the event

        // If a <span> inside the anchor is clicked, change the target to the parent anchor
        if (targetElement.tagName == 'SPAN') {
          targetElement = targetElement.parentNode;
        }

        // Get the data-value attribute of the clicked color option
        var selectedColor = targetElement.getAttribute('data-value');

        // Call the header_change function to apply the selected color
        header_change(selectedColor);
      });
    }
  }

  // Initialize SimpleBar if .pct-body exists
  const pctBody = document.querySelector('.pct-body');
  if (pctBody) {
    new SimpleBar(pctBody);
  }

  // Handle layout reset
  const layoutResetBtn = document.querySelector('#layoutreset');
  if (layoutResetBtn) {
    layoutResetBtn.addEventListener('click', () => location.reload());
  }

  // Handle RTL layout toggle
  const rtlLayoutToggle = document.querySelector('#layoutmodertl');
  if (rtlLayoutToggle) {
    rtlLayoutToggle.addEventListener('click', () => {
      const isChecked = rtlLayoutToggle.checked ? 'true' : 'false';
      layout_rtl_change(isChecked);
    });
  }
});
function layout_sidebar_change(value) {
  if (value == 'dark') {
    // Set the sidebar theme to 'dark'
    document.getElementsByTagName('body')[0].setAttribute('data-pc-sidebar-theme', 'dark');

    // Find the active button in the sidebar theme control and remove its active class
    var control = document.querySelector('.theme-sidebar-color .btn.active');
    if (control) {
      control.classList.remove('active'); // Remove active class from current button
    }

    // Add the active class to the button representing the dark theme
    var darkBtn = document.querySelector(".theme-sidebar-color .btn[data-value='true']");
    if (darkBtn) {
      darkBtn.classList.add('active'); // Set the active class for dark theme
    }
  } else {
    // Set the sidebar theme to 'light'
    document.getElementsByTagName('body')[0].setAttribute('data-pc-sidebar-theme', 'light');

    // Find the active button in the sidebar theme control and remove its active class
    var control = document.querySelector('.theme-sidebar-color .btn.active');
    if (control) {
      control.classList.remove('active'); // Remove active class from current button
    }

    // Add the active class to the button representing the light theme
    var lightBtn = document.querySelector(".theme-sidebar-color .btn[data-value='false']");
    if (lightBtn) {
      lightBtn.classList.add('active'); // Set the active class for light theme
    }
  }
}

// function header_change(value) {
//   if (value == 'dark') {
//     // Set the header theme to 'dark'
//     document.getElementsByTagName('body')[0].setAttribute('data-pc-header-theme', 'dark');

//     // Find the active button in the header theme control and remove its active class
//     var control = document.querySelector('.theme-header-color .btn.active');
//     if (control) {
//       control.classList.remove('active'); // Remove active class from current button
//     }

//     // Add the active class to the button representing the dark theme
//     var darkBtn = document.querySelector(".theme-header-color .btn[data-value='true']");
//     if (darkBtn) {
//       darkBtn.classList.add('active'); // Set the active class for dark theme
//     }
//   } else {
//     // Set the header theme to 'light'
//     document.getElementsByTagName('body')[0].setAttribute('data-pc-header-theme', 'light');

//     // Find the active button in the header theme control and remove its active class
//     var control = document.querySelector('.theme-header-color .btn.active');
//     if (control) {
//       control.classList.remove('active'); // Remove active class from current button
//     }

//     // Add the active class to the button representing the light theme
//     var lightBtn = document.querySelector(".theme-header-color .btn[data-value='false']");
//     if (lightBtn) {
//       lightBtn.classList.add('active'); // Set the active class for light theme
//     }
//   }
// }
// Function to change the header color/theme based on the provided value
function header_change(value) {
  // Update the 'data-pc-header' attribute on the body element
  document.body.setAttribute('data-pc-header', value);

  // Check if the offcanvas control exists, then proceed
  const offcanvasControl = document.querySelector('.pct-offcanvas');
  if (offcanvasControl) {
    // Remove the 'active' class from the currently active header color link
    const activeLink = document.querySelector('.header-color > a.active');
    if (activeLink) {
      activeLink.classList.remove('active');
    }

    // Add the 'active' class to the newly selected header color link
    const newActiveLink = document.querySelector(`.header-color > a[data-value='${value}']`);
    if (newActiveLink) {
      newActiveLink.classList.add('active');
    }
  }
}

function layout_caption_change(value) {
  document.body.setAttribute('data-pc-sidebar-caption', value);
  var control = document.querySelector('.theme-nav-caption .btn.active');
  if (control) {
    control.classList.remove('active');
  }
  var newActive = document.querySelector(`.theme-nav-caption .btn[data-value='${value}']`);
  if (newActive) {
    newActive.classList.add('active');
  }
}

function preset_change(value) {
  const body = document.querySelector('body');
  const control = document.querySelector('.pct-offcanvas');

  // Set the 'data-pc-preset' attribute on the body
  body.setAttribute('data-pc-preset', value);

  // Update active state in the UI if control exists
  if (control) {
    const activeElement = document.querySelector('.preset-color > a.active');
    const newActiveElement = document.querySelector(`.preset-color > a[data-value='${value}']`);

    if (activeElement) {
      activeElement.classList.remove('active');
    }
    if (newActiveElement) {
      newActiveElement.classList.add('active');
    }
  }
}

function layout_rtl_change(value) {
  const body = document.querySelector('body');
  const html = document.querySelector('html');
  const directionControl = document.querySelector('.theme-direction .btn.active');
  const rtlBtn = document.querySelector(".theme-direction .btn[data-value='true']");
  const ltrBtn = document.querySelector(".theme-direction .btn[data-value='false']");

  if (value === 'true') {
    rtl_flag = true;
    body.setAttribute('data-pc-direction', 'rtl');
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');

    // Update active button state for RTL
    if (directionControl) directionControl.classList.remove('active');
    if (rtlBtn) rtlBtn.classList.add('active');
  } else {
    rtl_flag = false;
    body.setAttribute('data-pc-direction', 'ltr');
    html.removeAttribute('dir');
    html.removeAttribute('lang');

    // Update active button state for LTR
    if (directionControl) directionControl.classList.remove('active');
    if (ltrBtn) ltrBtn.classList.add('active');
  }
}

// Function to change the layout theme (dark or light)
function layout_change(layout) {
  // Set the layout theme attribute on the body element
  document.body.setAttribute('data-pc-theme', layout);

  // Find and remove the active class from the default theme button, if it exists
  const defaultBtn = document.querySelector('.theme-layout .btn[data-value="default"]');
  if (defaultBtn) {
    defaultBtn.classList.remove('active');
  }

  // Check if the theme is 'dark'
  if (layout === 'dark') {
    dark_flag = true; // Set the dark flag to true

    // Update logo sources for dark theme
    const authSideFooterImg = document.querySelector('.auth-main.v1 .auth-sidefooter img');
    if (authSideFooterImg) {
      authSideFooterImg.setAttribute('src', '../assets/images/logo-white.svg');
    }

    const footerLogo = document.querySelector('.footer-top .footer-logo');
    if (footerLogo) {
      footerLogo.setAttribute('src', '../assets/images/logo-white.svg');
    }

    // Update the active button state for dark theme
    const activeBtn = document.querySelector('.theme-layout .btn.active');
    if (activeBtn) {
      activeBtn.classList.remove('active');
    }
    const darkBtn = document.querySelector(".theme-layout .btn[data-value='false']");
    if (darkBtn) {
      darkBtn.classList.add('active');
    }
  } else {
    dark_flag = false; // Set the dark flag to false for light theme

    // Update logo sources for light theme
    const authSideFooterImg = document.querySelector('.auth-main.v1 .auth-sidefooter img');
    if (authSideFooterImg) {
      authSideFooterImg.setAttribute('src', '../assets/images/logo-dark.svg');
    }

    const footerLogo = document.querySelector('.footer-top .footer-logo');
    if (footerLogo) {
      footerLogo.setAttribute('src', '../assets/images/logo-dark.svg');
    }

    // Update the active button state for light theme
    const activeBtn = document.querySelector('.theme-layout .btn.active');
    if (activeBtn) {
      activeBtn.classList.remove('active');
    }
    const lightBtn = document.querySelector(".theme-layout .btn[data-value='true']");
    if (lightBtn) {
      lightBtn.classList.add('active');
    }
  }
}

function change_box_container(value) {
  // Check if the .pc-content element exists
  if (document.querySelector('.pc-content')) {
    // If value is 'true', switch to boxed layout
    if (value == 'true') {
      // Add 'container' class to the content and footer, remove 'container-fluid' from the footer
      document.querySelector('.pc-content').classList.add('container');
      document.querySelector('.footer-wrapper').classList.add('container');
      document.querySelector('.footer-wrapper').classList.remove('container-fluid');

      // Update the active button for the boxed layout option
      var control = document.querySelector('.theme-container .btn.active');
      if (control) {
        control.classList.remove('active');
        document.querySelector(".theme-container .btn[data-value='true']").classList.add('active');
      }
    }
    // If value is not 'true', switch to full-width layout
    else {
      // Remove 'container' class and add 'container-fluid' to the footer
      document.querySelector('.pc-content').classList.remove('container');
      document.querySelector('.footer-wrapper').classList.remove('container');
      document.querySelector('.footer-wrapper').classList.add('container-fluid');

      // Update the active button for the full-width layout option
      var control = document.querySelector('.theme-container .btn.active');
      if (control) {
        control.classList.remove('active');
        document.querySelector(".theme-container .btn[data-value='false']").classList.add('active');
      }
    }
  }
}
