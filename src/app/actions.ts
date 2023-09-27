'use server';

import { revalidatePath } from 'next/cache';

export default async function submit() {
  console.log('submitting');
  try {
    await new Promise<void>((res) => {
      setTimeout(() => {
        res();
      }, 2000);
    });
    // removing for the moment since it will cause app to go to the top of the page
    revalidatePath('/');
    return { message: 'Gracias por tu mensaje!' };
  } catch (e) {
    console.error(e);
    return { error: 'Hubo un error al enviar tu mensaje' };
  }
}
