<!-- Plato Intel 2026 - Compact Header -->
<header class="new-header">
  <div class="header-container">
    <!-- Logo -->
    <div class="logo" onclick="window.location.href='/'">
      <div class="logo-lamp">
        <svg viewBox="0 0 70 90" class="lamp-svg">
          <defs>
            <radialGradient id="flameCore2" cx="50%" cy="55%" r="45%">
              <stop offset="0%" stop-color="#fff5e6" stop-opacity="1" />
              <stop offset="20%" stop-color="#ffd7a8" stop-opacity="0.95" />
              <stop offset="50%" stop-color="#ffaa00" stop-opacity="0.8" />
              <stop offset="80%" stop-color="#ff6600" stop-opacity="0.5" />
              <stop offset="100%" stop-color="#ff4400" stop-opacity="0.2" />
            </radialGradient>
            <filter id="glowFilter2">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d="M20 72 L22 82 L48 82 L50 72 Z" fill="#4a4a4a" />
          <rect x="18" y="68" width="34" height="8" rx="2" fill="#5a5a5a" />
          <path d="M23 62 L25 68 L45 68 L47 62 Z" fill="#6a6a6a" />
          <ellipse cx="35" cy="62" rx="14" ry="4" fill="#7a7a7a" />
          <path d="M15 62 Q15 15 35 10 Q55 15 55 62 Z" fill="url(#flameCore2)" opacity="0.9" />
          <g transform="translate(35, 38)" filter="url(#glowFilter2)">
            <rect x="-12" y="-10" width="24" height="20" rx="3" fill="#ffdd88" />
            <circle cx="0" cy="10" r="5" fill="#ff9933" />
          </g>
        </svg>
      </div>
      <div class="logo-text">
        <span>PLATO</span>
        <span class="separator">-</span>
        <span>INTEL</span>
      </div>
    </div>

    <!-- Catalog Menu -->
    <div class="catalog-menu" onmouseenter="this.classList.add('open')" onmouseleave="this.classList.remove('open')">
      <button class="catalog-btn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
        <span>КАТАЛОГ</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="arrow">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="catalog-dropdown">
        @if(isset($categories))
          @foreach($categories as $category)
            <a href="{{ route('catalog', $category->link) }}" class="catalog-item">
              <span>{{ $category->name }}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          @endforeach
        @endif
      </div>
    </div>

    <!-- Header Actions -->
    <div class="header-actions">
      <!-- Search -->
      <button class="search-btn" onclick="toggleSearch()">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
      
      <!-- Phone -->
      <a href="tel:+375296155672" class="phone-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span>+375 (29) 615-56-72</span>
      </a>

      <!-- Cart -->
      @if(isset($cart))
      <a href="{{ route('order') }}" class="cart-btn {{ $cart->count > 0 ? 'active' : '' }}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
        <span class="cart-count">{{ $cart->count }}</span>
      </a>
      @endif

      <!-- Mobile Menu Toggle -->
      <button class="mobile-toggle" onclick="toggleMobileMenu()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  </div>

  <!-- Search Overlay -->
  <div id="searchOverlay" class="search-overlay" style="display:none;">
    <div class="search-container">
      <form action="/search" method="get" class="search-form">
        <input type="text" name="q" placeholder="Поиск товаров..." autofocus />
        <button type="submit">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>
      <button class="search-close" onclick="toggleSearch()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div id="mobileMenu" class="mobile-menu" style="display:none;">
    @if(isset($siteMenus))
      @foreach($siteMenus as $menu)
        <a href="{{ url($menu->url) }}" class="mobile-menu-item">{{ $menu->title }}</a>
      @endforeach
    @endif
    @if(isset($categories))
      @foreach($categories as $category)
        <a href="{{ route('catalog', $category->link) }}" class="mobile-menu-item">{{ $category->name }}</a>
      @endforeach
    @endif
  </div>
</header>

<style>
/* New Header Styles 2026 */
.new-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: #232731;
  box-shadow: 0 2px 12px rgba(0,0,0,0.3);
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 24px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
}

.logo-lamp {
  width: 45px;
  height: 60px;
}

.lamp-svg {
  width: 100%;
  height: 100%;
  animation: lampFlicker 4s infinite ease-in-out;
}

