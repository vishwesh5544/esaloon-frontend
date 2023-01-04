import Api from './api';
import {Appointment} from "../models/Appointment";
import {BookedAppointment} from "../models/BookedAppointment";

interface IBookingApi {

    createBooking(bookingDetails: Appointment): Promise<any>;

    getAppointments(email: string): Promise<any>;

    deleteAppointment(email: string, id: string): Promise<any>;
}

class BookingApi extends Api implements IBookingApi {
    createBooking(bookingDetails: Appointment): Promise<BookedAppointment> {
        return this.axiosClient.post('/appointments', bookingDetails);
    }

    getAppointments(email: string): Promise<any> {
        return this.axiosClient.get(`/appointments?email=${email}`);
    }

    deleteAppointment(email: string, id: string): Promise<any> {
        return this.axiosClient.delete(`/appointments?email=${email}&id=${id}`);
    }
}

export default BookingApi;