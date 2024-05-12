'use client';
import React, { useMemo, useState } from 'react';
import { RenderIcon } from '../icons';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../common/button';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import clsx from 'clsx';
import Image from 'next/image';

type Inputs = {
  name: string;
  isAttend: boolean;
  guests?: number;
  message?: string;
};

export default function AttendForm() {
  const schema = yup
    .object({
      name: yup.string().trim().required('Vui lòng cho chúng tôi biết tên của bạn.'),
      isAttend: yup.boolean().required('Bạn có tham dự được không?'),
      guests: yup.number().optional(),
      message: yup.string().trim().optional()
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });
  const isAttend = watch('isAttend');
  const [isBride, setIsBride] = useState<boolean | undefined>(true);

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const renderQR = useMemo(() => {
    if (isBride === undefined) return null;
    if (isBride)
      return (
        <Image
          src="/assets/bride.png"
          width={250}
          height={250}
          alt="bride-qr"
          loading="lazy"
          className="w-[250px] h-[250px] max-w-full aspect-[1/1]"
        />
      );
    return (
      <Image
        src="/assets/groom.png"
        width={250}
        height={250}
        alt="bride-qr"
        loading="lazy"
        className="w-[250px] h-[250px] max-w-full aspect-[1/1]"
      />
    );
  }, [isBride]);

  return (
    <section className="attend-form">
      <div className="container">
        <div className="form-wrap">
          <div className="main-form">
            <span className="h-lines"></span>
            <span className="v-lines"></span>
            {/* title */}
            <div className="container flex items-center justify-center flex-col">
              <h1 className="text-4xl text-secondary font-secondary w-fit text-center">
                Bạn sẽ chung vui cùng chúng tôi?
              </h1>
              <RenderIcon name="line" className="!w-[189px] !h-6 text-secondary mt-4" />
            </div>

            {/* form */}
            <div className="relative z-[3] mt-14">
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* input */}
                <input
                  placeholder="Tên của bạn*"
                  {...register('name')}
                  className={clsx(
                    'w-full outline-none border-solid border border-[#e1e1e1] hover:border-secondary focus:border-secondary bg-[#fbfbfb] py-4 px-3 text-base transition-all ease-linear',
                    {
                      '!border-danger': errors.name?.message && errors.name?.message.length > 0
                    }
                  )}
                />
                {errors.name?.message && (
                  <p className="text-danger leading-[1.2] mt-2">{errors.name?.message}</p>
                )}

                {/* is attend */}
                <div className="flex flex-col justify-start items-start mt-5">
                  <div className="flex items-start gap-2">
                    <input hidden type="radio" id="attendY" {...register('isAttend')} value={1} />
                    <label htmlFor="attendY" className="radio-custom mt-[6px]"></label>
                    <label htmlFor="attendY" className="text-secondary">
                      Có, tôi sẽ tham gia
                    </label>
                  </div>

                  <div className="flex items-start gap-2">
                    <input hidden type="radio" id="attendN" {...register('isAttend')} value={0} />
                    <label htmlFor="attendN" className="radio-custom mt-[6px]"></label>
                    <label htmlFor="attendN" className="text-secondary">
                      Xin lỗi, tôi không thể đến được
                    </label>
                  </div>
                </div>
                {errors?.isAttend?.message && (
                  <p className="text-danger leading-[1.2] mt-2">{errors?.isAttend?.message}</p>
                )}

                {/* QR */}
                <div
                  className={clsx('flex-col justify-start items-start mb-5', {
                    flex: isAttend === false || Number(isAttend) === 0,
                    hidden:
                      isAttend === null ||
                      isAttend === undefined ||
                      isAttend === true ||
                      Number(isAttend) === 1
                  })}
                >
                  <div className="flex items-start gap-2">
                    <input
                      hidden
                      type="radio"
                      id="isBride"
                      checked={isBride}
                      onClick={() => setIsBride(true)}
                    />
                    <label htmlFor="isBride" className="radio-custom mt-[6px]"></label>
                    <label htmlFor="isBride" className="text-secondary">
                      Bạn là bạn của cô dâu?
                    </label>
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      hidden
                      type="radio"
                      id="isGroom"
                      checked={!isBride}
                      onClick={() => setIsBride(false)}
                    />
                    <label htmlFor="isGroom" className="radio-custom mt-[6px]"></label>
                    <label htmlFor="isGroom" className="text-secondary">
                      Bạn là bạn của chú rể?
                    </label>
                  </div>

                  <div className="flex items-center justify-center mt-3">{renderQR}</div>
                </div>

                {/* select guest */}
                <select
                  {...register('guests')}
                  className={clsx(
                    'w-full outline-none border-solid border border-[#e1e1e1] hover:border-secondary focus:border-secondary bg-[#fbfbfb] py-4 px-3 text-base transition-all ease-linear mt-5',
                    {
                      '!border-danger':
                        errors?.guests?.message && errors?.guests?.message.length > 0
                    }
                  )}
                >
                  <option value={0}>Số người đi cùng bạn?</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
                {errors?.guests?.message && (
                  <p className="text-danger leading-[1.2] mt-2">{errors?.guests?.message}</p>
                )}

                {/* message */}
                <textarea
                  {...register('message')}
                  rows={5}
                  placeholder="Lời chúc của bạn"
                  className={clsx(
                    'w-full outline-none border-solid border border-[#e1e1e1] hover:border-secondary focus:border-secondary bg-[#fbfbfb] py-4 px-3 text-base transition-all ease-linear mt-5',
                    {
                      '!border-danger':
                        errors?.message?.message && errors?.message?.message.length > 0
                    }
                  )}
                />
                {errors?.message?.message && (
                  <p className="text-danger leading-[1.2] mt-2">{errors?.message?.message}</p>
                )}

                <div className="w-full flex items-center justify-center mt-6">
                  <Button label="GỬI" btnStyle="secondary" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
