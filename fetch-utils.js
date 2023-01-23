const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getGames() {
    // destructuring data and error from an object
    const { data, error } = await client
        .from('tabletop_games')
        .select('*');

    if (error) console.error(error);

    return data;

    // const response = await client
    //     .from('tabletop_games')
    //     .select('*');

    // return response.data;
}

export async function getGameById(id) {
    const { data, error } = await client
        .from('tabletop_games')
        .select(`
            *,
            designers (name)
          `)
        .eq('id', id)
        .single();

    if (error) console.error(error);

    return data;
}