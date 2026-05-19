# 🚀 Cargalo

Aplicación móvil con **Capacitor + React + TypeScript** para iOS y Android.

## 📋 Requisitos

- Node.js 16+
- npm o yarn
- **Para Android:** Android Studio
- **Para iOS:** macOS + Xcode

## 🚀 Inicio Rápido

### 1. Clonar el repositorio
```bash
git clone https://github.com/miguelnavarreto-lab/Cargalo.git
cd Cargalo
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Agregar plataformas
```bash
# Android
npx cap add android

# iOS (requiere macOS + Xcode)
npx cap add ios
```

### 4. Construir y sincronizar
```bash
npm run build && npx cap sync
```

### 5. Abrir en el IDE
```bash
# Android Studio
npx cap open android

# Xcode (macOS)
npx cap open ios
```

### 6. Ejecutar la aplicación
- En **Android Studio:** Click en **Run ▶**
- En **Xcode:** Click en **Run ▶**

## 📱 Scripts Disponibles

```bash
npm run dev           # Desarrollo en navegador
npm run build         # Construir para producción
npm run sync          # Sincronizar con Capacitor
npm run open:android  # Abrir Android Studio
npm run open:ios      # Abrir Xcode
npm run lint          # Verificar código
```

## 📂 Estructura del Proyecto

```
Cargalo/
├── src/
│   ├── main.tsx       # Entrada principal
│   ├── App.tsx        # Componente principal
│   ├── App.css        # Estilos
│   └── index.css      # Estilos globales
├── android/           # Proyecto Android (generado)
├── ios/               # Proyecto iOS (generado)
├── dist/              # Build de producción
├── package.json       # Dependencias
├── vite.config.ts     # Configuración Vite
├── capacitor.config.ts # Configuración Capacitor
└── tsconfig.json      # Configuración TypeScript
```

## 🔧 Tecnologías

- **React 18** - UI Framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Capacitor 6** - Cross-platform mobile
- **TailwindCSS** (opcional)

## 📝 Notas

- Los cambios en `src/` se reflejan automáticamente en navegador (HMR)
- Después de cambios significativos, ejecuta `npm run build && npx cap sync`
- Para producción, genera builds optimizados con `npm run build`

## 📞 Soporte

- [Documentación Capacitor](https://capacitorjs.com/docs)
- [Documentación React](https://react.dev)
- [Documentación Vite](https://vitejs.dev)

---

✨ **Listo para empezar a desarrollar!**
