use image::{Rgba, DynamicImage, ImageBuffer, imageops::{resize}};
use imageproc::drawing::draw_text_mut;
use rusttype::{Font, Scale};
use og_image_writer::{style::BorderRadius};
use wasm_bindgen::prelude::*;
mod icon_round;

fn make_seikinga(text: &str, mut image: DynamicImage) -> DynamicImage {
    //! "セイキンが" の文字の位置に 文字列 text を描画する
    let font = Vec::from(include_bytes!("../static/MPLUS1-Black.ttf") as &[u8]);
    let font = Font::try_from_vec(font).unwrap();
    
    let mut scale = Scale {
        x: 170.0,
        y: 210.0,
    };

    let char_size: f32 = 25.0;
    let standard_text_length = 5; // "セイキンが"
    let mut optimizer: f32 = 0.0;
    
    if text.chars().count() > standard_text_length {
	optimizer += char_size * (text.chars().count() - standard_text_length) as f32;
	scale.x -= optimizer;
	scale.y -= optimizer;
    } 

    draw_text_mut(&mut image, Rgba([0u8, 0u8, 0u8, 0u8]), 875 + optimizer as u32, 680 + optimizer as u32, scale, &font, text);

    return image;
}

fn make_seikin(text: &str, mut image: DynamicImage) -> DynamicImage {
    //! "SEIKIN" の文字の位置に 文字列 text を描画する
    let font = Vec::from(include_bytes!("../static/MPLUS1-Bold.ttf") as &[u8]);
    let font = Font::try_from_vec(font).unwrap();
    
    let mut scale = Scale {
        x: 320.0,
        y: 300.0,
    };

    let mut pos = (750, 800);
    
    let char_size: f32 = 65.0;
    let diff_size: u32 = 20;
    let standard_text_length: u32 = 6; // "SEIKIN"
    let mut char_optimizer: f32 = 0.0;
    let mut pos_optimizer: u32 = 0;
    
    if text.chars().count() > standard_text_length as usize {
	char_optimizer += char_size * (text.chars().count() as u32 - standard_text_length) as f32;
	pos_optimizer += diff_size * (text.chars().count() as u32 - standard_text_length);
	scale.x -= char_optimizer;
	scale.y -= char_optimizer;
	pos.0 += pos_optimizer;
	pos.1 += pos_optimizer;
    }

    draw_text_mut(&mut image, Rgba([0u8, 0u8, 0u8, 0u8]), pos.0, pos.1, scale, &font, text);

    return image;
}

fn round_icon(icon: DynamicImage) -> DynamicImage {
    //! icon を resize, 角丸 にする
    let mut rounded_icon: ImageBuffer<Rgba<u8>, Vec<u8>> = icon.to_rgba8();
    icon_round::round(&mut rounded_icon, &mut BorderRadius(200, 200, 200, 200));
    let resized_icon: ImageBuffer<Rgba<u8>, Vec<u8>> = resize(&rounded_icon, 750, 750, image::imageops::FilterType::CatmullRom);

    let new_icon: DynamicImage = DynamicImage::ImageRgba8(resized_icon);

    return new_icon;
}

fn draw_icon(mut image: DynamicImage, mut icon: DynamicImage) -> DynamicImage {
    //! icon を image にはめこむ
    icon = round_icon(icon);
    image::imageops::overlay(&mut image, &icon, 167, 200);
    return image;
}

#[wasm_bindgen]
pub fn generate(seikinga: String, seikin: String, path: String) {
    let mut image = image::open("static/base.png").unwrap();
    let icon = image::open(path).unwrap();
    
    image = make_seikin(&seikin, image.clone());
    image = make_seikinga(&seikinga, image.clone());
    image = draw_icon(image.clone(), icon.clone());
    
    image.save("result.png").unwrap();
}
