'use server';

import { revalidatePath } from 'next/cache';

export default async function submit() {
  try {
    new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, 1000);
    });
    revalidatePath('/');
    return 'success';
  } catch (e) {
    console.error(e);
    return e;
  }

}
