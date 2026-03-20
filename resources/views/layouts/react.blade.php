<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#1a1d26">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>@yield('title', 'Plato Intel - Профессиональное оборудование')</title>
    <meta name="description" content="@yield('description', 'Поставка, монтаж и обслуживание профессионального оборудования для промышленности')">
    
    <link rel="canonical" href="{{ url()->current() }}">
    <link rel="icon" href="/i/favicon.png" type="image/svg+xml">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;500;600&family=PT+Sans:wght@400;500;700&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet">
    
    @vite(['resources/css/app.css', 'resources/js/main.tsx'])
</head>
<body>
    <div id="root"></div>
    
    @yield('scripts')
</body>
</html>
