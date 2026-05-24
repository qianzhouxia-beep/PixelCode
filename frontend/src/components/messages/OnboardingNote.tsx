export function OnboardingNote() {
  return (
    <div className="flex flex-col space-y-4 bg-violet-700 p-2 rounded text-stone-200 text-sm">
      <span>
        欢迎使用 <strong>PixelCode</strong>！上传截图或设计稿，AI 自动生成高质量前端代码。
        免费用户每日 3 次体验。需要更多次数？{" "}
        <a
          className="inline underline hover:opacity-70 font-semibold"
          href="#pricing"
          target="_blank"
        >
          查看定价方案 →
        </a>
      </span>
    </div>
  );
}
