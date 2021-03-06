"use strict";

import { getAll } from "./BulmaDropdowns";
import { Picsum } from "picsum-photos";
import { loremIpsum } from "lorem-ipsum";

async function insertImages(imgClass, from) {
    let images = getAll(`#${from} .${imgClass}`);
    images.forEach(function (el) {
        // console.log(`[insertImages]install image '${el.classList}'`);
        el.src = Picsum.url();
    });
}

function insertLorem(loremClass, from) {
    let lorem = getAll(`#${from} .${loremClass}`);
    lorem.forEach(function (el) {
        // console.log(`[insertLorem]install lorem '${el.classList}'`);
        el.innerHTML = loremIpsum({
            units: "paragraph",
            count: 2 + parseInt(Math.random() * 5),
            paragraphLowerBound: 1,
            paragraphUpperBound: 6,
            sentenceLowerBound: 3,
            sentenceUpperBound: 15,
            format: "html",
        });
    });
}

function insertBlocs(blocClass, from) {
    let blocs = getAll(`#${from} .${blocClass}`);
    console.log(`[insertBlocs] ${blocs.length} blocs from '${from}'`);
    let isRight = Math.random() > 0.5 ? 1 : 0;
    blocs.forEach(function (el) {
        console.log(`[insertBlocs]install bloc '${el.classList}'`);

        let html = "";
        for (let i = 3 + parseInt(Math.random() * 5); i; i--) {
            // for (let i = 2; i; i--) {
            let src = `
        <div class="mb-6">
        <div class="random-image" style="float:${isRight ? "right" : "left"};">
            <img
            class="random-image ${isRight ? "ml-4" : "mr-4"}
                alt="Random image"
                style="width: 170px; height: 170px;"
            />
        </div>
        <span class="lorem-ipsum"/>
        </div>
        `;
            html += src;
            isRight = 1 - isRight;
        }
        el.innerHTML = html;
    });
}

export default async function makeRandomPage(id) {
    console.log(`[makeRandomPage] generating '${id}'`);
    insertBlocs("random-bloc", id);
    insertLorem("lorem-ipsum", id);
    insertImages("random-image", id);
    console.log(`[makeRandomPage]  '${id}' done`);
}
