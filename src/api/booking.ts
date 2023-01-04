import Api from './api';
import {Appointment} from "../models/Appointment";
import {BookedAppointment} from "../models/BookedAppointment";

interface IBookingApi {

    createBooking(bookingDetails: Appointment): Promise<any>;

    getAppointments(email: string): Promise<any>;
}

class BookingApi extends Api implements IBookingApi {
    createBooking(bookingDetails: Appointment): Promise<BookedAppointment> {
        return this.axiosClient.post('/appointments', bookingDetails);
    }

    getAppointments(email: string): Promise<any> {
        return Promise.resolve(undefined);
    }

}

export default BookingApi;