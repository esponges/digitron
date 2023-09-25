'use server';

import { revalidatePath } from 'next/cache';

export default async function submit() {
  try {
    await new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, 5000);
    });
    // removing for the moment since it will cause app to go to the top of the page
    revalidatePath('/');
    return 'success';
  } catch (e) {
    console.error(e);
    return e;
  }
}
