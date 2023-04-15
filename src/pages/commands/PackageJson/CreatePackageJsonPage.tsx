import React, { useEffect, useState } from "react";
import { BaseCommandPage } from "../../../components/basePages/BaseCommandPage";
import { InputText } from "../../../components/inputs/InputText";
import { CopyTextRow } from "../../../components/CopyTextRow";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const createPackageJsonFormSchema = z.object({
  message: z.string().nonempty('Please enter a message'),
});

type FormSchema = z.infer<typeof createPackageJsonFormSchema>;

export const CreatePackageJsonPage = React.forwardRef((): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(createPackageJsonFormSchema),
  });

  function onSubmit() {
    // todo
  }

  return (
    <BaseCommandPage>
      <>
        <div className="mb-4">
          <InputText
            label="What do you want your command to do?"
            // disabled={inputState.loading}
            // onChange={(e: any) => {
            //   setInputState({
            //     ...inputState,
            //     loading: false,
            //     error: '',
            //     value: e.target.value,
            //   });
            // }}
            {...register('message')}
          />
          {errors.message && (<span>{errors.message.message}</span>)}
        </div>
        {/*!!inputState.value && <CopyTextRow text={inputState.value} />*/}
      </>
    </BaseCommandPage>
  );
});
