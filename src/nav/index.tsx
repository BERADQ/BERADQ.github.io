import { Component, splitProps } from "solid-js";
import { Tabs, Image } from "@kobalte/core";
import type { NavItem } from "./types";
import type { Override } from "../types";
import type { ComponentProps } from "solid-js";
import styles from "./index.module.pcss";
import Su from "../assets/sushou.jpg";

interface NavProps {
  items: NavItem[];
}

const Nav: Component<Override<Tabs.TabsListProps, NavProps>> = (props) => {
  const [local, others] = splitProps(props, ["items"]);
  return (
    <Tabs.List aria-label="" {...others}>
      <Image.Root class={styles.avatar}>
        <Image.Img src={Su} class={styles.img} />
        <Image.Fallback>
          <h1>Su</h1>
        </Image.Fallback>
      </Image.Root>
      {local.items.map((item) => {
        return (
          <Tabs.Trigger value={item.to} class={styles.tab}>
            {item.name}
          </Tabs.Trigger>
        );
      })}
      <Tabs.Indicator class={styles.indicator} />
    </Tabs.List>
  );
};

export default Nav;
