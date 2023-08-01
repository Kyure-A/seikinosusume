use image::{Rgba, DynamicImage, ImageBuffer};
use imageproc::drawing::draw_text_mut;
use rusttype::{Font, Scale};
use og_image_writer::{style::BorderRadius};
mod icon_round;

fn make_seikin(text: &str, mut image: DynamicImage) -> DynamicImage {
    //! "SEIKIN" の文字の位置に 文字列 text を描画する
    let font = Vec::from(include_bytes!("../static/MPLUS1-Bold.ttf") as &[u8]);
    let font = Font::try_from_vec(font).unwrap();
    
    let mut scale = Scale {
        x: 320.0,
        y: 320.0,
    };

    let char_size: f32 = 55.0;
    let standard_text_length = 6; // "SEIKIN"
    let mut optimizer: f32 = 0.0;
    
    if text.len() > standard_text_length {
	optimizer += char_size * (text.chars().count() - standard_text_length) as f32;
	scale.x -= optimizer;
	scale.y -= optimizer;
    }

    draw_text_mut(&mut image, Rgba([0u8, 0u8, 0u8, 0u8]), 750 + optimizer as u32, 800 + optimizer as u32, scale, &font, text);

    return image;
}

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
    
    if text.len() > standard_text_length {
	optimizer += char_size * (text.chars().count() - standard_text_length) as f32;
	scale.x -= optimizer;
	scale.y -= optimizer;
    } 

    draw_text_mut(&mut image, Rgba([0u8, 0u8, 0u8, 0u8]), 875 + optimizer as u32, 680 + optimizer as u32, scale, &font, text);

    return image;
}

fn round_icon(icon: DynamicImage) -> DynamicImage{
    //! icon を描画する
    let mut rounded_icon: ImageBuffer<Rgba<u8>, Vec<u8>> = icon.to_rgba8();
    icon_round::round(&mut rounded_icon, &mut BorderRadius(200, 200, 200, 200));
    let new_icon: DynamicImage = DynamicImage::ImageRgba8(rounded_icon);
    return new_icon;
}

fn main() {
    let mut image = image::open("static/base.png").unwrap();
    
    let seikinga = "セイキンが";
    let seikin = "SEIKIN";

    image = make_seikin(seikin, image.clone());
    image = make_seikinga(seikinga, image.clone());
    image.save("test.png").unwrap();

    let mut icon = image::open("static/identicon.png").unwrap();
	
    round_icon(icon).save("test2.png").unwrap();
}
