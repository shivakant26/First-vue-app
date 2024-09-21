<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Section 1: Logo and Description -->
        <div class="footer-section">
          <img src="@/assets/images/logo.webp" alt="Logo" class="footer-logo" />
          <p class="footer-description">
            School Management System provides a seamless platform for managing students, teachers, and staff.
          </p>
        </div>
  
        <!-- Section 2: Quick Links -->
        <div class="footer-section">
          <h3 class="footer-heading">Quick Links</h3>
          <ul class="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
  
        <!-- Section 3: Contact Information -->
        <div class="footer-section">
          <h3 class="footer-heading">Contact Us</h3>
          <ul class="footer-contact">
            <li><i class="fas fa-phone"></i> +123 456 7890</li>
            <li><i class="fas fa-envelope"></i> info@school.com</li>
            <li><i class="fas fa-map-marker-alt"></i> 123 Main St, City</li>
          </ul>
        </div>
  
        <!-- Section 4: Social Media Links -->
        <div class="footer-section">
          <h3 class="footer-heading">Follow Us</h3>
          <div class="footer-socials">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
  
      <div class="footer-bottom">
        <p>&copy; 2024 School Management. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  #### 2. **CSS for Styling**
  
  ```css
  <style scoped>
  /* Footer Global Styling */
  .footer {
    background-color: #2c3e50;
    color: white;
    padding: 40px 20px;
    text-align: center;
  }
  
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-section {
    flex: 1;
    margin: 20px;
    min-width: 200px;
  }
  
  /* Footer Logo and Description */
  .footer-logo {
    height: 60px;
    margin-bottom: 10px;
  }
  
  .footer-description {
    font-size: 14px;
    color: #bdc3c7;
    line-height: 1.5;
  }
  
  /* Footer Heading */
  .footer-heading {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ecf0f1;
  }
  
  /* Quick Links */
  .footer-links {
    list-style: none;
    padding: 0;
  }
  
  .footer-links li {
    margin-bottom: 8px;
  }
  
  .footer-links a {
    text-decoration: none;
    color: #bdc3c7;
    transition: color 0.3s ease;
  }
  
  .footer-links a:hover {
    color: #3498db;
  }
  
  /* Contact Information */
  .footer-contact {
    list-style: none;
    padding: 0;
  }
  
  .footer-contact li {
    margin-bottom: 8px;
    font-size: 14px;
  }
  
  .footer-contact i {
    margin-right: 10px;
    color: #3498db;
  }
  
  /* Social Media Links */
  .footer-socials a {
    display: inline-block;
    margin-right: 10px;
    font-size: 18px;
    color: #bdc3c7;
    transition: color 0.3s ease;
  }
  
  .footer-socials a:hover {
    color: #3498db;
  }
  
  /* Footer Bottom */
  .footer-bottom {
    border-top: 1px solid #7f8c8d;
    margin-top: 30px;
    padding-top: 15px;
  }
  
  .footer-bottom p {
    font-size: 14px;
    color: #7f8c8d;
  }
  
  /* Responsive Design */
  @media screen and (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
    }
  
    .footer-section {
      text-align: center;
      margin: 10px 0;
    }
  }
  </style>
  