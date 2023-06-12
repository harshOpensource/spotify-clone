"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { toast } from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import uniqid from "uniqid";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";

interface Props {}

function UploadModal({}: Props) {
  const uploadModal = useUploadModal();
  const { register, reset, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });
  const supabaseClient = useSupabaseClient();

  const { user } = useUser();

  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = (open: boolean) => {
    if (!open) {
      //reset form
      reset();

      uploadModal.onClose();
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsLoading(true);

      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];

      if (!imageFile || !songFile || !user) {
        toast.error("Missing Fields");
        return;
      }

      const uniqueId = uniqid();

      //upload Song

      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueId}`, songFile, {
          cacheControl: "3600",
          upsert: false,
        });

      if (songError) {
        setIsLoading(false);
        toast.error("Failed uploading Song!");
      }
      //upload Image

      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${values.title}-${uniqueId}`, imageFile, {
            cacheControl: "3600",
            upsert: false,
          });

      if (imageError) {
        setIsLoading(false);
        return toast.error("Failed image upload");
      }

      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.author,
          image_path: imageData?.path,
          song_path: songData?.path,
        });

      if (supabaseError) {
        setIsLoading(false);
        toast.error(supabaseError.message);
      }

      router.refresh();
      setIsLoading(false);
      toast.success("Song Created successfully!");
      reset();
      uploadModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      title="Add a Song"
      description="Upload a mp3 file!"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-4">
        <Input
          id="title"
          className=""
          disabled={isLoading}
          placeholder="Song Title"
          {...register("title", { required: true })}
          type="text"
        />

        <Input
          id="author"
          className=""
          disabled={isLoading}
          placeholder="Song Author"
          {...register("author", { required: true })}
          type="text"
        />

        <div>
          <div className="pb-1">Select a Song</div>{" "}
          <Input
            id="song"
            className=""
            disabled={isLoading}
            {...register("song", { required: true })}
            type="file"
            accept=".mp3"
          />
        </div>

        <div>
          <div className="pb-1">Select a Image</div>{" "}
          <Input
            id="image"
            className=""
            disabled={isLoading}
            {...register("image", { required: true })}
            type="file"
            accept="image/*"
          />
        </div>
        <Button disabled={isLoading} type="submit">
          Create
        </Button>
      </form>
    </Modal>
  );
}

export default UploadModal;
