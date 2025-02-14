<script lang="ts">
  import "../app.css";
  import Footer from "$lib/sections/Footer.svelte"
  import { fade } from "svelte/transition";
  import { onMount } from "svelte";
	import { altData } from "../stores";
  import { sha256 } from "js-sha256";

  export const prerender = true;
  export const trailingSlash = "always";

  const altDataHash = "d1030c01ecee6ab21a0bfb303164784eb1d9a86f7717be438055112c7dda1d3a"

  let mousePosition: {x: number, y: number} | null;

	function mousemove(event: MouseEvent) {
    if (event.currentTarget != null) {
      let r = event.currentTarget?.getBoundingClientRect();
      mousePosition = 
		  mousePosition = {x:event.clientX-r.left, y:event.clientY-r.top}
    }
	}

  onMount(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const altDataUrl = urlParams.get('a');

    if (typeof(altDataUrl) == "string") {
      fetch(altDataUrl).then((response) => response.json()).then((body) => {
        const data = body?.record

        if (data) {
          if (sha256(JSON.stringify(data)) === altDataHash) {
            altData.set(data);
          } else {
            console.error('Data hash mismatch');
          }
        }
      })
    }
  });
</script>

<!-- svelte-ignore a11y-no-static-element-interactions (background glow is not interactable)> -->
<div class="overflow-hidden" on:mousemove={mousemove}>
  {#if mousePosition}
		<span transition:fade  class="overflow-hidden blur-[40vh] absolute top-[-35vh] left-[-35vh] w-[70vh] h-[70vh] rounded-[50%] bg-[#9F84FF70] pointer-events-none" style:transform="translate({mousePosition.x}px, {mousePosition.y}px)"></span>
	{/if}

  <div class="pl-2 pr-2 w-full flex-col inline-flex justify-center items-center">
    <span class="bg-[#00000080] pr-2 pl-2">
      <slot />
      <Footer />      
    </span>
  </div>

  <span class="fixed animate-pulse w-[100vw] h-[100vh] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -z-10 select-none pointer-events-none text-xl text-[#b6a2ff20]">
    {@html "local OnyxUI = script.Parent.Parent local Fusion = require(OnyxUI.Parent.Fusion) local EnsureValue = require(OnyxUI.Utils.EnsureValue) local Themer = require(OnyxUI.Utils.Themer) local Colors = require(OnyxUI.Utils.Colors) local PubTypes = require(OnyxUI.Utils.PubTypes) local CombineProps = require(OnyxUI.Utils.CombineProps) local Children = Fusion.Children local Computed = Fusion.Computed local Spring = Fusion.Spring local Image = require(script.Parent.Image) local CanvasGroup = require(script.Parent.CanvasGroup) local Icon = require(script.Parent.Icon) export type Props = Image.Props &amp;amp;amp; { Image: PubTypes.CanBeState&amp;amp;lt;string&amp;amp;gt;?, RingEnabled: PubTypes.CanBeState&amp;amp;lt;boolean&amp;amp;gt;?, RingColor: PubTypes.CanBeState&amp;amp;lt;Color3&amp;amp;gt;?, RingThickness: PubTypes.CanBeState&amp;amp;lt;number&amp;amp;gt;?, IndicatorEnabled: PubTypes.CanBeState&amp;amp;lt;boolean&amp;amp;gt;?, IndicatorColor: PubTypes.CanBeState&amp;amp;lt;Color3&amp;amp;gt;?, IndicatorIcon: PubTypes.CanBeState&amp;amp;lt;string&amp;amp;gt;?, IndicatorIconColor: PubTypes.CanBeState&amp;amp;lt;Color3&amp;amp;gt;?, IndicatorCornerRadius: PubTypes.CanBeState&amp;amp;lt;UDim&amp;amp;gt;?, } return function(Props: Props) local EnsuredProps = { Image = EnsureValue(Props.Image, &amp;amp;quot;string&amp;amp;quot;, nil), RingEnabled = EnsureValue(Props.RingEnabled, &amp;amp;quot;boolean&amp;amp;quot;, false), RingColor = EnsureValue(Props.RingColor, &amp;amp;quot;Color3&amp;amp;quot;, Themer.Theme.Colors.Primary.Main), RingThickness = EnsureValue(Props.RingThickness, &amp;amp;quot;number&amp;amp;quot;, Themer.Theme.StrokeThickness[&amp;amp;quot;2&amp;amp;quot;]), IndicatorEnabled = EnsureValue(Props.IndicatorEnabled, &amp;amp;quot;boolean&amp;amp;quot;, false), IndicatorColor = EnsureValue(Props.IndicatorColor, &amp;amp;quot;Color3&amp;amp;quot;, Themer.Theme.Colors.Primary.Main), IndicatorCornerRadius = EnsureValue( Props.IndicatorCornerRadius, &amp;amp;quot;UDim&amp;amp;quot;, Computed(function() return UDim.new(0, Themer.Theme.CornerRadius.Full:get()) end) ), IndicatorIcon = EnsureValue(Props.IndicatorIcon, &amp;amp;quot;string&amp;amp;quot;, nil), IndicatorIconColor = EnsureValue(Props.IndicatorIconColor, &amp;amp;quot;Color3&amp;amp;quot;, Colors.White), } return Image(CombineProps(Props, { Name = &amp;amp;quot;Avatar&amp;amp;quot;, Image = EnsuredProps.Image, Size = Computed(function() return UDim2.fromOffset(Themer.Theme.TextSize[&amp;amp;quot;4.5&amp;amp;quot;]:get(), Themer.Theme.TextSize[&amp;amp;quot;4.5&amp;amp;quot;]:get()) end), BackgroundColor3 = Themer.Theme.Colors.Neutral.Dark, StrokeEnabled = EnsuredProps.RingEnabled, StrokeColor = Spring(EnsuredProps.RingColor, Themer.Theme.SpringSpeed[&amp;amp;quot;0.5&amp;amp;quot;], Themer.Theme.SpringDampening), StrokeThickness = Spring( EnsuredProps.RingThickness, Themer.Theme.SpringSpeed[&amp;amp;quot;0.5&amp;amp;quot;], Themer.Theme.SpringDampening ), CornerRadius = Computed(function() return UDim.new(0, Themer.Theme.CornerRadius[&amp;amp;quot;1&amp;amp;quot;]:get()) end), [Children] = { Computed(function() if EnsuredProps.IndicatorEnabled:get() then return CanvasGroup { Name = &amp;amp;quot;Indicator&amp;amp;quot;, BackgroundColor3 = Spring( EnsuredProps.IndicatorColor, Themer.Theme.SpringSpeed[&amp;amp;quot;0.5&amp;amp;quot;], Themer.Theme.SpringDampening ), BackgroundTransparency = 0, Size = UDim2.fromScale(0.25, 0.25), AutomaticSize = Enum.AutomaticSize.None, AnchorPoint = Vector2.new(1, 1), Position = UDim2.fromScale(1, 1), AspectRatio = 1, CornerRadius = EnsuredProps.IndicatorCornerRadius, [Children] = { Icon { Image = EnsuredProps.IndicatorIcon, ImageColor3 = EnsuredProps.IndicatorIconColor, ImageTransparency = Computed(function() if EnsuredProps.IndicatorIcon:get() then return 0 else return 1 end end), Size = UDim2.fromScale(1, 1), AnchorPoint = Vector2.new(0.5, 0.5), Position = UDim2.fromScale(0.5, 0.5), }, }, } else return end end, Fusion.cleanup), }, })) end"}
  </span>
</div>

<style>
  :global(::selection) {
    background-color: #7b57ff;
  }
</style>