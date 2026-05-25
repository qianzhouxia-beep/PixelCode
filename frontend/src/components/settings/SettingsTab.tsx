import React from "react";
import { AppTheme, EditorTheme, Settings } from "../../types";
import { capitalize } from "../../lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../ui/select";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";
import { IS_RUNNING_ON_CLOUD } from "../../config";
import { useTranslation } from "../../i18n";

interface Props {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
  appTheme: AppTheme;
  setAppTheme: React.Dispatch<React.SetStateAction<AppTheme>>;
}

function SettingsTab({ settings, setSettings, appTheme, setAppTheme }: Props) {
  const { t } = useTranslation();
  const handleThemeChange = (theme: EditorTheme) => {
    setSettings((s) => ({
      ...s,
      editorTheme: theme,
    }));
  };

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-4 py-4 lg:px-6 lg:py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-lg font-semibold text-gray-100">
            {t('settings.title')}
          </h1>
        </div>

        <div className="mx-auto max-w-lg space-y-6">
          {/* Theme */}
          <div className="rounded-lg border border-white/10 bg-white/5">
            <div className="border-b border-white/10 px-4 py-3">
              <h2 className="text-sm font-medium text-gray-100">
                {t('settings.theme')}
              </h2>
            </div>
            <div className="divide-y divide-white/10">
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <span className="text-sm text-gray-200">
                    {t('settings.app_theme')}
                  </span>
                  <p className="mt-0.5 text-xs text-gray-400">
                    {t('settings.app_theme_desc')}
                  </p>
                </div>
                <Select
                  name="app-theme"
                  value={appTheme}
                  onValueChange={(value) => setAppTheme(value as AppTheme)}
                >
                  <SelectTrigger className="w-[140px]">
                    {capitalize(appTheme)}
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={AppTheme.SYSTEM}>{t('settings.system')}</SelectItem>
                    <SelectItem value={AppTheme.LIGHT}>{t('settings.light')}</SelectItem>
                    <SelectItem value={AppTheme.DARK}>{t('settings.dark')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div>
                  <span className="text-sm text-gray-200">
                    {t('settings.editor_theme')}
                  </span>
                  <p className="mt-0.5 text-xs text-gray-400">
                    {t('settings.editor_theme_desc')}
                  </p>
                </div>
                <Select
                  name="editor-theme"
                  value={settings.editorTheme}
                  onValueChange={(value) =>
                    handleThemeChange(value as EditorTheme)
                  }
                >
                  <SelectTrigger className="w-[140px]">
                    <span className="notranslate" translate="no">
                      {capitalize(settings.editorTheme)}
                    </span>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cobalt">
                      <span className="notranslate" translate="no">Cobalt</span>
                    </SelectItem>
                    <SelectItem value="espresso">
                      <span className="notranslate" translate="no">Espresso</span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* API Keys */}
          <div className="rounded-lg border border-white/10 bg-white/5">
            <div className="border-b border-white/10 px-4 py-3">
              <h2 className="text-sm font-medium text-gray-100">
                {t('settings.api_keys')}
              </h2>
            </div>
            <div className="space-y-4 p-4">
              <div>
                <p className="text-sm font-medium text-gray-200">
                  {t('settings.openai_key')}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {t('settings.openai_key_desc')}
                </p>
                <Input
                  id="openai-api-key"
                  className="mt-2"
                  placeholder={t('settings.openai_key')}
                  value={settings.openAiApiKey || ""}
                  onChange={(e) =>
                    setSettings((s) => ({
                      ...s,
                      openAiApiKey: e.target.value,
                    }))
                  }
                />
              </div>

              {!IS_RUNNING_ON_CLOUD && (
                <div>
                  <p className="text-sm font-medium text-gray-200">
                    {t('settings.openai_base_url')}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {t('settings.openai_base_url_desc')}
                  </p>
                  <Input
                    id="openai-base-url"
                    className="mt-2"
                    placeholder={t('settings.openai_base_url')}
                    value={settings.openAiBaseURL || ""}
                    onChange={(e) =>
                      setSettings((s) => ({
                        ...s,
                        openAiBaseURL: e.target.value,
                      }))
                    }
                  />
                </div>
              )}

              <div>
                <p className="text-sm font-medium text-gray-200">
                  {t('settings.anthropic_key')}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {t('settings.anthropic_key_desc')}
                </p>
                <Input
                  id="anthropic-api-key"
                  className="mt-2"
                  placeholder={t('settings.anthropic_key')}
                  value={settings.anthropicApiKey || ""}
                  onChange={(e) =>
                    setSettings((s) => ({
                      ...s,
                      anthropicApiKey: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-200">
                  {t('settings.gemini_key')}
                </p>
                <p className="mt-1 text-xs text-gray-400">
                  {t('settings.gemini_key_desc')}
                </p>
                <Input
                  id="gemini-api-key"
                  className="mt-2"
                  placeholder={t('settings.gemini_key')}
                  value={settings.geminiApiKey || ""}
                  onChange={(e) =>
                    setSettings((s) => ({
                      ...s,
                      geminiApiKey: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>

          {/* Image Generation */}
          <div className="rounded-lg border border-white/10 bg-white/5">
            <div className="border-b border-white/10 px-4 py-3">
              <h2 className="text-sm font-medium text-gray-100">
                {t('settings.image_generation')}
              </h2>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-200">
                    {t('settings.placeholder_images')}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {t('settings.placeholder_images_desc')}
                  </p>
                </div>
                <Switch
                  id="image-generation"
                  checked={settings.isImageGenerationEnabled}
                  onCheckedChange={() =>
                    setSettings((s) => ({
                      ...s,
                      isImageGenerationEnabled: !s.isImageGenerationEnabled,
                    }))
                  }
                />
              </div>
            </div>
          </div>

          {/* Screenshot by URL */}
          <div className="rounded-lg border border-white/10 bg-white/5">
            <div className="border-b border-white/10 px-4 py-3">
              <h2 className="text-sm font-medium text-gray-100">
                {t('settings.screenshot_url')}
              </h2>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-400">
                {t('settings.screenshot_url_desc')}{" "}
                <a
                  href="https://screenshotone.com?via=screenshot-to-code"
                  className="text-purple-400 hover:text-purple-300"
                  target="_blank"
                >
                  Get 100 screenshots/mo for free.
                </a>
              </p>
              <Input
                id="screenshot-one-api-key"
                className="mt-3"
                placeholder={t('settings.screenshot_key_placeholder')}
                value={settings.screenshotOneApiKey || ""}
                onChange={(e) =>
                  setSettings((s) => ({
                    ...s,
                    screenshotOneApiKey: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsTab;
