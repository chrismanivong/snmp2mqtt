import slugifyFn from "slugify";
import { createHash } from "crypto";

export function slugify(str: string) {
    return slugifyFn(
        str.toLowerCase().replaceAll("-", "_").replaceAll("~", "_"),
        {
            replacement: "_",
            strict: true,
        }
    ).replace(/^_+|_+$/g, "");
}

export function ConvertIPToHexIP(ip: string) {
    var vals = ip.split(".");
    var op = ['0x'];
    for (var i = 0; i < vals.length; i++) {
        op.push(Number(vals[i]).toString(16));
    }
    return op.join("");
}

export const md5 = (str: string) => createHash("md5").update(str).digest("hex");
