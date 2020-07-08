"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCallScheduling = exports.ServiceCallSchedulingField = exports.createServiceCallScheduling = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallScheduling.build]] instead.
 */
function createServiceCallScheduling(json) {
    return ServiceCallScheduling.build(json);
}
exports.createServiceCallScheduling = createServiceCallScheduling;
/**
 * ServiceCallSchedulingField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceCallSchedulingField = /** @class */ (function (_super) {
    __extends(ServiceCallSchedulingField, _super);
    function ServiceCallSchedulingField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ServiceCallScheduling.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallScheduling.technician]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.technician = new v4_1.ComplexTypeNumberPropertyField('Technician', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallScheduling.handledBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.handledBy = new v4_1.ComplexTypeNumberPropertyField('HandledBy', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallScheduling.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new v4_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceCallScheduling.startTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startTime = new v4_1.ComplexTypeTimePropertyField('StartTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[ServiceCallScheduling.endDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endDate = new v4_1.ComplexTypeDatePropertyField('EndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceCallScheduling.endTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endTime = new v4_1.ComplexTypeTimePropertyField('EndTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[ServiceCallScheduling.duration]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.duration = new v4_1.ComplexTypeNumberPropertyField('Duration', _this, 'Edm.Double');
        /**
         * Representation of the [[ServiceCallScheduling.actualDuration]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualDuration = new v4_1.ComplexTypeNumberPropertyField('ActualDuration', _this, 'Edm.Double');
        /**
         * Representation of the [[ServiceCallScheduling.reminderPeriod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reminderPeriod = new v4_1.ComplexTypeNumberPropertyField('ReminderPeriod', _this, 'Edm.Double');
        /**
         * Representation of the [[ServiceCallScheduling.reminderDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reminderDate = new v4_1.ComplexTypeDatePropertyField('ReminderDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceCallScheduling.reminderTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reminderTime = new v4_1.ComplexTypeTimePropertyField('ReminderTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[ServiceCallScheduling.location]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.location = new v4_1.ComplexTypeNumberPropertyField('Location', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallScheduling.addressName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressName = new v4_1.ComplexTypeStringPropertyField('AddressName', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.addressText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressText = new v4_1.ComplexTypeStringPropertyField('AddressText', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.street]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.street = new v4_1.ComplexTypeStringPropertyField('Street', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.city]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.city = new v4_1.ComplexTypeStringPropertyField('City', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.room]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.room = new v4_1.ComplexTypeStringPropertyField('Room', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new v4_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new v4_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.address2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address2 = new v4_1.ComplexTypeStringPropertyField('Address2', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.address3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address3 = new v4_1.ComplexTypeStringPropertyField('Address3', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.addressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressType = new v4_1.ComplexTypeStringPropertyField('AddressType', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.streetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.streetNo = new v4_1.ComplexTypeStringPropertyField('StreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.zipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCode = new v4_1.ComplexTypeStringPropertyField('ZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.block]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.block = new v4_1.ComplexTypeStringPropertyField('Block', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.county]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.county = new v4_1.ComplexTypeStringPropertyField('County', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.taxOffice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxOffice = new v4_1.ComplexTypeStringPropertyField('TaxOffice', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.globalLocNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.globalLocNum = new v4_1.ComplexTypeStringPropertyField('GlobalLocNum', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.remark]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remark = new v4_1.ComplexTypeStringPropertyField('Remark', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.signatureName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.signatureName = new v4_1.ComplexTypeStringPropertyField('SignatureName', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.salesOrders]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesOrders = new v4_1.ComplexTypeStringPropertyField('SalesOrders', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.checkInDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkInDate = new v4_1.ComplexTypeDatePropertyField('CheckInDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceCallScheduling.checkInTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkInTime = new v4_1.ComplexTypeTimePropertyField('CheckInTime', _this, 'Edm.TimeOfDay');
        /**
         * Representation of the [[ServiceCallScheduling.checkInLocation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkInLocation = new v4_1.ComplexTypeStringPropertyField('CheckInLocation', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.checkInLatitude]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkInLatitude = new v4_1.ComplexTypeStringPropertyField('CheckInLatitude', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.checkInLongitude]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkInLongitude = new v4_1.ComplexTypeStringPropertyField('CheckInLongitude', _this, 'Edm.String');
        /**
         * Representation of the [[ServiceCallScheduling.checkOutDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkOutDate = new v4_1.ComplexTypeDatePropertyField('CheckOutDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceCallScheduling.checkOutTime]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkOutTime = new v4_1.ComplexTypeTimePropertyField('CheckOutTime', _this, 'Edm.TimeOfDay');
        return _this;
    }
    return ServiceCallSchedulingField;
}(v4_1.ComplexTypeField));
exports.ServiceCallSchedulingField = ServiceCallSchedulingField;
var ServiceCallScheduling;
(function (ServiceCallScheduling) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            Technician: function (technician) { return ({ technician: v4_1.edmToTs(technician, 'Edm.Int32') }); },
            HandledBy: function (handledBy) { return ({ handledBy: v4_1.edmToTs(handledBy, 'Edm.Int32') }); },
            StartDate: function (startDate) { return ({ startDate: v4_1.edmToTs(startDate, 'Edm.DateTimeOffset') }); },
            StartTime: function (startTime) { return ({ startTime: v4_1.edmToTs(startTime, 'Edm.TimeOfDay') }); },
            EndDate: function (endDate) { return ({ endDate: v4_1.edmToTs(endDate, 'Edm.DateTimeOffset') }); },
            EndTime: function (endTime) { return ({ endTime: v4_1.edmToTs(endTime, 'Edm.TimeOfDay') }); },
            Duration: function (duration) { return ({ duration: v4_1.edmToTs(duration, 'Edm.Double') }); },
            ActualDuration: function (actualDuration) { return ({ actualDuration: v4_1.edmToTs(actualDuration, 'Edm.Double') }); },
            ReminderPeriod: function (reminderPeriod) { return ({ reminderPeriod: v4_1.edmToTs(reminderPeriod, 'Edm.Double') }); },
            ReminderDate: function (reminderDate) { return ({ reminderDate: v4_1.edmToTs(reminderDate, 'Edm.DateTimeOffset') }); },
            ReminderTime: function (reminderTime) { return ({ reminderTime: v4_1.edmToTs(reminderTime, 'Edm.TimeOfDay') }); },
            Location: function (location) { return ({ location: v4_1.edmToTs(location, 'Edm.Int32') }); },
            AddressName: function (addressName) { return ({ addressName: v4_1.edmToTs(addressName, 'Edm.String') }); },
            AddressText: function (addressText) { return ({ addressText: v4_1.edmToTs(addressText, 'Edm.String') }); },
            Street: function (street) { return ({ street: v4_1.edmToTs(street, 'Edm.String') }); },
            City: function (city) { return ({ city: v4_1.edmToTs(city, 'Edm.String') }); },
            Room: function (room) { return ({ room: v4_1.edmToTs(room, 'Edm.String') }); },
            State: function (state) { return ({ state: v4_1.edmToTs(state, 'Edm.String') }); },
            Country: function (country) { return ({ country: v4_1.edmToTs(country, 'Edm.String') }); },
            Address2: function (address2) { return ({ address2: v4_1.edmToTs(address2, 'Edm.String') }); },
            Address3: function (address3) { return ({ address3: v4_1.edmToTs(address3, 'Edm.String') }); },
            AddressType: function (addressType) { return ({ addressType: v4_1.edmToTs(addressType, 'Edm.String') }); },
            StreetNo: function (streetNo) { return ({ streetNo: v4_1.edmToTs(streetNo, 'Edm.String') }); },
            ZipCode: function (zipCode) { return ({ zipCode: v4_1.edmToTs(zipCode, 'Edm.String') }); },
            Block: function (block) { return ({ block: v4_1.edmToTs(block, 'Edm.String') }); },
            County: function (county) { return ({ county: v4_1.edmToTs(county, 'Edm.String') }); },
            TaxOffice: function (taxOffice) { return ({ taxOffice: v4_1.edmToTs(taxOffice, 'Edm.String') }); },
            GlobalLocNum: function (globalLocNum) { return ({ globalLocNum: v4_1.edmToTs(globalLocNum, 'Edm.String') }); },
            Remark: function (remark) { return ({ remark: v4_1.edmToTs(remark, 'Edm.String') }); },
            SignatureName: function (signatureName) { return ({ signatureName: v4_1.edmToTs(signatureName, 'Edm.String') }); },
            SalesOrders: function (salesOrders) { return ({ salesOrders: v4_1.edmToTs(salesOrders, 'Edm.String') }); },
            CheckInDate: function (checkInDate) { return ({ checkInDate: v4_1.edmToTs(checkInDate, 'Edm.DateTimeOffset') }); },
            CheckInTime: function (checkInTime) { return ({ checkInTime: v4_1.edmToTs(checkInTime, 'Edm.TimeOfDay') }); },
            CheckInLocation: function (checkInLocation) { return ({ checkInLocation: v4_1.edmToTs(checkInLocation, 'Edm.String') }); },
            CheckInLatitude: function (checkInLatitude) { return ({ checkInLatitude: v4_1.edmToTs(checkInLatitude, 'Edm.String') }); },
            CheckInLongitude: function (checkInLongitude) { return ({ checkInLongitude: v4_1.edmToTs(checkInLongitude, 'Edm.String') }); },
            CheckOutDate: function (checkOutDate) { return ({ checkOutDate: v4_1.edmToTs(checkOutDate, 'Edm.DateTimeOffset') }); },
            CheckOutTime: function (checkOutTime) { return ({ checkOutTime: v4_1.edmToTs(checkOutTime, 'Edm.TimeOfDay') }); }
        });
    }
    ServiceCallScheduling.build = build;
})(ServiceCallScheduling = exports.ServiceCallScheduling || (exports.ServiceCallScheduling = {}));
//# sourceMappingURL=ServiceCallScheduling.js.map