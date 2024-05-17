"use client";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [data, setData] = useState<string[]>([]);

  function spawnData() {
    setData((prev) => [...prev, Math.random().toFixed(2)]);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <Input placeholder="focus me and spawn data" />
          <div className="flex flex-col gap-2">
            {data.map((d) => (
              <div className="h-60 w-full bg-red-400 border" key={d} />
            ))}
          </div>

          <Button onClick={spawnData}>Spawn data</Button>
        </DrawerContent>
      </Drawer>
    </main>
  );
}