@keyframes lampFlicker {
  0%, 100% { filter: drop-shadow(0 0 4px #ffaa00) drop-shadow(0 0 8px #ff8800); }
  50% { filter: drop-shadow(0 0 6px #ffaa00) drop-shadow(0 0 10px #ff8800); }
}

.logo-text {
  display: flex;
  gap: 2px;
  font-family: 'Bebas Neue', sans-serif;
}

.logo-text span:first-child {
  font-size: 24px;
  color: #e8e4dc;
}

.logo-text .separator {
  color: #ff9a4d;
  font-size: 18px;
}

.logo-text span:last-child {
  font-size: 18px;
  color: #ff9a4d;
}

/* Catalog Menu */
.catalog-menu {
  position: relative;
}

.catalog-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #2d313c;
  border: 1px solid rgba(148, 143, 136, 0.15);
  border-radius: 8px;
  color: #e8e4dc;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
}

.catalog-btn:hover {
  border-color: #ff9a4d;
  color: #ff9a4d;
}

.catalog-btn .arrow {
  transition: transform 0.3s;
}

.catalog-menu.open .catalog-btn .arrow {
  transform: rotate(180deg);
}

.catalog-dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  min-width: 280px;
  background: #232731;
  border: 1px solid rgba(148, 143, 136, 0.15);
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 8px 24px rgba(0,0,0,0.4);
  z-index: 1001;
}

.catalog-menu.open .catalog-dropdown {
  display: block;
}

.catalog-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  color: #9a9590;
  text-decoration: none;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  border-radius: 6px;
  transition: all 0.3s;
}

.catalog-item:hover {
  background: rgba(255, 154, 77, 0.1);
  color: #e8e4dc;
}

/* Header Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: auto;
}

.search-btn, .mobile-toggle {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2d313c;
  border: 1px solid rgba(148, 143, 136, 0.15);
  border-radius: 8px;
  color: #9a9590;
  cursor: pointer;
  transition: all 0.3s;
}

.search-btn:hover, .mobile-toggle:hover {
  border-color: #ff9a4d;
  color: #ff9a4d;
}

.mobile-toggle {
  display: none;
}

.phone-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #2d313c;
  border: 1px solid rgba(148, 143, 136, 0.15);
  border-radius: 8px;
  color: #e8e4dc;
  text-decoration: none;
  font-family: 'JetBrains Mono', monospace;
  font-size: 14px;
  transition: all 0.3s;
}

.phone-link:hover {
  border-color: #ff9a4d;
  color: #ff9a4d;
}

.cart-btn {
  position: relative;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2d313c;
  border: 1px solid rgba(148, 143, 136, 0.15);
  border-radius: 8px;
  color: #9a9590;
  text-decoration: none;
  transition: all 0.3s;
}

.cart-btn:hover {
  border-color: #ff9a4d;
  color: #ff9a4d;
}

.cart-count {
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff9a4d;
  color: #1a1d26;
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: bold;
  border-radius: 10px;
  padding: 2px;
}

/* Search Overlay */
.search-overlay {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: #232731;
  padding: 20px;
  border-bottom: 1px solid rgba(148, 143, 136, 0.15);
}

.search-container {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-form {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-form input {
  flex: 1;
  padding: 12px 16px;
  background: #2d313c;
  border: 1px solid rgba(148, 143, 136, 0.15);
  border-radius: 8px;
  color: #e8e4dc;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  outline: none;
}

.search-form input:focus {
  border-color: #ff9a4d;
}

.search-form button {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ff9a4d;
  border: none;
  border-radius: 8px;
  color: #1a1d26;
  cursor: pointer;
}

.search-close {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2d313c;
  border: 1px solid rgba(148, 143, 136, 0.15);
  border-radius: 8px;
  color: #9a9590;
  cursor: pointer;
}

.search-close:hover {
  border-color: #ff9a4d;
  color: #ff9a4d;
}

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: #232731;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-bottom: 1px solid rgba(148, 143, 136, 0.15);
}

.mobile-menu-item {
  padding: 14px 16px;
  background: #2d313c;
  border: 1px solid rgba(148, 143, 136, 0.15);
  border-radius: 8px;
  color: #e8e4dc;
  text-decoration: none;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 14px;
}

/* Responsive */
@media (max-width: 768px) {
  .header-container {
    gap: 12px;
    padding: 0 12px;
  }

  .logo-lamp {
    width: 35px;
    height: 48px;
  }

  .logo-text span:first-child {
    font-size: 18px;
  }

  .logo-text .separator {
    font-size: 14px;
  }

  .logo-text span:last-child {
    font-size: 14px;
  }

  .catalog-btn span {
    display: none;
  }

  .phone-link span {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }
}
</style>

<script>
function toggleSearch() {
  const overlay = document.getElementById('searchOverlay');
  overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
  if (overlay.style.display === 'block') {
    overlay.querySelector('input').focus();
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}
</script>
