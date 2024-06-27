<script setup></script>

<template>
  <div
    class="h-screen w-screen flex flex-col gap-10 bg-neutral-100 p-10 font-sans"
  >
    <h4 class="text-2xl font-bold">
      OB Design - Dev
    </h4>

    <ObSection id="button" title="按钮">
      <!-- 颜色 -->
      <ObSectionBlock title="类型">
        <ObButton>
          default
        </ObButton>
        <ObButton type="primary">
          primary
        </ObButton>
        <ObButton type="info">
          info
        </ObButton>
        ...
      </ObSectionBlock>

      <!-- 尺寸 -->
      <ObSectionBlock title="尺寸">
        <ObButton size="small">
          small
        </ObButton>
        <ObButton>
          default
        </ObButton>
        <ObButton size="large">
          large
        </ObButton>
      </ObSectionBlock>
    </ObSection>
  </div>
</template>
