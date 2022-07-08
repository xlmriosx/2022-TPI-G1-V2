import { Time } from "@angular/common"

export interface Travel {
    url: string
    descripcion: string
    travelTime : string
    travelDate : string
    rating: number
    travelHour : string
    localization : string
    service : string
    type : string
    company : string
    tickets: { numberTravel: number; position: string }[]
}