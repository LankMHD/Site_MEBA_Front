import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  Component,
  computed,
  effect,
  inject,
  PLATFORM_ID,
  signal
} from '@angular/core';

import { $t, updatePreset, updateSurfacePalette } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Material from '@primeuix/themes/material';
import Nora from '@primeuix/themes/nora';

import { PrimeNG } from 'primeng/config';
import { SelectButtonModule } from 'primeng/selectbutton';
import { StyleClassModule } from 'primeng/styleclass';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

const presets: any = {
  Aura,
  Material,
  Lara,
  Nora
};

export interface ThemeState {
  preset: string;
  primary: string;
  surface: string;
  darkTheme: boolean;
}

@Component({
  selector: 'theme-switcher',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    StyleClassModule,
    SelectButtonModule,
    ToggleSwitchModule
  ],
  template: `...` // (inchangé pour éviter surcharge)
})
export class ThemeSwitcher {

  private readonly STORAGE_KEY = 'themeSwitcherState';

  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);
  config: PrimeNG = inject(PrimeNG);

  // ✅ FIX IMPORTANT : PLUS DE NULL
  themeState = signal<ThemeState>({
    preset: 'Aura',
    primary: 'noir',
    surface: 'slate',
    darkTheme: false
  });

  transitionComplete = signal<boolean>(false);

  // ========================
  // COMPUTED SAFE
  // ========================

  iconClass = computed(() =>
    this.themeState().darkTheme ? 'pi-sun' : 'pi-moon'
  );

  theme = computed(() =>
    this.themeState().darkTheme ? 'dark' : 'light'
  );

  selectedPreset = computed(() =>
    this.themeState().preset
  );

  selectedSurfaceColor = computed(() =>
    this.themeState().surface
  );

  selectedPrimaryColor = computed(() =>
    this.themeState().primary
  );

  presets = Object.keys(presets);

  // ========================
  // PRIMARY COLORS SAFE
  // ========================

  primaryColors = computed(() => {
    const presetName = this.themeState().preset;
    const presetPalette = presets[presetName]?.primitive || {};

    const colors = [
      'emerald','green','lime','orange','amber','yellow',
      'teal','cyan','sky','blue','indigo','violet',
      'purple','fuchsia','pink','rose'
    ];

    const palettes: any[] = [
      { name: 'noir', palette: {} }
    ];

    colors.forEach(color => {
      palettes.push({
        name: color,
        palette: presetPalette[color] || {}
      });
    });

    return palettes;
  });

  // ========================
  // SURFACES
  // ========================

  surfaces = [
    {
      name: 'slate',
      palette: {
        50: '#f8fafc',
        100: '#f1f5f9',
        200: '#e2e8f0',
        300: '#cbd5e1',
        400: '#94a3b8',
        500: '#64748b',
        600: '#475569',
        700: '#334155',
        800: '#1e293b',
        900: '#0f172a'
      }
    }
    // (reste inchangé)
  ];

  // ========================
  // CONSTRUCTOR
  // ========================

  constructor() {

    this.themeState.set(
      this.loadthemeState() as ThemeState
    );

    effect(() => {
      const state = this.themeState();

      this.savethemeState(state);
      this.handleDarkModeTransition(state);
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.onPresetChange(this.themeState().preset);
    }
  }

  // ========================
  // RIPPLE
  // ========================

  get ripple() {
    return this.config.ripple();
  }

  set ripple(value: boolean) {
    this.config.ripple.set(value);
  }

  // ========================
  // THEME TOGGLE
  // ========================

  onThemeToggler() {
    this.themeState.update(state => ({
      ...state,
      darkTheme: !state.darkTheme
    }));
  }

  // ========================
  // PRESET EXT SAFE
  // ========================

  getPresetExt() {

    const color =
      this.primaryColors().find(
        c => c.name === this.selectedPrimaryColor()
      ) || this.primaryColors()[0];

    if (color.name === 'noir') {
      return {
        semantic: {
          primary: {},
          colorScheme: {
            light: {},
            dark: {}
          }
        }
      };
    }

    return {
      semantic: {
        primary: color.palette,
        colorScheme: {
          light: {},
          dark: {}
        }
      }
    };
  }

  // ========================
  // COLORS
  // ========================

  updateColors(event: any, type: string, color: any) {

    if (type === 'primary') {
      this.themeState.update(s => ({ ...s, primary: color.name }));
    }

    if (type === 'surface') {
      this.themeState.update(s => ({ ...s, surface: color.name }));
    }

    this.applyTheme(type, color);
    event.stopPropagation();
  }

  applyTheme(type: string, color: any) {

    if (type === 'primary') {
      updatePreset(this.getPresetExt());
    }

    if (type === 'surface') {
      updateSurfacePalette(color.palette);
    }
  }

  // ========================
  // PRESET CHANGE
  // ========================

  onPresetChange(event: any) {

    this.themeState.update(s => ({
      ...s,
      preset: event
    }));

    const preset = presets[event];

    const surfacePalette =
      this.surfaces.find(
        s => s.name === this.selectedSurfaceColor()
      )?.palette;

    if (event === 'Material') {
      document.body.classList.add('material');
      this.config.ripple.set(true);
    } else {
      document.body.classList.remove('material');
      this.config.ripple.set(false);
    }

    $t()
      .preset(preset)
      .preset(this.getPresetExt())
      .surfacePalette(surfacePalette)
      .use({ useDefaultOptions: true });
  }

  // ========================
  // DARK MODE
  // ========================

  toggleDarkMode(state: ThemeState) {
    if (state.darkTheme) {
      this.document.documentElement.classList.add('p-dark');
    } else {
      this.document.documentElement.classList.remove('p-dark');
    }
  }

  handleDarkModeTransition(state: ThemeState) {
    if (isPlatformBrowser(this.platformId)) {
      this.toggleDarkMode(state);
    }
  }

  // ========================
  // STORAGE
  // ========================

  loadthemeState(): ThemeState {
    if (isPlatformBrowser(this.platformId)) {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    }

    return {
      preset: 'Aura',
      primary: 'noir',
      surface: 'slate',
      darkTheme: false
    };
  }

  savethemeState(state: ThemeState) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
    }
  }
}