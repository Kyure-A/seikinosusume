use image::{Rgba, DynamicImage};
use imageproc::drawing::draw_text_mut;
use rusttype::{Font, Scale};

fn make_seikin(text: &str, mut image: DynamicImage) -> DynamicImage {
    //! "SEIKIN" の文字の位置に 文字列 text を描画する
    let font = Vec::from(include_bytes!("../static/MPLUS1-Bold.ttf") as &[u8]);
    let font = Font::try_from_vec(font).unwrap();
    
    let scale = Scale {
        x: 320.0,
        y: 320.0,
    };

    draw_text_mut(&mut image, Rgba([0u8, 0u8, 0u8, 0u8]), 750, 800, scale, &font, text);

    return image;
}

fn make_seikinga(text: &str, mut image: DynamicImage) -> DynamicImage {
    //! "セイキンが" の文字の位置に 文字列 text を描画する
    let font = Vec::from(include_bytes!("../static/MPLUS1-Bold.ttf") as &[u8]);
    let font = Font::try_from_vec(font).unwrap();
    
    let scale = Scale {
        x: 150.0,
        y: 150.0,
    };

    draw_text_mut(&mut image, Rgba([0u8, 0u8, 0u8, 0u8]), 950, 750, scale, &font, text);

    return image;
}

fn _draw_icon(icon: DynamicImage) {
    //! icon を描画する
}

fn main() {
    let mut image = image::open("static/base.png").unwrap();
    
    let seikinga = "セイキンが";
    let seikin = "SEIKIN";

    image = make_seikin(seikin, image.clone());
    image = make_seikinga(seikinga, image.clone());
    image.save("test.png").unwrap();
}
