import { Component, createSignal, createEffect } from "solid-js";
import { Tabs } from "@kobalte/core";

import logo from "./logo.svg";
import styles from "./App.module.pcss";
import Nav from "./nav";
import { NavItem } from "./nav/types";

const App: Component = () => {
  if (!window.location.hash) window.location.hash = localStorage.getItem("ninnana.top.log.pagehash") || "#home";
  const pags: NavItem[] = [
    { to: "#home", target: "_blank", name: "首   页" },
    { to: "#plugin-list", target: "_blank", name: "插件列表" },
    { to: "#doc", target: "_blank", name: "文   档" },
    { to: "#chat", target: "_blank", name: "AI 聊天" },
  ];
  const [selectedTab, setSelectedTab] = createSignal(
    localStorage.getItem("ninnana.top.log.pagehash") || "#home"
  );
  createEffect(() => {
    window.location.hash = selectedTab();
    localStorage.setItem("ninnana.top.log.pagehash", window.location.hash);
  });
  return (
    <div class={styles.App}>
      <Tabs.Root
        orientation="vertical"
        class={styles.tabs}
        value={selectedTab()}
        onChange={setSelectedTab}
      >
        <Nav items={pags} class={styles.Nav}></Nav>
      </Tabs.Root>
    </div>
  );
};

export default App;
