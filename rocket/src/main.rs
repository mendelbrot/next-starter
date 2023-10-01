#[macro_use]
extern crate rocket;

#[get("/")]
fn index() -> &'static str {
    "Hello!"
}

#[get("/world")]
fn world() -> &'static str {
    "Hello, world!"
}

#[get("/farm")]
fn farm() -> &'static str {
    "Moo!"
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .mount("/", routes![index])
        .mount("/", routes![world])
        .mount("/", routes![farm])
}
