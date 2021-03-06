import { FingerprintResultComponent, FingerprintParameter } from "../types";
export interface GeoIp extends FingerprintResultComponent {
    geoip: {
        country: string;
        ip: string;
    };
}
export declare const geoip: FingerprintParameter<GeoIp>;
