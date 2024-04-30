"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import clsx from "clsx";
import React from "react";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

type AccordionItemProps = AccordionPrimitive.AccordionItemProps & {
  title: string;
  children: React.ReactNode;
};

type AccordionProps =
  | (AccordionPrimitive.AccordionSingleProps &
      React.RefAttributes<HTMLDivElement> & {
        items: AccordionItem[];
      })
  | (AccordionPrimitive.AccordionMultipleProps &
      React.RefAttributes<HTMLDivElement> & {
        items: AccordionItem[];
      });

const Accordion: React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>;
} = ({ children, items, ...props }) => {
  return (
    <AccordionPrimitive.Root {...props}>
      {items.map((item, index) => (
        <Accordion.Item key={index} title={item.title} value={`item-${index}`}>
          {item.content}
        </Accordion.Item>
      ))}
    </AccordionPrimitive.Root>
  );
};

const Item: React.FC<AccordionItemProps> = ({
  title,
  children,
  className,
  ...props
}) => {
  return (
    <AccordionPrimitive.Item
      {...props}
      className={clsx(
        "border-grey-20 group border-t last:mb-0 last:border-b",
        "py-3",
        className,
      )}
    >
      <AccordionPrimitive.Header className="px-1 py-2">
        <div className="flex flex-col">
          <AccordionPrimitive.Trigger>
            <div className="flex w-full justify-between">
              <div>
                <p className="text-base lg:text-xl font-semibold text-start">
                  {title}
                </p>
              </div>
              <MorphingTrigger />
            </div>
          </AccordionPrimitive.Trigger>
        </div>
      </AccordionPrimitive.Header>
      <AccordionPrimitive.Content
        className={clsx(
          "radix-state-closed:animate-accordion-close radix-state-open:animate-accordion-open radix-state-closed:pointer-events-none px-1",
        )}
      >
        <div className="w-full">{children}</div>
      </AccordionPrimitive.Content>
    </AccordionPrimitive.Item>
  );
};

Accordion.Item = Item;

const MorphingTrigger = () => {
  return (
    <div className="flex items-center justify-center">
      <PlusIcon className="w-5 h-5 group-data-[state=open]:hidden" />
      <MinusIcon className="w-5 h-5 group-data-[state=closed]:hidden" />
    </div>
  );
};

export default Accordion;
