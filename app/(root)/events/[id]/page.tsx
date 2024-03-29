import { getEventById } from "@/lib/actions/event.action";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import React from "react";

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  const event = await getEventById(id);

  console.log(event);

  return (
    <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
        <Image
          src={event.imageUrl}
          alt="hero-image"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />
        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
            <div className="flex flex-col gap-6"></div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
