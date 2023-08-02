mod icon_round;
mod seikinosusume_generator;
use wasm_bindgen::{prelude::*, Clamped};

#[wasm_bindgen]
pub fn seikinosusume_generator(buffer: Clamped<Vec<u8>>, width: u32, height: u32, seikinga: String, seikin: String) -> Vec<u8> {
    return seikinosusume_generator::exec(buffer.0, width, height, seikinga, seikin);
}
