// Scene-specific grading for readable, frameless characters. Shared with visual QA.
export const SCENE_LIGHTING = {
  hangar: { brightness: .86, saturation: .63, lift: .29, blur: 2.2 },
  hangar_docked: { brightness: .9, saturation: .65, lift: .30, blur: 2.2 },
  bridge_harbor: { brightness: .88, saturation: .63, lift: .29, blur: 2.3 },
  ship_rail_harbor: { brightness: .88, saturation: .66, lift: .27, blur: 2.0 },
  messhall_closed: { brightness: .87, saturation: .68, lift: .23, blur: 2.0 },
  coast_night: { brightness: .95, saturation: .72, lift: .20, blur: 2.1 },
  shore_receiver: { brightness: .87, saturation: .72, lift: .13, blur: 1.3 },
  battle: { brightness: .78, saturation: .66, lift: .25, blur: 2.5 },
  hold: { brightness: .83, saturation: .65, lift: .28, blur: 2.0 },
  medbay: { brightness: .81, saturation: .62, lift: .18, blur: 1.8 },
  workshop: { brightness: .82, saturation: .64, lift: .26, blur: 2.2 },
  messhall: { brightness: .84, saturation: .65, lift: .23, blur: 2.0 },
  ship_rail: { brightness: .82, saturation: .65, lift: .28, blur: 2.1 },
  bridge: { brightness: .8, saturation: .58, lift: .29, blur: 2.5 },
  commandroom: { brightness: .82, saturation: .6, lift: .27, blur: 2.2 },
  quarters: { brightness: .87, saturation: .66, lift: .23, blur: 1.8 },
  quarters_closed: { brightness: .87, saturation: .66, lift: .23, blur: 1.8 },
  ground_workshop: { brightness: .87, saturation: .72, lift: .13, blur: 1.3 },
  shoreside_room: { brightness: .88, saturation: .72, lift: .13, blur: 1.3 },
  orbit: { brightness: .82, saturation: .65, lift: .25, blur: 1.8 },
  planet_approach: { brightness: .77, saturation: .67, lift: .18, blur: 2.1 },
  city: { brightness: .81, saturation: .6, lift: .23, blur: 2.5 },
  coast: { brightness: .76, saturation: .62, lift: .17, blur: 2.3 },
  surface: { brightness: .77, saturation: .6, lift: .21, blur: 2.3 },
  landbattle: { brightness: .76, saturation: .57, lift: .22, blur: 2.6 },
  seabattle: { brightness: .75, saturation: .63, lift: .21, blur: 2.5 },
  reactor: { brightness: .8, saturation: .59, lift: .3, blur: 2.3 }
};

export function characterLighting(speaker, outfit) {
  if (speaker === 'ivna' && outfit?.startsWith('civilian')) return { tone: 'dark', color: '229, 220, 203', brightness: 1.07, lift: .09 };
  if (speaker === 'doran' || speaker === 'nova') return { tone: 'warm', color: '129, 157, 175', brightness: 1.04, lift: .04 };
  return { tone: 'dark', color: '226, 219, 198', brightness: 1.08, lift: .06 };
}

// Compared across every used scene/outfit pair. Grey clothing needs a dark
// backdrop; a pale wash behind it makes its shoulders and trousers disappear.
export function sceneLighting(sceneId, speaker, outfit) {
  const scene = SCENE_LIGHTING[sceneId] || (sceneId?.startsWith('shot_')
    ? {brightness:.96,saturation:.86,lift:.16,blur:1.3} : SCENE_LIGHTING.hangar);
  const person = characterLighting(speaker, outfit);
  const result = { ...scene, ...person, brightness: scene.brightness,
    personBrightness: person.brightness, lift: scene.lift + person.lift,
    localSaturation: .38 };
  if (['vera', 'vester', 'au09'].includes(speaker)) {
    const space = ['battle', 'orbit', 'planet_approach'].includes(sceneId);
    const ground = ['coast', 'coast_night', 'surface', 'landbattle', 'seabattle'].includes(sceneId);
    Object.assign(result, {
      tone: 'grey', color: space ? '7, 16, 29' : ground ? '14, 28, 46' : '12, 25, 42',
      lift: space ? .26 : ground ? .36 : .30,
      blur: space ? 2.2 : ground ? 2.8 : 2.6, localSaturation: .50
    });
  }
  return result;
}
